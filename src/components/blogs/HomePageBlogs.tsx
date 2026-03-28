'use client';

import { IMAGES } from '@/constants/images';
import { COLORS } from '@/constants/colors';
import BlogCard from '@/components/blogs/BlogCard';
import { blogPostsMock } from '@/mock/blogs';

export default function HomePageBlogs() {
  const posts = blogPostsMock.filter((post) => post.isPublished).slice(0, 3);

  if (!posts.length) return null;

  return (
    <section className="relative overflow-hidden py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        <div className="grid gap-6 md:grid-cols-2 md:items-start">
          <h2
            className="text-[54px] font-semibold uppercase leading-[0.95] md:text-[70px]"
            style={{ color: COLORS.textPrimary }}
          >
            Our
            <br />
            Blogs
          </h2>

          <p
            className="max-w-[420px] text-[16px] leading-[1.5] md:justify-self-end"
            style={{ color: '#8f8f8f' }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-8">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}