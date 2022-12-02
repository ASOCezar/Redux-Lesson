import { createSlice, SliceCaseReducers } from '@reduxjs/toolkit';

import Cart from '../../../@types/Cart';
import { Store } from '../store';

const slice = createSlice<Cart, SliceCaseReducers<Cart>>({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.items.find((item) => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.quantity++;
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (!item) {
        return;
      }
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.items.filter((item) => item.id !== action.payload);
      state.items = removeItem;
    },
    clear: (state) => {
      state.items = [];
    },
  },
});
export const cartReducer = slice.reducer;

export const selectCart = (state: Store) => state.cart;

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
  addItem,
  clear,
} = slice.actions;

export default slice.reducer;
