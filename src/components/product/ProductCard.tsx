'use client';

import type { Product } from '@/types/products';
import { useAppDispatch } from '@/store/hook';
import { addToCart } from '@/features/cart/cartSlice';
import { COLORS } from '@/constants/colors';

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const imageUrl = product.media?.[0]?.url ?? '';
  const price = Number(product.price || 0);
  const nicotineMg = Number(product.nicotineMg || 0);
  const nicotineDots = Math.max(1, Math.min(5, Math.round(nicotineMg / 2)));
  const brandName = product.manufacturer?.trim() || 'VOX';
     

  
  return (
    <article className="relative w-full overflow-hidden rounded-[34px]">
      
      {/* BACKGROUND IMAGE */}
      <div className="relative h-[360px] sm:h-[420px] md:h-[460px]">
        {imageUrl ? (
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${imageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        ) : (
          <div className="absolute inset-0 bg-gray-200" />
        )}

        {/* subtle overlay for readability */}
        <div className="absolute inset-0 bg-black/5" />
      </div>

      {/* INFO CARD */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 px-4 pb-10 sm:px-5">
        <div
          className="relative mx-auto max-w-[90%] rounded-[28px] px-5 pb-12 pt-5 sm:px-6 sm:pb-14 sm:pt-6"
          style={{
            backgroundColor: COLORS.white,
            boxShadow: '0 10px 22px rgba(0,0,0,0.18)',
          }}
        >
          {/* TOP */}
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <p className="text-[12px] text-[#a3a3a3] uppercase">
                BRAND:{' '}
                <span className="font-bold text-black">{brandName}</span>
              </p>

              <p className="mt-1 text-[12px] text-[#a3a3a3] uppercase">
                FLAVOUR:{' '}
                <span className="font-semibold text-black line-clamp-1">
                  {product.name}
                </span>
              </p>
            </div>

            <span className="text-[16px] font-bold text-black">
              ${price.toFixed(0)}
            </span>
          </div>

          {/* NICOTINE */}
          <div className="mt-3">
            <p className="text-[12px] text-[#a3a3a3] uppercase">
              NICOTINE STRENGTH:
            </p>

            <div className="mt-2 flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <span
                  key={i}
                  className="h-[10px] w-[10px] rounded-full"
                  style={{
                    backgroundColor:
                      i < nicotineDots ? COLORS.black : '#d3d3d3',
                  }}
                />
              ))}
            </div>
          </div>

          {/* BUTTON HALF OUTSIDE */}
          <div className="pointer-events-none absolute inset-x-0 -bottom-[22px] flex justify-center">
            <button
              onClick={handleAddToCart}
              className="pointer-events-auto rounded-full px-7 py-[10px] text-[13px] font-medium uppercase shadow-lg"
              style={{
                backgroundColor: '#220404',
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