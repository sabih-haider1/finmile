import Image from 'next/image';
import { EditorJsBlock, EditorJsSection } from '@/types/content';
import { stripHtmlTags } from '@/lib/editorjs';

interface EditorJsSectionProps {
  section: EditorJsSection;
  className?: string;
}

function renderBlock(block: EditorJsBlock, index: number) {
  const key = `${block.type}-${index}`;

  switch (block.type) {
    case 'header': {
      const text = stripHtmlTags(block.data.text || '');

      if (!text) {
        return null;
      }

      if (block.data.level === 1) {
        return (
          <h1 key={key} className="text-3xl md:text-4xl font-bold text-[#2D126B] mt-8 first:mt-0">
            {text}
          </h1>
        );
      }

      if (block.data.level === 2) {
        return (
          <h2 key={key} className="text-2xl md:text-3xl font-bold text-[#2D126B] mt-8 first:mt-0">
            {text}
          </h2>
        );
      }

      if (block.data.level === 3) {
        return (
          <h3 key={key} className="text-xl md:text-2xl font-semibold text-[#2D126B] mt-7 first:mt-0">
            {text}
          </h3>
        );
      }

      return (
        <h4 key={key} className="text-lg md:text-xl font-semibold text-[#2D126B] mt-6 first:mt-0">
          {text}
        </h4>
      );
    }

    case 'paragraph': {
      const text = stripHtmlTags(block.data.text || '');
      if (!text) {
        return null;
      }

      return (
        <p key={key} className="text-gray-700 leading-relaxed text-base md:text-lg">
          {text}
        </p>
      );
    }

    case 'list': {
      const items = Array.isArray(block.data.items)
        ? block.data.items.map((item) => stripHtmlTags(item)).filter(Boolean)
        : [];

      if (items.length === 0) {
        return null;
      }

      if (block.data.style === 'ordered') {
        return (
          <ol key={key} className="list-decimal pl-6 space-y-2 text-gray-700">
            {items.map((item, itemIndex) => (
              <li key={`${key}-${itemIndex}`}>{item}</li>
            ))}
          </ol>
        );
      }

      return (
        <ul key={key} className="list-disc pl-6 space-y-2 text-gray-700">
          {items.map((item, itemIndex) => (
            <li key={`${key}-${itemIndex}`}>{item}</li>
          ))}
        </ul>
      );
    }

    case 'table': {
      const rows = Array.isArray(block.data.content) ? block.data.content : [];

      if (rows.length === 0) {
        return null;
      }

      const hasHeadings = !!block.data.withHeadings;
      const headingRow = hasHeadings ? rows[0] || [] : [];
      const bodyRows = hasHeadings ? rows.slice(1) : rows;

      return (
        <div key={key} className="overflow-x-auto rounded-2xl border border-[#E6D9FF]">
          <table className="min-w-full border-collapse bg-white">
            {hasHeadings && (
              <thead className="bg-[#2F1C8C]">
                <tr>
                  {headingRow.map((cell, cellIndex) => (
                    <th
                      key={`${key}-head-${cellIndex}`}
                      className="border-b border-[#4A34A6] px-4 py-3 text-left text-sm font-semibold text-white"
                    >
                      {stripHtmlTags(cell || '')}
                    </th>
                  ))}
                </tr>
              </thead>
            )}
            <tbody>
              {bodyRows.map((row, rowIndex) => (
                <tr key={`${key}-row-${rowIndex}`} className="even:bg-[#FCFAFF]">
                  {row.map((cell, cellIndex) => (
                    <td
                      key={`${key}-cell-${rowIndex}-${cellIndex}`}
                      className="border-b border-[#F0E7FF] px-4 py-3 text-sm text-gray-700"
                    >
                      {stripHtmlTags(cell || '')}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }

    case 'quote': {
      const text = stripHtmlTags(block.data.text || '');
      if (!text) {
        return null;
      }

      return (
        <figure key={key} className="rounded-2xl border border-[#E6D9FF] bg-[#FBF8FF] px-6 py-5">
          <blockquote className="text-lg italic text-[#2D126B] leading-relaxed">
            {text}
          </blockquote>
          {block.data.caption && (
            <figcaption className="mt-3 text-sm text-[#6A27D4]">
              {stripHtmlTags(block.data.caption)}
            </figcaption>
          )}
        </figure>
      );
    }

    case 'image': {
      const src = block.data.file?.url;
      if (!src) {
        return null;
      }

      return (
        <figure key={key} className="space-y-3">
          <div className="overflow-hidden rounded-2xl border border-[#E6D9FF] bg-white">
            <Image
              src={src}
              alt={stripHtmlTags(block.data.caption || 'Section image')}
              width={1200}
              height={700}
              unoptimized
              className="h-auto w-full object-cover"
            />
          </div>
          {block.data.caption && (
            <figcaption className="text-sm text-gray-500">
              {stripHtmlTags(block.data.caption)}
            </figcaption>
          )}
        </figure>
      );
    }

    default:
      return null;
  }
}

export function EditorJsSectionRenderer({ section, className = '' }: EditorJsSectionProps) {
  return (
    <section className={`space-y-5 ${className}`}>
      {section.blocks.map((block, index) => renderBlock(block, index))}
    </section>
  );
}
