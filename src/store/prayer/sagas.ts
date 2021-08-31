import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeEvery } from 'redux-saga/effects';
import { addPrayer, deletePrayer, getPrayers, updatePrayerById } from '../../services/api';
import { actions } from './prayersSlice';
import { AddPrayerPayload, UpdatePrayerPayload } from './types';

function* getAllPrayersRequestHandler() {
  try {
    const { data } = yield call(getPrayers);
    yield put(actions.getAllPrayersSuccessResponse(data));
  } catch (e) {
    console.error(e);
  }
}

function* updatePrayerRequestHandler({
  payload,
}: PayloadAction<UpdatePrayerPayload>) {
  try {
    const { data } = yield call(updatePrayerById, { ...payload });
    yield put(actions.updatePrayerSuccessResponse(data));
  } catch (e) {
    console.error(e);
  }
}

function* addPrayerRequestHandler({ payload }: PayloadAction<AddPrayerPayload>) {
  try {
    const { data } = yield call(addPrayer, payload);
    yield put(actions.addPrayerToColumnSuccess(data));
  } catch (e) {
    console.error(e);
  }
}

function* deletePrayerRequestHandler({ payload }: PayloadAction<number>) {
  try {
    yield call(deletePrayer, payload);
    yield put(actions.deletePrayerSuccess(payload));
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
  yield takeEvery(actions.deletePrayerRequest.type, deletePrayerRequestHandler);
}
