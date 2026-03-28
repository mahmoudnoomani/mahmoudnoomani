'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { COLORS } from '@/constants/colors';
import { sitePagesMock } from '@/mock/sitePages';

export default function HomePageStory() {
  const storyPage = sitePagesMock.find(
    (page) => page.slug === 'our-story' && page.isActive
  );

  if (!storyPage) return null;

  return (
    <section className="relative overflow-hidden py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* LEFT IMAGE */}
          <div className="relative">
            <div className="overflow-hidden rounded-[12px]">
              {storyPage.imageUrl ? (
                <img
                  src={storyPage.imageUrl}
                  alt={storyPage.title}
                  className="h-auto w-full object-cover"
                />
              ) : (
                <div className="aspect-[4/3] w-full bg-gray-200" />
              )}
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="relative">
            <h2
              className="text-4xl font-semibold uppercase leading-[1] md:text-5xl lg:text-6xl"
              style={{ color: COLORS.textPrimary }}
            >
              {storyPage.title}
            </h2>

            <p
              className="mt-6 text-sm leading-[1.9] md:text-base"
              style={{ color: COLORS.textPrimary }}
            >
              {storyPage.content}
            </p>

            <div className="mt-8 md:mt-10">
              <Link
                href="/about"
                className="inline-flex h-[56px] items-center rounded-full pl-7 pr-[8px] text-[16px] font-medium transition hover:opacity-90"
                style={{
                  backgroundColor: COLORS.black,
                  color: COLORS.white,
                }}
              >
                <span className="mr-5">Read Our Story</span>

                <span
                  className="flex h-[42px] w-[42px] items-center justify-center rounded-full"
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

      {/* DECORATIVE CORNER CAN */}
      <div className="pointer-events-none absolute bottom-0 right-0 hidden translate-x-[25%] translate-y-[20%] md:block">
        <div className="h-[220px] w-[220px] overflow-hidden rounded-full border border-black/10 bg-white">
          <img
            src="/images/site-pages/decor-can.png"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}