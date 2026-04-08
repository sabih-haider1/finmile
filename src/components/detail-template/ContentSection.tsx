import { ContentSectionData } from '@/types/content';
import { sanitizeRichHtml } from '@/lib/security';

interface ContentSectionProps {
  data: ContentSectionData;
  className?: string;
}

export function ContentSection({ data, className = '' }: ContentSectionProps) {
  if (!data.body) {
    return null;
  }

  return (
    <div className={`prose max-w-none ${className}`}>
      <div
        dangerouslySetInnerHTML={{ __html: sanitizeRichHtml(data.body) }}
        className="text-gray-700 leading-relaxed prose-headings:text-[#2D126B] prose-headings:font-bold prose-h2:text-3xl prose-h3:text-2xl prose-p:text-gray-700 prose-p:mb-6 prose-li:text-gray-700 prose-a:text-[#6A27D4] prose-a:font-semibold hover:prose-a:text-[#531FD1] prose-strong:text-[#2D126B] prose-code:text-purple-600 prose-code:bg-purple-50 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-pre:bg-gray-50 prose-img:rounded-2xl prose-img:my-8 prose-img:shadow-md"
      />
    </div>
  );
}
