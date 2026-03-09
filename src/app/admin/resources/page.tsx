'use client';

import React, { useState, useEffect } from 'react';
import { supabase } from '@/supabaseClient';
import { Resource } from '@/types/content';
import { Button } from '@/components/ui/Button';
import DataTable from '@/components/admin/DataTable';
import SearchBar from '@/components/admin/SearchBar';
import FilterToggle from '@/components/admin/FilterToggle';
import FormBuilder, { FormFieldConfig } from '@/components/admin/FormBuilder';
import AdminLayout from '@/components/admin/AdminLayout';
import { uploadFile } from '@/lib/upload';

export default function ResourcesPage() {
  const [resources, setResources] = useState<Resource[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [featuredFilter, setFeaturedFilter] = useState<boolean | null>(null);
  const [publishedFilter, setPublishedFilter] = useState<boolean | null>(null);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [editingResource, setEditingResource] = useState<Resource | null>(null);

  useEffect(() => {
    fetchResources();
  }, [searchQuery, featuredFilter, publishedFilter]);

  const fetchResources = async () => {
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
    } catch (error: any) {
      console.error('Error fetching resources:', error);
      alert('Failed to fetch resources: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (resource: Resource) => {
    try {
      const { error } = await supabase.from('resources').delete().eq('id', resource.id);
      if (error) throw error;
      alert('Resource deleted successfully!');
      fetchResources();
    } catch (error: any) {
      alert('Failed to delete resource: ' + error.message);
    }
  };

  const handleFormSubmit = async (formData: any, files: Record<string, File | null>) => {
    try {
      let fileUrl = formData.file_url;
      let thumbnailUrl = formData.thumbnail_url;

      // Upload file if provided
      if (files.file_url) {
        fileUrl = await uploadFile({
          bucket: 'resources',
          folder: 'files',
          file: files.file_url,
        });
      }

      // Upload thumbnail if provided
      if (files.thumbnail_url) {
        thumbnailUrl = await uploadFile({
          bucket: 'resource-thumbnails',
          folder: 'thumbnails',
          file: files.thumbnail_url,
        });
      }

      const resourceData = {
        ...formData,
        file_url: fileUrl,
        thumbnail_url: thumbnailUrl || null,
        tags: Array.isArray(formData.tags) ? formData.tags : [],
      };

      if (editingResource) {
        // Update existing resource
        const { error } = await supabase
          .from('resources')
          .update({ ...resourceData, updated_at: new Date().toISOString() })
          .eq('id', editingResource.id);
        if (error) throw error;
        alert('Resource updated successfully!');
      } else {
        // Create new resource
        const now = new Date().toISOString();
        const { error } = await supabase.from('resources').insert([{
          ...resourceData,
          created_at: now,
          updated_at: now,
        }]);
        if (error) throw error;
        alert('Resource created successfully!');
      }

      setShowCreateForm(false);
      setEditingResource(null);
      fetchResources();
    } catch (error: any) {
      throw new Error(error.message || 'Failed to save resource');
    }
  };

  const resourceFormFields: FormFieldConfig[] = [
    { name: 'title', label: 'Title', type: 'text', required: true, placeholder: 'Enter resource title' },
    { name: 'slug', label: 'Slug', type: 'text', required: true, helpText: 'URL-friendly identifier' },
    { name: 'description', label: 'Description', type: 'textarea', rows: 3, placeholder: 'Brief description...' },
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
            initialData={editingResource || { is_featured: false, is_published: true, file_type: 'pdf' }}
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
