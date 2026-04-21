'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import {
  DndContext,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
  type DragEndEvent,
} from '@dnd-kit/core';
import {
  SortableContext,
  arrayMove,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import {
  EditorJsSection,
  EditorJsSectionsPayload,
} from '@/types/content';
import {
  createDefaultEditorSection,
  getSectionTitle,
  normalizeEditorJsSectionsPayload,
  setSectionTitle,
} from '@/lib/editorjs';

type EditorJsInstance = {
  save: () => Promise<{ blocks: unknown[] }>;
  destroy?: () => void | Promise<void>;
  isReady?: Promise<void>;
};

interface EditorJsSectionsManagerProps {
  value: unknown;
  onChange: (value: EditorJsSectionsPayload) => void;
}

interface SortableSectionCardProps {
  section: EditorJsSection;
  onUpdate: (section: EditorJsSection) => void;
  onDelete: (sectionId: string) => void;
}

function SortableSectionCard({ section, onUpdate, onDelete }: SortableSectionCardProps) {
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

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`rounded-2xl border ${
        isDragging ? 'border-[#9A6FF8] bg-[#1A0E33]' : 'border-white/20 bg-white/5'
      } p-4 md:p-5`}
    >
      <EditorJsSectionCard
        section={section}
        onUpdate={onUpdate}
        onDelete={onDelete}
        dragHandleProps={{ ...attributes, ...listeners }}
      />
    </div>
  );
}

interface EditorJsSectionCardProps {
  section: EditorJsSection;
  onUpdate: (section: EditorJsSection) => void;
  onDelete: (sectionId: string) => void;
  dragHandleProps: Record<string, unknown>;
}

function EditorJsSectionCard({
  section,
  onUpdate,
  onDelete,
  dragHandleProps,
}: EditorJsSectionCardProps) {
  const editorRef = useRef<EditorJsInstance | null>(null);
  const onUpdateRef = useRef(onUpdate);
  const sectionRef = useRef(section);
  const sectionId = section.id;
  const sectionBlocks = section.blocks;
  const holderId = useMemo(() => `editorjs-holder-${sectionId}`, [sectionId]);
  const [title, setTitle] = useState(getSectionTitle(section));
  const initialBlocksRef = useRef(sectionBlocks);

  useEffect(() => {
    setTitle(getSectionTitle(sectionRef.current));
  }, [sectionId]);

  onUpdateRef.current = onUpdate;
  sectionRef.current = {
    id: sectionId,
    type: 'editorjs',
    blocks: sectionBlocks,
  };

  useEffect(() => {
    let cancelled = false;

    const initEditor = async () => {
      const { default: EditorJS } = await import('@editorjs/editorjs');
      const [{ default: Header }, { default: List }, { default: Table }, { default: Quote }, { default: ImageTool }] = await Promise.all([
        import('@editorjs/header'),
        import('@editorjs/list'),
        import('@editorjs/table'),
        import('@editorjs/quote'),
        import('@editorjs/image'),
      ]);

      if (cancelled || editorRef.current) {
        return;
      }

      editorRef.current = new EditorJS({
        holder: holderId,
        tools: {
          header: {
            class: Header,
            config: {
              levels: [1, 2, 3, 4],
              defaultLevel: 2,
            },
          },
          list: {
            class: List,
            inlineToolbar: true,
          },
          table: {
            class: Table,
          },
          quote: {
            class: Quote,
            inlineToolbar: true,
          },
          image: {
            class: ImageTool,
            config: {
              uploader: {
                uploadByFile: async () => {
                  throw new Error('Direct file uploads are disabled. Please use an image URL.');
                },
                uploadByUrl: async (url: string) => ({
                  success: 1,
                  file: {
                    url,
                  },
                }),
              },
            },
          },
        },
        data: {
          blocks: initialBlocksRef.current,
        },
        onChange: async () => {
          if (!editorRef.current) {
            return;
          }

          const output = await editorRef.current.save();
          onUpdateRef.current({
            ...sectionRef.current,
            blocks: output.blocks as EditorJsSection['blocks'],
          });
        },
      });

      await editorRef.current.isReady;
    };

    void initEditor();

    return () => {
      cancelled = true;
      if (editorRef.current) {
        const instance = editorRef.current;
        editorRef.current = null;
        if (typeof instance.destroy === 'function') {
          void instance.destroy();
        }
      }
    };
  }, [holderId]);

  const handleTitleChange = (nextTitle: string) => {
    setTitle(nextTitle);
    onUpdate(setSectionTitle(section, nextTitle));
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-white/80 hover:bg-white/20"
            aria-label="Drag section"
            {...dragHandleProps}
          >
            Drag
          </button>
          <span className="text-xs font-semibold uppercase tracking-wide text-white/50">
            Section
          </span>
        </div>

        <button
          type="button"
          onClick={() => onDelete(section.id)}
          className="self-start rounded-lg border border-red-400/40 bg-red-500/10 px-3 py-2 text-sm font-medium text-red-300 hover:bg-red-500/20"
        >
          Delete Section
        </button>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-white/80">
          Section Title
        </label>
        <input
          type="text"
          value={title}
          onChange={(event) => handleTitleChange(event.target.value)}
          className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#6A27D4]"
          placeholder="Enter section title"
        />
        <p className="mt-2 text-xs text-white/50">
          The title is stored as the first Heading block.
        </p>
      </div>

      <div className="rounded-xl border border-white/10 bg-[#120925] p-3">
        <div id={holderId} className="editorjs-content" />
      </div>
    </div>
  );
}

export default function EditorJsSectionsManager({ value, onChange }: EditorJsSectionsManagerProps) {
  const [payload, setPayload] = useState<EditorJsSectionsPayload>(() =>
    normalizeEditorJsSectionsPayload(value)
  );

  useEffect(() => {
    setPayload(normalizeEditorJsSectionsPayload(value));
  }, [value]);

  const sensors = useSensors(
    useSensor(PointerSensor)
  );

  const emit = (nextPayload: EditorJsSectionsPayload) => {
    setPayload(nextPayload);
    onChange(nextPayload);
  };

  const addSection = () => {
    emit({
      sections: [...payload.sections, createDefaultEditorSection()],
    });
  };

  const updateSection = (updatedSection: EditorJsSection) => {
    emit({
      sections: payload.sections.map((section) =>
        section.id === updatedSection.id ? updatedSection : section
      ),
    });
  };

  const deleteSection = (sectionId: string) => {
    emit({
      sections: payload.sections.filter((section) => section.id !== sectionId),
    });
  };

  const onDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over || active.id === over.id) {
      return;
    }

    const oldIndex = payload.sections.findIndex((section) => section.id === active.id);
    const newIndex = payload.sections.findIndex((section) => section.id === over.id);

    if (oldIndex === -1 || newIndex === -1) {
      return;
    }

    emit({
      sections: arrayMove(payload.sections, oldIndex, newIndex),
    });
  };

  return (
    <div className="space-y-5">
      <div className="rounded-xl border border-amber-300/30 bg-amber-500/10 p-4 text-sm text-amber-100">
        Structured editor mode only: HTML, CSS, and raw JSON are disabled for safety and consistency.
      </div>

      {payload.sections.length === 0 && (
        <div className="rounded-xl border border-dashed border-white/20 bg-white/5 p-6 text-center text-white/70">
          No sections yet. Click Add Section to start building content.
        </div>
      )}

      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={onDragEnd}>
        <SortableContext
          items={payload.sections.map((section) => section.id)}
          strategy={verticalListSortingStrategy}
        >
          <div className="space-y-4">
            {payload.sections.map((section) => (
              <SortableSectionCard
                key={section.id}
                section={section}
                onUpdate={updateSection}
                onDelete={deleteSection}
              />
            ))}
          </div>
        </SortableContext>
      </DndContext>

      <button
        type="button"
        onClick={addSection}
        className="w-full rounded-xl border border-[#8E65ED] bg-[#6A27D4] px-4 py-3 font-semibold text-white hover:bg-[#5C1FC2]"
      >
        + Add Section
      </button>
    </div>
  );
}
