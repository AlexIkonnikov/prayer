import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser, SignUpPayload } from "./types";

const initialState: IUser = {
    name: '',
    email: '',
    password: '',
    token: ''
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        sugnUp(state, {payload}: PayloadAction<SignUpPayload> ) {
           
        }
    }
});

export default userSlice.reducer;
export const actions = userSlice.actions;