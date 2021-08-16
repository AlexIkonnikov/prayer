import { createSelector, Selector } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { IUser, UserSliceInitialState } from './types';

const selectUserSlice = (state:RootState): UserSliceInitialState => {
    return (state.user);
};

const selectUser = createSelector(
    selectUserSlice,
    (user: UserSliceInitialState) => user.user
);

const selectUserToken = createSelector(
    selectUser,
    (user: IUser) => user.token
);

const selectFetchingStatus = createSelector(
    selectUserSlice,
    (user: UserSliceInitialState) => user.fetchingStatus
);

export const selectors = {selectUser, selectUserToken, selectFetchingStatus};