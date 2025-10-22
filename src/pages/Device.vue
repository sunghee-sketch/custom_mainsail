<template>
    <div class="device-page">
        <div class="page-header">
            <h1 class="page-title">Device</h1>
            <p class="page-subtitle">Device management and configuration</p>
        </div>

        <div class="device-content">
            <v-card class="device-card">
                <v-card-title>Device Information</v-card-title>
                <v-card-text>
                    <p>Device management features will be implemented here.</p>
                </v-card-text>
            </v-card>
        </div>
    </div>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import { Mixins } from 'vue-property-decorator'
import BaseMixin from '@/components/mixins/base'

@Component({})
export default class Device extends Mixins(BaseMixin) {
    // Device management logic will be implemented here
}
</script>
<style scoped>
.device-page {
    padding: 24px;
}

.page-header {
    margin-bottom: 32px;
}

.page-title {
    font-size: 2rem;
    font-weight: 600;
    color: #ffffff;
    margin-bottom: 8px;
}

.page-subtitle {
    color: rgba(255, 255, 255, 0.7);
    font-size: 1rem;
}

.device-content {
    display: grid;
    gap: 24px;
}

.device-card {
    background: linear-gradient(180deg, #1e1e1e 0%, #1a1a1a 100%);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 14px;
}
</style>
