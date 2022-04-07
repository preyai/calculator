import { configureStore } from "@reduxjs/toolkit";
import drag from './counter/dragSlice'

const store = configureStore({
    reducer: {
        drag,
    }
})

export default store
export type RootState = ReturnType<typeof store.getState>