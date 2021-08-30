import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '../store';
import {IUser, IUserSlice} from './types';

const selectUserSlice = (state: RootState): IUserSlice => {
  return state.user;
};

const selectUser = createSelector(
  selectUserSlice,
  (user: IUserSlice) => user.user,
);

const selectUserToken = createSelector(selectUser, (user: IUser) => user.token);

const selectFetchingStatus = createSelector(
  selectUserSlice,
  (user: IUserSlice) => user.fetchingStatus,
);

const selectErrors = createSelector(
  selectUserSlice,
  (user: IUserSlice) => user.errors,
);

export const selectors = {
  selectUser,
  selectUserToken,
  selectFetchingStatus,
  selectErrors,
};
