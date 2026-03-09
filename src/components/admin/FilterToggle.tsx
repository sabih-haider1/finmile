'use client';

import React from 'react';

interface FilterToggleProps {
  label: string;
  value: boolean | null;
  onChange: (value: boolean | null) => void;
}

export default function FilterToggle({ label, value, onChange }: FilterToggleProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-white/60">{label}:</span>
      <div className="flex gap-2">
        <button
          onClick={() => onChange(null)}
          className={`px-3 py-1 text-sm rounded-lg transition-all ${
            value === null
              ? 'bg-[#6A27D4] text-white'
              : 'bg-white/10 text-white/60 hover:bg-white/20'
          }`}
        >
          All
        </button>
        <button
          onClick={() => onChange(true)}
          className={`px-3 py-1 text-sm rounded-lg transition-all ${
            value === true
              ? 'bg-[#6A27D4] text-white'
              : 'bg-white/10 text-white/60 hover:bg-white/20'
          }`}
        >
          Yes
        </button>
        <button
          onClick={() => onChange(false)}
          className={`px-3 py-1 text-sm rounded-lg transition-all ${
            value === false
              ? 'bg-[#6A27D4] text-white'
              : 'bg-white/10 text-white/60 hover:bg-white/20'
          }`}
        >
          No
        </button>
      </div>
    </div>
  );
}
