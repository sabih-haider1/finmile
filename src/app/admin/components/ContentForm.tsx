'use client';

import React, { useState, useEffect } from 'react';
import { supabase } from '@/supabaseClient';
import { Button } from '@/components/ui/Button';

interface ContentFormProps {
  existingContent?: any;
  onSuccess?: (content: any) => void;
  onCancel?: () => void;
}

export default function ContentForm({ existingContent, onSuccess, onCancel }: ContentFormProps) {
  const [formData, setFormData] = useState({
    type: 'resource',
    title: '',
    slug: '',
    summary: '',
    body: '',
    cover_image_url: '',
    pdf_url: '',
    author_name: '',
    category: '',
    tags: '',
    is_featured: false,
    is_published: true,
  });
  const [coverImageFile, setCoverImageFile] = useState<File | null>(null);
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [uploadProgress, setUploadProgress] = useState('');

  // Populate form if editing existing content
  useEffect(() => {
    if (existingContent) {
      setFormData({
        type: existingContent.type || 'resource',
        title: existingContent.title || '',
        slug: existingContent.slug || '',
        summary: existingContent.summary || '',
        body: existingContent.body || '',
        cover_image_url: existingContent.cover_image_url || '',
        pdf_url: existingContent.pdf_url || '',
        author_name: existingContent.author_name || '',
        category: existingContent.category || '',
        tags: Array.isArray(existingContent.tags) ? existingContent.tags.join(', ') : '',
        is_featured: existingContent.is_featured || false,
        is_published: existingContent.is_published !== false,
      });
    }
  }, [existingContent]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type } = target;
    const checked = type === 'checkbox' ? target.checked : undefined;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Upload file to Supabase Storage
  const uploadFile = async (file: File, bucket: string, folder: string) => {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}_${Math.random().toString(36).substring(7)}.${fileExt}`;
    const filePath = `${folder}/${fileName}`;

    const { data, error } = await supabase.storage
      .from(bucket)
      .upload(filePath, file);

    if (error) {
      throw error;
    }

    // Get public URL
    const { data: { publicUrl } } = supabase.storage
      .from(bucket)
      .getPublicUrl(filePath);

    return publicUrl;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setUploadProgress('');

    try {
      let coverImageUrl = formData.cover_image_url;
      let pdfUrl = formData.pdf_url;

      // Upload cover image if provided
      if (coverImageFile) {
        setUploadProgress('Uploading cover image...');
        console.log('Uploading cover image:', coverImageFile.name);
        coverImageUrl = await uploadFile(coverImageFile, 'content-files', 'covers');
        console.log('Cover image uploaded:', coverImageUrl);
      }

      // Upload PDF if provided
      if (pdfFile) {
        setUploadProgress('Uploading PDF...');
        console.log('Uploading PDF:', pdfFile.name);
        pdfUrl = await uploadFile(pdfFile, 'content-files', 'pdfs');
        console.log('PDF uploaded:', pdfUrl);
      }

      setUploadProgress('Saving content...');

      // Prepare data for database
      const dbData = {
        type: formData.type,
        title: formData.title,
        slug: formData.slug,
        summary: formData.summary || null,
        body: formData.body || null,
        cover_image_url: coverImageUrl || null,
        pdf_url: pdfUrl || null,
        author_name: formData.author_name || null,
        category: formData.category || null,
        tags: formData.tags ? formData.tags.split(',').map(t => t.trim()).filter(t => t) : null,
        is_featured: formData.is_featured,
        is_published: formData.is_published,
        updated_at: new Date().toISOString(),
      };

      // If editing, update; otherwise insert
      let result;
      if (existingContent) {
        // Update existing content
        result = await supabase
          .from('contents')
          .update(dbData)
          .eq('id', existingContent.id)
          .select();
      } else {
        // Insert new content
        const insertData = {
          ...dbData,
          published_at: formData.is_published ? new Date().toISOString() : null
        };
        result = await supabase
          .from('contents')
          .insert([insertData])
          .select();
      }

      if (result.error) {
        throw result.error;
      }

      console.log('Content saved successfully:', result.data);
      setUploadProgress('');
      if (onSuccess && result.data) {
        onSuccess(result.data[0]);
      }
    } catch (error: any) {
      console.error('Error saving content:', error);
      setError(error.message || 'Failed to save content');
      setUploadProgress('');
    } finally {
      setLoading(false);
    }
  };

  const inputClassName = "w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#6A27D4] focus:border-transparent transition-all";
  const labelClassName = "block text-sm font-medium text-white/80 mb-2";

  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
      <h2 className="text-2xl font-bold text-white mb-6">
        {existingContent ? 'Edit' : 'Add New'} <span className="gradient-text-os">Content</span>
      </h2>
      
      {error && (
        <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 mb-6">
          <p className="text-red-400 text-sm">{error}</p>
        </div>
      )}

      {uploadProgress && (
        <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4 mb-6">
          <p className="text-blue-400 text-sm">{uploadProgress}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Type */}
        <div>
          <label htmlFor="type" className={labelClassName}>
            Type <span className="text-red-400">*</span>
          </label>
          <select
            id="type"
            name="type"
            value={formData.type}
            onChange={handleInputChange}
            required
            className={inputClassName}
          >
            <option value="resource" className="bg-[#0B0616]">Resource</option>
            <option value="whitepaper" className="bg-[#0B0616]">Whitepaper</option>
          </select>
        </div>

        {/* Title */}
        <div>
          <label htmlFor="title" className={labelClassName}>
            Title <span className="text-red-400">*</span>
          </label>
          <input
            id="title"
            name="title"
            type="text"
            value={formData.title}
            onChange={handleInputChange}
            required
            className={inputClassName}
            placeholder="Enter content title"
          />
        </div>

        {/* Slug */}
        <div>
          <label htmlFor="slug" className={labelClassName}>
            Slug <span className="text-red-400">*</span>
            <span className="text-white/40 text-xs ml-2">(unique URL identifier)</span>
          </label>
          <input
            id="slug"
            name="slug"
            type="text"
            value={formData.slug}
            onChange={handleInputChange}
            required
            className={inputClassName}
            placeholder="content-url-slug"
          />
        </div>

        {/* Summary */}
        <div>
          <label htmlFor="summary" className={labelClassName}>
            Summary
          </label>
          <textarea
            id="summary"
            name="summary"
            value={formData.summary}
            onChange={handleInputChange}
            rows={3}
            className={inputClassName}
            placeholder="Brief summary of the content"
          />
        </div>

        {/* Body */}
        <div>
          <label htmlFor="body" className={labelClassName}>
            Body
          </label>
          <textarea
            id="body"
            name="body"
            value={formData.body}
            onChange={handleInputChange}
            rows={10}
            className={inputClassName}
            placeholder="Full content body"
          />
        </div>

        {/* Author Name */}
        <div>
          <label htmlFor="author_name" className={labelClassName}>
            Author Name
          </label>
          <input
            id="author_name"
            name="author_name"
            type="text"
            value={formData.author_name}
            onChange={handleInputChange}
            className={inputClassName}
            placeholder="Author name"
          />
        </div>

        {/* Category */}
        <div>
          <label htmlFor="category" className={labelClassName}>
            Category
          </label>
          <input
            id="category"
            name="category"
            type="text"
            value={formData.category}
            onChange={handleInputChange}
            className={inputClassName}
            placeholder="Content category"
          />
        </div>

        {/* Tags */}
        <div>
          <label htmlFor="tags" className={labelClassName}>
            Tags <span className="text-white/40 text-xs">(comma-separated)</span>
          </label>
          <input
            id="tags"
            name="tags"
            type="text"
            value={formData.tags}
            onChange={handleInputChange}
            className={inputClassName}
            placeholder="tag1, tag2, tag3"
          />
        </div>

        {/* Cover Image */}
        <div>
          <label htmlFor="cover_image" className={labelClassName}>
            Cover Image
          </label>
          {formData.cover_image_url && (
            <div className="mb-2 text-sm">
              <span className="text-white/60">Current: </span>
              <a href={formData.cover_image_url} target="_blank" rel="noopener noreferrer" className="text-[#B28BFF] hover:text-[#D1B8FF]">
                View Image
              </a>
            </div>
          )}
          <input
            id="cover_image"
            type="file"
            accept="image/*"
            onChange={(e) => setCoverImageFile(e.target.files?.[0] || null)}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white text-sm file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#6A27D4] file:text-white hover:file:bg-[#7834E8] file:cursor-pointer transition-all"
          />
        </div>

        {/* PDF File */}
        <div>
          <label htmlFor="pdf_file" className={labelClassName}>
            PDF File
          </label>
          {formData.pdf_url && (
            <div className="mb-2 text-sm">
              <span className="text-white/60">Current: </span>
              <a href={formData.pdf_url} target="_blank" rel="noopener noreferrer" className="text-[#B28BFF] hover:text-[#D1B8FF]">
                View PDF
              </a>
            </div>
          )}
          <input
            id="pdf_file"
            type="file"
            accept=".pdf"
            onChange={(e) => setPdfFile(e.target.files?.[0] || null)}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white text-sm file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#6A27D4] file:text-white hover:file:bg-[#7834E8] file:cursor-pointer transition-all"
          />
        </div>

        {/* Checkboxes */}
        <div className="flex gap-6">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              name="is_featured"
              type="checkbox"
              checked={formData.is_featured}
              onChange={handleInputChange}
              className="w-5 h-5 bg-white/10 border-white/20 rounded focus:ring-2 focus:ring-[#6A27D4] cursor-pointer"
            />
            <span className="text-white/80 text-sm font-medium">Featured</span>
          </label>

          <label className="flex items-center gap-3 cursor-pointer">
            <input
              name="is_published"
              type="checkbox"
              checked={formData.is_published}
              onChange={handleInputChange}
              className="w-5 h-5 bg-white/10 border-white/20 rounded focus:ring-2 focus:ring-[#6A27D4] cursor-pointer"
            />
            <span className="text-white/80 text-sm font-medium">Published</span>
          </label>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 pt-4">
          <Button
            type="submit"
            disabled={loading}
            variant="solid"
            className="flex-1 sm:flex-none"
          >
            {loading ? 'Saving...' : existingContent ? 'Update Content' : 'Create Content'}
          </Button>
          {onCancel && (
            <Button
              type="button"
              onClick={onCancel}
              disabled={loading}
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10"
            >
              Cancel
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}
