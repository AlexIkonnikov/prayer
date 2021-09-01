import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '../store';
import {IUser, IUserSlice, ErrorsObject} from './types';

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

const selectError = createSelector(
  selectUserSlice,
  (user: IUserSlice) => user.errorMessage,
);

const selectSignInError = createSelector(
  selectError,
  (error: ErrorsObject) => error.signInError,
);

const selectSignUpError = createSelector(
  selectError,
  (error: ErrorsObject) => error.signUpError,
);

export const selectors = {
  selectUser,
  selectUserToken,
  selectFetchingStatus,
  selectError,
  selectSignInError,
  selectSignUpError,
};
