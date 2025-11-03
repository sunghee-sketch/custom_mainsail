<template>
    <div>
        <v-row v-if="isMobile">
            <v-col>
                <toolhead-control-panel class="mb-4"></toolhead-control-panel>
                <macros-panel class="mb-4"></macros-panel>
                <miniconsole-panel class="mb-4"></miniconsole-panel>
            </v-col>
        </v-row>
        <v-row v-else-if="isTablet">
            <v-col class="col-6">
                <toolhead-control-panel class="mb-4"></toolhead-control-panel>
                <macros-panel class="mb-4"></macros-panel>
            </v-col>
            <v-col class="col-6">
                <miniconsole-panel class="mb-4"></miniconsole-panel>
            </v-col>
        </v-row>
        <v-row v-else-if="isDesktop">
            <v-col class="col-4">
                <toolhead-control-panel class="mb-4"></toolhead-control-panel>
            </v-col>
            <v-col class="col-4">
                <macros-panel class="mb-4"></macros-panel>
            </v-col>
            <v-col class="col-4">
                <miniconsole-panel class="mb-4"></miniconsole-panel>
            </v-col>
        </v-row>
        <v-row v-else-if="isWidescreen">
            <v-col class="col-4">
                <toolhead-control-panel class="mb-4"></toolhead-control-panel>
            </v-col>
            <v-col class="col-4">
                <macros-panel class="mb-4"></macros-panel>
            </v-col>
            <v-col class="col-4">
                <miniconsole-panel class="mb-4"></miniconsole-panel>
            </v-col>
        </v-row>
    </div>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import { Mixins } from 'vue-property-decorator'
import BaseMixin from '@/components/mixins/base'
import ToolheadControlPanel from '@/components/panels/ToolheadControlPanel.vue'
import MacrosPanel from '@/components/panels/MacrosPanel.vue'
import MiniconsolePanel from '@/components/panels/MiniconsolePanel.vue'

@Component({
    components: {
        ToolheadControlPanel,
        MacrosPanel,
        MiniconsolePanel,
    },
})
export default class Device extends Mixins(BaseMixin) {
    // Device management logic will be implemented here
}
</script>
<style scoped>
/* Dashboard와 동일한 스타일 적용 */
</style>
