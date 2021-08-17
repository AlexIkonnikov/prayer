import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeEvery } from 'redux-saga/effects';
import { addColumn, deleteColumn, getColumns, updateColumn } from './api';
import { actions } from './columnSlice';
import { AddColumnPayload, IColumn } from './types';

function* getColumnsRequestHandler(action: PayloadAction) {
    const {data} = yield call(getColumns);
    yield put(actions.addColumnsSuccses(data));
}

function* addColumnRequestHandler({ payload }: PayloadAction<AddColumnPayload>) {
    const {title, description} = payload;
    const {data} = yield call(addColumn, {title, description});
    yield put(actions.addColumnSuccses(data));
}

function* deleteColumnRequestHandler({payload}: PayloadAction<number>) {
    yield call(deleteColumn, payload);
    yield put(actions.deleteColumnSuccses(payload));
}

function* updateColumnRequestHandler({payload}: PayloadAction<IColumn>) {
    const {data} = yield call(updateColumn, payload);
    yield put(actions.updateColumnSuccses(data));
}

export function* columnWatcher() {
    yield takeEvery(actions.addColumnsRequest.type, getColumnsRequestHandler);
    yield takeEvery(actions.addColumnRequest.type, addColumnRequestHandler);
    yield takeEvery(actions.deletColumnRequest.type, deleteColumnRequestHandler);
    yield takeEvery(actions.updateColumnRequest.type, updateColumnRequestHandler);
}