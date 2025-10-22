<template>
    <div class="figma-panel webcam-panel">
        <!-- Panel Header -->
        <div class="panel-header">
            <div class="header-left">
                <div class="icon-container">
                    <v-icon size="16" color="rgba(255,255,255,0.7)">{{ mdiWebcam }}</v-icon>
                </div>
                <div class="title-container">
                    <h3 class="panel-title">WebCam</h3>
                </div>
            </div>
            <div class="header-right">
                <v-btn icon small class="header-button">
                    <v-icon size="16">{{ mdiMenuDown }}</v-icon>
                </v-btn>
            </div>
        </div>

        <!-- Divider -->
        <div class="panel-divider"></div>

        <!-- Panel Content -->
        <div class="panel-content">
            <div class="no-webcam">
                <div class="no-webcam-icon">
                    <v-icon size="56" color="rgba(255,255,255,0.3)">{{ mdiWebcam }}</v-icon>
                </div>
                <p class="text-center mb-0 text--disabled">Webcam Panel Ready</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import { Mixins } from 'vue-property-decorator'
import BaseMixin from '@/components/mixins/base'
import { mdiWebcam, mdiMenuDown } from '@mdi/js'

@Component({
    name: 'WebcamPanel',
})
export default class WebcamPanel extends Mixins(BaseMixin) {
    mdiWebcam = mdiWebcam
    mdiMenuDown = mdiMenuDown
}
</script>

<style scoped>
.figma-panel {
    background: linear-gradient(180deg, #1e1e1e 0%, #1a1a1a 100%);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 14px;
    overflow: hidden;
    position: relative;
    aspect-ratio: 4 / 3;
    min-height: 300px;
}

.figma-panel::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0) 100%);
    pointer-events: none;
}

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
    align-items: center;
    justify-content: center;
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

.webcam-content {
    position: relative;
    z-index: 1;
    width: 100%;
    height: 100%;
}

.no-webcam {
    position: relative;
    z-index: 1;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
}

.no-webcam-icon {
    margin-bottom: 16px;
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
    }
}

@media (max-width: 480px) {
    .figma-panel {
        border-radius: 10px;
    }

    .panel-header {
        padding: 10px 12px;
    }

    .icon-container {
        width: 24px;
        height: 24px;
    }

    .panel-title {
        font-size: 13px;
    }
}
</style>
