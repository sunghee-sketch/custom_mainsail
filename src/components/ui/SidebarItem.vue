<template>
    <div>
        <v-tooltip right :open-delay="500" :disabled="navigationStyle !== 'iconsOnly'">
            <template #activator="{ on, attrs }">
                <v-list-item
                    router
                    :to="to"
                    :href="href"
                    :target="target"
                    :ripple="false"
                    class="small-list-item nav-item"
                    v-bind="attrs"
                    v-on="on">
                    <v-list-item-icon class="my-3 mr-3 menu-item-icon">
                        <v-icon>{{ icon }}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title tile class="menu-item-title">
                            {{ title }}
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </template>
            <span>{{ title }}</span>
        </v-tooltip>
        <v-divider v-if="borderBottom" class="my-1" />
    </div>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import { Mixins, Prop } from 'vue-property-decorator'
import BaseMixin from '@/components/mixins/base'
import { NaviPoint } from '@/components/mixins/navigation'

@Component
export default class SidebarItem extends Mixins(BaseMixin) {
    @Prop({ type: Object, required: true }) item!: NaviPoint

    get navigationStyle() {
        return this.$store.state.gui.uiSettings.navigationStyle
    }

    get icon() {
        return this.item.icon
    }

    get title() {
        return this.item.title
    }

    get to() {
        return this.item.to ?? undefined
    }

    get href() {
        return this.item.href ?? undefined
    }

    get target() {
        return this.item.target ?? undefined
    }

    get borderBottom() {
        return this.item.to === '/allPrinters'
    }
}
</script>

<style scoped>
.small-list-item {
    height: var(--sidebar-menu-item-height);
}

/* 기존 active 표시(우측 보더) 대신 Figma 스타일을 적용합니다 */

.menu-item-icon {
    opacity: 0.85;
}

.menu-item-title {
    line-height: 30px;
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    opacity: 0.85;
}

/* Figma 스타일: 호버/포커스 */
.nav-item {
    border-radius: 14px;
    transition:
        background-color 0.2s ease,
        transform 0.2s ease,
        opacity 0.2s ease;
    position: relative;
    /* 사이드바 패딩과 균형 잡힌 여백 - 상하좌우 동일 */
    margin: 8px;
    padding: 0 12px;
    overflow: hidden; /* pill 내부에만 오버레이 보이도록 */
}

.nav-item:hover {
    background-color: rgba(255, 255, 255, 0.02);
}

/* 활성 상태: Vuetify가 부여하는 클래스와 결합하여 스타일 적용 */
.nav-item.v-list-item--active {
    border-left: 4px solid #2196f3;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.005) 100%);
    box-shadow:
        0 10px 15px -3px rgba(0, 0, 0, 0.15),
        0 4px 6px -4px rgba(0, 0, 0, 0.15);
}

/* Tailwind 레퍼런스: absolute inset-0 bg-gradient-to-r from-white/5 to-transparent
   - 기본: opacity 0, 호버: 1, 활성: 0.1 */
.nav-item::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0; /* inset-0 */
    background: linear-gradient(90deg, rgba(255, 255, 255, 0.05) 0%, rgba(0, 0, 0, 0) 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
}

.nav-item:hover::after {
    opacity: 1; /* group-hover:opacity-100 */
}

.nav-item.v-list-item--active::after {
    opacity: 0.05; /* isActive && "opacity-10" */
}

/* 활성 시 아이콘 컬러를 브랜드 블루로 변경 */
.nav-item.v-list-item--active .v-icon {
    color: #2196f3 !important;
    opacity: 1;
}
</style>
