import axios, { AxiosInstance } from 'axios';
import { getToken } from './token';

const BASE_URL = 'https://grading.design.htmlacademy.pro/v1/escape-room';
const TIMEOUT = 5000;

const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT,
  });

  api.interceptors.request.use((config) => {
    const token = getToken();

    if (token && config.headers) {
      config.headers['x-token'] = token;
    }

    return config;
  });
  return api;
};

export { createAPI };
