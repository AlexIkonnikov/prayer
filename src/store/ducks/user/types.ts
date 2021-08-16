export interface IUser extends SignUpPayload {
    token: string
};

export interface SignUpPayload extends SignInPayload{
    name: string
};

export interface SignInPayload {
    email: string
    password?: string
}

export interface UserSliceInitialState {
    user: IUser,
    fetchingStatus: 'start' | 'stop'
}
