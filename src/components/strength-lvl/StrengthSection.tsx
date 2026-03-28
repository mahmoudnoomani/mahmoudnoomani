'use client';

import StrengthCard from '@/components/strength-lvl/strength-lvlCard';
import { IMAGES } from '@/constants/images';
import { COLORS } from '@/constants/colors';
import { useGetStrengthLevelsQuery } from '@/features/strength-lvls/strength-levels';



export default function StrengthSection() {
   const { data, isLoading, isError } = useGetStrengthLevelsQuery({
       page: 1,
       limit: 8,
     });
   
     const str = data?.data ?? [];
  
    console.log('API:', data);
    console.log('products:', str);
      if (isLoading) {
    return <div className="py-20 text-center">Loading products...</div>;
  }

  if (isError) {
    return <div className="py-20 text-center">Error loading products</div>;
  }

  if (!str.length) {
    return <div className="py-20 text-center">No offers available</div>;
  }
  
  return (
    <section className="relative w-full overflow-hidden py-20">
      
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 object-contain  bg-center"
        style={{
          backgroundImage: `url(${IMAGES.strlvl.bgimg})`,
        }}
      />

      {/* OVERLAY */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: COLORS.strengthOverlay }}
      />

      {/* CONTENT */}
      <div className="relative mx-auto max-w-7xl px-6">
        
        {/* HEADER */}
        <div className="grid gap-6 md:grid-cols-2 md:items-start">
          
          <h2
            className="text-4xl font-semibold uppercase md:text-5xl"
            style={{ color: COLORS.white }}
          >
            Strength Guide
          </h2>

          <p
            className="max-w-[360px] text-sm leading-6 md:justify-self-end"
            style={{ color: COLORS.textSecondary }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>

        {/* CARDS */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-6 md:mt-16">
          {str.map((item) => (
            <StrengthCard key={item.id} label={item.name}  />
          ))}
        </div>
      </div>
    </section>
  );
}