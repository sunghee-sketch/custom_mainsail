<template>
    <panel
        :title="$t('Panels.SequenceMakerPanel.SequenceMaker')"
        :icon="mdiPlaylistEdit"
        card-class="sequence-maker-panel">
        <template #buttons>
            <v-btn small class="add-step-btn" @click="addStep">
                <v-icon left size="16">{{ mdiPlus }}</v-icon>
                add step
            </v-btn>
            <v-btn small class="done-btn" @click="createSequence">
                <v-icon left size="16">{{ mdiCheck }}</v-icon>
                Done
            </v-btn>
        </template>
        <div class="sequence-list">
            <!-- 활성 시퀀스 -->
            <div v-if="activeSequence" class="sequence-item active" @click="selectSequence(activeSequence)">
                <div class="sequence-content">
                    <div class="sequence-icon">
                        <v-icon>{{ mdiPlayCircle }}</v-icon>
                    </div>
                    <div class="sequence-info">
                        <div class="sequence-name">{{ activeSequence.name }}</div>
                    </div>
                </div>
            </div>

            <!-- 빈 시퀀스 슬롯들 -->
            <div
                v-for="(slot, index) in emptySlots"
                :key="'slot-' + index"
                class="sequence-item empty"
                @click="createNewSequence(index)">
                <div class="sequence-content">
                    <div class="sequence-icon">
                        <v-icon>{{ mdiPlusCircleOutline }}</v-icon>
                    </div>
                    <div class="sequence-info">
                        <div class="sequence-name">Empty slot {{ index + 1 }}</div>
                    </div>
                </div>
            </div>
        </div>
    </panel>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import { Mixins } from 'vue-property-decorator'
import BaseMixin from '@/components/mixins/base'
import Panel from '@/components/ui/Panel.vue'
import { mdiPlaylistEdit, mdiPlus, mdiCheck, mdiPlayCircle, mdiPlusCircleOutline } from '@mdi/js'

@Component({
    name: 'SequenceMakerPanel',
    components: {
        Panel,
    },
})
export default class SequenceMakerPanel extends Mixins(BaseMixin) {
    mdiPlaylistEdit = mdiPlaylistEdit
    mdiPlus = mdiPlus
    mdiCheck = mdiCheck
    mdiPlayCircle = mdiPlayCircle
    mdiPlusCircleOutline = mdiPlusCircleOutline

    activeSequence = {
        id: 1,
        name: 'Tempo... > 어쩌구저쩌구_250926_csh.gcode',
    }

    emptySlots = Array(14).fill(null) // 14개의 빈 슬롯

    selectSequence(sequence: any) {
        console.log('Selected sequence:', sequence)
    }

    createNewSequence(slotIndex: number) {
        console.log('Create new sequence in slot:', slotIndex)
    }

    addStep() {
        console.log('Add step clicked')
    }

    createSequence() {
        console.log('Create sequence')
    }
}
</script>

<style scoped>
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

.sequence-list {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.sequence-item {
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.2s ease;
    min-height: 50px;
}

.sequence-item:hover {
    background: rgba(255, 255, 255, 0.05);
}

.sequence-item.active {
    border: 1px solid rgba(255, 82, 82, 0.5);
    background: rgba(255, 82, 82, 0.1);
}

.sequence-item.empty {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid transparent;
}

.sequence-content {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 16px;
}

.sequence-icon {
    width: 28px;
    height: 28px;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

.sequence-icon .v-icon {
    color: #2196f3;
    font-size: 16px;
}

.sequence-item.empty .sequence-icon .v-icon {
    color: rgba(255, 255, 255, 0.5);
}

.sequence-info {
    flex: 1;
    min-width: 0;
}

.sequence-name {
    color: rgba(255, 255, 255, 0.9);
    font-family: Arial, sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.sequence-item.empty .sequence-name {
    color: rgba(255, 255, 255, 0.5);
}

.button-text {
    margin-left: 4px;
    font-size: 12px;
    font-weight: 400;
}
</style>
