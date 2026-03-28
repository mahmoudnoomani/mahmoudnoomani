import { api } from '@/store/api';
import type { Flavor, FlavorsResponse } from '@/types/flavour';

type GetFlavorsParams = {
  page?: number;
  limit?: number;
  is_active?: boolean;
};

export const flavorsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getFlavors: builder.query<FlavorsResponse, GetFlavorsParams | void>({
      query: (params) => {
        const searchParams = new URLSearchParams();

        if (params?.page) searchParams.set('page', String(params.page));
        if (params?.limit) searchParams.set('limit', String(params.limit));
        if (params?.is_active !== undefined) {
          searchParams.set('is_active', String(params.is_active));
        }

        const queryString = searchParams.toString();
        return `/flavors${queryString ? `?${queryString}` : ''}`;
      },
    }),

    getFlavorBySlug: builder.query<Flavor, string>({
      query: (slug) => `/flavors/slug/${slug}`,
    }),
  }),
});

export const { useGetFlavorsQuery, useGetFlavorBySlugQuery } = flavorsApi;