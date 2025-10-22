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
                <div
                    v-for="position in deckPositions"
                    :key="position"
                    class="deck-slot"
                    :class="{ occupied: isOccupied(position) }"
                    @click="toggleSlot(position)">
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
    occupiedSlots = new Set([1, 3, 7, 12])

    isOccupied(position: number) {
        return this.occupiedSlots.has(position)
    }

    toggleSlot(position: number) {
        if (this.occupiedSlots.has(position)) {
            this.occupiedSlots.delete(position)
        } else {
            this.occupiedSlots.add(position)
        }
    }
}
</script>

<style scoped>
/* 공통 스타일은 panel-common.css에서 관리 */

/* 크기는 Dashboard에서 통합 관리 */

.deck-grid {
    display: grid;
    width: 381px;
    height: 434px;
    padding: 16px;
    row-gap: 8px;
    column-gap: 8px;
    grid-template-rows: repeat(5, minmax(0, 1fr));
    grid-template-columns: repeat(3, minmax(0, 1fr));
}

.deck-slot {
    border-radius: 14px;
    border: 1px solid rgba(0, 0, 0, 0.80);
    background: rgba(169, 169, 169, 0.80);
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1 0 0;
    align-self: stretch;
    cursor: pointer;
    transition: all 0.2s ease;
}

.deck-slot:hover {
    background: rgba(169, 169, 169, 0.9);
    transform: scale(1.02);
}

.deck-slot.occupied {
    background: rgba(33, 150, 243, 0.8);
    border-color: rgba(33, 150, 243, 1);
}

.slot-number {
    color: rgba(0, 0, 0, 0.4);
    font-size: 24px;
    font-family: 'SeoulNamsan CBL', Arial, sans-serif;
    font-weight: 400;
}

.deck-slot.occupied .slot-number {
    color: rgba(255, 255, 255, 0.9);
}
</style>
