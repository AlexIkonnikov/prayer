import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';
import {store} from '../store/store';
const baseUrl = 'https://prayer.herokuapp.com/';

class ApiClient {
  private api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: baseUrl,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.api.interceptors.request.use(config => {
      const token = store.getState().user.user.token;
      if (token !== null) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });
  }

  async post(url: string, {data}: AxiosRequestConfig) {
    return this.api.post(url, data);
  }

  async get(url: string) {
    return this.api.get(url);
  }

  async put(url: string, {data}: AxiosRequestConfig) {
    return this.api.put(url, data);
  }

  async delete(url: string) {
    return this.api.delete(url);
  }
}

export default new ApiClient();
