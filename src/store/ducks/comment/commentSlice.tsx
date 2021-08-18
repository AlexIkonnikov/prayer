import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICommentSlice, IComment, UpdateCommentPayload, AddCommentPayload } from "./types";

const initialState: ICommentSlice = {
    comments: [],
    dataUpdateStatus: 'done'
}

const commentSlice = createSlice({
    name: 'comment',
    initialState,
    reducers: {
        getAllCommentsRequest(state) {
            state.dataUpdateStatus = 'inProcess';
        },
        getAllCommentsSuccses(state, {payload}: PayloadAction<Array<IComment>>) {
            state.comments = [...payload];
            state.dataUpdateStatus = 'done';
        },
        addCommentRequest(state, {payload}: PayloadAction<AddCommentPayload>) {
            state.dataUpdateStatus = 'inProcess';
        },
        addCommentSuccses(state, {payload}: PayloadAction<IComment>) {
            state.comments.push(payload);
            state.dataUpdateStatus = 'done';
        },
        updateCommentRequest(state, {payload}: PayloadAction<UpdateCommentPayload>) {
            state.dataUpdateStatus = 'inProcess';
        },
        updateCommentSuccses(state, {payload}: PayloadAction<IComment>) {
            const index = state.comments.findIndex((comment) => comment.id === payload.id);
            if (index !== -1) {
                state.comments.splice(index, 1, payload);
            }
            state.dataUpdateStatus = 'done';
        },
        deleteCommentRequest(state, {payload}: PayloadAction<number>) {
            state.dataUpdateStatus = 'inProcess';
        },
        deleteCommentSuccses(state, {payload}: PayloadAction<number>) {
            const index = state.comments.findIndex((comment) => comment.id === payload);
            if (index !== -1) {
                state.comments.splice(index, 1);
            }
            state.dataUpdateStatus = 'done';
        }
    }
});

export default commentSlice.reducer;
export const actions = commentSlice.actions;