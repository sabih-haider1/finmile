import { notFound } from 'next/navigation';
import { supabase } from '@/supabaseClient';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import Image from 'next/image';
import { Metadata } from 'next';

interface Props {
  params: { slug: string };
}

// Generate metadata dynamically
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { data: whitepaper } = await supabase
    .from('whitepapers')
    .select('title, summary')
    .eq('slug', params.slug)
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
  const { data: whitepaper } = await supabase
    .from('whitepapers')
    .select('*')
    .eq('slug', params.slug)
    .single();

  if (!whitepaper) {
    notFound();
  }

  // Define date dynamically
  const publishDate = whitepaper.published_at || whitepaper.created_at;

  return (
    <main className="min-h-screen bg-[#0B0616] text-[#ffffff] flex flex-col relative overflow-hidden">
      <Header />
      
      {/* Ambient glows extracted from STYLING_GUIDE.md */}
      <div className="absolute top-[5%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#3B257E] rounded-full blur-[140px] opacity-30 pointer-events-none" />
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[1400px] h-[800px] bg-[#531FD1] rounded-[100%] blur-[220px] opacity-20 pointer-events-none" />

      <div className="flex-grow flex flex-col relative z-10 w-full max-w-[1440px] mx-auto">
        
        {/* Dynamic Hero Section */}
        <section className="relative w-full pt-[140px] pb-16 md:pb-24 px-6 mt-10">
          <div className="max-w-[900px] mx-auto text-center flex flex-col items-center">
            
            <div className="mb-6 flex gap-3 justify-center flex-wrap">
               <Badge label="Research & Insights" />
               {whitepaper.tags?.map((tag: string) => (
                  <Badge key={tag} label={tag} />
               ))}
            </div>
            
            <h1 className="text-[36px] md:text-[52px] lg:text-[64px] tracking-tight leading-[1.15] md:leading-[1.1] font-bold text-white mb-6">
              {whitepaper.title}
            </h1>
            
            <p className="text-[#9CA3AF] text-[16px] md:text-[18px] font-medium leading-relaxed max-w-[800px] mx-auto mb-10">
              {whitepaper.summary}
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-6 text-[#D1D5DB] text-[15px] font-medium mb-12">
               {whitepaper.author_name && (
                 <div className="flex items-center gap-3 bg-white/[0.04] border border-white/10 rounded-full py-1.5 px-4 backdrop-blur-md">
                   <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#6A27D4] to-[#A78BFA] flex items-center justify-center text-white font-bold text-xs">
                     {whitepaper.author_name.charAt(0)}
                   </div>
                   <span>By {whitepaper.author_name}</span>
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

            {whitepaper.pdf_url && (
               <div className="w-full px-4 sm:px-0 sm:w-auto">
                 <a href={whitepaper.pdf_url} target="_blank" rel="noopener noreferrer" className="block w-full">
                   <Button variant="solid" size="lg" className="w-full sm:w-auto !h-auto min-h-[48px] py-3 px-6 whitespace-normal text-center shadow-[0_0_30px_rgba(106,39,212,0.4)] hover:shadow-[0_0_40px_rgba(106,39,212,0.6)] transition-all transform hover:-translate-y-1">
                     Download Full Whitepaper (PDF)
                   </Button>
                 </a>
               </div>
            )}
          </div>
        </section>

        {/* Cover Image Section / Glassmorphic Empty State */}
        {whitepaper.cover_image_url ? (
          <section className="relative z-10 max-w-[1000px] mx-auto px-6 pb-32 w-full">
            <div className="rounded-[24px] overflow-hidden border border-white/10 bg-white/[0.04] shadow-2xl p-2 liquid-glass">
              <div className="relative w-full aspect-[16/9] rounded-[16px] overflow-hidden bg-gradient-to-br from-purple-100/5 to-indigo-100/5">
                <Image 
                  src={whitepaper.cover_image_url} 
                  alt={`${whitepaper.title} Cover`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>
        ) : (
          <section className="relative z-10 max-w-[1000px] mx-auto px-6 pb-32 w-full mt-4">
            <div className="rounded-[24px] overflow-hidden border border-white/10 bg-white/[0.08] backdrop-blur-3xl shadow-2xl p-8 flex flex-col items-center justify-center min-h-[350px]">
              <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-6 shadow-[inset_0_2px_10px_rgba(255,255,255,0.1)]">
                <svg className="w-10 h-10 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white/90 mb-2">Research Document</h3>
              <p className="text-[#9CA3AF] text-[15px] font-medium text-center max-w-sm">
                Click the button above to view or download the full research in PDF format.
              </p>
            </div>
          </section>
        )}
      </div>

      <Footer />
    </main>
  );
}
