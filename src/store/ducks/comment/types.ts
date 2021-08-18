import { IUser } from "../user";

export interface IComment {
    id: number
    body: string
    created: string
    prayerId: null
    userId: number
}

export interface ICommentSlice {
    comments: Array<IComment>
    dataUpdateStatus: 'inProcess' | 'done'
}

export interface UpdateCommentPayload {
    id: number
    body: string
}