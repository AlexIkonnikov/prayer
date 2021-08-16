import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeEvery } from 'redux-saga/effects';
import { addColumn, getColumns } from './api';
import { actions } from './columnSlice';
import { AddColumnPayload } from './types';

function* getColumnsRequestHandler(action: PayloadAction) {
    const {data} = yield call(getColumns);
    yield put(actions.addColumnsSuccses(data));
}

function* addColumnRequestHandler({ payload }: PayloadAction<AddColumnPayload>) {
    const {title, description} = payload;
    const {data} = yield call(addColumn, {title, description});
    yield put(actions.addColumnSuccses(data));
}

export function* columnWatcher() {
    yield takeEvery(actions.addColumnsRequest.type, getColumnsRequestHandler);
    yield takeEvery(actions.addColumnRequest.type, addColumnRequestHandler)
}