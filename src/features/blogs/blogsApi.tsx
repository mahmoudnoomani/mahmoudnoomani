import { api } from '@/store/api';
import type { BlogPost, BlogPostsResponse } from '@/types/blogs';

type GetBlogPostsParams = {
  page?: number;
  limit?: number;
  is_published?: boolean;
};

export const blogsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBlogPosts: builder.query<BlogPostsResponse, GetBlogPostsParams | void>({
      query: (params) => {
        const searchParams = new URLSearchParams();

        if (params?.page) searchParams.set('page', String(params.page));
        if (params?.limit) searchParams.set('limit', String(params.limit));
        if (params?.is_published !== undefined) {
          searchParams.set('is_published', String(params.is_published));
        }

        const queryString = searchParams.toString();
        return `/blog-posts${queryString ? `?${queryString}` : ''}`;
      },
    }),

    getBlogPostBySlug: builder.query<BlogPost, string>({
      query: (slug) => `/blog-posts/slug/${slug}`,
    }),
  }),
});

export const { useGetBlogPostsQuery, useGetBlogPostBySlugQuery } = blogsApi;