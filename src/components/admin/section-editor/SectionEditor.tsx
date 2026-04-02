'use client';

import { useState } from 'react';
import { ContentSection, ContentSectionData } from '@/types/content';
import { Button } from '@/components/ui/Button';

interface SectionEditorProps {
  section: ContentSection;
  onSave: (section: ContentSection) => void;
  onDelete: (sectionId: string) => void;
  onCancel: () => void;
}

export function SectionEditor({
  section,
  onSave,
  onDelete,
  onCancel,
}: SectionEditorProps) {
  const [data, setData] = useState<ContentSectionData>(section.data);
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async () => {
    setIsSaving(true);
    try {
      onSave({ ...section, data });
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = () => {
    if (confirm('Are you sure you want to delete this section?')) {
      onDelete(section.id);
    }
  };

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
      {/* Section Type and ID (read-only) */}
      <div className="mb-6 pb-6 border-b border-gray-800">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Section Type
            </label>
            <input
              type="text"
              value={section.type}
              disabled
              className="w-full bg-gray-800 text-gray-500 px-3 py-2 rounded border border-gray-700 text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Section ID
            </label>
            <input
              type="text"
              value={section.id}
              disabled
              className="w-full bg-gray-800 text-gray-500 px-3 py-2 rounded border border-gray-700 text-sm"
            />
          </div>
        </div>
      </div>

      {/* Dynamic fields based on section type */}
      {section.type === 'content' && (
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Body (HTML Rich Text)
          </label>
          <textarea
            value={data.body || ''}
            onChange={(e) => setData({ ...data, body: e.target.value })}
            rows={10}
            className="w-full bg-gray-800 text-white px-3 py-2 rounded border border-gray-700 text-sm font-mono"
            placeholder="<p>Enter your rich HTML content here...</p>"
          />
          <p className="text-xs text-gray-400 mt-2">
            Tip: Use a rich text editor (TipTap, Draft.js) in production to generate clean HTML
          </p>
        </div>
      )}

      {section.type === 'cta' && (
        <div className="space-y-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              CTA Title
            </label>
            <input
              type="text"
              value={data.cta_title || ''}
              onChange={(e) => setData({ ...data, cta_title: e.target.value })}
              className="w-full bg-gray-800 text-white px-3 py-2 rounded border border-gray-700"
              placeholder="e.g., Download the Whitepaper"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              CTA Points (one per line)
            </label>
            <textarea
              value={(data.cta_points || []).join('\n')}
              onChange={(e) =>
                setData({
                  ...data,
                  cta_points: e.target.value.split('\n').filter((p) => p.trim()),
                })
              }
              rows={4}
              className="w-full bg-gray-800 text-white px-3 py-2 rounded border border-gray-700"
              placeholder="Point 1&#10;Point 2&#10;Point 3"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Button Label
              </label>
              <input
                type="text"
                value={data.cta_button?.label || ''}
                onChange={(e) =>
                  setData({
                    ...data,
                    cta_button: {
                      ...data.cta_button,
                      label: e.target.value,
                      url: data.cta_button?.url || '#',
                    },
                  })
                }
                className="w-full bg-gray-800 text-white px-3 py-2 rounded border border-gray-700"
                placeholder="e.g., Download Now"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Button URL
              </label>
              <input
                type="text"
                value={data.cta_button?.url || ''}
                onChange={(e) =>
                  setData({
                    ...data,
                    cta_button: {
                      ...data.cta_button,
                      url: e.target.value,
                      label: data.cta_button?.label || 'Download',
                    },
                  })
                }
                className="w-full bg-gray-800 text-white px-3 py-2 rounded border border-gray-700"
                placeholder="e.g., #download or https://example.com"
              />
            </div>
          </div>
        </div>
      )}

      {section.type === 'features' && (
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-300 mb-4">
            Feature Items
          </label>
          <div className="space-y-4">
            {(data.feature_items || []).map((item, idx) => (
              <div key={idx} className="bg-gray-800 p-4 rounded border border-gray-700">
                <div className="grid grid-cols-3 gap-3 mb-2">
                  <input
                    type="text"
                    value={item.icon || ''}
                    onChange={(e) => {
                      const newItems = [...(data.feature_items || [])];
                      newItems[idx].icon = e.target.value;
                      setData({ ...data, feature_items: newItems });
                    }}
                    placeholder="Icon (emoji or URL)"
                    className="bg-gray-700 text-white px-2 py-1 rounded text-sm"
                  />
                  <input
                    type="text"
                    value={item.title}
                    onChange={(e) => {
                      const newItems = [...(data.feature_items || [])];
                      newItems[idx].title = e.target.value;
                      setData({ ...data, feature_items: newItems });
                    }}
                    placeholder="Title"
                    className="bg-gray-700 text-white px-2 py-1 rounded text-sm col-span-2"
                  />
                </div>
                <textarea
                  value={item.description}
                  onChange={(e) => {
                    const newItems = [...(data.feature_items || [])];
                    newItems[idx].description = e.target.value;
                    setData({ ...data, feature_items: newItems });
                  }}
                  placeholder="Description"
                  rows={2}
                  className="w-full bg-gray-700 text-white px-2 py-1 rounded text-sm"
                />
                <button
                  onClick={() => {
                    const newItems = data.feature_items?.filter((_, i) => i !== idx) || [];
                    setData({ ...data, feature_items: newItems });
                  }}
                  className="text-red-400 text-xs mt-2 hover:text-red-300"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              onClick={() => {
                const newItems = [
                  ...(data.feature_items || []),
                  { icon: '', title: '', description: '' },
                ];
                setData({ ...data, feature_items: newItems });
              }}
              className="text-purple-400 text-sm hover:text-purple-300 font-medium"
            >
              + Add Feature
            </button>
          </div>
        </div>
      )}

      {section.type === 'comparison' && (
        <div className="mb-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Table Headers (comma-separated)
            </label>
            <input
              type="text"
              value={(data.comparison_table?.headers || []).join(', ')}
              onChange={(e) => {
                const headers = e.target.value.split(',').map((h) => h.trim());
                setData({
                  ...data,
                  comparison_table: {
                    headers,
                    rows: data.comparison_table?.rows || [],
                  },
                });
              }}
              className="w-full bg-gray-800 text-white px-3 py-2 rounded border border-gray-700"
              placeholder="Feature, Basic Plan, Pro Plan"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Table Rows (JSON format)
            </label>
            <textarea
              value={JSON.stringify(data.comparison_table?.rows || [], null, 2)}
              onChange={(e) => {
                try {
                  const rows = JSON.parse(e.target.value);
                  setData({
                    ...data,
                    comparison_table: {
                      headers: data.comparison_table?.headers || [],
                      rows,
                    },
                  });
                } catch {
                  // Keep showing invalid JSON for editing
                }
              }}
              rows={6}
              className="w-full bg-gray-800 text-white px-3 py-2 rounded border border-gray-700 font-mono text-sm"
              placeholder='[["Feature 1", "✓", "✓"], ["Feature 2", "✗", "✓"]]'
            />
            <p className="text-xs text-gray-400 mt-1">
              Use ✓ and ✗ for checkmarks. Each row must have as many columns as headers.
            </p>
          </div>
        </div>
      )}

      {/* Action buttons */}
      <div className="flex gap-2 pt-6 border-t border-gray-800">
        <button
          onClick={handleSave}
          disabled={isSaving}
          className="flex-1 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded font-medium disabled:opacity-50"
        >
          {isSaving ? 'Saving...' : 'Save Section'}
        </button>
        <button
          onClick={onCancel}
          className="flex-1 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded font-medium"
        >
          Cancel
        </button>
        <button
          onClick={handleDelete}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded font-medium"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
