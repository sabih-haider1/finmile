'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/supabaseClient';
import { CaseStudy } from '@/types/content';
import { Button } from '@/components/ui/Button';
import DataTable from '@/components/admin/DataTable';
import SearchBar from '@/components/admin/SearchBar';
import FilterToggle from '@/components/admin/FilterToggle';
import FormBuilder, { FormFieldConfig } from '@/components/admin/FormBuilder';
import AdminLayout from '@/components/admin/AdminLayout';
import { uploadFile, generateSlug } from '@/lib/upload';
import { TOPICS, INDUSTRIES } from '@/lib/filterConstants';
import { authors } from '@/data/authors';

export default function CaseStudiesPage() {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [featuredFilter, setFeaturedFilter] = useState<boolean | null>(null);
  const [publishedFilter, setPublishedFilter] = useState<boolean | null>(null);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [editingCaseStudy, setEditingCaseStudy] = useState<CaseStudy | null>(null);

  const getAuthHeader = async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (!session?.access_token) {
      throw new Error('Your admin session has expired. Please log in again.');
    }

    return { Authorization: `Bearer ${session.access_token}` };
  };

  const fetchCaseStudies = useCallback(async () => {
    setLoading(true);
    try {
      let query = supabase
        .from('case_studies')
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
      if (error) throw error;
      setCaseStudies(data || []);
    } catch (error: unknown) {
      console.error('Error fetching case studies:', error);
      alert('Failed to fetch case studies: ' + (error instanceof Error ? error.message : String(error)));
    } finally {
      setLoading(false);
    }
  }, [featuredFilter, publishedFilter, searchQuery]);

  useEffect(() => {
    fetchCaseStudies();
  }, [fetchCaseStudies]);

  const handleDelete = async (caseStudy: CaseStudy) => {
    if (!window.confirm(`Are you sure you want to delete "${caseStudy.title}"?`)) {
      return;
    }

    try {
      const authHeader = await getAuthHeader();
      const response = await fetch(`/api/case-studies/${caseStudy.id}`, {
        method: 'DELETE',
        credentials: 'include',
        headers: authHeader,
      });
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error || 'Failed to delete case study');
      }
      alert('Case study deleted successfully!');
      fetchCaseStudies();
    } catch (error: unknown) {
      alert('Failed to delete case study: ' + (error instanceof Error ? error.message : 'Unknown error'));
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
      // Preserve existing URL on update if no new file provided
      if (editingCaseStudy && !files.cover_image_url && !coverImageUrl) {
        coverImageUrl = editingCaseStudy.cover_image_url;
      }
      // Upload cover image if provided
      if (files.cover_image_url) {
        const uploadResult = await uploadFile({
          bucket: 'blog-covers',
          folder: 'case-study-covers',
          file: files.cover_image_url,
        });
        if (!uploadResult.success || !uploadResult.url) {
          throw new Error(uploadResult.error || 'Failed to upload cover image.');
        }
        coverImageUrl = uploadResult.url;
      }

      const caseStudyData = {
        ...formData,
        slug: generateSlug((formData.slug as string) || (formData.title as string)),
        cover_image_url: coverImageUrl || null,
        published_at: formData.published_at
          ? new Date(formData.published_at as string).toISOString()
          : null,
        industry: formData.industry && (formData.industry as string).trim() !== '' ? formData.industry : null,
        company_name: formData.author_name && (formData.author_name as string).trim() !== ''
          ? formData.author_name
          : formData.company_name && (formData.company_name as string).trim() !== ''
            ? formData.company_name
            : null,
        tags: Array.isArray(formData.tags) ? formData.tags : [],
      };

      if (editingCaseStudy) {
        // Update existing case study
        const updateData: Record<string, unknown> = {
          title: formData.title as string,
          slug: caseStudyData.slug,
          summary: formData.summary as string | null,
          content: formData.content as string | null,
          cover_image_url: coverImageUrl || null,
          author_name: (formData.author_name as string) || null,
          company_name: (caseStudyData.company_name as string) || null,
          topic: (formData.topic as string) || null,
          industry: caseStudyData.industry || null,
          tags: caseStudyData.tags || null,
          is_featured: formData.is_featured,
          is_published: formData.is_published,
          published_at: caseStudyData.published_at,
          sections: (formData.sections as unknown) || null,
        };
        const authHeader = await getAuthHeader();
        const response = await fetch(`/api/case-studies/${editingCaseStudy.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json', ...authHeader },
          credentials: 'include',
          body: JSON.stringify(updateData),
        });
        const result = await response.json();
        if (!response.ok) {
          throw new Error(result.error || 'Failed to update case study');
        }
        alert('Case study updated successfully!');
      } else {
        // Create new case study
        const insertData: Record<string, unknown> = {
          title: formData.title as string,
          slug: caseStudyData.slug,
          summary: formData.summary as string | null,
          content: formData.content as string | null,
          cover_image_url: coverImageUrl || null,
          author_name: (formData.author_name as string) || null,
          company_name: (caseStudyData.company_name as string) || null,
          topic: (formData.topic as string) || null,
          industry: caseStudyData.industry || null,
          tags: caseStudyData.tags || null,
          is_featured: formData.is_featured,
          is_published: formData.is_published,
          published_at: caseStudyData.published_at,
          sections: (formData.sections as unknown) || null,
        };
        const authHeader = await getAuthHeader();
        const response = await fetch('/api/case-studies', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', ...authHeader },
          credentials: 'include',
          body: JSON.stringify(insertData),
        });
        const result = await response.json();
        if (!response.ok) {
          throw new Error(result.error || 'Failed to create case study');
        }
        alert('Case study created successfully!');
      }

      setShowCreateForm(false);
      setEditingCaseStudy(null);
      fetchCaseStudies();
    } catch (error: unknown) {
      throw new Error(error instanceof Error ? error.message : 'Failed to save case study');
    }
  };

  const caseStudyFormFields: FormFieldConfig[] = [
    { name: 'title', label: 'Title', type: 'text', required: true, placeholder: 'Enter case study title' },
    { name: 'slug', label: 'Slug', type: 'text', required: true, helpText: 'URL-friendly identifier' },
    { name: 'summary', label: 'Short Description', type: 'textarea', rows: 3, placeholder: 'Brief summary...' },
    { name: 'sections', label: 'Sections', type: 'editorjs-sections', helpText: 'Build content with structured blocks (no HTML/CSS)' },
    { name: 'cover_image_url', label: 'Cover Image', type: 'file', accept: 'image/*', bucket: 'blog-covers', folder: 'case-study-covers' },
    {
      name: 'author_name',
      label: 'Author Name',
      type: 'select',
      options: [
        { value: '', label: 'Select an author' },
        ...authors.map((a) => ({ value: a.name, label: a.name })),
      ],
    },
    {
      name: 'topic',
      label: 'Topic',
      type: 'select',
      options: [
        { value: '', label: 'Select a topic' },
        ...TOPICS.map((t) => ({ value: t, label: t })),
      ],
    },
    {
      name: 'industry',
      label: 'Industry',
      type: 'select',
      options: [
        { value: '', label: 'Select an industry' },
        ...INDUSTRIES.map((i) => ({ value: i, label: i })),
      ],
    },
    { name: 'published_at', label: 'Publish Date', type: 'date', helpText: 'Custom publish date' },
    { name: 'tags', label: 'Tags', type: 'tags', placeholder: 'ai, automation, roi' },
    { name: 'is_featured', label: 'Featured', type: 'toggle' },
    { name: 'is_published', label: 'Published', type: 'toggle' },
  ];

  const columns = [
    { key: 'title', label: 'Title' },
    { key: 'company_name', label: 'Author', render: (cs: CaseStudy) => cs.author_name || cs.company_name || '-' },
    { key: 'industry', label: 'Industry', render: (cs: CaseStudy) => cs.industry || '-' },
    {
      key: 'is_featured',
      label: 'Featured',
      render: (cs: CaseStudy) => (
        <span className={cs.is_featured ? 'text-green-400' : 'text-white/40'}>
          {cs.is_featured ? 'Yes' : 'No'}
        </span>
      ),
    },
    {
      key: 'is_published',
      label: 'Published',
      render: (cs: CaseStudy) => (
        <span className={cs.is_published ? 'text-green-400' : 'text-yellow-400'}>
          {cs.is_published ? 'Yes' : 'No'}
        </span>
      ),
    },
    {
      key: 'created_at',
      label: 'Created',
      render: (cs: CaseStudy) => new Date(cs.created_at).toLocaleDateString(),
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

  if (showCreateForm || editingCaseStudy) {
    return (
      <AdminLayout>
        <div className="max-w-[900px] mx-auto px-6 py-8">
          <button
            onClick={() => {
              setShowCreateForm(false);
              setEditingCaseStudy(null);
            }}
            className="mb-6 px-4 py-2 text-sm text-white/80 hover:text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition-all flex items-center gap-2"
          >
            <span>←</span> Back to Case Studies
          </button>
          <FormBuilder
            title={editingCaseStudy ? 'Edit Case Study' : 'Create New Case Study'}
            fields={caseStudyFormFields}
            initialData={editingCaseStudy
              ? {
                  ...editingCaseStudy,
                  author_name: editingCaseStudy.author_name || editingCaseStudy.company_name || '',
                  published_at: editingCaseStudy.published_at || editingCaseStudy.created_at,
                }
              : { is_featured: false, is_published: true }}
            onSubmit={handleFormSubmit}
            onCancel={() => {
              setShowCreateForm(false);
              setEditingCaseStudy(null);
            }}
            submitLabel={editingCaseStudy ? 'Update Case Study' : 'Create Case Study'}
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
              Manage <span className="gradient-text-os">Case Studies</span>
            </h1>
            <p className="text-white/60">Create and manage customer success stories</p>
          </div>
          <Button
            onClick={() => setShowCreateForm(true)}
            variant="solid"
            className="bg-gradient-to-r from-[#6A27D4] to-[#8B5CF6]"
          >
            + Add New Case Study
          </Button>
        </div>

        <div className="mb-6 space-y-4">
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search case studies by title..."
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
          data={caseStudies}
          columns={columns}
          onEdit={(caseStudy) => setEditingCaseStudy(caseStudy)}
          onDelete={handleDelete}
          emptyMessage="No case studies found. Click 'Add New Case Study' to create one."
        />
      </div>
    </AdminLayout>
  );
}
