<template>
    <div class="figma-panel procedure-steps-panel">
        <!-- Panel Header -->
        <div class="panel-header">
            <div class="header-left">
                <div class="icon-container">
                    <v-icon class="nav-icon">{{ mdiPlaylistPlay }}</v-icon>
                </div>
                <div class="title-container">
                    <h3 class="panel-title">Procedure steps</h3>
                </div>
            </div>
            <div class="header-right">
                <v-btn small class="add-step-btn">
                    <v-icon left size="16">{{ mdiPlus }}</v-icon>
                    add step
                </v-btn>
                <v-btn small class="done-btn">
                    <v-icon left size="16">{{ mdiCheck }}</v-icon>
                    Done
                </v-btn>
            </div>
        </div>

        <!-- Divider -->
        <div class="panel-divider"></div>

        <!-- Panel Content -->
        <div class="panel-content">
            <!-- Steps List -->
            <div class="steps-list">
                <div
                    v-for="(step, index) in procedureSteps"
                    :key="index"
                    class="step-item"
                    :class="{ active: selectedStep === step.id }"
                    @click="selectStep(step.id)">
                    <div class="step-icon">
                        <v-icon>{{ step.icon }}</v-icon>
                    </div>
                    <div class="step-content">
                        <span class="step-title">{{ step.title }}</span>
                        <span class="step-description">{{ step.description }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Component from 'vue-class-component'
import { Mixins } from 'vue-property-decorator'
import BaseMixin from '@/components/mixins/base'
import { mdiPlaylistPlay, mdiPlus, mdiCheck, mdiPlay, mdiStop } from '@mdi/js'

@Component({
    name: 'ProcedureStepsPanel',
})
export default class ProcedureStepsPanel extends Mixins(BaseMixin) {
    mdiPlaylistPlay = mdiPlaylistPlay
    mdiPlus = mdiPlus
    mdiCheck = mdiCheck
    mdiPlay = mdiPlay
    mdiStop = mdiStop

    selectedStep = 1

    procedureSteps = [
        {
            id: 1,
            title: 'Starting Deck',
            description: 'Initialize deck position',
            icon: mdiPlay
        },
        {
            id: 2,
            title: 'Ending Deck',
            description: 'Finalize deck position',
            icon: mdiStop
        }
    ]

    selectStep(stepId: number) {
        this.selectedStep = stepId
    }

    addStep() {
        // Add new step logic
        console.log('Add new step')
    }

    done() {
        // Complete procedure logic
        console.log('Procedure completed')
    }
}
</script>

<style scoped>
/* 공통 스타일은 panel-common.css에서 관리 */

.figma-panel {
    aspect-ratio: 4 / 3;
    min-height: 300px;
}

.add-step-btn {
    background: rgba(255, 255, 255, 0.1) !important;
    color: #ffffff !important;
    margin-right: 8px;
    text-transform: none;
    font-size: 14px;
}

.done-btn {
    background: #00c950 !important;
    color: #ffffff !important;
    text-transform: none;
    font-size: 14px;
}

.steps-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
    height: 100%;
}

.step-item {
    background: transparent;
    border: 1px solid rgba(33, 150, 243, 0.5);
    border-radius: 10px;
    padding: 16px;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: all 0.2s ease;
}

.step-item:hover {
    background: rgba(33, 150, 243, 0.05);
}

.step-item.active {
    background: rgba(33, 150, 243, 0.1);
    border-color: rgba(33, 150, 243, 0.8);
}

.step-icon {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 16px;
}

.step-icon .v-icon {
    color: #2196f3;
    font-size: 20px;
}

.step-content {
    flex: 1;
    display: flex;
    flex-direction: column;
}

.step-title {
    color: #ffffff;
    font-size: 16px;
    font-family: Arial, sans-serif;
    font-weight: 400;
    margin-bottom: 4px;
}

.step-description {
    color: rgba(255, 255, 255, 0.7);
    font-size: 12px;
    font-family: Arial, sans-serif;
    font-weight: 400;
}
</style>
