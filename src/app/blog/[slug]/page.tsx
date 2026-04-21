import { notFound } from 'next/navigation';
import { supabase } from '@/supabaseClient';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Metadata } from 'next';
import { DetailPageTemplate } from '@/components/detail-template';
import { UnifiedContent } from '@/types/content';
import { getAuthorProfileByName } from '@/data/authors';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const { data: blog } = await supabase
    .from('blogs')
    .select('title, summary')
    .eq('slug', slug)
    .single();

  if (!blog) {
    return { title: 'Blog Post Not Found | Finmile' };
  }

  return {
    title: `${blog.title} | Finmile Blog`,
    description: blog.summary,
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;

  const { data: blog } = await supabase
    .from('blogs')
    .select('*')
    .eq('slug', slug)
    .single();

  if (!blog) {
    notFound();
  }

  const publishDate = blog.published_at || blog.created_at;

  const { data: relatedBlogs } = await supabase
    .from('blogs')
    .select('id, title, slug, cover_image_url, published_at, created_at')
    .neq('id', blog.id)
    .eq('is_published', true)
    .limit(3);

  const sidebarRelated = (relatedBlogs || []).map((item) => ({
    id: item.id,
    title: item.title,
    thumbnail: item.cover_image_url || undefined,
    date: item.published_at || item.created_at,
    url: `/blog/${item.slug}`,
  }));

  const resolvedAuthor = getAuthorProfileByName(blog.author_name);
  const authorDisplay = resolvedAuthor || blog.author_name || 'Finmile Editorial Team';

  const sectionsPayload = (blog.sections && typeof blog.sections === 'object')
    ? blog.sections as Partial<UnifiedContent>
    : null;

  const storedSections = Array.isArray(sectionsPayload?.sections)
    ? sectionsPayload.sections
    : [];

  const heroOverrides = sectionsPayload?.hero;

  const content: UnifiedContent = sectionsPayload
    ? {
        hero: {
          ...(heroOverrides || {}),
          title: heroOverrides?.title || blog.title,
          image_url: heroOverrides?.image_url ?? blog.cover_image_url,
          description: blog.summary,
          metadata: {
            ...(heroOverrides?.metadata || {}),
            published_date: publishDate,
            read_time: heroOverrides?.metadata?.read_time || 'Read article',
            author: blog.author_name || heroOverrides?.metadata?.author,
          },
        },
        sections: storedSections.length > 0
          ? storedSections
          : [
              {
                id: 'blog-body',
                type: 'content',
                data: {
                  body: blog.body || `<p>${blog.summary}</p>`,
                },
              },
            ],
        sidebar: {
          related: sidebarRelated,
        },
      }
    : {
        hero: {
          title: blog.title,
          image_url: blog.cover_image_url,
          description: blog.summary,
          metadata: {
            published_date: publishDate,
            read_time: 'Read article',
            author: blog.author_name || 'Finmile Editorial Team',
          },
        },
        sections: [
          {
            id: 'blog-body',
            type: 'content',
            data: {
              body: blog.body || `<p>${blog.summary}</p>`,
            },
          },
        ],
        sidebar: {
          related: sidebarRelated,
        },
      };

  const ctaSection = content.sections.find((section) => section.type === 'cta');
  const ctaButton = ctaSection?.data?.cta_button as { label?: string; url?: string } | undefined;
  const downloadButton = ctaButton?.url
    ? { url: ctaButton.url, label: ctaButton.label || 'Download PDF' }
    : undefined;

  return (
    <main className="min-h-screen bg-white text-gray-900 flex flex-col relative overflow-hidden font-montserrat">
      <Header theme="light" />

      <div className="flex-grow flex flex-col relative z-10 w-full pt-16">
        <DetailPageTemplate content={content} author={authorDisplay} downloadButton={downloadButton} />
      </div>

      <Footer />
    </main>
  );
}
