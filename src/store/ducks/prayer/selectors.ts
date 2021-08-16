import { createSelector, Selector } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { IPrayer } from './types';

const selectPrayerSlice = (state: RootState): Array<IPrayer> => {
    return state.prayer;
};

const selectPrayersById = (id: number) => {
    return createSelector(
        selectPrayerSlice,
        (prayers: Array<IPrayer>) => prayers.filter((prayer) => prayer.columnId === id)
    )
};

export const selectors = {selectPrayerSlice, selectPrayersById};