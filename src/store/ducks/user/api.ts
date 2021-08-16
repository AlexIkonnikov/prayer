import Api from "./../../../services/Api";
import { SignUpPayload, SignInPayload } from "./types";

export const signUp = (data: SignUpPayload) => {
    return Api.post('auth/sign-up', {...data});
}

export const signIn = (data: SignInPayload) => {
    return Api.post('auth/sign-in', {...data});
}