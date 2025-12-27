# Virtual Klipper - 컴포넌트 패턴 가이드

**최종 업데이트**: 2025-12-08
**프로젝트 버전**: 0.0.13

이 문서는 Virtual Klipper 프로젝트에서 Vue 컴포넌트를 작성할 때 따라야 할 패턴, 예시 및 베스트 프랙티스를 제공합니다. 모든 예시는 실제 코드베이스에서 가져왔습니다.

---

## 목차

1. [컴포넌트 파일 구조](#1-컴포넌트-파일-구조)
2. [기본 컴포넌트 패턴](#2-기본-컴포넌트-패턴)
3. [Props 및 이벤트 패턴](#3-props-및-이벤트-패턴)
4. [Watch 및 Computed 속성](#4-watch-및-computed-속성)
5. [BaseMixin 사용법](#5-basemixin-사용법)
6. [Panel 컴포넌트 패턴](#6-panel-컴포넌트-패턴)
7. [아이콘 패턴 (@mdi/js)](#7-아이콘-패턴-mdijs)
8. [Vuex 스토어 통합](#8-vuex-스토어-통합)
9. [반응형 패턴](#9-반응형-패턴)
10. [라이프사이클 훅](#10-라이프사이클-훅)
11. [Mixin 조합](#11-mixin-조합)
12. [베스트 프랙티스](#12-베스트-프랙티스)
13. [안티패턴](#13-안티패턴)

---

## 1. 컴포넌트 파일 구조

### 표준 파일 구조

모든 `.vue` 파일은 다음 순서를 따라야 합니다:

```vue
<!-- 1. Template 섹션 (먼저) -->
<template>
    <div>
        <!-- 컴포넌트 마크업 -->
    </div>
</template>

<!-- 2. Script 섹션 (TypeScript) -->
<script lang="ts">
import Component from 'vue-class-component'
import { Mixins } from 'vue-property-decorator'
import BaseMixin from '@/components/mixins/base'

@Component({
    components: { /* 사용된 컴포넌트 등록 */ }
})
export default class MyComponent extends Mixins(BaseMixin) {
    // 컴포넌트 로직
}
</script>

<!-- 3. Style 섹션 (마지막, scoped) -->
<style scoped>
/* 컴포넌트별 스타일 */
</style>
```

### Import 순서

```typescript
// 1. Vue 코어
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop, Watch, Mixins } from 'vue-property-decorator'

// 2. Mixins
import BaseMixin from '@/components/mixins/base'
import ControlMixin from '@/components/mixins/control'

// 3. 컴포넌트
import Panel from '@/components/ui/Panel.vue'
import TemperatureInput from '@/components/inputs/TemperatureInput.vue'

// 4. @mdi/js 아이콘
import { mdiThermometerLines, mdiHome, mdiCheck } from '@mdi/js'

// 5. 타입/인터페이스
import { PrinterStateMacro, GuiMacrosStateMacrogroupMacro } from '@/store/printer/types'

// 6. 유틸리티 및 기타
import { formatFilesize } from '@/plugins/helpers'
```

### 컴포넌트 위치

| 컴포넌트 타입 | 경로 | 설명 |
|---|---|---|
| **Panels** | `src/components/panels/` | 대시보드에서 사용되는 패널 위젯 |
| **UI Components** | `src/components/ui/` | 재사용 가능한 UI 컴포넌트 |
| **Dialogs** | `src/components/dialogs/` | 모달 다이얼로그 |
| **Inputs** | `src/components/inputs/` | 폼 입력 컴포넌트 |
| **Mixins** | `src/components/mixins/` | 공유 로직 믹스인 |
| **Pages** | `src/pages/` | 라우트 레벨 페이지 컴포넌트 |

---

## 2. 기본 컴포넌트 패턴

### 2.1 Simple Component (입력 컴포넌트)

**파일**: `src/components/inputs/TemperatureInput.vue`

```typescript
<template>
    <div class="temperature-input">
        <v-text-field
            v-model="value"
            :label="name"
            :min="min_temp"
            :max="max_temp"
            type="number"
            outlined
            dense
            hide-details
            @change="submit">
            <template #prepend-inner>
                <v-icon small :color="target > 0 ? 'error' : ''">
                    {{ target > 0 ? mdiFire : mdiSnowflake }}
                </v-icon>
            </template>
        </v-text-field>
    </div>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import { Mixins, Prop, Watch } from 'vue-property-decorator'
import BaseMixin from '@/components/mixins/base'
import ControlMixin from '@/components/mixins/control'
import { mdiSnowflake, mdiFire, mdiMenuDown } from '@mdi/js'

@Component
export default class TemperatureInput extends Mixins(BaseMixin, ControlMixin) {
    // 아이콘 선언
    mdiSnowflake = mdiSnowflake
    mdiFire = mdiFire
    mdiMenuDown = mdiMenuDown

    // 내부 상태
    private value: any = 0

    // Props 선언
    @Prop({ type: String, required: true })
    declare readonly name: string

    @Prop({ type: Number, required: true, default: 0 })
    declare readonly target: number

    @Prop({ type: Number, required: true })
    declare readonly min_temp: number

    @Prop({ type: Number, required: true })
    declare readonly max_temp: number

    @Prop({ type: String, required: true })
    declare readonly command: string

    @Prop({ type: String, required: true })
    declare readonly attributeName: string

    @Prop({ type: Array, default: [] })
    declare presets: number[]

    // 라이프사이클
    mounted() {
        this.value = this.target
    }

    // Watcher
    @Watch('target')
    targetChanged(newVal: number): void {
        this.value = newVal
    }

    // 메서드
    submit(): void {
        const gcode = `${this.command} ${this.attributeName}=${this.value}`
        this.$socket.emit('printer.gcode.script', { script: gcode })
    }
}
</script>

<style scoped>
.temperature-input {
    width: 100%;
}
</style>
```

**특징**:
- 단일 목적 (온도 입력)
- 명확한 Props 정의
- Watcher를 통한 prop 동기화
- 이벤트 대신 직접 소켓 통신

---

### 2.2 Medium Component (다이얼로그)

**파일**: `src/components/dialogs/ConfirmationDialog.vue`

```typescript
<template>
    <v-dialog :value="show" max-width="400" @click:outside="close">
        <panel :icon="mdiAlert" :title="title" card-class="confirmation-dialog">
            <v-card-text>
                <p>{{ text }}</p>
            </v-card-text>
            <v-card-actions>
                <v-spacer />
                <v-btn text @click="close">
                    {{ cancelButtonText }}
                </v-btn>
                <v-btn color="primary" @click="action">
                    {{ actionButtonText }}
                </v-btn>
            </v-card-actions>
        </panel>
    </v-dialog>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import { Prop, Mixins } from 'vue-property-decorator'
import BaseMixin from '@/components/mixins/base'
import Panel from '@/components/ui/Panel.vue'
import { mdiAlert, mdiCloseThick } from '@mdi/js'

@Component({
    components: { Panel },
})
export default class ConfirmationDialog extends Mixins(BaseMixin) {
    mdiAlert = mdiAlert
    mdiCloseThick = mdiCloseThick

    @Prop({ type: Boolean, required: true }) show!: boolean
    @Prop({ type: String, required: true }) title!: string
    @Prop({ type: String, required: true }) text!: string
    @Prop({ type: String, required: true }) actionButtonText!: string
    @Prop({ type: String, required: true }) cancelButtonText!: string

    action() {
        this.$emit('action')
    }

    close() {
        this.$emit('close')
    }
}
</script>
```

**특징**:
- Required props with non-null assertion (`!`)
- 이벤트 기반 통신 (`$emit`)
- 자식 컴포넌트 사용 (Panel)
- 명확한 UI 상태 관리

---

### 2.3 Complex Component (패널)

**파일**: `src/components/panels/ExtruderControlPanel.vue`

```typescript
<template>
    <panel
        v-if="showPanel"
        :icon="mdiPrinter3dNozzle"
        :title="$t('Panels.ExtruderControlPanel.Headline')"
        :collapsible="true"
        card-class="extruder-control-panel">

        <template #buttons>
            <v-menu :offset-y="true">
                <template #activator="{ on, attrs }">
                    <v-btn icon tile v-bind="attrs" v-on="on">
                        <v-icon>{{ mdiDotsVertical }}</v-icon>
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item @click="toggleShowTools">
                        <v-list-item-title>
                            {{ showTools ? $t('Panels.ExtruderControlPanel.HideTools') : $t('Panels.ExtruderControlPanel.ShowTools') }}
                        </v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </template>

        <v-card-text>
            <!-- Extruder controls content -->
            <v-row v-if="showTools && toolchangeMacros.length">
                <v-col v-for="macro in toolchangeMacros" :key="macro.name">
                    <v-btn block @click="executeMacro(macro.name)">
                        {{ formatMacroName(macro.name) }}
                    </v-btn>
                </v-col>
            </v-row>

            <!-- Extrusion controls -->
            <v-row>
                <v-col>
                    <v-btn
                        :disabled="!extrudePossible"
                        @click="extrude(25)">
                        {{ $t('Panels.ExtruderControlPanel.Extrude') }} 25mm
                    </v-btn>
                </v-col>
            </v-row>

            <!-- Load/Unload Filament -->
            <v-row v-if="loadFilamentMacro">
                <v-col>
                    <v-btn
                        :disabled="!canExecuteLoadMacro"
                        block
                        @click="executeMacro(loadFilamentMacro.name)">
                        <v-icon left>{{ mdiTrayArrowDown }}</v-icon>
                        {{ loadFilamentMacro.name }}
                    </v-btn>
                </v-col>
            </v-row>
        </v-card-text>
    </panel>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import { Mixins } from 'vue-property-decorator'
import BaseMixin from '@/components/mixins/base'
import ControlMixin from '@/components/mixins/control'
import ExtruderMixin from '@/components/mixins/extruder'
import Panel from '@/components/ui/Panel.vue'
import { mdiPrinter3dNozzle, mdiDotsVertical, mdiTrayArrowDown } from '@mdi/js'
import { PrinterStateMacro } from '@/store/printer/types'

@Component({
    components: {
        Panel,
    },
})
export default class ExtruderControlPanel extends Mixins(BaseMixin, ControlMixin, ExtruderMixin) {
    // 아이콘
    mdiPrinter3dNozzle = mdiPrinter3dNozzle
    mdiDotsVertical = mdiDotsVertical
    mdiTrayArrowDown = mdiTrayArrowDown

    // 내부 상태
    private heatWaitGcodes = ['printer.extruder.can_extrude', 'TEMPERATURE_WAIT', 'M109']

    // Computed properties
    get showPanel(): boolean {
        return this.klipperReadyForGui && this.extruders.length > 0
    }

    get loadFilamentMacro(): PrinterStateMacro | undefined {
        const macros = ['LOAD_FILAMENT', 'FILAMENT_LOAD']
        return this.macros.find((macro: PrinterStateMacro) =>
            macros.includes(macro.name.toUpperCase())
        )
    }

    get unloadFilamentMacro(): PrinterStateMacro | undefined {
        const macros = ['UNLOAD_FILAMENT', 'FILAMENT_UNLOAD']
        return this.macros.find((macro: PrinterStateMacro) =>
            macros.includes(macro.name.toUpperCase())
        )
    }

    get showTools(): boolean {
        if (this.toolchangeMacros.length < 1) return false
        return this.$store.state.gui.view.extruder.showTools ?? true
    }

    get toolchangeMacros(): PrinterStateMacro[] {
        return this.macros.filter((macro: PrinterStateMacro) =>
            macro.name.toUpperCase().startsWith('T') &&
            /^T\d+$/.test(macro.name.toUpperCase())
        )
    }

    get extrudePossible(): boolean {
        return this.printer_state === 'ready' || this.printer_state === 'paused'
    }

    get canExecuteLoadMacro(): boolean {
        if (this.extrudePossible) return true

        return this.heatWaitGcodes.some((gcode) =>
            this.loadFilamentMacro?.prop.gcode.includes(gcode)
        )
    }

    // 메서드
    extrude(amount: number) {
        const gcode = `EXTRUDE LENGTH=${amount}`
        this.$socket.emit('printer.gcode.script', { script: gcode })
    }

    executeMacro(name: string) {
        this.$socket.emit('printer.gcode.script', { script: name })
    }

    formatMacroName(name: string): string {
        return name.replace(/_/g, ' ')
    }

    toggleShowTools() {
        this.$store.dispatch('gui/saveSetting', {
            name: 'view.extruder.showTools',
            value: !this.showTools,
        })
    }
}
</script>

<style scoped>
/* 패널별 스타일 */
</style>
```

**특징**:
- 3개의 Mixin 조합 (`BaseMixin`, `ControlMixin`, `ExtruderMixin`)
- 복잡한 computed properties
- 조건부 렌더링 (`v-if`)
- Vuex 상태 관리
- i18n 지원
- Panel 슬롯 활용 (buttons)

---

## 3. Props 및 이벤트 패턴

### 3.1 Props 타입 정의

```typescript
// Required string prop
@Prop({ type: String, required: true })
declare readonly name: string

// Number with default
@Prop({ type: Number, required: true, default: 0 })
declare readonly target: number

// Optional with null default
@Prop({ default: null })
declare readonly max: number | null

// Array with default
@Prop({ type: Array, default: () => [] })
declare presets: number[]

// Boolean with default
@Prop({ type: Boolean, required: false, default: false })
declare readonly disabled: boolean

// Complex interface types
@Prop({ required: true })
declare readonly macro: GuiMacrosStateMacrogroupMacro | PrinterStateMacro

// TranslateResult for i18n
@Prop({ default: null })
declare readonly alias: string | TranslateResult

// Non-null assertion for required props
@Prop({ type: String, required: true })
title!: string
```

### 3.2 이벤트 방출 패턴

```typescript
// 단순 이벤트
action() {
    this.$emit('action')
}

close() {
    this.$emit('close')
}

// 데이터와 함께 이벤트
submit(): void {
    this.$emit('submit', {
        name: this.param,
        value: this.inputValue
    })
}

// 복잡한 객체와 함께
saveSettings() {
    this.$emit('save', {
        enabled: this.enabled,
        settings: {
            temperature: this.temperature,
            speed: this.speed,
        }
    })
}
```

### 3.3 Props Validation

```typescript
@Prop({
    type: Number,
    required: true,
    validator: (value: number) => value >= 0 && value <= 300
})
declare readonly temperature: number

@Prop({
    type: String,
    validator: (value: string) => ['small', 'medium', 'large'].includes(value)
})
declare readonly size: string
```

---

## 4. Watch 및 Computed 속성

### 4.1 Watch 패턴

```typescript
// Simple watch - 값 동기화
@Watch('target')
targetChanged(newVal: number): void {
    this.value = newVal
}

// Watch with old value
@Watch('color')
colorChanged(newVal: string, oldVal: string) {
    console.log(`Color changed from ${oldVal} to ${newVal}`)
    this.internalColor = newVal !== '' ? newVal : this.defaultColor
}

// Watch with complex logic
@Watch('klipperMacro')
klipperMacroChange() {
    this.refreshParams()
}

refreshParams() {
    this.paramArray.splice(0, this.paramArray.length)
    this.params = {}

    if (this.klipperMacro?.params !== null) {
        Object.keys(this.klipperMacro.params).forEach((name: string) => {
            if (!name.startsWith('_')) {
                this.paramArray.push(name)
                this.params[name] = {
                    type: this.klipperMacro.params[name].type,
                    default: this.klipperMacro.params[name].default,
                    value: '',
                }
            }
        })
    }
}

// Watch with immediate option
@Watch('show', { immediate: true })
onShowChanged(newVal: boolean) {
    if (newVal) {
        this.initialize()
    }
}

// Watch nested property
@Watch('$store.state.printer.print_stats.state')
onPrinterStateChanged(newVal: string) {
    this.updateStatus(newVal)
}
```

### 4.2 Computed Properties 패턴

```typescript
// Simple boolean computed
get boolTempchart(): boolean {
    return this.$store.state.gui.view.tempchart.boolTempchart ?? false
}

get showPanel(): boolean {
    return this.klipperReadyForGui && this.extruders.length > 0
}

// Computed with complex logic
get loadFilamentMacro(): PrinterStateMacro | undefined {
    const macros = ['LOAD_FILAMENT', 'FILAMENT_LOAD']
    return this.macros.find((macro: PrinterStateMacro) =>
        macros.includes(macro.name.toUpperCase())
    )
}

get canExecuteLoadMacro(): boolean {
    if (this.extrudePossible) return true

    return this.heatWaitGcodes.some((gcode) =>
        this.loadFilamentMacro?.prop.gcode.includes(gcode)
    )
}

// Computed with data transformation
get helplist() {
    const commands: { [key: string]: { help?: string } } =
        this.$store.state.printer.gcode?.commands ?? {}

    const helplist: { command: string; help: string }[] = []

    for (const [key, values] of Object.entries(commands)) {
        helplist.push({
            command: key,
            help: values.help ?? ''
        })
    }

    return helplist.sort((a, b) => a.command.localeCompare(b.command))
}

// Computed with filter and map
get macros() {
    const macros = this.$store.getters['printer/getMacros']
    return macros
        .filter((macro: PrinterStateMacro) =>
            !this.hiddenMacros.includes(macro.name.toLowerCase())
        )
        .sort((a, b) => a.name.localeCompare(b.name))
}

// Computed with fallback values
get filamentDiameter(): number {
    return this.activeExtruderSettings?.filament_diameter ?? 1.75
}

get nozzleDiameter(): number {
    return this.activeExtruderSettings?.nozzle_diameter ?? 0.4
}

get minExtrudeTemp(): number {
    return this.activeExtruderSettings?.min_extrude_temp ?? 170
}

// Getter/Setter pattern
get expand() {
    return this.$store.getters['gui/getPanelExpand'](this.cardClass, this.viewport)
}

set expand(newVal) {
    this.$store.dispatch('gui/saveExpandPanel', {
        name: this.cardClass,
        value: newVal,
        viewport: this.viewport
    })
}

// Computed returning reactive component data
get currentTemperature(): string {
    const temp = this.$store.state.printer[this.attributeName]?.temperature ?? 0
    return temp.toFixed(1)
}
```

---

## 5. BaseMixin 사용법

**파일**: `src/components/mixins/base.ts`

BaseMixin은 모든 컴포넌트에서 확장해야 하는 핵심 Mixin입니다.

### 5.1 BaseMixin이 제공하는 기능

```typescript
@Component
export default class BaseMixin extends Vue {
    // ===== 소켓 및 연결 상태 =====
    get socketIsConnected(): boolean {
        return this.$store.state.socket.isConnected ?? false
    }

    get klippyIsConnected(): boolean {
        return this.$store.state.server.klippy_connected ?? false
    }

    get klipperReadyForGui(): boolean {
        return this.socketIsConnected && this.klippyIsConnected && this.klipperState !== 'error'
    }

    // ===== 프린터 상태 =====
    get printer_state(): string {
        const printer_state = this.$store.state.printer.print_stats?.state
            ?? this.$store.state.printer.idle_timeout?.state ?? ''

        const timelapse_pause = this.$store.state.printer['gcode_macro TIMELAPSE_TAKE_FRAME']?.is_paused ?? false

        return printer_state === 'paused' && timelapse_pause ? 'printing' : printer_state
    }

    get klipperState(): string {
        return this.$store.state.server.klippy_state ?? ''
    }

    // ===== 반응형 브레이크포인트 =====
    get isMobile() {
        return this.$vuetify.breakpoint.mobile
    }

    get isTablet() {
        return this.$vuetify.breakpoint.smAndUp && !this.isDesktop && !this.isWidescreen
    }

    get isDesktop() {
        return this.$vuetify.breakpoint.lgAndUp && !this.isWidescreen
    }

    get isWidescreen() {
        return this.$vuetify.breakpoint.xl
    }

    // ===== 현재 뷰포트 =====
    get viewport(): string {
        if (this.isMobile) return 'mobile'
        if (this.isTablet) return 'tablet'
        if (this.isDesktop) return 'desktop'
        if (this.isWidescreen) return 'widescreen'
        return 'mobile'
    }

    // ===== 유틸리티 메서드 =====
    formatDate(value: number | Date, format: string | null = null): string {
        // 날짜 포맷팅 로직
    }

    formatTime(value: number | Date, boolSeconds = false): string {
        // 시간 포맷팅 로직
    }

    formatDateTime(value: number, boolSeconds = false): string {
        return `${this.formatDate(value)} ${this.formatTime(value, boolSeconds)}`
    }

    // ===== 전원 상태 =====
    get moonrakerComponents() {
        return this.$store.state.server?.components ?? []
    }

    get powerDevicesExist(): boolean {
        return this.moonrakerComponents.includes('power')
    }
}
```

### 5.2 BaseMixin 사용 예시

```typescript
import Component from 'vue-class-component'
import { Mixins } from 'vue-property-decorator'
import BaseMixin from '@/components/mixins/base'

@Component
export default class MyComponent extends Mixins(BaseMixin) {
    // BaseMixin의 모든 기능을 사용 가능

    mounted() {
        // 연결 상태 확인
        if (this.klipperReadyForGui) {
            console.log('Klipper is ready!')
        }

        // 반응형 브레이크포인트
        if (this.isMobile) {
            console.log('Mobile view')
        }

        // 프린터 상태
        console.log(`Printer state: ${this.printer_state}`)

        // 날짜 포맷팅
        const now = Date.now()
        console.log(this.formatDateTime(now))
    }

    get isReady(): boolean {
        // BaseMixin의 computed 사용
        return this.socketIsConnected && this.printer_state === 'ready'
    }
}
```

---

## 6. Panel 컴포넌트 패턴

**파일**: `src/components/ui/Panel.vue`

Panel은 모든 대시보드 패널의 래퍼 컴포넌트입니다.

### 6.1 Panel Props

```typescript
@Prop({ default: null })
declare readonly icon: string | null

@Prop({ required: true, default: '' })
declare readonly title: string | TranslateResult

@Prop({ default: false })
declare readonly collapsible: boolean

@Prop({ required: true })
declare readonly cardClass: string

@Prop({ default: false })
declare readonly hideButtonsOnCollapse: boolean
```

### 6.2 Panel 슬롯

- `icon`: 커스텀 아이콘 (기본 아이콘 대체)
- `buttons-left`: 왼쪽 버튼 영역
- `buttons-title`: 제목 옆 버튼 영역
- `buttons`: 메인 버튼 영역 (오른쪽)
- `default`: 패널 본문 콘텐츠

### 6.3 Panel 사용 예시

```vue
<template>
    <!-- 기본 패널 -->
    <panel
        :icon="mdiThermometerLines"
        :title="$t('Panels.TemperaturePanel.Headline')"
        :collapsible="true"
        card-class="temperature-panel">

        <v-card-text>
            <!-- 패널 콘텐츠 -->
        </v-card-text>
    </panel>

    <!-- 버튼이 있는 패널 -->
    <panel
        :icon="mdiPrinter3dNozzle"
        :title="$t('Panels.ExtruderControlPanel.Headline')"
        :collapsible="true"
        card-class="extruder-control-panel">

        <template #buttons>
            <v-btn icon @click="openSettings">
                <v-icon>{{ mdiCog }}</v-icon>
            </v-btn>

            <v-menu :offset-y="true">
                <template #activator="{ on, attrs }">
                    <v-btn icon v-bind="attrs" v-on="on">
                        <v-icon>{{ mdiDotsVertical }}</v-icon>
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item @click="doSomething">
                        <v-list-item-title>Action</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </template>

        <v-card-text>
            <!-- 패널 콘텐츠 -->
        </v-card-text>
    </panel>

    <!-- 커스텀 아이콘 슬롯 -->
    <panel
        :title="$t('Panels.CustomPanel.Headline')"
        :collapsible="true"
        card-class="custom-panel">

        <template #icon>
            <img src="@/assets/custom-icon.svg" width="24" height="24" />
        </template>

        <v-card-text>
            <!-- 패널 콘텐츠 -->
        </v-card-text>
    </panel>

    <!-- 조건부 렌더링 -->
    <panel
        v-if="showPanel"
        :icon="mdiGauge"
        :title="$t('Panels.StatusPanel.Headline')"
        :collapsible="true"
        card-class="status-panel">

        <v-card-text>
            <!-- 패널 콘텐츠 -->
        </v-card-text>
    </panel>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import { Mixins } from 'vue-property-decorator'
import BaseMixin from '@/components/mixins/base'
import Panel from '@/components/ui/Panel.vue'
import {
    mdiThermometerLines,
    mdiPrinter3dNozzle,
    mdiCog,
    mdiDotsVertical,
    mdiGauge
} from '@mdi/js'

@Component({
    components: { Panel },
})
export default class MyPanelComponent extends Mixins(BaseMixin) {
    mdiThermometerLines = mdiThermometerLines
    mdiPrinter3dNozzle = mdiPrinter3dNozzle
    mdiCog = mdiCog
    mdiDotsVertical = mdiDotsVertical
    mdiGauge = mdiGauge

    get showPanel(): boolean {
        return this.klipperReadyForGui
    }

    openSettings() {
        // 설정 열기
    }

    doSomething() {
        // 액션 실행
    }
}
</script>
```

### 6.4 Panel 확장/축소 상태

Panel의 확장/축소 상태는 자동으로 Vuex에 저장됩니다:

```typescript
// Panel.vue 내부
get expand() {
    return this.$store.getters['gui/getPanelExpand'](this.cardClass, this.viewport)
}

set expand(newVal) {
    this.$store.dispatch('gui/saveExpandPanel', {
        name: this.cardClass,
        value: newVal,
        viewport: this.viewport
    })
}
```

사용자가 패널을 접었다 펼치면 뷰포트별로 상태가 저장되어 새로고침 후에도 유지됩니다.

---

## 7. 아이콘 패턴 (@mdi/js)

Virtual Klipper는 **폰트 기반 아이콘이 아닌** `@mdi/js`의 SVG 경로 아이콘을 사용합니다.

### 7.1 아이콘 Import 및 사용

```typescript
import {
    mdiHome,
    mdiCheck,
    mdiClose,
    mdiThermometerLines,
    mdiPrinter3dNozzle,
    mdiDotsVertical,
    mdiChevronDown
} from '@mdi/js'

@Component
export default class MyComponent extends Mixins(BaseMixin) {
    // 클래스 프로퍼티로 할당 (템플릿에서 사용 가능하도록)
    mdiHome = mdiHome
    mdiCheck = mdiCheck
    mdiClose = mdiClose
    mdiThermometerLines = mdiThermometerLines
    mdiPrinter3dNozzle = mdiPrinter3dNozzle
    mdiDotsVertical = mdiDotsVertical
    mdiChevronDown = mdiChevronDown
}
```

### 7.2 템플릿에서 아이콘 사용

```vue
<template>
    <!-- v-icon 컴포넌트와 함께 -->
    <v-icon>{{ mdiHome }}</v-icon>

    <!-- 크기 및 색상 지정 -->
    <v-icon small color="error">{{ mdiClose }}</v-icon>
    <v-icon large color="primary">{{ mdiCheck }}</v-icon>

    <!-- 버튼 내부 -->
    <v-btn icon>
        <v-icon>{{ mdiDotsVertical }}</v-icon>
    </v-btn>

    <v-btn color="primary">
        <v-icon left>{{ mdiCheck }}</v-icon>
        Confirm
    </v-btn>

    <!-- 조건부 아이콘 -->
    <v-icon :color="isActive ? 'success' : 'grey'">
        {{ isActive ? mdiCheck : mdiClose }}
    </v-icon>

    <!-- List item에서 -->
    <v-list-item>
        <v-list-item-icon>
            <v-icon>{{ mdiHome }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Home</v-list-item-title>
    </v-list-item>

    <!-- Chip에서 -->
    <v-chip>
        <v-icon left small>{{ mdiThermometerLines }}</v-icon>
        Temperature
    </v-chip>
</template>
```

### 7.3 동적 아이콘

```typescript
import { mdiSnowflake, mdiFire } from '@mdi/js'

@Component
export default class TemperatureDisplay extends Mixins(BaseMixin) {
    mdiSnowflake = mdiSnowflake
    mdiFire = mdiFire

    @Prop({ type: Number, required: true })
    declare readonly temperature: number

    get temperatureIcon(): string {
        return this.temperature > 50 ? this.mdiFire : this.mdiSnowflake
    }

    get temperatureColor(): string {
        return this.temperature > 50 ? 'error' : 'primary'
    }
}
```

```vue
<template>
    <v-icon :color="temperatureColor">
        {{ temperatureIcon }}
    </v-icon>
</template>
```

### 7.4 아이콘 찾기

아이콘은 [Material Design Icons](https://pictogrammers.com/library/mdi/)에서 검색할 수 있습니다.

아이콘 이름 규칙:
- 웹사이트: `thermometer-lines`
- Import: `mdiThermometerLines` (camelCase with `mdi` prefix)

---

## 8. Vuex 스토어 통합

### 8.1 State 접근

```typescript
// Direct state access
get activeExtruder(): string {
    return this.$store.state.printer.toolhead?.extruder ?? 'extruder'
}

// Nested state with fallback
get moonrakerComponents() {
    return this.$store.state.server?.components ?? []
}

// Complex nested access
get activeExtruderSettings(): any {
    return this.$store.state.printer.configfile?.settings?.[this.activeExtruder] ?? {}
}

// Multiple state values
get printerStatus() {
    return {
        state: this.$store.state.printer.print_stats?.state ?? 'unknown',
        temperature: this.$store.state.printer.extruder?.temperature ?? 0,
        target: this.$store.state.printer.extruder?.target ?? 0,
    }
}
```

### 8.2 Getters 사용

```typescript
// Simple getter
get extruders(): PrinterStateExtruder[] {
    return this.$store.getters['printer/getExtruders']
}

get macros() {
    return this.$store.getters['printer/getMacros']
}

// Getter with parameter
get panelLayout() {
    return this.$store.getters['gui/getPanels'](this.viewport, 0, true)
}

// Custom transformation after getter
get visibleMacros() {
    const allMacros = this.$store.getters['printer/getMacros']
    return allMacros.filter((macro: PrinterStateMacro) =>
        !macro.name.startsWith('_')
    )
}
```

### 8.3 Actions 디스패치

```typescript
// Simple action dispatch
doHome() {
    this.$store.dispatch('server/addEvent', {
        message: 'G28',
        type: 'command'
    })
}

// Action with complex payload
saveSettings() {
    this.$store.dispatch('gui/saveSetting', {
        name: 'view.extruder.showTools',
        value: !this.showTools,
    })
}

// Multiple dispatches
async loadData() {
    await this.$store.dispatch('printer/init')
    await this.$store.dispatch('files/loadFiles')
}

// Action in setter
set selectedFile(filename: string) {
    this.$store.dispatch('files/setSelectedFile', filename)
}
```

### 8.4 소켓 통신과 스토어

```typescript
// Socket emit (direct printer control)
extrude(amount: number) {
    const gcode = `EXTRUDE LENGTH=${amount}`
    this.$socket.emit('printer.gcode.script', {
        script: gcode
    }, {
        loading: 'extruding'
    })
}

// Socket emit + Store dispatch
doHomeAll() {
    // 이벤트 로그에 추가
    this.$store.dispatch('server/addEvent', {
        message: 'G28',
        type: 'command'
    })

    // 실제 명령 전송
    this.$socket.emit('printer.gcode.script', {
        script: 'G28'
    }, {
        loading: 'homeAll'
    })
}

// Multiple socket operations
async emergencyStop() {
    this.$socket.emit('printer.emergency_stop')
    await this.$store.dispatch('gui/setEmergencyStopActive', true)
}
```

---

## 9. 반응형 패턴

### 9.1 BaseMixin의 반응형 프로퍼티

BaseMixin은 4가지 반응형 브레이크포인트를 제공합니다:

```typescript
// BaseMixin에서 제공
get isMobile() {
    return this.$vuetify.breakpoint.mobile  // < 600px
}

get isTablet() {
    return this.$vuetify.breakpoint.smAndUp && !this.isDesktop && !this.isWidescreen
    // 600px - 1264px
}

get isDesktop() {
    return this.$vuetify.breakpoint.lgAndUp && !this.isWidescreen
    // 1264px - 1904px
}

get isWidescreen() {
    return this.$vuetify.breakpoint.xl  // >= 1904px
}

get viewport(): string {
    if (this.isMobile) return 'mobile'
    if (this.isTablet) return 'tablet'
    if (this.isDesktop) return 'desktop'
    if (this.isWidescreen) return 'widescreen'
    return 'mobile'
}
```

### 9.2 템플릿에서 반응형 사용

```vue
<template>
    <div>
        <!-- 브레이크포인트별 레이아웃 -->
        <v-row v-if="isMobile">
            <!-- 모바일 레이아웃 (1열) -->
            <v-col cols="12">
                <temperature-panel />
            </v-col>
        </v-row>

        <v-row v-else-if="isTablet">
            <!-- 태블릿 레이아웃 (2열) -->
            <v-col cols="6">
                <temperature-panel />
            </v-col>
            <v-col cols="6">
                <extruder-panel />
            </v-col>
        </v-row>

        <v-row v-else-if="isDesktop">
            <!-- 데스크톱 레이아웃 (3열) -->
            <v-col cols="4">
                <temperature-panel />
            </v-col>
            <v-col cols="4">
                <extruder-panel />
            </v-col>
            <v-col cols="4">
                <status-panel />
            </v-col>
        </v-row>

        <v-row v-else-if="isWidescreen">
            <!-- 와이드스크린 레이아웃 (4열) -->
            <v-col cols="3">
                <temperature-panel />
            </v-col>
            <v-col cols="3">
                <extruder-panel />
            </v-col>
            <v-col cols="3">
                <status-panel />
            </v-col>
            <v-col cols="3">
                <toolhead-panel />
            </v-col>
        </v-row>
    </div>
</template>
```

### 9.3 Computed 프로퍼티로 반응형 데이터

```typescript
@Component
export default class Dashboard extends Mixins(BaseMixin) {
    // 뷰포트별 레이아웃
    get mobileLayout() {
        return this.$store.getters['gui/getPanels']('mobile', 0, true)
    }

    get tabletLayout() {
        return this.$store.getters['gui/getPanels']('tablet', 0, true)
    }

    get desktopLayout() {
        return this.$store.getters['gui/getPanels']('desktop', 0, true)
    }

    get widescreenLayout() {
        return this.$store.getters['gui/getPanels']('widescreen', 0, true)
    }

    // 뷰포트별 열 개수
    get columns(): number {
        if (this.isMobile) return 1
        if (this.isTablet) return 2
        if (this.isDesktop) return 3
        if (this.isWidescreen) return 4
        return 1
    }
}
```

### 9.4 반응형 컴포넌트 크기

```typescript
@Component
export default class ResponsiveComponent extends Mixins(BaseMixin) {
    get buttonSize(): string {
        return this.isMobile ? 'small' : 'default'
    }

    get cardElevation(): number {
        return this.isMobile ? 0 : 2
    }

    get showDetails(): boolean {
        // 모바일에서는 상세 정보 숨기기
        return !this.isMobile
    }
}
```

```vue
<template>
    <v-card :elevation="cardElevation">
        <v-card-title>Title</v-card-title>
        <v-card-text>
            Content
            <div v-if="showDetails">
                <!-- 상세 정보 -->
            </div>
        </v-card-text>
        <v-card-actions>
            <v-btn :size="buttonSize">Action</v-btn>
        </v-card-actions>
    </v-card>
</template>
```

### 9.5 ResizeObserver를 사용한 커스텀 반응형

**파일**: `src/components/mixins/responsive.ts`

```typescript
import { Component, Prop } from 'vue-property-decorator'
import { throttle } from 'lodash-es'
import BaseMixin from '@/components/mixins/base'

interface ResponsiveElement {
    is: {
        [key: string]: boolean
    }
}

@Component
export default class ResponsiveMixin extends BaseMixin {
    @Prop()
    protected declare breakpoints: {
        [key: string]: (el: DOMRect) => boolean
    }

    observer?: ResizeObserver
    el: ResponsiveElement = { is: {} }

    mounted() {
        if (this.breakpoints) {
            this.$nextTick(() => {
                this.observer = new ResizeObserver(throttle(this.onResize, 50))
                if (this.$el instanceof Element) {
                    this.observer.observe(this.$el)
                }
            })
        }
    }

    beforeDestroy() {
        if (this.$el instanceof Element) {
            this.observer?.unobserve(this.$el)
        }
    }

    private onResize(entries: ResizeObserverEntry[]) {
        if (entries[0].contentRect.height === 0 && entries[0].contentRect.width === 0) {
            return
        }

        const cr = entries[0].contentRect
        const conds = this.breakpoints

        for (const breakpoint in conds) {
            this.$set(this.el.is, breakpoint, conds[breakpoint](cr))
        }
    }
}
```

사용 예시:

```typescript
import ResponsiveMixin from '@/components/mixins/responsive'

@Component
export default class MyComponent extends Mixins(ResponsiveMixin) {
    breakpoints = {
        narrow: (el: DOMRect) => el.width < 400,
        wide: (el: DOMRect) => el.width >= 400,
    }
}
```

```vue
<template>
    <div>
        <div v-if="el.is.narrow">Narrow view</div>
        <div v-else-if="el.is.wide">Wide view</div>
    </div>
</template>
```

---

## 10. 라이프사이클 훅

### 10.1 Created

컴포넌트 인스턴스가 생성된 직후 호출됩니다. DOM은 아직 마운트되지 않았습니다.

```typescript
created(): void {
    // Props 초기화
    this.value = this.target.toString()

    // 데이터 로드
    this.loadInitialData()

    // 이벤트 리스너 등록 (전역)
    window.addEventListener('resize', this.handleResize)
}

async created(): Promise<void> {
    // 비동기 초기화
    await this.fetchUserSettings()
    this.applySettings()
}
```

### 10.2 Mounted

컴포넌트가 DOM에 마운트된 후 호출됩니다. DOM 요소 접근 가능.

```typescript
mounted() {
    // DOM 요소 접근
    this.value = this.target

    // 포커스 설정
    if (this.$refs.input) {
        (this.$refs.input as HTMLElement).focus()
    }
}

mounted() {
    // $nextTick으로 DOM 렌더링 완료 보장
    this.$nextTick(() => {
        this.observer = new ResizeObserver(throttle(this.onResize, 50))
        if (this.$el instanceof Element) {
            this.observer.observe(this.$el)
        }
    })
}

async mounted(): Promise<void> {
    // 비동기 작업
    await this.initializeChart()
    this.startPolling()
}
```

### 10.3 BeforeDestroy

컴포넌트가 제거되기 전 호출됩니다. 클린업 작업을 수행합니다.

```typescript
beforeDestroy() {
    // ResizeObserver 정리
    if (this.$el instanceof Element) {
        this.observer?.unobserve(this.$el)
    }
}

beforeDestroy() {
    // 이벤트 리스너 제거
    window.removeEventListener('resize', this.handleResize)

    // 타이머 정리
    if (this.intervalId) {
        clearInterval(this.intervalId)
    }
}

beforeDestroy() {
    // WebSocket 구독 해제
    this.$socket.off('printer.status', this.onPrinterStatus)

    // 메모리 정리
    this.largeDataArray = []
}
```

### 10.4 Updated

컴포넌트의 데이터가 변경되어 DOM이 업데이트된 후 호출됩니다.

```typescript
updated() {
    // DOM 변경 후 작업
    this.scrollToBottom()
}

updated() {
    this.$nextTick(() => {
        // 모든 자식 컴포넌트도 업데이트 완료
        this.recalculateLayout()
    })
}
```

### 10.5 라이프사이클 조합 예시

```typescript
@Component
export default class ComplexComponent extends Mixins(BaseMixin) {
    private intervalId: number | null = null
    private observer: ResizeObserver | null = null

    created(): void {
        // 초기 데이터 설정
        this.loadSettings()
    }

    mounted(): void {
        // DOM 마운트 후 작업
        this.$nextTick(() => {
            // ResizeObserver 시작
            this.observer = new ResizeObserver(this.onResize)
            this.observer.observe(this.$el as Element)
        })

        // 폴링 시작
        this.intervalId = window.setInterval(() => {
            this.fetchUpdates()
        }, 5000)

        // 소켓 이벤트 리스너
        this.$socket.on('data.update', this.onDataUpdate)
    }

    beforeDestroy(): void {
        // 모든 리소스 정리
        if (this.observer) {
            this.observer.disconnect()
        }

        if (this.intervalId !== null) {
            clearInterval(this.intervalId)
        }

        this.$socket.off('data.update', this.onDataUpdate)
    }

    private onResize(entries: ResizeObserverEntry[]) {
        // Resize 처리
    }

    private onDataUpdate(data: any) {
        // 데이터 업데이트 처리
    }
}
```

---

## 11. Mixin 조합

### 11.1 단일 Mixin

```typescript
import BaseMixin from '@/components/mixins/base'

@Component
export default class SimplePanel extends Mixins(BaseMixin) {
    // BaseMixin의 기능만 사용
}
```

### 11.2 Multiple Mixins

```typescript
import BaseMixin from '@/components/mixins/base'
import ControlMixin from '@/components/mixins/control'

@Component
export default class ControlPanel extends Mixins(BaseMixin, ControlMixin) {
    // BaseMixin + ControlMixin 기능 사용
}
```

### 11.3 3개 이상 Mixin 조합

```typescript
import BaseMixin from '@/components/mixins/base'
import ControlMixin from '@/components/mixins/control'
import ExtruderMixin from '@/components/mixins/extruder'

@Component
export default class ExtruderControlPanel extends Mixins(BaseMixin, ControlMixin, ExtruderMixin) {
    // BaseMixin + ControlMixin + ExtruderMixin 기능 사용

    // ExtruderMixin의 computed 사용
    get currentExtruder() {
        return this.activeExtruder  // ExtruderMixin에서 제공
    }

    // ControlMixin의 메서드 사용
    doHome() {
        this.sendGcode('G28')  // ControlMixin에서 제공
    }
}
```

### 11.4 주요 Mixin 설명

#### BaseMixin
**파일**: `src/components/mixins/base.ts`

모든 컴포넌트가 확장해야 하는 기본 Mixin입니다.

**제공 기능**:
- 소켓 연결 상태 (`socketIsConnected`, `klippyIsConnected`)
- 프린터 상태 (`printer_state`, `klipperState`)
- 반응형 브레이크포인트 (`isMobile`, `isTablet`, `isDesktop`, `isWidescreen`)
- 날짜/시간 포맷팅 (`formatDate`, `formatTime`, `formatDateTime`)
- 뷰포트 정보 (`viewport`)

#### ControlMixin
**파일**: `src/components/mixins/control.ts`

프린터 제어 기능을 제공합니다.

**제공 기능**:
- G-Code 전송 (`sendGcode`)
- 축 이동 (`moveAxis`)
- 홈 제어 (`doHome`, `doHomeX`, `doHomeY`, `doHomeZ`)
- 긴급 정지 (`emergencyStop`)
- 프린터 상태 제어

#### ExtruderMixin
**파일**: `src/components/mixins/extruder.ts`

익스트루더 관련 정보를 제공합니다.

**제공 기능**:
- 활성 익스트루더 (`activeExtruder`)
- 익스트루더 설정 (`activeExtruderSettings`)
- 필라멘트 직경 (`filamentDiameter`)
- 노즐 직경 (`nozzleDiameter`)
- 최소 익스트루드 온도 (`minExtrudeTemp`)

#### ConsoleMixin
**파일**: `src/components/mixins/console.ts`

콘솔 설정을 제공합니다.

**제공 기능**:
- 콘솔 필터 설정
- 명령 히스토리
- 자동완성 데이터

#### DashboardMixin
**파일**: `src/components/mixins/dashboard.ts`

대시보드 레이아웃 관리를 제공합니다.

**제공 기능**:
- 패널 이름 목록
- 패널 아이콘 매핑
- 레이아웃 정보

### 11.5 Mixin 상속 체인

```typescript
// ResponsiveMixin extends BaseMixin
@Component
export default class ResponsiveMixin extends BaseMixin {
    // BaseMixin의 모든 기능 + 추가 기능
}

// 사용
export default class MyComponent extends Mixins(ResponsiveMixin) {
    // BaseMixin + ResponsiveMixin 기능 모두 사용 가능
}
```

---

## 12. 베스트 프랙티스

### 12.1 컴포넌트 작성

✅ **DO**:

```typescript
// 1. 항상 BaseMixin 확장
@Component
export default class MyPanel extends Mixins(BaseMixin) { }

// 2. 명확한 Props 타입
@Prop({ type: String, required: true })
declare readonly name: string

// 3. Computed properties 활용
get isReady(): boolean {
    return this.socketIsConnected && this.printer_state === 'ready'
}

// 4. 반응형 브레이크포인트 사용
get columns(): number {
    if (this.isMobile) return 1
    if (this.isTablet) return 2
    return 3
}

// 5. Scoped 스타일
<style scoped>
.my-component {
    /* ... */
}
</style>

// 6. i18n 사용
<template>
    <h1>{{ $t('Panels.MyPanel.Title') }}</h1>
</template>

// 7. Optional chaining 및 fallback
get temperature(): number {
    return this.$store.state.printer.extruder?.temperature ?? 0
}

// 8. 아이콘은 @mdi/js에서 import
import { mdiHome } from '@mdi/js'

export default class MyComponent extends Mixins(BaseMixin) {
    mdiHome = mdiHome
}

// 9. 명확한 이벤트 이름
this.$emit('update:value', newValue)
this.$emit('close')
this.$emit('submit', data)

// 10. 타입 안전성
interface FormData {
    name: string
    value: number
}

submit(data: FormData) {
    this.$emit('submit', data)
}
```

### 12.2 상태 관리

✅ **DO**:

```typescript
// 1. Vuex 사용
get macros() {
    return this.$store.getters['printer/getMacros']
}

// 2. Getter/Setter 패턴
get expand() {
    return this.$store.getters['gui/getPanelExpand'](this.cardClass, this.viewport)
}

set expand(newVal) {
    this.$store.dispatch('gui/saveExpandPanel', {
        name: this.cardClass,
        value: newVal,
        viewport: this.viewport
    })
}

// 3. Action dispatch
saveSettings() {
    this.$store.dispatch('gui/saveSetting', {
        name: 'view.tempchart.enabled',
        value: this.enabled,
    })
}
```

### 12.3 성능 최적화

✅ **DO**:

```typescript
// 1. Computed properties 캐싱 활용
get filteredMacros() {
    return this.macros.filter(m => !m.name.startsWith('_'))
}

// 2. v-show vs v-if 적절히 사용
// 자주 토글되는 경우
<div v-show="showDetails">...</div>

// 조건이 거의 변경되지 않는 경우
<div v-if="klipperReadyForGui">...</div>

// 3. 리스트에 key 사용
<div v-for="macro in macros" :key="macro.name">
    {{ macro.name }}
</div>

// 4. Throttle/Debounce 사용
import { throttle } from 'lodash-es'

mounted() {
    this.observer = new ResizeObserver(throttle(this.onResize, 50))
}
```

### 12.4 코드 품질

✅ **DO**:

```typescript
// 1. 명확한 네이밍
get canExecuteLoadMacro(): boolean { }  // 좋음
get flag1(): boolean { }  // 나쁨

// 2. 짧은 메서드
formatMacroName(name: string): string {
    return name.replace(/_/g, ' ')
}

// 3. 주석은 '왜'를 설명
// Timelapse pause should show as 'printing' state
get printer_state(): string {
    const state = this.$store.state.printer.print_stats?.state ?? ''
    const timelapse_pause = this.$store.state.printer['gcode_macro TIMELAPSE_TAKE_FRAME']?.is_paused ?? false
    return state === 'paused' && timelapse_pause ? 'printing' : state
}

// 4. Early return
get showPanel(): boolean {
    if (!this.klipperReadyForGui) return false
    if (this.extruders.length === 0) return false
    return true
}
```

### 12.5 리소스 관리

✅ **DO**:

```typescript
// 1. beforeDestroy에서 정리
beforeDestroy() {
    if (this.observer) {
        this.observer.disconnect()
    }

    if (this.intervalId) {
        clearInterval(this.intervalId)
    }

    this.$socket.off('event', this.handler)
}

// 2. 메모리 누수 방지
beforeDestroy() {
    this.largeArray = []
    this.cache.clear()
}
```

---

## 13. 안티패턴

### 13.1 피해야 할 패턴

❌ **DON'T**:

```typescript
// 1. BaseMixin 생략
@Component
export default class MyComponent extends Vue {  // ❌ 나쁨
    // store, 반응형 등 접근 불가
}

@Component
export default class MyComponent extends Mixins(BaseMixin) {  // ✅ 좋음
    // 모든 기능 사용 가능
}

// 2. Options API와 Class API 혼용
@Component({
    data() {  // ❌ 나쁨
        return { value: 0 }
    }
})
export default class MyComponent extends Mixins(BaseMixin) {
    value = 0  // ✅ 좋음
}

// 3. 아이콘 폰트 사용
<v-icon>mdi-home</v-icon>  // ❌ 나쁨

import { mdiHome } from '@mdi/js'  // ✅ 좋음
<v-icon>{{ mdiHome }}</v-icon>

// 4. any 타입 남용
get data(): any {  // ❌ 나쁨
    return this.$store.state.printer.data
}

get data(): PrinterData | null {  // ✅ 좋음
    return this.$store.state.printer.data ?? null
}

// 5. 전역 스타일
<style>  // ❌ 나쁨
.button {
    color: red;
}
</style>

<style scoped>  // ✅ 좋음
.button {
    color: red;
}
</style>

// 6. 복잡한 상태를 컴포넌트에 저장
export default class MyComponent extends Mixins(BaseMixin) {
    private userSettings = { ... }  // ❌ 나쁨 - Vuex에 저장
}

// 7. 반응형 무시
<v-col cols="12">  // ❌ 모든 화면에서 동일
    ...
</v-col>

<v-col :cols="isMobile ? 12 : 6">  // ✅ 반응형
    ...
</v-col>

// 8. Watch에서 무한 루프
@Watch('value')
onValueChanged(newVal: number) {
    this.value = newVal * 2  // ❌ 무한 루프!
}

@Watch('externalValue')
onExternalValueChanged(newVal: number) {
    this.internalValue = newVal * 2  // ✅ 다른 속성 변경
}

// 9. Computed에서 side effect
get temperature(): number {
    this.lastUpdated = Date.now()  // ❌ side effect
    return this.$store.state.printer.extruder.temperature
}

// 10. 긴 템플릿 로직
<div v-if="socketIsConnected && klippyIsConnected && printer_state === 'ready' && extruders.length > 0">
    <!-- ❌ 나쁨 -->
</div>

// Computed로 추출
get showPanel(): boolean {
    return this.socketIsConnected &&
           this.klippyIsConnected &&
           this.printer_state === 'ready' &&
           this.extruders.length > 0
}

<div v-if="showPanel">
    <!-- ✅ 좋음 -->
</div>
```

### 13.2 흔한 실수

```typescript
// 1. Prop 직접 변경
@Prop({ type: Number, required: true })
declare readonly value: number

mounted() {
    this.value = 10  // ❌ Props는 readonly
}

// 대신 내부 상태 사용
private internalValue: number = 0

mounted() {
    this.internalValue = this.value  // ✅
}

@Watch('value')
onValueChanged(newVal: number) {
    this.internalValue = newVal
}

// 2. 비동기 computed
get asyncData() {  // ❌ Computed는 동기적이어야 함
    this.fetchData().then(data => {
        return data
    })
}

// 대신 data + watch/mounted 사용
private asyncData: any = null

async mounted() {
    this.asyncData = await this.fetchData()  // ✅
}

// 3. beforeDestroy 누락
mounted() {
    this.intervalId = setInterval(() => {
        this.update()
    }, 1000)
}
// ❌ beforeDestroy에서 clearInterval 안함 - 메모리 누수!

beforeDestroy() {
    if (this.intervalId) {
        clearInterval(this.intervalId)  // ✅
    }
}

// 4. Key 없는 v-for
<div v-for="item in items">  // ❌
    {{ item.name }}
</div>

<div v-for="item in items" :key="item.id">  // ✅
    {{ item.name }}
</div>

// 5. 깊은 객체 변경 감지 안됨
data() {
    return {
        user: { name: 'John', settings: { theme: 'dark' } }
    }
}

updateTheme() {
    this.user.settings.theme = 'light'  // ❌ 감지 안될 수 있음
}

updateTheme() {
    this.$set(this.user.settings, 'theme', 'light')  // ✅
    // 또는
    this.user = { ...this.user, settings: { ...this.user.settings, theme: 'light' } }
}
```

---

## 부록: 파일 참조

### 주요 컴포넌트 파일

| 컴포넌트 | 파일 경로 | 라인 수 | 주요 패턴 |
|---|---|---|---|
| **BaseMixin** | `src/components/mixins/base.ts` | 260 | 반응형, 포맷팅, 상태 |
| **Panel** | `src/components/ui/Panel.vue` | 246 | 슬롯, 접기/펼치기 |
| **ExtruderControlPanel** | `src/components/panels/ExtruderControlPanel.vue` | 222 | 다중 Mixin, 복잡한 로직 |
| **TemperaturePanel** | `src/components/panels/TemperaturePanel.vue` | 50 | 간단한 패널 |
| **Dashboard** | `src/pages/Dashboard.vue` | 163 | 반응형 레이아웃 |
| **MacroButton** | `src/components/inputs/MacroButton.vue` | 250 | Props, Watch, 이벤트 |
| **TemperatureInput** | `src/components/inputs/TemperatureInput.vue` | 131 | 폼 입력, 검증 |
| **NumberInput** | `src/components/inputs/NumberInput.vue` | 176 | 증감, 검증 |
| **ConfirmationDialog** | `src/components/dialogs/ConfirmationDialog.vue` | 53 | 다이얼로그, 이벤트 |
| **ResponsiveMixin** | `src/components/mixins/responsive.ts` | 53 | ResizeObserver |
| **ControlMixin** | `src/components/mixins/control.ts` | 203 | 프린터 제어 |
| **ExtruderMixin** | `src/components/mixins/extruder.ts` | 46 | 익스트루더 상태 |

### 추가 참조

자세한 정보는 다음 문서를 참조하세요:
- **[CLAUDE.md](../CLAUDE.md)** - Claude 개발 가이드 (빠른 참조)
- **[docs/PROJECT_OVERVIEW.md](PROJECT_OVERVIEW.md)** - 프로젝트 개요 및 아키텍처

---

**작성일**: 2025-12-08
**버전**: 1.0
**작성자**: Virtual Klipper Development Team
