<template>
    <div class="figma-panel">
        <!-- 패널 헤더 -->
        <div class="panel-header">
            <div class="header-left">
                <div class="icon-container">
                    <i class="nav-icon mdi mdi-playlist-plus"></i>
                </div>
                <div class="title-container">
                    <h3 class="panel-title">Sequence maker</h3>
                </div>
            </div>
            <div class="header-right">
                <button class="header-button" @click="createSequence">
                    <i class="mdi mdi-check"></i>
                    <span class="button-text">Done</span>
                </button>
            </div>
        </div>

        <!-- 구분선 -->
        <div class="panel-divider"></div>

        <!-- 패널 내용 -->
        <div class="panel-content">
            <div class="sequence-list">
                <!-- 활성 시퀀스 -->
                <div v-if="activeSequence" class="sequence-item active" @click="selectSequence(activeSequence)">
                    <div class="sequence-content">
                        <div class="sequence-icon">
                            <i class="mdi mdi-play-circle"></i>
                        </div>
                        <div class="sequence-info">
                            <div class="sequence-name">{{ activeSequence.name }}</div>
                        </div>
                    </div>
                </div>

                <!-- 빈 시퀀스 슬롯들 -->
                <div
                    v-for="(slot, index) in emptySlots"
                    :key="'slot-' + index"
                    class="sequence-item empty"
                    @click="createNewSequence(index)">
                    <div class="sequence-content">
                        <div class="sequence-icon">
                            <i class="mdi mdi-plus-circle-outline"></i>
                        </div>
                        <div class="sequence-info">
                            <div class="sequence-name">Empty slot {{ index + 1 }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SequenceMakerPanel',
    data() {
        return {
            activeSequence: {
                id: 1,
                name: 'Tempo... > 어쩌구저쩌구_250926_csh.gcode',
            },
            emptySlots: Array(14).fill(null), // 14개의 빈 슬롯
        }
    },
    methods: {
        selectSequence(sequence) {
            console.log('Selected sequence:', sequence)
        },
        createNewSequence(slotIndex) {
            console.log('Create new sequence in slot:', slotIndex)
        },
        createSequence() {
            console.log('Create sequence')
        },
    },
}
</script>

<style scoped>
.sequence-list {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.sequence-item {
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.2s ease;
    min-height: 50px;
}

.sequence-item:hover {
    background: rgba(255, 255, 255, 0.05);
}

.sequence-item.active {
    border: 1px solid rgba(255, 82, 82, 0.5);
    background: rgba(255, 82, 82, 0.1);
}

.sequence-item.empty {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid transparent;
}

.sequence-content {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 16px;
}

.sequence-icon {
    width: 28px;
    height: 28px;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

.sequence-icon i {
    color: #2196f3;
    font-size: 16px;
}

.sequence-item.empty .sequence-icon i {
    color: rgba(255, 255, 255, 0.5);
}

.sequence-info {
    flex: 1;
    min-width: 0;
}

.sequence-name {
    color: rgba(255, 255, 255, 0.9);
    font-family: Arial, sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.sequence-item.empty .sequence-name {
    color: rgba(255, 255, 255, 0.5);
}

.button-text {
    margin-left: 4px;
    font-size: 12px;
    font-weight: 400;
}
</style>
