'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/supabaseClient';
import { Guide } from '@/types/content';
import { Button } from '@/components/ui/Button';
import DataTable from '@/components/admin/DataTable';
import SearchBar from '@/components/admin/SearchBar';
import FormBuilder, { FormFieldConfig } from '@/components/admin/FormBuilder';
import AdminLayout from '@/components/admin/AdminLayout';
import { uploadFile, generateSlug } from '@/lib/upload';

export default function GuidesPage() {
  const [guides, setGuides] = useState<Guide[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [editingGuide, setEditingGuide] = useState<Guide | null>(null);

  const fetchGuides = useCallback(async () => {
    setLoading(true);
    try {
      let query = supabase
        .from('guides')
        .select('*')
        .order('created_at', { ascending: false });

      if (searchQuery) {
        query = query.ilike('title', `%${searchQuery}%`);
      }

      const { data, error } = await query;
      if (error) throw error;
      setGuides(data || []);
    } catch (error: unknown) {
      console.error('Error fetching guides:', error);
      alert('Failed to fetch guides: ' + (error instanceof Error ? error.message : String(error)));
    } finally {
      setLoading(false);
    }
  }, [searchQuery]);

  useEffect(() => {
    fetchGuides();
  }, [fetchGuides]);

  const handleDelete = async (guide: Guide) => {
    if (!window.confirm(`Are you sure you want to delete "${guide.title}"?`)) {
      return;
    }

    try {
      const { error } = await supabase.from('guides').delete().eq('id', guide.id);
      if (error) throw error;
      alert('Guide deleted successfully!');
      fetchGuides();
    } catch (error: unknown) {
      alert('Failed to delete guide: ' + (error instanceof Error ? error.message : 'Unknown error'));
    }
  };

  const handleFormSubmit = async (formData: Record<string, unknown>, files: Record<string, File | null>) => {
    try {
      let pdfUrl = formData.pdf_url;

      // Upload PDF if provided
      if (files.pdf_url) {
        const uploadResult = await uploadFile({
          bucket: 'guides',
          folder: 'pdfs',
          file: files.pdf_url,
        });
        if (!uploadResult.success) throw new Error(uploadResult.error || 'Upload failed');
        pdfUrl = uploadResult.url;
      }

      const guideData = {
        ...formData,
        slug: generateSlug((formData.slug as string) || (formData.title as string)),
        pdf_url: pdfUrl,
        created_at: formData.created_at
          ? new Date(formData.created_at as string).toISOString()
          : undefined,
      };

      if (editingGuide) {
        // Update existing guide
        const updateData = { ...(guideData as Record<string, unknown>) };
        delete updateData.id;
        const { error } = await supabase
          .from('guides')
          .update({ ...updateData, updated_at: new Date().toISOString() })
          .eq('id', editingGuide.id);
        if (error) throw error;
        alert('Guide updated successfully!');
      } else {
        // Create new guide
        const now = (guideData.created_at as string) || new Date().toISOString();
        const insertData = { ...(guideData as Record<string, unknown>) };
        delete insertData.id;
        delete insertData.updated_at;
        const { error } = await supabase.from('guides').insert([{
          ...insertData,
          created_at: now,
          updated_at: now,
        }]);
        if (error) throw error;
        alert('Guide created successfully!');
      }

      setShowCreateForm(false);
      setEditingGuide(null);
      fetchGuides();
    } catch (error: unknown) {
      throw new Error(error instanceof Error ? error.message : 'Failed to save guide');
    }
  };

  const guideFormFields: FormFieldConfig[] = [
    { name: 'title', label: 'Title', type: 'text', required: true, placeholder: 'Enter guide title' },
    { name: 'slug', label: 'Slug', type: 'text', required: true, helpText: 'URL-friendly identifier' },
    { name: 'description', label: 'Description', type: 'textarea', rows: 4, placeholder: 'Guide description...' },
    { name: 'pdf_url', label: 'PDF File', type: 'file', required: true, accept: '.pdf', bucket: 'guides', folder: 'pdfs' },
    { name: 'created_at', label: 'Publish Date', type: 'date', helpText: 'Custom publish date' },
  ];

  const columns = [
    { key: 'title', label: 'Title' },
    {
      key: 'description',
      label: 'Description',
      render: (guide: Guide) => (
        <span className="text-white/60 line-clamp-2">
          {guide.description || '-'}
        </span>
      ),
    },
    {
      key: 'created_at',
      label: 'Created',
      render: (guide: Guide) => new Date(guide.created_at).toLocaleDateString(),
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

  if (showCreateForm || editingGuide) {
    return (
      <AdminLayout>
        <div className="max-w-[900px] mx-auto px-6 py-8">
          <button
            onClick={() => {
              setShowCreateForm(false);
              setEditingGuide(null);
            }}
            className="mb-6 px-4 py-2 text-sm text-white/80 hover:text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition-all flex items-center gap-2"
          >
            <span>←</span> Back to Guides
          </button>
          <FormBuilder
            title={editingGuide ? 'Edit Guide' : 'Create New Guide'}
            fields={guideFormFields}
            initialData={editingGuide || {}}
            onSubmit={handleFormSubmit}
            onCancel={() => {
              setShowCreateForm(false);
              setEditingGuide(null);
            }}
            submitLabel={editingGuide ? 'Update Guide' : 'Create Guide'}
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
              Manage <span className="gradient-text-os">Guides</span>
            </h1>
            <p className="text-white/60">Create and manage PDF guides</p>
          </div>
          <Button
            onClick={() => setShowCreateForm(true)}
            variant="solid"
            className="bg-gradient-to-r from-[#6A27D4] to-[#8B5CF6]"
          >
            + Add New Guide
          </Button>
        </div>

        <div className="mb-6">
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search guides by title..."
          />
        </div>

        <DataTable
          data={guides}
          columns={columns}
          onEdit={(guide) => setEditingGuide(guide)}
          onDelete={handleDelete}
          emptyMessage="No guides found. Click 'Add New Guide' to create one."
        />
      </div>
    </AdminLayout>
  );
}
