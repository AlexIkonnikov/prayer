import Api from './../../../services/Api';

export const getColumns = () => {
    return Api.get('columns');
}