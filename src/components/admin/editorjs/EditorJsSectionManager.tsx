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
import { EditorJsBlock, EditorJsSection, EditorJsSections } from '@/types/content';
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
  save: () => Promise<{ blocks: EditorJsBlock[] }>;
  blocks?: {
    render: (blocks: EditorJsBlock[]) => Promise<void>;
  };
} & Record<string, unknown>;

type EditorJsToolClass = new (...args: never[]) => unknown;

type EditorJsImageUploader = {
  uploadByUrl: (url: string) => Promise<{ success: 0 | 1; file?: { url: string } }>;
  uploadByFile: () => Promise<{ success: 0 | 1 }>;
};

type EditorJsEditorConfig = {
  holder: HTMLDivElement;
  data: { blocks: EditorJsBlock[] };
  defaultBlock: 'paragraph';
  inlineToolbar: false;
  minHeight: number;
  tools: {
    header: { class: EditorJsToolClass; config: { levels: number[]; defaultLevel: number } };
    list: { class: EditorJsToolClass; inlineToolbar: false };
    table: { class: EditorJsToolClass; inlineToolbar: false };
    image: { class: EditorJsToolClass; config: { uploader: EditorJsImageUploader } };
  };
  onChange: () => void | Promise<void>;
};

type EditorJsConstructor = new (config: EditorJsEditorConfig) => EditorJsInstance;

type EditorJsTools = {
  EditorJS: EditorJsConstructor;
  Header: EditorJsToolClass;
  List: EditorJsToolClass;
  Table: EditorJsToolClass;
  ImageTool: EditorJsToolClass;
};

function generateId(prefix: string) {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
    return `${prefix}-${crypto.randomUUID()}`;
  }

  return `${prefix}-${Math.random().toString(36).slice(2, 10)}`;
}

function stripTags(value: unknown) {
  return String(value ?? '').replace(/<[^>]*>/g, '');
}

function normalizeBlocks(blocks: EditorJsBlock[]): EditorJsBlock[] {
  // We no longer strip tags from text/paragraph blocks here to preserve 
  // inline formatting (bold, italic, links) that EditorJS manages.
  return blocks;
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
  const { bodyBlocks } = splitBlocks(blocks, sectionId);

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
  const toolsRef = useRef<EditorJsTools | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [toolsReady, setToolsReady] = useState(false);

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
    const { bodyBlocks } = splitBlocks(currentBlocks, section.id);
    const editor = new toolsRef.current.EditorJS({
      holder: holderRef.current,
      data: { blocks: bodyBlocks || [] },
      defaultBlock: 'paragraph',
      inlineToolbar: false,
      minHeight: 0,
      tools: {
        header: {
          class: toolsRef.current.Header,
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
            const output = await editor.save();
            const sanitizedBlocks = normalizeBlocks(output.blocks as EditorJsBlock[]).filter(isRenderableBlock);
            const currentBlocks = sectionBlocksRef.current || [];
            const nextBlocks = applyTitleToBlocks(sanitizedBlocks, getTitleFromBlocks(currentBlocks, section.id), section.id);
            
            if (JSON.stringify(nextBlocks) !== JSON.stringify(currentBlocks)) {
              lastBlocksRef.current = nextBlocks;
              onUpdateBlocks(section.id, nextBlocks);
            }
          } catch (err) {
            console.error('Failed to save EditorJS content:', err);
          }
        }, 250);
      },
    });

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
  }, [onUpdateBlocks, section.id, toolsReady]);

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
        const { bodyBlocks } = splitBlocks(currentBlocks, section.id);
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
  const [sections, setSections] = useState<EditorJsSection[]>(() =>
    value?.sections
      ? value.sections.map((section) => ({
          ...section,
          blocks: normalizeBlocks(section.blocks || []),
        }))
      : []
  );
  const sectionsRef = useRef<EditorJsSection[]>([]);
  const sensors = useSensors(useSensor(PointerSensor));

  useEffect(() => {
    const nextSections = value?.sections
      ? value.sections.map((section) => ({
          ...section,
          blocks: normalizeBlocks(section.blocks || []),
        }))
      : [];

    sectionsRef.current = nextSections;
    const timeoutId = window.setTimeout(() => {
      setSections(nextSections);
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, [value]);

  const updateSections = useCallback((nextSections: EditorJsSection[]) => {
    sectionsRef.current = nextSections;
    setSections(nextSections);
    onChange({ sections: nextSections });
  }, [onChange]);

  const handleAddSection = () => {
    const nextSection: EditorJsSection = {
      id: generateId('section'),
      type: 'editorjs',
      blocks: [],
    };

    updateSections([...sections, nextSection]);
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
