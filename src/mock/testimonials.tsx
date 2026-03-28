import type { Testimonial } from '@/types/testimonials';
import { IMAGES } from '@/constants/images';

export const testimonialsMock: Testimonial[] = [
  {
    id: '1',
    name: 'Lorem Ipsum Sit Amet',
    role: 'Lorem Ipsum Sit Amet',
    imageUrl: IMAGES.testimonials.avatar,
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in enim quis augue finibus facilisis id sed enim. Quisque id mauris mollis, mollis turpis a, hendrerit orci. Curabitur at lacus in erat ultrices porta in at magna. Donec.',
    rating: 5,
    sortOrder: 1,
    isActive: true,
    createdAt: null,
    updatedAt: null,
  },
  {
    id: '2',
    name: 'John Carter',
    role: 'Verified Customer',
    imageUrl: IMAGES.testimonials.avatar,
    quote:
      'Amazing product quality and smooth ordering experience. Delivery was quick and the packaging looked premium from start to finish.',
    rating: 5,
    sortOrder: 2,
    isActive: true,
    createdAt: null,
    updatedAt: null,
  },
  {
    id: '3',
    name: 'Sarah Mitchell',
    role: 'Long-Term Customer',
    imageUrl: IMAGES.testimonials.avatar,
    quote:
      'The flavor selection is excellent and the overall site experience feels polished. Definitely one of the better brands I have tried.',
    rating: 4,
    sortOrder: 3,
    isActive: true,
    createdAt: null,
    updatedAt: null,
  },
];