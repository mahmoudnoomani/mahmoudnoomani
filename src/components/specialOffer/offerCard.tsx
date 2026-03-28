'use client';

import { COLORS } from '@/constants/colors';
import type { Bundle } from '@/types/bundles';

type Props = {
  bundle: Bundle;
};

export default function SpecialOfferCard({ bundle }: Props) {
  const oldPrice =
    bundle.products?.reduce((acc, item) => {
      return acc + Number(item.product.price || 0) * item.quantity;
    }, 0) ?? 0;

  const newPrice = Number(bundle.price || 0);

  return (
    <article className="relative w-full overflow-hidden rounded-[34px]">
      <div className="relative h-[380px] sm:h-[460px] md:h-[500px]">
        {bundle.imageUrl ? (
          <img
            src={bundle.imageUrl}
            alt={bundle.name}
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-gray-200" />
        )}

        <div className="absolute inset-0 bg-black/10" />
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 px-4 pb-10 sm:px-5">
        <div
          className="relative mx-auto flex min-h-[150px] max-w-[90%] flex-col rounded-[28px] px-5 pb-11 pt-5 sm:px-6 sm:pb-12 sm:pt-6"
          style={{
            backgroundColor: COLORS.white,
            boxShadow: '0 10px 22px rgba(0,0,0,0.18)',
          }}
        >
          <h3
            className="line-clamp-2 max-w-[260px] text-[16px] font-semibold uppercase leading-[1.15]"
            style={{ color: COLORS.textPrimary }}
            title={bundle.name}
          >
            {bundle.name}
          </h3>

          {bundle.description ? (
            <p
              className="mt-1 line-clamp-2 text-[12px] leading-[1.35]"
              style={{ color: '#8c8c8c' }}
              title={bundle.description}
            >
              {bundle.description}
            </p>
          ) : (
            <div className="mt-1 h-[32px]" />
          )}

          <div className="mt-2 flex items-end gap-2">
            <span
              className="text-[14px] font-semibold leading-none line-through"
              style={{ color: COLORS.black }}
            >
              ${oldPrice.toFixed(0)}
            </span>

            <span
              className="text-[14px] font-semibold leading-none"
              style={{ color: '#ff1e1e' }}
            >
              ${newPrice.toFixed(0)}
            </span>
          </div>

          <div className="pointer-events-none absolute inset-x-0 -bottom-[22px] flex justify-center">
            <button
              type="button"
              className="pointer-events-auto min-w-[150px] rounded-full px-8 py-[10px] text-[13px] font-medium uppercase shadow-[0_10px_16px_rgba(0,0,0,0.25)] transition hover:opacity-90 sm:min-w-[160px]"
              style={{
                backgroundColor: '#000000',
                color: COLORS.white,
              }}
            >
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}