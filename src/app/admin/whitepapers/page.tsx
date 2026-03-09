'use client';

import React, { useState, useEffect } from 'react';
import { supabase } from '@/supabaseClient';
import { Whitepaper } from '@/types/content';
import { Button } from '@/components/ui/Button';
import DataTable from '@/components/admin/DataTable';
import SearchBar from '@/components/admin/SearchBar';
import FilterToggle from '@/components/admin/FilterToggle';
import FormBuilder, { FormFieldConfig } from '@/components/admin/FormBuilder';
import AdminLayout from '@/components/admin/AdminLayout';
import { uploadFile } from '@/lib/upload';

export default function WhitepapersPage() {
  const [whitepapers, setWhitepapers] = useState<Whitepaper[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [featuredFilter, setFeaturedFilter] = useState<boolean | null>(null);
  const [publishedFilter, setPublishedFilter] = useState<boolean | null>(null);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [editingWhitepaper, setEditingWhitepaper] = useState<Whitepaper | null>(null);

  useEffect(() => {
    fetchWhitepapers();
  }, [searchQuery, featuredFilter, publishedFilter]);

  const fetchWhitepapers = async () => {
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
      if (error) throw error;
      setWhitepapers(data || []);
    } catch (error: any) {
      console.error('Error fetching whitepapers:', error);
      alert('Failed to fetch whitepapers: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (whitepaper: Whitepaper) => {
    try {
      const { error } = await supabase.from('whitepapers').delete().eq('id', whitepaper.id);
      if (error) throw error;
      alert('Whitepaper deleted successfully!');
      fetchWhitepapers();
    } catch (error: any) {
      alert('Failed to delete whitepaper: ' + error.message);
    }
  };

  const handleFormSubmit = async (formData: any, files: Record<string, File | null>) => {
    try {
      let coverImageUrl = formData.cover_image_url;
      let pdfUrl = formData.pdf_url;

      // Upload cover image if provided
      if (files.cover_image_url) {
        coverImageUrl = await uploadFile({
          bucket: 'whitepaper-covers',
          folder: 'covers',
          file: files.cover_image_url,
        });
      }

      // Upload PDF if provided
      if (files.pdf_url) {
        pdfUrl = await uploadFile({
          bucket: 'whitepapers',
          folder: 'pdfs',
          file: files.pdf_url,
        });
      }

      const whitepaperData = {
        ...formData,
        cover_image_url: coverImageUrl || null,
        pdf_url: pdfUrl,
        tags: Array.isArray(formData.tags) ? formData.tags : [],
      };

      if (editingWhitepaper) {
        // Update existing whitepaper
        const { error } = await supabase
          .from('whitepapers')
          .update({ ...whitepaperData, updated_at: new Date().toISOString() })
          .eq('id', editingWhitepaper.id);
        if (error) throw error;
        alert('Whitepaper updated successfully!');
      } else {
        // Create new whitepaper
        const now = new Date().toISOString();
        const { error } = await supabase.from('whitepapers').insert([{
          ...whitepaperData,
          published_at: whitepaperData.is_published ? now : null,
          created_at: now,
          updated_at: now,
        }]);
        if (error) throw error;
        alert('Whitepaper created successfully!');
      }

      setShowCreateForm(false);
      setEditingWhitepaper(null);
      fetchWhitepapers();
    } catch (error: any) {
      throw new Error(error.message || 'Failed to save whitepaper');
    }
  };

  const whitepaperFormFields: FormFieldConfig[] = [
    { name: 'title', label: 'Title', type: 'text', required: true, placeholder: 'Enter whitepaper title' },
    { name: 'slug', label: 'Slug', type: 'text', required: true, helpText: 'URL-friendly identifier' },
    { name: 'summary', label: 'Summary', type: 'textarea', rows: 3, placeholder: 'Brief summary...' },
    { name: 'pdf_url', label: 'PDF File', type: 'file', required: true, accept: '.pdf', bucket: 'whitepapers', folder: 'pdfs' },
    { name: 'cover_image_url', label: 'Cover Image', type: 'file', accept: 'image/*', bucket: 'whitepaper-covers', folder: 'covers' },
    { name: 'author_name', label: 'Author Name', type: 'text', placeholder: 'John Doe' },
    { name: 'tags', label: 'Tags', type: 'tags', placeholder: 'ai, fintech, technology' },
    { name: 'is_featured', label: 'Featured', type: 'toggle' },
    { name: 'is_published', label: 'Published', type: 'toggle' },
  ];

  const columns = [
    { key: 'title', label: 'Title' },
    { key: 'author_name', label: 'Author', render: (wp: Whitepaper) => wp.author_name || '-' },
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
            initialData={editingWhitepaper || { is_featured: false, is_published: true }}
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
