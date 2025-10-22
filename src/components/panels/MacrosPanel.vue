<template>
    <panel
        v-if="klipperReadyForGui && macros.length > 0"
        :title="$t('Panels.MacrosPanel.Macros')"
        :icon="mdiCodeTags"
        card-class="macros-panel">
        <v-row>
            <v-col class="text-center">
                <macro-button
                    v-for="(macro, index) in macros"
                    :key="'macro_' + index"
                    :macro="macro"
                    color="primary"
                    class="mx-1 my-1" />
            </v-col>
        </v-row>
    </panel>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator'
import BaseMixin from '../mixins/base'
import Panel from '@/components/ui/Panel.vue'
import MacroButton from '@/components/inputs/MacroButton.vue'
import { mdiCodeTags } from '@mdi/js'
import { PrinterStateMacro } from '@/store/printer/types'
@Component({
    components: { MacroButton, Panel },
})
export default class MacrosPanel extends Mixins(BaseMixin) {
    mdiCodeTags = mdiCodeTags

    get hiddenMacros() {
        return (this.$store.state.gui?.macros?.hiddenMacros ?? []).map((name: string) => name.toLowerCase())
    }

    get macros() {
        const macros = this.$store.getters['printer/getMacros']

        return macros.filter((macro: PrinterStateMacro) => !this.hiddenMacros.includes(macro.name.toLowerCase()))
    }
}
</script>

<style scoped>
/* MacrosPanel 전용 스타일 */
</style>
