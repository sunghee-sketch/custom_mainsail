<template>
    <div v-if="socketIsConnected && klipperState !== 'disconnected'" class="figma-panel console-panel">
        <!-- Panel Header -->
        <div class="panel-header">
            <div class="header-left">
                <div class="icon-container">
                    <span class="console-icon">$</span>
                </div>
                <div class="title-container">
                    <h3 class="panel-title">Console</h3>
                </div>
            </div>
            <div class="header-right">
                <v-btn icon small class="header-button" @click="clearConsole">
                    <v-icon size="16">{{ mdiTrashCan }}</v-icon>
                </v-btn>
                <command-help-modal :in-toolbar="true" @onCommand="commandClick($event)" />
                <v-menu
                    :offset-y="true"
                    :close-on-content-click="false"
                    :title="$t('Panels.MiniconsolePanel.SetupConsole')">
                    <template #activator="{ on, attrs }">
                        <v-btn icon small class="header-button" v-bind="attrs" v-on="on">
                            <v-icon size="16">{{ mdiCog }}</v-icon>
                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-item v-if="consoleDirection === 'shell'" class="minHeight36">
                            <v-checkbox
                                v-model="autoscroll"
                                class="mt-0"
                                hide-details
                                :label="$t('Panels.MiniconsolePanel.Autoscroll')" />
                        </v-list-item>
                        <v-list-item class="minHeight36">
                            <v-checkbox
                                v-model="hideWaitTemperatures"
                                class="mt-0"
                                hide-details
                                :label="$t('Panels.MiniconsolePanel.HideTemperatures')" />
                        </v-list-item>
                        <v-list-item v-if="moonrakerComponents.includes('timelapse')" class="minHeight36">
                            <v-checkbox
                                v-model="hideTlCommands"
                                class="mt-0"
                                hide-details
                                :label="$t('Panels.MiniconsolePanel.HideTimelapse')" />
                        </v-list-item>
                        <v-list-item v-for="(filter, index) in customFilters" :key="index" class="minHeight36">
                            <v-checkbox
                                v-model="filter.bool"
                                class="mt-0"
                                hide-details
                                :label="filter.name"
                                @change="toggleFilter(index, filter)" />
                        </v-list-item>
                        <v-list-item class="minHeight36">
                            <v-checkbox
                                v-model="rawOutput"
                                class="mt-0"
                                hide-details
                                :label="$t('Panels.MiniconsolePanel.RawOutput')" />
                        </v-list-item>
                    </v-list>
                </v-menu>
            </div>
        </div>

        <!-- Divider -->
        <div class="panel-divider"></div>

        <!-- Panel Content -->
        <div class="panel-content">
            <!-- Console Output Area -->
            <div class="console-output">
                <overlay-scrollbars ref="miniConsoleScroll" :style="'height: ' + consoleHeight + 'px;'" :options="{}">
                    <console-table ref="console" :events="events" :is-mini="true" @command-click="commandClick" />
                </overlay-scrollbars>
            </div>

            <!-- Send Code Input -->
            <div class="send-code-section">
                <div class="input-container">
                    <console-textarea ref="gcodeCommandField" />
                </div>
                <v-btn icon class="send-button">
                    <v-icon size="16">{{ mdiSend }}</v-icon>
                </v-btn>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Mixins, Ref, Watch } from 'vue-property-decorator'
import BaseMixin from '@/components/mixins/base'
import ConsoleTable from '@/components/console/ConsoleTable.vue'
import Panel from '@/components/ui/Panel.vue'
import { mdiCog, mdiConsoleLine, mdiTrashCan, mdiSend } from '@mdi/js'
import CommandHelpModal from '@/components/console/CommandHelpModal.vue'
import ConsoleMixin from '@/components/mixins/console'
import ConsoleTextarea from '@/components/inputs/ConsoleTextarea.vue'

@Component({
    components: {
        Panel,
        ConsoleTable,
        CommandHelpModal,
    },
})
export default class MiniconsolePanel extends Mixins(BaseMixin, ConsoleMixin) {
    mdiTrashCan = mdiTrashCan
    mdiConsoleLine = mdiConsoleLine
    mdiCog = mdiCog
    mdiSend = mdiSend

    @Ref() readonly miniConsoleScroll!: any
    @Ref() readonly gcodeCommandField!: typeof ConsoleTextarea

    get consoleHeight() {
        return this.$store.state.gui.console.height ?? 300
    }

    get events() {
        return this.$store.getters['server/getConsoleEvents'](this.consoleDirection === 'table', 250)
    }

    @Watch('events')
    eventsChanged() {
        if (this.consoleDirection === 'shell' && this.autoscroll) {
            setTimeout(() => {
                this.scrollToBottom()
            }, 50)
        }
    }

    @Watch('autoscroll')
    autoscrollChanged(newVal: boolean) {
        if (newVal) this.scrollToBottom()
    }

    commandClick(msg: string): void {
        this.gcodeCommandField.setGcode(msg)
    }

    mounted() {
        if (this.consoleDirection === 'shell') this.scrollToBottom()
    }

    scrollToBottom() {
        this.$nextTick(() => {
            this.scrollTo(100)
        })
    }

    scrollToTop() {
        this.$nextTick(() => {
            this.scrollTo(0)
        })
    }

    scrollTo(position: number) {
        if (!this.miniConsoleScroll) return

        const instance = this.miniConsoleScroll.osInstance()
        instance?.scroll({ y: `${position}%` })
    }
}
</script>

<style scoped>
/* 공통 스타일은 panel-common.css에서 관리 */

.figma-panel {
    aspect-ratio: 4 / 3;
    min-height: 300px;
}

.console-icon {
    color: #00bcd4;
    font-family: Consolas, monospace;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
}

.console-output {
    position: relative;
    z-index: 1;
    background: rgba(0, 0, 0, 0.4);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 10px;
    padding: 12px;
    flex: 1;
    overflow: hidden;
}

.send-code-section {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    gap: 12px;
}

.input-container {
    flex: 1;
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    padding: 12px;
}

.send-button {
    width: 36px;
    height: 36px;
    border-radius: 8px;
    background: #2196f3;
    color: white;
}

.send-button:hover {
    background: #1976d2;
}

/* Console Table Styling */
.consoleTable {
    border-top: none;
    background: transparent;
}

html.theme--light .consoleTable {
    border-top: none;
    background: transparent;
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

    .console-output {
        padding: 10px;
    }

    .input-container {
        padding: 10px;
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
        width: 16px;
        height: 32px;
    }

    .console-icon {
        font-size: 11px;
    }

    .panel-title {
        font-size: 13px;
    }

    .send-button {
        width: 32px;
        height: 32px;
    }
}
</style>
