import Api from './../../../services/Api';
import {AddColumnPayload, IColumn} from './types';

export const getColumns = () => {
  return Api.get('columns');
};

export const addColumn = (data: AddColumnPayload) => {
  return Api.post('columns', {data});
};

export const deleteColumn = (id: number) => {
  return Api.delete(`columns/${id}`);
};

export const updateColumn = ({id, title, description}: IColumn) => {
  return Api.put(`columns/${id}`, {data: {title, description}});
};
