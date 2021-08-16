import Api from '../../../services/Api';
import { UpdatePrayerPayload } from './types';


export const getPrayers = () => {
    return Api.get('prayers');
};

export const updatePrayerById = ({id, title, description, checked}: UpdatePrayerPayload) => {
    return Api.put(`prayers/${id}`, {title, description, checked});
}