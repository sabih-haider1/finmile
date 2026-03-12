'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { supabase } from '@/supabaseClient';
import { SimpleSearchBar } from '@/components/shared/SimpleSearchBar';

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
      <div className="relative w-full h-52 bg-gradient-to-br from-purple-100 to-indigo-100 overflow-hidden">
        {!imageError && blog.cover_image_url ? (
          <Image
            src={blog.cover_image_url}
            alt={blog.title}
            fill
            className="object-cover"
            onError={() => setImageError(true)}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center text-gray-400">
              <div className="text-4xl mb-2">📝</div>
              <div className="text-sm font-medium">Blog Post</div>
            </div>
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col gap-3 flex-1">
        {blog.category && (
          <span className="text-xs font-semibold text-[#5B52F3] uppercase tracking-wider">
            {blog.category}
          </span>
        )}
        <h3 className="text-lg font-semibold text-[#1C1F4A] leading-snug">
          {blog.title}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
          {blog.summary}
        </p>
        <div className="mt-auto pt-2">
          <Link
            href={`/blog/${blog.slug}`}
            className="text-sm font-medium text-[#5B52F3] hover:text-[#4338CA] transition-colors"
          >
            Read Article →
          </Link>
        </div>
      </div>
    </div>
  );
}

function BlogCardSkeleton() {
  return (
    <div className="animate-pulse bg-white rounded-2xl p-6 space-y-4">
      <div className="h-52 w-full bg-gray-200 rounded" />
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

export function AllBlogsGrid() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [filteredBlogs, setFilteredBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    async function fetchBlogs() {
      setLoading(true);
      try {
        const { data, error } = await supabase
          .from('blogs')
          .select('*')
          .eq('is_published', true)
          .order('published_at', { ascending: false });

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

  useEffect(() => {
    let filtered = [...blogs];

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter((blog) => {
        const titleMatch = blog.title.toLowerCase().includes(query);
        const summaryMatch = blog.summary.toLowerCase().includes(query);
        const categoryMatch = blog.category?.toLowerCase().includes(query);
        return titleMatch || summaryMatch || categoryMatch;
      });
    }

    setFilteredBlogs(filtered);
  }, [blogs, searchQuery]);

  return (
    <div className="bg-white">
      <SimpleSearchBar
        onSearchChange={setSearchQuery}
        placeholder="Search blog posts..."
      />

      <div className="py-16 px-6 md:px-12 xl:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#2F1C8C]">
              All Blog Posts
            </h2>
          </div>

          {loading && (
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {[...Array(6)].map((_, i) => (
                <BlogCardSkeleton key={i} />
              ))}
            </div>
          )}

          {!loading && filteredBlogs.length === 0 && (
            <div className="col-span-full text-center py-16">
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                No blog posts found
              </h3>
              <p className="text-gray-400 text-sm">
                Try adjusting your search to find what you're looking for.
              </p>
            </div>
          )}

          {!loading && filteredBlogs.length > 0 && (
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {filteredBlogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
