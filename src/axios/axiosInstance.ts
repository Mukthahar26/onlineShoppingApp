import axios from 'axios';
import logger from '../utilities/logger';

const axiosInstance = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});

export const setAuthenticationToken = (token: string) =>
  (axiosInstance.defaults.headers.common['Authorization'] = `bearer ${token}`);

export const fetchGetRequest = async (url: string) => {
  const result = await axiosInstance.get(url);
  return result.data;
};

export const fetchPostRequest = async (url: string) => {
  const result = await axiosInstance.post(url);
  return result.data;
};

axiosInstance.interceptors.request.use(request => {
  logger.log('fetch request data :', request);
  return request;
});

axiosInstance.interceptors.response.use(response => {
  logger.log('fetch response data :', response);
  return response;
});
