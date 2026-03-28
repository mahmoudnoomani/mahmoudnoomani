'use client';

import Link from 'next/link';
import { COLORS } from '@/constants/colors';

const navigationLinks = [
  { label: 'Home', href: '/' },
  { label: 'Our Store', href: '/products' },
  { label: 'Our Brands', href: '/brands' },
  { label: 'Offers', href: '/offers' },
  { label: 'News & Blogs', href: '/blogs' },
  { label: 'About Viking Tin', href: '/about' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'My Account', href: '/account' },
];

const quickLinks = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms' },
  { label: 'Shipping Policy', href: '/shipping' },
  { label: 'Refund Policy', href: '/refund' },
];

export default function Footer() {
  return (
    <footer
       className="mt-16 w-full overflow-hidden rounded-t-[56px]"
      style={{ backgroundColor: COLORS.black }}
    >
      <div className="mx-auto max-w-7xl px-6 py-14 md:px-12 md:py-16 lg:px-16">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div className="max-w-[420px]">
            <h2
              className="text-3xl font-semibold uppercase tracking-wide"
              style={{ color: COLORS.white }}
            >
              Viking Tin
            </h2>

            <p
              className="mt-5 text-sm leading-[2]"
              style={{ color: COLORS.textSecondary }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse libero neque, suscipit a pulvinar eu, auctor sed
              metus. Sed laoreet sem id nibh pulvinar suscipit a pulvinar eu,
              auctor sed metus. Sed laoreet sem
            </p>
          </div>

          <div>
            <h3
              className="mb-4 text-lg font-medium"
              style={{ color: COLORS.white }}
            >
              Navigation
            </h3>

            <ul className="space-y-2.5">
              {navigationLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm transition-opacity hover:opacity-80"
                    style={{ color: COLORS.textSecondary }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3
              className="mb-4 text-lg font-medium"
              style={{ color: COLORS.white }}
            >
              Quick Links
            </h3>

            <ul className="space-y-2.5">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm transition-opacity hover:opacity-80"
                    style={{ color: COLORS.textSecondary }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3
              className="mb-4 text-lg font-medium"
              style={{ color: COLORS.white }}
            >
              Information
            </h3>

            <div
              className="space-y-2 text-sm"
              style={{ color: COLORS.textSecondary }}
            >
              <p>00011112222</p>
              <p>Lorem Upsum Sit Amt</p>
            </div>

            <div className="mt-5">
              <Link
                href="https://instagram.com"
                aria-label="Instagram"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full transition-opacity hover:opacity-80"
                style={{ border: `1px solid ${COLORS.borderLight}` }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={COLORS.white}
                  strokeWidth="1.8"
                  className="h-4 w-4"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill={COLORS.white} />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-center lg:justify-end">
          <form
            className="relative h-[56px] w-full max-w-[520px] rounded-full md:h-[64px]"
            style={{ backgroundColor: COLORS.white }}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="h-full w-full rounded-full bg-transparent pl-6 pr-[150px] text-sm outline-none md:pr-[180px]"
              style={{ color: COLORS.black }}
            />

            <button
              type="submit"
              className="absolute right-[6px] top-1/2 -translate-y-1/2 rounded-full px-6 py-2.5 text-sm font-medium transition-opacity hover:opacity-90 md:px-8 md:py-3"
              style={{
                backgroundColor: COLORS.black,
                color: COLORS.white,
              }}
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}