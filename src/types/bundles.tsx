import type { Product } from '@/types/products';

export type BundleProductItem = {
  id: string;
  product: Product;
  quantity: number;
};

export type Bundle = {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  imageUrl: string | null;
  price: string;
  isActive: boolean;
  createdAt: string | null;
  updatedAt: string | null;
  products: BundleProductItem[];
};

export type BundlesPagination = {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
};

export type BundlesResponse = {
  data: Bundle[];
  pagination: BundlesPagination;
};