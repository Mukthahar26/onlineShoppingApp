import {createSlice} from '@reduxjs/toolkit';
import {productListFetch} from '../fetchCalls/productListFetch';
import logger from '../../utilities/logger';

export type productItemType = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

type productListWithLimit = {
  limit: number;
  products: productItemType[];
};

export type productListStateType = {
  productLoading: boolean;
  productList: productListWithLimit;
  productError: string | null;
};

const productState: productListStateType = {
  productLoading: false,
  productList: {limit: 0, products: []},
  productError: null,
};

const productListSlicer = createSlice({
  name: 'productListSlicer',
  initialState: productState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(productListFetch.pending, state => {
        state.productLoading = true;
        state.productList = {} as productListWithLimit;
        state.productError = null;
      })
      .addCase(productListFetch.fulfilled, (state, action) => {
        logger.log('Stateeeeee :', action.payload);
        state.productLoading = false;
        state.productList = action.payload;
        state.productError = null;
      })
      .addCase(productListFetch.rejected, (state, action) => {
        state.productLoading = false;
        state.productList = {} as productListWithLimit;
        state.productError = action.error.message as string;
      });
  },
});

export default productListSlicer.reducer;
