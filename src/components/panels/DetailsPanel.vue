<template>
    <div class="figma-panel details-panel">
        <!-- Panel Header -->
        <div class="panel-header">
            <div class="header-left">
                <div class="icon-container">
                    <v-icon class="nav-icon">{{ mdiInformation }}</v-icon>
                </div>
                <div class="title-container">
                    <h3 class="panel-title">Details</h3>
                </div>
            </div>
        </div>

        <!-- Divider -->
        <div class="panel-divider"></div>

        <!-- Panel Content -->
        <div class="panel-content">
            <!-- Current Path -->
            <div class="path-info">
                <span class="path-label">Current path:</span>
                <span class="path-value">/gcodes</span>
            </div>

            <!-- Search Input -->
            <div class="search-container">
                <div class="search-input">
                    <v-icon class="search-icon">{{ mdiMagnify }}</v-icon>
                    <input v-model="searchQuery" type="text" placeholder="Search..." class="search-field" />
                </div>
            </div>

            <!-- Disk Info -->
            <div class="disk-info">
                <span class="disk-label">Free disk:</span>
                <span class="disk-value">47.3 GB</span>
            </div>

            <!-- File List -->
            <div class="file-list">
                <div v-for="(file, index) in filteredFiles" :key="index" class="file-item">
                    <span class="file-name">{{ file.name }}</span>
                    <span class="file-size">{{ file.size }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import { Mixins } from 'vue-property-decorator'
import BaseMixin from '@/components/mixins/base'
import { mdiInformation, mdiMagnify } from '@mdi/js'

@Component({
    name: 'DetailsPanel',
})
export default class DetailsPanel extends Mixins(BaseMixin) {
    mdiInformation = mdiInformation
    mdiMagnify = mdiMagnify

    searchQuery = ''

    files = [
        { name: 'File 1.gcode', size: '1.2 MB' },
        { name: 'File 2.gcode', size: '1.2 MB' },
        { name: 'File 3.gcode', size: '1.2 MB' },
        { name: 'File 4.gcode', size: '1.2 MB' },
        { name: 'File 5.gcode', size: '1.2 MB' },
    ]

    get filteredFiles() {
        if (!this.searchQuery) return this.files
        return this.files.filter((file) => file.name.toLowerCase().includes(this.searchQuery.toLowerCase()))
    }
}
</script>

<style scoped>
/* 공통 스타일은 panel-common.css에서 관리 */

/* 크기는 Dashboard에서 통합 관리 */

.path-info {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
}

.path-label {
    color: #ffffff;
    font-size: 14px;
    font-family: Arial, sans-serif;
    font-weight: 700;
    margin-right: 8px;
}

.path-value {
    color: #ffffff;
    font-size: 14px;
    font-family: Arial, sans-serif;
    font-weight: 400;
}

.search-container {
    margin-bottom: 16px;
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

.disk-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.disk-label {
    color: #ffffff;
    font-size: 14px;
    font-family: Arial, sans-serif;
    font-weight: 700;
}

.disk-value {
    color: #ffffff;
    font-size: 14px;
    font-family: Arial, sans-serif;
    font-weight: 400;
}

.file-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
    flex: 1;
    overflow-y: auto;
}

.file-item {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 10px;
    padding: 12px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.file-name {
    color: #ffffff;
    font-size: 14px;
    font-family: Arial, sans-serif;
    font-weight: 400;
}

.file-size {
    color: rgba(255, 255, 255, 0.5);
    font-size: 12px;
    font-family: Arial, sans-serif;
    font-weight: 400;
}
</style>
