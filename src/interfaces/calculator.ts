export type operations = '+' | '-' | 'x' | '/'

export interface calculatorState {
    previousValue: number,
    currentValue: string,
    operation?: operations
}