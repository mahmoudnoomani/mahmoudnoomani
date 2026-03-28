'use client';

import { COLORS } from '@/constants/colors';

type Props = {
  text?: string;
};

export default function TopMarquee({ text = 'NEW ARRIVAL' }: Props) {
  const row = Array.from({ length: 15 }, () => text).join('     .    ');

  return (
    <div
      className="w-full overflow-hidden py-4"
      style={{ backgroundColor: COLORS.black, color: COLORS.white }}
    >
      <div className="flex whitespace-nowrap">
        <div
          className="flex gap-10 text-[26px] font-medium tracking-[0.08em]"
          style={{
            animation: 'marquee 20s linear infinite',
          }}
        >
          <span>{row}</span>
         
        </div>
      </div>

      {/* Inline keyframes */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}