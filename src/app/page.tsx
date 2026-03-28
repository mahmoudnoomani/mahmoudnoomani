'use client';

import { COLORS } from '@/constants/colors';
import TopMarquee from '@/components/layout/topMarquee';
import Header from '@/components/layout/Header';
import HeroBanner from '@/components/hero/HeroBanner';
import { useGetNavItemsQuery } from '@/features/nav/navApi';
import { useGetHeroBannersQuery } from '@/features/hero/heroApi';
import BrandsSection from '@/components/brands/brands';
import StrengthSection from '@/components/strength-lvl/StrengthSection';
import OffersSection from '@/components/bundles/bundleSection';
import SpecialOffersSection from '@/components/specialOffer/offerSection';
import Footer from '@/components/layout/Footer';
import WhyChooseUsBanner from '@/components/whoChooseUs/whyChooseUsBanner';
import { IMAGES } from '@/constants/images';
import BestSellingProductsSection from '@/components/product/bestSellingSection';
import NewProductsSection from '@/components/product/NewProductsSection';
import HomePageStory from '@/components/homePageStory';
import HomePageBlogs from '@/components/blogs/HomePageBlogs';
import TestimonialsSection from '@/components/testimonials/testimonialSection';
import FlavorCategoriesSection from '@/components/flavours/FlavourCategoriesSection';
export default function Page() {
  const { data: navItems = [], isLoading: navLoading } = useGetNavItemsQuery();
  const {
    data: heroBanners = [],
    isLoading: heroLoading,
  } = useGetHeroBannersQuery();

  const now = new Date();

  const activeBanners = heroBanners
    .filter((banner) => {
      if (!banner.is_active) return false;

      const start = banner.start_date ? new Date(banner.start_date) : null;
      const end = banner.end_date ? new Date(banner.end_date) : null;

      if (start && now < start) return false;
      if (end && now > end) return false;

      return true;
    })
    .sort((a, b) => a.position - b.position);

  if (navLoading || heroLoading) {
    return (
      <main
        className="flex min-h-screen items-center justify-center"
        style={{ backgroundColor: COLORS.pageBg }}
      >
        Loading...
      </main>
    );
  }

  return (
    <main style={{ backgroundColor: COLORS.pageBg }}>
      <TopMarquee text="NEW ARRIVAL" />
      <Header navItems={navItems} />
      <HeroBanner banners={activeBanners} />
      <BrandsSection />
      <BestSellingProductsSection/>
      <FlavorCategoriesSection/>

      <div
        className="relative overflow-hidden"
        style={{
          backgroundImage: `url(${IMAGES.imgwrapper.bgimgwrapper})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
        }}
      >


        <div className="relative z-10">
          <OffersSection />
          <SpecialOffersSection />
          <WhyChooseUsBanner />
          
        </div>
      </div>
      <NewProductsSection/>
            <StrengthSection />
            <HomePageStory />
            <TestimonialsSection />
            <HomePageBlogs />
      <Footer />
    </main>
  );
}