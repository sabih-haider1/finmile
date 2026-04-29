import { EditorJsSections } from '@/types/content';

export function isEditorSections(value: unknown): value is EditorJsSections {
  if (!value || typeof value !== 'object') {
    return false;
  }

  const sections = (value as { sections?: unknown }).sections;
  if (!Array.isArray(sections)) {
    return false;
  }

  return sections.every((section) => {
    if (!section || typeof section !== 'object') {
      return false;
    }

    const candidate = section as { id?: unknown; type?: unknown; blocks?: unknown };
    return typeof candidate.id === 'string'
      && candidate.type === 'editorjs'
      && Array.isArray(candidate.blocks);
  });
}
