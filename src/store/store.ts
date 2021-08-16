import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { userReducer } from "./ducks/user";
import { columnReducer } from "./ducks/column";
import { userWatcher } from "./ducks/user/sagas";
import createSagaMiddleware from "redux-saga"
import { all } from "redux-saga/effects";
import { columnWatcher } from "./ducks/column/sagas";

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    user: userReducer,
    column: columnReducer
})

export const store = configureStore({
    reducer: rootReducer,
    devTools: true,
    middleware: [sagaMiddleware]
});

function* rootSaga() {
    yield all([
        userWatcher(),
        columnWatcher()
    ])
};

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;