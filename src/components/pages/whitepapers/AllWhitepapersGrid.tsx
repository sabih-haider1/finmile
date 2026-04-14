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
  const [whitepapers, setWhitepapers] = useState<Whitepaper[]>([]);
  const [filteredWhitepapers, setFilteredWhitepapers] = useState<Whitepaper[]>([]);
  const [loading, setLoading] = useState(true);
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
          .select('id, title, slug, summary, cover_image_url, pdf_url, author, author_name, published_date, published_at, created_at, is_featured, topic, industry, tags')
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
      filtered = filtered.filter((wp) => {
        const wpTopic = wp.topic?.trim();
        return Boolean(wpTopic && wpTopic.toLowerCase() === selectedTopic.toLowerCase());
      });
    }

    // Apply industry filter
    if (selectedIndustry) {
      filtered = filtered.filter((wp) => {
        const wpIndustry = wp.industry?.trim();
        return Boolean(wpIndustry && wpIndustry.toLowerCase() === selectedIndustry.toLowerCase());
      });
    }

    // Apply sorting
    filtered.sort((a, b) => {
      const aDate = new Date(a.published_date || a.published_at || a.created_at).getTime();
      const bDate = new Date(b.published_date || b.published_at || b.created_at).getTime();

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

    setFilteredWhitepapers(filtered);
  }, [whitepapers, searchQuery, selectedTopic, selectedIndustry, sortBy]);

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
          {!loading && filteredWhitepapers.length > 0 && (
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {filteredWhitepapers.map((whitepaper) => (
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
          )}
        </div>
      </div>
    </div>
  );
}
