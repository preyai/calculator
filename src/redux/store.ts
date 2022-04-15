import { configureStore } from "@reduxjs/toolkit";
import mode from './mode/modeSlice'

const store = configureStore({
    reducer: {
        mode
    }
})

export type RootState = ReturnType<typeof store.getState>

export default store