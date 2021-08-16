import { createSelector, Selector } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { IColumn } from './types';


const selectColumnSlice = (state: RootState): Array<IColumn> => {
    return state.column;
}

export const selectors = { selectColumnSlice };