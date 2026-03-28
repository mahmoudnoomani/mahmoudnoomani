'use client';

import { COLORS } from '@/constants/colors';

type StrengthCardProps = {
  label: string;
};

export default function StrengthCard({ label }: StrengthCardProps) {
  return (
    <div
      className="relative flex h-[180px] w-[180px] items-center justify-center rounded-full"
      style={{
        backgroundColor: COLORS.white,
        boxShadow: `0 6px 20px ${COLORS.brandCardShadow}`,
      }}
    >
      <span
        className="text-center text-lg font-semibold uppercase tracking-wide"
        style={{ color: COLORS.black }}
      >
        {label}
      </span>

      <div
        className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full text-base"
        style={{ backgroundColor: COLORS.black, color: COLORS.white }}
      >
        →
      </div>
    </div>
  );
}