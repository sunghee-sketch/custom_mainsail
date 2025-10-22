<template>
    <div>
        <v-app-bar 
            app 
            elevate-on-scroll 
            :height="56" 
            class="automation-topbar pa-0" 
            clipped-left
            :elevation="0"
            color="transparent"
        >
            <!-- LEFT SIDE: Logo and Title -->
            <div class="d-flex align-center">
                <!-- Logo Container -->
                <div class="logo-container">
                    <div class="logo-icon">
                        <span class="logo-text">A</span>
                    </div>
                </div>
                
                <!-- Title -->
                <div class="title-container">
                    <h1 class="title-text">Automation System</h1>
                </div>
            </div>

            <v-spacer />

            <!-- RIGHT SIDE: Action Buttons -->
            <div class="d-flex align-center">
                <!-- Hidden file input -->
                <input
                    ref="fileUploadAndStart"
                    type="file"
                    :accept="gcodeInputFileAccept.join(', ')"
                    style="display: none"
                    @change="uploadAndStart" />

                <!-- Upload & Print Button -->
                <v-btn
                    v-if="boolShowUploadAndPrint"
                    class="action-button upload-button"
                    :elevation="0"
                    :loading="loadings.includes('btnUploadAndStart')"
                    @click="btnUploadAndStart"
                >
                    <v-icon left size="16" class="mr-2">{{ mdiFileUpload }}</v-icon>
                    Upload & Print
                </v-btn>

                <!-- Emergency Stop Button -->
                <v-btn
                    v-if="klippyIsConnected"
                    class="action-button emergency-button"
                    :elevation="0"
                    :loading="loadings.includes('topbarEmergencyStop')"
                    @click="btnEmergencyStop"
                >
                    <v-icon left size="16" class="mr-2">{{ mdiAlertOctagonOutline }}</v-icon>
                    Emergency Stop
                </v-btn>

                <!-- Divider -->
                <v-divider vertical class="mx-2" style="height: 16px; opacity: 0.1;"></v-divider>

                <!-- Icon Buttons -->
                <the-settings-menu />
                <the-notification-menu />
                <the-top-corner-menu />
            </div>
        </v-app-bar>
        <v-snackbar v-model="uploadSnackbar.status" :timeout="-1" fixed right bottom>
            <strong>{{ $t('App.TopBar.Uploading') }} {{ uploadSnackbar.filename }}</strong>
            <br />
            {{ Math.round(uploadSnackbar.percent) }} % @ {{ formatFilesize(Math.round(uploadSnackbar.speed)) }}/s
            <br />
            <v-progress-linear class="mt-2" :value="uploadSnackbar.percent"></v-progress-linear>
            <template #action="{ attrs }">
                <v-btn color="red" text v-bind="attrs" style="min-width: auto" @click="cancelUpload">
                    <v-icon class="0">{{ mdiClose }}</v-icon>
                </v-btn>
            </template>
        </v-snackbar>
        <emergency-stop-dialog :show-dialog="showEmergencyStopDialog" @close="showEmergencyStopDialog = false" />
    </div>
</template>

<script lang="ts">
import { Mixins } from 'vue-property-decorator'
import BaseMixin from '@/components/mixins/base'
import { validGcodeExtensions } from '@/store/variables'
import Component from 'vue-class-component'
import axios, { AxiosProgressEvent } from 'axios'
import { formatFilesize } from '@/plugins/helpers'
import TheTopCornerMenu from '@/components/TheTopCornerMenu.vue'
import TheSettingsMenu from '@/components/TheSettingsMenu.vue'
import Panel from '@/components/ui/Panel.vue'
import PrinterSelector from '@/components/ui/PrinterSelector.vue'
import MainsailLogo from '@/components/ui/MainsailLogo.vue'
import TheNotificationMenu from '@/components/notifications/TheNotificationMenu.vue'
import { topbarHeight } from '@/store/variables'
import { mdiAlertOctagonOutline, mdiContentSave, mdiFileUpload, mdiClose, mdiCloseThick } from '@mdi/js'
import EmergencyStopDialog from '@/components/dialogs/EmergencyStopDialog.vue'
import InlineSvg from 'vue-inline-svg'
import ThemeMixin from '@/components/mixins/theme'

type uploadSnackbar = {
    status: boolean
    filename: string
    percent: number
    speed: number
    total: number
    cancelTokenSource: any
}

@Component({
    components: {
        EmergencyStopDialog,
        InlineSvg,
        Panel,
        TheSettingsMenu,
        TheTopCornerMenu,
        PrinterSelector,
        MainsailLogo,
        TheNotificationMenu,
    },
})
export default class TheTopbar extends Mixins(BaseMixin, ThemeMixin) {
    mdiAlertOctagonOutline = mdiAlertOctagonOutline
    mdiContentSave = mdiContentSave
    mdiFileUpload = mdiFileUpload
    mdiClose = mdiClose
    mdiCloseThick = mdiCloseThick

    topbarHeight = 56

    showEmergencyStopDialog = false

    uploadSnackbar: uploadSnackbar = {
        status: false,
        filename: '',
        percent: 0,
        speed: 0,
        total: 0,
        cancelTokenSource: null,
    }

    formatFilesize = formatFilesize

    declare $refs: {
        fileUploadAndStart: HTMLFormElement
    }

    get gcodeInputFileAccept() {
        if (this.isIOS) return []

        return validGcodeExtensions
    }

    get naviDrawer() {
        return this.$store.state.naviDrawer
    }

    set naviDrawer(newVal) {
        this.$store.dispatch('setNaviDrawer', newVal)
    }

    get currentPage() {
        return this.$route.fullPath
    }

    get saveConfigPending() {
        return this.$store.state.printer.configfile?.save_config_pending ?? false
    }

    get hideSaveConfigForBedMash() {
        return this.$store.state.gui.uiSettings.hideSaveConfigForBedMash ?? false
    }

    get showSaveConfigButton() {
        if (!this.klipperReadyForGui) return false
        if (!this.hideSaveConfigForBedMash) return this.saveConfigPending

        let pendingKeys = Object.keys(this.$store.state.printer.configfile?.save_config_pending_items ?? {})
        pendingKeys = pendingKeys.filter((key: string) => !key.startsWith('bed_mesh '))

        return pendingKeys.length > 0
    }

    get printerName(): string {
        if (this.$store.state.gui.general.printername.length) return this.$store.state.gui.general.printername

        return this.$store.state.printer.hostname
    }

    get countPrinters() {
        return this.$store.getters['farm/countPrinters']
    }

    get boolHideUploadAndPrintButton() {
        return this.$store.state.gui.uiSettings.boolHideUploadAndPrintButton ?? false
    }

    get isSvgLogo() {
        return this.sidebarLogo.includes('.svg?timestamp=') || this.sidebarLogo.endsWith('.svg')
    }

    get logoColor(): string {
        return this.$store.state.gui.uiSettings.logo
    }

    get logoClasses() {
        return ['nav-logo', 'ml-2', 'mr-1', 'd-none', 'd-sm-flex']
    }

    get boolShowUploadAndPrint() {
        return (
            this.klippyIsConnected &&
            this.existGcodesRootDirectory &&
            ['standby', 'complete', 'cancelled'].includes(this.printer_state) &&
            !this.boolHideUploadAndPrintButton
        )
    }

    get defaultNavigationStateSetting() {
        return this.$store.state.gui?.uiSettings?.defaultNavigationStateSetting ?? 'alwaysOpen'
    }

    mounted() {
        //this.naviDrawer = this.$vuetify.breakpoint.lgAndUp
        switch (this.defaultNavigationStateSetting) {
            case 'alwaysClosed':
                this.naviDrawer = false
                break

            case 'lastState':
                this.naviDrawer = (localStorage.getItem('naviDrawer') ?? 'true') === 'true'
                break

            default:
                this.naviDrawer = this.$vuetify.breakpoint.lgAndUp
        }
    }

    btnEmergencyStop() {
        const confirmOnEmergencyStop = this.$store.state.gui.uiSettings.confirmOnEmergencyStop
        if (confirmOnEmergencyStop) {
            this.showEmergencyStopDialog = true
            return
        }

        this.emergencyStop()
    }

    emergencyStop() {
        this.showEmergencyStopDialog = false
        this.$socket.emit('printer.emergency_stop', {}, { loading: 'topbarEmergencyStop' })
    }

    saveConfig() {
        this.$store.dispatch('server/addEvent', { message: 'SAVE_CONFIG', type: 'command' })
        this.$socket.emit('printer.gcode.script', { script: 'SAVE_CONFIG' }, { loading: 'topbarSaveConfig' })
    }

    btnUploadAndStart() {
        this.$refs.fileUploadAndStart.click()
    }

    async uploadAndStart() {
        if (this.$refs.fileUploadAndStart?.files.length) {
            await this.$store.dispatch('socket/addLoading', { name: 'btnUploadAndStart' })
            let successFiles = []
            for (const file of this.$refs.fileUploadAndStart?.files || []) {
                const result = await this.doUploadAndStart(file)
                successFiles.push(result)
            }

            await this.$store.dispatch('socket/removeLoading', { name: 'btnUploadAndStart' })
            for (const file of successFiles) {
                const text = this.$t('App.TopBar.UploadOfFileSuccessful', { file: file }).toString()
                this.$toast.success(text)
            }

            this.$refs.fileUploadAndStart.value = ''
            if (this.currentPage !== '/') await this.$router.push('/')
        }
    }

    doUploadAndStart(file: File) {
        const formData = new FormData()
        const filename = file.name

        this.uploadSnackbar.filename = filename
        this.uploadSnackbar.status = true
        this.uploadSnackbar.percent = 0
        this.uploadSnackbar.speed = 0

        formData.append('file', file, filename)
        formData.append('print', 'true')

        return new Promise((resolve) => {
            this.uploadSnackbar.cancelTokenSource = axios.CancelToken.source()
            axios
                .post(this.apiUrl + '/server/files/upload', formData, {
                    cancelToken: this.uploadSnackbar.cancelTokenSource.token,
                    headers: { 'Content-Type': 'multipart/form-data' },
                    onUploadProgress: (progressEvent: AxiosProgressEvent) => {
                        this.uploadSnackbar.percent = (progressEvent.progress ?? 0) * 100
                        this.uploadSnackbar.speed = progressEvent.rate ?? 0
                        this.uploadSnackbar.total = progressEvent.total ?? 0
                    },
                })
                .then((result) => {
                    this.uploadSnackbar.status = false
                    resolve(result.data.result)
                })
                .catch(() => {
                    this.uploadSnackbar.status = false
                    this.$store.dispatch('socket/removeLoading', { name: 'btnUploadAndStart' })
                    const text = this.$t('App.TopBar.CannotUploadTheFile').toString()
                    this.$toast.error(text)
                })
        })
    }

    cancelUpload(): void {
        this.uploadSnackbar.cancelTokenSource.cancel()
        this.uploadSnackbar.status = false
    }
}
</script>

<style scoped>
/*noinspection CssUnusedSymbol*/
::v-deep .automation-topbar .v-toolbar__content {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
    background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.automation-topbar {
    background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.logo-container {
    margin-right: 12px;
}

.logo-icon {
    width: 28px;
    height: 28px;
    background: linear-gradient(180deg, #2196f3 0%, #1976d2 100%);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.logo-text {
    color: #ffffff;
    font-family: Arial, sans-serif;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
}

.title-container {
    margin-left: 12px;
}

.title-text {
    color: rgba(255, 255, 255, 0.9);
    font-family: Arial, sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    margin: 0;
}

.action-button {
    height: 32px;
    border-radius: 10px;
    font-family: Arial, sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    text-transform: none;
    margin-right: 8px;
}

.upload-button {
    background-color: rgba(33, 150, 243, 0.1) !important;
    color: #2196f3 !important;
}

.emergency-button {
    background-color: rgba(255, 82, 82, 0.1) !important;
    color: #ff5252 !important;
}

.button-min-width-auto {
    min-width: auto !important;
}

/*noinspection CssUnusedSymbol*/
.automation-topbar .v-btn {
    height: 100% !important;
    max-height: none;
}

/*noinspection CssUnusedSymbol*/
.automation-topbar .v-btn.v-btn--icon {
    width: 32px !important;
    height: 32px !important;
    border-radius: 10px;
    margin-left: 8px;
    color: rgba(255, 255, 255, 0.7) !important;
}

.automation-topbar .v-btn.v-btn--icon:hover {
    background-color: rgba(255, 255, 255, 0.1) !important;
}

/*noinspection CssUnusedSymbol*/
@media (min-width: 768px) {
    header.automation-topbar {
        z-index: 8 !important;
    }
}

/* Responsive Design */
@media (max-width: 768px) {
    .title-text {
        font-size: 14px;
    }
    
    .action-button {
        font-size: 12px;
        height: 28px;
    }
    
    .automation-topbar .v-btn.v-btn--icon {
        width: 28px !important;
        height: 28px !important;
    }
}
</style>
