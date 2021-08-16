import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeEvery } from 'redux-saga/effects';
import { getColumns } from './api';
import { actions } from './columnSlice';

function* getColumnsRequestHandler(action: PayloadAction) {
    const {data} = yield call(getColumns);
    console.log(data)
    yield put(actions.addColumnsSuccses(data));
}

export function* columnWatcher() {
    yield takeEvery(actions.addColumnsRequest.type, getColumnsRequestHandler);
}