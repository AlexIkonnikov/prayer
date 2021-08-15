import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { userReducer } from "./ducks/user";

const rootReducer = combineReducers({
    user: userReducer
})

export const store = configureStore({
    reducer: rootReducer,
    devTools: true,
    middleware: []
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;