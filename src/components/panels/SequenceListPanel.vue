<template>
    <panel
        :title="$t('Panels.SequenceListPanel.SequenceList')"
        :icon="mdiPlaylistPlay"
        card-class="sequence-list-panel">
        <template #buttons>
            <v-btn icon small class="header-button">
                <v-icon size="16">{{ mdiDotsVertical }}</v-icon>
            </v-btn>
        </template>
        <!-- Active Sequence -->
        <div class="active-sequence">
            <div class="sequence-header">
                <div class="sequence-icon">
                    <v-icon size="16" color="rgba(33, 150, 243, 0.8)">{{ mdiPlay }}</v-icon>
                </div>
                <div class="sequence-text">
                    <span class="sequence-name">Tempo... > example_file.gcode</span>
                </div>
            </div>
            <div class="progress-bar">
                <div class="progress-fill"></div>
            </div>
        </div>

        <!-- Sequence List -->
        <div class="sequence-list">
            <div class="sequence-item" v-for="(sequence, index) in sequenceList" :key="index">
                <div class="sequence-content">
                    <div class="sequence-icon">
                        <v-icon size="14" color="rgba(255,255,255,0.5)">{{ mdiFileDocument }}</v-icon>
                    </div>
                    <span class="sequence-name">{{ sequence.name }}</span>
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
import { mdiPlaylistPlay, mdiDotsVertical, mdiPlay, mdiFileDocument } from '@mdi/js'

@Component({
    name: 'SequenceListPanel',
    components: {
        Panel,
    },
})
export default class SequenceListPanel extends Mixins(BaseMixin) {
    mdiPlaylistPlay = mdiPlaylistPlay
    mdiDotsVertical = mdiDotsVertical
    mdiPlay = mdiPlay
    mdiFileDocument = mdiFileDocument

    get sequenceList() {
        // Mock data - 실제로는 store에서 가져와야 함
        return [
            { name: 'calibration.gcode' },
            { name: 'test_print.gcode' },
            { name: 'benchy.gcode' },
            { name: 'large_model.gcode' },
        ]
    }
}
</script>

<style scoped>
/* SequenceListPanel 전용 스타일 */

.panel-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 20px;
    height: 44px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.header-left {
    display: flex;
    align-items: center;
    gap: 12px;
}

.icon-container {
    width: 28px;
    height: 28px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.title-container {
    flex: 1;
}

.panel-title {
    color: rgba(255, 255, 255, 0.9);
    font-family: Arial, sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    margin: 0;
}

.header-right {
    display: flex;
    align-items: center;
}

.header-button {
    width: 28px;
    height: 28px;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.7);
}

.header-button:hover {
    background: rgba(255, 255, 255, 0.15);
}

.panel-divider {
    height: 1px;
    background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.13) 50%,
        rgba(255, 255, 255, 0) 100%
    );
}

.panel-content {
    padding: 16px;
    background: linear-gradient(135deg, #101828 0%, #000000 50%, #101828 100%);
    border-radius: 0 0 10px 10px;
    position: relative;
    height: calc(100% - 45px);
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.panel-content::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 50%, rgba(33, 150, 243, 0.1) 0%, rgba(0, 0, 0, 0) 100%);
    pointer-events: none;
}

.active-sequence {
    position: relative;
    z-index: 1;
    background: #1a2942;
    border: 1px solid rgba(33, 150, 243, 0.3);
    border-radius: 10px;
    padding: 12px;
}

.sequence-header {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 8px;
}

.sequence-icon {
    width: 28px;
    height: 28px;
    border-radius: 8px;
    background: rgba(33, 150, 243, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
}

.sequence-text {
    flex: 1;
}

.sequence-name {
    color: #ffffff;
    font-family: Arial, sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
}

.progress-bar {
    width: 100%;
    height: 4px;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 2px;
    overflow: hidden;
}

.progress-fill {
    width: 30%;
    height: 100%;
    background: linear-gradient(90deg, #2196f3 0%, #00bcd4 100%);
    border-radius: 2px;
    transition: width 0.3s ease;
}

.sequence-list {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    gap: 8px;
    flex: 1;
}

.sequence-item {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 10px;
    padding: 8px 12px;
    cursor: pointer;
    transition: all 0.2s ease;
}

.sequence-item:hover {
    background: rgba(255, 255, 255, 0.08);
}

.sequence-content {
    display: flex;
    align-items: center;
    gap: 10px;
}

.sequence-content .sequence-icon {
    width: 20px;
    height: 20px;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
}

.sequence-content .sequence-name {
    color: rgba(255, 255, 255, 0.7);
    font-family: Arial, sans-serif;
    font-weight: 400;
    font-size: 13px;
    line-height: 18px;
}

/* Responsive Design */
@media (max-width: 768px) {
    .panel-header {
        padding: 12px 16px;
    }

    .panel-title {
        font-size: 14px;
    }

    .panel-content {
        padding: 12px;
        gap: 10px;
    }

    .active-sequence {
        padding: 10px;
    }

    .sequence-item {
        padding: 6px 10px;
    }
}

@media (max-width: 480px) {
    .active-sequence {
        padding: 8px 10px;
    }

    .icon-container {
        width: 24px;
        height: 24px;
    }

    .panel-title {
        font-size: 13px;
    }

    .sequence-name {
        font-size: 12px;
    }

    .sequence-content .sequence-name {
        font-size: 12px;
    }
}
</style>
