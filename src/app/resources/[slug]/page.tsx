import { notFound } from 'next/navigation';
import { supabase } from '@/supabaseClient';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Metadata } from 'next';
import { DetailPageTemplate } from '@/components/detail-template';
import { UnifiedContent } from '@/types/content';
import { getAuthorProfileByName } from '@/data/authors';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const { data: resource } = await supabase
    .from('resources')
    .select('title, description')
    .eq('slug', slug)
    .single();

  if (!resource) {
    return { title: 'Resource Not Found | Finmile' };
  }

  return {
    title: `${resource.title} | Finmile Resources`,
    description: resource.description,
  };
}

export default async function ResourceDetailPage({ params }: Props) {
  const { slug } = await params;

  const { data: resource } = await supabase
    .from('resources')
    .select('*')
    .eq('slug', slug)
    .single();

  if (!resource) {
    notFound();
  }

  const authorName = (resource as { author_name?: string }).author_name || 'Finmile Editorial Team';
  const publishDate = resource.created_at;

  const { data: relatedResources } = await supabase
    .from('resources')
    .select('id, title, slug, thumbnail_url, created_at')
    .neq('id', resource.id)
    .eq('is_published', true)
    .limit(3);

  const sidebarRelated = (relatedResources || []).map((item) => ({
    id: item.id,
    title: item.title,
    thumbnail: item.thumbnail_url || undefined,
    date: item.created_at,
    url: `/resources/${item.slug}`,
  }));

  const resolvedAuthor = getAuthorProfileByName(authorName);
  const authorDisplay = resolvedAuthor || authorName;

  const fallbackContent: UnifiedContent = {
    hero: {
      title: resource.title,
      image_url: resource.thumbnail_url,
      description: resource.description,
      metadata: {
        published_date: publishDate,
        read_time: resource.file_type.toUpperCase(),
        author: authorName,
      },
    },
    sections: [
      {
        id: 'resource-body',
        type: 'content',
        data: {
          body: `<p>${resource.description}</p><p><a href="${resource.file_url}" target="_blank" rel="noopener noreferrer">Download the resource</a></p>`,
        },
      },
      {
        id: 'resource-cta',
        type: 'cta',
        data: {
          cta_title: `Download ${resource.title}`,
          cta_points: [
            'Open the full file',
            'Use it for internal sharing',
            'Reference it in your team workflow',
          ],
          cta_button: { label: 'Download File', url: resource.file_url },
        },
      },
    ],
    sidebar: {
      related: sidebarRelated,
    },
  };

  const content = (resource.sections && typeof resource.sections === 'object')
    ? (resource.sections as UnifiedContent)
    : fallbackContent;

  return (
    <main className="min-h-screen bg-white text-gray-900 flex flex-col relative overflow-hidden font-montserrat">
      <Header theme="light" />

      <div className="flex-grow flex flex-col relative z-10 w-full pt-16">
        <DetailPageTemplate
          content={content}
          author={authorDisplay}
          downloadButton={resource.file_url ? { url: resource.file_url, label: resource.file_type === 'pdf' ? 'Download PDF' : 'Download File' } : undefined}
        />
      </div>

      <Footer />
    </main>
  );
}
