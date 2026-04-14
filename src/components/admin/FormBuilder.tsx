'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { generateSlug } from '@/lib/upload';

export interface FormFieldConfig {
  name: string;
  label: string;
  type: 'text' | 'textarea' | 'richtext' | 'select' | 'toggle' | 'file' | 'tags' | 'date' | 'json';
  required?: boolean;
  placeholder?: string;
  options?: { value: string; label: string }[];
  helpText?: string;
  accept?: string;
  bucket?: string;
  folder?: string;
  rows?: number;
}

interface FormBuilderProps {
  title: string;
  fields: FormFieldConfig[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  initialData?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSubmit: (data: any, files: Record<string, File | null>) => Promise<void>;
  onCancel?: () => void;
  submitLabel?: string;
}

export default function FormBuilder({
  title,
  fields,
  initialData = {},
  onSubmit,
  onCancel,
  submitLabel = 'Save',
}: FormBuilderProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [formData, setFormData] = useState<any>(initialData);
  const [files, setFiles] = useState<Record<string, File | null>>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [slugManuallyEdited, setSlugManuallyEdited] = useState(false);

  const handleChange = (name: string, value: unknown) => {
    // If editing slug field directly, mark it as manually edited
    if (name === 'slug') {
      setSlugManuallyEdited(true);
      // Still format the slug even when manually edited
      setFormData((prev) => ({ ...prev, [name]: generateSlug(String(value)) }));
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));

    // Auto-generate slug from title if not manually edited
    if (name === 'title' && !slugManuallyEdited) {
      setFormData((prev) => ({ ...prev, slug: generateSlug(String(value)) }));
    }
  };

  const handleFileChange = (name: string, file: File | null) => {
    setFiles((prev) => ({ ...prev, [name]: file }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const normalizedData = { ...formData };

      fields.forEach((field) => {
        if (field.type !== 'json') {
          return;
        }

        const rawValue = normalizedData[field.name];

        if (rawValue === undefined || rawValue === null || rawValue === '') {
          normalizedData[field.name] = null;
          return;
        }

        if (typeof rawValue === 'string') {
          try {
            normalizedData[field.name] = JSON.parse(rawValue);
          } catch {
            throw new Error(`Invalid JSON in ${field.label}`);
          }
        }
      });

      await onSubmit(normalizedData, files);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Failed to save');
    } finally {
      setLoading(false);
    }
  };

  const inputClassName =
    'w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#6A27D4] focus:border-transparent transition-all';
  const labelClassName = 'block text-sm font-medium text-white/80 mb-2';

  const renderField = (field: FormFieldConfig) => {
    const value = formData[field.name] ?? '';

    switch (field.type) {
      case 'text':
        return (
          <input
            type="text"
            value={String(value)}
            onChange={(e) => handleChange(field.name, e.target.value)}
            className={inputClassName}
            placeholder={field.placeholder}
            required={field.required}
          />
        );

      case 'textarea':
        return (
          <textarea
            value={String(value)}
            onChange={(e) => handleChange(field.name, e.target.value)}
            className={inputClassName}
            placeholder={field.placeholder}
            rows={field.rows || 4}
            required={field.required}
          />
        );

      case 'richtext':
        return (
          <textarea
            value={String(value)}
            onChange={(e) => handleChange(field.name, e.target.value)}
            className={inputClassName}
            placeholder={field.placeholder}
            rows={10}
            required={field.required}
          />
        );

      case 'json': {
        const formattedValue = (() => {
          if (typeof value === 'string') {
            return value;
          }

          if (value && typeof value === 'object') {
            try {
              return JSON.stringify(value, null, 2);
            } catch {
              return '';
            }
          }

          return '';
        })();

        return (
          <textarea
            value={formattedValue}
            onChange={(e) => handleChange(field.name, e.target.value)}
            className={`${inputClassName} font-mono text-sm`}
            placeholder={field.placeholder || '{\n  "hero": {},\n  "sections": []\n}'}
            rows={12}
            required={field.required}
          />
        );
      }

      case 'select':
        return (
          <select
            value={String(value)}
            onChange={(e) => handleChange(field.name, e.target.value)}
            className={inputClassName}
            required={field.required}
          >
            {field.options?.map((option) => (
              <option key={option.value} value={option.value} className="bg-[#0B0616]">
                {option.label}
              </option>
            ))}
          </select>
        );

      case 'toggle':
        return (
          <label className="flex items-center gap-3 cursor-pointer">
            <div className="relative">
              <input
                type="checkbox"
                checked={!!value}
                onChange={(e) => handleChange(field.name, e.target.checked)}
                className="sr-only"
              />
              <div
                className={`w-11 h-6 rounded-full transition-colors ${
                  value ? 'bg-[#6A27D4]' : 'bg-white/20'
                }`}
              >
                <div
                  className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                    value ? 'translate-x-5' : ''
                  }`}
                />
              </div>
            </div>
            <span className="text-sm text-white/80">
              {value ? 'Enabled' : 'Disabled'}
            </span>
          </label>
        );

      case 'file':
        return (
          <div className="space-y-4">
            <input
              type="file"
              onChange={(e) => handleFileChange(field.name, e.target.files?.[0] || null)}
              accept={field.accept}
              className="block w-full text-sm text-white/60 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#6A27D4] file:text-white hover:file:bg-[#5A1FC4] file:cursor-pointer"
            />
            {/* Show local file preview if newly selected, or existing value if present */}
            {files[field.name] ? (
              <div className="mt-2">
                <p className="text-xs text-white/60 mb-2">
                  Selected new file: {files[field.name]!.name}
                </p>
                {files[field.name]!.type.startsWith('image/') && (
                  <Image
                    src={URL.createObjectURL(files[field.name]!)}
                    alt="Preview"
                    width={128}
                    height={96}
                    unoptimized
                    className="w-32 h-24 object-cover rounded-lg border border-white/20"
                  />
                )}
              </div>
            ) : value ? (
              <div className="mt-2">
                <p className="text-xs text-white/60 mb-2">
                  Current: {typeof value === 'string' ? value.split('/').pop() : 'File attached'}
                </p>
                {typeof value === 'string' && value.match(/\.(jpeg|jpg|gif|png|webp|avif)$/i) && (
                  <Image
                    src={value}
                    alt="Current file"
                    width={128}
                    height={96}
                    unoptimized
                    className="w-32 h-24 object-cover rounded-lg border border-white/20"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                )}
              </div>
            ) : null}
          </div>
        );

      case 'tags':
        return (
          <input
            type="text"
            value={Array.isArray(value) ? (value as string[]).join(', ') : String(value)}
            onChange={(e) =>
              handleChange(
                field.name,
                e.target.value.split(',').map((t) => t.trim()).filter(Boolean)
              )
            }
            className={inputClassName}
            placeholder={field.placeholder || 'tag1, tag2, tag3'}
          />
        );

      case 'date':
        return (
          <input
            type="date"
            value={value ? (typeof value === 'string' ? value.split('T')[0] : '') : ''}
            onChange={(e) => handleChange(field.name, e.target.value ? new Date(e.target.value).toISOString() : '')}
            className={inputClassName}
            required={field.required}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
      <h2 className="text-2xl font-bold text-white mb-6 text-balance">
        {title}
      </h2>

      {error && (
        <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 mb-6">
          <p className="text-red-400 text-sm">{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {fields.map((field) => (
          <div key={field.name}>
            <label className={labelClassName}>
              {field.label}
              {field.required && <span className="text-red-400 ml-1">*</span>}
              {field.helpText && (
                <span className="text-white/40 text-xs ml-2">({field.helpText})</span>
              )}
            </label>
            {renderField(field)}
          </div>
        ))}

        <div className="flex gap-4 pt-4">
          <button
            type="submit"
            disabled={loading}
            className="flex-1 px-6 py-3 bg-gradient-to-r from-[#6A27D4] to-[#8B5CF6] text-white font-semibold rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Saving...' : submitLabel}
          </button>
          {onCancel && (
            <button
              type="button"
              onClick={onCancel}
              className="px-6 py-3 bg-white/10 border border-white/20 text-white rounded-xl hover:bg-white/20 transition-all"
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
