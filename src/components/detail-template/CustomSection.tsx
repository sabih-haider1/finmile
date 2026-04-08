import { ContentSectionData } from '@/types/content';
import { sanitizeRichHtml } from '@/lib/security';

interface CustomSectionProps {
  data: ContentSectionData;
  className?: string;
  sectionId: string;
}

export function CustomSection({ data, className = '', sectionId }: CustomSectionProps) {
  const html = sanitizeRichHtml(data.html || data.custom_html || data.body || '');
  const css = data.css || data.custom_css;

  if (!html && !css) {
    return null;
  }

  const scopeClass = `custom-section-${sectionId}`;

  return (
    <section className={`w-full my-12 md:my-16 ${className}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className={`relative overflow-hidden rounded-3xl border border-[#E6D9FF] bg-white shadow-[0_10px_32px_rgba(106,39,212,0.08)] ${scopeClass}`}>
          {data.title && (
            <div className="border-b border-[#F0E7FF] px-6 py-5 md:px-8 md:py-6">
              <h2 className="text-2xl md:text-3xl font-bold text-[#2D126B]">
                {data.title}
              </h2>
            </div>
          )}

          {css && (
            <style
              dangerouslySetInnerHTML={{
                __html: `.${scopeClass} { position: relative; }\n${css}`,
              }}
            />
          )}

          <div
            className="custom-section-content px-6 py-6 md:px-8 md:py-8"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </section>
  );
}