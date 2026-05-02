'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/supabaseClient';
import { Whitepaper } from '@/types/content';
import { Button } from '@/components/ui/Button';
import DataTable from '@/components/admin/DataTable';
import SearchBar from '@/components/admin/SearchBar';
import FilterToggle from '@/components/admin/FilterToggle';
import FormBuilder, { FormFieldConfig } from '@/components/admin/FormBuilder';
import AdminLayout from '@/components/admin/AdminLayout';
import { uploadFile, generateSlug } from '@/lib/upload';
import { authors } from '@/data/authors';

const WHITEPAPER_AUTHORS = authors.map((author) => author.name);

export default function WhitepapersPage() {
  const [whitepapers, setWhitepapers] = useState<Whitepaper[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [featuredFilter, setFeaturedFilter] = useState<boolean | null>(null);
  const [publishedFilter, setPublishedFilter] = useState<boolean | null>(null);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [editingWhitepaper, setEditingWhitepaper] = useState<Whitepaper | null>(null);

  const getAuthHeader = async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (!session?.access_token) {
      throw new Error('Your admin session has expired. Please log in again.');
    }

    return { Authorization: `Bearer ${session.access_token}` };
  };

  const fetchWhitepapers = useCallback(async () => {
    setLoading(true);
    try {
      let query = supabase
        .from('whitepapers')
        .select('*')
        .order('created_at', { ascending: false });

      if (searchQuery) {
        query = query.ilike('title', `%${searchQuery}%`);
      }
      if (featuredFilter !== null) {
        query = query.eq('is_featured', featuredFilter);
      }
      if (publishedFilter !== null) {
        query = query.eq('is_published', publishedFilter);
      }

      const { data, error } = await query;
      if (error) {
        throw error;
      }

      setWhitepapers(data || []);
    } catch (error: unknown) {
      console.error('Error fetching whitepapers:', error);
      alert('Failed to fetch whitepapers: ' + (error instanceof Error ? error.message : String(error)));
    } finally {
      setLoading(false);
    }
  }, [featuredFilter, publishedFilter, searchQuery]);

  useEffect(() => {
    fetchWhitepapers();
  }, [fetchWhitepapers]);

  const handleDelete = async (whitepaper: Whitepaper) => {
    if (!window.confirm(`Are you sure you want to delete "${whitepaper.title}"?`)) {
      return;
    }

    try {
      const authHeader = await getAuthHeader();
      const response = await fetch(`/api/whitepapers/${whitepaper.id}`, {
        method: 'DELETE',
        credentials: 'include',
        headers: authHeader,
      });
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error || 'Failed to delete whitepaper');
      }
      alert('Whitepaper deleted successfully!');
      fetchWhitepapers();
    } catch (error: unknown) {
      alert('Failed to delete whitepaper: ' + (error instanceof Error ? error.message : 'Unknown error'));
    }
  };

  const handleFormSubmit = async (formData: Record<string, unknown>, files: Record<string, File | null>) => {
    try {
      const normalizeUrlValue = (value: unknown): string | null => {
        if (typeof value === 'string') {
          const trimmed = value.trim();
          return trimmed.length > 0 ? trimmed : null;
        }

        if (value && typeof value === 'object') {
          const candidateKeys = ['url', 'publicUrl', 'signedUrl', 'path', 'href'];
          for (const key of candidateKeys) {
            const candidate = (value as Record<string, unknown>)[key];
            if (typeof candidate === 'string' && candidate.trim().length > 0) {
              return candidate.trim();
            }
          }
        }

        return null;
      };

      let coverImageUrl = normalizeUrlValue(formData.cover_image_url);
      let pdfUrl = normalizeUrlValue(formData.pdf_url);

      // Preserve existing URLs on update if no new files provided
      if (editingWhitepaper) {
        if (!files.cover_image_url && !coverImageUrl) {
          coverImageUrl = editingWhitepaper.cover_image_url;
        }
        if (!files.pdf_url && !pdfUrl) {
          pdfUrl = editingWhitepaper.pdf_url;
        }
      }

      // Upload cover image if provided
      if (files.cover_image_url) {
        const coverUploadResult = await uploadFile({
          bucket: 'whitepaper-covers',
          folder: 'covers',
          file: files.cover_image_url,
        });

        if (!coverUploadResult.success || !coverUploadResult.url) {
          throw new Error(coverUploadResult.error || 'Failed to upload cover image.');
        }

        coverImageUrl = coverUploadResult.url;
      }

      // Upload PDF if provided
      if (files.pdf_url) {
        const pdfUploadResult = await uploadFile({
          bucket: 'whitepapers',
          folder: 'pdfs',
          file: files.pdf_url,
        });

        if (!pdfUploadResult.success || !pdfUploadResult.url) {
          throw new Error(pdfUploadResult.error || 'Failed to upload PDF.');
        }

        pdfUrl = pdfUploadResult.url;
      }

      if (!pdfUrl) {
        throw new Error('Please upload a valid PDF file before saving.');
      }

      const selectedAuthor = WHITEPAPER_AUTHORS.includes(formData.author as string)
        ? formData.author as string
        : null;
      const publishedDate = formData.published_date
        ? new Date(formData.published_date as string).toISOString()
        : new Date().toISOString();

      const whitepaperData = {
        ...formData,
        slug: generateSlug((formData.slug as string) || (formData.title as string)),
        cover_image_url: coverImageUrl || null,
        pdf_url: pdfUrl,
        author: selectedAuthor,
        author_name: selectedAuthor,
        published_date: publishedDate,
        topic: formData.topic && (formData.topic as string).trim() !== '' ? formData.topic : null,
        industry: formData.industry && (formData.industry as string).trim() !== '' ? formData.industry : null,
        tags: Array.isArray(formData.tags) ? formData.tags : [],
      };

      if (editingWhitepaper) {
        const updateData: Record<string, unknown> = {
          title: whitepaperData.title,
          slug: whitepaperData.slug,
          summary: whitepaperData.summary,
          cover_image_url: whitepaperData.cover_image_url,
          pdf_url: whitepaperData.pdf_url,
          author_name: whitepaperData.author_name || null,
          author: whitepaperData.author || null,
          published_date: whitepaperData.published_date,
          topic: whitepaperData.topic || null,
          industry: whitepaperData.industry || null,
          tags: whitepaperData.tags || null,
          is_featured: whitepaperData.is_featured,
          is_published: whitepaperData.is_published,
          sections: whitepaperData.sections || null,
        };
        const authHeader = await getAuthHeader();
        const response = await fetch(`/api/whitepapers/${editingWhitepaper.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json', ...authHeader },
          credentials: 'include',
          body: JSON.stringify(updateData),
        });
        const result = await response.json();
        if (!response.ok) {
          throw new Error(result.error || 'Failed to update whitepaper');
        }
        alert('Whitepaper updated successfully!');
      } else {
        const insertData: Record<string, unknown> = {
          title: whitepaperData.title,
          slug: whitepaperData.slug,
          summary: whitepaperData.summary,
          cover_image_url: whitepaperData.cover_image_url,
          pdf_url: whitepaperData.pdf_url,
          author_name: whitepaperData.author_name || null,
          author: whitepaperData.author || null,
          published_date: whitepaperData.published_date,
          topic: whitepaperData.topic || null,
          industry: whitepaperData.industry || null,
          tags: whitepaperData.tags || null,
          is_featured: whitepaperData.is_featured,
          is_published: whitepaperData.is_published,
          created_at: whitepaperData.created_at,
          sections: whitepaperData.sections || null,
        };
        const authHeader = await getAuthHeader();
        const response = await fetch('/api/whitepapers', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', ...authHeader },
          credentials: 'include',
          body: JSON.stringify(insertData),
        });
        const result = await response.json();
        if (!response.ok) {
          throw new Error(result.error || 'Failed to create whitepaper');
        }
        alert('Whitepaper created successfully!');
      }

      setShowCreateForm(false);
      setEditingWhitepaper(null);
      fetchWhitepapers();
    } catch (error: unknown) {
      throw new Error(error instanceof Error ? error.message : 'Failed to save whitepaper');
    }
  };

  const whitepaperFormFields: FormFieldConfig[] = [
    { name: 'title', label: 'Title', type: 'text', required: true, placeholder: 'Enter whitepaper title' },
    { name: 'slug', label: 'Slug', type: 'text', required: true, helpText: 'URL-friendly identifier' },
    { name: 'summary', label: 'Short Description', type: 'textarea', rows: 3, placeholder: 'Brief summary...' },
    { name: 'sections', label: 'Sections', type: 'editorjs-sections', helpText: 'Build content with structured blocks (no HTML/CSS)' },
    { name: 'pdf_url', label: 'PDF File', type: 'file', required: true, accept: '.pdf', bucket: 'whitepapers', folder: 'pdfs' },
    { name: 'cover_image_url', label: 'Cover Image', type: 'file', accept: 'image/*', bucket: 'whitepaper-covers', folder: 'covers' },
    { 
      name: 'author', 
      label: 'Author', 
      type: 'select',
      options: [
        { value: '', label: 'Select an author' },
        ...authors.map((a) => ({ value: a.name, label: a.name }))
      ]
    },
    { name: 'published_date', label: 'Published Date', type: 'date', helpText: 'Custom publication date' },
    { 
      name: 'topic', 
      label: 'Topic', 
      type: 'select', 
      options: [
        { value: '', label: 'Select a topic' },
        { value: 'AI & Automation', label: 'AI & Automation' },
        { value: 'AI & Machine Learning', label: 'AI & Machine Learning' },
        { value: 'Delivery Software', label: 'Delivery Software' },
        { value: 'Last-Mile Delivery', label: 'Last-Mile Delivery' },
        { value: 'Logistics Software', label: 'Logistics Software' },
        { value: 'Predictive Analytics', label: 'Predictive Analytics' },
        { value: 'ROI & Economics', label: 'ROI & Economics' },
      ]
    },
    { 
      name: 'industry', 
      label: 'Industry', 
      type: 'select',
      options: [
        { value: '', label: 'Select an industry' },
        { value: 'E-commerce', label: 'E-commerce' },
        { value: 'EV Fleets', label: 'EV Fleets' },
        { value: 'Field Service', label: 'Field Service' },
        { value: 'Medical & Pharma', label: 'Medical & Pharma' },
        { value: 'Retail & Brands', label: 'Retail & Brands' },
      ]
    },
    { name: 'tags', label: 'Tags', type: 'tags', placeholder: 'ai, fintech, technology' },
    { name: 'is_featured', label: 'Featured', type: 'toggle' },
    { name: 'is_published', label: 'Published', type: 'toggle' },
  ];

  const columns = [
    { key: 'title', label: 'Title' },
    { key: 'author', label: 'Author', render: (wp: Whitepaper) => wp.author || wp.author_name || '-' },
    {
      key: 'is_featured',
      label: 'Featured',
      render: (wp: Whitepaper) => (
        <span className={wp.is_featured ? 'text-green-400' : 'text-white/40'}>
          {wp.is_featured ? 'Yes' : 'No'}
        </span>
      ),
    },
    {
      key: 'is_published',
      label: 'Published',
      render: (wp: Whitepaper) => (
        <span className={wp.is_published ? 'text-green-400' : 'text-yellow-400'}>
          {wp.is_published ? 'Yes' : 'No'}
        </span>
      ),
    },
    {
      key: 'published_date',
      label: 'Published Date',
      render: (wp: Whitepaper) => wp.published_date ? new Date(wp.published_date).toLocaleDateString() : '-',
    },
    {
      key: 'created_at',
      label: 'Created',
      render: (wp: Whitepaper) => new Date(wp.created_at).toLocaleDateString(),
    },
  ];

  if (loading) {
    return (
      <AdminLayout>
        <div className="flex items-center justify-center py-12">
          <div className="text-white text-lg">Loading...</div>
        </div>
      </AdminLayout>
    );
  }

  if (showCreateForm || editingWhitepaper) {
    return (
      <AdminLayout>
        <div className="max-w-[900px] mx-auto px-6 py-8">
          <button
            onClick={() => {
              setShowCreateForm(false);
              setEditingWhitepaper(null);
            }}
            className="mb-6 px-4 py-2 text-sm text-white/80 hover:text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition-all flex items-center gap-2"
          >
            <span>←</span> Back to Whitepapers
          </button>
          <FormBuilder
            title={editingWhitepaper ? 'Edit Whitepaper' : 'Create New Whitepaper'}
            fields={whitepaperFormFields}
            initialData={editingWhitepaper
              ? {
                  ...editingWhitepaper,
                  author: editingWhitepaper.author || editingWhitepaper.author_name || '',
                  published_date: editingWhitepaper.published_date || editingWhitepaper.published_at || editingWhitepaper.created_at,
                }
              : { is_featured: false, is_published: true }}
            onSubmit={handleFormSubmit}
            onCancel={() => {
              setShowCreateForm(false);
              setEditingWhitepaper(null);
            }}
            submitLabel={editingWhitepaper ? 'Update Whitepaper' : 'Create Whitepaper'}
          />
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="max-w-[1400px] mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">
              Manage <span className="gradient-text-os">Whitepapers</span>
            </h1>
            <p className="text-white/60">Create and manage professional whitepapers</p>
          </div>
          <Button
            onClick={() => setShowCreateForm(true)}
            variant="solid"
            className="bg-gradient-to-r from-[#6A27D4] to-[#8B5CF6]"
          >
            + Add New Whitepaper
          </Button>
        </div>

        <div className="mb-6 space-y-4">
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search whitepapers by title..."
          />
          <div className="flex gap-6">
            <FilterToggle
              label="Featured"
              value={featuredFilter}
              onChange={setFeaturedFilter}
            />
            <FilterToggle
              label="Published"
              value={publishedFilter}
              onChange={setPublishedFilter}
            />
          </div>
        </div>

        <DataTable
          data={whitepapers}
          columns={columns}
          onEdit={(whitepaper) => setEditingWhitepaper(whitepaper)}
          onDelete={handleDelete}
          emptyMessage="No whitepapers found. Click 'Add New Whitepaper' to create one."
        />
      </div>
    </AdminLayout>
  );
}
