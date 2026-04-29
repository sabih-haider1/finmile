import { notFound } from 'next/navigation';
import { supabase } from '@/supabaseClient';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Metadata } from 'next';
import { getAuthorProfileByName } from '@/data/authors';
import { DetailPageTemplate } from '@/components/detail-template';
import { ContentSection, UnifiedContent } from '@/types/content';
import { isEditorSections } from '@/lib/editorjs';

interface Props {
  params: Promise<{ slug: string }>;
}

// Generate metadata dynamically
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const { data: whitepaper } = await supabase
    .from('whitepapers')
    .select('title, summary')
    .eq('slug', slug)
    .single();

  if (!whitepaper) {
    return { title: 'Whitepaper Not Found | Finmile' };
  }

  return {
    title: `${whitepaper.title} | Finmile Research`,
    description: whitepaper.summary,
  };
}

export default async function WhitepaperDetailPage({ params }: Props) {
  const { slug } = await params;

  const { data: whitepaper } = await supabase
    .from('whitepapers')
    .select('*')
    .eq('slug', slug)
    .single();

  if (!whitepaper) {
    notFound();
  }

  const publishDate = whitepaper.published_date || whitepaper.published_at || whitepaper.created_at;
  const resolvedAuthor = getAuthorProfileByName(whitepaper.author || whitepaper.author_name);
  const authorName = whitepaper.author || whitepaper.author_name || 'Finmile Editorial Team';

  const authorDisplay = resolvedAuthor || authorName;

  // Fetch related whitepapers
  const { data: relatedItems } = await supabase
    .from('whitepapers')
    .select('id, title, slug, cover_image_url, published_date, created_at')
    .neq('id', whitepaper.id)
    .eq('is_published', true)
    .limit(3);

  const sidebarRelated = (relatedItems || []).map((item) => ({
    id: item.id,
    title: item.title,
    thumbnail: item.cover_image_url || undefined,
    date: item.published_date || item.created_at,
    url: `/whitepapers/${item.slug}`,
  }));

  const legacySections = (whitepaper.sections && typeof whitepaper.sections === 'object' && Array.isArray((whitepaper.sections as { sections?: unknown }).sections))
    ? (whitepaper.sections as { sections: ContentSection[] }).sections
    : null;

  const editorSections = isEditorSections(whitepaper.sections)
    ? whitepaper.sections.sections
    : null;

  const unifiedContent = (whitepaper.sections && typeof whitepaper.sections === 'object' && 'hero' in whitepaper.sections)
    ? (whitepaper.sections as UnifiedContent)
    : null;

  const fallbackContent: UnifiedContent = {
    hero: {
      title: whitepaper.title,
      image_url: whitepaper.cover_image_url,
      description: whitepaper.summary,
      metadata: {
        published_date: publishDate,
        read_time: 'Whitepaper',
        author: authorName,
      },
    },
    sections: editorSections && editorSections.length > 0
      ? editorSections
      : legacySections && legacySections.length > 0
        ? legacySections
        : [
            {
              id: 'whitepaper-summary',
              type: 'content',
              data: {
                body: `<p>${whitepaper.summary}</p>`,
              },
            },
            {
              id: 'whitepaper-download',
              type: 'cta',
              data: {
                cta_title: `Download ${whitepaper.title}`,
                cta_points: [
                  'Get the full whitepaper PDF',
                  'Use it as a reference document',
                  'Share it with your team',
                ],
                cta_button: { label: 'Download PDF', url: whitepaper.pdf_url },
              },
            },
          ],
    sidebar: {
      related: sidebarRelated,
    },
  };

  const content: UnifiedContent = unifiedContent
    ? {
        ...unifiedContent,
        hero: {
          ...unifiedContent.hero,
          title: unifiedContent.hero.title || whitepaper.title,
          image_url: unifiedContent.hero.image_url ?? whitepaper.cover_image_url,
          description: whitepaper.summary,
          metadata: {
            ...unifiedContent.hero.metadata,
            published_date: publishDate,
            read_time: unifiedContent.hero.metadata?.read_time || 'Whitepaper',
            author: authorName,
          },
        },
        sections: editorSections && editorSections.length > 0
          ? editorSections
          : legacySections && legacySections.length > 0
            ? legacySections
            : unifiedContent.sections,
        sidebar: fallbackContent.sidebar,
      }
    : fallbackContent;

  return (
    <main className="min-h-screen bg-white text-gray-900 flex flex-col relative overflow-hidden font-montserrat">
      <Header theme="light" />
      
      <div className="flex-grow flex flex-col relative z-10 w-full pt-6">
        <DetailPageTemplate 
          content={content} 
          author={authorDisplay} 
          downloadButton={whitepaper.pdf_url ? { url: whitepaper.pdf_url, label: 'Download PDF' } : undefined}
        />
      </div>

      <Footer />
    </main>
  );
}
