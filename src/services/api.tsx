import ApiClient from './ApiClient';
import {SignUpPayload, SignInPayload} from '../store/user/types';
import {AddPrayerPayload, UpdatePrayerPayload} from '../store/prayer/types';
import {UpdateCommentPayload, AddCommentPayload} from '../store/comment/types';
import {AddColumnPayload, IColumn} from '../store/column/types';

export const signUp = (data: SignUpPayload) => {
  return ApiClient.post('auth/sign-up', {data});
};

export const signIn = (data: SignInPayload) => {
  return ApiClient.post('auth/sign-in', {data});
};

export const getPrayers = () => {
  return ApiClient.get('prayers');
};

export const updatePrayerById = (data: UpdatePrayerPayload) => {
  return ApiClient.put(`prayers/${data.id}`, {data});
};

export const addPrayer = (data: AddPrayerPayload) => {
  return ApiClient.post(`columns/${data.columnId}/prayers`, {data});
};

export const deletePrayer = (prayerId: number) => {
  return ApiClient.delete(`prayers/${prayerId}`);
};

export const getAllComments = () => {
  return ApiClient.get('comments');
};

export const addComment = (data: AddCommentPayload) => {
  return ApiClient.post(`prayers/${data.id}/comments`, {data});
};

export const updateComment = (data: UpdateCommentPayload) => {
  return ApiClient.put(`comments/${data.id}`, {data});
};

export const deleteComment = (data: number) => {
  return ApiClient.delete(`comments/${data}`);
};

export const getColumns = () => {
  return ApiClient.get('columns');
};

export const addColumn = (data: AddColumnPayload) => {
  return ApiClient.post('columns', {data});
};

export const deleteColumn = (id: number) => {
  return ApiClient.delete(`columns/${id}`);
};

export const updateColumn = ({id, title, description}: IColumn) => {
  return ApiClient.put(`columns/${id}`, {data: {title, description}});
};
