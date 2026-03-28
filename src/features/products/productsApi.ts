import { api } from '@/store/api';
import type { Product, ProductsResponse } from '@/types/products';

type GetProductsParams = {
  page?: number;
  limit?: number;
  is_active?: boolean;
};

export const productsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<ProductsResponse, GetProductsParams | void>({
      query: (params) => {
        const searchParams = new URLSearchParams();

        if (params?.page) searchParams.set('page', String(params.page));
        if (params?.limit) searchParams.set('limit', String(params.limit));
        if (params?.is_active !== undefined) {
          searchParams.set('is_active', String(params.is_active));
        }

        const queryString = searchParams.toString();
        return `/products${queryString ? `?${queryString}` : ''}`;
      },
    }),

    getProductBySlug: builder.query<Product, string>({
      query: (slug) => `/products/slug/${slug}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductBySlugQuery } = productsApi;