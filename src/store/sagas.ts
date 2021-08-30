import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import { userWatcher } from './user';
import { columnWatcher } from './column';
import { prayerWatcher } from './prayer';
import { commentWatcher } from './comment';

export const sagaMiddleware = createSagaMiddleware();

export function* rootSaga() {
    yield all([
        userWatcher(),
        columnWatcher(),
        prayerWatcher(),
        commentWatcher(),
    ]);
};