import Api from './../../../services/Api';
import { AddColumnPayload } from './types';

export const getColumns = () => {
    return Api.get('columns');
}

export const addColumn = ({title, description}: AddColumnPayload) => {
    return Api.post('columns', {title, description});
}