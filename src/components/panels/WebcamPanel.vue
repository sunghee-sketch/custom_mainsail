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
/* 공통 스타일은 panel-common.css에서 관리 */

.figma-panel {
    aspect-ratio: 4 / 3;
    min-height: 300px;
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
