import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import createSagaMiddleware from "redux-saga"
import { all } from "redux-saga/effects";

import { userReducer } from "./ducks/user";
import { columnReducer } from "./ducks/column";
import { prayerReducer } from "./ducks/prayer";
import { commentReducer } from "./ducks/comment";

import { userWatcher } from "./ducks/user";
import { columnWatcher } from "./ducks/column";
import { prayerWatcher } from "./ducks/prayer";
import { commentWatcher } from "./ducks/comment";

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    user: userReducer,
    column: columnReducer,
    prayer: prayerReducer,
    comment: commentReducer,
})

export const store = configureStore({
    reducer: rootReducer,
    devTools: true,
    middleware: [sagaMiddleware]
});

function* rootSaga() {
    yield all([
        userWatcher(),
        columnWatcher(),
        prayerWatcher(),
        commentWatcher()
    ])
};

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;