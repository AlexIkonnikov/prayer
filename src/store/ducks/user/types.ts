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

export interface IUserSlice {
    user: IUser,
    fetchingStatus: 'start' | 'stop'
    errors: Array<string>
}
