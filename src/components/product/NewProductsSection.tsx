'use client';

import { useGetProductsQuery } from '@/features/products/productsApi';
import SpecialOfferCard from './ProductCard';
import { COLORS } from '@/constants/colors';
import ProductCard from './ProductCard';

export default function NewProductsSection() {
   const { data, isLoading, isError } = useGetProductsQuery({
     page: 1,
     limit: 8,
     is_active: true,
   });
 
   const products = data?.data ?? [];

  console.log('API:', data);
  console.log('products:', products);

  if (isLoading) {
    return <div className="py-20 text-center">Loading products...</div>;
  }

  if (isError) {
    return <div className="py-20 text-center">Error loading products</div>;
  }

  if (!products.length) {
    return <div className="py-20 text-center">No offers available</div>;
  }

  return (
    <section className="py-20"style={{ backgroundColor: COLORS.pageBg }}>
      <div className="mx-auto max-w-7xl px-6">
        
        <div className="mb-10 grid md:grid-cols-2">
          <h2 className="text-4xl font-semibold">NEW PRODUCTS</h2>

          <p className="text-sm text-gray-500 md:text-right">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <button
            className="flex items-center gap-2 rounded-full px-6 py-3 text-sm"
            style={{
              backgroundColor: COLORS.black,
              color: COLORS.white,
            }}
          >
            View Offers →
          </button>
        </div>
      </div>
    </section>
  );
}