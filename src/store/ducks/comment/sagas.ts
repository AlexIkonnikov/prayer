import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeEvery } from 'redux-saga/effects';
import { addComment, deleteComment, getAllComments, updateComment } from './api';
import { actions } from './commentSlice';
import { IComment, UpdateCommentPayload } from './types';

function* getAllCommentsRequestHandler() {
    const {data} = yield call(getAllComments);
    yield put(actions.addCommentSuccses(data));
}

function* addCommentRequestHandler({payload}: PayloadAction<IComment>) {
    const {data} = yield call(addComment, payload);
    const {id, body, created, userId, prayerId} = data;
    yield put(actions.addCommentSuccses({id, body, created, userId, prayerId}));
}

function* updateCommentRequestHandler({payload}: PayloadAction<UpdateCommentPayload>) {
    const {data} = yield call(updateComment, payload);
    yield put(actions.updateCommentSuccses(data));
}

function* deleteCommentRequestHandler({payload}: PayloadAction<number>) {
    yield call(deleteComment, payload);
    yield put(actions.deleteCommentSuccses(payload));
}

export function* commentWatcher() {
    yield takeEvery(actions.getAllCommentsRequest.type, getAllCommentsRequestHandler);
    yield takeEvery(actions.addCommentRequest.type, addCommentRequestHandler);
    yield takeEvery(actions.updateCommentRequest.type, updateCommentRequestHandler);
    yield takeEvery(actions.deleteCommentRequest.type, deleteCommentRequestHandler);
}