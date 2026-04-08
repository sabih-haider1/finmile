'use client';

import { useState } from 'react';
import { ContentHero } from '@/types/content';

interface HeroEditorProps {
  hero: ContentHero;
  onSave: (hero: ContentHero) => void;
  onCancel: () => void;
}

export function HeroEditor({ hero, onSave, onCancel }: HeroEditorProps) {
  const [title, setTitle] = useState(hero.title);
  const [imageUrl, setImageUrl] = useState(hero.image_url || '');
  const [description, setDescription] = useState(hero.description);
  const [publishDate, setPublishDate] = useState(
    hero.metadata?.published_date || ''
  );
  const [readTime, setReadTime] = useState(hero.metadata?.read_time || '');
  const [authorName, setAuthorName] = useState(hero.metadata?.author || '');

  const handleSave = () => {
    onSave({
      title,
      image_url: imageUrl || null,
      description,
      metadata: {
        published_date: publishDate || undefined,
        read_time: readTime || undefined,
        author: authorName || undefined,
      },
    });
  };

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 space-y-4">
      <h3 className="text-lg font-bold text-white mb-6">Hero Section</h3>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Title
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full bg-gray-800 text-white px-3 py-2 rounded border border-gray-700"
          placeholder="Article title (H1)"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Featured Image URL
        </label>
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          className="w-full bg-gray-800 text-white px-3 py-2 rounded border border-gray-700"
          placeholder="https://..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Short Description (2-3 lines max)
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={3}
          className="w-full bg-gray-800 text-white px-3 py-2 rounded border border-gray-700"
          placeholder="Brief description of the article..."
          maxLength={300}
        />
        <p className="text-xs text-gray-400 mt-1">
          {description.length}/300 characters
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Publish Date
          </label>
          <input
            type="date"
            value={publishDate}
            onChange={(e) => setPublishDate(e.target.value)}
            className="w-full bg-gray-800 text-white px-3 py-2 rounded border border-gray-700"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Read Time
          </label>
          <input
            type="text"
            value={readTime}
            onChange={(e) => setReadTime(e.target.value)}
            className="w-full bg-gray-800 text-white px-3 py-2 rounded border border-gray-700"
            placeholder="e.g., 5 min read"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Author Name
        </label>
        <input
          type="text"
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
          className="w-full bg-gray-800 text-white px-3 py-2 rounded border border-gray-700"
          placeholder="John Doe"
        />
      </div>

      <div className="flex gap-2 pt-4 border-t border-gray-800">
        <button
          onClick={handleSave}
          className="flex-1 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded font-medium"
        >
          Save Hero
        </button>
        <button
          onClick={onCancel}
          className="flex-1 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded font-medium"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
