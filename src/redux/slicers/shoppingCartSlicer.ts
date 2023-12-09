import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {productItemType} from './productSlicer';
import {toastMessage} from '../../utilities/utils';
import logger from '../../utilities/logger';

export type shoppingCartItem = {
  id: number;
  noOfItemsAdded: number;
  totalPrice: number;
  product: productItemType;
};

const shoppingCartSlicer = createSlice({
  name: 'shoppingCartSlicer',
  initialState: [] as shoppingCartItem[],
  reducers: {
    addToCart: (state, action: PayloadAction<productItemType>) => {
      const item: shoppingCartItem = {
        id: action.payload.id,
        totalPrice: action.payload.price,
        noOfItemsAdded: 1,
        product: action.payload,
      };
      state = [...state, item];
      logger.log('statestate :', state);
      toastMessage('Added to the Cart');
      return state;
    },
    increaseQuantity: (state, action: PayloadAction<{id: number}>) => {
      const index = state.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state[index].noOfItemsAdded = state[index].noOfItemsAdded + 1;
        state[index].totalPrice =
          state[index].product.price * state[index].noOfItemsAdded;
      }
      return state;
    },
    decreaseQuantity: (state, action: PayloadAction<{id: number}>) => {
      const index = state.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state[index].noOfItemsAdded = state[index].noOfItemsAdded - 1;
        state[index].totalPrice =
          state[index].product.price * state[index].noOfItemsAdded;
      }
      return state;
    },
    removeItemFromCart: (state, action: PayloadAction<{id: number}>) => {
      state = state.filter(item => item.id !== action.payload.id);
      return state;
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeItemFromCart,
} = shoppingCartSlicer.actions;
export default shoppingCartSlicer.reducer;
