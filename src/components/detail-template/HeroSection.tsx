import Image from 'next/image';
import { ContentHero } from '@/types/content';
import { Calendar, Clock } from 'lucide-react';

interface HeroSectionProps {
  hero: ContentHero;
  downloadButton?: {
    url: string;
    label?: string;
  };
}

export function HeroSection({ hero, downloadButton }: HeroSectionProps) {
  const readTime = hero.metadata?.read_time || '10 minutes read';
  const publishDate = hero.metadata?.published_date;
  const isExternalImage = /^https?:\/\//i.test(hero.image_url || '');
  const hasImage = Boolean(hero.image_url);

  return (
    <section className="w-full bg-[#fcfcff] pt-20 pb-6 md:pt-16 md:pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className={hasImage ? 'grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-6 items-center' : 'flex items-center justify-center min-h-[42vh] md:min-h-[48vh]'}>
          {/* Image - Left column */}
          {hasImage && (
            <div className="relative w-full aspect-[4/3] rounded-[20px] overflow-hidden shadow-sm bg-white">
              <Image
                src={hero.image_url}
                alt={hero.title}
                fill
                unoptimized={isExternalImage}
                className="object-contain object-center"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          )}

          {/* Text content - Right column */}
          <div className={hasImage ? 'flex flex-col' : 'flex w-full flex-col items-center text-center max-w-3xl mx-auto'}>
            {/* Metadata at the top */}
            <div className={hasImage ? 'flex flex-wrap gap-4 text-sm font-medium text-gray-500 mb-4' : 'flex flex-wrap justify-center gap-4 text-sm font-medium text-gray-500 mb-4'}>
              {publishDate && (
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-gray-400" strokeWidth={1.5} />
                  <time dateTime={publishDate}>
                    {new Date(publishDate).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                </div>
              )}
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-gray-400" strokeWidth={1.5} />
                <span>{readTime}</span>
              </div>
            </div>

            {/* Title */}
            <h1 className={hasImage ? 'text-3xl md:text-5xl lg:text-5xl font-bold text-[#2D126B] leading-[1.1] mb-6' : 'text-3xl md:text-5xl lg:text-5xl font-bold text-[#2D126B] leading-[1.1] mb-6 max-w-3xl'}>
              {hero.title}
            </h1>

            {/* Description */}
            <p className={hasImage ? 'text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl' : 'text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl'}>
              {hero.description}
            </p>

            {downloadButton?.url && (
              <div className="mt-4">
                <a
                  href={downloadButton.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#2F1C8C] text-white font-semibold text-sm hover:bg-[#4A2FC2] transition-colors"
                >
                  {downloadButton.label || 'Download PDF'}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
