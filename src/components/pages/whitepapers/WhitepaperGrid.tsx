'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { supabase } from '@/supabaseClient';
import { WhitepaperCard, WhitepaperCardSkeleton } from './WhitepaperCard';
import { Button } from '@/components/ui/Button';

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

interface WhitepaperGridProps {
  searchQuery?: string;
  selectedTopic?: string | null;
  selectedIndustry?: string | null;
  sortBy?: 'newest' | 'oldest' | 'featured';
}

export function WhitepaperGrid({
  searchQuery = '',
  selectedTopic = null,
  selectedIndustry = null,
  sortBy = 'newest'
}: WhitepaperGridProps) {
  const [whitepapers, setWhitepapers] = useState<Whitepaper[]>([]);
  const [filteredWhitepapers, setFilteredWhitepapers] = useState<Whitepaper[]>([]);
  const [loading, setLoading] = useState(true);

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
      console.log('Filtering by topic:', selectedTopic);
      filtered = filtered.filter((wp) => {
        const wpTopic = wp.topic?.trim();
        const match = wpTopic && wpTopic.toLowerCase() === selectedTopic.toLowerCase();
        console.log(`Whitepaper "${wp.title}" topic: "${wp.topic}" - Match: ${match}`);
        return match;
      });
      console.log('After topic filter:', filtered.length, 'whitepapers');
    }

    // Apply industry filter
    if (selectedIndustry) {
      console.log('Filtering by industry:', selectedIndustry);
      filtered = filtered.filter((wp) => {
        const wpIndustry = wp.industry?.trim();
        const match = wpIndustry && wpIndustry.toLowerCase() === selectedIndustry.toLowerCase();
        console.log(`Whitepaper "${wp.title}" industry: "${wp.industry}" - Match: ${match}`);
        return match;
      });
      console.log('After industry filter:', filtered.length, 'whitepapers');
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

  const displayedWhitepapers = filteredWhitepapers.slice(0, 3);

  return (
    <div className="bg-white">
      {/* Recent White Papers Section */}
      <div className="py-16 px-6 md:px-12 xl:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Header Row */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#2F1C8C]">
              Recent White Papers
            </h2>

            <Link href="/whitepapers/all">
              <Button variant="solid" size="default">
                View All
              </Button>
            </Link>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {[...Array(3)].map((_, i) => (
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
                Check back soon for new whitepapers.
              </p>
            </div>
          )}

          {/* Grid */}
          {!loading && displayedWhitepapers.length > 0 && (
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {displayedWhitepapers.map((whitepaper) => (
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
