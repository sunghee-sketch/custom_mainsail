<template>
    <panel :title="$t('Panels.DeckLayoutPanel.DeckLayout')" :icon="mdiViewGrid" card-class="deck-layout-panel">
        <template #buttons>
            <v-btn icon small class="header-button">
                <v-icon size="16">{{ mdiRefresh }}</v-icon>
            </v-btn>
            <v-btn icon small class="header-button">
                <v-icon size="16">{{ mdiSettings }}</v-icon>
            </v-btn>
        </template>
        <!-- Deck Grid -->
        <div class="deck-grid">
            <div v-for="position in deckPositions" :key="position" class="deck-slot">
                <span class="slot-number">{{ position }}</span>
            </div>
        </div>
    </panel>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import { Mixins } from 'vue-property-decorator'
import BaseMixin from '@/components/mixins/base'
import Panel from '@/components/ui/Panel.vue'
import { mdiViewGrid, mdiRefresh, mdiCog } from '@mdi/js'

@Component({
    name: 'DeckLayoutPanel',
    components: {
        Panel,
    },
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
    background: rgba(206, 206, 206, 0.796);
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
    background: rgba(210, 210, 210, 0.968);
    transform: scale(1.02);
}

.slot-number {
    color: rgba(0, 0, 0, 0.4);
    font-family: 'Roboto', 'Arial', sans-serif;
    font-size: 35px;
    font-style: normal;
    font-weight: 700;
    line-height: 43px;
    text-align: center;
    user-select: none;
}
</style>
