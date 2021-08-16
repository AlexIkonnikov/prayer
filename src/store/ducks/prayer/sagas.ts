import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeEvery } from 'redux-saga/effects';
import { getPrayers } from './api';
import { actions } from './prayersSlice';

function* getAllPrayersHandler() {
    const {data} = yield call(getPrayers);
    console.log(data);
    yield put(actions.getAllPrayersSuccsesResponse(data));
}

export function* prayerWatcher() {
    yield takeEvery(actions.getAllPrayersRequest.type, getAllPrayersHandler);
}