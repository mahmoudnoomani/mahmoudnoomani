'use client';

import { useGetBundlesQuery } from '@/features/bundles/bundlesApi';
import SpecialOfferCard from './offerCard';
import { COLORS } from '@/constants/colors';

export default function SpecialOfferSection() {
  const { data, isLoading, error } = useGetBundlesQuery({
    page: 1,
    limit: 3,
    is_active: true,
  });

  const bundles = data?.data ?? [];

  console.log('API:', data);
  console.log('Bundles:', bundles);

  if (isLoading) {
    return <div className="py-20 text-center">Loading bundles...</div>;
  }

  if (error) {
    return <div className="py-20 text-center">Error loading bundles</div>;
  }

  if (!bundles.length) {
    return <div className="py-20 text-center">No offers available</div>;
  }

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        
        <div className="mb-10 grid md:grid-cols-2">
          <h2 className="text-4xl font-semibold">OFFERS SECTION</h2>

          <p className="text-sm text-gray-500 md:text-right">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {bundles.map((bundle) => (
            <SpecialOfferCard key={bundle.id} bundle={bundle} />
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