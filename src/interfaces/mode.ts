
const RUNTIME = 'runtime'
const CONSTRUCTOR = 'constructor'

export type Mode = typeof RUNTIME | typeof CONSTRUCTOR

export interface ModeState {
    value: Mode,
}

