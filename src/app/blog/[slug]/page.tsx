import { notFound } from 'next/navigation';
import { supabase } from '@/supabaseClient';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/Badge";
import Image from 'next/image';
import { Metadata } from 'next';

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

  return (
    <main className="min-h-screen bg-[#0B0616] text-[#ffffff] flex flex-col relative overflow-hidden">
      <Header />

      {/* Ambient glows */}
      <div className="absolute top-[5%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#3B257E] rounded-full blur-[140px] opacity-30 pointer-events-none" />
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[1400px] h-[800px] bg-[#531FD1] rounded-[100%] blur-[220px] opacity-20 pointer-events-none" />

      <div className="flex-grow flex flex-col relative z-10 w-full max-w-[1440px] mx-auto">

        {/* Hero Section */}
        <section className="relative w-full pt-[140px] pb-16 px-6 mt-10">
          <div className="max-w-[900px] mx-auto text-center flex flex-col items-center">

            <div className="mb-6 flex gap-3 justify-center flex-wrap">
              <Badge label="Blog" showNew={false} />
              {blog.category && <Badge label={blog.category} showNew={false} />}
              {blog.topic && <Badge label={blog.topic} showNew={false} />}
              {blog.industry && <Badge label={blog.industry} showNew={false} />}
              {blog.tags?.map((tag: string) => (
                <Badge key={tag} label={tag} showNew={false} />
              ))}
            </div>

            <h1 className="text-[36px] md:text-[52px] lg:text-[64px] tracking-tight leading-[1.15] md:leading-[1.1] font-bold text-white mb-6">
              {blog.title}
            </h1>

            <p className="text-[#9CA3AF] text-[16px] md:text-[18px] font-medium leading-relaxed max-w-[800px] mx-auto mb-10">
              {blog.summary}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 text-[#D1D5DB] text-[15px] font-medium mb-12">
              {blog.author_name && (
                <div className="flex items-center gap-3 bg-white/[0.04] border border-white/10 rounded-full py-1.5 px-4 backdrop-blur-md">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#6A27D4] to-[#A78BFA] flex items-center justify-center text-white font-bold text-xs">
                    {blog.author_name.charAt(0)}
                  </div>
                  <span>By {blog.author_name}</span>
                </div>
              )}
              {publishDate && (
                <div className="flex items-center gap-2 bg-white/[0.04] border border-white/10 rounded-full py-1.5 px-4 backdrop-blur-md">
                  <svg className="w-4 h-4 text-[#A78BFA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>{new Date(publishDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Cover Image */}
        {blog.cover_image_url ? (
          <section className="relative z-10 max-w-[1000px] mx-auto px-6 pb-16 w-full">
            <div className="rounded-[24px] overflow-hidden border border-white/10 bg-white/[0.04] shadow-2xl p-2">
              <div className="relative w-full aspect-[16/9] rounded-[16px] overflow-hidden">
                <Image
                  src={blog.cover_image_url}
                  alt={`${blog.title} Cover`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>
        ) : null}

        {/* Blog Body */}
        <section className="relative z-10 max-w-[900px] mx-auto px-6 pb-16 w-full">
          {blog.body ? (
            <div className="rounded-[20px] border border-white/10 bg-white/[0.04] backdrop-blur-xl p-8 md:p-12">
              <div
                className="text-[#D1D5DB] text-[16px] md:text-[17px] leading-relaxed prose prose-invert max-w-none
                  prose-headings:text-white prose-headings:font-bold prose-headings:mb-4 prose-headings:mt-8
                  prose-h2:text-2xl prose-h3:text-xl
                  prose-p:mb-5 prose-p:text-[#D1D5DB]
                  prose-li:text-[#D1D5DB] prose-li:mb-1
                  prose-strong:text-white prose-a:text-[#A78BFA] prose-a:no-underline hover:prose-a:underline
                  prose-blockquote:border-l-[#6A27D4] prose-blockquote:text-[#9CA3AF]
                  prose-code:text-[#A78BFA] prose-code:bg-white/5 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded"
                dangerouslySetInnerHTML={{ __html: blog.body }}
              />
            </div>
          ) : (
            <div className="rounded-[20px] border border-white/10 bg-white/[0.04] backdrop-blur-xl p-10 text-center">
              <div className="text-5xl mb-4">📝</div>
              <p className="text-[#9CA3AF] text-[15px]">Content coming soon.</p>
            </div>
          )}
        </section>

        {/* CTA Section */}
        <section className="relative z-10 max-w-[900px] mx-auto px-6 pb-16 w-full">
          <div className="rounded-[24px] border border-white/10 bg-gradient-to-br from-[#6A27D4]/20 to-[#8B5CF6]/10 backdrop-blur-xl p-10 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Want to Learn More?
            </h3>
            <p className="text-[#D1D5DB] text-[16px] mb-8 max-w-[600px] mx-auto">
              Explore how Finmile&apos;s AI-powered logistics platform can transform your last-mile delivery operations.
            </p>
            <a
              href="/whitepapers/all"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-[#6A27D4] to-[#8B5CF6] text-white font-semibold text-[15px] shadow-[0_0_30px_rgba(106,39,212,0.4)] hover:shadow-[0_0_40px_rgba(106,39,212,0.6)] hover:-translate-y-0.5 transition-all"
            >
              Browse Research &amp; Insights →
            </a>
          </div>
        </section>

      </div>

      <Footer />
    </main>
  );
}
