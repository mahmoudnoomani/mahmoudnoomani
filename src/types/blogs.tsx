export type BlogPost = {
  id: string;
  categoryId: string | null;
  title: string;
  slug: string;
  featuredImage: string | null;
  content: string | null;
  author: string | null;
  publishedAt: string | null;
  isPublished: boolean;
  metaTitle: string | null;
  metaDescription: string | null;
  createdAt: string | null;
  updatedAt: string | null;
};

export type BlogPostsPagination = {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
};

export type BlogPostsResponse = {
  data: BlogPost[];
  pagination: BlogPostsPagination;
};