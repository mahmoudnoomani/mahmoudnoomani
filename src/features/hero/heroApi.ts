import { api } from '@/store/api';
import { heroBannersMock } from '@/mock/hero-banners';
import type { HeroBannersResponse } from '@/types/hero';

export const heroApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getHeroBanners: builder.query<HeroBannersResponse, void>({
      async queryFn() {
        try {
          return { data: heroBannersMock };
        } catch {
          return {
            error: {
              status: 500,
              data: 'Failed to load hero banners',
            },
          };
        }
      },
    }),
  }),
});

export const { useGetHeroBannersQuery } = heroApi;