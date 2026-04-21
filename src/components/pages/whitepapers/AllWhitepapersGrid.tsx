'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/supabaseClient';
import { WhitepaperCard, WhitepaperCardSkeleton } from './WhitepaperCard';
import { WhitepaperSearchBar } from './WhitepaperSearchBar';

interface Whitepaper {
  id: string;
  title: string;
  slug: string;
  summary: string;
  cover_image_url: string;
  pdf_url?: string;
  author: string | null;
  author_name: string | null;
  published_date: string | null;
  published_at: string;
  created_at: string;
  is_featured: boolean;
  topic: string | null;
  industry: string | null;
  tags: string[];
}

export function AllWhitepapersGrid() {
  const PAGE_SIZE = 12;

  const [whitepapers, setWhitepapers] = useState<Whitepaper[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<'newest' | 'oldest' | 'featured'>('newest');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  // Reset pagination when filters/search/sort change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedTopic, selectedIndustry, sortBy]);

  // Fetch paged whitepapers from Supabase
  useEffect(() => {
    async function fetchWhitepapers() {
      setLoading(true);
      try {
        const from = (currentPage - 1) * PAGE_SIZE;
        const to = from + PAGE_SIZE - 1;

        let query = supabase
          .from('whitepapers')
          .select('id, title, slug, summary, cover_image_url, pdf_url, author, author_name, published_date, published_at, created_at, is_featured, topic, industry, tags', { count: 'exact' })
          .eq('is_published', true);

        if (searchQuery.trim()) {
          const safeQuery = searchQuery.trim().replace(/,/g, ' ');
          query = query.or(`title.ilike.%${safeQuery}%,summary.ilike.%${safeQuery}%`);
        }

        if (selectedTopic) {
          query = query.eq('topic', selectedTopic);
        }

        if (selectedIndustry) {
          query = query.eq('industry', selectedIndustry);
        }

        if (sortBy === 'featured') {
          query = query.order('is_featured', { ascending: false }).order('created_at', { ascending: false });
        } else {
          query = query.order('created_at', { ascending: sortBy === 'oldest' });
        }

        const { data, error, count } = await query.range(from, to);

        if (error) {
          console.error('Error fetching whitepapers:', error);
          setWhitepapers([]);
          setTotalCount(0);
          return;
        }

        setWhitepapers((data as Whitepaper[]) || []);
        setTotalCount(count || 0);
      } catch (error) {
        console.error('Error fetching whitepapers:', error);
        setWhitepapers([]);
        setTotalCount(0);
      } finally {
        setLoading(false);
      }
    }

    fetchWhitepapers();
  }, [currentPage, searchQuery, selectedTopic, selectedIndustry, sortBy]);

  const totalPages = Math.max(1, Math.ceil(totalCount / PAGE_SIZE));
  const firstItemIndex = totalCount === 0 ? 0 : (currentPage - 1) * PAGE_SIZE + 1;
  const lastItemIndex = Math.min(currentPage * PAGE_SIZE, totalCount);

  const visiblePageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1).filter((page) => {
    return page === 1 || page === totalPages || Math.abs(page - currentPage) <= 1;
  });

  return (
    <div className="bg-white">
      {/* Search & Filter Bar */}
      <WhitepaperSearchBar
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
          {/* Header Row */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#2F1C8C] text-balance">
              All Whitepapers
            </h2>
            {!loading && totalCount > 0 && (
              <p className="text-sm text-gray-500">
                Showing {firstItemIndex}-{lastItemIndex} of {totalCount}
              </p>
            )}
          </div>

          {/* Loading State */}
          {loading && (
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {[...Array(6)].map((_, i) => (
                <WhitepaperCardSkeleton key={i} />
              ))}
            </div>
          )}

          {/* Empty State */}
          {!loading && whitepapers.length === 0 && (
            <div className="col-span-full text-center py-10 md:py-[clamp(40px,5vw,64px)]">
              <div className="text-6xl mb-4">📚</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                No whitepapers found
              </h3>
              <p className="text-gray-400 text-sm">
                Try adjusting your search or filters to find what you&apos;re looking for.
              </p>
            </div>
          )}

          {/* Grid */}
          {!loading && whitepapers.length > 0 && (
            <>
              <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {whitepapers.map((whitepaper) => (
                  <WhitepaperCard
                    key={whitepaper.id}
                    title={whitepaper.title}
                    summary={whitepaper.summary}
                    coverImageUrl={whitepaper.cover_image_url}
                    slug={whitepaper.slug}
                    pdfUrl={whitepaper.pdf_url}
                    author={whitepaper.author || whitepaper.author_name}
                    publishedDate={whitepaper.published_date || whitepaper.published_at || whitepaper.created_at}
                  />
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
