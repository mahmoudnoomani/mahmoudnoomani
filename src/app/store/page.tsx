'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Container from '@/components/common/Container';
import ProductCard from '@/components/product/ProductCard';
import { useGetProductsQuery } from '@/features/products/productsApi';

export default function StorePage() {
  const { data, isLoading, isError } = useGetProductsQuery({
    page: 1,
    limit: 12,
    is_active: true,
  });

  const products = data?.data ?? [];

  return (
    <>
      <Header  navItems={[]} />
      <main className="min-h-screen py-10">
        <Container>
          <h1 className="mb-8 text-3xl font-bold">Store</h1>

          {isLoading && <p>Loading products...</p>}
          {isError && <p>Failed to load products.</p>}

          {!isLoading && !isError && products.length === 0 && (
            <p>No products found.</p>
          )}

          {products.length > 0 && (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </Container>
      </main>
      <Footer />
    </>
  );
}