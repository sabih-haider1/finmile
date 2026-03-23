'use client';

import React from 'react';
import { Button } from '@/components/ui/Button';

interface Column<T> {
  key: keyof T | string;
  label: string;
  render?: (item: T) => React.ReactNode;
}

interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  onEdit: (item: T) => void;
  onDelete: (item: T) => void;
  emptyMessage?: string;
}

export default function DataTable<T extends { id: string; title: string }>({
  data,
  columns,
  onEdit,
  onDelete,
  emptyMessage = 'No items found.',
}: DataTableProps<T>) {
  if (data.length === 0) {
    return (
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12 text-center">
        <p className="text-white/60 text-lg">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              {columns.map((column) => (
                <th
                  key={String(column.key)}
                  className="px-6 py-4 text-left text-sm font-semibold text-white/80"
                >
                  {column.label}
                </th>
              ))}
              <th className="px-6 py-4 text-right text-sm font-semibold text-white/80">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr
                key={item.id}
                className={`${
                  index !== data.length - 1 ? 'border-b border-white/5' : ''
                } hover:bg-white/5 transition-colors`}
              >
                {columns.map((column) => (
                  <td key={String(column.key)} className="px-6 py-4 text-sm text-white">
                    {column.render
                      ? column.render(item)
                      : String((item as Record<string, unknown>)[column.key as string] || '-')}
                  </td>
                ))}
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Button
                      onClick={() => onEdit(item)}
                      variant="outline"
                      size="sm"
                      className="border-white/20 text-white hover:bg-white/10"
                    >
                      Edit
                    </Button>
                    <Button
                      onClick={() => {
                        if (
                          window.confirm(
                            `Are you sure you want to delete "${item.title}"?`
                          )
                        ) {
                          onDelete(item);
                        }
                      }}
                      variant="outline"
                      size="sm"
                      className="border-red-500/30 text-red-400 hover:bg-red-500/10"
                    >
                      Delete
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="px-6 py-4 border-t border-white/10 bg-white/5">
        <p className="text-sm text-white/60">
          Total: <span className="text-white font-medium">{data.length}</span> item(s)
        </p>
      </div>
    </div>
  );
}
