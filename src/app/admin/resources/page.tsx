'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/supabaseClient';
import { Resource } from '@/types/content';
import { Button } from '@/components/ui/Button';
import DataTable from '@/components/admin/DataTable';
import SearchBar from '@/components/admin/SearchBar';
import FilterToggle from '@/components/admin/FilterToggle';
import FormBuilder, { FormFieldConfig } from '@/components/admin/FormBuilder';
import AdminLayout from '@/components/admin/AdminLayout';
import { uploadFile, generateSlug } from '@/lib/upload';
import { TOPICS, INDUSTRIES } from '@/lib/filterConstants';
import { authors } from '@/data/authors';

export default function ResourcesPage() {
  const [resources, setResources] = useState<Resource[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [featuredFilter, setFeaturedFilter] = useState<boolean | null>(null);
  const [publishedFilter, setPublishedFilter] = useState<boolean | null>(null);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [editingResource, setEditingResource] = useState<Resource | null>(null);

  const getAuthHeader = async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (!session?.access_token) {
      throw new Error('Your admin session has expired. Please log in again.');
    }

    return { Authorization: `Bearer ${session.access_token}` };
  };

  const fetchResources = useCallback(async () => {
    setLoading(true);
    try {
      let query = supabase
        .from('resources')
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
      setResources(data || []);
    } catch (error: unknown) {
      console.error('Error fetching resources:', error);
      alert('Failed to fetch resources: ' + (error instanceof Error ? error.message : String(error)));
    } finally {
      setLoading(false);
    }
  }, [featuredFilter, publishedFilter, searchQuery]);

  useEffect(() => {
    fetchResources();
  }, [fetchResources]);

  const handleDelete = async (resource: Resource) => {
    if (!window.confirm(`Are you sure you want to delete "${resource.title}"?`)) {
      return;
    }

    try {
      const authHeader = await getAuthHeader();
      const response = await fetch(`/api/resources/${resource.id}`, {
        method: 'DELETE',
        credentials: 'include',
        headers: authHeader,
      });
      const result = await response.json() as Record<string, unknown>;
      if (!response.ok) {
        throw new Error((result.error as string) || 'Failed to delete resource');
      }
      alert('Resource deleted successfully!');
      fetchResources();
    } catch (error: unknown) {
      alert('Failed to delete resource: ' + (error instanceof Error ? error.message : 'Unknown error'));
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

      let fileUrl = normalizeUrlValue(formData.file_url);
      let thumbnailUrl = normalizeUrlValue(formData.thumbnail_url);

      // Upload file if provided
      if (files.file_url) {
        const fileUploadResult = await uploadFile({
          bucket: 'resources',
          folder: 'files',
          file: files.file_url,
        });
        if (!fileUploadResult.success || !fileUploadResult.url) {
          throw new Error(fileUploadResult.error || 'Failed to upload resource file.');
        }
        fileUrl = fileUploadResult.url;
      }

      // Upload thumbnail if provided
      if (files.thumbnail_url) {
        const thumbUploadResult = await uploadFile({
          bucket: 'resource-thumbnails',
          folder: 'thumbnails',
          file: files.thumbnail_url,
        });
        if (!thumbUploadResult.success || !thumbUploadResult.url) {
          throw new Error(thumbUploadResult.error || 'Failed to upload thumbnail.');
        }
        thumbnailUrl = thumbUploadResult.url;
      }

      if (!fileUrl) {
        throw new Error('A valid resource file is required.');
      }

      const resourceData = {
        ...formData,
        slug: generateSlug((formData.slug as string) || (formData.title as string)),
        file_url: fileUrl,
        thumbnail_url: thumbnailUrl || null,
        created_at: formData.created_at
          ? new Date(formData.created_at as string).toISOString()
          : undefined,
        tags: Array.isArray(formData.tags) ? formData.tags : [],
      };

      if (editingResource) {
        // Update existing resource
        const updateData = { ...(resourceData as Record<string, unknown>) };
        delete updateData.id;
        delete updateData.created_at;
        delete updateData.updated_at;
        const authHeader = await getAuthHeader();
        const response = await fetch(`/api/resources/${editingResource.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json', ...authHeader },
          credentials: 'include',
          body: JSON.stringify(updateData),
        });
        const result = await response.json() as Record<string, unknown>;
        if (!response.ok) {
          throw new Error((result.error as string) || 'Failed to update resource');
        }
        alert('Resource updated successfully!');
      } else {
        // Create new resource
        const insertData = { ...(resourceData as Record<string, unknown>) };
        delete insertData.id;
        delete insertData.updated_at;
        const authHeader = await getAuthHeader();
        const response = await fetch('/api/resources', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', ...authHeader },
          credentials: 'include',
          body: JSON.stringify(insertData),
        });
        const result = await response.json() as Record<string, unknown>;
        if (!response.ok) {
          throw new Error((result.error as string) || 'Failed to create resource');
        }
        alert('Resource created successfully!');
      }

      setShowCreateForm(false);
      setEditingResource(null);
      fetchResources();
    } catch (error: unknown) {
      throw new Error(error instanceof Error ? error.message : 'Failed to save resource');
    }
  };

  const resourceFormFields: FormFieldConfig[] = [
    { name: 'title', label: 'Title', type: 'text', required: true, placeholder: 'Enter resource title' },
    { name: 'slug', label: 'Slug', type: 'text', required: true, helpText: 'URL-friendly identifier' },
    { name: 'description', label: 'Short Description', type: 'textarea', rows: 3, placeholder: 'Brief description...' },
    { name: 'sections', label: 'Sections', type: 'editorjs-sections', helpText: 'Build content with structured blocks (no HTML/CSS)' },
    { name: 'file_url', label: 'File', type: 'file', required: true, accept: '.pdf,.docx,.xlsx,.zip', bucket: 'resources', folder: 'files' },
    {
      name: 'file_type',
      label: 'File Type',
      type: 'select',
      required: true,
      options: [
        { value: 'pdf', label: 'PDF' },
        { value: 'docx', label: 'DOCX' },
        { value: 'xlsx', label: 'XLSX' },
        { value: 'zip', label: 'ZIP' },
      ],
    },
    { name: 'thumbnail_url', label: 'Thumbnail Image', type: 'file', accept: 'image/*', bucket: 'resource-thumbnails', folder: 'thumbnails' },
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
    { name: 'created_at', label: 'Publish Date', type: 'date', helpText: 'Custom publish date' },
    { name: 'tags', label: 'Tags', type: 'tags', placeholder: 'tools, templates, guides' },
    { name: 'is_featured', label: 'Featured', type: 'toggle' },
    { name: 'is_published', label: 'Published', type: 'toggle' },
  ];

  const columns = [
    { key: 'title', label: 'Title' },
    {
      key: 'file_type',
      label: 'Type',
      render: (resource: Resource) => (
        <span className="uppercase text-xs font-semibold text-white/80 bg-white/10 px-2 py-1 rounded">
          {resource.file_type}
        </span>
      ),
    },
    {
      key: 'is_featured',
      label: 'Featured',
      render: (resource: Resource) => (
        <span className={resource.is_featured ? 'text-green-400' : 'text-white/40'}>
          {resource.is_featured ? 'Yes' : 'No'}
        </span>
      ),
    },
    {
      key: 'is_published',
      label: 'Published',
      render: (resource: Resource) => (
        <span className={resource.is_published ? 'text-green-400' : 'text-yellow-400'}>
          {resource.is_published ? 'Yes' : 'No'}
        </span>
      ),
    },
    {
      key: 'created_at',
      label: 'Created',
      render: (resource: Resource) => new Date(resource.created_at).toLocaleDateString(),
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

  if (showCreateForm || editingResource) {
    return (
      <AdminLayout>
        <div className="max-w-[900px] mx-auto px-6 py-8">
          <button
            onClick={() => {
              setShowCreateForm(false);
              setEditingResource(null);
            }}
            className="mb-6 px-4 py-2 text-sm text-white/80 hover:text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition-all flex items-center gap-2"
          >
            <span>←</span> Back to Resources
          </button>
          <FormBuilder
            title={editingResource ? 'Edit Resource' : 'Create New Resource'}
            fields={resourceFormFields}
            initialData={editingResource
              ? editingResource
              : { is_featured: false, is_published: true, file_type: 'pdf' }}
            onSubmit={handleFormSubmit}
            onCancel={() => {
              setShowCreateForm(false);
              setEditingResource(null);
            }}
            submitLabel={editingResource ? 'Update Resource' : 'Create Resource'}
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
              Manage <span className="gradient-text-os">Resources</span>
            </h1>
            <p className="text-white/60">Create and manage downloadable resources</p>
          </div>
          <Button
            onClick={() => setShowCreateForm(true)}
            variant="solid"
            className="bg-gradient-to-r from-[#6A27D4] to-[#8B5CF6]"
          >
            + Add New Resource
          </Button>
        </div>

        <div className="mb-6 space-y-4">
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search resources by title..."
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
          data={resources}
          columns={columns}
          onEdit={(resource) => setEditingResource(resource)}
          onDelete={handleDelete}
          emptyMessage="No resources found. Click 'Add New Resource' to create one."
        />
      </div>
    </AdminLayout>
  );
}
