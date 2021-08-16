import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPrayer, UpdatePrayerPayload } from "./types";

const initialState: Array<IPrayer> = [];

const prayerSlice = createSlice({
    name: "prayer",
    initialState,
    reducers: {
        getAllPrayersRequest(state) {

        },
        getAllPrayersSuccsesResponse(state, {payload}: PayloadAction<Array<IPrayer>>) {
            return state = [...payload];
        },
        updatePrayerRequest(state, {payload}: PayloadAction<UpdatePrayerPayload>) {

        },
        updatePrayerSuccsesResponse(state, {payload}: PayloadAction<IPrayer>) {
            const index = state.findIndex((it) => it.id === payload.id);
            if (index !== -1) state.splice(index, 1, payload);
        }
    }
});

export default prayerSlice.reducer;
export const actions = prayerSlice.actions;