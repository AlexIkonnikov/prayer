import {PayloadAction} from '@reduxjs/toolkit';
import {call, put, takeEvery} from 'redux-saga/effects';
import {addPrayer, deletePrayer, getPrayers, updatePrayerById} from './api';
import {actions} from './prayersSlice';
import {AddPrayerPayload, UpdatePrayerPayload} from './types';

function* getAllPrayersRequestHandler() {
  try {
    const {data} = yield call(getPrayers);
    yield put(actions.getAllPrayersSuccsesResponse(data));
  } catch (e) {
    console.error(e);
  }
}

function* updatePrayerRequestHandler({
  payload,
}: PayloadAction<UpdatePrayerPayload>) {
  try {
    const {data} = yield call(updatePrayerById, {...payload});
    yield put(actions.updatePrayerSuccsesResponse(data));
  } catch (e) {
    console.error(e);
  }
}

function* addPrayerRequestHandler({payload}: PayloadAction<AddPrayerPayload>) {
  try {
    const {data} = yield call(addPrayer, payload);
    yield put(actions.addPrayerToColumnSuccses(data));
  } catch (e) {
    console.error(e);
  }
}

function* deletePrayerRequestHandler({payload}: PayloadAction<number>) {
  try {
    yield call(deletePrayer, payload);
    yield put(actions.deletPrayerSuccses(payload));
  } catch (e) {
    console.error(e);
  }
}

export function* prayerWatcher() {
  yield takeEvery(
    actions.getAllPrayersRequest.type,
    getAllPrayersRequestHandler,
  );
  yield takeEvery(actions.updatePrayerRequest.type, updatePrayerRequestHandler);
  yield takeEvery(
    actions.addPrayerToColumnRequest.type,
    addPrayerRequestHandler,
  );
  yield takeEvery(actions.deletPrayerRequest.type, deletePrayerRequestHandler);
}
