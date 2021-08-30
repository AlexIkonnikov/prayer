import Api from '../../../services/Api';
import {AddPrayerPayload, UpdatePrayerPayload} from './types';

export const getPrayers = () => {
  return Api.get('prayers');
};

export const updatePrayerById = (data: UpdatePrayerPayload) => {
  return Api.put(`prayers/${data.id}`, {data});
};

export const addPrayer = (data: AddPrayerPayload) => {
  return Api.post(`columns/${data.columnId}/prayers`, {data});
};

export const deletePrayer = (prayerId: number) => {
  return Api.delete(`prayers/${prayerId}`);
};
