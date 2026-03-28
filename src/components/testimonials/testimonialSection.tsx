'use client';

import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { COLORS } from '@/constants/colors';
import { IMAGES } from '@/constants/images';
import { testimonialsMock } from '@/mock/testimonials';
import TestimonialCard from './testimonialCard';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function TestimonialsSection() {
  const testimonials = testimonialsMock
    .filter((item) => item.isActive)
    .sort((a, b) => a.sortOrder - b.sortOrder);

  if (!testimonials.length) return null;

  return (
    <section
      className="relative overflow-hidden py-16 md:py-20 lg:py-24"
      style={{
        backgroundImage: `url(${IMAGES.testimonials.bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-black/80" />

      <div className="pointer-events-none absolute left-0 top-0 hidden -translate-x-[28%] -translate-y-[18%] md:block">
        <div className="h-[210px] w-[210px] overflow-hidden rounded-full border border-white/10 bg-white">
          <img
            src={IMAGES.testimonials.decorTopRight}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 hidden -translate-x-[28%] translate-y-[28%] md:block">
        <div className="h-[210px] w-[210px] overflow-hidden rounded-full border border-white/10 bg-white">
          <img
            src={IMAGES.testimonials.decorBottomLeft}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        <div className="text-center">
          <h2
            className="text-4xl font-semibold md:text-5xl lg:text-6xl"
            style={{ color: COLORS.white }}
          >
            Client Testimonial
          </h2>

          <p
            className="mx-auto mt-4 max-w-[540px] text-[15px] leading-[1.6] sm:text-[16px]"
            style={{ color: 'rgba(255,255,255,0.82)' }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>

        <div className="relative mt-10 sm:mt-12">
          <button
            className="testimonial-prev absolute left-0 top-1/2 z-20 hidden h-[44px] w-[44px] -translate-y-1/2 items-center justify-center rounded-full lg:flex"
            style={{ backgroundColor: COLORS.white, color: COLORS.black }}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            className="testimonial-next absolute right-0 top-1/2 z-20 hidden h-[44px] w-[44px] -translate-y-1/2 items-center justify-center rounded-full lg:flex"
            style={{ backgroundColor: COLORS.black, color: COLORS.white }}
            aria-label="Next testimonial"
          >
            <ChevronRight size={22} />
          </button>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            loop={testimonials.length > 1}
            speed={700}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: '.testimonial-prev',
              nextEl: '.testimonial-next',
            }}
            pagination={{
              clickable: true,
              el: '.testimonial-pagination',
              bulletClass: 'testimonial-bullet',
              bulletActiveClass: 'testimonial-bullet-active',
            }}
            className="pb-12"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <TestimonialCard testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="testimonial-pagination mt-6 flex justify-center gap-2" />
        </div>
      </div>

      <style jsx global>{`
        .testimonial-bullet {
          width: 8px;
          height: 8px;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.55);
          display: inline-block;
          transition: all 0.25s ease;
          cursor: pointer;
        }

        .testimonial-bullet-active {
          background: #ffffff;
          transform: scale(1.15);
        }
      `}</style>
    </section>
  );
}