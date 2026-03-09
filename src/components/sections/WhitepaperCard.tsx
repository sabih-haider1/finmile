'use client';

import Image from 'next/image';
import { useState } from 'react';

interface WhitepaperCardProps {
  title: string;
  summary: string;
  coverImageUrl: string;
  slug: string;
  pdfUrl?: string;
}

export function WhitepaperCard({
  title,
  summary,
  coverImageUrl,
  slug,
  pdfUrl
}: WhitepaperCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-sm shadow-gray-200/60 hover:shadow-xl hover:shadow-indigo-100/40 hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col">
      {/* Cover Image */}
      <div className="relative w-full h-52 bg-gradient-to-br from-purple-100 to-indigo-100 overflow-hidden">
        {!imageError && coverImageUrl ? (
          <Image
            src={coverImageUrl}
            alt={title}
            fill
            className="object-cover"
            onError={() => setImageError(true)}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center text-gray-400">
              <div className="text-4xl mb-2">📄</div>
              <div className="text-sm font-medium">Whitepaper</div>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col gap-3 flex-1">
        {/* Title */}
        <h3 className="text-lg font-semibold text-[#1C1F4A] leading-snug">
          {title}
        </h3>

        {/* Summary */}
        <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
          {summary}
        </p>

        {/* Action Links */}
        <div className="flex items-center gap-6 mt-auto pt-2">
          <a
            href={`/whitepapers/${slug}`}
            className="text-sm font-medium text-[#5B52F3] hover:text-[#4338CA] transition-colors"
          >
            Read Summary
          </a>
          
          {pdfUrl && (
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="text-sm font-medium text-[#5B52F3] hover:text-[#4338CA] transition-colors"
            >
              Download PDF
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

// Skeleton loader for loading state
export function WhitepaperCardSkeleton() {
  return (
    <div className="animate-pulse bg-white rounded-2xl p-6 space-y-4">
      <div className="h-52 w-full bg-gray-200 rounded" />
      <div className="h-6 bg-gray-200 rounded w-3/4" />
      <div className="space-y-2">
        <div className="h-4 bg-gray-200 rounded w-full" />
        <div className="h-4 bg-gray-200 rounded w-5/6" />
      </div>
      <div className="flex gap-4">
        <div className="h-4 bg-gray-200 rounded w-24" />
        <div className="h-4 bg-gray-200 rounded w-28" />
      </div>
    </div>
  );
}

