'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { supabase } from '@/supabaseClient';
import { Button } from '@/components/ui/Button';

interface Guide {
  id: string;
  title: string;
  slug: string;
  description: string;
  cover_image_url: string | null;
  pdf_url: string;
  created_at: string;
}

function GuideCard({ guide }: { guide: Guide }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm shadow-gray-200/60 hover:shadow-xl hover:shadow-indigo-100/40 hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col">
      {/* Icon Image */}
      <div className="relative w-full rounded-[16px] bg-white overflow-hidden flex items-center justify-center">
        <Image
          src="/assets/logos/guidescover.png"
          alt="Finmile Guide"
          width={220}
          height={220}
          className="object-contain"
          style={{ width: 'auto', height: 'auto' }}
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col gap-3 flex-1">
        {/* Title */}
        <h3 className="text-lg font-semibold text-[#1C1F4A] leading-snug text-center">
          {guide.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 text-center">
          {guide.description}
        </p>

        {/* Download Link - Centered */}
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
      <div className="h-6 bg-gray-200 rounded w-3/4" />
      <div className="space-y-2">
        <div className="h-4 bg-gray-200 rounded w-full" />
        <div className="h-4 bg-gray-200 rounded w-5/6" />
      </div>
      <div className="h-4 bg-gray-200 rounded w-28" />
    </div>
  );
}

export function GuideGrid() {
  const [guides, setGuides] = useState<Guide[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGuides() {
      setLoading(true);
      try {
        const { data, error } = await supabase
          .from('guides')
          .select('*')
          .order('created_at', { ascending: false })
          .limit(3);

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

  return (
    <div className="bg-white py-10 md:py-[clamp(40px,5vw,64px)] px-6 md:px-12 xl:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header Row */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#2F1C8C] text-balance">
            Recent Finmile Guides
          </h2>

          <Link href="/guides/all">
            <Button variant="solid" size="default">
              View All
            </Button>
          </Link>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {[...Array(3)].map((_, i) => (
              <GuideCardSkeleton key={i} />
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && guides.length === 0 && (
          <div className="col-span-full text-center py-10 md:py-[clamp(40px,5vw,64px)]">
            <div className="text-6xl mb-4">📚</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              No guides yet
            </h3>
            <p className="text-gray-400 text-sm">
              Check back soon for new guides.
            </p>
          </div>
        )}

        {/* Grid */}
        {!loading && guides.length > 0 && (
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {guides.map((guide) => (
              <GuideCard key={guide.id} guide={guide} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
