'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { useGetFlavorsQuery } from '@/features/flavours/flavoursApi';
import { COLORS } from '@/constants/colors';
import { IMAGES } from '@/constants/images';
import type { Flavor } from '@/types/flavour';

function getFlavorTitle(flavor: Flavor) {
  return `VOX ${flavor.name}`.toUpperCase();
}

function getNicotineDots() {
  return 4;
}

export default function FlavorCategoriesSection() {
  const { data, isLoading, error } = useGetFlavorsQuery({
    page: 1,
    limit: 20,
    is_active: true,
  });

  const flavors = data?.data ?? [];

  const categories = useMemo(() => {
    return Array.from(
      new Set(
        flavors
          .map((item) => item.name?.trim())
          .filter((value): value is string => Boolean(value))
      )
    );
  }, [flavors]);

  const [activeCategory, setActiveCategory] = useState<string>('');

  const selectedCategory = activeCategory || categories[0] || '';

  const filteredFlavors = useMemo(() => {
    if (!selectedCategory) return flavors;
    return flavors.filter((item) => item.name === selectedCategory);
  }, [flavors, selectedCategory]);

  const activeFlavor = filteredFlavors[0];

  if (isLoading) {
    return (
      <section className="py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
          <div className="text-center">Loading flavors...</div>
        </div>
      </section>
    );
  }

  if (error || !flavors.length || !activeFlavor) {
    return null;
  }

  return (
    <section className="py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        <div className="grid gap-6 md:grid-cols-2 md:items-start">
          <h2
            className="text-[42px] font-semibold uppercase leading-[0.95] sm:text-[52px] md:text-[60px] lg:text-[72px]"
            style={{ color: COLORS.textPrimary }}
          >
            Flavor
            <br />
            Categories
          </h2>

          <p
            className="max-w-[360px] text-[15px] leading-[1.55] md:justify-self-end md:text-[16px]"
            style={{ color: '#8d8d8d' }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3 md:mt-10 md:gap-4">
          {categories.map((category) => {
            const isActive = category === selectedCategory;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className="rounded-full px-5 py-3 text-[14px] font-semibold uppercase transition-opacity hover:opacity-90 sm:px-7 sm:text-[16px] lg:px-8 lg:py-4 lg:text-[18px]"
                style={{
                  backgroundColor: isActive ? COLORS.black : '#dfdfdf',
                  color: isActive ? COLORS.white : COLORS.textPrimary,
                }}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      <div
        className="relative mt-8 min-h-[420px] w-full overflow-hidden md:mt-10 md:min-h-[500px] lg:min-h-[560px]"
        style={{
          backgroundImage: `url(${IMAGES.flavour.bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="relative z-10 mx-auto flex min-h-[420px] max-w-7xl items-center justify-end px-6 py-8 md:min-h-[500px] md:px-8 lg:min-h-[560px] lg:px-12">
          <div
            className="w-full max-w-[310px] rounded-[28px] px-6 py-7 shadow-[0_10px_24px_rgba(0,0,0,0.12)] sm:max-w-[340px] sm:px-7 sm:py-8 md:max-w-[360px]"
            style={{ backgroundColor: COLORS.white }}
          >
            <h3
              className="line-clamp-2 text-[30px] font-semibold uppercase leading-[1.02] sm:text-[34px] lg:text-[38px]"
              style={{ color: COLORS.textPrimary }}
            >
              {getFlavorTitle(activeFlavor)}
            </h3>

            <div className="mt-5">
              <p
                className="text-[13px] uppercase sm:text-[14px]"
                style={{ color: '#a0a0a0' }}
              >
                Nicotine Strength:
              </p>

              <div className="mt-2 flex items-center gap-[6px]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <span
                    key={index}
                    className="h-[11px] w-[11px] rounded-full"
                    style={{
                      backgroundColor:
                        index < getNicotineDots() ? COLORS.black : '#d3d3d3',
                    }}
                  />
                ))}
              </div>
            </div>

            <div className="mt-7">
              <Link
                href={`/flavors/${activeFlavor.slug}`}
                className="inline-flex h-[52px] items-center rounded-full pl-6 pr-[7px] text-[15px] font-medium transition hover:opacity-90 sm:h-[56px] sm:pl-7 sm:pr-[8px] sm:text-[16px]"
                style={{
                  backgroundColor: COLORS.black,
                  color: COLORS.white,
                }}
              >
                <span className="mr-4 sm:mr-5">View More</span>

                <span
                  className="flex h-[38px] w-[38px] items-center justify-center rounded-full sm:h-[42px] sm:w-[42px]"
                  style={{
                    backgroundColor: COLORS.white,
                    color: COLORS.black,
                  }}
                >
                  <ArrowUpRight size={20} strokeWidth={2.4} />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}