import { createSlice } from "@reduxjs/toolkit";

export const dragSlice = createSlice({
    name: "drag",
    initialState: {
        value: undefined,
    },
    reducers: {
        setCounter: (state, action) => {
            state.value = action.payload;
        },
    },
});