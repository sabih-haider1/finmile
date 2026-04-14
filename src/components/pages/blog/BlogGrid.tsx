'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar } from 'lucide-react';
import { supabase } from '@/supabaseClient';
import { Button } from '@/components/ui/Button';

interface Blog {
  id: string;
  title: string;
  slug: string;
  summary: string;
  cover_image_url: string | null;
  published_at: string;
  is_published: boolean;
  category: string | null;
}

function BlogCard({ blog }: { blog: Blog }) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-sm shadow-gray-200/60 hover:shadow-xl hover:shadow-indigo-100/40 hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col">
      {/* Cover Image */}
      <div className="relative w-full aspect-[384/260] bg-gradient-to-br from-purple-100 to-indigo-100 overflow-hidden rounded-[16px]">
        {!imageError && blog.cover_image_url ? (
          <Image
            src={blog.cover_image_url}
            alt={blog.title}
            fill
            className="object-cover rounded-[16px]"
            onError={() => setImageError(true)}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center rounded-[16px]">
            <div className="text-center text-gray-400">
              <div className="text-4xl mb-2">📝</div>
              <div className="text-sm font-medium">Blog Post</div>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col gap-3 flex-1">
        {/* Date Badge */}
        {blog.published_at && (
          <div className="flex items-center gap-1.5 text-xs font-semibold text-[#5B52F3] lowercase tracking-wider">
            <Calendar className="w-3.5 h-3.5" />
            <span>
              {new Date(blog.published_at).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </span>
          </div>
        )}

        {/* Title */}
        <h3 className="text-lg font-semibold text-[#1C1F4A] leading-snug">
          {blog.title}
        </h3>

        {/* Summary */}
        <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
          {blog.summary}
        </p>

        {/* Read More Link */}
        <div className="mt-auto pt-2">
          <Link
            href={`/blog/${blog.slug}`}
            className="text-sm font-medium text-[#6A27D4] hover:text-[#6A27E4] transition-colors"
          >
            Read More →
          </Link>
        </div>
      </div>
    </div>
  );
}

function BlogCardSkeleton() {
  return (
    <div className="animate-pulse bg-white rounded-2xl p-6 space-y-4">
      <div className="aspect-[384/260] w-full bg-gray-200 rounded-[16px]" />
      <div className="h-4 bg-gray-200 rounded w-20" />
      <div className="h-6 bg-gray-200 rounded w-3/4" />
      <div className="space-y-2">
        <div className="h-4 bg-gray-200 rounded w-full" />
        <div className="h-4 bg-gray-200 rounded w-5/6" />
      </div>
      <div className="h-4 bg-gray-200 rounded w-24" />
    </div>
  );
}

export function BlogGrid() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogs() {
      setLoading(true);
      try {
        const { data, error } = await supabase
          .from('blogs')
          .select('*')
          .eq('is_published', true)
          .order('published_at', { ascending: false })
          .limit(3);

        if (error) {
          console.error('Error fetching blogs:', error);
          return;
        }

        if (data) {
          setBlogs(data as Blog[]);
        }
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchBlogs();
  }, []);

  return (
    <div className="bg-white py-10 md:py-[clamp(40px,5vw,64px)] px-6 md:px-12 xl:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header Row */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#2F1C8C] text-balance">
            Recent Blogs
          </h2>

          <Link href="/blog/all">
            <Button variant="solid" size="default">
              View All
            </Button>
          </Link>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {[...Array(3)].map((_, i) => (
              <BlogCardSkeleton key={i} />
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && blogs.length === 0 && (
          <div className="col-span-full text-center py-10 md:py-[clamp(40px,5vw,64px)]">
            <div className="text-6xl mb-4">📝</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              No blog posts yet
            </h3>
            <p className="text-gray-400 text-sm">
              Check back soon for new articles.
            </p>
          </div>
        )}

        {/* Grid */}
        {!loading && blogs.length > 0 && (
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
