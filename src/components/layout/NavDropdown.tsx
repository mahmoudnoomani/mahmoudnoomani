'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { COLORS } from '@/constants/colors';

export type DropdownItem = {
  id: string | number;
  label: string;
  href: string;
};

type NavDropdownProps = {
  label: string;
  items: DropdownItem[];
  viewAllHref?: string;
  viewAllLabel?: string;
};

export default function NavDropdown({
  label,
  items,
  viewAllHref,
  viewAllLabel = 'View All',
}: NavDropdownProps) {
  const [open, setOpen] = useState(false);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const clearCloseTimeout = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const handleMouseEnter = () => {
    clearCloseTimeout();
    setOpen(true);
  };

  const handleMouseLeave = () => {
    clearCloseTimeout();
    closeTimeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, 180);
  };

  useEffect(() => {
    return () => clearCloseTimeout();
  }, []);

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-1.5 text-sm font-medium uppercase tracking-[0.02em] transition-opacity hover:opacity-75"
        style={{ color: COLORS.textPrimary }}
      >
        <span>{label}</span>
        <ChevronDown
          size={16}
          className={`transition-transform duration-200 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>

      <div
        className={`absolute left-0 top-full z-50 mt-4 min-w-[230px] overflow-hidden rounded-2xl border transition-all duration-200 ${
          open
            ? 'pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none -translate-y-2 opacity-0'
        }`}
        style={{
          backgroundColor: COLORS.white,
          borderColor: COLORS.border,
          boxShadow: '0 16px 40px rgba(0,0,0,0.10)',
        }}
      >
        <div className="py-3">
          {viewAllHref ? (
            <>
              <Link
                href={viewAllHref}
                className="block px-5 py-2.5 text-sm font-semibold transition-opacity hover:opacity-75"
                style={{ color: COLORS.textPrimary }}
              >
                {viewAllLabel}
              </Link>

              <div
                className="mx-4 my-2 h-px"
                style={{ backgroundColor: COLORS.border }}
              />
            </>
          ) : null}

          {items.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="block px-5 py-2.5 text-sm transition-opacity hover:opacity-75"
              style={{ color: COLORS.textSecondary }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}