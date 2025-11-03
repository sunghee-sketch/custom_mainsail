<template>
    <panel :title="$t('Panels.WebcamPanel.Webcam')" :icon="mdiWebcam" card-class="webcam-panel">
        <template #buttons>
            <v-btn icon small class="header-button">
                <v-icon size="16">{{ mdiMenuDown }}</v-icon>
            </v-btn>
        </template>
        <div class="no-webcam">
            <div class="no-webcam-icon">
                <v-icon size="56" color="rgba(255,255,255,0.3)">{{ mdiWebcam }}</v-icon>
            </div>
            <p class="text-center mb-0 text--disabled">Webcam Panel Ready</p>
        </div>
    </panel>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import { Mixins } from 'vue-property-decorator'
import BaseMixin from '@/components/mixins/base'
import Panel from '@/components/ui/Panel.vue'
import { mdiWebcam, mdiMenuDown } from '@mdi/js'

@Component({
    name: 'WebcamPanel',
    components: {
        Panel,
    },
})
export default class WebcamPanel extends Mixins(BaseMixin) {
    mdiWebcam = mdiWebcam
    mdiMenuDown = mdiMenuDown
}
</script>

<style scoped>
/* WebcamPanel 전용 스타일 */

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
