<template>
    <div class="sequence-page">
        <div class="page-header">
            <h1 class="page-title">Sequence</h1>
            <p class="page-subtitle">Sequence management and automation</p>
        </div>

        <div class="sequence-content">
            <v-card class="sequence-card">
                <v-card-title>Sequence Management</v-card-title>
                <v-card-text>
                    <p>Sequence automation features will be implemented here.</p>
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
export default class Sequence extends Mixins(BaseMixin) {
    // Sequence management logic will be implemented here
}
</script>
<style scoped>
.sequence-page {
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

.sequence-content {
    display: grid;
    gap: 24px;
}

.sequence-card {
    background: linear-gradient(180deg, #1e1e1e 0%, #1a1a1a 100%);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 14px;
}
</style>
