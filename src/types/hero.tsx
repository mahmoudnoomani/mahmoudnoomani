export type HeroBanner = {
    id: number;
    headline: string;
    subheadline: string;
    image_url: string;
    position: number;
    start_date: string | null;
    end_date: string | null;
    is_active: boolean;
    created_at: string;
    updated_at: string;
  };
  
  export type HeroBannersResponse = HeroBanner[];