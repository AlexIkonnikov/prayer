import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';

import {userReducer} from './user';
import {columnReducer} from './column';
import {prayerReducer} from './prayer';
import {commentReducer} from './comment';
import {sagaMiddleware, rootSaga} from './sagas';

const rootReducer = combineReducers({
  user: userReducer,
  column: columnReducer,
  prayer: prayerReducer,
  comment: commentReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
