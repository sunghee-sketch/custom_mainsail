<template>
    <v-dialog v-model="isVisible" max-width="800px" persistent @input="handleVisibilityChange">
        <v-card dark class="liquid-modal-card">
            <!-- Panel Header -->
            <div class="liquid-modal-header">
                <div class="header-left">
                    <div class="icon-container">
                        <v-icon class="nav-icon">{{ mdiWater }}</v-icon>
                    </div>
                    <div class="title-container">
                        <h3 class="panel-title">Define a liquid</h3>
                    </div>
                </div>
                <div class="header-right">
                    <v-btn
                        color="primary"
                        class="text-none mr-4"
                        small
                        :disabled="!isLiquidFormValid"
                        @click="saveLiquid">
                        <v-icon left small>{{ mdiCheck }}</v-icon>
                        Done
                    </v-btn>
                    <v-btn icon small @click="closeLiquidModal">
                        <v-icon>{{ mdiClose }}</v-icon>
                    </v-btn>
                </div>
            </div>

            <!-- Panel Divider -->
            <div class="panel-divider"></div>

            <!-- Panel Content -->
            <div class="liquid-modal-content">
                <v-form ref="liquidForm">
                    <!-- Name -->
                    <div class="form-field">
                        <label class="field-label">Name *</label>
                        <v-text-field
                            v-model="liquidForm.name"
                            outlined
                            dense
                            dark
                            hide-details="auto"
                            :error-messages="liquidErrors.name"
                            @input="clearError('name')"></v-text-field>
                    </div>

                    <!-- Liquid class -->
                    <div class="form-field">
                        <label class="field-label">Liquid class *</label>
                        <v-select
                            v-model="liquidForm.liquidClass"
                            :items="liquidClassOptions"
                            outlined
                            dense
                            dark
                            hide-details="auto"
                            :error-messages="liquidErrors.liquidClass"
                            @change="clearError('liquidClass')"></v-select>
                    </div>

                    <!-- Color -->
                    <div class="form-field">
                        <label class="field-label">Color *</label>
                        <v-menu v-model="showColorPicker" :close-on-content-click="false" offset-y>
                            <template #activator="{ on, attrs }">
                                <div
                                    class="color-selector"
                                    :style="{ backgroundColor: liquidForm.color }"
                                    v-bind="attrs"
                                    v-on="on">
                                    <div v-if="liquidForm.color" class="color-check-overlay">
                                        <v-icon small color="white">{{ mdiCheck }}</v-icon>
                                    </div>
                                </div>
                            </template>

                            <v-card class="color-picker-menu" dark>
                                <v-card-text class="pa-3">
                                    <!-- Preset Colors -->
                                    <div class="color-presets-grid">
                                        <div
                                            v-for="(color, index) in colorPresets"
                                            :key="index"
                                            class="color-preset-item"
                                            :class="{ selected: liquidForm.color === color }"
                                            :style="{ backgroundColor: color }"
                                            @click="selectColor(color)">
                                            <v-icon v-if="liquidForm.color === color" x-small color="white">{{
                                                mdiCheck
                                            }}</v-icon>
                                        </div>
                                    </div>

                                    <v-divider class="my-3"></v-divider>

                                    <!-- Custom Color Picker -->
                                    <div class="custom-picker-section">
                                        <label class="picker-label">Custom color:</label>
                                        <input
                                            v-model="liquidForm.color"
                                            type="color"
                                            class="gradient-color-input"
                                            @input="clearError('color')" />
                                    </div>
                                </v-card-text>
                            </v-card>
                        </v-menu>
                        <div v-if="liquidErrors.color" class="error-message">{{ liquidErrors.color }}</div>
                    </div>

                    <!-- Description -->
                    <div class="form-field">
                        <label class="field-label">Description</label>
                        <v-textarea
                            v-model="liquidForm.description"
                            outlined
                            dark
                            hide-details
                            rows="4"></v-textarea>
                    </div>
                </v-form>
            </div>
        </v-card>
    </v-dialog>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import { Mixins, Prop, Watch } from 'vue-property-decorator'
import BaseMixin from '@/components/mixins/base'
import { mdiWater, mdiCheck, mdiClose } from '@mdi/js'
import type { LiquidForm } from '@/types/method'

@Component({
    components: {},
})
export default class LiquidModal extends Mixins(BaseMixin) {
    // Icons
    mdiWater = mdiWater
    mdiCheck = mdiCheck
    mdiClose = mdiClose

    // Props
    @Prop({ required: true, type: Boolean })
    declare visible: boolean

    // Internal state
    isVisible = false

    showColorPicker = false
    liquidForm: LiquidForm = {
        name: '',
        liquidClass: '',
        color: '#ff0000',
        description: '',
    }

    liquidErrors: Record<string, string> = {
        name: '',
        liquidClass: '',
        color: '',
    }

    liquidClassOptions = [
        "Don't use a liquid class",
        'Aqueous (Deionized water)',
        'Viscous (50% glycerol)',
        'Volatile (80% ethanol)',
    ]

    colorPresets = [
        '#FF0000', // Red
        '#FF6B00', // Orange
        '#FFD700', // Gold
        '#00FF00', // Green
        '#00CED1', // Turquoise
        '#1E90FF', // Blue
        '#9370DB', // Purple
        '#FF1493', // Pink
        '#8B4513', // Brown
        '#000000', // Black
    ]

    // Computed
    get isLiquidFormValid(): boolean {
        return !!(this.liquidForm.name && this.liquidForm.liquidClass && this.liquidForm.color)
    }

    // Watchers
    @Watch('visible')
    onVisibleChange(newVal: boolean): void {
        this.isVisible = newVal
    }

    // Methods
    handleVisibilityChange(value: boolean): void {
        if (!value) {
            this.closeLiquidModal()
        }
    }

    clearError(field: string): void {
        this.liquidErrors[field] = ''
    }

    selectColor(color: string): void {
        this.liquidForm.color = color
        this.clearError('color')
    }

    validateLiquidForm(): boolean {
        let isValid = true

        if (!this.liquidForm.name) {
            this.liquidErrors.name = 'Name is required'
            isValid = false
        }

        if (!this.liquidForm.liquidClass) {
            this.liquidErrors.liquidClass = 'Liquid class is required'
            isValid = false
        }

        if (!this.liquidForm.color) {
            this.liquidErrors.color = 'Color is required'
            isValid = false
        }

        return isValid
    }

    closeLiquidModal(): void {
        this.liquidForm = {
            name: '',
            liquidClass: '',
            color: '#ff0000',
            description: '',
        }
        this.liquidErrors = {
            name: '',
            liquidClass: '',
            color: '',
        }
        this.$emit('close')
    }

    saveLiquid(): void {
        if (!this.validateLiquidForm()) {
            return
        }

        this.$emit('save', { ...this.liquidForm })
        this.closeLiquidModal()
    }
}
</script>

<style scoped>
/* Liquid Modal - Panel 스타일 적용 */
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

.form-field {
    margin-bottom: 20px;
    position: relative;
    z-index: 2;
}

.field-label {
    display: block;
    color: white;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 8px;
}

/* Color Selector */
.color-selector {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    border: 2px solid #3a3a3a;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
    position: relative;
}

.color-selector:hover {
    border-color: #1976d2;
}

.color-check-overlay {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    pointer-events: none;
}

/* Color Picker Menu */
.color-picker-menu {
    background: #2a2a2a !important;
    border: 1px solid #3a3a3a;
    border-radius: 8px;
    min-width: 200px;
    max-width: 320px;
}

.color-presets-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 5px;
}

.color-preset-item {
    width: 30px;
    height: 30px;
    border-radius: 8px;
    border: 2px solid #3a3a3a;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
}

.color-preset-item:hover {
    border-color: #1976d2;
    transform: scale(1.1);
}

.color-preset-item.selected {
    border-color: #1976d2;
    border-width: 3px;
}

.custom-picker-section {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.picker-label {
    color: #999;
    font-size: 13px;
}

.gradient-color-input {
    width: 40px;
    height: 40px;
    border: 2px solid #3a3a3a;
    border-radius: 8px;
    cursor: pointer;
    background: transparent;
}

.error-message {
    color: #ff5252;
    font-size: 12px;
    margin-top: 4px;
}
</style>
