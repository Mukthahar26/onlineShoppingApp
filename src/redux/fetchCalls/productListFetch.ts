import {createAsyncThunk} from '@reduxjs/toolkit';
import {fetchGetRequest} from '../../axios/axiosInstance';
import Config from 'react-native-config';
import {ALLPRODUCTSAPI} from '../../axios/endpoints';
import logger from '../../utilities/logger';

export const productListFetch = createAsyncThunk('productsAll', async () => {
  const response = await fetchGetRequest(`${Config.BASE_URL}${ALLPRODUCTSAPI}`);
  return response.data;
});
