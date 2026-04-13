'use client';

import Image from 'next/image';
import { useState } from 'react';

interface WhitepaperCardProps {
  title: string;
  summary: string;
  coverImageUrl: string;
  slug: string;
  pdfUrl?: string;
  author?: string | null;
  publishedDate?: string | null;
}

export function WhitepaperCard({
  title,
  summary,
  coverImageUrl,
  slug,
  pdfUrl,
  author,
  publishedDate,
}: WhitepaperCardProps) {
  const [imageError, setImageError] = useState(false);
  const isExternalImage = /^https?:\/\//i.test(coverImageUrl);

  return (
    <div className="bg-white rounded-2xl shadow-sm shadow-gray-200/60 hover:shadow-xl hover:shadow-indigo-100/40 hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col">
      {/* Cover Image */}
      <div className="relative w-full aspect-[384/260] bg-gradient-to-br from-purple-100 to-indigo-100 overflow-hidden rounded-[16px]">
        {!imageError && coverImageUrl ? (
          <Image
            src={coverImageUrl}
            alt={title}
            fill
            unoptimized={isExternalImage}
            className="object-cover rounded-[16px]"
            onError={() => setImageError(true)}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center rounded-[16px]">
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

        {(author || publishedDate) && (
          <div className="flex flex-col gap-1 text-xs text-gray-500">
            {author && <p>Author: {author}</p>}
            {publishedDate && (
              <p>
                Published: {new Date(publishedDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}
              </p>
            )}
          </div>
        )}

        {/* Action Links */}
        <div className="flex items-center gap-6 mt-auto pt-2">
          <a
            href={`/whitepapers/${slug}`}
            className="text-sm font-medium text-[#6A27D4] hover:text-[#6A27E4] transition-colors"
          >
            Read Summary →
          </a>

          {pdfUrl && (
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="text-sm font-medium text-[#6A27D4] hover:text-[#6A27E4] transition-colors"
            >
              Download PDF →
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
      <div className="aspect-[384/260] w-full bg-gray-200 rounded-[16px]" />
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

