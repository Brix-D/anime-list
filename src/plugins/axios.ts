import axios, { type AxiosInstance } from 'axios';
export const instance: AxiosInstance = axios.create({
  baseURL: process.env.API_BASE_URL,
});

export default instance;
