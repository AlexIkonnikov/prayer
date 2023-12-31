import {PayloadAction} from '@reduxjs/toolkit';
import {call, put, takeEvery} from 'redux-saga/effects';
import {
  addComment,
  deleteComment,
  getAllComments,
  updateComment,
} from '../../services/api';
import {actions} from './commentSlice';
import {IComment, UpdateCommentPayload, AddCommentPayload} from './types';

function* getAllCommentsRequestHandler() {
  try {
    const {data} = yield call(getAllComments);
    yield put(actions.getAllCommentsSuccess(data));
  } catch (e) {
    console.error(e);
  }
}

function* addCommentRequestHandler({
  payload,
}: PayloadAction<AddCommentPayload>) {
  try {
    const {data} = yield call(addComment, payload);
    const {id, body, created, userId, prayerId} = data;
    yield put(actions.addCommentSuccess({id, body, created, userId, prayerId}));
  } catch (e) {
    console.error(e);
  }
}

function* updateCommentRequestHandler({
  payload,
}: PayloadAction<UpdateCommentPayload>) {
  try {
    const {data} = yield call(updateComment, payload);
    yield put(actions.updateCommentSuccess(data));
  } catch (e) {
    console.error(e);
  }
}

function* deleteCommentRequestHandler({payload}: PayloadAction<number>) {
  try {
    yield call(deleteComment, payload);
    yield put(actions.deleteCommentSuccess(payload));
  } catch (e) {
    console.error(e);
  }
}

export function* commentWatcher() {
  yield takeEvery(
    actions.getAllCommentsRequest.type,
    getAllCommentsRequestHandler,
  );
  yield takeEvery(actions.addCommentRequest.type, addCommentRequestHandler);
  yield takeEvery(
    actions.updateCommentRequest.type,
    updateCommentRequestHandler,
  );
  yield takeEvery(
    actions.deleteCommentRequest.type,
    deleteCommentRequestHandler,
  );
}
