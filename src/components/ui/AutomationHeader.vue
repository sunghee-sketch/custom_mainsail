<template>
    <v-app-bar
        :height="56"
        :elevation="0"
        color="transparent"
        class="automation-header"
        style="border-bottom: 1px solid rgba(255, 255, 255, 0.06)">
        <v-container class="d-flex align-center justify-space-between pa-0" style="max-width: 1094px">
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

            <!-- RIGHT SIDE: Action Buttons -->
            <div class="d-flex align-center">
                <!-- Upload & Print Button -->
                <v-btn class="action-button upload-button" :elevation="0" @click="handleUploadPrint">
                    <v-icon left size="16" class="mr-2">mdi-upload</v-icon>
                    Upload & Print
                </v-btn>

                <!-- Emergency Stop Button -->
                <v-btn class="action-button emergency-button" :elevation="0" @click="handleEmergencyStop">
                    <v-icon left size="16" class="mr-2">mdi-stop-circle</v-icon>
                    Emergency Stop
                </v-btn>

                <!-- Divider -->
                <v-divider vertical class="mx-2" style="height: 16px; opacity: 0.1"></v-divider>

                <!-- Icon Buttons -->
                <v-btn icon class="icon-button" @click="handleSettings">
                    <v-icon size="16">mdi-cog</v-icon>
                </v-btn>

                <v-btn icon class="icon-button" @click="handleNotifications">
                    <v-icon size="16">mdi-bell</v-icon>
                    <div class="notification-dot"></div>
                </v-btn>

                <v-btn icon class="icon-button" @click="handleMenu">
                    <v-icon size="16">mdi-dots-vertical</v-icon>
                </v-btn>
            </div>
        </v-container>
    </v-app-bar>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
    name: 'AutomationHeader',
})
export default class AutomationHeader extends Vue {
    // Event Handlers
    handleUploadPrint(): void {
        // Upload & Print functionality
        console.log('Upload & Print clicked')
        // Add your upload logic here
    }

    handleEmergencyStop(): void {
        // Emergency stop functionality
        console.log('Emergency Stop clicked')
        // Add emergency stop logic here
    }

    handleSettings(): void {
        // Settings functionality
        console.log('Settings clicked')
        // Add settings logic here
    }

    handleNotifications(): void {
        // Notifications functionality
        console.log('Notifications clicked')
        // Add notifications logic here
    }

    handleMenu(): void {
        // Menu functionality
        console.log('Menu clicked')
        // Add menu logic here
    }
}
</script>

<style scoped>
.automation-header {
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

.icon-button {
    width: 32px;
    height: 32px;
    border-radius: 10px;
    margin-left: 8px;
    color: rgba(255, 255, 255, 0.7) !important;
}

.icon-button:hover {
    background-color: rgba(255, 255, 255, 0.1) !important;
}

.notification-dot {
    position: absolute;
    top: 8px;
    right: 8px;
    width: 6px;
    height: 6px;
    background-color: #2196f3;
    border-radius: 50%;
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

    .icon-button {
        width: 28px;
        height: 28px;
    }
}
</style>
