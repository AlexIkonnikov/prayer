import { StatusType } from "../column/types";

export interface IPrayer {
    id: number
    title: string
    description: string
    checked: boolean
    columnId: number
    commentsIds: Array<number>
}

export interface UpdatePrayerPayload {
    id:number
    title:string
    description: string
    checked: boolean
}

export interface IPrayerSlice {
    prayers: Array<IPrayer>
    dataUpdateStatus: StatusType
}

export interface AddPrayerPayload {
    columnId: number
    title: string,
    description: string,
    checked: boolean
}