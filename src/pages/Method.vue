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
                            <v-btn color="secondary" class="text-none">
                                <v-icon left small>{{ mdiWater }}</v-icon>
                                Liquids
                            </v-btn>
                            <v-btn color="primary" class="text-none" @click="goToStep(2)">Continue to Steps</v-btn>
                        </div>
                    </div>
                </div>

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

    // Data
    currentStep = 1
    selectedDeck: number | null = null
    selectedDeckInStep2: number | null = null
    showAddStepMenu = false
    methodName = ''
    methodDescription = ''

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

    selectDeck(position: number): void {
        this.selectedDeck = position
        // TODO: Open modal for deck configuration
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
