# Virtual Klipper - 코드 작성 규칙 (핵심)

## 목차

1. [TypeScript 사용 규칙](#1-typescript-사용-규칙)
2. [네이밍 컨벤션](#2-네이밍-컨벤션)
3. [베스트 프랙티스](#3-베스트-프랙티스)
4. [안티패턴](#4-안티패턴)

---

## 1. TypeScript 사용 규칙

### 1.1 타입 정의

#### 인터페이스 정의

```typescript
// types.ts 파일에 정의
export interface Method {
    id: number
    name: string
    description?: string  // optional
    steps: Step[]
    createdAt: Date
}

export interface Step {
    id: number
    order: number
    instruction: string
    duration: number
}

// 컴포넌트에서 사용
import { Method, Step } from './types'

@Component
export default class MethodList extends Mixins(BaseMixin) {
    methods: Method[] = []
    selectedMethod: Method | null = null

    selectMethod(method: Method) {
        this.selectedMethod = method
    }
}
```

---

#### Union Types

```typescript
export type ViewMode = 'grid' | 'list' | 'table'
export type StatusType = 'ready' | 'printing' | 'paused' | 'error'

@Component
export default class MyComponent extends Mixins(BaseMixin) {
    viewMode: ViewMode = 'grid'
    status: StatusType = 'ready'

    setViewMode(mode: ViewMode) {
        this.viewMode = mode
    }
}
```

---

#### 제네릭 사용

```typescript
// 제네릭 메소드
filterItems<T>(items: T[], predicate: (item: T) => boolean): T[] {
    return items.filter(predicate)
}

// 사용 예
const numbers = [1, 2, 3, 4, 5]
const evenNumbers = this.filterItems(numbers, (n) => n % 2 === 0)
```

---

### 1.2 타입 가드

```typescript
// 타입 가드 함수
function isMethod(obj: unknown): obj is Method {
    return (
        typeof obj === 'object' &&
        obj !== null &&
        'id' in obj &&
        'name' in obj
    )
}

// 사용
handleData(data: unknown) {
    if (isMethod(data)) {
        // data는 이제 Method 타입
        console.log(data.name)
    }
}
```

---

### 1.3 `any` 사용 금지

```typescript
// ❌ 나쁜 예
function processData(data: any) {
    return data.value
}

// ✅ 좋은 예 1: 구체적 타입
function processData(data: Method) {
    return data.name
}

// ✅ 좋은 예 2: unknown + 타입 가드
function processData(data: unknown) {
    if (isMethod(data)) {
        return data.name
    }
    return null
}

// ✅ 좋은 예 3: 제네릭
function processData<T extends { value: string }>(data: T) {
    return data.value
}
```

---

### 1.4 nullish coalescing 사용

```typescript
// ✅ 올바른 방법
get isConnected(): boolean {
    return this.$store.state.socket.isConnected ?? false
}

get userName(): string {
    return this.$store.state.user.name ?? 'Guest'
}

// ❌ 나쁜 예 - null/undefined 체크 없음
get isConnected(): boolean {
    return this.$store.state.socket.isConnected  // 타입 에러 발생 가능
}
```

---

## 2. 네이밍 컨벤션

### 2.1 파일 및 디렉토리

```
✅ 올바른 방법:
- MyComponent.vue          (PascalCase)
- StatusPanel.vue          (PascalCase)
- base.ts                  (camelCase)
- types.ts                 (lowercase)
- store/printer/           (lowercase)
- store/gui/console/       (lowercase)

❌ 나쁜 예:
- my-component.vue         (kebab-case - Vue 3에서는 가능하지만 이 프로젝트는 PascalCase 사용)
- statusPanel.vue          (camelCase - 일관성 없음)
- Base.ts                  (PascalCase - mixin은 camelCase)
```

---

### 2.2 변수 및 함수

```typescript
// ✅ 올바른 방법 - camelCase
const myVariable = 'value'
let selectedItem = null
const isActive = true

function handleClick() { }
function loadData() { }
async function fetchItems() { }

// 상수는 UPPER_SNAKE_CASE
const MAX_ITEMS = 100
const API_URL = 'https://api.example.com'

// ❌ 나쁜 예
const MyVariable = 'value'        // PascalCase (클래스용)
const selected_item = null        // snake_case (Python 스타일)
function HandleClick() { }        // PascalCase (클래스용)
```

---

### 2.3 CSS 클래스

```vue
<template>
    <!-- ✅ 올바른 방법 - kebab-case -->
    <div class="panel-header">
        <span class="panel-title">Title</span>
        <button class="action-button">Click</button>
    </div>
</template>

<style scoped>
.panel-header { }
.panel-title { }
.action-button { }
</style>
```

```vue
<template>
    <!-- ❌ 나쁜 예 - camelCase/PascalCase -->
    <div class="panelHeader">
        <span class="PanelTitle">Title</span>
    </div>
</template>
```

---

### 2.4 Store 모듈

```
✅ 올바른 방법:
store/
├── printer/               (lowercase)
├── gui/                   (lowercase)
│   ├── console/          (lowercase)
│   └── webcams/          (lowercase)
└── files/                 (lowercase)

❌ 나쁜 예:
store/
├── Printer/               (PascalCase)
├── GUI/                   (UPPERCASE)
└── myFiles/               (camelCase)
```

---

## 3. 베스트 프랙티스

### 3.1 BaseMixin 사용

```typescript
// ✅ 올바른 방법
@Component
export default class MyComponent extends Mixins(BaseMixin) {
    get isConnected() {
        return this.$store.state.socket.isConnected ?? false
    }

    get viewport() {
        return this.viewport  // BaseMixin에서 제공
    }
}

// ❌ 나쁜 예
@Component
export default class MyComponent extends Vue {
    // BaseMixin 없이 직접 Vue 상속
    // this.$store, viewport 등 접근 불가능할 수 있음
}
```

---

### 3.2 반응형 레이아웃

```vue
<!-- ✅ 올바른 방법 - BaseMixin getter 사용 -->
<template>
    <v-row v-if="isMobile">
        <!-- 모바일 레이아웃 -->
    </v-row>
    <v-row v-else-if="isTablet">
        <!-- 태블릿 레이아웃 -->
    </v-row>
    <v-row v-else-if="isDesktop">
        <!-- 데스크톱 레이아웃 -->
    </v-row>
</template>
```

```vue
<!-- ❌ 나쁜 예 - 하드코딩된 breakpoint -->
<template>
    <v-row v-if="$vuetify.breakpoint.xs">
        <!-- viewport getter 사용 권장 -->
    </v-row>
</template>
```

---

### 3.3 v-for 키 바인딩

```vue
<!-- ✅ 올바른 방법 - 고유 ID 사용 -->
<template>
    <div v-for="item in items" :key="item.id">
        {{ item.name }}
    </div>
</template>
```

```vue
<!-- ❌ 나쁜 예 - index 사용 -->
<template>
    <div v-for="(item, index) in items" :key="index">
        {{ item.name }}
    </div>
</template>
```

**이유**: index를 key로 사용하면 리스트 재정렬 시 Vue가 컴포넌트를 올바르게 추적하지 못함

---

### 3.4 다국어 지원 (i18n)

```vue
<!-- ✅ 올바른 방법 -->
<template>
    <panel :title="$t('Panels.StatusPanel.Title')">
        <p>{{ $t('Panels.StatusPanel.Description') }}</p>
    </panel>
</template>
```

```vue
<!-- ❌ 나쁜 예 - 하드코딩 -->
<template>
    <panel title="Status Panel">
        <p>This is the status panel</p>
    </panel>
</template>
```

**locale 파일 구조** (`src/locales/en.json`):
```json
{
    "Panels": {
        "StatusPanel": {
            "Title": "Status",
            "Description": "This is the status panel"
        }
    }
}
```

---

### 3.5 비동기 처리

```typescript
// ✅ 올바른 방법 - async/await
@Component
export default class MyComponent extends Mixins(BaseMixin) {
    loading = false

    async loadData() {
        this.loading = true
        try {
            const data = await this.$axios.get('/api/data')
            this.items = data.items
        } catch (error) {
            console.error('Failed to load data:', error)
            this.$toast.error('Failed to load data')
        } finally {
            this.loading = false
        }
    }
}
```

```typescript
// ❌ 나쁜 예 - Promise then/catch 체인
loadData() {
    this.loading = true
    this.$axios.get('/api/data')
        .then((data) => {
            this.items = data.items
            this.loading = false
        })
        .catch((error) => {
            console.error(error)
            this.loading = false
        })
}
```

---

### 3.6 동적 클래스 바인딩

```vue
<!-- ✅ 올바른 방법 -->
<template>
    <div :class="{ active: isActive, disabled: isDisabled }">
        Item
    </div>

    <!-- 또는 computed 사용 -->
    <div :class="itemClass">
        Item
    </div>
</template>

<script lang="ts">
@Component
export default class MyComponent extends Mixins(BaseMixin) {
    isActive = true
    isDisabled = false

    get itemClass() {
        return {
            active: this.isActive,
            disabled: this.isDisabled,
            'has-error': this.hasError,
        }
    }
}
</script>
```

---

### 3.7 Store Action vs Mutation

```typescript
// ✅ 올바른 방법 - Action 사용 (비동기 가능)
async loadItems({ commit }) {
    commit('setLoading', true)
    try {
        const items = await fetchItems()
        commit('setItems', items)
    } finally {
        commit('setLoading', false)
    }
}

// 컴포넌트에서 호출
this.$store.dispatch('mymodule/loadItems')
```

```typescript
// ❌ 나쁜 예 - Mutation 직접 호출
// Mutation은 동기적이어야 하며 직접 호출하지 않음
this.$store.commit('mymodule/setItems', items)
```

**규칙**:
- Mutation: 동기적, 상태 변경만
- Action: 비동기 가능, 비즈니스 로직 포함

---

## 4. 안티패턴

### 4.1 Options API 사용 금지

```typescript
// ❌ 나쁜 예 - Options API
export default {
    data() {
        return {
            count: 0
        }
    },
    methods: {
        increment() {
            this.count++
        }
    }
}

// ✅ 올바른 방법 - Class Component
@Component
export default class MyComponent extends Mixins(BaseMixin) {
    count = 0

    increment() {
        this.count++
    }
}
```

---

### 4.2 아이콘 폰트 사용 금지

```vue
<!-- ❌ 나쁜 예 - 폰트 기반 아이콘 -->
<template>
    <i class="mdi mdi-home"></i>
</template>

<!-- ✅ 올바른 방법 - @mdi/js -->
<script lang="ts">
import { mdiHome } from '@mdi/js'

@Component
export default class MyComponent extends Mixins(BaseMixin) {
    mdiHome = mdiHome
}
</script>

<template>
    <v-icon>{{ mdiHome }}</v-icon>
</template>
```

---

### 4.3 전역 스타일 사용 금지

```vue
<!-- ❌ 나쁜 예 - scoped 없음 -->
<style>
.panel-title {
    color: white;
}
</style>

<!-- ✅ 올바른 방법 - scoped 사용 -->
<style scoped>
.panel-title {
    color: white;
}
</style>
```

---

### 4.4 타입 추론 무시 금지

```typescript
// ❌ 나쁜 예
function getData(id): any {
    return { id, name: 'test' }
}

// ✅ 올바른 방법
interface Data {
    id: number
    name: string
}

function getData(id: number): Data {
    return { id, name: 'test' }
}
```

---

### 4.5 직접 DOM 조작 금지

```typescript
// ❌ 나쁜 예 - 직접 DOM 조작
mounted() {
    document.getElementById('myElement').style.color = 'red'
}

// ✅ 올바른 방법 - Vue의 반응형 시스템 사용
<template>
    <div :style="{ color: textColor }">Text</div>
</template>

<script lang="ts">
@Component
export default class MyComponent extends Mixins(BaseMixin) {
    textColor = 'red'

    mounted() {
        this.textColor = 'blue'  // Vue가 자동으로 업데이트
    }
}
</script>
```

---

## 요약 체크리스트

### TypeScript 사용 시
- [ ] 모든 함수에 반환 타입 명시
- [ ] `any` 사용 금지 (`unknown` 또는 구체적 타입)
- [ ] nullish coalescing (`??`) 사용
- [ ] 인터페이스로 복잡한 타입 정의

### 네이밍 규칙
- [ ] 컴포넌트 파일: PascalCase
- [ ] 변수/함수: camelCase
- [ ] CSS 클래스: kebab-case
- [ ] Store 모듈: lowercase

### 베스트 프랙티스
- [ ] `Mixins(BaseMixin)` 확장
- [ ] 반응형 뷰포트 getter 사용 (`isMobile`, `isTablet` 등)
- [ ] v-for에 고유 ID를 key로 사용
- [ ] `$t()` 함수로 다국어 지원
- [ ] async/await 사용
- [ ] Store는 Action을 통해 호출

### 안티패턴 주의
- [ ] Options API 사용 금지
- [ ] 폰트 기반 아이콘 금지 (@mdi/js 사용)
- [ ] 전역 스타일 금지 (scoped 필수)
- [ ] 타입 any 금지
- [ ] 직접 DOM 조작 금지

---

**마지막 업데이트**: 2025-12-08
**프로젝트 버전**: 0.0.13
