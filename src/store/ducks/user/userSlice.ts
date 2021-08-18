import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserSlice, IUser, SignUpPayload, SignInPayload } from "./types";

const initialState: IUserSlice = {
    user: {
        id: -1,
        name: '',
        email: '',
        password: '',
        token: '',
    },
    fetchingStatus: 'stop',
    errors: []
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signUpRequest(state, { payload }: PayloadAction<SignUpPayload>) {
            state.fetchingStatus = 'start';
        },
        signUpSuccsecResponse(state, { payload }: PayloadAction<IUser>) {
            state.user = {...payload};
            state.fetchingStatus = 'stop';
        },
        signInRequest(state, { payload }: PayloadAction<SignInPayload>) {
            state.fetchingStatus = 'start';
        },
        signInSuccsecRequest(state, { payload }: PayloadAction<IUser>) {
            state.user = {...payload};
            state.fetchingStatus = 'stop';
        },
        requestFailed(state, {payload}: PayloadAction<string>) {
            state.fetchingStatus = 'stop';
            state.errors.push(payload);
        },
        cleanErrors(state) {
            state.errors = [];
        },
        logOut() {
            return initialState;
        }
    }
});

export default userSlice.reducer;
export const actions = userSlice.actions;