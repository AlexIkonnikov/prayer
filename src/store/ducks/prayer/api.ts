import Api from '../../../services/Api';
import { AddPrayerPayload, UpdatePrayerPayload } from './types';


export const getPrayers = () => {
    return Api.get('prayers');
};

export const updatePrayerById = ({id, title, description, checked}: UpdatePrayerPayload) => {
    return Api.put(`prayers/${id}`, {title, description, checked});
}

export const addPrayer = ({columnId, title, description, checked}: AddPrayerPayload) => {
    return Api.post(`columns/${columnId}/prayers`, {columnId, title, description, checked});
}