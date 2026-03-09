'use client';

import React, { useState, useEffect } from 'react';
import { supabase } from '@/supabaseClient';
import { Blog } from '@/types/content';
import { Button } from '@/components/ui/Button';
import DataTable from '@/components/admin/DataTable';
import SearchBar from '@/components/admin/SearchBar';
import FilterToggle from '@/components/admin/FilterToggle';
import FormBuilder, { FormFieldConfig } from '@/components/admin/FormBuilder';
import AdminLayout from '@/components/admin/AdminLayout';
import { uploadFile } from '@/lib/upload';

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [featuredFilter, setFeaturedFilter] = useState<boolean | null>(null);
  const [publishedFilter, setPublishedFilter] = useState<boolean | null>(null);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);

  useEffect(() => {
    fetchBlogs();
  }, [searchQuery, featuredFilter, publishedFilter]);

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      let query = supabase
        .from('blogs')
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
      setBlogs(data || []);
    } catch (error: any) {
      console.error('Error fetching blogs:', error);
      alert('Failed to fetch blogs: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (blog: Blog) => {
    try {
      const { error } = await supabase.from('blogs').delete().eq('id', blog.id);
      if (error) throw error;
      alert('Blog deleted successfully!');
      fetchBlogs();
    } catch (error: any) {
      alert('Failed to delete blog: ' + error.message);
    }
  };

  const handleFormSubmit = async (formData: any, files: Record<string, File | null>) => {
    try {
      let coverImageUrl = formData.cover_image_url;

      // Upload cover image if provided
      if (files.cover_image_url) {
        coverImageUrl = await uploadFile({
          bucket: 'blog-covers',
          folder: 'covers',
          file: files.cover_image_url,
        });
      }

      const blogData = {
        ...formData,
        cover_image_url: coverImageUrl || null,
        tags: Array.isArray(formData.tags) ? formData.tags : [],
      };

      if (editingBlog) {
        // Update existing blog
        const { error } = await supabase
          .from('blogs')
          .update({ ...blogData, updated_at: new Date().toISOString() })
          .eq('id', editingBlog.id);
        if (error) throw error;
        alert('Blog updated successfully!');
      } else {
        // Create new blog
        const now = new Date().toISOString();
        const { error } = await supabase.from('blogs').insert([{
          ...blogData,
          published_at: blogData.is_published ? now : null,
          created_at: now,
          updated_at: now,
        }]);
        if (error) throw error;
        alert('Blog created successfully!');
      }

      setShowCreateForm(false);
      setEditingBlog(null);
      fetchBlogs();
    } catch (error: any) {
      throw new Error(error.message || 'Failed to save blog');
    }
  };

  const blogFormFields: FormFieldConfig[] = [
    { name: 'title', label: 'Title', type: 'text', required: true, placeholder: 'Enter blog title' },
    { name: 'slug', label: 'Slug', type: 'text', required: true, helpText: 'URL-friendly identifier' },
    { name: 'summary', label: 'Summary', type: 'textarea', rows: 3, placeholder: 'Brief summary...' },
    { name: 'body', label: 'Body', type: 'richtext', required: true, placeholder: 'Write your blog content...' },
    { name: 'cover_image_url', label: 'Cover Image', type: 'file', accept: 'image/*', bucket: 'blog-covers', folder: 'covers' },
    { name: 'author_name', label: 'Author Name', type: 'text', placeholder: 'John Doe' },
    { name: 'category', label: 'Category', type: 'text', placeholder: 'Technology' },
    { name: 'tags', label: 'Tags', type: 'tags', placeholder: 'ai, fintech, technology' },
    { name: 'is_featured', label: 'Featured', type: 'toggle' },
    { name: 'is_published', label: 'Published', type: 'toggle' },
  ];

  const columns = [
    { key: 'title', label: 'Title' },
    { key: 'category', label: 'Category', render: (blog: Blog) => blog.category || '-' },
    {
      key: 'is_featured',
      label: 'Featured',
      render: (blog: Blog) => (
        <span className={blog.is_featured ? 'text-green-400' : 'text-white/40'}>
          {blog.is_featured ? 'Yes' : 'No'}
        </span>
      ),
    },
    {
      key: 'is_published',
      label: 'Published',
      render: (blog: Blog) => (
        <span className={blog.is_published ? 'text-green-400' : 'text-yellow-400'}>
          {blog.is_published ? 'Yes' : 'No'}
        </span>
      ),
    },
    {
      key: 'created_at',
      label: 'Created',
      render: (blog: Blog) => new Date(blog.created_at).toLocaleDateString(),
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

  if (showCreateForm || editingBlog) {
    return (
      <AdminLayout>
        <div className="max-w-[900px] mx-auto px-6 py-8">
          <button
            onClick={() => {
              setShowCreateForm(false);
              setEditingBlog(null);
            }}
            className="mb-6 px-4 py-2 text-sm text-white/80 hover:text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition-all flex items-center gap-2"
          >
            <span>←</span> Back to Blogs
          </button>
          <FormBuilder
            title={editingBlog ? 'Edit Blog' : 'Create New Blog'}
            fields={blogFormFields}
            initialData={editingBlog || { is_featured: false, is_published: true }}
            onSubmit={handleFormSubmit}
            onCancel={() => {
              setShowCreateForm(false);
              setEditingBlog(null);
            }}
            submitLabel={editingBlog ? 'Update Blog' : 'Create Blog'}
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
              Manage <span className="gradient-text-os">Blogs</span>
            </h1>
            <p className="text-white/60">Create and manage blog articles</p>
          </div>
          <Button
            onClick={() => setShowCreateForm(true)}
            variant="solid"
            className="bg-gradient-to-r from-[#6A27D4] to-[#8B5CF6]"
          >
            + Add New Blog
          </Button>
        </div>

        <div className="mb-6 space-y-4">
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search blogs by title..."
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
          data={blogs}
          columns={columns}
          onEdit={(blog) => setEditingBlog(blog)}
          onDelete={handleDelete}
          emptyMessage="No blogs found. Click 'Add New Blog' to create one."
        />
      </div>
    </AdminLayout>
  );
}
