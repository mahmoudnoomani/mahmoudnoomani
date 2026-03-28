'use client';

import { COLORS } from '@/constants/colors';
import type { Testimonial } from '@/types/testimonials';

type Props = {
  testimonial: Testimonial;
};

export default function TestimonialCard({ testimonial }: Props) {
  return (
    <div className="relative mx-auto w-full max-w-[760px]">
      <div
        className="absolute left-[-24px] top-[20px] hidden h-[calc(100%-40px)] w-full rounded-[10px] lg:block"
        style={{ backgroundColor: 'rgba(255,255,255,0.72)' }}
      />

      <div
        className="relative rounded-[10px] px-6 pb-8 pt-6 text-center shadow-[0_8px_24px_rgba(0,0,0,0.16)] sm:px-10 sm:pb-10 sm:pt-7 md:px-14"
        style={{ backgroundColor: COLORS.white }}
      >
        <div className="flex justify-center">
          <div className="h-[64px] w-[64px] overflow-hidden rounded-full border border-black/10">
            {testimonial.imageUrl ? (
              <img
                src={testimonial.imageUrl}
                alt={testimonial.name}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="h-full w-full bg-gray-200" />
            )}
          </div>
        </div>

        <h3
          className="mt-4 text-[18px] font-semibold leading-[1.1] sm:text-[20px]"
          style={{ color: COLORS.textPrimary }}
        >
          {testimonial.name}
        </h3>

        {testimonial.role ? (
          <p
            className="mt-1 text-[14px] leading-[1.2]"
            style={{ color: '#a0a8bc' }}
          >
            {testimonial.role}
          </p>
        ) : null}

        <p
          className="mx-auto mt-6 max-w-[540px] text-[15px] leading-[1.7] sm:text-[16px]"
          style={{ color: '#7f7f7f' }}
        >
          {testimonial.quote}
        </p>
      </div>
    </div>
  );
}