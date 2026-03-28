'use client';

import { IMAGES } from '@/constants/images';
import { COLORS } from '@/constants/colors';
import { whyChooseUsData } from '@/mock/whyChooseUs';
import WhyChooseUsItem from './whyChooseUsItem';

export default function WhyChooseUsBanner() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        backgroundImage: `url(${IMAGES.whyChooseUs.bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div
        className="absolute inset-0"
        style={{ backgroundColor: 'rgba(0,0,0,0.55)' }}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-12 md:px-8 md:py-16 lg:px-12 lg:py-20">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-[320px]">
            <h2
              className="text-4xl font-semibold uppercase leading-[0.95] md:text-5xl lg:text-6xl"
              style={{ color: COLORS.white }}
            >
              Why
              <br />
              Viking Tin
            </h2>
          </div>

          <div className="flex flex-col items-center gap-8 sm:grid sm:grid-cols-2 lg:flex lg:flex-row lg:items-start lg:gap-10">
            {whyChooseUsData.map((item) => (
              <WhyChooseUsItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}