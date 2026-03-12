// Type definitions for the four content modules

export interface Blog {
  id: string;
  title: string;
  slug: string;
  summary: string;
  body: string;
  cover_image_url: string | null;
  author_name: string | null;
  category: string | null;
  tags: string[] | null;
  is_featured: boolean;
  is_published: boolean;
  published_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface Whitepaper {
  id: string;
  title: string;
  slug: string;
  summary: string;
  cover_image_url: string | null;
  pdf_url: string;
  author_name: string | null;
  topic: string | null;
  industry: string | null;
  tags: string[] | null;
  is_featured: boolean;
  is_published: boolean;
  published_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface Resource {
  id: string;
  title: string;
  slug: string;
  description: string;
  file_url: string;
  file_type: 'pdf' | 'docx' | 'xlsx' | 'zip';
  thumbnail_url: string | null;
  tags: string[] | null;
  is_featured: boolean;
  is_published: boolean;
  created_at: string;
  updated_at: string;
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
}

export interface CaseStudy {
  id: string;
  title: string;
  slug: string;
  summary: string;
  content: string;
  cover_image_url: string | null;
  company_name: string | null;
  industry: string | null;
  challenge: string | null;
  solution: string | null;
  results: string | null;
  tags: string[] | null;
  is_featured: boolean;
  is_published: boolean;
  published_at: string | null;
  created_at: string;
  updated_at: string;
}

// Form data types (for creating/updating)
export type BlogFormData = Omit<Blog, 'id' | 'created_at' | 'updated_at'>;
export type WhitepaperFormData = Omit<Whitepaper, 'id' | 'created_at' | 'updated_at'>;
export type ResourceFormData = Omit<Resource, 'id' | 'created_at' | 'updated_at'>;
export type GuideFormData = Omit<Guide, 'id' | 'created_at' | 'updated_at'>;
export type CaseStudyFormData = Omit<CaseStudy, 'id' | 'created_at' | 'updated_at'>;
