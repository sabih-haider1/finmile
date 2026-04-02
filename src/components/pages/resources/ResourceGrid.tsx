'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { supabase } from '@/supabaseClient';
import { ResourceSearchBar } from './ResourceSearchBar';

interface Resource {
  id: string;
  title: string;
  slug: string;
  description: string;
  file_url: string;
  file_type: 'pdf' | 'docx' | 'xlsx' | 'zip';
  thumbnail_url: string | null;
  topic: string | null;
  industry: string | null;
  is_published: boolean;
  is_featured: boolean;
  created_at: string;
}

function ResourceCard({ resource }: { resource: Resource }) {
  const [imageError, setImageError] = useState(false);

  return (
    <article className="bg-white rounded-2xl shadow-sm shadow-gray-200/60 hover:shadow-xl hover:shadow-indigo-100/40 hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col">
      <div className="relative w-full aspect-[384/260] bg-gradient-to-br from-purple-100 to-indigo-100 overflow-hidden">
        {!imageError && resource.thumbnail_url ? (
          <Image
            src={resource.thumbnail_url}
            alt={resource.title}
            fill
            className="object-cover"
            onError={() => setImageError(true)}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-gray-400">
              <div className="text-4xl mb-2">📁</div>
              <div className="text-sm font-medium">{resource.file_type.toUpperCase()}</div>
            </div>
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col gap-3 flex-1">
        <span className="text-xs font-semibold text-[#5B52F3] uppercase tracking-wider">
          {resource.industry || resource.topic || 'Resource'}
        </span>
        <h3 className="text-lg font-semibold text-[#1C1F4A] leading-snug">
          {resource.title}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
          {resource.description}
        </p>
        <div className="mt-auto pt-2 flex items-center gap-4">
          <Link
            href={`/resources/${resource.slug}`}
            className="text-sm font-medium text-[#6A27D4] hover:text-[#6A27E4] transition-colors"
          >
            Read More →
          </Link>
        </div>
      </div>
    </article>
  );
}

function ResourceCardSkeleton() {
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

export function ResourceGrid() {
  const [resources, setResources] = useState<Resource[]>([]);
  const [filteredResources, setFilteredResources] = useState<Resource[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<'newest' | 'oldest' | 'featured'>('newest');

  useEffect(() => {
    async function fetchResources() {
      setLoading(true);
      try {
        const { data, error } = await supabase
          .from('resources')
          .select('id, title, slug, description, file_url, file_type, thumbnail_url, topic, industry, is_published, is_featured, created_at')
          .eq('is_published', true);

        if (error) {
          console.error('Error fetching resources:', error);
          return;
        }

        setResources((data as Resource[]) || []);
      } catch (error) {
        console.error('Error fetching resources:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchResources();
  }, []);

  useEffect(() => {
    let filtered = [...resources];

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter((resource) => {
        return (
          resource.title.toLowerCase().includes(query) ||
          resource.description.toLowerCase().includes(query) ||
          resource.topic?.toLowerCase().includes(query) ||
          resource.industry?.toLowerCase().includes(query)
        );
      });
    }

    if (selectedTopic) {
      filtered = filtered.filter((resource) => resource.topic?.toLowerCase() === selectedTopic.toLowerCase());
    }

    if (selectedIndustry) {
      filtered = filtered.filter((resource) => resource.industry?.toLowerCase() === selectedIndustry.toLowerCase());
    }

    filtered.sort((a, b) => {
      const aDate = new Date(a.created_at).getTime();
      const bDate = new Date(b.created_at).getTime();

      if (sortBy === 'featured') {
        if (a.is_featured && !b.is_featured) return -1;
        if (!a.is_featured && b.is_featured) return 1;
      }

      return sortBy === 'oldest' ? aDate - bDate : bDate - aDate;
    });

    setFilteredResources(filtered);
  }, [resources, searchQuery, selectedTopic, selectedIndustry, sortBy]);

  return (
    <div className="bg-white">
      <ResourceSearchBar
        onSearchChange={setSearchQuery}
        onTopicChange={setSelectedTopic}
        onIndustryChange={setSelectedIndustry}
        onSortChange={setSortBy}
        selectedTopic={selectedTopic}
        selectedIndustry={selectedIndustry}
        currentSort={sortBy}
      />

      <div className="py-16 px-6 md:px-12 xl:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#2F1C8C]">
              All Resources
            </h2>
          </div>

          {loading && (
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {[...Array(6)].map((_, index) => (
                <ResourceCardSkeleton key={index} />
              ))}
            </div>
          )}

          {!loading && filteredResources.length === 0 && (
            <div className="col-span-full text-center py-16">
              <div className="text-6xl mb-4">📁</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">No resources found</h3>
              <p className="text-gray-400 text-sm">
                Try adjusting your search or filters to find what you&apos;re looking for.
              </p>
            </div>
          )}

          {!loading && filteredResources.length > 0 && (
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {filteredResources.map((resource) => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
