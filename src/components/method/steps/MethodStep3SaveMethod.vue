<template>
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
                            :value="methodName"
                            placeholder="e.g., PCR Setup Protocol"
                            outlined
                            dense
                            dark
                            hide-details
                            class="method-input"
                            @input="$emit('update:method-name', $event)"></v-text-field>
                    </div>

                    <div class="form-group">
                        <label class="form-label">Description (optional)</label>
                        <v-textarea
                            :value="methodDescription"
                            placeholder="Add notes about this method..."
                            outlined
                            dark
                            hide-details
                            rows="4"
                            class="method-input"
                            @input="$emit('update:method-description', $event)"></v-textarea>
                    </div>

                    <div class="summary-section">
                        <h3 class="summary-title">Summary</h3>
                        <div class="summary-row">
                            <span class="summary-label">Deck positions:</span>
                            <span class="summary-value">{{ deckPositionCount }}</span>
                        </div>
                        <div class="summary-row">
                            <span class="summary-label">Protocol steps:</span>
                            <span class="summary-value">{{ protocolStepsCount }}</span>
                        </div>
                    </div>
                </div>

                <div class="step-actions">
                    <v-btn text class="text-none" @click="$emit('back')">
                        <v-icon left small>{{ mdiChevronLeft }}</v-icon>
                        Back
                    </v-btn>
                    <v-btn
                        color="primary"
                        class="text-none save-method-btn"
                        :disabled="!methodName"
                        @click="$emit('save')">
                        <v-icon left small>{{ mdiContentSave }}</v-icon>
                        Save Method
                    </v-btn>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import { Mixins, Prop } from 'vue-property-decorator'
import BaseMixin from '@/components/mixins/base'
import { mdiChevronLeft, mdiContentSave } from '@mdi/js'

@Component({
    components: {},
})
export default class MethodStep3SaveMethod extends Mixins(BaseMixin) {
    // Icons
    mdiChevronLeft = mdiChevronLeft
    mdiContentSave = mdiContentSave

    // Props
    @Prop({ required: true, type: String })
    declare methodName: string

    @Prop({ required: true, type: String })
    declare methodDescription: string

    @Prop({ required: true, type: Number })
    declare deckPositionCount: number

    @Prop({ required: true, type: Number })
    declare protocolStepsCount: number

    @Prop({ required: true, type: Number })
    declare currentStep: number
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

.step-3-content {
    flex: 1;
    display: flex;
    flex-direction: column;
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

.step-actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 32px;
}

.save-method-btn {
    min-width: 160px;
}
</style>
