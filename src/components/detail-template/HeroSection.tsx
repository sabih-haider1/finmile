import Image from 'next/image';
import { ContentHero } from '@/types/content';
import { Calendar, Clock } from 'lucide-react';

interface HeroSectionProps {
  hero: ContentHero;
}

export function HeroSection({ hero }: HeroSectionProps) {
  const readTime = hero.metadata?.read_time || '10 minutes read';
  const publishDate = hero.metadata?.published_date;
  const isExternalImage = /^https?:\/\//i.test(hero.image_url || '');

  return (
    <section className="w-full bg-[#fcfcff] pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image - Left column */}
          {hero.image_url && (
            <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-sm">
              <Image
                src={hero.image_url}
                alt={hero.title}
                fill
                unoptimized={isExternalImage}
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          )}

          {/* Text content - Right column */}
          <div className="flex flex-col">
            {/* Metadata at the top */}
            <div className="flex flex-wrap gap-6 text-sm font-medium text-gray-500 mb-6">
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
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-[#2D126B] leading-[1.1] mb-8">
              {hero.title}
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
              {hero.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
