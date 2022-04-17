import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Mode, ModeState } from "../../interfaces/mode";



const initialState: ModeState = {
    value: 'constructor',
}

const modeSlice = createSlice({
    name: 'mode',
    initialState,
    reducers: {
        changeMode: (state: ModeState, action: PayloadAction<Mode>) => {
            if (action.payload !== state.value)
                state.value = action.payload
        }
    }
})

export const { changeMode } = modeSlice.actions

export default modeSlice.reducer