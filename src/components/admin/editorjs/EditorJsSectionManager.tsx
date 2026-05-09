'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  DndContext,
  type DragEndEvent,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  SortableContext,
  arrayMove,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import {
  EditorJsBlock,
  EditorJsHeaderBlock,
  EditorJsImageBlock,
  EditorJsListBlock,
  EditorJsParagraphBlock,
  EditorJsQuoteBlock,
  EditorJsSection,
  EditorJsSections,
  EditorJsTableBlock,
} from '@/types/content';
import { isValidUrl } from '@/lib/security';
import SimpleTableTool from './SimpleTableTool';

interface EditorJsSectionManagerProps {
  value?: EditorJsSections | null;
  onChange: (value: EditorJsSections) => void;
}

interface SortableSectionCardProps {
  section: EditorJsSection;
  index: number;
  onUpdateBlocks: (id: string, blocks: EditorJsBlock[]) => void;
  onUpdateTitle: (id: string, title: string) => void;
  onDelete: (id: string) => void;
}

type EditorJsInstance = {
  isReady: Promise<void>;
  destroy?: () => void;
  save: () => Promise<unknown>;
  blocks?: {
    render: (blocks: unknown) => Promise<void>;
  };
} & Record<string, unknown>;

type EditorJsConstructor = new (configuration?: unknown) => unknown;

type EditorJsTools = {
  EditorJS: EditorJsConstructor;
  Header: unknown;
  List: unknown;
  Table: unknown;
  ImageTool: unknown;
};

type EditorJsSectionRecord = {
  id: string;
  blocks: unknown[];
} & Record<string, unknown>;

function generateId(prefix: string) {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
    return `${prefix}-${crypto.randomUUID()}`;
  }

  return `${prefix}-${Math.random().toString(36).slice(2, 10)}`;
}

function ensureUniqueSectionIds(sections: EditorJsSection[]) {
  const seen = new Set<string>();
  return sections.map((s) => {
    const originalId = typeof s.id === 'string' && s.id.trim() ? s.id.trim() : undefined;
    let id = originalId || generateId('section');
    if (seen.has(id)) {
      // duplicate id detected, generate a new one
      console.warn('Duplicate section id detected, generating new id for section', id);
      id = generateId('section');
    }
    seen.add(id);
    return { ...s, id };
  });
}

function isEditorJsSectionRecord(section: unknown): section is EditorJsSectionRecord {
  if (!section || typeof section !== 'object' || Array.isArray(section)) {
    return false;
  }

  const candidate = section as Record<string, unknown>;
  return typeof candidate.id === 'string' && Array.isArray(candidate.blocks);
}

function validateSectionsShape(sections: unknown): sections is EditorJsSectionRecord[] {
  if (!Array.isArray(sections)) return false;
  return sections.every((section) => isEditorJsSectionRecord(section));
}

function stripTags(value: unknown) {
  return String(value ?? '').replace(/<[^>]*>/g, '');
}

function toPlainText(value: unknown) {
  if (typeof value === 'string') {
    return stripTags(value);
  }

  if (typeof value === 'number' || typeof value === 'boolean') {
    return String(value);
  }

  if (Array.isArray(value)) {
    return value.map((item) => toPlainText(item)).join(' ').trim();
  }

  if (value && typeof value === 'object') {
    const candidate = value as Record<string, unknown>;

    for (const key of ['text', 'content', 'html', 'value']) {
      const nestedValue = candidate[key];
      if (typeof nestedValue === 'string' || typeof nestedValue === 'number' || typeof nestedValue === 'boolean') {
        return stripTags(String(nestedValue));
      }

      if (nestedValue && typeof nestedValue === 'object') {
        const normalized = toPlainText(nestedValue).trim();
        if (normalized) {
          return normalized;
        }
      }
    }

    const fallback = Object.values(candidate)
      .map((item) => toPlainText(item))
      .join(' ')
      .trim();

    if (fallback) {
      return fallback;
    }
  }

  return '';
}

function parsePlainTextGrid(text: string) {
  const normalizedText = String(text || '').replace(/\r\n/g, '\n').replace(/\r/g, '\n').trim();
  if (!normalizedText) {
    return null;
  }

  const lines = normalizedText
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line.length > 0);

  if (lines.length === 0 || !lines.some((line) => line.includes('\t'))) {
    return null;
  }

  return lines
    .map((line) => line.split('\t').map((cell) => stripTags(cell).trim()))
    .filter((row) => row.length > 0);
}

function parseHtmlTable(html: string) {
  const markup = String(html || '').trim();
  if (!markup || !markup.toLowerCase().includes('<table')) {
    return null;
  }

  const parser = new DOMParser();
  const doc = parser.parseFromString(markup, 'text/html');
  const table = doc.querySelector('table');

  if (!table) {
    return null;
  }

  const rows = Array.from(table.querySelectorAll('tr'))
    .map((row) => Array.from(row.querySelectorAll('th,td')).map((cell) => stripTags(cell.textContent || '').trim()))
    .filter((row) => row.length > 0);

  return rows.length > 0 ? rows : null;
}

type ParsedListItem = {
  content: string;
  meta: Record<string, unknown>;
  items: ParsedListItem[];
};

function parseHtmlList(html: string): { style: 'ordered' | 'unordered'; items: ParsedListItem[] } | null {
  const markup = String(html || '').trim();
  if (!markup || !/<(ul|ol)\b/i.test(markup)) {
    return null;
  }

  const parser = new DOMParser();
  const doc = parser.parseFromString(markup, 'text/html');
  const rootList = doc.querySelector('ul,ol');

  if (!rootList) {
    return null;
  }

  const parseListElement = (listEl: Element): ParsedListItem[] => {
    return Array.from(listEl.children)
      .filter((child): child is HTMLLIElement => child.tagName.toLowerCase() === 'li')
      .map((li) => {
        const childList = Array.from(li.children).find((child) => child.tagName.toLowerCase() === 'ul' || child.tagName.toLowerCase() === 'ol');
        const clone = li.cloneNode(true) as HTMLElement;

        Array.from(clone.querySelectorAll('ul,ol')).forEach((nested) => nested.remove());

        const content = stripTags(clone.innerHTML || clone.textContent || '').replace(/\s+/g, ' ').trim();
        const items = childList ? parseListElement(childList) : [];

        if (!content && items.length === 0) {
          return null;
        }

        return {
          content,
          meta: {},
          items,
        };
      })
      .filter((item): item is ParsedListItem => Boolean(item));
  };

  const items = parseListElement(rootList);
  if (items.length === 0) {
    return null;
  }

  return {
    style: rootList.tagName.toLowerCase() === 'ol' ? 'ordered' : 'unordered',
    items,
  };
}

function parseHtmlListText(html: string) {
  const markup = String(html || '').trim();
  if (!markup) {
    return null;
  }

  const parser = new DOMParser();
  const doc = parser.parseFromString(markup, 'text/html');
  const text = stripTags(doc.body.textContent || '').replace(/\r\n/g, '\n').replace(/\r/g, '\n');

  if (!text.trim()) {
    return null;
  }

  return text
    .split('\n')
    .map((line) => line.replace(/^[\s\u00a0]*(?:[•*\-\u2022\u25E6\u2043]|\d+[.)])\s*/,'').trim())
    .filter(Boolean);
}

function parseListFromText(text: string): { style: 'ordered' | 'unordered'; items: string[] } | null {
  const lines = String(text || '')
    .replace(/\r\n/g, '\n')
    .replace(/\r/g, '\n')
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean);

  if (lines.length < 2) {
    return null;
  }

  const unorderedPattern = /^[\u2022\-*\u25E6\u2043]\s+(.+)$/;
  const orderedPattern = /^\d+[.)]\s+(.+)$/;

  const unorderedMatches = lines.map((line) => line.match(unorderedPattern));
  if (unorderedMatches.every(Boolean)) {
    return {
      style: 'unordered',
      items: unorderedMatches.map((match) => stripTags(match?.[1] || '').trim()).filter(Boolean),
    };
  }

  const orderedMatches = lines.map((line) => line.match(orderedPattern));
  if (orderedMatches.every(Boolean)) {
    return {
      style: 'ordered',
      items: orderedMatches.map((match) => stripTags(match?.[1] || '').trim()).filter(Boolean),
    };
  }

  const cleaned = lines
    .map((line) => line.replace(/^[\s\u00a0]*(?:[•*\-\u2022\u25E6\u2043]|\d+[.)])\s*/, '').trim())
    .filter(Boolean);

  if (cleaned.length >= 2) {
    return {
      style: 'unordered',
      items: cleaned,
    };
  }

  return null;
}

function toListToolItems(items: string[]) {
  return items
    .map((item) => stripTags(item).trim())
    .filter(Boolean)
    .map((content) => ({
      content,
      meta: {},
      items: [],
    }));
}

function buildHeaderBlock(source: Record<string, unknown>, id: string | undefined): EditorJsHeaderBlock | null {
  const text = toPlainText(source.text ?? source.content ?? source.html);
  const levelValue = Number(source.level);
  const level = [1, 2, 3, 4].includes(levelValue) ? (levelValue as 1 | 2 | 3 | 4) : 2;

  if (!text) {
    return null;
  }

  return {
    id,
    type: 'header',
    data: {
      text,
      level,
    },
  };
}

function buildParagraphBlock(source: Record<string, unknown>, id: string | undefined): EditorJsParagraphBlock | null {
  const text = toPlainText(source.text ?? source.content ?? source.html);

  if (!text) {
    return null;
  }

  return {
    id,
    type: 'paragraph',
    data: {
      text,
    },
  };
}

function buildListBlock(source: Record<string, unknown>, id: string | undefined): EditorJsListBlock | null {
  const style = source.style === 'ordered' || source.style === 'checklist' ? source.style : 'unordered';
    const normalizeListItem = (
    item: unknown,
  ): string | { content: string; items?: Array<string | { content?: string } | null>; meta?: Record<string, unknown> } | null => {
    if (typeof item === 'string' || typeof item === 'number' || typeof item === 'boolean') {
      const value = String(item).trim();
      return value || null;
    }

    if (!item || typeof item !== 'object') {
      return null;
    }

    const candidate = item as Record<string, unknown>;
    const content = toPlainText(candidate.content ?? candidate.text ?? candidate.value ?? candidate.html).trim();
    const children = Array.isArray(candidate.items)
      ? (candidate.items.map((child) => normalizeListItem(child)).filter(Boolean) as Array<string | { content?: string; items?: Array<string | { content?: string } | null>; meta?: Record<string, unknown> }>)
      : [];

    if (!content && children.length === 0) {
      return null;
    }

    const normalizedItem: {
      content: string;
      items?: Array<string | { content?: string } | null>;
      meta?: Record<string, unknown>;
    } = {
      content,
    };

    if (children.length > 0) {
      normalizedItem.items = children;
    }

    if (candidate.meta && typeof candidate.meta === 'object' && !Array.isArray(candidate.meta)) {
      normalizedItem.meta = candidate.meta as Record<string, unknown>;
    }

    return normalizedItem;
  };

  const items = Array.isArray(source.items)
    ? (source.items.map((item) => normalizeListItem(item)).filter(Boolean) as Array<string | { content?: string; items?: Array<string | { content?: string } | null>; meta?: Record<string, unknown> }>)
    : [];

  if (items.length === 0) {
    return null;
  }

  return {
    id,
    type: 'list',
    data: {
      style,
      items,
    },
  };
}

function buildTableBlock(source: Record<string, unknown>, id: string | undefined): EditorJsTableBlock | null {
  const content = Array.isArray(source.content)
    ? source.content
        .map((row) => (Array.isArray(row) ? row.map((cell) => toPlainText(cell)) : []))
        .filter((row) => row.length > 0)
    : [];

  if (content.length === 0) {
    return null;
  }

  return {
    id,
    type: 'table',
    data: {
      withHeadings: Boolean(source.withHeadings),
      content,
    },
  };
}

function buildQuoteBlock(source: Record<string, unknown>, id: string | undefined): EditorJsQuoteBlock | null {
  const text = toPlainText(source.text ?? source.content ?? source.html);

  if (!text) {
    return null;
  }

  const caption = toPlainText(source.caption);
  const alignment = source.alignment === 'center' || source.alignment === 'left'
    ? source.alignment
    : undefined;

  return {
    id,
    type: 'quote',
    data: {
      text,
      ...(caption ? { caption } : {}),
      ...(alignment ? { alignment } : {}),
    },
  };
}

function buildImageBlock(source: Record<string, unknown>, id: string | undefined): EditorJsImageBlock | null {
  const file = source.file;
  const url =
    (file && typeof file === 'object' ? toPlainText((file as Record<string, unknown>).url) : '') ||
    toPlainText(source.url);

  if (!url) {
    return null;
  }

  const caption = toPlainText(source.caption);

  return {
    id,
    type: 'image',
    data: {
      file: { url },
      ...(caption ? { caption } : {}),
      ...(typeof source.withBorder === 'boolean' ? { withBorder: source.withBorder } : {}),
      ...(typeof source.withBackground === 'boolean' ? { withBackground: source.withBackground } : {}),
      ...(typeof source.stretched === 'boolean' ? { stretched: source.stretched } : {}),
    },
  };
}

function normalizeBlocks(blocks: unknown[]): EditorJsBlock[] {
  return blocks.reduce<EditorJsBlock[]>((accumulator, block) => {
    const normalizedBlock: EditorJsBlock | null = (() => {
      if (!block || typeof block !== 'object') {
        return null;
      }

      const candidate = block as Record<string, unknown>;
      const type = candidate.type;
      const id = typeof candidate.id === 'string' ? candidate.id : undefined;
      const data = candidate.data;

      if (typeof type !== 'string' || !data || typeof data !== 'object') {
        return null;
      }

      const source = data as Record<string, unknown>;

      switch (type) {
        case 'header': {
          return buildHeaderBlock(source, id);
        }

        case 'paragraph': {
          return buildParagraphBlock(source, id);
        }

        case 'list': {
          return buildListBlock(source, id);
        }

        case 'table': {
          return buildTableBlock(source, id);
        }

        case 'quote': {
          return buildQuoteBlock(source, id);
        }

        case 'image': {
          return buildImageBlock(source, id);
        }

        default:
          return null;
      }
    })();

    if (normalizedBlock) {
      accumulator.push(normalizedBlock);
    }

    return accumulator;
  }, []);
}

function isRenderableBlock(block: EditorJsBlock): boolean {
  if (!block || typeof block !== 'object') {
    return false;
  }

  if (!('type' in block) || !('data' in block)) {
    return false;
  }

  return typeof block.type === 'string' && typeof block.data === 'object';
}

function getTitleBlockId(sectionId: string) {
  return `section-title-${sectionId}`;
}

function splitBlocks(blocks: EditorJsBlock[], sectionId: string) {
  const titleId = getTitleBlockId(sectionId);
  const firstBlock = blocks[0];

  if (firstBlock?.type === 'header') {
    const isTitle = firstBlock.id === titleId || firstBlock.id?.startsWith('section-title-');
    if (isTitle) {
      return {
        titleBlock: firstBlock,
        bodyBlocks: blocks.slice(1),
      };
    }
  }

  return {
    titleBlock: null,
    bodyBlocks: blocks,
  };
}

function getTitleFromBlocks(blocks: EditorJsBlock[], sectionId: string) {
  const { titleBlock } = splitBlocks(blocks, sectionId);
  return titleBlock?.data.text || '';
}

function applyTitleToBlocks(blocks: EditorJsBlock[], title: string, sectionId: string): EditorJsBlock[] {
  const sanitizedTitle = stripTags(title || '');
  const titleId = getTitleBlockId(sectionId);
  const { bodyBlocks } = splitBlocks(normalizeBlocks(blocks), sectionId);

  if (!sanitizedTitle) {
    return bodyBlocks;
  }

  return [
    {
      id: titleId,
      type: 'header',
      data: {
        text: sanitizedTitle,
        level: 2,
      },
    },
    ...bodyBlocks,
  ];
}

function EditorJsSectionEditor({
  section,
  onUpdateBlocks,
}: {
  section: EditorJsSection;
  onUpdateBlocks: (id: string, blocks: EditorJsBlock[]) => void;
}) {
  const editorRef = useRef<EditorJsInstance | null>(null);
  const holderRef = useRef<HTMLDivElement | null>(null);
  const lastBlocksRef = useRef<EditorJsBlock[]>(section.blocks);
  const sectionBlocksRef = useRef<EditorJsBlock[]>(section.blocks);
  const onUpdateBlocksRef = useRef(onUpdateBlocks);
  const toolsRef = useRef<EditorJsTools | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const selectedTextRef = useRef('');
  const selectedRangeRef = useRef<Range | null>(null);
  const [toolsReady, setToolsReady] = useState(false);

  useEffect(() => {
    onUpdateBlocksRef.current = onUpdateBlocks;
  }, [onUpdateBlocks]);

  useEffect(() => {
    sectionBlocksRef.current = section.blocks;
  }, [section.blocks]);

  useEffect(() => {
    let isActive = true;

    const loadTools = async () => {
      if (toolsRef.current || typeof window === 'undefined') {
        return;
      }

      const [editorModule, headerModule, listModule, imageModule] = await Promise.all([
        import('@editorjs/editorjs'),
        import('@editorjs/header'),
        import('@editorjs/list'),
        import('@editorjs/image'),
      ]);

      if (!isActive) {
        return;
      }

      toolsRef.current = {
        EditorJS: editorModule.default,
        Header: headerModule.default,
        List: listModule.default,
        Table: SimpleTableTool,
        ImageTool: imageModule.default,
      };
      setToolsReady(true);
    };

    void loadTools();

    return () => {
      isActive = false;
    };
  }, []);

  useEffect(() => {
    let isMounted = true;

    if (!holderRef.current || editorRef.current || !toolsRef.current || !toolsReady) {
      return () => undefined;
    }

    const currentBlocks = sectionBlocksRef.current || [];
    const { bodyBlocks } = splitBlocks(normalizeBlocks(currentBlocks), section.id);
    const HeaderWithSelectionText = class {
      private readonly inner: {
        render?: () => HTMLElement;
        save?: (blockContent: HTMLElement) => unknown;
        validate?: (savedData: unknown) => boolean;
        destroy?: () => void;
        merge?: (data: unknown) => unknown;
        onPaste?: (event: unknown) => void;
        rendered?: () => void;
      };

      constructor(args: unknown) {
        const constructorArgs = args && typeof args === 'object'
          ? { ...(args as Record<string, unknown>) }
          : {};
        const currentData = constructorArgs.data && typeof constructorArgs.data === 'object'
          ? { ...(constructorArgs.data as Record<string, unknown>) }
          : {};
        const hasText = typeof currentData.text === 'string' && currentData.text.trim().length > 0;

        if (!hasText) {
          const selected = stripTags(selectedTextRef.current || '').trim();
          if (selected) {
            const selectedRange = selectedRangeRef.current;
            if (selectedRange) {
              try {
                selectedRange.deleteContents();
              } catch {
                // If selection can't be mutated, keep fallback behavior and only prefill heading text.
              }
            }

            constructorArgs.data = {
              ...currentData,
              text: selected,
            };
          }
        }

        const HeaderTool = toolsRef.current?.Header as new (params: unknown) => {
          render?: () => HTMLElement;
          save?: (blockContent: HTMLElement) => unknown;
          validate?: (savedData: unknown) => boolean;
          destroy?: () => void;
          merge?: (data: unknown) => unknown;
          onPaste?: (event: unknown) => void;
          rendered?: () => void;
        };

        this.inner = new HeaderTool(constructorArgs);
        selectedTextRef.current = '';
        selectedRangeRef.current = null;
      }

      render() {
        return this.inner.render ? this.inner.render() : document.createElement('div');
      }

      save(blockContent: HTMLElement) {
        return this.inner.save ? this.inner.save(blockContent) : { text: '', level: 2 };
      }

      validate(savedData: unknown) {
        return this.inner.validate ? this.inner.validate(savedData) : true;
      }

      destroy() {
        if (this.inner.destroy) {
          this.inner.destroy();
        }
      }

      merge(data: unknown) {
        return this.inner.merge ? this.inner.merge(data) : data;
      }

      onPaste(event: unknown) {
        if (this.inner.onPaste) {
          this.inner.onPaste(event);
        }
      }

      rendered() {
        if (this.inner.rendered) {
          this.inner.rendered();
        }
      }

      static get toolbox() {
        const headerTool = toolsRef.current?.Header as { toolbox?: unknown } | undefined;
        return headerTool?.toolbox;
      }

      static get pasteConfig() {
        const headerTool = toolsRef.current?.Header as { pasteConfig?: unknown } | undefined;
        return headerTool?.pasteConfig;
      }

      static get sanitize() {
        const headerTool = toolsRef.current?.Header as { sanitize?: unknown } | undefined;
        return headerTool?.sanitize;
      }

      static get conversionConfig() {
        const headerTool = toolsRef.current?.Header as { conversionConfig?: unknown } | undefined;
        return headerTool?.conversionConfig;
      }

      static get isReadOnlySupported() {
        const headerTool = toolsRef.current?.Header as { isReadOnlySupported?: unknown } | undefined;
        return Boolean(headerTool?.isReadOnlySupported);
      }
    };

    const editor = new toolsRef.current.EditorJS({
      holder: holderRef.current,
      data: { blocks: bodyBlocks || [] },
      defaultBlock: 'paragraph',
      inlineToolbar: false,
      minHeight: 0,
      tools: {
        header: {
          class: HeaderWithSelectionText,
          config: {
            levels: [1, 2, 3, 4],
            defaultLevel: 2,
          },
        },
        list: {
          class: toolsRef.current.List,
          inlineToolbar: false,
        },
        table: {
          class: toolsRef.current.Table,
          inlineToolbar: false,
        },
        image: {
          class: toolsRef.current.ImageTool,
          config: {
            uploader: {
              uploadByUrl: async (url: string) => {
                if (!isValidUrl(url)) {
                  return { success: 0 };
                }
                return { success: 1, file: { url } };
              },
              uploadByFile: async () => ({ success: 0 }),
            },
          },
        },
      },
      onChange: async () => {
        if (!editorRef.current || !isMounted) {
          return;
        }

        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }

        const editor = editorRef.current;
        timeoutRef.current = setTimeout(async () => {
          if (!isMounted) return;
          try {
            const output = (await editor.save()) as { blocks?: EditorJsBlock[] };
            const sanitizedBlocks = normalizeBlocks(output.blocks || []).filter(isRenderableBlock);
            const currentBlocks = sectionBlocksRef.current || [];
            const nextBlocks = applyTitleToBlocks(sanitizedBlocks, getTitleFromBlocks(currentBlocks, section.id), section.id);
            
            if (JSON.stringify(nextBlocks) !== JSON.stringify(currentBlocks)) {
              lastBlocksRef.current = nextBlocks;
              onUpdateBlocksRef.current(section.id, nextBlocks);
            }
          } catch (err) {
            console.error('Failed to save EditorJS content:', err);
          }
        }, 250);
      },
    } as never) as EditorJsInstance;

    editorRef.current = editor;

    return () => {
      isMounted = false;
      const editorInstance = editorRef.current;
      if (editorInstance && typeof editorInstance.destroy === 'function') {
        editorInstance.destroy();
      }
      editorRef.current = null;
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [section.id, toolsReady]);

  useEffect(() => {
    const holder = holderRef.current;

    if (!holder || typeof window === 'undefined') {
      return () => undefined;
    }

    const captureSelection = () => {
      const selection = window.getSelection();
      if (!selection || selection.rangeCount === 0 || selection.isCollapsed) {
        return;
      }

      const range = selection.getRangeAt(0);
      const anchorNode = range.commonAncestorContainer;
      if (!holder.contains(anchorNode)) {
        return;
      }

      const text = selection.toString().trim();
      if (text) {
        selectedTextRef.current = text;
        selectedRangeRef.current = range.cloneRange();
      }
    };

    document.addEventListener('selectionchange', captureSelection);

    return () => {
      document.removeEventListener('selectionchange', captureSelection);
    };
  }, []);

  useEffect(() => {
    const holder = holderRef.current;

    if (!holder || typeof window === 'undefined') {
      return () => undefined;
    }

    const handlePaste = (event: ClipboardEvent) => {
      const editor = editorRef.current as {
        blocks?: {
          insert?: (
            type?: string,
            data?: Record<string, unknown>,
            config?: unknown,
            index?: number,
            needToFocus?: boolean,
            replace?: boolean,
          ) => unknown;
          getCurrentBlockIndex?: () => number;
        };
      } | null;

      if (!editor || !editor.blocks || !event.clipboardData) {
        return;
      }

      const target = event.target;
      if (!(target instanceof Node) || !holder.contains(target)) {
        return;
      }

      if (target instanceof HTMLElement && target.closest('.editorjs-table-tool__cell')) {
        return;
      }

      const html = event.clipboardData.getData('text/html') || '';
      const text = event.clipboardData.getData('text/plain') || '';

      const tableGrid = parseHtmlTable(html) || parsePlainTextGrid(text);
      if (tableGrid && tableGrid.length > 0 && tableGrid.some((row) => row.length > 1)) {
        event.preventDefault();
        event.stopPropagation();

        const insertAt = typeof editor.blocks.getCurrentBlockIndex === 'function'
          ? editor.blocks.getCurrentBlockIndex() + 1
          : undefined;

        if (typeof editor.blocks.insert === 'function') {
          editor.blocks.insert(
            'table',
            {
              withHeadings: false,
              content: tableGrid,
            },
            undefined,
            insertAt,
            true,
            false,
          );
        }
        return;
      }

      const htmlList = parseHtmlList(html);
      if (htmlList && htmlList.items.length > 0 && typeof editor.blocks.insert === 'function') {
        event.preventDefault();
        event.stopPropagation();

        const insertAt = typeof editor.blocks.getCurrentBlockIndex === 'function'
          ? editor.blocks.getCurrentBlockIndex() + 1
          : undefined;

        editor.blocks.insert(
          'list',
          {
            style: htmlList.style,
            items: htmlList.items,
          },
          undefined,
          insertAt,
          true,
          false,
        );
        return;
      }

      const listData = parseListFromText(text) || (html ? (() => {
        const htmlTextLines = parseHtmlListText(html);
        return htmlTextLines && htmlTextLines.length >= 2
          ? { style: 'unordered' as const, items: htmlTextLines }
          : null;
      })() : null);
      if (listData && listData.items.length > 0 && typeof editor.blocks.insert === 'function') {
        event.preventDefault();
        event.stopPropagation();

        const insertAt = typeof editor.blocks.getCurrentBlockIndex === 'function'
          ? editor.blocks.getCurrentBlockIndex() + 1
          : undefined;

        editor.blocks.insert(
          'list',
          {
            style: listData.style,
            items: toListToolItems(listData.items),
          },
          undefined,
          insertAt,
          true,
          false,
        );
      }
    };

    holder.addEventListener('paste', handlePaste, true);

    return () => {
      holder.removeEventListener('paste', handlePaste, true);
    };
  }, []);

  useEffect(() => {
    const syncBlocks = async () => {
      if (!editorRef.current) {
        return;
      }

      const currentBlocks = sectionBlocksRef.current || [];
      const serialized = JSON.stringify(currentBlocks);
      const lastSerialized = JSON.stringify(lastBlocksRef.current || []);

      if (serialized === lastSerialized) {
        return;
      }

      try {
        await editorRef.current.isReady;
        const { bodyBlocks } = splitBlocks(normalizeBlocks(currentBlocks), section.id);
        const nextBlocks = normalizeBlocks(bodyBlocks || []).filter(isRenderableBlock);
        
        if (editorRef.current.blocks && typeof editorRef.current.blocks.render === 'function') {
          await editorRef.current.blocks.render(nextBlocks);
        }
        lastBlocksRef.current = currentBlocks;
      } catch {
        // Ignore render sync errors; editor will refresh on next change.
      }
    };

    void syncBlocks();
  }, [section.id]);

  return <div ref={holderRef} className="editorjs-shell" />;
}

function SortableSectionCard({
  section,
  index,
  onUpdateBlocks,
  onUpdateTitle,
  onDelete,
}: SortableSectionCardProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: section.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const titleValue = getTitleFromBlocks(section.blocks || [], section.id);

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`mx-auto w-full max-w-[820px] space-y-5 rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-[0_20px_60px_rgba(3,7,18,0.24)] backdrop-blur-sm ${isDragging ? 'shadow-2xl' : ''}`}
    >
      <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="cursor-grab rounded-full border border-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 transition-colors hover:text-white"
            {...attributes}
            {...listeners}
          >
            Drag
          </button>
          <span className="text-xs font-medium text-white/40 uppercase tracking-tight">Section {index + 1}</span>
        </div>
        <button
          type="button"
          onClick={() => onDelete(section.id)}
          className="rounded-full border border-red-400/20 bg-red-400/10 px-3 py-1.5 text-xs font-semibold text-red-200 hover:bg-red-400/20"
        >
          Delete
        </button>
      </div>

      <div className="space-y-2">
        <label className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">Section title</label>
        <input
          type="text"
          value={titleValue}
          onChange={(event) => onUpdateTitle(section.id, event.target.value)}
          placeholder="Enter section title"
          className="w-full rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-base text-white placeholder-white/25 outline-none transition focus:border-white/20 focus:ring-2 focus:ring-[#6A27D4]/40"
        />
      </div>

      <div className="rounded-2xl border border-white/10 bg-[#080410] px-4 py-4">
        <EditorJsSectionEditor section={section} onUpdateBlocks={onUpdateBlocks} />
      </div>
    </div>
  );
}

export default function EditorJsSectionManager({ value, onChange }: EditorJsSectionManagerProps) {
  const [sections, setSections] = useState<EditorJsSection[]>(() => {
    const incoming = value?.sections || [];
    const normalized = incoming.map((section) => ({ ...section, blocks: normalizeBlocks(section.blocks || []) } as EditorJsSection));
    return ensureUniqueSectionIds(normalized);
  });
  const sectionsRef = useRef<EditorJsSection[]>([]);
  const sensors = useSensors(useSensor(PointerSensor));

  useEffect(() => {
    const raw = value?.sections || [];
    if (!validateSectionsShape(raw)) {
      if (Array.isArray(raw) && raw.length) {
        console.warn('Received malformed sections payload for EditorJS; ignoring invalid entries.');
      }
    }

    const mapped: EditorJsSection[] = raw.map((section) => ({
      ...section,
      blocks: normalizeBlocks(section.blocks || []),
    }));
    const nextSections = ensureUniqueSectionIds(mapped);

    sectionsRef.current = nextSections;
    const timeoutId = window.setTimeout(() => {
      setSections(nextSections);
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, [value]);

  const updateSections = useCallback((nextSections: EditorJsSection[]) => {
    // Ensure immutability and unique ids before emitting change
    const next = ensureUniqueSectionIds(nextSections.map((s) => ({ ...s, blocks: normalizeBlocks(s.blocks || []) })));
    sectionsRef.current = next;
    setSections(next);
    try {
      onChange({ sections: next });
    } catch (err) {
      console.error('onChange callback error in EditorJsSectionManager:', err);
    }
  }, [onChange]);

  const handleAddSection = () => {
    const nextSection: EditorJsSection = {
      id: generateId('section'),
      type: 'editorjs',
      blocks: [],
    };

    // Protect against accidental mutation of sections array
    updateSections([...sectionsRef.current, nextSection]);
  };

  const handleDelete = useCallback((id: string) => {
    if (!window.confirm('Delete this section?')) {
      return;
    }

    const next = sectionsRef.current.filter((s) => s.id !== id);
    updateSections(next);
  }, [updateSections]);

  const handleUpdateBlocks = useCallback((id: string, blocks: EditorJsBlock[]) => {
    const next = sectionsRef.current.map((s) =>
      s.id === id ? { ...s, blocks: normalizeBlocks(blocks) } : s
    );
    updateSections(next);
  }, [updateSections]);

  const handleUpdateTitle = useCallback((id: string, title: string) => {
    const next = sectionsRef.current.map((s) =>
      s.id === id
        ? { ...s, blocks: applyTitleToBlocks(s.blocks || [], title, s.id) }
        : s
    );
    updateSections(next);
  }, [updateSections]);

  const handleDragEnd = useCallback((event: DragEndEvent) => {
    if (!event.over || event.active.id === event.over.id) {
      return;
    }

    const oldId = String(event.active.id);
    const newId = String(event.over.id);

    const current = sectionsRef.current;
    const oldIndex = current.findIndex((s) => s.id === oldId);
    const newIndex = current.findIndex((s) => s.id === newId);

    if (oldIndex === -1 || newIndex === -1) {
      return;
    }

    const next = arrayMove(current, oldIndex, newIndex);
    updateSections(next);
  }, [updateSections]);

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-5 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-medium text-white/80">Build structured sections using the block editor.</p>
          <p className="text-xs text-white/45">Only predefined blocks are allowed. No HTML or CSS.</p>
        </div>
        <button
          type="button"
          onClick={handleAddSection}
          className="rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-[#0B0616] transition hover:bg-white/90"
        >
          Add section
        </button>
      </div>

      {sections.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-white/20 bg-white/[0.02] p-6 text-sm text-white/50">
          No sections yet. Click Add section to start.
        </div>
      ) : (
        <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
          <SortableContext items={sections.map((section) => section.id)} strategy={verticalListSortingStrategy}>
            <div className="space-y-5">
              {sections.map((section, index) => (
                <SortableSectionCard
                  key={section.id}
                  section={section}
                  index={index}
                  onUpdateBlocks={handleUpdateBlocks}
                  onUpdateTitle={handleUpdateTitle}
                  onDelete={handleDelete}
                />
              ))}
            </div>
          </SortableContext>
        </DndContext>
      )}
    </div>
  );
}
