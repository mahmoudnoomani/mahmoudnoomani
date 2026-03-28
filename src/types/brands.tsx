export type Brand = {
    id: string;
    name: string;
    slug: string;
    logoUrl: string | null;
    description: string | null;
    story: string | null;
    createdAt: string | null;
    updatedAt: string | null;
  };

  export type BrandsResponse = {
    data: Brand[];
  };