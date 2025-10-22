<template>
    <div class="figma-panel status-panel">
        <!-- Panel Header -->
        <div class="panel-header">
            <div class="header-left">
                <div class="status-indicator">
                    <div class="status-dot" :class="getStatusClass()"></div>
                </div>
                <div class="title-container">
                    <h3 class="panel-title">Status</h3>
                </div>
            </div>
            <div class="header-right">
                <v-btn icon small class="header-button">
                    <v-icon size="16">{{ mdiDotsVertical }}</v-icon>
                </v-btn>
            </div>
        </div>

        <!-- Divider -->
        <div class="panel-divider"></div>

        <!-- Panel Content -->
        <div class="panel-content">
            <!-- Method Progress -->
            <div class="progress-item">
                <div class="progress-header">
                    <span class="progress-label">Method</span>
                    <span class="progress-percentage">{{ methodProgress }}%</span>
                </div>
                <div class="progress-bar">
                    <div class="progress-fill" :style="{ width: methodProgress + '%' }"></div>
                </div>
            </div>

            <!-- Sequence Progress -->
            <div class="progress-item">
                <div class="progress-header">
                    <span class="progress-label">Sequence</span>
                    <span class="progress-percentage">{{ sequenceProgress }}%</span>
                </div>
                <div class="progress-bar">
                    <div class="progress-fill" :style="{ width: sequenceProgress + '%' }"></div>
                </div>
            </div>

            <!-- Action Buttons -->
            <div class="action-buttons">
                <div class="action-button pause-button">
                    <span class="button-label">Pause</span>
                    <v-btn icon class="button-icon">
                        <v-icon size="16">{{ mdiPause }}</v-icon>
                    </v-btn>
                </div>
                <div class="action-button stop-button">
                    <span class="button-label">Stop</span>
                    <v-btn icon class="button-icon">
                        <v-icon size="16">{{ mdiStop }}</v-icon>
                    </v-btn>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import { Mixins } from 'vue-property-decorator'
import BaseMixin from '@/components/mixins/base'
import { mdiDotsVertical, mdiPause, mdiStop } from '@mdi/js'

@Component({
    name: 'StatusPanel',
})
export default class StatusPanel extends Mixins(BaseMixin) {
    mdiDotsVertical = mdiDotsVertical
    mdiPause = mdiPause
    mdiStop = mdiStop

    get methodProgress() {
        // Mock data - 실제로는 store에서 가져와야 함
        return 0
    }

    get sequenceProgress() {
        // Mock data - 실제로는 store에서 가져와야 함
        return 0
    }

    getStatusClass() {
        switch (this.printer_state) {
            case 'ready':
                return 'ready'
            case 'printing':
                return 'printing'
            case 'paused':
                return 'paused'
            case 'error':
                return 'error'
            default:
                return 'ready'
        }
    }
}
</script>

<style scoped>
/* 공통 스타일은 panel-common.css에서 관리 */

.figma-panel {
    aspect-ratio: 4 / 3;
    min-height: 300px;
}

.status-indicator {
    width: 20px;
    height: 20px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.status-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #00c950;
}

.status-dot.ready {
    background-color: #00c950;
}

.status-dot.printing {
    background-color: #2196f3;
}

.status-dot.paused {
    background-color: #ff9800;
}

.status-dot.error {
    background-color: #f44336;
}

.progress-item {
    position: relative;
    z-index: 1;
}

.progress-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
}

.progress-label {
    color: rgba(255, 255, 255, 0.6);
    font-family: Arial, sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
}

.progress-percentage {
    color: rgba(255, 255, 255, 0.9);
    font-family: Arial, sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
}

.progress-bar {
    width: 100%;
    height: 16px;
    background: #ececf0;
    border-radius: 8px;
    overflow: hidden;
    position: relative;
}

.progress-fill {
    height: 100%;
    background: linear-gradient(90deg, #2196f3 0%, #00bcd4 100%);
    border-radius: 8px;
    transition: width 0.3s ease;
}

.action-buttons {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: auto;
}

.action-button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.02);
}

.button-label {
    color: rgba(255, 255, 255, 0.6);
    font-family: Arial, sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
}

.button-icon {
    width: 32px;
    height: 32px;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.7);
}

.button-icon:hover {
    background: rgba(255, 255, 255, 0.15);
}

.pause-button:hover {
    background: rgba(255, 152, 0, 0.1);
    border-color: rgba(255, 152, 0, 0.2);
}

.stop-button:hover {
    background: rgba(244, 67, 54, 0.1);
    border-color: rgba(244, 67, 54, 0.2);
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
        gap: 12px;
    }

    .action-button {
        padding: 12px;
    }
}

@media (max-width: 480px) {
    .figma-panel {
        border-radius: 10px;
    }

    .panel-header {
        padding: 10px 12px;
    }

    .status-indicator {
        width: 18px;
        height: 18px;
    }

    .status-dot {
        width: 6px;
        height: 6px;
    }

    .panel-title {
        font-size: 13px;
    }

    .progress-label,
    .progress-percentage {
        font-size: 13px;
    }

    .button-label {
        font-size: 13px;
    }
}
</style>
