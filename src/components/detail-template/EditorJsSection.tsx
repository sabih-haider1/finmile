import Image from 'next/image';
import type { EditorJsBlock, EditorJsSection } from '@/types/content';
import { sanitizeRichHtml } from '@/lib/security';

interface EditorJsSectionProps {
  section: EditorJsSection;
  className?: string;
}

function HeadingBlock({ block, index }: { block: Extract<EditorJsBlock, { type: 'header' }>; index: number }) {
  const text = block.data.text || '';
  if (!text) return null;

  const level = block.data.level || 2;
  const Tag = level === 1 ? 'h1' : level === 2 ? 'h2' : level === 3 ? 'h3' : 'h4';
  const className =
    level === 1
      ? 'text-3xl md:text-4xl font-bold tracking-tight text-slate-900'
      : level === 2
        ? 'text-2xl md:text-3xl font-bold tracking-tight text-slate-900'
        : level === 3
          ? 'text-xl md:text-2xl font-semibold text-slate-900'
          : 'text-lg md:text-xl font-semibold text-slate-900';

  return <Tag key={`header-${index}`} className={className} dangerouslySetInnerHTML={{ __html: sanitizeRichHtml(text) }} />;
}

function ParagraphBlock({ block, index }: { block: Extract<EditorJsBlock, { type: 'paragraph' }>; index: number }) {
  const text = block.data.text || '';
  if (!text) return null;

  return <p key={`paragraph-${index}`} className="text-[16px] leading-7 text-slate-700" dangerouslySetInnerHTML={{ __html: sanitizeRichHtml(text) }} />;
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
      className={block.data.style === 'ordered' ? 'list-decimal space-y-3 pl-6 text-slate-700' : 'list-disc space-y-3 pl-6 text-slate-700'}
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
    <div key={`table-${index}`} className="my-8 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
      <table className="w-full border-collapse text-left text-sm text-slate-700">
        {showHeadings && (
          <thead className="bg-slate-50">
            <tr>
              {headRow.map((cell, cellIndex) => (
                <th
                  key={`table-head-${index}-${cellIndex}`}
                  className="border-b border-slate-200 px-4 py-3 font-semibold text-slate-900"
                  dangerouslySetInnerHTML={{ __html: sanitizeRichHtml(cell || '') }}
                />
              ))}
            </tr>
          </thead>
        )}
        <tbody>
          {(showHeadings ? bodyRows : rows).map((row, rowIndex) => (
            <tr key={`table-row-${index}-${rowIndex}`} className="border-b border-slate-200 even:bg-slate-50/70 last:border-b-0">
              {row.map((cell, cellIndex) => (
                <td
                  key={`table-cell-${index}-${rowIndex}-${cellIndex}`}
                  className="border-r border-slate-200 px-4 py-3 align-top last:border-r-0"
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
    <figure key={`quote-${index}`} className={`my-8 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 ${alignment}`}>
      <blockquote className="text-[17px] leading-8 text-slate-800 italic" dangerouslySetInnerHTML={{ __html: sanitizeRichHtml(text) }} />
      {caption && (
        <figcaption className="mt-3 text-sm font-semibold text-slate-600" dangerouslySetInnerHTML={{ __html: sanitizeRichHtml(caption) }} />
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
        className="block h-auto w-full rounded-2xl border border-slate-200 shadow-sm"
      />
      {caption && <figcaption className="text-center text-sm text-slate-500" dangerouslySetInnerHTML={{ __html: sanitizeRichHtml(caption) }} />}
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
    <div className={`mx-auto w-full max-w-[780px] space-y-8 ${className}`}>
      {section.blocks.map((block, index) => renderBlock(block, index))}
    </div>
  );
}
