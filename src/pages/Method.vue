<template>
    <div class="method-page">
        <div class="page-header">
            <h1 class="page-title">Method</h1>
            <p class="page-subtitle">Method configuration and management</p>
        </div>

        <div class="method-content">
            <v-card class="method-card">
                <v-card-title>Method Settings</v-card-title>
                <v-card-text>
                    <p>Method configuration features will be implemented here.</p>
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
export default class Method extends Mixins(BaseMixin) {
    // Method management logic will be implemented here
}
</script>
<style scoped>
.method-page {
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

.method-content {
    display: grid;
    gap: 24px;
}

.method-card {
    background: linear-gradient(180deg, #1e1e1e 0%, #1a1a1a 100%);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 14px;
}
</style>
