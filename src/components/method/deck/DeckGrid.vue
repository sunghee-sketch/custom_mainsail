<template>
    <div class="deck-grid">
        <div
            v-for="position in 15"
            :key="position"
            class="deck-position"
            :class="{ selected: selectedDeck === position }"
            @click="$emit('select-deck', position)">
            <div class="position-number">{{ position }}</div>
            <div class="position-status">{{ deckPositions[position] || 'Empty' }}</div>
        </div>
    </div>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import { Mixins, Prop } from 'vue-property-decorator'
import BaseMixin from '@/components/mixins/base'

@Component({
    components: {},
})
export default class DeckGrid extends Mixins(BaseMixin) {
    // Props
    @Prop({ required: true, type: Object })
    declare deckPositions: Record<number, string>

    @Prop({ default: null, type: Number })
    declare selectedDeck: number | null
}
</script>

<style scoped>
/* Deck Grid */
.deck-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(5, 1fr);
    gap: 16px;
    margin-bottom: 32px;
    flex: 1;
}

.deck-position {
    aspect-ratio: 1.5;
    background: #2a2a2a;
    border: 2px solid #3a3a3a;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s ease;
}

.deck-position:hover {
    border-color: #1976d2;
    background: #2f2f2f;
}

.deck-position.selected {
    border-color: #1976d2;
    background: #1e3a5f;
}

.position-number {
    font-size: 18px;
    color: white;
    font-weight: 600;
}

.position-status {
    font-size: 12px;
    color: #666;
    margin-top: 4px;
}
</style>
