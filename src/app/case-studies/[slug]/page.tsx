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

// Generate metadata dynamically
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const { data: caseStudy } = await supabase
    .from('case_studies')
    .select('title, summary')
    .eq('slug', slug)
    .single();

  if (!caseStudy) {
    return { title: 'Case Study Not Found | Finmile' };
  }

  return {
    title: `${caseStudy.title} | Finmile Case Studies`,
    description: caseStudy.summary,
  };
}

export default async function CaseStudyDetailPage({ params }: Props) {
  const { slug } = await params;

  const { data: caseStudy } = await supabase
    .from('case_studies')
    .select('*')
    .eq('slug', slug)
    .single();

  if (!caseStudy) {
    notFound();
  }

  const publishDate = caseStudy.published_at || caseStudy.created_at;
  const authorName = caseStudy.author_name || caseStudy.company_name || 'Finmile Editorial Team';
  const resolvedAuthor = getAuthorProfileByName(authorName);
  const authorDisplay = resolvedAuthor || authorName;

  const { data: relatedCaseStudies } = await supabase
    .from('case_studies')
    .select('id, title, slug, cover_image_url, published_at, created_at')
    .neq('id', caseStudy.id)
    .eq('is_published', true)
    .limit(3);

  const sidebarRelated = (relatedCaseStudies || []).map((item) => ({
    id: item.id,
    title: item.title,
    thumbnail: item.cover_image_url || undefined,
    date: item.published_at || item.created_at,
    url: `/case-studies/${item.slug}`,
  }));

  const sectionsData = caseStudy.sections && typeof caseStudy.sections === 'object'
    ? caseStudy.sections as Partial<UnifiedContent>
    : null;

  const content: UnifiedContent = sectionsData
    ? {
        ...sectionsData,
        hero: {
          ...(sectionsData.hero || {}),
          title: sectionsData.hero?.title || caseStudy.title,
          image_url: sectionsData.hero?.image_url ?? caseStudy.cover_image_url,
          description: caseStudy.summary,
          metadata: {
            ...(sectionsData.hero?.metadata || {}),
            published_date: publishDate,
            read_time: sectionsData.hero?.metadata?.read_time || 'Case study',
            author: authorName || sectionsData.hero?.metadata?.author,
          },
        },
        sections: Array.isArray(sectionsData.sections) && sectionsData.sections.length > 0
          ? sectionsData.sections
          : [
              {
                id: 'case-study-body',
                type: 'content' as const,
                data: {
                  body: caseStudy.content || `<p>${caseStudy.summary}</p>`,
                },
              },
            ],
        sidebar: {
          related: sidebarRelated,
        },
      }
    : {
        hero: {
          title: caseStudy.title,
          image_url: caseStudy.cover_image_url,
          description: caseStudy.summary,
          metadata: {
            published_date: publishDate,
            read_time: 'Case study',
            author: authorName,
          },
        },
        sections: [
          {
            id: 'case-study-body',
            type: 'content' as const,
            data: {
              body: caseStudy.content || `<p>${caseStudy.summary}</p>`,
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
    <main className="min-h-screen bg-white text-gray-900 flex flex-col relative overflow-hidden">
      <Header theme="light" />

      <div className="flex-grow flex flex-col relative z-10 w-full pt-16">
        <DetailPageTemplate content={content} author={authorDisplay} downloadButton={downloadButton} />
      </div>

      <Footer />
    </main>
  );
}
