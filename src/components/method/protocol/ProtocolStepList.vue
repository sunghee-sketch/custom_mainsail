<template>
    <div class="protocol-list">
        <div
            v-for="(protocolStep, index) in steps"
            :key="index"
            class="protocol-item"
            @click="$emit('select-step', index)">
            <v-icon class="drag-handle">{{ mdiDragVertical }}</v-icon>
            <span class="step-label-text"
                >Step {{ index + 1 }}
                <span class="action-type">{{ protocolStep.type }}</span></span
            >
            <p class="step-description">{{ protocolStep.description }}</p>
        </div>

        <div class="add-step-container">
            <v-menu v-model="showAddStepMenu" offset-y top :close-on-content-click="false">
                <template #activator="{ on, attrs }">
                    <v-btn text color="grey" class="add-step-btn" v-bind="attrs" v-on="on">
                        <v-icon left>{{ mdiPlus }}</v-icon>
                        Add Step
                    </v-btn>
                </template>

                <v-list class="step-type-menu">
                    <v-list-item v-for="stepType in stepTypes" :key="stepType.value" @click="handleAddStep(stepType)">
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
</template>

<script lang="ts">
import Component from 'vue-class-component'
import { Mixins, Prop } from 'vue-property-decorator'
import BaseMixin from '@/components/mixins/base'
import { mdiDragVertical, mdiPlus } from '@mdi/js'
import type { ProtocolStep, StepType } from '@/types/method'

@Component({
    components: {},
})
export default class ProtocolStepList extends Mixins(BaseMixin) {
    // Icons
    mdiDragVertical = mdiDragVertical
    mdiPlus = mdiPlus

    // Props
    @Prop({ required: true, type: Array })
    declare steps: ProtocolStep[]

    @Prop({ required: true, type: Array })
    declare stepTypes: StepType[]

    // Data
    showAddStepMenu = false

    // Methods
    handleAddStep(stepType: StepType): void {
        this.$emit('add-step', stepType)
        this.showAddStepMenu = false
    }
}
</script>

<style scoped>
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
</style>
