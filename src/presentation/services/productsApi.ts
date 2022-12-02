import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import Product from '../../@types/Product';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3003/',
  }),
  endpoints: (builder) => ({
    products: builder.query<Product[], void>({
      query: () => '/products',
    }),
  }),
});

export const { useProductsQuery } = productsApi;
