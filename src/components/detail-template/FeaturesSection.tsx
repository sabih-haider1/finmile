import { ContentSectionData } from '@/types/content';

interface FeatureItem {
  icon?: string;
  title: string;
  description: string;
}

interface FeaturesSectionProps {
  data: ContentSectionData;
  className?: string;
  columns?: 2 | 3;
}

export function FeaturesSection({
  data,
  className = '',
  columns = 3,
}: FeaturesSectionProps) {
  const items = (data.feature_items || []) as FeatureItem[];

  if (items.length === 0) {
    return null;
  }

  const gridColsClass = columns === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3';

  return (
    <section className={`w-full my-12 md:my-16 ${className}`}>
      <div className="container mx-auto px-4 md:px-6">
        {/* Feature grid */}
        <div className={`grid grid-cols-1 ${gridColsClass} gap-8`}>
          {items.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col gap-4 p-6 rounded-2xl bg-gradient-to-br from-[#F8F5FF] via-white to-[#EEF2FF] border border-[#E7DBFF] hover:border-[#C9B1FF] hover:shadow-[0_12px_40px_rgba(106,39,212,0.12)] transition-all"
            >
              {/* Icon */}
              {item.icon && (
                <div className="text-4xl rounded-2xl bg-white border border-[#E9E2FF] w-14 h-14 flex items-center justify-center shadow-sm">
                  {/* Support emoji, SVG URL, or any icon string */}
                  <span>{item.icon}</span>
                </div>
              )}

              {/* Title */}
              <h3 className="text-xl font-bold text-[#2D126B]">{item.title}</h3>

              {/* Description */}
              <p className="text-[#5E6173] text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
