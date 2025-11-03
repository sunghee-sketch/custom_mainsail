<template>
    <div class="sequence-page">
        <div class="sequence-content">
            <v-row v-if="isMobile">
                <v-col>
                    <file-panel class="mb-4"></file-panel>
                    <sequence-maker-panel class="mb-4"></sequence-maker-panel>
                </v-col>
            </v-row>
            <v-row v-else-if="isTablet">
                <v-col class="col-6">
                    <file-panel class="mb-4"></file-panel>
                </v-col>
                <v-col class="col-6">
                    <sequence-maker-panel class="mb-4"></sequence-maker-panel>
                </v-col>
            </v-row>
            <v-row v-else-if="isDesktop">
                <v-col class="col-6">
                    <file-panel class="mb-4"></file-panel>
                </v-col>
                <v-col class="col-6">
                    <sequence-maker-panel class="mb-4"></sequence-maker-panel>
                </v-col>
            </v-row>
            <v-row v-else-if="isWidescreen">
                <v-col class="col-6">
                    <file-panel class="mb-4"></file-panel>
                </v-col>
                <v-col class="col-6">
                    <sequence-maker-panel class="mb-4"></sequence-maker-panel>
                </v-col>
            </v-row>
        </div>
    </div>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import { Mixins } from 'vue-property-decorator'
import BaseMixin from '@/components/mixins/base'
import FilePanel from '@/components/panels/FilePanel.vue'
import SequenceMakerPanel from '@/components/panels/SequenceMakerPanel.vue'

@Component({
    components: {
        FilePanel,
        SequenceMakerPanel,
    },
})
export default class Sequence extends Mixins(BaseMixin) {
    // Sequence management logic will be implemented here
}
</script>
<style scoped>
.sequence-content {
    display: grid;
    gap: 16px;
}
</style>
