import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IColumn, AddColumnPayload, IColumnSlice} from './types';

const initialState: IColumnSlice = {columns: [], dataUpdateStatus: 'done'};

const columnSlice = createSlice({
  name: 'column',
  initialState,
  reducers: {
    addColumnsRequest(state) {
      state.dataUpdateStatus = 'inProcess';
    },
    addColumnsSuccess(state, {payload}: PayloadAction<Array<IColumn>>) {
      state.columns = payload;
      state.dataUpdateStatus = 'done';
    },
    addColumnRequest(state, {payload}: PayloadAction<AddColumnPayload>) {
      state.dataUpdateStatus = 'inProcess';
    },
    addColumnSuccess(state, {payload}: PayloadAction<IColumn>) {
      state.columns.push(payload);
      state.dataUpdateStatus = 'done';
    },
    updateColumnRequest(state, {payload}: PayloadAction<IColumn>) {
      state.dataUpdateStatus = 'inProcess';
    },
    updateColumnSuccess(state, {payload}: PayloadAction<IColumn>) {
      const index = state.columns.findIndex(col => col.id === payload.id);
      if (index !== -1) {
        state.columns.splice(index, 1, payload);
        state.dataUpdateStatus = 'done';
      }
    },
    deleteColumnRequest(state, {payload}: PayloadAction<number>) {
      state.dataUpdateStatus = 'inProcess';
    },
    deleteColumnSuccess(state, {payload}: PayloadAction<number>) {
      const index = state.columns.findIndex(col => col.id === payload);
      if (index !== -1) {
        state.columns.splice(index, 1);
        state.dataUpdateStatus = 'done';
      }
    },
  },
});

export default columnSlice.reducer;
export const actions = columnSlice.actions;
