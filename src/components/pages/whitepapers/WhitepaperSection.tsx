'use client';

import { useState } from 'react';
import { WhitepaperSearchBar } from './WhitepaperSearchBar';
import { WhitepaperGrid } from './WhitepaperGrid';

export function WhitepaperSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<'newest' | 'oldest' | 'featured'>('newest');

  return (
    <>
      <WhitepaperSearchBar
        onSearchChange={setSearchQuery}
        onTopicChange={setSelectedTopic}
        onIndustryChange={setSelectedIndustry}
        onSortChange={setSortBy}
        selectedTopic={selectedTopic}
        selectedIndustry={selectedIndustry}
        currentSort={sortBy}
      />
      <WhitepaperGrid
        searchQuery={searchQuery}
        selectedTopic={selectedTopic}
        selectedIndustry={selectedIndustry}
        sortBy={sortBy}
      />
    </>
  );
}
