import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPrayer, UpdatePrayerPayload, IPrayerSlice, AddPrayerPayload } from "./types";

const initialState: IPrayerSlice = {prayers: [], dataUpdateStatus: 'done'};

const prayerSlice = createSlice({
    name: 'prayer',
    initialState,
    reducers: {
        getAllPrayersRequest(state) {
            state.dataUpdateStatus = 'inProcess';
        },
        getAllPrayersSuccsesResponse(state, {payload}: PayloadAction<Array<IPrayer>>) {
            state.prayers = [...payload];
            state.dataUpdateStatus = 'done';
        },
        updatePrayerRequest(state, {payload}: PayloadAction<UpdatePrayerPayload>) {
            state.dataUpdateStatus = 'inProcess';
        },
        updatePrayerSuccsesResponse(state, {payload}: PayloadAction<IPrayer>) {
            const index = state.prayers.findIndex((it) => it.id === payload.id);
            if (index !== -1) {
                state.prayers.splice(index, 1, payload);
            }
        },
        addPrayerToColumnRequest(state, {payload}: PayloadAction<AddPrayerPayload>) {
            state.dataUpdateStatus = 'inProcess';
        },
        addPrayerToColumnSuccses(state, {payload}: PayloadAction<IPrayer>) {
            state.dataUpdateStatus = 'done';   
            state.prayers.push(payload);
        }
    }
});

export default prayerSlice.reducer;
export const actions = prayerSlice.actions;