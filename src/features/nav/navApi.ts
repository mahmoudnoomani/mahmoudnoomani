import { api } from '@/store/api';
import { navItemsMock } from '@/mock/nav-items';
import type { NavItemsResponse } from '@/types/nav';

export const navApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getNavItems: builder.query<NavItemsResponse, void>({
      async queryFn() {
        try {
          return { data: navItemsMock };
        } catch {
          return {
            error: {
              status: 500,
              data: 'Failed to load nav items',
            },
          };
        }
      },
    }),
  }),
});

export const { useGetNavItemsQuery } = navApi;