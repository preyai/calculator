import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Idetail } from "../../interfaces/details";
import { dragState } from "../../interfaces/drag";

const initialState: dragState = {
    item: undefined,
    target: undefined
}

const dragSlice = createSlice({
    name: 'drag',
    initialState,
    reducers: {
        startDrag: (state: dragState, action: PayloadAction<Idetail>) => {
            state.item = action.payload
        },
        endDrag: (state: dragState) => {
            state.item = undefined
            state.target = undefined
        },
        setTarget: (state: dragState, action: PayloadAction<Idetail | undefined>) => {
            // if (state.item?.title !== 'DISPLAY')
            state.target = action.payload
        },
    }
})

export const { startDrag, endDrag, setTarget } = dragSlice.actions

export default dragSlice.reducer