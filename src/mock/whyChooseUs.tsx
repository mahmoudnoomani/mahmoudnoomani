import { IMAGES } from '@/constants/images';

export type WhyChooseUsItem = {
  id: number;
  title: string;
  icon: string;
};

export const whyChooseUsData: WhyChooseUsItem[] = [
  {
    id: 1,
    title: 'PREMIUM QUALITY',
    icon: IMAGES.whyChooseUs.premiumQuality,
  },
  {
    id: 2,
    title: 'FAST DELIVERY',
    icon: IMAGES.whyChooseUs.fastDelivery,
  },
  {
    id: 3,
    title: 'SECURE CHECKOUT',
    icon: IMAGES.whyChooseUs.secureCheckout,
  },
  {
    id: 4,
    title: 'SMOKE-FREE EXPERIENCE',
    icon: IMAGES.whyChooseUs.smokeFreeExperience,
  },
];