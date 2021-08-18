import Api from "../../../services/Api";
import { IComment, UpdateCommentPayload } from "./types";

export const getAllComments = () => {
    return Api.get('comments');
}

export const addComment = (data: IComment) => {
    return Api.post(`prayers​/${data.prayerId}​/comments`, {data});
};

export const updateComment = (data: UpdateCommentPayload) => {
    return Api.put(`comments/${data.id}`, {data});
};

export const deleteComment = (data: number) => {
    return Api.delete(`comments/${data}`);
};