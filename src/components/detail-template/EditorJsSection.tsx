import type { EditorJsBlock, EditorJsSection } from '@/types/content';
import { sanitizeRichHtml } from '@/lib/security';

interface EditorJsSectionProps {
  section: EditorJsSection;
  className?: string;
}

function renderBlock(block: EditorJsBlock, index: number) {
  const key = `${block.type}-${index}`;

  switch (block.type) {
    case 'header': {
      const text = block.data.text || '';
      if (!text) return null;
      
      const level = block.data.level || 2;
      const Tag = level === 1 ? 'h1' : level === 2 ? 'h2' : level === 3 ? 'h3' : 'h4';
      const className = level === 1
        ? 'text-3xl md:text-4xl font-bold text-[#2D126B]'
        : level === 2
          ? 'text-2xl md:text-3xl font-bold text-[#2D126B]'
          : level === 3
            ? 'text-xl md:text-2xl font-semibold text-[#2D126B]'
            : 'text-lg md:text-xl font-semibold text-[#2D126B]';

      return (
        <Tag 
          key={key} 
          className={className}
          dangerouslySetInnerHTML={{ __html: sanitizeRichHtml(text) }}
        />
      );
    }
    case 'paragraph': {
      const text = block.data.text || '';
      if (!text) return null;
      
      return (
        <p 
          key={key} 
          className="text-gray-700 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: sanitizeRichHtml(text) }}
        />
      );
    }
    case 'list': {
      const items = (block.data.items || []).map((item) => {
        if (item && typeof item === 'object' && 'content' in item) {
          return String((item as { content?: unknown }).content || '');
        }
        return String(item || '');
      }).filter(Boolean);

      if (items.length === 0) return null;

      const ListTag = block.data.style === 'ordered' ? 'ol' : 'ul';
      return (
        <ListTag
          key={key}
          className={block.data.style === 'ordered' ? 'list-decimal pl-6 space-y-2' : 'list-disc pl-6 space-y-2'}
        >
          {items.map((item, itemIndex) => (
            <li 
              key={`${key}-${itemIndex}`} 
              className="text-gray-700"
              dangerouslySetInnerHTML={{ __html: sanitizeRichHtml(item) }}
            />
          ))}
        </ListTag>
      );
    }
    case 'table': {
      const rows = block.data.content || [];
      if (rows.length === 0) return null;
      
      const [headRow, ...bodyRows] = rows;
      const showHeadings = block.data.withHeadings && headRow;

      return (
        <div key={key} className="overflow-x-auto my-6">
          <table className="w-full text-left border-collapse">
            {showHeadings && (
              <thead>
                <tr>
                  {headRow.map((cell, cellIndex) => (
                    <th
                      key={`table-head-${cellIndex}`}
                      className="border-b border-gray-200 pb-3 text-sm font-semibold text-[#2D126B]"
                      dangerouslySetInnerHTML={{ __html: sanitizeRichHtml(cell || '') }}
                    />
                  ))}
                </tr>
              </thead>
            )}
            <tbody>
              {(showHeadings ? bodyRows : rows).map((row, rowIndex) => (
                <tr key={`table-row-${rowIndex}`} className="border-b border-gray-100 last:border-b-0">
                  {row.map((cell, cellIndex) => (
                    <td 
                      key={`table-cell-${rowIndex}-${cellIndex}`} 
                      className="py-3 pr-4 text-sm text-gray-700"
                      dangerouslySetInnerHTML={{ __html: sanitizeRichHtml(cell || '') }}
                    />
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
    case 'quote': {
      const text = block.data.text || '';
      if (!text) return null;
      
      const caption = block.data.caption || '';
      const alignment = block.data.alignment === 'center' ? 'text-center' : 'text-left';

      return (
        <figure key={key} className={`border-l-4 border-[#6A27D4] pl-4 my-8 ${alignment}`}>
          <blockquote 
            className="text-lg text-gray-700 italic"
            dangerouslySetInnerHTML={{ __html: sanitizeRichHtml(text) }}
          />
          {caption && (
            <figcaption 
              className="mt-2 text-sm font-semibold text-[#2D126B]"
              dangerouslySetInnerHTML={{ __html: sanitizeRichHtml(caption) }}
            />
          )}
        </figure>
      );
    }
    case 'image': {
      const url = block.data.file?.url;
      if (!url) return null;
      
      const caption = block.data.caption || '';

      return (
        <figure key={key} className="space-y-3 my-8">
          <img src={url} alt={caption || 'Content image'} className="w-full rounded-2xl shadow-md" />
          {caption && (
            <figcaption 
              className="text-sm text-gray-500 text-center"
              dangerouslySetInnerHTML={{ __html: sanitizeRichHtml(caption) }}
            />
          )}
        </figure>
      );
    }
    default:
      return null;
  }
}

export function EditorJsSection({ section, className = '' }: EditorJsSectionProps) {
  if (!section.blocks || section.blocks.length === 0) {
    return null;
  }

  return (
    <div className={`space-y-6 ${className}`}>
      {section.blocks.map((block, index) => renderBlock(block, index))}
    </div>
  );
}
