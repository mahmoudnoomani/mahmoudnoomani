'use client';

import Image from 'next/image';
import { COLORS } from '@/constants/colors';
import type { WhyChooseUsItem as WhyChooseUsItemType } from '@/mock/whyChooseUs';

type WhyChooseUsItemProps = {
  item: WhyChooseUsItemType;
};

export default function WhyChooseUsItem({ item }: WhyChooseUsItemProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <div
        className="flex h-[90px] w-[90px] items-center justify-center rounded-full md:h-[110px] md:w-[110px]"
        style={{ backgroundColor: COLORS.white }}
      >
        <Image
          src={item.icon}
          alt={item.title}
          width={46}
          height={46}
          className="h-[38px] w-[38px] object-contain md:h-[46px] md:w-[46px]"
        />
      </div>

      <h3
        className="mt-4 max-w-[150px] text-sm font-medium uppercase leading-[1.05] tracking-[0.08em] md:text-[18px]"
        style={{ color: COLORS.white }}
      >
        {item.title}
      </h3>
    </div>
  );
}