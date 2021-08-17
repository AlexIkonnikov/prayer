import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeEvery } from 'redux-saga/effects';
import { signIn, signUp } from './api';
import { SignInPayload, SignUpPayload } from './types';
import { actions } from './userSlice';

function* signUpRequestHandler({payload}: PayloadAction<SignUpPayload>) {
    const {data} = yield call(signUp, {...payload});
    console.log(data);
    const {email, name, password, token} = data;
    yield put(actions.signUpSuccsecResponse({email, name, password, token}));
}

function* signInRequestHandler({payload}: PayloadAction<SignInPayload>) {
    const {data} = yield call(signIn, {...payload});
    const {name, email, token} = data;
    yield put(actions.signInSuccsecRequest({name, email, token}));

}

export function* userWatcher() {
    yield takeEvery(actions.signUpRequest.type, signUpRequestHandler);
    yield takeEvery(actions.signInRequest.type, signInRequestHandler);
}