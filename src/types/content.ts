// Type definitions for the four content modules

// ==================== Unified Content Section Types ====================

export interface ContentMetadata {
  published_date?: string;
  read_time?: string;
  author?: string;
}

export interface ContentHero {
  title: string;
  image_url: string | null;
  description: string;
  metadata?: ContentMetadata;
}

export interface ContentSectionData {
  // Content section
  body?: string;
  // Custom HTML/CSS section
  title?: string;
  html?: string;
  css?: string;
  custom_html?: string;
  custom_css?: string;
  // CTA section
  cta_title?: string;
  cta_points?: string[];
  cta_button?: { label: string; url: string };
  // Features section
  feature_items?: Array<{ icon?: string; title: string; description: string }>;
  // Comparison section
  comparison_table?: { headers: string[]; rows: string[][] };
  // Generic data storage
  [key: string]: unknown;
}

export interface ContentSection {
  id: string;
  type: 'content' | 'custom' | 'cta' | 'features' | 'comparison';
  data: ContentSectionData;
}

export interface EditorJsHeaderBlock {
  id?: string;
  type: 'header';
  data: {
    text: string;
    level: 1 | 2 | 3 | 4;
  };
}

export interface EditorJsParagraphBlock {
  id?: string;
  type: 'paragraph';
  data: {
    text: string;
  };
}

export interface EditorJsListBlock {
  id?: string;
  type: 'list';
  data: {
    style: 'ordered' | 'unordered' | 'checklist';
    items: Array<string | { content?: string; items?: Array<string | { content?: string } | null>; meta?: Record<string, unknown> } | null>;
  };
}

export interface EditorJsTableBlock {
  id?: string;
  type: 'table';
  data: {
    withHeadings?: boolean;
    content: string[][];
  };
}

export interface EditorJsQuoteBlock {
  id?: string;
  type: 'quote';
  data: {
    text: string;
    caption?: string;
    alignment?: 'left' | 'center';
  };
}

export interface EditorJsImageBlock {
  id?: string;
  type: 'image';
  data: {
    file: {
      url: string;
    };
    caption?: string;
    withBorder?: boolean;
    withBackground?: boolean;
    stretched?: boolean;
  };
}

export type EditorJsBlock =
  | EditorJsHeaderBlock
  | EditorJsParagraphBlock
  | EditorJsListBlock
  | EditorJsTableBlock
  | EditorJsQuoteBlock
  | EditorJsImageBlock;

export interface EditorJsSection {
  id: string;
  type: 'editorjs';
  blocks: EditorJsBlock[];
}

export interface EditorJsSections {
  sections: EditorJsSection[];
}

export interface RelatedResource {
  id: string;
  title: string;
  thumbnail?: string;
  date?: string;
  tags?: string[];
  url: string;
}

export interface ContentSidebar {
  related?: RelatedResource[];
  table_of_contents?: Array<{ level: number; text: string; id: string }>;
}

export interface UnifiedContent {
  hero: ContentHero;
  sections: Array<ContentSection | EditorJsSection>;
  sidebar?: ContentSidebar;
}

export interface LegacySections {
  sections: ContentSection[];
}

export type ContentSectionsPayload = UnifiedContent | EditorJsSections | LegacySections;

// ==================== Content Type Interfaces ====================

export interface Blog {
  id: string;
  title: string;
  slug: string;
  summary: string;
  body: string;
  cover_image_url: string | null;
  author_name: string | null;
  category: string | null;
  topic: string | null;
  industry: string | null;
  tags: string[] | null;
  is_featured: boolean;
  is_published: boolean;
  published_at: string | null;
  created_at: string;
  updated_at: string;
  sections?: ContentSectionsPayload;
}

export interface Whitepaper {
  id: string;
  title: string;
  slug: string;
  summary: string;
  cover_image_url: string | null;
  pdf_url: string;
  author_name: string | null;
  author: string | null;
  published_date: string | null;
  topic: string | null;
  industry: string | null;
  tags: string[] | null;
  is_featured: boolean;
  is_published: boolean;
  published_at: string | null;
  created_at: string;
  updated_at: string;
  sections?: ContentSectionsPayload;
}

export interface Resource {
  id: string;
  title: string;
  slug: string;
  description: string;
  file_url: string | null;
  file_type: 'pdf' | 'docx' | 'xlsx' | 'zip' | null;
  thumbnail_url: string | null;
  author_name: string | null;
  topic: string | null;
  industry: string | null;
  tags: string[] | null;
  is_featured: boolean;
  is_published: boolean;
  created_at: string;
  updated_at: string;
  sections?: ContentSectionsPayload;
}

export interface Guide {
  id: string;
  title: string;
  slug: string;
  description: string;
  pdf_url: string;
  cover_image_url: string | null;
  created_at: string;
  updated_at: string;
  sections?: ContentSectionsPayload;
}

export interface CaseStudy {
  id: string;
  title: string;
  slug: string;
  summary: string;
  content?: string;
  cover_image_url: string | null;
  author_name?: string | null;
  company_name: string | null;
  topic: string | null;
  industry: string | null;
  challenge?: string | null;
  solution?: string | null;
  results?: string | null;
  tags: string[] | null;
  is_featured: boolean;
  is_published: boolean;
  published_at: string | null;
  created_at: string;
  updated_at: string;
  sections?: ContentSectionsPayload;
}

// Form data types (for creating/updating)
export type BlogFormData = Omit<Blog, 'id' | 'created_at' | 'updated_at'>;
export type WhitepaperFormData = Omit<Whitepaper, 'id' | 'created_at' | 'updated_at'>;
export type ResourceFormData = Omit<Resource, 'id' | 'created_at' | 'updated_at'>;
export type GuideFormData = Omit<Guide, 'id' | 'created_at' | 'updated_at'>;
export type CaseStudyFormData = Omit<CaseStudy, 'id' | 'created_at' | 'updated_at'>;
