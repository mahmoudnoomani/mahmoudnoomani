'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { ChevronDown, X } from 'lucide-react';
import { COLORS } from '@/constants/colors';
import { IMAGES } from '@/constants/images';
import type { NavItem } from '@/types/nav';
import { useGetBrandsQuery } from '@/features/brands/brandsApi';
import NavDropdown, { type DropdownItem } from './NavDropdown';

type HeaderProps = {
  navItems: NavItem[];
};

export default function Header({ navItems }: HeaderProps) {
  const { data: brands = [] } = useGetBrandsQuery();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileBrandsOpen, setMobileBrandsOpen] = useState(false);

  const activeNavItems = useMemo(() => {
    return [...navItems]
      .filter((item) => item.is_active)
      .sort((a, b) => a.position - b.position);
  }, [navItems]);

  const brandItems: DropdownItem[] = brands.map((brand) => ({
    id: brand.id,
    label: brand.name,
    href: `/brands/${brand.slug}`,
  }));

  const isBrandsItem = (label: string) => {
    const normalized = label.trim().toLowerCase();
    return normalized === 'our brand' || normalized === 'our brands';
  };

  const handleCloseMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileBrandsOpen(false);
  };

  return (
    <>
      <header
        className="sticky top-0 z-50 w-full"
        style={{ backgroundColor: COLORS.pageBg }}
      >
        <div className="w-full px-4 py-4 md:px-6 lg:px-10">
          <div
            className="flex items-center justify-between rounded-full px-5 py-4 md:px-7 lg:px-10"
            style={{ backgroundColor: COLORS.white }}
          >
            <Link href="/" className="shrink-0">
              <img
                src={IMAGES.logo.main}
                alt="Viking Tin"
                className="h-10 w-auto object-contain md:h-12"
              />
            </Link>

            <nav className="hidden items-center gap-7 lg:flex">
              {activeNavItems.map((item) => {
                if (isBrandsItem(item.label)) {
                  return (
                    <NavDropdown
                      key={item.id}
                      label={item.label}
                      items={brandItems}
                      viewAllHref="/brands"
                      viewAllLabel="View All Brands"
                    />
                  );
                }

                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    className="text-sm font-medium uppercase tracking-[0.02em] transition-opacity hover:opacity-75"
                    style={{ color: COLORS.textPrimary }}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-3">
              <Link
                href="/account"
                className="hidden rounded-full px-5 py-2 text-sm font-medium md:inline-flex"
                style={{
                  backgroundColor: COLORS.black,
                  color: COLORS.white,
                }}
              >
                Account
              </Link>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full lg:hidden"
                style={{
                  backgroundColor: COLORS.black,
                  color: COLORS.white,
                }}
                aria-label="Open menu"
              >
                ☰
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE SIDE MENU */}
      <div
        className={`fixed inset-0 z-[70] lg:hidden transition-all duration-300 ${
          mobileMenuOpen
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/45"
          onClick={handleCloseMobileMenu}
        />

        <aside
          className={`absolute right-0 top-0 h-full w-[88%] max-w-[360px] transform overflow-y-auto transition-transform duration-300 ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{ backgroundColor: COLORS.white }}
        >
          <div
            className="flex items-center justify-between px-5 py-5"
            style={{ borderBottom: `1px solid ${COLORS.border}` }}
          >
            <img
              src={IMAGES.logo.main}
              alt="Viking Tin"
              className="h-10 w-auto object-contain"
            />

            <button
              type="button"
              onClick={handleCloseMobileMenu}
              className="flex h-10 w-10 items-center justify-center rounded-full"
              style={{
                backgroundColor: COLORS.black,
                color: COLORS.white,
              }}
              aria-label="Close menu"
            >
              <X size={18} />
            </button>
          </div>

          <nav className="px-5 py-5">
            <ul className="space-y-2">
              {activeNavItems.map((item) => {
                if (isBrandsItem(item.label)) {
                  return (
                    <li
                      key={item.id}
                      className="overflow-hidden rounded-2xl"
                      style={{ backgroundColor: COLORS.background }}
                    >
                      <button
                        type="button"
                        onClick={() => setMobileBrandsOpen((prev) => !prev)}
                        className="flex w-full items-center justify-between px-4 py-4 text-left text-sm font-medium uppercase"
                        style={{ color: COLORS.textPrimary }}
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          size={18}
                          className={`transition-transform duration-200 ${
                            mobileBrandsOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      <div
                        className={`grid transition-all duration-300 ${
                          mobileBrandsOpen
                            ? 'grid-rows-[1fr] opacity-100'
                            : 'grid-rows-[0fr] opacity-0'
                        }`}
                      >
                        <div className="overflow-hidden">
                          <div
                            className="mx-4 h-px"
                            style={{ backgroundColor: COLORS.border }}
                          />

                          <div className="px-4 py-2">
                            <Link
                              href="/brands"
                              onClick={handleCloseMobileMenu}
                              className="block py-2 text-sm font-semibold"
                              style={{ color: COLORS.textPrimary }}
                            >
                              View All Brands
                            </Link>

                            {brandItems.map((brand) => (
                              <Link
                                key={brand.id}
                                href={brand.href}
                                onClick={handleCloseMobileMenu}
                                className="block py-2 text-sm"
                                style={{ color: COLORS.textSecondary }}
                              >
                                {brand.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                }

                return (
                  <li key={item.id}>
                    <Link
                      href={item.href}
                      onClick={handleCloseMobileMenu}
                      className="block rounded-2xl px-4 py-4 text-sm font-medium uppercase"
                      style={{
                        backgroundColor: COLORS.background,
                        color: COLORS.textPrimary,
                      }}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="mt-5">
              <Link
                href="/account"
                onClick={handleCloseMobileMenu}
                className="flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-medium"
                style={{
                  backgroundColor: COLORS.black,
                  color: COLORS.white,
                }}
              >
                Account
              </Link>
            </div>
          </nav>
        </aside>
      </div>
    </>
  );
}