import { api } from '@/store/api';
import type { StrengthLevelsResponse } from '@/types/strength-lvl';

type GetStrengthParams = {
  page?: number;
  limit?: number;
};

export const strengthApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getStrengthLevels: builder.query<
      StrengthLevelsResponse,
      GetStrengthParams | void
    >({
      query: (params) => {
        const searchParams = new URLSearchParams();

        if (params?.page) searchParams.set('page', String(params.page));
        if (params?.limit) searchParams.set('limit', String(params.limit));

        const queryString = searchParams.toString();

        return `/strength-levels${queryString ? `?${queryString}` : ''}`;
      },
    }),
  }),
});

export const { useGetStrengthLevelsQuery } = strengthApi;