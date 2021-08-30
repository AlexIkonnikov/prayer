import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '../../store';
import {ICommentSlice, IComment} from './types';

const selectCommentSlice = (state: RootState): ICommentSlice => {
  return state.comment;
};

const selectAllComment = createSelector(
  selectCommentSlice,
  (slice: ICommentSlice): Array<IComment> => slice.comments,
);

const selectDataUpdateStatus = createSelector(
  selectCommentSlice,
  (slice: ICommentSlice) => slice.dataUpdateStatus,
);

const selectCommentsByPrayerId = (prayerId: number) => {
  return createSelector(selectAllComment, (comments: Array<IComment>) => {
    return comments.filter(comment => comment.prayerId === prayerId);
  });
};

const selectCommentCountById = (prayerId: number) => {
  return createSelector(
    selectCommentsByPrayerId(prayerId),
    (comments: Array<IComment>) => comments.length,
  );
};

export const selectors = {
  selectAllComment,
  selectCommentsByPrayerId,
  selectCommentCountById,
  selectDataUpdateStatus,
};
