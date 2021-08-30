import Api from '../../../services/Api';
import {UpdateCommentPayload, AddCommentPayload} from './types';

export const getAllComments = () => {
  return Api.get('comments');
};

export const addComment = (data: AddCommentPayload) => {
  return Api.post(`prayers/${data.id}/comments`, {data});
};

export const updateComment = (data: UpdateCommentPayload) => {
  return Api.put(`comments/${data.id}`, {data});
};

export const deleteComment = (data: number) => {
  return Api.delete(`comments/${data}`);
};
