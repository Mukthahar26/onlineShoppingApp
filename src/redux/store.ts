import {configureStore} from '@reduxjs/toolkit';
import productListSlicer from './slicers/productSlicer';
import shoppingCartSlicer from './slicers/shoppingCartSlicer';
// ...

export const store = configureStore({
  reducer: {
    productList: productListSlicer,
    shoppingCartList: shoppingCartSlicer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
