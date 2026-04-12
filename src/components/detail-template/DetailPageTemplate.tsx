import { UnifiedContent } from '@/types/content';
import { HeroSection } from './HeroSection';
import { ContentSection } from './ContentSection';
import { CustomSection } from './CustomSection';
import { CTASection } from './CTASection';
import { FeaturesSection } from './FeaturesSection';
import { ComparisonSection } from './ComparisonSection';
import { Sidebar } from './Sidebar';
import { AuthorSection } from './AuthorSection';

export interface AuthorInfo {
  name: string;
  role?: string;
  bio?: string;
  avatar_url?: string;
  email?: string;
  linkedin?: string;
}

export interface DetailPageTemplateProps {
  content: UnifiedContent;
  author?: AuthorInfo | string;
  featureGridColumns?: 2 | 3;
  downloadButton?: {
    url: string;
    label?: string;
  };
}

export function DetailPageTemplate({
  content,
  author,
  featureGridColumns = 3,
  downloadButton,
}: DetailPageTemplateProps) {
  const { hero, sections, sidebar } = content;

  return (
    <div className="w-full bg-white text-gray-900 font-montserrat">
      {/* Hero Section */}
      <HeroSection hero={hero} downloadButton={downloadButton} />

      {/* Main Content + Sidebar Layout */}
      <section className="w-full py-0 md:py-0">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-6">
            {/* Left Column: Primary Content (~65-70%) */}
            <div className="lg:col-span-2 space-y-6 md:space-y-6">
              {sections.map((section) => {
                switch (section.type) {
                  case 'content':
                    return (
                      <ContentSection
                        key={section.id}
                        data={section.data}
                      />
                    );

                  case 'custom':
                    return (
                      <CustomSection
                        key={section.id}
                        sectionId={section.id}
                        data={section.data}
                      />
                    );

                  case 'cta':
                    return (
                      <CTASection
                        key={section.id}
                        data={section.data}
                      />
                    );

                  case 'features':
                    return (
                      <FeaturesSection
                        key={section.id}
                        data={section.data}
                        columns={featureGridColumns}
                      />
                    );

                  case 'comparison':
                    return (
                      <ComparisonSection
                        key={section.id}
                        data={section.data}
                      />
                    );

                  default:
                    // Fallback for unknown section types
                    return null;
                }
              })}

              {/* Author section at the end */}
              {author && <AuthorSection author={author} />}
            </div>

            {/* Right Column: Sidebar (~30-35%) */}
            <div className="lg:col-span-1">
              <Sidebar sidebar={sidebar} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
