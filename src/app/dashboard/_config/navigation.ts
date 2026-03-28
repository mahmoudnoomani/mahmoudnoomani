import {
  BarChart3,
  ClipboardList,
  FileText,
  LayoutDashboard,
  Package,
  SlidersHorizontal,
  Tag,
  Users,
} from 'lucide-react';

export type DashboardNavKey =
  | 'dashboard'
  | 'orders'
  | 'products'
  | 'customers'
  | 'analytics'
  | 'reports'
  | 'brands'
  | 'flavors'
  | 'strengthLevels';

export const DASHBOARD_NAV_ITEMS: Array<{
  key: DashboardNavKey;
  label: string;
  href: string;
  icon: typeof LayoutDashboard;
}> = [
  { key: 'dashboard', label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { key: 'orders', label: 'Orders', href: '/dashboard/orders', icon: ClipboardList },
  { key: 'products', label: 'Products', href: '/dashboard/products', icon: Package },
  { key: 'customers', label: 'Customers', href: '/dashboard/customers', icon: Users },
  { key: 'analytics', label: 'Analytics', href: '/dashboard/analytics', icon: BarChart3 },
  { key: 'reports', label: 'Reports', href: '/dashboard/reports', icon: FileText },
  { key: 'brands', label: 'Brands', href: '/dashboard/brands', icon: Tag },
  { key: 'flavors', label: 'Flavors', href: '/dashboard/flavors', icon: Tag },
  {
    key: 'strengthLevels',
    label: 'Strength Levels',
    href: '/dashboard/strength-levels',
    icon: SlidersHorizontal,
  },
];

export const DASHBOARD_PAGE_META: Record<
  string,
  { title: string; description: string }
> = {
  '/dashboard': {
    title: 'E-Commerce Dashboard',
    description: 'Performance overview for your storefront',
  },
  '/dashboard/orders': {
    title: 'Orders',
    description: 'Track and manage all incoming orders',
  },
  '/dashboard/products': {
    title: 'Products',
    description: 'Manage catalog items and pricing',
  },
  '/dashboard/customers': {
    title: 'Customers',
    description: 'View customer growth and insights',
  },
  '/dashboard/analytics': {
    title: 'Analytics',
    description: 'Deep dive into business analytics',
  },
  '/dashboard/reports': {
    title: 'Reports',
    description: 'Generate and export business reports',
  },
  '/dashboard/brands': {
    title: 'Brands',
    description: 'View brand performance and revenue',
  },
  '/dashboard/flavors': {
    title: 'Flavors',
    description: 'Create and manage flavor options',
  },
  '/dashboard/strength-levels': {
    title: 'Strength Levels',
    description: 'Define product strength levels',
  },
};
