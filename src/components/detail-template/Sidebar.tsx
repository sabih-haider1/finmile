import Image from 'next/image';
import Link from 'next/link';
import { ContentSidebar } from '@/types/content';

interface SidebarProps {
  sidebar?: ContentSidebar;
  className?: string;
}

export function Sidebar({ sidebar, className = '' }: SidebarProps) {
  if (!sidebar) {
    return null;
  }

  const hasRelated = sidebar.related && sidebar.related.length > 0;
  const hasTOC = sidebar.table_of_contents && sidebar.table_of_contents.length > 0;

  if (!hasRelated && !hasTOC) {
    return null;
  }

  return (
    <aside className={`sticky top-24 h-fit space-y-12 ${className}`}>
      {/* Table of Contents */}
      {hasTOC && (
        <nav className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
          <h3 className="text-lg font-bold text-[#2D126B] mb-6">Table of Contents</h3>
          <ul className="space-y-3">
            {sidebar.table_of_contents!.map((item, idx) => (
              <li
                key={idx}
                style={{ paddingLeft: `${(item.level - 2) * 1}rem` }}
              >
                <a
                  href={`#${item.id}`}
                  className="text-gray-600 hover:text-[#6A27D4] text-sm font-medium transition-colors block truncate"
                  title={item.text}
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}

      {/* Related Resources */}
      {hasRelated && (
        <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
          <h3 className="text-lg font-bold text-[#2D126B] mb-6">Related Resources</h3>
          <div className="space-y-6">
            {sidebar.related!.map((resource) => (
              <Link
                key={resource.id}
                href={resource.url || `/resources/${resource.id}`}
                className="group block transition-opacity"
              >
                <div className="flex gap-4 h-full items-start">
                  {/* Thumbnail */}
                  {resource.thumbnail && (
                    <div className="relative w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden shadow-sm">
                      <Image
                        src={resource.thumbnail}
                        alt={resource.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="80px"
                      />
                    </div>
                  )}

                  {/* Content */}
                  <div className="flex-1 min-w-0 pt-1">
                    {/* Title */}
                    <h4 className="text-[15px] font-bold text-gray-900 group-hover:text-[#6A27D4] transition-colors line-clamp-2 leading-tight">
                      {resource.title}
                    </h4>

                    {/* Date */}
                    {resource.date && (
                      <time className="text-xs text-gray-500 font-medium block mt-2">
                        {new Date(resource.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                      </time>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </aside>
  );
}
