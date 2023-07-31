import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IUserSlice, IUser, SignUpPayload, SignInPayload} from './types';

const initialState: IUserSlice = {
  user: {
    id: -1,
    name: '',
    email: '',
    password: '',
    token: '',
  },
  fetchingStatus: 'stop',
  errorMessage: {signInError: '', signUpError: ''},
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signUpRequest(state, {payload}: PayloadAction<SignUpPayload>) {
      state.fetchingStatus = 'start';
    },
    signUpSuccessResponse(state, {payload}: PayloadAction<IUser>) {
      state.user = {...payload};
      state.fetchingStatus = 'stop';
    },
    signInRequest(state, {payload}: PayloadAction<SignInPayload>) {
      state.fetchingStatus = 'start';
    },
    signInSuccessRequest(state, {payload}: PayloadAction<IUser>) {
      state.user = {...payload};
      state.fetchingStatus = 'stop';
    },
    signInRequestFailed(state, {payload}: PayloadAction<string>) {
      state.fetchingStatus = 'stop';
      state.errorMessage.signInError = payload;
    },
    signUpRequestFailed(state, {payload}: PayloadAction<string>) {
      state.fetchingStatus = 'stop';
      state.errorMessage.signUpError = payload;
    },
    cleanErrors(state) {
      state.errorMessage = {signInError: '', signUpError: ''};
    },
    logOut() {
      return initialState;
    },
  },
});

export default userSlice.reducer;
export const actions = userSlice.actions;
