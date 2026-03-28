export type SitePage = {
  id: string;
  slug: string;
  title: string;
  imageUrl: string | null;
  content: string | null;
  isActive: boolean;
  createdAt: string | null;
  updatedAt: string | null;
};

export type SitePagesResponse = SitePage[];

export type SitePageSlugs =
  | 'privacy-policy'
  | 'terms-and-conditions'
  | 'shipping-policy'
  | 'refund-policy'
  | 'age-policy'
  | 'faq'
  | 'our-story';