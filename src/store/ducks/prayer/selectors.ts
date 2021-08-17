import { createSelector, Selector } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { IPrayer, IPrayerSlice } from './types';

const selectPrayerSlice = (state: RootState): IPrayerSlice => {
    return state.prayer;
};

const selectPrayersById = (id: number) => {
    return createSelector(
        selectPrayerSlice,
        (slice: IPrayerSlice) => slice.prayers.filter((prayer) => prayer.columnId === id)
    )
};

export const selectors = {selectPrayerSlice, selectPrayersById};