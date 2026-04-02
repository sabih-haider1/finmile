import { ContentSectionData } from '@/types/content';

interface ComparisonTable {
  headers: string[];
  rows: string[][];
}

interface ComparisonSectionProps {
  data: ContentSectionData;
  className?: string;
}

export function ComparisonSection({ data, className = '' }: ComparisonSectionProps) {
  const table = data.comparison_table as ComparisonTable | undefined;

  if (!table || !table.headers || table.headers.length === 0 || !table.rows || table.rows.length === 0) {
    return null;
  }

  return (
    <section className={`w-full my-12 md:my-16 ${className}`}>
      <div className="container mx-auto px-4 md:px-6">
        {/* Comparison table with horizontal scroll on mobile */}
        <div className="overflow-x-auto rounded-2xl border border-[#E2D4FF] shadow-[0_10px_32px_rgba(106,39,212,0.1)] bg-white">
          <table className="w-full">
            {/* Table header */}
            <thead>
              <tr className="border-b border-[#D8C6FF] bg-gradient-to-r from-[#6A27D4] to-[#4F46E5]">
                {table.headers.map((header, idx) => (
                  <th
                    key={idx}
                    className="px-4 md:px-6 py-4 text-left text-sm md:text-base font-bold text-white whitespace-nowrap"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>

            {/* Table body */}
            <tbody>
              {table.rows.map((row, rowIdx) => (
                <tr
                  key={rowIdx}
                  className={`border-b border-[#EEE5FF] ${
                    rowIdx % 2 === 0 ? 'bg-white' : 'bg-[#FAF7FF]'
                  }`}
                >
                  {row.map((cell, cellIdx) => (
                    <td
                      key={cellIdx}
                      className="px-4 md:px-6 py-4 text-sm md:text-base text-[#4B5563] whitespace-nowrap"
                    >
                      {/* Support checkmark/cross symbols */}
                      {cell === '✓' || cell === '✔' ? (
                        <span className="text-emerald-600 font-bold text-lg">✓</span>
                      ) : cell === '✗' || cell === '✘' ? (
                        <span className="text-rose-500 font-bold text-lg">✗</span>
                      ) : (
                        cell
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
