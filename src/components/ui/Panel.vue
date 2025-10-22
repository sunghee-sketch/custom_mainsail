<template>
    <div class="figma-panel">
        <!-- 패널 헤더 -->
        <div class="panel-header">
            <div class="header-left">
                <div class="icon-container">
                    <slot v-if="hasIconSlot" name="icon" />
                    <v-icon v-else-if="icon !== null" class="nav-icon">{{ icon }}</v-icon>
                </div>
                <div class="title-container">
                    <h3 v-if="title" class="panel-title">{{ title }}</h3>
                </div>
            </div>
            <div class="header-right">
                <slot name="buttons-left" />
                <slot name="buttons-title" />
                <div v-if="hasButtonsSlot || collapsible" class="d-flex align-center">
                    <div v-if="expand || !hideButtonsOnCollapse" class="d-flex align-center">
                        <slot name="buttons" />
                    </div>
                    <v-btn v-if="collapsible" icon class="btn-collapsible" :ripple="true" @click="expand = !expand">
                        <v-icon :class="expand ? '' : 'icon-rotate-90'">{{ mdiChevronDown }}</v-icon>
                    </v-btn>
                </div>
            </div>
        </div>

        <!-- 구분선 -->
        <div class="panel-divider"></div>

        <!-- 패널 내용 -->
        <div class="panel-content">
            <v-expand-transition>
                <div v-show="expand || !collapsible">
                    <slot />
                </div>
            </v-expand-transition>
        </div>
    </div>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import { Mixins, Prop } from 'vue-property-decorator'
import BaseMixin from '@/components/mixins/base'
import { panelToolbarHeight } from '@/store/variables'
import { mdiChevronDown } from '@mdi/js'
import { TranslateResult } from 'vue-i18n'

@Component
export default class Panel extends Mixins(BaseMixin) {
    mdiChevronDown = mdiChevronDown
    panelToolbarHeight = panelToolbarHeight

    @Prop({ default: null }) declare readonly icon: string | null
    @Prop({ required: true, default: '' }) declare readonly title: string | TranslateResult
    @Prop({ default: false }) declare readonly collapsible: boolean
    @Prop({ required: true }) declare readonly cardClass: string
    @Prop({ default: '' }) declare readonly toolbarColor: string
    @Prop({ default: '' }) declare readonly toolbarClass: string
    @Prop({ default: false }) declare readonly loading: boolean
    @Prop({ default: true }) declare readonly marginBottom: boolean
    @Prop({ default: false }) declare readonly hideButtonsOnCollapse: boolean

    get expand() {
        return this.$store.getters['gui/getPanelExpand'](this.cardClass, this.viewport)
    }

    set expand(newVal) {
        this.$store.dispatch('gui/saveExpandPanel', { name: this.cardClass, value: newVal, viewport: this.viewport })
    }

    get hasIconSlot() {
        return !!this.$slots.icon
    }

    get hasButtonsSlot() {
        return !!this.$slots.buttons
    }

    get getToolbarClass() {
        let output = this.toolbarClass

        if (this.collapsible) output += ' collapsible'

        return output
    }

    get additionalStyle() {
        return this.$vuetify.theme.dark ? '' : 'border-bottom: 1px solid #A8A8A8'
    }
}
</script>

<style scoped>
/* 공통 패널 스타일 - StatusPanel 디자인 기준 */
.figma-panel {
    background: linear-gradient(180deg, #1e1e1e 0%, #1a1a1a 100%);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 14px;
    overflow: hidden;
    position: relative;
    margin-bottom: 16px; /* 패널들 간의 간격 */
}

.figma-panel::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0) 100%);
    pointer-events: none;
}

.panel-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 20px;
    height: 44px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.header-left {
    display: flex;
    align-items: center;
    gap: 12px;
}

.icon-container {
    width: 20px;
    height: 20px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.nav-icon {
    color: #2196f3;
    font-size: 20px;
}

.title-container {
    flex: 1;
}

.panel-title {
    color: rgba(255, 255, 255, 0.9);
    font-family: Arial, sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    margin: 0;
}

.header-right {
    display: flex;
    align-items: center;
}

.header-button {
    width: 28px;
    height: 28px;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.7);
}

.header-button:hover {
    background: rgba(255, 255, 255, 0.15);
}

.panel-divider {
    height: 1px;
    background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.13) 50%,
        rgba(255, 255, 255, 0) 100%
    );
}

.panel-content {
    padding: 16px;
    background: linear-gradient(135deg, #101828 0%, #000000 50%, #101828 100%);
    border-radius: 0 0 10px 10px;
    position: relative;
    height: calc(100% - 45px);
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.panel-content::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0) 100%);
    pointer-events: none;
}

.btn-collapsible > * {
    will-change: transform;
    transition: transform 500ms;
}
.icon-rotate-90 {
    transform: rotate(90deg);
}

/* 반응형 디자인 */
@media (max-width: 480px) {
    .figma-panel {
        border-radius: 10px;
    }

    .panel-header {
        padding: 12px 16px;
        height: 40px;
    }

    .icon-container {
        width: 16px;
        height: 16px;
    }

    .nav-icon {
        font-size: 16px;
    }

    .panel-title {
        font-size: 14px;
        line-height: 20px;
    }

    .panel-content {
        padding: 12px;
    }
}
</style>
