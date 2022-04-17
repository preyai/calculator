import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getIDetail } from "../../helpers/details";
import { detailsState, detailTitle, Idetail } from "../../interfaces/details";

interface detailPayload {
    detail: Idetail,
    target?: Idetail
}


const titles: detailTitle[] = ['DISPLAY', 'ACTIONS', 'SYMBOLS', 'EQUALS']

const d = titles.map(t => getIDetail(t))

const initialState: detailsState = {
    list: [],
    palete: d
}

const detailsSlice = createSlice({
    name: 'details',
    initialState,
    reducers: {
        addDetail: (state: detailsState, action: PayloadAction<detailPayload>) => {
            if (action.payload.detail === action.payload.target)
                return
            if (state.list.find(d => d.title === action.payload.detail.title)) {
                state.list = state.list.filter(d => d.title !== action.payload.detail.title)
            }
            if (action.payload.target)
                state.list.splice(state.list.findIndex(d => d.title === action.payload.target?.title), 0, action.payload.detail)
            else
                state.list.push(action.payload.detail)
        },
        removeDetail: (state: detailsState, action: PayloadAction<Idetail>) => {
            state.list = state.list.filter(d => d.title !== action.payload.title)
        }
    }
})

export const { addDetail, removeDetail } = detailsSlice.actions

export default detailsSlice.reducer