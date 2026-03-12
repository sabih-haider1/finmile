'use client';

import { Search, X } from 'lucide-react';
import { useState } from 'react';

interface SimpleSearchBarProps {
  onSearchChange: (query: string) => void;
  placeholder?: string;
}

export function SimpleSearchBar({
  onSearchChange,
  placeholder = "Search..."
}: SimpleSearchBarProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    onSearchChange(value);
  };

  const clearSearch = () => {
    setSearchQuery('');
    onSearchChange('');
  };

  return (
    <div className="bg-gray-50 py-8 px-6 md:px-12 xl:px-20 border-b border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
            <Search className="w-5 h-5" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder={placeholder}
            className="w-full pl-12 pr-12 py-4 bg-white border border-gray-200 rounded-xl text-[15px] text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5B52F3] focus:border-transparent transition-all"
          />
          {searchQuery && (
            <button
              onClick={clearSearch}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
