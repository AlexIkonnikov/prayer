import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserSliceInitialState, IUser, SignUpPayload, SignInPayload } from "./types";

const initialState: UserSliceInitialState = {
    user: {
        name: '',
        email: '',
        password: '',
        token: '',
    },
    fetchingStatus: 'stop',
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signUpRequest(state, { payload }: PayloadAction<SignUpPayload>) {
            state.fetchingStatus = 'start';
        },
        signUpSuccsecResponse(state, { payload }: PayloadAction<IUser>) {
            return { user: {...payload}, fetchingStatus: 'stop' };
        },
        signInRequest(state, { payload }: PayloadAction<SignInPayload>) {
            state.fetchingStatus = 'start';
        },
        signInSuccsecRequest(state, { payload }: PayloadAction<IUser>) {
            return { user: {...payload}, fetchingStatus: 'stop' };
        },
        logOut() {
            return initialState;
        }
    }
});

export default userSlice.reducer;
export const actions = userSlice.actions;