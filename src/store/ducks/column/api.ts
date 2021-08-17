import Api from './../../../services/Api';
import { AddColumnPayload, IColumn } from './types';

export const getColumns = () => {
    return Api.get('columns');
}

export const addColumn = ({title, description}: AddColumnPayload) => {
    return Api.post('columns', {title, description});
}

export const deleteColumn = (id: number) => {
    return Api.delete(`columns/${id}`);
}

export const updateColumn = ({id, title, description}: IColumn) => {
    return Api.put(`columns/${id}`, {title, description});
}