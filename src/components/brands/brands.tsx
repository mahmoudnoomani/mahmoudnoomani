'use client';

import BrandCard from '@/components/brands/brandsCard';
import { useGetBrandsQuery } from '@/features/brands/brandsApi';

export default function BrandsSection() {
  const { data: brands = [], isLoading, isError } = useGetBrandsQuery();

  if (isLoading) {
    return (
      <section className="bg-[#f3f3f3] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2 md:items-start">
            <h2 className="max-w-[420px] text-4xl font-semibold uppercase leading-[1.05] text-[#111111] md:text-6xl">
              Shop Your Featured Brands
            </h2>

            <p className="max-w-[360px] text-base leading-7 text-[#666666] md:justify-self-end">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6 md:mt-16 md:gap-10">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="h-[180px] w-[180px] rounded-full border border-[#e5e5e5] bg-white shadow-[0_4px_12px_rgba(0,0,0,0.12)]"
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (isError || !brands.length) {
    return null;
  }

  return (
    <section className="bg-[#f3f3f3] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-2 md:items-start">
          <h2 className="max-w-[500px] text-4xl font-semibold uppercase leading-[1.05] text-[#111111] md:text-6xl">
            Shop Your Featured Brands
          </h2>

          <p className="max-w-[360px] text-base leading-7 text-[#666666] md:justify-self-end">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>

        <div className="mt-12 grid place-items-center gap-6 md:mt-16 md:grid-cols-4 md:gap-10">
          {brands.slice(0, 4).map((brand) => (
            <BrandCard key={brand.id} brand={brand} />
          ))}
        </div>
      </div>
    </section>
  );
}