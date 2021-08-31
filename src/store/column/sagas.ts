import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeEvery } from 'redux-saga/effects';
import { addColumn, deleteColumn, getColumns, updateColumn } from '../../services/api';
import { actions } from './columnSlice';
import { AddColumnPayload, IColumn } from './types';

function* getColumnsRequestHandler() {
  try {
    const { data } = yield call(getColumns);
    yield put(actions.addColumnsSuccess(data));
  } catch (e) {
    console.error(e);
  }
}

function* addColumnRequestHandler({ payload }: PayloadAction<AddColumnPayload>) {
  try {
    const { title, description } = payload;
    const { data } = yield call(addColumn, { title, description });
    yield put(actions.addColumnSuccess(data));
  } catch (e) {
    console.error(e);
  }
}

function* deleteColumnRequestHandler({ payload }: PayloadAction<number>) {
  try {
    yield call(deleteColumn, payload);
    yield put(actions.deleteColumnSuccess(payload));
  } catch (e) {
    console.error(e);
  }
}

function* updateColumnRequestHandler({ payload }: PayloadAction<IColumn>) {
  try {
    const { data } = yield call(updateColumn, payload);
    yield put(actions.updateColumnSuccess(data));
  } catch (e) {
    console.error(e);
  }
}

export function* columnWatcher() {
  yield takeEvery(actions.addColumnsRequest.type, getColumnsRequestHandler);
  yield takeEvery(actions.addColumnRequest.type, addColumnRequestHandler);
  yield takeEvery(actions.deleteColumnRequest.type, deleteColumnRequestHandler);
  yield takeEvery(actions.updateColumnRequest.type, updateColumnRequestHandler);
}
