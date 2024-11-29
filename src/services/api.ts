import axios, { AxiosRequestConfig } from 'axios';
import { auth } from '@/lib/firebase';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

api.interceptors.request.use(async (config: AxiosRequestConfig) => {
  const token = await auth.currentUser?.getIdToken();
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export { api }; 