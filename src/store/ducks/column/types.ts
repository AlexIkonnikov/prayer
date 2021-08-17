export interface IColumn {
    id: number
    title: string
    description: null
    userId: number
};

export interface AddColumnPayload{
    title: string
    description: null
};

export type StatusType = 'inProcess' | 'done';


export interface IColumnSlice {
    columns: Array<IColumn>
    dataUpdateStatus: StatusType
}