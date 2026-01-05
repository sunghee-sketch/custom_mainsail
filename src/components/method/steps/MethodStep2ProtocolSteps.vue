<template>
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
                <ProtocolStepList
                    :steps="protocolSteps"
                    :step-types="stepTypes"
                    @select-step="handleSelectStep"
                    @add-step="handleAddStep" />

                <div class="step-actions">
                    <v-btn text class="text-none" @click="$emit('back')">
                        <v-icon left small>{{ mdiChevronLeft }}</v-icon>
                        Back to Deck
                    </v-btn>
                    <v-btn color="primary" class="text-none" @click="$emit('continue')">Continue to Save</v-btn>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import { Mixins, Prop } from 'vue-property-decorator'
import BaseMixin from '@/components/mixins/base'
import { mdiChevronLeft } from '@mdi/js'
import ProtocolStepList from '@/components/method/protocol/ProtocolStepList.vue'
import type { ProtocolStep, StepType } from '@/types/method'

@Component({
    components: {
        ProtocolStepList,
    },
})
export default class MethodStep2ProtocolSteps extends Mixins(BaseMixin) {
    // Icons
    mdiChevronLeft = mdiChevronLeft

    // Props
    @Prop({ required: true, type: Array })
    declare protocolSteps: ProtocolStep[]

    @Prop({ required: true, type: Number })
    declare currentStep: number

    @Prop({ required: true, type: Array })
    declare stepTypes: StepType[]

    // Methods
    handleSelectStep(index: number): void {
        this.$emit('select-step', index)
    }

    handleAddStep(stepType: StepType): void {
        this.$emit('add-step', stepType)
    }
}
</script>

<style scoped>
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

.step-header {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 32px;
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

.step-card.dimmed .step-number {
    background: #3a3a3a;
}

.step-info h2 {
    margin: 0;
    font-size: 24px;
    color: white;
    font-weight: 600;
}

.step-info p {
    margin: 4px 0 0 0;
    color: #999;
    font-size: 14px;
}

.step-2-content {
    flex: 1;
    display: flex;
    flex-direction: column;
}

.step-actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 32px;
}
</style>
