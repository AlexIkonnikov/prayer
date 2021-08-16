export interface IPrayer {
    id: number
    title: string
    description: string
    checked: boolean
    columnId: number
    commentsIds: Array<number>
}