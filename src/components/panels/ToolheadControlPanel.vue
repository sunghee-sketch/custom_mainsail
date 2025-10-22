<template>
    <panel
        v-if="klipperReadyForGui"
        :title="$t('Panels.ToolheadControlPanel.ManualControl')"
        :icon="mdiGamepad"
        card-class="toolhead-panel">
        <template #buttons>
            <v-btn icon small class="header-button">
                <v-icon size="16">{{ mdiDotsVertical }}</v-icon>
            </v-btn>
        </template>
        <!-- MOVE TO CONTROL -->
        <move-to-control />
        <!-- AXIS CONTROL -->
        <v-container v-if="axisControlVisible">
            <component :is="`${controlStyle}-control`" />
        </v-container>
        <!-- Z-OFFSET CONTROL -->
        <v-divider v-if="showZOffset" />
        <v-container v-if="showZOffset">
            <zoffset-control />
        </v-container>
        <!-- SPEED FACTOR -->
        <v-divider v-if="showSpeedFactor" />
        <v-container v-if="showSpeedFactor">
            <tool-slider
                :label="$t('Panels.ToolheadControlPanel.SpeedFactor')"
                :icon="mdiSpeedometer"
                :target="speedFactor"
                :min="1"
                :max="200"
                :multi="100"
                :step="5"
                :dynamic-range="true"
                :has-input-field="true"
                command="M220"
                attribute-name="S" />
        </v-container>
    </panel>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator'
import BarsControl from '@/components/panels/ToolheadControls/BarsControl.vue'
import BaseMixin from '../mixins/base'
import CircleControl from '@/components/panels/ToolheadControls/CircleControl.vue'
import ControlMixin from '@/components/mixins/control'
import CrossControl from '@/components/panels/ToolheadControls/CrossControl.vue'
import MoveToControl from '@/components/panels/ToolheadControls/MoveToControl.vue'
import Panel from '@/components/ui/Panel.vue'
import ToolSlider from '@/components/inputs/ToolSlider.vue'
import ZoffsetControl from '@/components/panels/ToolheadControls/ZoffsetControl.vue'
import { mdiDotsVertical, mdiEngineOff, mdiGamepad, mdiSpeedometer, mdiMenuDown, mdiRestore } from '@mdi/js'

@Component({
    components: {
        BarsControl,
        CircleControl,
        CrossControl,
        MoveToControl,
        Panel,
        ToolSlider,
        ZoffsetControl,
    },
})
export default class ToolheadControlPanel extends Mixins(BaseMixin, ControlMixin) {
    mdiDotsVertical = mdiDotsVertical
    mdiEngineOff = mdiEngineOff
    mdiGamepad = mdiGamepad
    mdiSpeedometer = mdiSpeedometer
    mdiRestore = mdiRestore
    mdiMenuDown = mdiMenuDown

    get controlStyle(): string {
        return this.$store.state.gui.control.style ?? 'bars'
    }

    get actionButton(): string {
        return this.$store.state.gui.control.actionButton ?? this.defaultActionButton
    }

    get speedFactor(): number {
        return this.$store.state.printer?.gcode_move?.speed_factor ?? 1
    }

    get isPrinting() {
        return ['printing'].includes(this.printer_state)
    }

    get axisControlVisible() {
        if (!this.showControl) return false

        return !(this.isPrinting && (this.$store.state.gui.control.hideDuringPrint ?? false))
    }

    get showButtons() {
        if (this.controlStyle !== 'bars' && (this.existsZtilt || this.existsQGL)) return true

        return this.existsBedScrews || this.existsBedTilt || this.existsDeltaCalibrate || this.existsScrewsTilt
    }

    get showControl(): boolean {
        return this.$store.state.gui.view.toolhead.showControl ?? true
    }

    get showZOffset(): boolean {
        return this.$store.state.gui.view.toolhead.showZOffset ?? true
    }

    get showSpeedFactor(): boolean {
        return this.$store.state.gui.view.toolhead.showSpeedFactor ?? true
    }
}
</script>

<style scoped>
/* ToolheadControlPanel 전용 스타일 */
</style>
