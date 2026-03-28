export type NavItem = {
    id: number;
    label: string;
    href: string;
    position: number;
    is_active: boolean;
    created_at?: string;
    updated_at?: string;
  };
  
  export type NavItemsResponse = NavItem[];