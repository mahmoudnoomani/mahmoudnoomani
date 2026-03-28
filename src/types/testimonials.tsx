export type Testimonial = {
  id: string;
  name: string;
  role: string | null;
  imageUrl: string | null;
  quote: string;
  rating: number;
  sortOrder: number;
  isActive: boolean;
  createdAt: string | null;
  updatedAt: string | null;
};

export type TestimonialsPagination = {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
};

export type TestimonialsResponse = {
  data: Testimonial[];
  pagination: TestimonialsPagination;
};