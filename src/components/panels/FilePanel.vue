<template>
    <div class="figma-panel">
        <!-- 패널 헤더 -->
        <div class="panel-header">
            <div class="header-left">
                <div class="icon-container">
                    <v-icon small>{{ icons.mdiFile }}</v-icon>
                </div>
                <div class="title-container">
                    <h3 class="panel-title">File</h3>
                </div>
            </div>
            <div class="header-right">
                <button class="header-button">
                    <v-icon>{{ icons.mdiDotsVertical }}</v-icon>
                </button>
            </div>
        </div>

        <!-- 구분선 -->
        <div class="panel-divider"></div>

        <!-- 패널 내용 -->
        <div class="panel-content">
            <div class="file-tree">
                <div
                    v-for="item in flattenedTree"
                    :key="item.id"
                    class="tree-item"
                    :class="{
                        'is-folder': item.isFolder,
                        'is-file': !item.isFolder,
                        'is-expanded': item.isFolder && item.expanded,
                        'is-collapsed': item.isFolder && !item.expanded,
                    }"
                    :style="{ paddingLeft: item.level * 20 + 16 + 'px' }"
                    v-show="item.visible">
                    <div class="item-content" @click="toggleItem(item)">
                        <v-icon v-if="item.isFolder" class="expand-icon" small>
                            {{ item.expanded ? icons.mdiChevronDown : icons.mdiChevronRight }}
                        </v-icon>
                        <v-icon v-else class="file-icon" small>{{ getFileIcon(item.name) }}</v-icon>
                        <span class="item-name">{{ item.name }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {
    mdiFile,
    mdiDotsVertical,
    mdiChevronDown,
    mdiChevronRight,
    mdiFileCode,
    mdiFileDocument,
    mdiCodeJson,
    mdiFile as mdiFileGeneric,
} from '@mdi/js'

export default {
    name: 'FilePanel',
    data() {
        return {
            icons: {
                mdiFile,
                mdiDotsVertical,
                mdiChevronDown,
                mdiChevronRight,
                mdiFileCode,
                mdiFileDocument,
                mdiCodeJson,
                mdiFile: mdiFileGeneric,
            },
            fileTree: [
                {
                    id: 1,
                    name: 'printer_data',
                    isFolder: true,
                    expanded: true,
                    level: 0,
                    children: [
                        {
                            id: 2,
                            name: 'method',
                            isFolder: true,
                            expanded: true,
                            level: 1,
                            children: [
                                {
                                    id: 3,
                                    name: 'Tempo-frips',
                                    isFolder: true,
                                    expanded: false,
                                    level: 2,
                                    children: [
                                        {
                                            id: 4,
                                            name: '어쩌구저쩌구_250926_csh.gcode',
                                            isFolder: false,
                                            level: 3,
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            id: 5,
                            name: 'sequence',
                            isFolder: true,
                            expanded: false,
                            level: 1,
                            children: [],
                        },
                    ],
                },
            ],
        }
    },
    computed: {
        flattenedTree() {
            const flatten = (items, parentVisible = true) => {
                const result = []
                for (const item of items) {
                    const flattenedItem = {
                        ...item,
                        visible: parentVisible,
                    }
                    result.push(flattenedItem)

                    if (item.children && item.expanded) {
                        result.push(...flatten(item.children, item.expanded))
                    }
                }
                return result
            }
            return flatten(this.fileTree)
        },
    },
    methods: {
        toggleItem(item) {
            if (item.isFolder) {
                item.expanded = !item.expanded
            }
        },
        getFileIcon(filename) {
            const extension = filename.split('.').pop().toLowerCase()
            switch (extension) {
                case 'gcode':
                    return this.icons.mdiFileCode
                case 'txt':
                    return this.icons.mdiFileDocument
                case 'json':
                    return this.icons.mdiCodeJson
                case 'yaml':
                case 'yml':
                    return this.icons.mdiFileDocument
                default:
                    return this.icons.mdiFile
            }
        },
    },
}
</script>

<style scoped>
.file-tree {
    width: 100%;
}

.tree-item {
    margin-bottom: 4px;
    cursor: pointer;
    transition: all 0.2s ease;
    border-radius: 10px;
}

.tree-item:hover {
    background: rgba(255, 255, 255, 0.05);
}

.tree-item.is-folder {
    font-weight: 500;
}

.tree-item.is-file {
    font-weight: 400;
}

.item-content {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 12px;
    min-height: 36px;
}

.expand-icon {
    color: rgba(255, 255, 255, 0.6);
    font-size: 16px;
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s ease;
}

.tree-item.is-expanded .expand-icon {
    transform: rotate(0deg);
}

.tree-item.is-collapsed .expand-icon {
    transform: rotate(-90deg);
}

.file-icon {
    color: #2196f3;
    font-size: 16px;
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.item-name {
    color: rgba(255, 255, 255, 0.9);
    font-family: Arial, sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    flex: 1;
}

.tree-item.is-folder .item-name {
    color: rgba(255, 255, 255, 0.95);
    font-weight: 500;
}

.tree-item.is-file .item-name {
    color: rgba(255, 255, 255, 0.85);
    font-weight: 400;
}
</style>
