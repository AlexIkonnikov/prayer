import Api from '../../../services/Api';

export const getPrayers = () => {
    return Api.get('prayers');
}
