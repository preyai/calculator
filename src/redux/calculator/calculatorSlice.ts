import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { calculatorState, operations } from "../../interfaces/calculator";


const initialState: calculatorState = {
    currentValue: '0',
    previousValue: 0,
    operation: undefined
}

const calculatorSlice = createSlice({
    name: 'calculator',
    initialState,
    reducers: {
        input: (state: calculatorState, action: PayloadAction<string>) => {
            if (state.currentValue.match(new RegExp('[a-zA-Zа-яА-Я]')))
                state.currentValue = '0'
            if (state.currentValue.length > 16)
                return
            if (state.currentValue === '0' && action.payload !== ',') {
                state.currentValue = action.payload
                return
            }
            if (action.payload === ',' && state.currentValue.match(',')) {
                return
            }
            if (action.payload === ',') {
                state.currentValue = (state.currentValue + '.')
                return
            }

            state.currentValue = (state.currentValue + action.payload)
        },
        operation: (state: calculatorState, action: PayloadAction<operations>) => {
            const n = Number(state.currentValue)
            state.previousValue = math(state.previousValue, n, state.operation)
            state.currentValue = '0'
            state.operation = action.payload
        },
        result: (state: calculatorState) => {
            console.log(state.operation);

            const n = Number(state.currentValue)
            const v = math(state.previousValue, n, state.operation)
            console.log(v);

            state.currentValue = v.toString()
            state.previousValue = 0
            state.operation = undefined
            if (state.currentValue === 'Infinity')
                state.currentValue = 'Не определено'
        }
    }
})

const math = (prev: number, cur: number, operation?: operations) => {
    switch (operation) {
        case '+':
            return prev + cur
        case '-':
            return prev - cur
        case 'x':
            return prev * cur
        case '/':
            // if (cur === 0)
            return prev / cur

        default:
            return cur;
    }
}

export const { input, operation, result } = calculatorSlice.actions
export default calculatorSlice.reducer