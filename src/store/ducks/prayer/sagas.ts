import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeEvery } from 'redux-saga/effects';
import { addPrayer, deletePrayer, getPrayers, updatePrayerById } from './api';
import { actions } from './prayersSlice';
import { AddPrayerPayload, UpdatePrayerPayload } from './types';

function* getAllPrayersRequestHandler() {
    const {data} = yield call(getPrayers);
    yield put(actions.getAllPrayersSuccsesResponse(data));
}

function* updatePrayerRequestHandler({payload}: PayloadAction<UpdatePrayerPayload>) {
    const {data} = yield call(updatePrayerById, {...payload});
    yield put(actions.updatePrayerSuccsesResponse(data));
}

function* addPrayerRequestHandler({payload}: PayloadAction<AddPrayerPayload>) {
    const {data} = yield call(addPrayer, payload);
    yield put(actions.addPrayerToColumnSuccses(data));
}

function* deletePrayerRequestHandler({payload}: PayloadAction<number>) {
    const {data} = yield call(deletePrayer, payload);
    yield put(actions.deletPrayerSuccses(payload));
}

export function* prayerWatcher() {
    yield takeEvery(actions.getAllPrayersRequest.type, getAllPrayersRequestHandler);
    yield takeEvery(actions.updatePrayerRequest.type, updatePrayerRequestHandler);
    yield takeEvery(actions.addPrayerToColumnRequest.type, addPrayerRequestHandler);
    yield takeEvery(actions.deletPrayerRequest.type, deletePrayerRequestHandler);
}