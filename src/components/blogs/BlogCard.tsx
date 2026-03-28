'use client';

import Link from 'next/link';
import type { BlogPost } from '@/types/blogs';
import { COLORS } from '@/constants/colors';

type Props = {
  post: BlogPost;
};

function formatDate(date: string | null) {
  if (!date) return '';
  const parsed = new Date(date);

  return parsed.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

export default function BlogCard({ post }: Props) {
  return (
    <article className="w-full">
      <Link href={`/blogs/${post.slug}`} className="block">
        <div className="overflow-hidden rounded-[28px]">
          {post.featuredImage ? (
            <img
              src={post.featuredImage}
              alt={post.title}
              className="h-[220px] w-full object-cover sm:h-[250px] lg:h-[280px]"
            />
          ) : (
            <div className="h-[220px] w-full bg-gray-200 sm:h-[250px] lg:h-[280px]" />
          )}
        </div>
      </Link>

      <div className="mt-4 border-b pb-2" style={{ borderColor: '#cfcfcf' }}>
        <div className="flex items-center justify-between gap-4">
          <span className="text-[14px]" style={{ color: '#9a9a9a' }}>
            {post.author || 'Admin'}
          </span>

          <span className="text-[14px]" style={{ color: '#9a9a9a' }}>
            {formatDate(post.publishedAt)}
          </span>
        </div>
      </div>

      <div className="mt-4">
        <Link href={`/blogs/${post.slug}`}>
          <h3
            className="line-clamp-2 text-[28px] font-medium leading-[1.1]"
            style={{ color: COLORS.textPrimary }}
          >
            {post.title}
          </h3>
        </Link>

        <p
          className="mt-3 line-clamp-2 text-[16px] leading-[1.4]"
          style={{ color: COLORS.textPrimary }}
        >
          {post.metaDescription || post.content || ''}
        </p>
      </div>
    </article>
  );
}