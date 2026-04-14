'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { supabase } from '@/supabaseClient';
import { SimpleSearchBar } from '@/components/shared/SimpleSearchBar';

interface Guide {
  id: string;
  title: string;
  slug: string;
  description: string;
  pdf_url: string;
  created_at: string;
}

function GuideCard({ guide }: { guide: Guide }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm shadow-gray-200/60 hover:shadow-xl hover:shadow-indigo-100/40 hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col">
      <div className="relative w-full  rounded-[16px] overflow-hidden flex items-center justify-center">
        <Image
          src="/assets/logos/guidescover.png"
          alt="Finmile Guide"
          width={220}
          height={220}
          className="object-contain"
          style={{ width: 'auto', height: 'auto' }}
        />
      </div>

      <div className="p-6 flex flex-col gap-3 flex-1">
        <h3 className="text-lg font-semibold text-[#1C1F4A] leading-snug text-center">
          {guide.title}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 text-center">
          {guide.description}
        </p>
        <div className="mt-auto pt-2 text-center">
          <a
            href={guide.pdf_url}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="text-sm font-medium text-[#6A27D4] hover:text-[#6A27E4] transition-colors"
          >
            Download Guide →
          </a>
        </div>
      </div>
    </div>
  );
}

function GuideCardSkeleton() {
  return (
    <div className="animate-pulse bg-white rounded-2xl p-6 space-y-4">
      <div className="h-52 w-full bg-gray-200 rounded" />
      <div className="h-6 bg-gray-200 rounded w-3/4 mx-auto" />
      <div className="space-y-2">
        <div className="h-4 bg-gray-200 rounded w-full" />
        <div className="h-4 bg-gray-200 rounded w-5/6 mx-auto" />
      </div>
      <div className="h-4 bg-gray-200 rounded w-28 mx-auto" />
    </div>
  );
}

export function AllGuidesGrid() {
  const [guides, setGuides] = useState<Guide[]>([]);
  const [filteredGuides, setFilteredGuides] = useState<Guide[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    async function fetchGuides() {
      setLoading(true);
      try {
        const { data, error } = await supabase
          .from('guides')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) {
          console.error('Error fetching guides:', error);
          return;
        }

        if (data) {
          setGuides(data as Guide[]);
        }
      } catch (error) {
        console.error('Error fetching guides:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchGuides();
  }, []);

  useEffect(() => {
    let filtered = [...guides];

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter((guide) => {
        const titleMatch = guide.title.toLowerCase().includes(query);
        const descriptionMatch = guide.description.toLowerCase().includes(query);
        return titleMatch || descriptionMatch;
      });
    }

    setFilteredGuides(filtered);
  }, [guides, searchQuery]);

  return (
    <div className="bg-white">
      <SimpleSearchBar
        onSearchChange={setSearchQuery}
        placeholder="Search guides..."
      />

      <div className="py-10 md:py-[clamp(40px,5vw,64px)] px-6 md:px-12 xl:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#2F1C8C] text-balance">
              All Finmile Guides
            </h2>
          </div>

          {loading && (
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {[...Array(6)].map((_, i) => (
                <GuideCardSkeleton key={i} />
              ))}
            </div>
          )}

          {!loading && filteredGuides.length === 0 && (
            <div className="col-span-full text-center py-10 md:py-[clamp(40px,5vw,64px)]">
              <div className="text-6xl mb-4">📚</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                No guides found
              </h3>
              <p className="text-gray-400 text-sm">
                Try adjusting your search to find what you&apos;re looking for.
              </p>
            </div>
          )}

          {!loading && filteredGuides.length > 0 && (
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {filteredGuides.map((guide) => (
                <GuideCard key={guide.id} guide={guide} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
