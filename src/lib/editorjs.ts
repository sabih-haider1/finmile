import {
  EditorJsBlock,
  EditorJsBlockType,
  EditorJsSection,
  EditorJsSectionsPayload,
} from '@/types/content';

const ALLOWED_EDITOR_BLOCKS: EditorJsBlockType[] = [
  'header',
  'paragraph',
  'list',
  'table',
  'quote',
  'image',
];

export function createEditorSectionId(): string {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }

  return `section-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

export function createDefaultEditorSection(): EditorJsSection {
  return {
    id: createEditorSectionId(),
    type: 'editorjs',
    blocks: [
      {
        type: 'paragraph',
        data: {
          text: '',
        },
      },
    ],
  };
}

export function stripHtmlTags(input: string): string {
  return input.replace(/<[^>]*>/g, '').trim();
}

export function getSectionTitle(section: EditorJsSection): string {
  const firstHeader = section.blocks.find((block) => block.type === 'header');

  if (!firstHeader || firstHeader.type !== 'header') {
    return '';
  }

  return stripHtmlTags(firstHeader.data.text || '');
}

export function setSectionTitle(section: EditorJsSection, title: string): EditorJsSection {
  const normalizedTitle = title.trim();
  const blocks = [...section.blocks];

  if (!normalizedTitle) {
    if (blocks[0]?.type === 'header') {
      return {
        ...section,
        blocks: blocks.slice(1),
      };
    }

    return section;
  }

  const headerBlock: EditorJsBlock = {
    type: 'header',
    data: {
      text: normalizedTitle,
      level: 2,
    },
  };

  if (blocks[0]?.type === 'header') {
    blocks[0] = headerBlock;
    return { ...section, blocks };
  }

  return {
    ...section,
    blocks: [headerBlock, ...blocks],
  };
}

export function isEditorJsSection(value: unknown): value is EditorJsSection {
  if (!value || typeof value !== 'object') {
    return false;
  }

  const candidate = value as Record<string, unknown>;

  if (candidate.type !== 'editorjs' || typeof candidate.id !== 'string') {
    return false;
  }

  if (!Array.isArray(candidate.blocks)) {
    return false;
  }

  return candidate.blocks.every((block) => {
    if (!block || typeof block !== 'object') {
      return false;
    }

    const typedBlock = block as Record<string, unknown>;

    if (!ALLOWED_EDITOR_BLOCKS.includes(typedBlock.type as EditorJsBlockType)) {
      return false;
    }

    return typeof typedBlock.data === 'object' && typedBlock.data !== null;
  });
}

export function isEditorJsSectionsPayload(value: unknown): value is EditorJsSectionsPayload {
  if (!value || typeof value !== 'object') {
    return false;
  }

  const candidate = value as Record<string, unknown>;

  if (!Array.isArray(candidate.sections)) {
    return false;
  }

  return candidate.sections.every(isEditorJsSection);
}

function legacySectionToEditorSection(value: unknown): EditorJsSection | null {
  if (!value || typeof value !== 'object') {
    return null;
  }

  const candidate = value as Record<string, unknown>;
  const candidateData = (candidate.data && typeof candidate.data === 'object')
    ? candidate.data as Record<string, unknown>
    : {};

  const sectionId = typeof candidate.id === 'string' && candidate.id.trim().length > 0
    ? candidate.id
    : createEditorSectionId();

  const blocks: EditorJsBlock[] = [];

  const pushHeading = (text: unknown, level: 1 | 2 | 3 | 4 = 2) => {
    if (typeof text !== 'string') {
      return;
    }

    const safeText = stripHtmlTags(text);
    if (!safeText) {
      return;
    }

    blocks.push({
      type: 'header',
      data: { text: safeText, level },
    });
  };

  const pushParagraph = (text: unknown) => {
    if (typeof text !== 'string') {
      return;
    }

    const safeText = stripHtmlTags(text);
    if (!safeText) {
      return;
    }

    blocks.push({
      type: 'paragraph',
      data: { text: safeText },
    });
  };

  if (candidate.type === 'editorjs' && Array.isArray(candidate.blocks)) {
    return isEditorJsSection(candidate) ? (candidate as EditorJsSection) : null;
  }

  pushHeading(candidateData.title);

  if (candidate.type === 'content' || candidate.type === 'custom') {
    pushParagraph(candidateData.body || candidateData.html || candidateData.custom_html);
  }

  if (candidate.type === 'cta') {
    pushHeading(candidateData.cta_title);

    if (Array.isArray(candidateData.cta_points)) {
      const items = candidateData.cta_points
        .filter((item): item is string => typeof item === 'string')
        .map(stripHtmlTags)
        .filter(Boolean);

      if (items.length > 0) {
        blocks.push({
          type: 'list',
          data: {
            style: 'unordered',
            items,
          },
        });
      }
    }

    if (candidateData.cta_button && typeof candidateData.cta_button === 'object') {
      const ctaButton = candidateData.cta_button as Record<string, unknown>;
      const label = typeof ctaButton.label === 'string' ? stripHtmlTags(ctaButton.label) : '';
      const url = typeof ctaButton.url === 'string' ? ctaButton.url.trim() : '';
      if (label || url) {
        pushParagraph(`${label}${label && url ? ' - ' : ''}${url}`);
      }
    }
  }

  if (candidate.type === 'features' && Array.isArray(candidateData.feature_items)) {
    for (const feature of candidateData.feature_items) {
      if (!feature || typeof feature !== 'object') {
        continue;
      }

      const featureRecord = feature as Record<string, unknown>;
      pushHeading(featureRecord.title, 3);
      pushParagraph(featureRecord.description);
    }
  }

  if (candidate.type === 'comparison' && candidateData.comparison_table && typeof candidateData.comparison_table === 'object') {
    const table = candidateData.comparison_table as Record<string, unknown>;
    const headers = Array.isArray(table.headers)
      ? table.headers.filter((item): item is string => typeof item === 'string').map(stripHtmlTags)
      : [];
    const rows = Array.isArray(table.rows)
      ? table.rows
          .filter((row): row is unknown[] => Array.isArray(row))
          .map((row) => row.map((cell) => (typeof cell === 'string' ? stripHtmlTags(cell) : '')))
      : [];

    if (headers.length > 0 || rows.length > 0) {
      const content = headers.length > 0 ? [headers, ...rows] : rows;
      blocks.push({
        type: 'table',
        data: {
          withHeadings: headers.length > 0,
          content,
        },
      });
    }
  }

  if (blocks.length === 0) {
    blocks.push({
      type: 'paragraph',
      data: { text: '' },
    });
  }

  return {
    id: sectionId,
    type: 'editorjs',
    blocks,
  };
}

export function normalizeEditorJsSectionsPayload(value: unknown): EditorJsSectionsPayload {
  if (isEditorJsSectionsPayload(value)) {
    return value;
  }

  if (value && typeof value === 'object') {
    const candidate = value as Record<string, unknown>;
    if (Array.isArray(candidate.sections)) {
      const migratedSections = candidate.sections
        .map(legacySectionToEditorSection)
        .filter((section): section is EditorJsSection => section !== null);

      return {
        sections: migratedSections,
      };
    }
  }

  return {
    sections: [],
  };
}
