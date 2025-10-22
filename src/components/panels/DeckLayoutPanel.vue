<template>
    <div class="figma-panel deck-layout-panel">
        <!-- Panel Header -->
        <div class="panel-header">
            <div class="header-left">
                <div class="icon-container">
                    <v-icon class="nav-icon">{{ mdiViewGrid }}</v-icon>
                </div>
                <div class="title-container">
                    <h3 class="panel-title">Deck Layout</h3>
                </div>
            </div>
            <div class="header-right">
                <v-btn icon small class="header-button">
                    <v-icon size="16">{{ mdiRefresh }}</v-icon>
                </v-btn>
                <v-btn icon small class="header-button">
                    <v-icon size="16">{{ mdiSettings }}</v-icon>
                </v-btn>
            </div>
        </div>

        <!-- Divider -->
        <div class="panel-divider"></div>

        <!-- Panel Content -->
        <div class="panel-content">
            <!-- Deck Grid -->
            <div class="deck-grid">
                <div v-for="position in deckPositions" :key="position" class="deck-slot">
                    <span class="slot-number">{{ position }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import { Mixins } from 'vue-property-decorator'
import BaseMixin from '@/components/mixins/base'
import { mdiViewGrid, mdiRefresh, mdiCog } from '@mdi/js'

@Component({
    name: 'DeckLayoutPanel',
})
export default class DeckLayoutPanel extends Mixins(BaseMixin) {
    mdiViewGrid = mdiViewGrid
    mdiRefresh = mdiRefresh
    mdiSettings = mdiCog

    deckPositions = Array.from({ length: 15 }, (_, i) => i + 1)
}
</script>

<style scoped>
/* 공통 스타일은 panel-common.css에서 관리 */

/* 크기는 Dashboard에서 통합 관리 */

.deck-grid {
    display: grid;
    width: 100%;
    height: 100%;
    row-gap: 8px;
    column-gap: 8px;
    grid-template-rows: repeat(5, 1fr);
    grid-template-columns: repeat(3, 1fr);
    box-sizing: border-box;
}

.deck-slot {
    background: rgba(169, 169, 169, 0.8);
    border: 1px solid rgba(0, 0, 0, 0.8);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s ease;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    aspect-ratio: 3 / 2;
}

.deck-slot:hover {
    background: rgba(189, 189, 189, 0.95);
    transform: scale(1.02);
}

.slot-number {
    color: rgba(0, 0, 0, 0.4);
    font-family: 'Arial, sans-serif';
    font-size: 35px;
    font-style: normal;
    font-weight: 400;
    line-height: 43px;
    text-align: center;
    user-select: none;
}
</style>
