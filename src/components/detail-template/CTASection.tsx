import Link from 'next/link';
import { ContentSectionData } from '@/types/content';

interface CTASectionProps {
  data: ContentSectionData;
  className?: string;
}

export function CTASection({ data, className = '' }: CTASectionProps) {
  if (!data.cta_title) {
    return null;
  }

  const { cta_title, cta_points = [], cta_button } = data;

  return (
    <section className={`w-full my-12 md:my-16 ${className}`}>
      <div className="container mx-auto px-4 md:px-6">
        {/* Full-width CTA card with high contrast background */}
        <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 md:p-12 overflow-hidden">
          {/* Background pattern for visual interest */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-2xl">
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-balance">
              {cta_title}
            </h2>

            {/* Support bullet points */}
            {cta_points.length > 0 && (
              <ul className="space-y-3 mb-8">
                {cta_points.map((point, idx) => (
                  <li key={idx} className="flex gap-3 text-white text-base md:text-lg">
                    <span className="text-green-300 font-bold">✓</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Primary button */}
            {cta_button && (
              <Link
                href={cta_button.url}
                className="inline-flex items-center justify-center whitespace-nowrap rounded-[40px] transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 font-semibold tracking-wide w-[200px] h-[48px] text-[14px] px-6 bg-white text-[#4F2ACF] hover:text-[#34148F] shadow-[0_8px_24px_rgba(255,255,255,0.35)] hover:shadow-[0_12px_30px_rgba(255,255,255,0.5)]"
              >
                {cta_button.label}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
