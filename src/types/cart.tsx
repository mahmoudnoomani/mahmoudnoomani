import type { Product } from './products';

export type CartItem = {
  product: Product;
  quantity: number;
};