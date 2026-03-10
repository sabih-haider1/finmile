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
  published_at: string;
  is_featured: boolean;
  tags: string[];
}

export function WhitepaperGrid() {
  const [whitepapers, setWhitepapers] = useState<Whitepaper[]>([]);
  const [filteredWhitepapers, setFilteredWhitepapers] = useState<Whitepaper[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<'newest' | 'oldest' | 'featured'>('newest');

  // Fetch whitepapers from Supabase
  useEffect(() => {
    async function fetchWhitepapers() {
      setLoading(true);
      try {
        const { data, error } = await supabase
          .from('whitepapers')
          .select('*')
          .eq('is_published', true);

        if (error) {
          console.error('Error fetching whitepapers:', error);
          return;
        }

        if (data) {
          setWhitepapers(data as Whitepaper[]);
        }
      } catch (error) {
        console.error('Error fetching whitepapers:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchWhitepapers();
  }, []);

  // Filter and sort whitepapers
  useEffect(() => {
    let filtered = [...whitepapers];

    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter((wp) => {
        const titleMatch = wp.title.toLowerCase().includes(query);
        const summaryMatch = wp.summary.toLowerCase().includes(query);
        const tagsMatch = wp.tags?.some(tag => tag.toLowerCase().includes(query));
        return titleMatch || summaryMatch || tagsMatch;
      });
    }

    // Apply topic filter
    if (selectedTopic) {
      filtered = filtered.filter((wp) => 
        wp.tags?.some(tag => tag.toLowerCase().includes(selectedTopic.toLowerCase()))
      );
    }

    // Apply industry filter
    if (selectedIndustry) {
      filtered = filtered.filter((wp) => 
        wp.tags?.some(tag => tag.toLowerCase().includes(selectedIndustry.toLowerCase()))
      );
    }

    // Apply sorting
    filtered.sort((a, b) => {
      if (sortBy === 'featured') {
        if (a.is_featured && !b.is_featured) return -1;
        if (!a.is_featured && b.is_featured) return 1;
        // If both featured or both not, sort by newest
        return new Date(b.published_at).getTime() - new Date(a.published_at).getTime();
      } else if (sortBy === 'oldest') {
        return new Date(a.published_at).getTime() - new Date(b.published_at).getTime();
      } else {
        // newest
        return new Date(b.published_at).getTime() - new Date(a.published_at).getTime();
      }
    });

    setFilteredWhitepapers(filtered);
  }, [whitepapers, searchQuery, selectedTopic, selectedIndustry, sortBy]);

  // Determine which whitepapers to display
  const displayedWhitepapers = showAll ? filteredWhitepapers : filteredWhitepapers.slice(0, 6);
  const hasMore = filteredWhitepapers.length > 6;

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

      {/* Recent White Papers Section */}
      <div className="py-16 px-6 md:px-12 xl:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Header Row */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#2F1C8C]">
              Recent White Papers
            </h2>
            
            {hasMore && !showAll && (
              <button
                onClick={() => setShowAll(true)}
                className="px-6 h-11 rounded-full bg-gradient-to-r from-[#5B52F3] to-[#7A73FF] text-white text-sm font-medium shadow-md shadow-indigo-200/40 hover:shadow-lg hover:-translate-y-[1px] transition-all"
              >
                View All
              </button>
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
          {!loading && filteredWhitepapers.length === 0 && (
            <div className="col-span-full text-center py-16">
              <div className="text-6xl mb-4">📚</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                No whitepapers found
              </h3>
              <p className="text-gray-400 text-sm">
                Try adjusting your search or filters to find what you're looking for.
              </p>
            </div>
          )}

          {/* Grid */}
          {!loading && displayedWhitepapers.length > 0 && (
            <>
              <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {displayedWhitepapers.map((whitepaper) => (
                  <WhitepaperCard
                    key={whitepaper.id}
                    title={whitepaper.title}
                    summary={whitepaper.summary}
                    coverImageUrl={whitepaper.cover_image_url}
                    slug={whitepaper.slug}
                    pdfUrl={whitepaper.pdf_url}
                  />
                ))}
              </div>

              {/* Show Less Button */}
              {showAll && hasMore && (
                <div className="mt-12 text-center">
                  <button
                    onClick={() => setShowAll(false)}
                    className="px-8 py-3 bg-gray-100 text-gray-700 rounded-full font-medium hover:bg-gray-200 transition-all"
                  >
                    Show Less
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
