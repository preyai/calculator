import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Icomponent } from "../../interfaces/component";
import { Mode, ModeState } from "../../interfaces/mode";



const initialState: ModeState = {
    value: 'constructor',
    components: []
}

const modeSlice = createSlice({
    name: 'mode',
    initialState,
    reducers: {
        changeMode: (state: ModeState, action: PayloadAction<Mode>) => {
            if (action.payload != state.value)
                state.value = action.payload
        },
        addComponent: (state: ModeState, action: PayloadAction<Icomponent>) => {
            state.components.push(action.payload)
        }
    }
})

export const { changeMode, addComponent } = modeSlice.actions

export default modeSlice.reducer