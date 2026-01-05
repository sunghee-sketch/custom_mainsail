<template>
    <v-dialog v-model="isVisible" max-width="650px" persistent @input="handleVisibilityChange">
        <v-card dark class="liquid-modal-card">
            <!-- Panel Header -->
            <div class="liquid-modal-header">
                <div class="header-left">
                    <div class="icon-container">
                        <v-icon class="nav-icon">{{ mdiFlask }}</v-icon>
                    </div>
                    <div class="title-container">
                        <h3 class="panel-title">Edit labware</h3>
                    </div>
                </div>
                <div class="header-right">
                    <div class="part-indicator">Part 1/2</div>
                    <v-btn icon small @click="closeLabwareModal">
                        <v-icon>{{ mdiClose }}</v-icon>
                    </v-btn>
                </div>
            </div>

            <!-- Panel Divider -->
            <div class="panel-divider"></div>

            <!-- Panel Content -->
            <div class="liquid-modal-content">
                <!-- Search Bar -->
                <v-text-field
                    v-model="labwareSearch"
                    placeholder="Search for labwares"
                    outlined
                    dense
                    dark
                    hide-details
                    clearable
                    class="labware-search">
                    <template #prepend-inner>
                        <div class="search-icon-wrapper">
                            <v-icon small class="search-icon">{{ mdiMagnify }}</v-icon>
                        </div>
                    </template>
                </v-text-field>

                <!-- Labware List -->
                <div class="labware-list">
                    <div
                        v-for="labware in filteredLabwares"
                        :key="labware"
                        class="labware-item"
                        :class="{ selected: selectedLabware === labware }"
                        @click="selectLabware(labware)">
                        {{ labware }}
                    </div>
                </div>

                <!-- Continue Button -->
                <div class="labware-modal-actions">
                    <v-btn
                        color="primary"
                        class="text-none"
                        block
                        :disabled="!selectedLabware"
                        @click="continueLabware">
                        Continue
                    </v-btn>
                </div>
            </div>
        </v-card>
    </v-dialog>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import { Mixins, Prop, Watch } from 'vue-property-decorator'
import BaseMixin from '@/components/mixins/base'
import { mdiFlask, mdiClose, mdiMagnify } from '@mdi/js'

@Component({
    components: {},
})
export default class LabwareModal extends Mixins(BaseMixin) {
    // Icons
    mdiFlask = mdiFlask
    mdiClose = mdiClose
    mdiMagnify = mdiMagnify

    // Props
    @Prop({ required: true, type: Boolean })
    declare visible: boolean

    // Internal state
    isVisible = false

    labwareSearch = ''
    selectedLabware: string | null = null

    labwares = ['Tip racks', 'Tube racks', 'Well plates', 'Reservoirs', 'Aluminum blocks', 'Adapters', 'Lids']

    // Computed
    get filteredLabwares(): string[] {
        if (!this.labwareSearch) {
            return this.labwares
        }
        return this.labwares.filter((labware) => labware.toLowerCase().includes(this.labwareSearch.toLowerCase()))
    }

    // Watchers
    @Watch('visible')
    onVisibleChange(newVal: boolean): void {
        this.isVisible = newVal
    }

    // Methods
    handleVisibilityChange(value: boolean): void {
        if (!value) {
            this.closeLabwareModal()
        }
    }

    selectLabware(labware: string): void {
        this.selectedLabware = labware
    }

    closeLabwareModal(): void {
        this.labwareSearch = ''
        this.selectedLabware = null
        this.$emit('close')
    }

    continueLabware(): void {
        if (!this.selectedLabware) {
            return
        }

        this.$emit('continue', this.selectedLabware)
        this.closeLabwareModal()
    }
}
</script>

<style scoped>
/* Liquid Modal Card - Shared Styles */
.liquid-modal-card {
    background: linear-gradient(180deg, #1e1e1e 0%, #1a1a1a 100%) !important;
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 14px;
    overflow: hidden;
    position: relative;
}

.liquid-modal-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0) 100%);
    pointer-events: none;
    z-index: 0;
}

.liquid-modal-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 20px;
    height: 44px;
    position: relative;
    z-index: 1;
}

.liquid-modal-header .header-left {
    display: flex;
    align-items: center;
    gap: 12px;
}

.liquid-modal-header .icon-container {
    width: 20px;
    height: 20px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.liquid-modal-header .nav-icon {
    color: #2196f3;
    font-size: 20px;
}

.liquid-modal-header .title-container {
    flex: 1;
}

.liquid-modal-header .panel-title {
    color: rgba(255, 255, 255, 0.9);
    font-family: Arial, sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    margin: 0;
}

.liquid-modal-header .header-right {
    display: flex;
    align-items: center;
}

.panel-divider {
    height: 1px;
    background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.13) 50%,
        rgba(255, 255, 255, 0) 100%
    );
    position: relative;
    z-index: 1;
}

.liquid-modal-content {
    padding: 16px 20px;
    background: linear-gradient(135deg, #101828 0%, #000000 50%, #101828 100%);
    position: relative;
    z-index: 1;
}

.liquid-modal-content::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0) 100%);
    pointer-events: none;
}

/* Labware Modal Specific */
.part-indicator {
    color: rgba(255, 255, 255, 0.7);
    font-size: 14px;
    margin-right: 12px;
}

.labware-search {
    margin-bottom: 16px;
}

.labware-search >>> .v-input__prepend-inner {
    align-self: center !important;
    margin-top: 0 !important;
}

.search-icon-wrapper {
    display: flex;
    align-items: center;
}

.search-icon {
    color: rgba(255, 255, 255, 0.5);
    margin-right: 8px;
}

.labware-list {
    max-height: 400px;
    overflow-y: auto;
    margin-bottom: 16px;
}

.labware-item {
    padding: 14px 16px;
    background: #2a2a2a;
    border: 1px solid #3a3a3a;
    border-radius: 8px;
    margin-bottom: 8px;
    cursor: pointer;
    transition: all 0.2s ease;
    color: rgba(255, 255, 255, 0.9);
    font-size: 14px;
}

.labware-item:hover {
    border-color: #1976d2;
    background: #2f2f2f;
}

.labware-item.selected {
    border-color: #1976d2;
    background: #1e3a5f;
}

.labware-modal-actions {
    position: relative;
    z-index: 2;
}
</style>
