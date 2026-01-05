<template>
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
            <div v-if="step.number < steps.length" class="step-divider"></div>
            <div class="step-label">{{ step.label }}</div>
        </div>
    </div>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import { Mixins, Prop } from 'vue-property-decorator'
import BaseMixin from '@/components/mixins/base'
import { mdiCheck, mdiLock } from '@mdi/js'
import type { Step } from '@/types/method'

@Component({
    components: {},
})
export default class MethodStepIndicator extends Mixins(BaseMixin) {
    // Icons
    mdiCheck = mdiCheck
    mdiLock = mdiLock

    // Props
    @Prop({ required: true, type: Array })
    declare steps: Step[]

    @Prop({ required: true, type: Number })
    declare currentStep: number
}
</script>

<style scoped>
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
</style>
