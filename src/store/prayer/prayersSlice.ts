import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
  IPrayer,
  UpdatePrayerPayload,
  IPrayerSlice,
  AddPrayerPayload,
} from './types';

const initialState: IPrayerSlice = {prayers: [], dataUpdateStatus: 'done'};

const prayerSlice = createSlice({
  name: 'prayer',
  initialState,
  reducers: {
    getAllPrayersRequest(state) {
      state.dataUpdateStatus = 'inProcess';
    },
    getAllPrayersSuccessResponse(
      state,
      {payload}: PayloadAction<Array<IPrayer>>,
    ) {
      state.prayers = [...payload];
      state.dataUpdateStatus = 'done';
    },
    updatePrayerRequest(state, {payload}: PayloadAction<UpdatePrayerPayload>) {
      state.dataUpdateStatus = 'inProcess';
    },
    updatePrayerSuccessResponse(state, {payload}: PayloadAction<IPrayer>) {
      const index = state.prayers.findIndex(it => it.id === payload.id);
      if (index !== -1) {
        state.prayers.splice(index, 1, payload);
      }
      state.dataUpdateStatus = 'done';
    },
    addPrayerToColumnRequest(
      state,
      {payload}: PayloadAction<AddPrayerPayload>,
    ) {
      state.dataUpdateStatus = 'inProcess';
    },
    addPrayerToColumnSuccess(state, {payload}: PayloadAction<IPrayer>) {
      state.dataUpdateStatus = 'done';
      state.prayers.push(payload);
    },
    deletePrayerRequest(state, {payload}: PayloadAction<number>) {
      state.dataUpdateStatus = 'inProcess';
    },
    deletePrayerSuccess(state, {payload}: PayloadAction<number>) {
      state.dataUpdateStatus = 'done';
      const index = state.prayers.findIndex(pray => pray.id === payload);
      if (index !== -1) {
        state.prayers.splice(index, 1);
      }
    },
  },
});

export default prayerSlice.reducer;
export const actions = prayerSlice.actions;
