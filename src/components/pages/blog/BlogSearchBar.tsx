'use client';

import { Search, X, ChevronDown } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { TOPICS, INDUSTRIES } from '@/lib/filterConstants';

interface BlogSearchBarProps {
  onSearchChange: (query: string) => void;
  onTopicChange: (topic: string | null) => void;
  onIndustryChange: (industry: string | null) => void;
  onSortChange: (sort: 'newest' | 'oldest' | 'featured') => void;
  selectedTopic: string | null;
  selectedIndustry: string | null;
  currentSort: 'newest' | 'oldest' | 'featured';
}

export function BlogSearchBar({
  onSearchChange,
  onTopicChange,
  onIndustryChange,
  onSortChange,
  selectedTopic,
  selectedIndustry,
  currentSort,
}: BlogSearchBarProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [showTopicDropdown, setShowTopicDropdown] = useState(false);
  const [showIndustryDropdown, setShowIndustryDropdown] = useState(false);
  const [showSortDropdown, setShowSortDropdown] = useState(false);

  const topicRef = useRef<HTMLDivElement>(null);
  const industryRef = useRef<HTMLDivElement>(null);
  const sortRef = useRef<HTMLDivElement>(null);

  // Debounced search
  useEffect(() => {
    const timer = setTimeout(() => {
      onSearchChange(searchQuery);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchQuery, onSearchChange]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (topicRef.current && !topicRef.current.contains(event.target as Node)) {
        setShowTopicDropdown(false);
      }
      if (industryRef.current && !industryRef.current.contains(event.target as Node)) {
        setShowIndustryDropdown(false);
      }
      if (sortRef.current && !sortRef.current.contains(event.target as Node)) {
        setShowSortDropdown(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getSortLabel = () => {
    switch (currentSort) {
      case 'newest': return 'Newest';
      case 'oldest': return 'Oldest';
      case 'featured': return 'Featured';
    }
  };

  return (
    <div className="bg-[#F6F7FB] py-16 px-6 md:px-12 xl:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header Row */}
        <div className="flex justify-between items-center flex-wrap gap-4 mb-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#2F1C8C]">
            Search Blog Posts
          </h2>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3">
            {/* Topic Filter */}
            <div className="relative" ref={topicRef}>
              <button
                onClick={() => setShowTopicDropdown(!showTopicDropdown)}
                className={`flex items-center gap-2 h-11 px-5 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedTopic
                    ? 'bg-gradient-to-r from-[#2F1C8C] to-[#2F1C8C] text-white shadow-md shadow-indigo-200/50 hover:shadow-lg hover:-translate-y-[1px] active:translate-y-0'
                    : 'bg-white text-gray-700 border border-gray-300 hover:border-[#7C3AED]'
                }`}
              >
                {selectedTopic || 'Select Topic'}
                {selectedTopic ? (
                  <X
                    size={16}
                    onClick={(e) => {
                      e.stopPropagation();
                      onTopicChange(null);
                      setShowTopicDropdown(false);
                    }}
                    className="text-white/80 hover:text-white transition-transform"
                  />
                ) : (
                  <ChevronDown size={16} />
                )}
              </button>

              {showTopicDropdown && (
                <div className="absolute top-full mt-2 left-0 bg-white rounded-xl shadow-xl border border-gray-200 py-2 z-50 min-w-[200px] max-h-[300px] overflow-y-auto">
                  {TOPICS.map((topic) => (
                    <button
                      key={topic}
                      onClick={() => {
                        onTopicChange(topic);
                        setShowTopicDropdown(false);
                      }}
                      className="w-full text-left px-4 py-2.5 hover:bg-purple-50 text-gray-700 hover:text-[#7C3AED] transition-colors"
                    >
                      {topic}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Industry Filter */}
            <div className="relative" ref={industryRef}>
              <button
                onClick={() => setShowIndustryDropdown(!showIndustryDropdown)}
                className={`flex items-center gap-2 h-11 px-5 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedIndustry
                    ? 'bg-gradient-to-r from-[#2F1C8C] to-[#2F1C8C] text-white shadow-md shadow-indigo-200/50 hover:shadow-lg hover:-translate-y-[1px] active:translate-y-0'
                    : 'bg-white text-gray-700 border border-gray-300 hover:border-[#7C3AED]'
                }`}
              >
                {selectedIndustry || 'Select Industry'}
                {selectedIndustry ? (
                  <X
                    size={16}
                    onClick={(e) => {
                      e.stopPropagation();
                      onIndustryChange(null);
                      setShowIndustryDropdown(false);
                    }}
                    className="text-white/80 hover:text-white transition-transform"
                  />
                ) : (
                  <ChevronDown size={16} />
                )}
              </button>

              {showIndustryDropdown && (
                <div className="absolute top-full mt-2 left-0 bg-white rounded-xl shadow-xl border border-gray-200 py-2 z-50 min-w-[200px] max-h-[300px] overflow-y-auto">
                  {INDUSTRIES.map((industry) => (
                    <button
                      key={industry}
                      onClick={() => {
                        onIndustryChange(industry);
                        setShowIndustryDropdown(false);
                      }}
                      className="w-full text-left px-4 py-2.5 hover:bg-purple-50 text-gray-700 hover:text-[#7C3AED] transition-colors"
                    >
                      {industry}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Search Bar Row */}
        <div className="flex items-center gap-4 flex-wrap">
          {/* Search Input */}
          <div className="relative flex-1 min-w-[280px]">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" size={20} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search blog posts by title, topic, or keyword..."
              className="w-full h-12 pl-12 pr-4 rounded-full bg-[#EEF1F7] border border-transparent focus:border-[#6C63FF] focus:ring-2 focus:ring-[#6C63FF]/20 outline-none text-sm text-gray-900 placeholder:text-gray-400 transition-all"
            />
          </div>

          {/* Sort Dropdown */}
          <div className="relative lg:w-48" ref={sortRef}>
            <button
              onClick={() => setShowSortDropdown(!showSortDropdown)}
              className="w-full flex items-center justify-between gap-2 h-11 px-5 rounded-full bg-white border border-gray-200 text-sm text-gray-600 hover:border-gray-300 hover:shadow-sm transition-all"
            >
              <span>Sort by: {getSortLabel()}</span>
              <ChevronDown size={16} />
            </button>

            {showSortDropdown && (
              <div className="absolute top-full mt-2 right-0 bg-white rounded-xl shadow-xl border border-gray-200 py-2 z-50 w-full">
                <button
                  onClick={() => { onSortChange('newest'); setShowSortDropdown(false); }}
                  className="w-full text-left px-4 py-2.5 hover:bg-purple-50 text-gray-700 hover:text-[#7C3AED] transition-colors"
                >
                  Newest
                </button>
                <button
                  onClick={() => { onSortChange('oldest'); setShowSortDropdown(false); }}
                  className="w-full text-left px-4 py-2.5 hover:bg-purple-50 text-gray-700 hover:text-[#7C3AED] transition-colors"
                >
                  Oldest
                </button>
                <button
                  onClick={() => { onSortChange('featured'); setShowSortDropdown(false); }}
                  className="w-full text-left px-4 py-2.5 hover:bg-purple-50 text-gray-700 hover:text-[#7C3AED] transition-colors"
                >
                  Featured
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
