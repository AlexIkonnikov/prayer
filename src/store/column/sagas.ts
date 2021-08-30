import {PayloadAction} from '@reduxjs/toolkit';
import {call, put, takeEvery} from 'redux-saga/effects';
import {addColumn, deleteColumn, getColumns, updateColumn} from './api';
import {actions} from './columnSlice';
import {AddColumnPayload, IColumn} from './types';

function* getColumnsRequestHandler() {
  try {
    const {data} = yield call(getColumns);
    yield put(actions.addColumnsSuccses(data));
  } catch (e) {
    console.error(e);
  }
}

function* addColumnRequestHandler({payload}: PayloadAction<AddColumnPayload>) {
  try {
    const {title, description} = payload;
    const {data} = yield call(addColumn, {title, description});
    yield put(actions.addColumnSuccses(data));
  } catch (e) {
    console.error(e);
  }
}

function* deleteColumnRequestHandler({payload}: PayloadAction<number>) {
  try {
    yield call(deleteColumn, payload);
    yield put(actions.deleteColumnSuccses(payload));
  } catch (e) {
    console.error(e);
  }
}

function* updateColumnRequestHandler({payload}: PayloadAction<IColumn>) {
  try {
    const {data} = yield call(updateColumn, payload);
    yield put(actions.updateColumnSuccses(data));
  } catch (e) {
    console.error(e);
  }
}

export function* columnWatcher() {
  yield takeEvery(actions.addColumnsRequest.type, getColumnsRequestHandler);
  yield takeEvery(actions.addColumnRequest.type, addColumnRequestHandler);
  yield takeEvery(actions.deletColumnRequest.type, deleteColumnRequestHandler);
  yield takeEvery(actions.updateColumnRequest.type, updateColumnRequestHandler);
}
