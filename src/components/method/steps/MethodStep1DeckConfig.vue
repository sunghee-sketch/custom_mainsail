<template>
    <div class="step-container">
        <div class="step-card" :class="{ dimmed: currentStep !== 1 }">
            <div class="step-header">
                <div class="step-number">1</div>
                <div class="step-info">
                    <h2>Configure Deck Layout</h2>
                    <p>Set up your deck positions (3x5 grid)</p>
                </div>
            </div>

            <DeckGrid :deck-positions="deckPositions" :selected-deck="selectedDeck" @select-deck="selectDeck" />

            <div class="step-actions">
                <v-btn color="secondary" class="text-none" @click="showLiquidModal = true">
                    <v-icon left small>{{ mdiWater }}</v-icon>
                    Liquids
                </v-btn>
                <v-btn color="primary" class="text-none" @click="$emit('continue')">Continue to Steps</v-btn>
            </div>
        </div>

        <!-- Liquid Modal -->
        <LiquidModal :visible="showLiquidModal" @close="showLiquidModal = false" @save="handleSaveLiquid" />

        <!-- Labware Modal -->
        <LabwareModal
            :visible="showLabwareModal"
            @close="showLabwareModal = false"
            @continue="handleContinueLabware" />
    </div>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import { Mixins, Prop } from 'vue-property-decorator'
import BaseMixin from '@/components/mixins/base'
import { mdiWater } from '@mdi/js'
import DeckGrid from '@/components/method/deck/DeckGrid.vue'
import LiquidModal from '@/components/method/modals/LiquidModal.vue'
import LabwareModal from '@/components/method/modals/LabwareModal.vue'
import type { LiquidForm } from '@/types/method'

@Component({
    components: {
        DeckGrid,
        LiquidModal,
        LabwareModal,
    },
})
export default class MethodStep1DeckConfig extends Mixins(BaseMixin) {
    // Icons
    mdiWater = mdiWater

    // Props
    @Prop({ required: true, type: Object })
    declare deckPositions: Record<number, string>

    @Prop({ required: true, type: Number })
    declare currentStep: number

    // Data
    selectedDeck: number | null = null
    selectedDeckPosition: number | null = null
    showLiquidModal = false
    showLabwareModal = false

    // Methods
    selectDeck(position: number): void {
        this.selectedDeck = position
        this.selectedDeckPosition = position
        this.showLabwareModal = true
    }

    handleSaveLiquid(liquidData: LiquidForm): void {
        // TODO: Save liquid to store or list
        console.log('Saving liquid:', liquidData)
        this.$toast.success('Liquid saved successfully!')
    }

    handleContinueLabware(labware: string): void {
        if (this.selectedDeckPosition === null) {
            return
        }

        // Emit event to update deck position
        this.$emit('update:deck-position', this.selectedDeckPosition, labware)
        this.$toast.success(`${labware} added to position ${this.selectedDeckPosition}`)
    }
}
</script>

<style scoped>
.step-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.step-card {
    background: #242424;
    border: 2px solid #1976d2;
    border-radius: 12px;
    padding: 32px;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.step-card.dimmed {
    opacity: 0.5;
    border-color: #3a3a3a;
    pointer-events: none;
}

.step-header {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 32px;
}

.step-number {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: #1976d2;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 600;
    font-size: 20px;
    flex-shrink: 0;
}

.step-card.dimmed .step-number {
    background: #3a3a3a;
}

.step-info h2 {
    margin: 0;
    font-size: 24px;
    color: white;
    font-weight: 600;
}

.step-info p {
    margin: 4px 0 0 0;
    color: #999;
    font-size: 14px;
}

.step-actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 32px;
}
</style>
