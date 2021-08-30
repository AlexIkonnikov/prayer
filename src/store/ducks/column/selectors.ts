import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '../../store';
import {IColumnSlice} from './types';

const selectColumnSlice = (state: RootState): IColumnSlice => {
  return state.column;
};

const selectColumn = createSelector(
  selectColumnSlice,
  (slice: IColumnSlice) => slice.columns,
);

const selectDataUpdateStatus = createSelector(
  selectColumnSlice,
  (slice: IColumnSlice) => slice.dataUpdateStatus,
);

export const selectors = {
  selectColumnSlice,
  selectColumn,
  selectDataUpdateStatus,
};
