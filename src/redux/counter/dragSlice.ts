import { createSlice } from "@reduxjs/toolkit";

export const dragSlice = createSlice({
    name: "drag",
    initialState: {
        value: undefined,
    },
    reducers: {
        setDrag: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { setDrag } = dragSlice.actions;

export default dragSlice.reducer;