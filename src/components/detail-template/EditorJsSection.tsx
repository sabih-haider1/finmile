import Image from 'next/image';
import type { EditorJsBlock, EditorJsSection } from '@/types/content';
import { sanitizeRichHtml } from '@/lib/security';

interface EditorJsSectionProps {
  section: EditorJsSection;
  className?: string;
}

const wrapperClassName = 'mx-auto w-full max-w-[820px] rounded-3xl border border-[#E6D9FF] bg-white px-6 py-6 shadow-[0_10px_32px_rgba(106,39,212,0.08)] md:px-8 md:py-8';

const headingClassNames = {
  1: 'mb-4 text-4xl font-bold leading-[1.08] tracking-tight text-[#2D126B] md:text-5xl',
  2: 'mb-4 text-3xl font-bold leading-[1.1] tracking-tight text-[#2D126B] md:text-4xl',
  3: 'mb-3 text-2xl font-semibold leading-[1.15] tracking-tight text-[#2D126B] md:text-3xl',
  4: 'mb-3 text-xl font-semibold leading-[1.2] tracking-tight text-[#2D126B] md:text-2xl',
} as const;

function HeadingBlock({ block, index }: { block: Extract<EditorJsBlock, { type: 'header' }>; index: number }) {
  const text = block.data.text || '';
  if (!text) return null;

  const level = block.data.level || 2;
  const Tag = level === 1 ? 'h1' : level === 2 ? 'h2' : level === 3 ? 'h3' : 'h4';
  const className = headingClassNames[level as 1 | 2 | 3 | 4] || headingClassNames[2];

  return <Tag key={`header-${index}`} className={className} dangerouslySetInnerHTML={{ __html: sanitizeRichHtml(text) }} />;
}

function ParagraphBlock({ block, index }: { block: Extract<EditorJsBlock, { type: 'paragraph' }>; index: number }) {
  const text = block.data.text || '';
  if (!text) return null;

  return (
    <p
      key={`paragraph-${index}`}
      className="text-[16px] leading-7 text-[#4b5563]"
      dangerouslySetInnerHTML={{ __html: sanitizeRichHtml(text) }}
    />
  );
}

function ListBlock({ block, index }: { block: Extract<EditorJsBlock, { type: 'list' }>; index: number }) {
  const items = (block.data.items || [])
    .map((item) => {
      if (item && typeof item === 'object' && 'content' in item) {
        return String((item as { content?: unknown }).content || '');
      }
      return String(item || '');
    })
    .filter(Boolean);

  if (items.length === 0) return null;

  const ListTag = block.data.style === 'ordered' ? 'ol' : 'ul';

  return (
    <ListTag
      key={`list-${index}`}
      className={
        block.data.style === 'ordered'
          ? 'list-decimal space-y-3 pl-6 text-[#4b5563] marker:text-[#3a1d9e]'
          : 'list-disc space-y-3 pl-6 text-[#4b5563] marker:text-[#3a1d9e]'
      }
    >
      {items.map((item, itemIndex) => (
        <li key={`list-${index}-${itemIndex}`} className="pl-1 leading-7" dangerouslySetInnerHTML={{ __html: sanitizeRichHtml(item) }} />
      ))}
    </ListTag>
  );
}

function TableBlock({ block, index }: { block: Extract<EditorJsBlock, { type: 'table' }>; index: number }) {
  const rows = block.data.content || [];
  if (rows.length === 0) return null;

  const [headRow, ...bodyRows] = rows;
  const showHeadings = block.data.withHeadings && headRow;

  return (
    <div key={`table-${index}`} className="my-8 overflow-x-auto rounded-3xl border border-[#E6D9FF] bg-[#FCFBFF] shadow-[0_10px_32px_rgba(106,39,212,0.08)]">
      <table className="w-full border-collapse text-left text-sm text-[#4b5563]">
        {showHeadings && (
          <thead className="bg-[#2f1c8c]">
            <tr>
              {headRow.map((cell, cellIndex) => (
                <th
                  key={`table-head-${index}-${cellIndex}`}
                  className="border-b border-[#E6D9FF] px-4 py-3 font-semibold text-white"
                  dangerouslySetInnerHTML={{ __html: sanitizeRichHtml(cell || '') }}
                />
              ))}
            </tr>
          </thead>
        )}
        <tbody>
          {(showHeadings ? bodyRows : rows).map((row, rowIndex) => (
            <tr key={`table-row-${index}-${rowIndex}`} className="border-b border-[#EEE7FF] even:bg-white last:border-b-0">
              {row.map((cell, cellIndex) => (
                <td
                  key={`table-cell-${index}-${rowIndex}-${cellIndex}`}
                  className="border-r border-[#EEE7FF] px-4 py-3 align-top last:border-r-0"
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

function QuoteBlock({ block, index }: { block: Extract<EditorJsBlock, { type: 'quote' }>; index: number }) {
  const text = block.data.text || '';
  if (!text) return null;

  const caption = block.data.caption || '';
  const alignment = block.data.alignment === 'center' ? 'text-center' : 'text-left';

  return (
    <figure key={`quote-${index}`} className={`my-8 rounded-3xl border border-[#E6D9FF] bg-[#FBF8FF] px-5 py-5 ${alignment}`}>
      <blockquote
        className="text-[17px] leading-8 text-[#111827] italic"
        dangerouslySetInnerHTML={{ __html: sanitizeRichHtml(text) }}
      />
      {caption && (
        <figcaption className="mt-3 text-sm font-semibold text-[#4b5563]" dangerouslySetInnerHTML={{ __html: sanitizeRichHtml(caption) }} />
      )}
    </figure>
  );
}

function ImageBlock({ block, index }: { block: Extract<EditorJsBlock, { type: 'image' }>; index: number }) {
  const url = block.data.file?.url;
  if (!url) return null;

  const caption = block.data.caption || '';

  return (
    <figure key={`image-${index}`} className="my-8 space-y-3">
      <Image
        src={url}
        alt={caption || 'Content image'}
        width={1200}
        height={800}
        sizes="100vw"
        className="block h-auto w-full rounded-3xl border border-[#E6D9FF] shadow-[0_10px_32px_rgba(106,39,212,0.08)]"
      />
      {caption && <figcaption className="text-center text-sm text-[#6b7280]" dangerouslySetInnerHTML={{ __html: sanitizeRichHtml(caption) }} />}
    </figure>
  );
}

function renderBlock(block: EditorJsBlock, index: number) {
  switch (block.type) {
    case 'header':
      return <HeadingBlock block={block} index={index} />;
    case 'paragraph':
      return <ParagraphBlock block={block} index={index} />;
    case 'list':
      return <ListBlock block={block} index={index} />;
    case 'table':
      return <TableBlock block={block} index={index} />;
    case 'quote':
      return <QuoteBlock block={block} index={index} />;
    case 'image':
      return <ImageBlock block={block} index={index} />;
    default:
      return null;
  }
}

export function EditorJsSection({ section, className = '' }: EditorJsSectionProps) {
  if (!section.blocks || section.blocks.length === 0) {
    return null;
  }

  return (
    <div className={`${wrapperClassName} space-y-8 ${className}`}>
      {section.blocks.map((block, index) => renderBlock(block, index))}
    </div>
  );
}
