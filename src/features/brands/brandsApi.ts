import { api } from '@/store/api';
import type { Brand } from '@/types/brands';

export const brandsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBrands: builder.query<Brand[], void>({
      query: () => '/brands',
    }),

    getBrandBySlug: builder.query<Brand, string>({
      query: (slug) => `/brands/slug/${slug}`,
    }),
  }),
});

export const { useGetBrandsQuery, useGetBrandBySlugQuery } = brandsApi;