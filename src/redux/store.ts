import { configureStore } from "@reduxjs/toolkit";
import mode from './mode/modeSlice'
import details from './details/detailsSlice'
import drag from './drag/dragSlice'

const store = configureStore({
    reducer: {
        mode,
        drag,
        details
    }
})

export type RootState = ReturnType<typeof store.getState>

export default store