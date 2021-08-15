export interface IUser extends SignUpPayload {
    token: string
};

export interface SignUpPayload {
    name: string
    email: string
    password: string
}