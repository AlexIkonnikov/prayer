import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { ICommentSlice, IComment } from './types';

const selectCommentSlice = (state: RootState): ICommentSlice => {
    return state.comment;
};

const selectAllComment = createSelector(
    selectCommentSlice,
    (slice: ICommentSlice) => slice.comments
);

const selectCommentsByPrayerId = (id: number) => {
    return createSelector(
        selectAllComment,
        (comments: Array<IComment> ) => {
            return comments.filter((comment) => comment.prayerId === id);
        }
    )
};

export const selectors = {selectAllComment, selectCommentsByPrayerId};