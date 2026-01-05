// src/types/method.ts
// Method 컴포넌트에서 사용하는 타입 정의

export interface Step {
    number: number
    label: string
}

export interface StepType {
    value: string
    label: string
    icon: string
}

export interface ProtocolStep {
    type: string
    description: string
}

export interface LiquidForm {
    name: string
    liquidClass: string
    color: string
    description: string
}

export interface DeckPosition {
    position: number
    labware: string | null
    liquid?: string | null
}
