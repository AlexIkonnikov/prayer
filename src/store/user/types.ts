export interface IUser extends SignUpPayload {
  id: number;
  token: string;
}

export interface SignUpPayload extends SignInPayload {
  name: string;
}

export interface SignInPayload {
  email: string;
  password?: string;
}

export interface IUserSlice {
  user: IUser;
  fetchingStatus: 'start' | 'stop';
  errorMessage: ErrorsObject;
}

export interface ErrorsObject {
  signInError: string;
  signUpError: string;
}
