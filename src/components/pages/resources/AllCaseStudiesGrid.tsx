'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { supabase } from '@/supabaseClient';
import { CaseStudySearchBar } from './CaseStudySearchBar';

interface CaseStudy {
  id: string;
  title: string;
  slug: string;
  summary: string;
  cover_image_url: string | null;
  company_name: string | null;
  topic: string | null;
  industry: string | null;
  is_published: boolean;
  is_featured: boolean;
  created_at: string;
  published_at: string | null;
}

function CaseStudyCard({ caseStudy }: { caseStudy: CaseStudy }) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-sm shadow-gray-200/60 hover:shadow-xl hover:shadow-indigo-100/40 hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col">
      <div className="relative w-full aspect-[384/260] bg-gradient-to-br from-purple-100 to-indigo-100 overflow-hidden rounded-[16px]">
        {!imageError && caseStudy.cover_image_url ? (
          <Image
            src={caseStudy.cover_image_url}
            alt={caseStudy.title}
            fill
            className="object-cover rounded-[16px]"
            onError={() => setImageError(true)}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center rounded-[16px]">
            <div className="text-center text-gray-400">
              <div className="text-4xl mb-2">📊</div>
              <div className="text-sm font-medium">Case Study</div>
            </div>
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col gap-3 flex-1">
        <span className="text-xs font-semibold text-[#5B52F3] uppercase tracking-wider">
          {caseStudy.industry || caseStudy.topic || 'Case Study'}
        </span>
        <h3 className="text-lg font-semibold text-[#1C1F4A] leading-snug">
          {caseStudy.title}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
          {caseStudy.summary}
        </p>
        <div className="mt-auto pt-2">
          <Link
            href={`/case-studies/${caseStudy.slug}`}
            className="text-sm font-medium text-[#6A27D4] hover:text-[#6A27E4] transition-colors"
          >
            Read More →
          </Link>
        </div>
      </div>
    </div>
  );
}

function CaseStudyCardSkeleton() {
  return (
    <div className="animate-pulse bg-white rounded-2xl p-6 space-y-4">
      <div className="aspect-[384/260] w-full bg-gray-200 rounded-[16px]" />
      <div className="h-4 bg-gray-200 rounded w-20" />
      <div className="h-6 bg-gray-200 rounded w-3/4" />
      <div className="space-y-2">
        <div className="h-4 bg-gray-200 rounded w-full" />
        <div className="h-4 bg-gray-200 rounded w-5/6" />
      </div>
      <div className="h-4 bg-gray-200 rounded w-32" />
    </div>
  );
}

export function AllCaseStudiesGrid() {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [filteredCaseStudies, setFilteredCaseStudies] = useState<CaseStudy[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<'newest' | 'oldest' | 'featured'>('newest');

  useEffect(() => {
    async function fetchCaseStudies() {
      setLoading(true);
      try {
        const { data, error } = await supabase
          .from('case_studies')
          .select('id, title, slug, summary, cover_image_url, company_name, topic, industry, is_published, is_featured, created_at, published_at')
          .eq('is_published', true);

        if (error) {
          console.error('Error fetching case studies:', error);
          return;
        }

        if (data) {
          setCaseStudies(data as CaseStudy[]);
        }
      } catch (error) {
        console.error('Error fetching case studies:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchCaseStudies();
  }, []);

  useEffect(() => {
    let filtered = [...caseStudies];

    // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter((cs) => {
        const titleMatch = cs.title.toLowerCase().includes(query);
        const summaryMatch = cs.summary.toLowerCase().includes(query);
        const companyMatch = cs.company_name?.toLowerCase().includes(query);
        const topicMatch = cs.topic?.toLowerCase().includes(query);
        const industryMatch = cs.industry?.toLowerCase().includes(query);
        return titleMatch || summaryMatch || companyMatch || topicMatch || industryMatch;
      });
    }

    // Topic filter
    if (selectedTopic) {
      filtered = filtered.filter((cs) => {
        const csTopic = cs.topic?.trim();
        return csTopic && csTopic.toLowerCase() === selectedTopic.toLowerCase();
      });
    }

    // Industry filter
    if (selectedIndustry) {
      filtered = filtered.filter((cs) => {
        const csIndustry = cs.industry?.trim();
        return csIndustry && csIndustry.toLowerCase() === selectedIndustry.toLowerCase();
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

    setFilteredCaseStudies(filtered);
  }, [caseStudies, searchQuery, selectedTopic, selectedIndustry, sortBy]);

  return (
    <div className="bg-white">
      <CaseStudySearchBar
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
              All Case Studies
            </h2>
          </div>

          {loading && (
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {[...Array(6)].map((_, i) => (
                <CaseStudyCardSkeleton key={i} />
              ))}
            </div>
          )}

          {!loading && filteredCaseStudies.length === 0 && (
            <div className="col-span-full text-center py-10 md:py-[clamp(40px,5vw,64px)]">
              <div className="text-6xl mb-4">📊</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                No case studies found
              </h3>
              <p className="text-gray-400 text-sm">
                Try adjusting your search or filters to find what you&apos;re looking for.
              </p>
            </div>
          )}

          {!loading && filteredCaseStudies.length > 0 && (
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {filteredCaseStudies.map((caseStudy) => (
                <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
