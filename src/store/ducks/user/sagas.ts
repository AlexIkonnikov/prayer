import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeEvery } from 'redux-saga/effects';
import { signIn, signUp } from './api';
import { SignInPayload, SignUpPayload } from './types';
import { actions } from './userSlice';

function* signUpRequestHandler({payload}: PayloadAction<SignUpPayload>) {
    const {data} = yield call(signUp, {...payload});
    const {email, name, password, token} = data;
    yield put(actions.signUpSuccsecResponse({email, name, password, token}));
}

function* signInRequestHandler({payload}: PayloadAction<SignInPayload>) {
    const {data, ...responseInfo} = yield call(signIn, {...payload});
    if (responseInfo.status !== 200 && data.message) {
        yield put(actions.requestFailed(data.message));
        return;
    }
    const {name, email, token} = data;
    yield put(actions.signInSuccsecRequest({name, email, token}));
}

export function* userWatcher() {
    yield takeEvery(actions.signUpRequest.type, signUpRequestHandler);
    yield takeEvery(actions.signInRequest.type, signInRequestHandler);
}