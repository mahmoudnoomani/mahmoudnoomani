export type StrengthLevel = {
    id: string;
    name: string;
    slug: string;
    nicotineRange: string | null;
    sortOrder: number;
    createdAt: string | null;
    updatedAt: string | null;
  };
  export type StrengthLevelsPagination = {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
  export type StrengthLevelsResponse = {
    data: StrengthLevel[];
    pagination: StrengthLevelsPagination;
  };