import { notFound } from 'next/navigation';
import { supabase } from '@/supabaseClient';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import Image from 'next/image';
import { Metadata } from 'next';

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

  return (
    <main className="min-h-screen bg-[#0B0616] text-[#ffffff] flex flex-col relative overflow-hidden">
      <Header />
      
      {/* Ambient glows */}
      <div className="absolute top-[5%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#3B257E] rounded-full blur-[140px] opacity-30 pointer-events-none" />
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[1400px] h-[800px] bg-[#531FD1] rounded-[100%] blur-[220px] opacity-20 pointer-events-none" />

      <div className="flex-grow flex flex-col relative z-10 w-full max-w-[1440px] mx-auto">
        
        {/* Hero Section */}
        <section className="relative w-full pt-[140px] pb-16 md:pb-16 px-6 mt-10">
          <div className="max-w-[900px] mx-auto text-center flex flex-col items-center">
            
            <div className="mb-6 flex gap-3 justify-center flex-wrap">
               <Badge label="Case Study" showNew={false} />
               {caseStudy.industry && (
                  <Badge label={caseStudy.industry} showNew={false} />
               )}
               {caseStudy.tags?.map((tag: string) => (
                  <Badge key={tag} label={tag} showNew={false} />
               ))}
            </div>
            
            <h1 className="text-[36px] md:text-[52px] lg:text-[64px] tracking-tight leading-[1.15] md:leading-[1.1] font-bold text-white mb-6">
              {caseStudy.title}
            </h1>
            
            <p className="text-[#9CA3AF] text-[16px] md:text-[18px] font-medium leading-relaxed max-w-[800px] mx-auto mb-10">
              {caseStudy.summary}
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-6 text-[#D1D5DB] text-[15px] font-medium mb-12">
               {caseStudy.company_name && (
                 <div className="flex items-center gap-3 bg-white/[0.04] border border-white/10 rounded-full py-1.5 px-4 backdrop-blur-md">
                   <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#6A27D4] to-[#A78BFA] flex items-center justify-center text-white font-bold text-xs">
                     {caseStudy.company_name.charAt(0)}
                   </div>
                   <span>{caseStudy.company_name}</span>
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
        {caseStudy.cover_image_url ? (
          <section className="relative z-10 max-w-[1000px] mx-auto px-6 pb-16 w-full">
            <div className="rounded-[24px] overflow-hidden border border-white/10 bg-white/[0.04] shadow-2xl p-2 liquid-glass">
              <div className="relative w-full aspect-[16/9] rounded-[16px] overflow-hidden bg-gradient-to-br from-purple-100/5 to-indigo-100/5">
                <Image 
                  src={caseStudy.cover_image_url} 
                  alt={`${caseStudy.title} Cover`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>
        ) : (
          <section className="relative z-10 max-w-[1000px] mx-auto px-6 pb-16 w-full mt-4">
            <div className="rounded-[24px] overflow-hidden border border-white/10 bg-white/[0.08] backdrop-blur-3xl shadow-2xl p-8 flex flex-col items-center justify-center min-h-[300px]">
              <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-6 shadow-[inset_0_2px_10px_rgba(255,255,255,0.1)]">
                <svg className="w-10 h-10 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white/90 mb-2">Case Study</h3>
              <p className="text-[#9CA3AF] text-[15px] font-medium text-center max-w-sm">
                Read on to discover the full case study details.
              </p>
            </div>
          </section>
        )}

        {/* Case Study Sections */}
        <section className="relative z-10 max-w-[900px] mx-auto px-6 pb-16 w-full">
          <div className="space-y-8">
            
            {/* Challenge Section */}
            {caseStudy.challenge && (
              <div className="rounded-[20px] border border-white/10 bg-white/[0.04] backdrop-blur-xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center text-sm">⚡</span>
                  The Challenge
                </h2>
                <div className="text-[#D1D5DB] text-[16px] leading-relaxed whitespace-pre-wrap">
                  {caseStudy.challenge}
                </div>
              </div>
            )}

            {/* Solution Section */}
            {caseStudy.solution && (
              <div className="rounded-[20px] border border-white/10 bg-white/[0.04] backdrop-blur-xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-sm">💡</span>
                  The Solution
                </h2>
                <div className="text-[#D1D5DB] text-[16px] leading-relaxed whitespace-pre-wrap">
                  {caseStudy.solution}
                </div>
              </div>
            )}

            {/* Results Section */}
            {caseStudy.results && (
              <div className="rounded-[20px] border border-white/10 bg-white/[0.04] backdrop-blur-xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center text-sm">📊</span>
                  The Results
                </h2>
                <div className="text-[#D1D5DB] text-[16px] leading-relaxed whitespace-pre-wrap">
                  {caseStudy.results}
                </div>
              </div>
            )}

            {/* Main Content Section */}
            {caseStudy.content && (
              <div className="rounded-[20px] border border-white/10 bg-white/[0.04] backdrop-blur-xl p-8">
                <div className="text-[#D1D5DB] text-[16px] leading-relaxed whitespace-pre-wrap prose prose-invert max-w-none">
                  {caseStudy.content}
                </div>
              </div>
            )}

          </div>
        </section>

        {/* CTA Section */}
        <section className="relative z-10 max-w-[900px] mx-auto px-6 pb-16 w-full">
          <div className="rounded-[24px] border border-white/10 bg-gradient-to-br from-[#6A27D4]/20 to-[#8B5CF6]/10 backdrop-blur-xl p-10 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Transform Your Operations?
            </h3>
            <p className="text-[#D1D5DB] text-[16px] mb-8 max-w-[600px] mx-auto">
              Learn how Finmile's AI-powered platform can deliver similar results for your business.
            </p>
            <Button variant="solid" size="lg" className="shadow-[0_0_30px_rgba(106,39,212,0.4)] hover:shadow-[0_0_40px_rgba(106,39,212,0.6)]">
              Get Started Today
            </Button>
          </div>
        </section>

      </div>

      <Footer />
    </main>
  );
}
