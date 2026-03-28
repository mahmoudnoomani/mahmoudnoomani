export type Flavor = {
  id: string;
  name: string;
  slug: string;
  category: string | null;
  imageUrl: string | null;
  isActive: boolean;
  createdAt: string | null;
  updatedAt: string | null;
};

export type FlavorsPagination = {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
};

export type FlavorsResponse = {
  data: Flavor[];
  pagination: FlavorsPagination;
};