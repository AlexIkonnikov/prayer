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

export interface IColumnSlice {
    columns: Array<IColumn>
    dataUpdateStatus: 'inProcess' | 'done'
}