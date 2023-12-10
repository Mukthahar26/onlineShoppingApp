import {combineReducers, configureStore} from '@reduxjs/toolkit';
import productListSlicer from './slicers/productSlicer';
import shoppingCartSlicer from './slicers/shoppingCartSlicer';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

export const rootReducers = combineReducers({
  productList: productListSlicer,
  shoppingCartList: shoppingCartSlicer,
});

const persistedReducer = persistReducer(persistConfig, rootReducers);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
