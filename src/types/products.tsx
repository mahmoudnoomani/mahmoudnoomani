export type ProductMedia = {
  id: string;
  mediaType: 'image' | 'video';
  url: string;
  sortOrder: number;
  createdAt: string | null;
};

export type Product = {
  id: string;
  brandId: string;
  flavorId: string;
  strengthId: string;
  name: string;
  slug: string;
  nicotineMg: string;
  price: string;
  comparePrice: string | null;
  stock: number;
  description: string;
  pouchCount: number;
  weightGrams: number;
  manufacturer: string;
  isActive: boolean;
  createdAt: string | null;
  updatedAt: string | null;
  media: ProductMedia[];
};

export type ProductsPagination = {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
};

export type ProductsResponse = {
  data: Product[];
  pagination: ProductsPagination;
};