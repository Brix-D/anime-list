import axios, { type AxiosInstance } from 'axios';
export const instance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export default instance;
