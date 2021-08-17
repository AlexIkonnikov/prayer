import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeEvery } from 'redux-saga/effects';
import { getPrayers, updatePrayerById } from './api';
import { actions } from './prayersSlice';
import { UpdatePrayerPayload } from './types';

function* getAllPrayersHandler() {
    const {data} = yield call(getPrayers);
    yield put(actions.getAllPrayersSuccsesResponse(data));
}

function* updatePrayerHandler({payload}: PayloadAction<UpdatePrayerPayload>) {
    const {data} = yield call(updatePrayerById, {...payload});
    yield put(actions.updatePrayerSuccsesResponse(data));
}

export function* prayerWatcher() {
    yield takeEvery(actions.getAllPrayersRequest.type, getAllPrayersHandler);
    yield takeEvery(actions.updatePrayerRequest.type, updatePrayerHandler);
}