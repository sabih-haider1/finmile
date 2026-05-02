/**
 * Input validation schemas using Zod
 * 
 * All user input must be validated against these schemas
 * before being stored in the database.
 */

import { z } from 'zod';

const whitepaperAuthors = [
  'Alex Chindris',
  'Andrei Chirila',
  'Chris Sargeant',
  'Hiren Solanki',
  'Rich Pleeth',
] as const;

function coerceUrlInput(value: unknown): unknown {
  if (typeof value === 'string') {
    return value;
  }

  if (value && typeof value === 'object') {
    const keys = ['url', 'publicUrl', 'signedUrl', 'href', 'path'];
    for (const key of keys) {
      const candidate = (value as Record<string, unknown>)[key];
      if (typeof candidate === 'string') {
        return candidate;
      }
    }
  }

  return value;
}

// Common validation patterns
const urlPattern = z.string().url().optional().nullable();
const slugPattern = z.string().min(1).max(200).regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
  message: 'Slug must contain only lowercase letters, numbers, and hyphens',
});

const editorJsHeaderBlockSchema = z.object({
  id: z.string().optional(),
  type: z.literal('header'),
  data: z.object({
    text: z.string(),
    level: z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4)]),
  }),
});

const editorJsParagraphBlockSchema = z.object({
  id: z.string().optional(),
  type: z.literal('paragraph'),
  data: z.object({
    text: z.string(),
  }),
});

const editorJsListBlockSchema = z.object({
  id: z.string().optional(),
  type: z.literal('list'),
  data: z.object({
    style: z.union([z.literal('ordered'), z.literal('unordered')]),
    items: z.array(z.union([
      z.string(),
      z.object({
        content: z.string().optional(),
      }).passthrough(),
      z.null(),
    ])),
  }),
});

const editorJsTableBlockSchema = z.object({
  id: z.string().optional(),
  type: z.literal('table'),
  data: z.object({
    withHeadings: z.boolean().optional(),
    content: z.array(z.array(z.string())),
  }),
});

const editorJsQuoteBlockSchema = z.object({
  id: z.string().optional(),
  type: z.literal('quote'),
  data: z.object({
    text: z.string(),
    caption: z.string().optional(),
    alignment: z.union([z.literal('left'), z.literal('center')]).optional(),
  }),
});

const editorJsImageBlockSchema = z.object({
  id: z.string().optional(),
  type: z.literal('image'),
  data: z.object({
    file: z.object({
      url: z.string().url(),
    }),
    caption: z.string().optional(),
    withBorder: z.boolean().optional(),
    withBackground: z.boolean().optional(),
    stretched: z.boolean().optional(),
  }),
});

const editorJsBlockSchema = z.discriminatedUnion('type', [
  editorJsHeaderBlockSchema,
  editorJsParagraphBlockSchema,
  editorJsListBlockSchema,
  editorJsTableBlockSchema,
  editorJsQuoteBlockSchema,
  editorJsImageBlockSchema,
]);

const editorJsSectionSchema = z.object({
  id: z.string().min(1),
  type: z.literal('editorjs'),
  blocks: z.array(editorJsBlockSchema),
});

export const editorSectionsSchema = z.object({
  sections: z.array(editorJsSectionSchema),
});

const legacyContentSectionSchema = z.object({
  id: z.string().min(1),
  type: z.union([
    z.literal('content'),
    z.literal('custom'),
    z.literal('cta'),
    z.literal('features'),
    z.literal('comparison'),
  ]),
  data: z.record(z.string(), z.unknown()),
});

export const legacySectionsSchema = z.object({
  sections: z.array(legacyContentSectionSchema),
});

const whitepaperSectionsSchema = z.union([editorSectionsSchema, legacySectionsSchema]);

// Blog validation schema
export const blogSchema = z.object({
  title: z.string().min(1, 'Title is required').max(500),
  slug: slugPattern,
  summary: z.string().max(1000).optional(),
  body: z.string().min(1, 'Body content is required'),
  cover_image_url: urlPattern,
  author_name: z.string().max(200).optional().nullable(),
  category: z.string().max(100).optional().nullable(),
  topic: z.string().max(200).optional().nullable(),
  industry: z.string().max(200).optional().nullable(),
  tags: z.array(z.string()).optional().nullable(),
  is_featured: z.boolean().optional(),
  is_published: z.boolean().optional(),
  published_at: z.string().datetime().optional().nullable(),
  sections: editorSectionsSchema.optional().nullable(),
});

export const blogUpdateSchema = blogSchema.partial().extend({
  id: z.string().uuid().optional(),
  created_at: z.string().optional(),
  updated_at: z.string().optional(),
  published_at: z.string().optional(),
});

// Case Study validation schema
export const caseStudySchema = z.object({
  title: z.string().min(1, 'Title is required').max(500),
  slug: slugPattern,
  summary: z.string().max(1000).optional(),
  content: z.string().optional().nullable(),
  cover_image_url: urlPattern,
  author_name: z.string().max(200).optional().nullable(),
  company_name: z.string().max(200).optional().nullable(),
  topic: z.string().max(200).optional().nullable(),
  industry: z.string().max(200).optional().nullable(),
  tags: z.array(z.string()).optional().nullable(),
  is_featured: z.boolean().optional(),
  is_published: z.boolean().optional(),
  published_at: z.string().datetime().optional().nullable(),
  sections: editorSectionsSchema.optional().nullable(),
});

export const caseStudyUpdateSchema = caseStudySchema.partial().extend({
  id: z.string().uuid().optional(),
  created_at: z.string().optional(),
  updated_at: z.string().optional(),
  published_at: z.string().optional(),
});

// Whitepaper validation schema
export const whitepaperSchema = z.object({
  title: z.string().min(1, 'Title is required').max(500),
  slug: slugPattern,
  summary: z.string().max(1000).optional(),
  cover_image_url: urlPattern,
  pdf_url: z.preprocess(
    coerceUrlInput,
    z.string().url('Valid PDF URL is required')
  ),
  author_name: z.string().max(200).optional().nullable(),
  author: z.enum(whitepaperAuthors).optional().nullable(),
  published_date: z.string().datetime().optional().nullable(),
  topic: z.string().max(200).optional().nullable(),
  industry: z.string().max(200).optional().nullable(),
  tags: z.array(z.string()).optional().nullable(),
  is_featured: z.boolean().optional(),
  is_published: z.boolean().optional(),
  sections: whitepaperSectionsSchema.optional().nullable(),
});

export const whitepaperUpdateSchema = whitepaperSchema.partial().extend({
  id: z.string().uuid().optional(),
  created_at: z.string().optional(),
  updated_at: z.string().optional(),
  published_at: z.string().optional(),
});

// Resource validation schema
const allowedFileTypes = ['pdf', 'docx', 'xlsx', 'zip', 'jpg', 'png', 'webp', 'doc', 'xls', 'pptx', 'ppt'];

export const resourceSchema = z.object({
  title: z.string().min(1, 'Title is required').max(500),
  slug: slugPattern,
  description: z.string().max(2000).optional(),
  file_url: z.preprocess(
    coerceUrlInput,
    z.string().url('Valid file URL is required').optional().nullable()
  ),
  file_type: z.enum(allowedFileTypes as [string, ...string[]], {
    message: `File type must be one of: ${allowedFileTypes.join(', ')}`,
  }).optional().nullable(),
  thumbnail_url: urlPattern,
  author_name: z.string().max(200).optional().nullable(),
  topic: z.string().max(200).optional().nullable(),
  industry: z.string().max(200).optional().nullable(),
  tags: z.array(z.string()).optional().nullable(),
  is_featured: z.boolean().optional(),
  is_published: z.boolean().optional(),
  created_at: z.string().datetime().optional(),
  sections: editorSectionsSchema.optional().nullable(),
});

export const resourceUpdateSchema = resourceSchema.partial().extend({
  id: z.string().uuid().optional(),
  created_at: z.string().optional(),
  updated_at: z.string().optional(),
});

// Guide validation schema
export const guideSchema = z.object({
  title: z.string().min(1, 'Title is required').max(500),
  slug: slugPattern,
  description: z.string().max(2000).optional(),
  pdf_url: z.string().url('Valid PDF URL is required'),
  cover_image_url: urlPattern,
  sections: editorSectionsSchema.optional().nullable(),
});

export const guideUpdateSchema = guideSchema.partial().extend({
  id: z.string().uuid().optional(),
  created_at: z.string().optional(),
  updated_at: z.string().optional(),
});

// Contact form validation schema
export const contactFormSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(100),
  lastName: z.string().min(1, 'Last name is required').max(100),
  email: z.string().email('Please enter a valid work email'),
  companyName: z.string().min(1, 'Company name is required').max(100),
  subject: z.string().max(200).optional(),
  message: z.string().min(10, 'Please tell us how we can help (at least 10 characters)').max(2000),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;



// Validation helper function
export function validateInput<T>(schema: z.ZodSchema<T>, data: unknown): {
  success: boolean;
  data?: T;
  error?: string;
} {
  try {
    const validatedData = schema.parse(data);
    return { success: true, data: validatedData };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errorMessage = error.issues
        .map((err) => `${err.path.join('.')}: ${err.message}`)
        .join('; ');
      return { success: false, error: errorMessage };
    }
    return { success: false, error: 'Validation failed' };
  }
}
