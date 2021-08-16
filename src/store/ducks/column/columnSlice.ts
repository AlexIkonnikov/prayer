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
        }
    }
});

export default columnSlice.reducer;
export const actions = columnSlice.actions;