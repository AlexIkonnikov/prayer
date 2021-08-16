import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPrayer } from "./types";

const initialState: Array<IPrayer> = [];

const prayerSlice = createSlice({
    name: "prayer",
    initialState,
    reducers: {
        getAllPrayersRequest(state) {

        },
        getAllPrayersSuccsesResponse(state, {payload}: PayloadAction<Array<IPrayer>>) {
            return state = [...payload];
        }
    }
});

export default prayerSlice.reducer;
export const actions = prayerSlice.actions;