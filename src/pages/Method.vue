<template>
    <div class="method-page">
        <!-- Step Indicator -->
        <div class="step-indicator">
            <div
                v-for="step in steps"
                :key="step.number"
                class="step-item"
                :class="{ active: currentStep === step.number, completed: currentStep > step.number }">
                <div class="step-circle">
                    <v-icon v-if="currentStep > step.number" small color="white">{{ mdiCheck }}</v-icon>
                    <v-icon v-else-if="currentStep < step.number" small color="grey">{{ mdiLock }}</v-icon>
                    <span v-else>{{ step.number }}</span>
                </div>
                <div class="step-divider" v-if="step.number < 3"></div>
                <div class="step-label">{{ step.label }}</div>
            </div>
        </div>

        <!-- Step Content -->
        <div class="method-content">
            <div class="steps-layout">
                <!-- Step 1: Configure Deck Layout -->
                <div class="step-container">
                    <div class="step-card" :class="{ dimmed: currentStep !== 1 }">
                    <div class="step-header">
                        <div class="step-number">1</div>
                        <div class="step-info">
                            <h2>Configure Deck Layout</h2>
                            <p>Set up your deck positions (3x5 grid)</p>
                        </div>
                    </div>

                    <div class="deck-grid">
                        <div
                            v-for="position in 15"
                            :key="position"
                            class="deck-position"
                            :class="{ selected: selectedDeck === position }"
                            @click="selectDeck(position)">
                            <div class="position-number">{{ position }}</div>
                            <div class="position-status">{{ deckPositions[position] || 'Empty' }}</div>
                        </div>
                    </div>

                        <div class="step-actions">
                            <v-btn color="secondary" class="text-none" @click="showLiquidModal = true">
                                <v-icon left small>{{ mdiWater }}</v-icon>
                                Liquids
                            </v-btn>
                            <v-btn color="primary" class="text-none" @click="goToStep(2)">Continue to Steps</v-btn>
                        </div>
                    </div>
                </div>

                <!-- Liquid Modal -->
                <v-dialog v-model="showLiquidModal" max-width="800px" persistent>
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
                                        <template v-slot:activator="{ on, attrs }">
                                            <div
                                                class="color-selector"
                                                :style="{ backgroundColor: liquidForm.color }"
                                                v-bind="attrs"
                                                v-on="on">
                                                <div class="color-check-overlay" v-if="liquidForm.color">
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
                                                        type="color"
                                                        v-model="liquidForm.color"
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

                <!-- Labware Selection Modal -->
                <v-dialog v-model="showLabwareModal" max-width="650px" persistent>
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
                                <template v-slot:prepend-inner>
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

                <!-- Step 2: Define Protocol Steps -->
                <div class="step-container">
                    <div class="step-card" :class="{ dimmed: currentStep !== 2 }">
                        <div class="step-header">
                            <div class="step-number">2</div>
                            <div class="step-info">
                                <h2>Define Protocol Steps</h2>
                                <p>Complete deck layout first</p>
                            </div>
                        </div>

                        <div v-if="currentStep === 2" class="step-2-content">
                            <div class="protocol-list">
                                <div
                                    v-for="(protocolStep, index) in protocolSteps"
                                    :key="index"
                                    class="protocol-item"
                                    @click="selectProtocolStep(index)">
                                    <v-icon class="drag-handle">{{ mdiDragVertical }}</v-icon>
                                    <span class="step-label-text"
                                        >Step {{ index + 1 }}
                                        <span class="action-type">{{ protocolStep.type }}</span></span
                                    >
                                    <p class="step-description">{{ protocolStep.description }}</p>
                                </div>

                                <div class="add-step-container">
                                    <v-menu v-model="showAddStepMenu" offset-y top :close-on-content-click="false">
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-btn text color="grey" class="add-step-btn" v-bind="attrs" v-on="on">
                                                <v-icon left>{{ mdiPlus }}</v-icon>
                                                Add Step
                                            </v-btn>
                                        </template>

                                        <v-list class="step-type-menu">
                                            <v-list-item
                                                v-for="stepType in stepTypes"
                                                :key="stepType.value"
                                                @click="addProtocolStep(stepType)">
                                                <v-list-item-icon>
                                                    <v-icon>{{ stepType.icon }}</v-icon>
                                                </v-list-item-icon>
                                                <v-list-item-content>
                                                    <v-list-item-title>{{ stepType.label }}</v-list-item-title>
                                                </v-list-item-content>
                                            </v-list-item>
                                        </v-list>
                                    </v-menu>
                                </div>
                            </div>

                            <div class="step-actions">
                                <v-btn text class="text-none" @click="goToStep(1)">
                                    <v-icon left small>{{ mdiChevronLeft }}</v-icon>
                                    Back to Deck
                                </v-btn>
                                <v-btn color="primary" class="text-none" @click="goToStep(3)">Continue to Save</v-btn>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Step 3: Save Method -->
                <div class="step-container">
                    <div class="step-card" :class="{ dimmed: currentStep !== 3 }">
                        <div class="step-header">
                            <div class="step-number">3</div>
                            <div class="step-info">
                                <h2>Save Method</h2>
                                <p>Complete previous steps first</p>
                            </div>
                        </div>

                        <div v-if="currentStep === 3" class="step-3-content">
                            <div class="method-form">
                                <div class="form-group">
                                    <label class="form-label">Method Name *</label>
                                    <v-text-field
                                        v-model="methodName"
                                        placeholder="e.g., PCR Setup Protocol"
                                        outlined
                                        dense
                                        dark
                                        hide-details
                                        class="method-input"></v-text-field>
                                </div>

                                <div class="form-group">
                                    <label class="form-label">Description (optional)</label>
                                    <v-textarea
                                        v-model="methodDescription"
                                        placeholder="Add notes about this method..."
                                        outlined
                                        dark
                                        hide-details
                                        rows="4"
                                        class="method-input"></v-textarea>
                                </div>

                                <div class="summary-section">
                                    <h3 class="summary-title">Summary</h3>
                                    <div class="summary-row">
                                        <span class="summary-label">Deck positions:</span>
                                        <span class="summary-value">{{ deckPositionCount }}</span>
                                    </div>
                                    <div class="summary-row">
                                        <span class="summary-label">Protocol steps:</span>
                                        <span class="summary-value">{{ protocolSteps.length }}</span>
                                    </div>
                                </div>
                            </div>

                            <div class="step-actions">
                                <v-btn text class="text-none" @click="goToStep(2)">
                                    <v-icon left small>{{ mdiChevronLeft }}</v-icon>
                                    Back
                                </v-btn>
                                <v-btn
                                    color="primary"
                                    class="text-none save-method-btn"
                                    :disabled="!methodName"
                                    @click="saveMethod">
                                    <v-icon left small>{{ mdiContentSave }}</v-icon>
                                    Save Method
                                </v-btn>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import { Mixins } from 'vue-property-decorator'
import BaseMixin from '@/components/mixins/base'
import {
    mdiCheck,
    mdiLock,
    mdiChevronLeft,
    mdiPlus,
    mdiDragVertical,
    mdiCamera,
    mdiCursorMove,
    mdiTransfer,
    mdiBeaker,
    mdiPause,
    mdiContentSave,
    mdiWater,
    mdiClose,
    mdiFlask,
    mdiMagnify,
} from '@mdi/js'

interface Step {
    number: number
    label: string
}

interface StepType {
    value: string
    label: string
    icon: string
}

interface ProtocolStep {
    type: string
    description: string
}

@Component({
    components: {},
})
export default class Method extends Mixins(BaseMixin) {
    // Icons
    mdiCheck = mdiCheck
    mdiLock = mdiLock
    mdiChevronLeft = mdiChevronLeft
    mdiPlus = mdiPlus
    mdiDragVertical = mdiDragVertical
    mdiCamera = mdiCamera
    mdiCursorMove = mdiCursorMove
    mdiTransfer = mdiTransfer
    mdiBeaker = mdiBeaker
    mdiPause = mdiPause
    mdiContentSave = mdiContentSave
    mdiWater = mdiWater
    mdiClose = mdiClose
    mdiFlask = mdiFlask
    mdiMagnify = mdiMagnify

    // Data
    currentStep = 1
    selectedDeck: number | null = null
    selectedDeckInStep2: number | null = null
    showAddStepMenu = false
    methodName = ''
    methodDescription = ''

    // Liquid Modal
    showLiquidModal = false
    showColorPicker = false
    liquidForm = {
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

    // Labware Modal
    showLabwareModal = false
    labwareSearch = ''
    selectedLabware: string | null = null
    selectedDeckPosition: number | null = null

    labwares = ['Tip racks', 'Tube racks', 'Well plates', 'Reservoirs', 'Aluminum blocks', 'Adapters', 'Lids']

    steps: Step[] = [
        { number: 1, label: 'Configure Deck Layout' },
        { number: 2, label: 'Define Steps' },
        { number: 3, label: 'Save Method' },
    ]

    deckPositions: Record<number, string> = {}

    protocolSteps: ProtocolStep[] = []

    stepTypes: StepType[] = [
        { value: 'camera', label: 'Camera', icon: this.mdiCamera },
        { value: 'move', label: 'Move', icon: this.mdiCursorMove },
        { value: 'transfer', label: 'Transfer', icon: this.mdiTransfer },
        { value: 'mix', label: 'Mix', icon: this.mdiBeaker },
        { value: 'pause', label: 'Pause', icon: this.mdiPause },
    ]

    get deckPositionCount(): number {
        return Object.keys(this.deckPositions).filter((key) => this.deckPositions[parseInt(key)]).length || 15
    }

    get isLiquidFormValid(): boolean {
        return !!(this.liquidForm.name && this.liquidForm.liquidClass && this.liquidForm.color)
    }

    get filteredLabwares(): string[] {
        if (!this.labwareSearch) {
            return this.labwares
        }
        return this.labwares.filter((labware) =>
            labware.toLowerCase().includes(this.labwareSearch.toLowerCase())
        )
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
        this.showLiquidModal = false
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
    }

    saveLiquid(): void {
        if (!this.validateLiquidForm()) {
            return
        }

        // TODO: Save liquid to store or list
        console.log('Saving liquid:', this.liquidForm)
        this.$toast.success('Liquid saved successfully!')
        this.closeLiquidModal()
    }

    selectDeck(position: number): void {
        this.selectedDeck = position
        this.selectedDeckPosition = position
        this.showLabwareModal = true
    }

    selectLabware(labware: string): void {
        this.selectedLabware = labware
    }

    closeLabwareModal(): void {
        this.showLabwareModal = false
        this.labwareSearch = ''
        this.selectedLabware = null
        this.selectedDeckPosition = null
    }

    continueLabware(): void {
        if (!this.selectedLabware || this.selectedDeckPosition === null) {
            return
        }

        // TODO: Save labware to deck position and open Part 2/2 modal
        this.deckPositions[this.selectedDeckPosition] = this.selectedLabware
        this.$toast.success(`${this.selectedLabware} added to position ${this.selectedDeckPosition}`)
        this.closeLabwareModal()
    }

    selectDeckInStep2(position: number): void {
        this.selectedDeckInStep2 = position
        // TODO: Use selected deck for protocol step
    }

    selectProtocolStep(index: number): void {
        // TODO: Edit protocol step
    }

    addProtocolStep(stepType: StepType): void {
        const description =
            stepType.value === 'transfer'
                ? 'Transfer 100µL from source to destination'
                : `${stepType.label} action description`

        this.protocolSteps.push({
            type: stepType.label,
            description: description,
        })

        this.showAddStepMenu = false
    }

    goToStep(step: number): void {
        this.currentStep = step
    }

    saveMethod(): void {
        if (!this.methodName) {
            return
        }

        // TODO: Save method to store
        console.log('Saving method:', {
            name: this.methodName,
            description: this.methodDescription,
            deckPositions: this.deckPositions,
            protocolSteps: this.protocolSteps,
        })

        this.$toast.success('Method saved successfully!')

        // Reset form
        this.currentStep = 1
        this.methodName = ''
        this.methodDescription = ''
        this.protocolSteps = []
        this.deckPositions = {}
    }
}
</script>

<style scoped>
.method-page {
    padding: 24px;
    min-height: 100vh;
}

/* Step Indicator */
.step-indicator {
    display: flex;
    max-width: 800px;
    margin: 0 auto 48px;
}

.step-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
}

.step-circle {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: #2a2a2a;
    border: 2px solid #3a3a3a;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #666;
    font-weight: 600;
    z-index: 2;
    transition: all 0.3s ease;
}

.step-item.active .step-circle,
.step-item.completed .step-circle {
    background: #1976d2;
    border-color: #1976d2;
    color: white;
}

.step-divider {
    position: absolute;
    top: 23px;
    left: calc(50% + 24px);
    width: calc(100% - 48px);
    height: 2px;
    background: #3a3a3a;
    z-index: 1;
}

.step-item.completed .step-divider {
    background: #1976d2;
}

.step-label {
    margin-top: 12px;
    color: #999;
    font-size: 14px;
    white-space: nowrap;
}

.step-item.active .step-label,
.step-item.completed .step-label {
    color: white;
}

/* Step Content */
.method-content {
    max-width: 1600px;
    margin: 0 auto;
}

.steps-layout {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    align-items: stretch;
    grid-auto-rows: 1fr;
}

.step-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.step-card {
    background: #242424;
    border: 2px solid #1976d2;
    border-radius: 12px;
    padding: 32px;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.step-card.dimmed {
    opacity: 0.5;
    border-color: #3a3a3a;
    pointer-events: none;
}

.step-card.dimmed .step-number {
    background: #3a3a3a;
}

.step-header {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 32px;
}

.step-header.small {
    margin-bottom: 16px;
}

.step-number {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: #1976d2;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 600;
    font-size: 20px;
    flex-shrink: 0;
}

.step-number.small {
    width: 36px;
    height: 36px;
    font-size: 16px;
}

.step-number.completed {
    background: #1976d2;
}

.step-info h2 {
    margin: 0;
    font-size: 24px;
    color: white;
    font-weight: 600;
}

.step-info h3 {
    margin: 0;
    font-size: 18px;
    color: white;
    font-weight: 600;
}

.step-info p {
    margin: 4px 0 0 0;
    color: #999;
    font-size: 14px;
}

.step-info p.small-text {
    font-size: 12px;
}

/* Deck Grid */
.deck-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(5, 1fr);
    gap: 16px;
    margin-bottom: 32px;
    flex: 1;
}

.deck-grid.small {
    gap: 8px;
    max-width: 400px;
    margin-bottom: 16px;
}

.deck-position {
    aspect-ratio: 1.5;
    background: #2a2a2a;
    border: 2px solid #3a3a3a;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s ease;
}

.deck-position:hover {
    border-color: #1976d2;
    background: #2f2f2f;
}

.deck-position.selected {
    border-color: #1976d2;
    background: #1e3a5f;
}

.deck-position.small {
    border-width: 1px;
}

.position-number {
    font-size: 18px;
    color: white;
    font-weight: 600;
}

.deck-position.small .position-number {
    font-size: 14px;
}

.position-status {
    font-size: 12px;
    color: #666;
    margin-top: 4px;
}

.deck-position.small .position-status {
    font-size: 10px;
}

/* Step Actions */
.step-actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 32px;
}

/* Step 2 Content */
.step-2-content {
    flex: 1;
    display: flex;
    flex-direction: column;
}

/* Step 3 Content */
.step-3-content {
    flex: 1;
    display: flex;
    flex-direction: column;
}

/* Protocol List */
.protocol-list {
    flex: 1;
    position: relative;
    display: flex;
    flex-direction: column;
}

.protocol-item {
    background: #2a2a2a;
    border: 1px solid #3a3a3a;
    border-radius: 8px;
    padding: 16px;
    margin-bottom: 12px;
    display: flex;
    align-items: flex-start;
    gap: 12px;
    cursor: pointer;
    transition: all 0.2s ease;
}

.protocol-item:hover {
    border-color: #1976d2;
    background: #2f2f2f;
}

.drag-handle {
    color: #666;
    cursor: grab;
}

.step-label-text {
    color: #1976d2;
    font-weight: 600;
    font-size: 14px;
}

.action-type {
    color: white;
}

.step-description {
    color: #999;
    font-size: 13px;
    margin: 4px 0 0 0;
}

.add-step-container {
    display: flex;
    justify-content: center;
    margin-top: auto;
    padding-top: 24px;
}

.add-step-btn {
    border: 2px dashed #3a3a3a;
    width: 100%;
    height: 56px;
    transition: all 0.2s ease;
}

.add-step-btn:hover {
    border-color: #1976d2;
}

.step-type-menu {
    background: #2a2a2a;
    border: 1px solid #3a3a3a;
}

/* Save Method Form */
.back-btn {
    margin-left: auto;
}

.method-form {
    flex: 1;
    display: flex;
    flex-direction: column;
}

.form-group {
    margin-bottom: 24px;
}

.form-label {
    display: block;
    color: white;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 8px;
}

.method-input {
    background: #2a2a2a;
}

.summary-section {
    background: #2a2a2a;
    border: 1px solid #3a3a3a;
    border-radius: 8px;
    padding: 16px;
    margin-top: auto;
}

.summary-title {
    color: white;
    font-size: 16px;
    font-weight: 600;
    margin: 0 0 16px 0;
}

.summary-row {
    display: flex;
    justify-content: space-between;
    padding: 8px 0;
    border-bottom: 1px solid #3a3a3a;
}

.summary-row:last-child {
    border-bottom: none;
}

.summary-label {
    color: #999;
    font-size: 14px;
}

.summary-value {
    color: white;
    font-weight: 600;
    font-size: 14px;
}

.save-method-btn {
    min-width: 160px;
}

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

/* Labware Modal */
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

/* Responsive */
@media (max-width: 1200px) {
    .steps-layout {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 768px) {
    .method-page {
        padding: 16px;
    }

    .step-divider {
        width: 100px;
    }

    .step-card {
        padding: 16px;
    }
}
</style>
