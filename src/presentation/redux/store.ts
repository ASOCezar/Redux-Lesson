import { configureStore } from '@reduxjs/toolkit';

import Cart from '../../@types/Cart';
import Product from '../../@types/Product';
import { productsApi } from '../services/productsApi';
import { cartReducer } from './Cart/Slice';

export type Store = {
  cart: Cart;
  products: Product[];
};

export default configureStore({
  reducer: {
    cart: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});
