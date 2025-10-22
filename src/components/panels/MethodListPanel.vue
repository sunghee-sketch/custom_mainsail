<template>
    <panel
        :title="$t('Panels.MethodListPanel.MethodList')"
        :icon="mdiFlaskEmptyPlusOutline"
        card-class="method-list-panel">
        <!-- Search Input -->
        <div class="search-container">
            <div class="search-input">
                <v-icon class="search-icon">{{ mdiMagnify }}</v-icon>
                <input v-model="searchQuery" type="text" placeholder="Search methods..." class="search-field" />
            </div>
        </div>

        <!-- Method List -->
        <div class="method-list">
            <div
                v-for="(method, index) in filteredMethods"
                :key="index"
                class="method-item"
                :class="{ active: selectedMethod === method.id }"
                @click="selectMethod(method.id)">
                <span class="method-name">{{ method.name }}</span>
            </div>
        </div>
    </panel>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import { Mixins } from 'vue-property-decorator'
import BaseMixin from '@/components/mixins/base'
import Panel from '@/components/ui/Panel.vue'
import { mdiFlaskEmptyPlusOutline, mdiMagnify } from '@mdi/js'

@Component({
    name: 'MethodListPanel',
    components: {
        Panel,
    },
})
export default class MethodListPanel extends Mixins(BaseMixin) {
    mdiFlaskEmptyPlusOutline = mdiFlaskEmptyPlusOutline
    mdiMagnify = mdiMagnify

    searchQuery = ''
    selectedMethod: number | null = null

    methods = [
        { id: 1, name: 'Method 1' },
        { id: 2, name: 'Method 2' },
        { id: 3, name: 'Method 3' },
        { id: 4, name: 'Method 4' },
        { id: 5, name: 'Method 5' },
        { id: 6, name: 'Method 6' },
        { id: 7, name: 'Method 7' },
        { id: 8, name: 'Method 8' },
    ]

    get filteredMethods() {
        if (!this.searchQuery) return this.methods
        return this.methods.filter((method) => method.name.toLowerCase().includes(this.searchQuery.toLowerCase()))
    }

    selectMethod(methodId: number) {
        this.selectedMethod = methodId
    }
}
</script>

<style scoped>
/* 공통 스타일은 panel-common.css에서 관리 */

/* 크기는 Dashboard에서 통합 관리 */

.search-container {
    margin-bottom: 20px;
}

.search-input {
    position: relative;
    display: flex;
    align-items: center;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 8px;
    padding: 0 12px;
    height: 36px;
}

.search-icon {
    color: #717182;
    font-size: 16px;
    margin-right: 8px;
}

.search-field {
    flex: 1;
    background: transparent;
    border: none;
    outline: none;
    color: #ffffff;
    font-size: 14px;
    font-family: Arial, sans-serif;
}

.search-field::placeholder {
    color: #717182;
}

.method-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.method-item {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 10px;
    padding: 12px 16px;
    cursor: pointer;
    transition: all 0.2s ease;
    border: 1px solid transparent;
}

.method-item:hover {
    background: rgba(255, 255, 255, 0.08);
}

.method-item.active {
    background: rgba(33, 150, 243, 0.1);
    border-color: rgba(33, 150, 243, 0.3);
}

.method-name {
    color: #ffffff;
    font-size: 14px;
    font-family: Arial, sans-serif;
    font-weight: 400;
}
</style>
