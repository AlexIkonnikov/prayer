import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IColumn, AddColumnPayload } from './types';

const initialState: Array<IColumn> = [];

const columnSlice = createSlice({
    name: 'column',
    initialState,
    reducers: {
        addColumnsRequest(state) {
            //do nothing?
        },
        addColumnsSuccses(state, {payload}: PayloadAction<Array<IColumn>>) {
            return state = [...payload];
        },
        addColumnRequest(state, {payload}: PayloadAction<AddColumnPayload>) {

        },
        addColumnSuccses(state, {payload}:  PayloadAction<IColumn>){
            state.push(payload);
        },
        updateColumnRequest(state, {payload}: PayloadAction<IColumn>) {

        },
        updateColumnSuccses(state, {payload}: PayloadAction<IColumn>) {
            const index = state.findIndex((col) => col.id === payload.id);
            if (index !== -1) state.splice(index, 1, payload);
        },
        deletColumnRequest(state, {payload}:PayloadAction<number>) {
            
        },
        deleteColumnSuccses(state, {payload}:PayloadAction<number>) {
            const index = state.findIndex((col) => col.id === payload);
            if (index !== -1) state.splice(index, 1);
        }
    }
});

export default columnSlice.reducer;
export const actions = columnSlice.actions;