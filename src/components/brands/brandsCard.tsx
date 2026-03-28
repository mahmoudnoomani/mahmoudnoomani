'use client';

import Link from 'next/link';
import type { Brand } from '@/types/brands';
import { COLORS } from '@/constants/colors';

type BrandCardProps = {
  brand: Brand;
};

export default function BrandCard({ brand }: BrandCardProps) {
  return (
    <Link
      href={`/brands/${brand.slug}`}
      className="group flex h-[180px] w-[180px] items-center justify-center rounded-full transition-transform duration-300 hover:-translate-y-1"
      style={{
        backgroundColor: COLORS.white,
        border: `1px solid ${COLORS.brandCardBorder}`,
        boxShadow: `0 4px 12px ${COLORS.brandCardShadow}`,
      }}
      aria-label={brand.name}
    >
      <div className="flex h-[90px] w-[110px] items-center justify-center">
        {brand.logoUrl ? (
          <img
            src={brand.logoUrl}
            alt={brand.name}
            className="max-h-full max-w-full object-contain"
          />
        ) : (
          <span
            className="text-base font-semibold"
            style={{ color: COLORS.textPrimary }}
          >
            {brand.name}
          </span>
        )}
      </div>
    </Link>
  );
}