<template>
    <div class="method-page">
        <div class="method-content">
            <v-row v-if="isMobile">
                <v-col>
                    <method-list-panel class="mb-4"></method-list-panel>
                    <deck-layout-panel class="mb-4"></deck-layout-panel>
                    <details-panel class="mb-4"></details-panel>
                    <procedure-steps-panel class="mb-4"></procedure-steps-panel>
                </v-col>
            </v-row>
            <v-row v-else-if="isTablet">
                <v-col class="col-6">
                    <method-list-panel class="mb-4"></method-list-panel>
                    <details-panel class="mb-4"></details-panel>
                </v-col>
                <v-col class="col-6">
                    <deck-layout-panel class="mb-4"></deck-layout-panel>
                    <procedure-steps-panel class="mb-4"></procedure-steps-panel>
                </v-col>
            </v-row>
            <v-row v-else-if="isDesktop">
                <v-col class="col-6">
                    <method-list-panel class="mb-4"></method-list-panel>
                    <details-panel class="mb-4"></details-panel>
                </v-col>
                <v-col class="col-6">
                    <deck-layout-panel class="mb-4"></deck-layout-panel>
                    <procedure-steps-panel class="mb-4"></procedure-steps-panel>
                </v-col>
            </v-row>
            <v-row v-else-if="isWidescreen">
                <v-col class="col-6">
                    <method-list-panel class="mb-4"></method-list-panel>
                    <details-panel class="mb-4"></details-panel>
                </v-col>
                <v-col class="col-6">
                    <deck-layout-panel class="mb-4"></deck-layout-panel>
                    <procedure-steps-panel class="mb-4"></procedure-steps-panel>
                </v-col>
            </v-row>
        </div>
    </div>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import { Mixins } from 'vue-property-decorator'
import BaseMixin from '@/components/mixins/base'
import MethodListPanel from '@/components/panels/MethodListPanel.vue'
import DeckLayoutPanel from '@/components/panels/DeckLayoutPanel.vue'
import DetailsPanel from '@/components/panels/DetailsPanel.vue'
import ProcedureStepsPanel from '@/components/panels/ProcedureStepsPanel.vue'

@Component({
    components: {
        MethodListPanel,
        DeckLayoutPanel,
        DetailsPanel,
        ProcedureStepsPanel,
    },
})
export default class Method extends Mixins(BaseMixin) {
    // Method management logic will be implemented here
}
</script>
<style scoped>
/* Dashboard와 동일한 스타일 적용 */

.method-content {
    display: grid;
    gap: 24px;
}
</style>
