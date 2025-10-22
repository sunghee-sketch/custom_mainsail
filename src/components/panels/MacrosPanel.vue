<template>
    <div v-if="klipperReadyForGui && macros.length > 0" class="figma-panel macros-panel">
        <!-- Panel Header -->
        <div class="panel-header">
            <div class="header-left">
                <div class="icon-container">
                    <v-icon class="nav-icon">{{ mdiCodeTags }}</v-icon>
                </div>
                <div class="title-container">
                    <h3 class="panel-title">Macros</h3>
                </div>
            </div>
        </div>

        <!-- Divider -->
        <div class="panel-divider"></div>

        <!-- Panel Content -->
        <div class="panel-content">
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
        </div>
    </div>
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
/* 공통 스타일은 panel-common.css에서 관리 */

.figma-panel {
    width: 100%;
    height: 100%;
}
</style>
