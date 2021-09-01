import {PayloadAction} from '@reduxjs/toolkit';
import {call, put, takeEvery} from 'redux-saga/effects';
import {signIn, signUp} from '../../services/api';
import {SignInPayload, SignUpPayload} from './types';
import {actions} from './userSlice';

function* signUpRequestHandler({payload}: PayloadAction<SignUpPayload>) {
  yield put(actions.cleanErrors());
  try {
    const {data, ...responseInfo} = yield call(signUp, {...payload});
    if (responseInfo.status !== 200 && data.message) {
      yield put(actions.signUpRequestFailed('Пользователь уже существует'));
      return;
    }
    const {id, email, name, password, token} = data;
    yield put(
      actions.signUpSuccessResponse({id, email, name, password, token}),
    );
  } catch (e) {
    console.error(e);
  }
}

function* signInRequestHandler({payload}: PayloadAction<SignInPayload>) {
  yield put(actions.cleanErrors());
  try {
    const {data, ...responseInfo} = yield call(signIn, {...payload});
    if (responseInfo.status !== 200 && data.message) {
      yield put(actions.signInRequestFailed('Неверный логин или пароль'));
      return;
    }
    const {id, name, email, token} = data;
    yield put(actions.signInSuccessRequest({id, name, email, token}));
  } catch (e) {
    console.error(e);
  }
}

export function* userWatcher() {
  yield takeEvery(actions.signUpRequest.type, signUpRequestHandler);
  yield takeEvery(actions.signInRequest.type, signInRequestHandler);
}
