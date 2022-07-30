import axios, { type AxiosInstance } from 'axios';
export const instance: AxiosInstance = axios.create({
  baseURL: 'https://api.jikan.moe/v4'
});

export default instance;
