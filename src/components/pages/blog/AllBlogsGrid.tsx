'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar } from 'lucide-react';
import { supabase } from '@/supabaseClient';
import { BlogSearchBar } from './BlogSearchBar';

interface Blog {
  id: string;
  title: string;
  slug: string;
  summary: string;
  cover_image_url: string | null;
  published_at: string;
  is_published: boolean;
  is_featured: boolean;
  category: string | null;
  topic: string | null;
  industry: string | null;
  tags: string[] | null;
  created_at: string;
}

function BlogCard({ blog }: { blog: Blog }) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-sm shadow-gray-200/60 hover:shadow-xl hover:shadow-indigo-100/40 hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col">
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

      <div className="p-6 flex flex-col gap-3 flex-1">
        {blog.published_at && (
          <div className="flex items-center gap-1.5 text-xs font-semibold text-[#6C757D] lowercase tracking-wider">
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
        {(blog.topic || blog.industry) && (
          <div className="flex flex-wrap gap-1.5">
            {blog.topic && (
              <span className="text-xs font-semibold text-[#5B52F3] uppercase tracking-wider">
                {blog.topic}
              </span>
            )}
            {blog.topic && blog.industry && (
              <span className="text-xs text-gray-300">·</span>
            )}
            {blog.industry && (
              <span className="text-xs font-semibold text-[#5B52F3] uppercase tracking-wider">
                {blog.industry}
              </span>
            )}
          </div>
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

export function AllBlogsGrid() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [filteredBlogs, setFilteredBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<'newest' | 'oldest' | 'featured'>('newest');
  const PAGE_SIZE = 12;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedTopic, selectedIndustry, sortBy]);

  useEffect(() => {
    async function fetchBlogs() {
      setLoading(true);
      try {
        const { data, error } = await supabase
          .from('blogs')
          .select('id, title, slug, summary, cover_image_url, published_at, is_published, is_featured, category, topic, industry, tags, created_at')
          .eq('is_published', true);

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

    // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter((blog) => {
        const titleMatch = blog.title.toLowerCase().includes(query);
        const summaryMatch = blog.summary.toLowerCase().includes(query);
        const categoryMatch = blog.category?.toLowerCase().includes(query);
        const topicMatch = blog.topic?.toLowerCase().includes(query);
        const industryMatch = blog.industry?.toLowerCase().includes(query);
        const tagsMatch = blog.tags?.some((tag) => tag.toLowerCase().includes(query));
        return titleMatch || summaryMatch || categoryMatch || topicMatch || industryMatch || tagsMatch;
      });
    }

    // Topic filter
    if (selectedTopic) {
      filtered = filtered.filter((blog) => {
        const blogTopic = blog.topic?.trim();
        return blogTopic && blogTopic.toLowerCase() === selectedTopic.toLowerCase();
      });
    }

    // Industry filter
    if (selectedIndustry) {
      filtered = filtered.filter((blog) => {
        const blogIndustry = blog.industry?.trim();
        return blogIndustry && blogIndustry.toLowerCase() === selectedIndustry.toLowerCase();
      });
    }

    // Sort
    filtered.sort((a, b) => {
      const aDate = new Date(a.published_at || a.created_at).getTime();
      const bDate = new Date(b.published_at || b.created_at).getTime();

      if (sortBy === 'featured') {
        if (a.is_featured && !b.is_featured) return -1;
        if (!a.is_featured && b.is_featured) return 1;
        return bDate - aDate;
      } else if (sortBy === 'oldest') {
        return aDate - bDate;
      } else {
        return bDate - aDate;
      }
    });

    setFilteredBlogs(filtered);
  }, [blogs, searchQuery, selectedTopic, selectedIndustry, sortBy]);

  const totalPages = Math.max(1, Math.ceil(filteredBlogs.length / PAGE_SIZE));
  const pagedBlogs = filteredBlogs.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);
  const firstItemIndex = filteredBlogs.length === 0 ? 0 : (currentPage - 1) * PAGE_SIZE + 1;
  const lastItemIndex = Math.min(currentPage * PAGE_SIZE, filteredBlogs.length);
  const visiblePageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1).filter((page) => {
    return page === 1 || page === totalPages || Math.abs(page - currentPage) <= 1;
  });

  return (
    <div className="bg-white">
      <BlogSearchBar
        onSearchChange={setSearchQuery}
        onTopicChange={setSelectedTopic}
        onIndustryChange={setSelectedIndustry}
        onSortChange={setSortBy}
        selectedTopic={selectedTopic}
        selectedIndustry={selectedIndustry}
        currentSort={sortBy}
      />

      <div className="py-10 md:py-[clamp(40px,5vw,64px)] px-6 md:px-12 xl:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#2F1C8C] text-balance">
              All Blog Posts
            </h2>
            {!loading && filteredBlogs.length > 0 && (
              <p className="text-sm text-gray-500">
                Showing {firstItemIndex}-{lastItemIndex} of {filteredBlogs.length}
              </p>
            )}
          </div>

          {loading && (
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {[...Array(6)].map((_, i) => (
                <BlogCardSkeleton key={i} />
              ))}
            </div>
          )}

          {!loading && filteredBlogs.length === 0 && (
            <div className="col-span-full text-center py-10 md:py-[clamp(40px,5vw,64px)]">
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                No blog posts found
              </h3>
              <p className="text-gray-400 text-sm">
                Try adjusting your search or filters to find what you&apos;re looking for.
              </p>
            </div>
          )}

          {!loading && filteredBlogs.length > 0 && (
            <>
              <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {pagedBlogs.map((blog) => (
                  <BlogCard key={blog.id} blog={blog} />
                ))}
              </div>

              {totalPages > 1 && (
                <div className="mt-10 flex items-center justify-center gap-2 flex-wrap">
                  <button
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="h-10 px-4 rounded-full border border-gray-300 text-sm text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:border-[#2F1C8C]"
                  >
                    Previous
                  </button>

                  {visiblePageNumbers.map((page, index) => {
                    const showEllipsis = index > 0 && page - visiblePageNumbers[index - 1] > 1;

                    return (
                      <div key={page} className="flex items-center gap-2">
                        {showEllipsis && <span className="text-gray-400">...</span>}
                        <button
                          onClick={() => setCurrentPage(page)}
                          className={`h-10 w-10 rounded-full text-sm border transition-colors ${
                            currentPage === page
                              ? 'bg-[#2F1C8C] border-[#2F1C8C] text-white'
                              : 'border-gray-300 text-gray-700 hover:border-[#2F1C8C]'
                          }`}
                        >
                          {page}
                        </button>
                      </div>
                    );
                  })}

                  <button
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="h-10 px-4 rounded-full border border-gray-300 text-sm text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:border-[#2F1C8C]"
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
