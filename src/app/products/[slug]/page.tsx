'use client';

import { useParams } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Container from '@/components/common/Container';
import { useGetProductBySlugQuery } from '@/features/products/productsApi';

export default function ProductPage() {
  const params = useParams();
  const slug = params.slug as string;

  const { data: product, isLoading, isError } = useGetProductBySlugQuery(slug);

  const price = product ? Number(product.price) : 0;
  const comparePrice = product?.comparePrice ? Number(product.comparePrice) : null;
  const nicotineMg = product ? Number(product.nicotineMg) : 0;
  const imageUrl = product?.media?.[0]?.url ?? '';

  return (
    <>
      <Header navItems={[]} />
      <main className="min-h-screen py-10">
        <Container>
          {isLoading && <p>Loading product...</p>}
          {isError && <p>Failed to load product.</p>}

          {product && (
            <div className="grid gap-10 md:grid-cols-2">
              <div className="h-80 overflow-hidden rounded-xl bg-gray-100">
                {imageUrl ? (
                  <img
                    src={imageUrl}
                    alt={product.name}
                    className="h-full w-full object-cover"
                  />
                ) : null}
              </div>

              <div>
                <h1 className="text-3xl font-bold">{product.name}</h1>
                <p className="mt-4 text-gray-600">{product.description}</p>

                <div className="mt-4 flex items-center gap-3">
                  <p className="text-lg font-semibold">${price.toFixed(2)}</p>
                  {comparePrice && (
                    <p className="text-sm text-gray-400 line-through">
                      ${comparePrice.toFixed(2)}
                    </p>
                  )}
                </div>

                <p className="mt-2 text-sm text-gray-500">
                  Nicotine: {nicotineMg} mg
                </p>
                <p className="mt-2 text-sm text-gray-500">
                  Stock: {product.stock}
                </p>
              </div>
            </div>
          )}
        </Container>
      </main>
      <Footer />
    </>
  );
}