'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { COLORS } from '@/constants/colors';
import { IMAGES } from '@/constants/images';
import type { HeroBanner as HeroBannerType } from '@/types/hero';

type Props = {
  banners?: HeroBannerType[] | null;
  autoPlayMs?: number;
};

function CTAButton({
  href,
  label,
  secondary = false,
}: {
  href: string;
  label: string;
  secondary?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex h-[52px] items-center rounded-full pl-5 pr-[7px] text-[13px] font-semibold tracking-[0.02em] transition-transform duration-300 hover:scale-[1.02] sm:h-[58px] sm:pl-6 sm:pr-[8px] sm:text-[14px] lg:h-[70px] lg:pl-8 lg:pr-[10px] lg:text-[16px] ${
        secondary
          ? 'border bg-transparent text-white'
          : 'border bg-white text-black'
      }`}
      style={{
        borderColor: secondary ? COLORS.borderLight : COLORS.white,
      }}
    >
      <span className="mr-3 whitespace-nowrap sm:mr-4 lg:mr-6">{label}</span>

      <span
        className={`flex h-[38px] w-[38px] items-center justify-center rounded-full sm:h-[42px] sm:w-[42px] lg:h-[48px] lg:w-[48px] ${
          secondary ? 'bg-white text-black' : 'bg-black text-white'
        }`}
      >
        <ArrowUpRight size={18} strokeWidth={2.4} className="lg:h-[22px] lg:w-[22px]" />
      </span>
    </Link>
  );
}

export default function HeroBanner({
  banners,
  autoPlayMs = 5000,
}: Props) {
  const slides = useMemo(() => banners ?? [], [banners]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;

    const interval = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, autoPlayMs);

    return () => window.clearInterval(interval);
  }, [slides.length, autoPlayMs]);

  if (!slides.length) return null;

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section style={{ backgroundColor: COLORS.pageBg }}>
      <div className="relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {slides.map((banner, index) => {
            const lines = (banner.headline ?? '').split('\n');
            const heroSrc = banner.image_url || IMAGES.hero.main;

            return (
              <div
                key={banner.id ?? index}
                className="relative h-[520px] min-w-full overflow-hidden sm:h-[620px] lg:h-[720px] xl:h-[780px]"
                style={{ backgroundColor: COLORS.bannerBg }}
              >
                <img
                  src={heroSrc}
                  alt={(banner.headline ?? 'Hero banner').replace(/\n/g, ' ')}
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />

                <div className="absolute inset-0" />

                <div className="relative z-10 flex h-full items-center">
                  <div className="w-full px-5 sm:px-8 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
                    <div className="max-w-[320px] sm:max-w-[460px] lg:max-w-[560px]">
                      <h1 className="text-white">
                        {lines.map((line, lineIndex) => (
                          <span
                            key={lineIndex}
                            className="block text-[38px] font-semibold leading-[0.96] tracking-[-0.03em] sm:text-[52px] md:text-[60px] lg:text-[72px] xl:text-[82px]"
                          >
                            {line}
                          </span>
                        ))}
                      </h1>

                      {banner.subheadline ? (
                        <p className="mt-5 max-w-[620px] text-[14px] leading-[1.6] text-white/90 sm:mt-6 sm:text-[16px] lg:mt-8 lg:text-[20px] lg:leading-[1.45]">
                          {banner.subheadline}
                        </p>
                      ) : null}

                      <div className="mt-6 flex flex-wrap items-center gap-3 sm:mt-8 sm:gap-4 lg:mt-10">
                        <CTAButton href="/products" label="SHOP NOW" />
                        <CTAButton
                          href="/brands"
                          label="EXPLORE BRANDS"
                          secondary
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {slides.length > 1 ? (
          <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 sm:bottom-7 lg:bottom-8">
            {slides.map((_, index) => {
              const active = index === currentIndex;

              return (
                <button
                  key={index}
                  type="button"
                  aria-label={`Go to slide ${index + 1}`}
                  onClick={() => goToSlide(index)}
                  className={`rounded-full transition-all duration-300 ${
                    active ? 'w-8 sm:w-10' : 'w-2.5 sm:w-3'
                  } h-2.5 sm:h-3`}
                  style={{
                    backgroundColor: active
                      ? COLORS.black
                      : 'rgba(0,0,0,0.25)',
                  }}
                />
              );
            })}
          </div>
        ) : null}
      </div>
    </section>
  );
}