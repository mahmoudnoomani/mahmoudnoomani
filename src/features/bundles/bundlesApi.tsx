import { api } from '@/store/api';
import type { Bundle, BundlesResponse } from '@/types/bundles';

type GetBundlesParams = {
  page?: number;
  limit?: number;
  is_active?: boolean;
};

export const bundlesApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBundles: builder.query<BundlesResponse, GetBundlesParams | void>({
      query: (params) => {
        const searchParams = new URLSearchParams();

        if (params?.page) searchParams.set('page', String(params.page));
        if (params?.limit) searchParams.set('limit', String(params.limit));
        if (params?.is_active !== undefined) {
          searchParams.set('is_active', String(params.is_active));
        }

        const queryString = searchParams.toString();
        return `/bundles${queryString ? `?${queryString}` : ''}`;
      },
    }),

    getBundleBySlug: builder.query<Bundle, string>({
      query: (slug) => `/bundles/slug/${slug}`,
    }),
  }),
});

export const { useGetBundlesQuery, useGetBundleBySlugQuery } = bundlesApi;