<template>
    <div class="method-page">
        <!-- Step Indicator -->
        <MethodStepIndicator :steps="steps" :current-step="currentStep" />

        <!-- Step Content -->
        <div class="method-content">
            <div class="steps-layout">
                <!-- Step 1: Configure Deck Layout -->
                <MethodStep1DeckConfig
                    :deck-positions="deckPositions"
                    :current-step="currentStep"
                    @update:deck-position="updateDeckPosition"
                    @continue="goToStep(2)" />

                <!-- Step 2: Define Protocol Steps -->
                <MethodStep2ProtocolSteps
                    :protocol-steps="protocolSteps"
                    :current-step="currentStep"
                    :step-types="stepTypes"
                    @select-step="selectProtocolStep"
                    @add-step="addProtocolStep"
                    @back="goToStep(1)"
                    @continue="goToStep(3)" />

                <!-- Step 3: Save Method -->
                <MethodStep3SaveMethod
                    :method-name="methodName"
                    :method-description="methodDescription"
                    :deck-position-count="deckPositionCount"
                    :protocol-steps-count="protocolSteps.length"
                    :current-step="currentStep"
                    @update:method-name="methodName = $event"
                    @update:method-description="methodDescription = $event"
                    @back="goToStep(2)"
                    @save="saveMethod" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import { Mixins } from 'vue-property-decorator'
import BaseMixin from '@/components/mixins/base'
import MethodStepIndicator from '@/components/method/MethodStepIndicator.vue'
import MethodStep1DeckConfig from '@/components/method/steps/MethodStep1DeckConfig.vue'
import MethodStep2ProtocolSteps from '@/components/method/steps/MethodStep2ProtocolSteps.vue'
import MethodStep3SaveMethod from '@/components/method/steps/MethodStep3SaveMethod.vue'
import { mdiCamera, mdiCursorMove, mdiTransfer, mdiBeaker, mdiPause } from '@mdi/js'
import type { Step, StepType, ProtocolStep } from '@/types/method'

@Component({
    components: {
        MethodStepIndicator,
        MethodStep1DeckConfig,
        MethodStep2ProtocolSteps,
        MethodStep3SaveMethod,
    },
})
export default class Method extends Mixins(BaseMixin) {
    // Icons
    mdiCamera = mdiCamera
    mdiCursorMove = mdiCursorMove
    mdiTransfer = mdiTransfer
    mdiBeaker = mdiBeaker
    mdiPause = mdiPause

    // Data
    currentStep = 1
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

    // Computed
    get deckPositionCount(): number {
        return Object.keys(this.deckPositions).filter((key) => this.deckPositions[parseInt(key)]).length || 15
    }

    // Methods
    goToStep(step: number): void {
        this.currentStep = step
    }

    updateDeckPosition(position: number, labware: string): void {
        this.deckPositions[position] = labware
    }

    selectProtocolStep(index: number): void {
        // TODO: Edit protocol step
        console.log('Selected protocol step:', index)
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
}
</style>
