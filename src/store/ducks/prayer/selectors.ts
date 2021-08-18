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

const selectPrayerById = (id: number) => {
    return createSelector(
        selectPrayerSlice,
        (slice: IPrayerSlice) => slice.prayers.find((prayer) => prayer.id === id)
    )
};

const selectDataUpdateStatus = createSelector(
    selectPrayerSlice, 
    (slice: IPrayerSlice) => slice.dataUpdateStatus
);

export const selectors = {selectPrayerSlice, selectPrayersById, selectPrayerById, selectDataUpdateStatus};