import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

const ContentForm = ({ existingContent, onSuccess, onCancel }) => {
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
  const [coverImageFile, setCoverImageFile] = useState(null);
  const [pdfFile, setPdfFile] = useState(null);
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

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Upload file to Supabase Storage
  const uploadFile = async (file, bucket, folder) => {
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

  const handleSubmit = async (e) => {
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
        dbData.published_at = formData.is_published ? new Date().toISOString() : null;
        result = await supabase
          .from('contents')
          .insert([dbData])
          .select();
      }

      if (result.error) {
        throw result.error;
      }

      console.log('Content saved successfully:', result.data);
      setUploadProgress('');
      if (onSuccess) {
        onSuccess(result.data[0]);
      }
    } catch (error) {
      console.error('Error saving content:', error);
      setError(error.message || 'Failed to save content');
      setUploadProgress('');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h2>{existingContent ? 'Edit Content' : 'Add New Content'}</h2>
      
      {error && (
        <div style={{ color: 'red', marginBottom: '15px', padding: '10px', border: '1px solid red' }}>
          {error}
        </div>
      )}

      {uploadProgress && (
        <div style={{ color: 'blue', marginBottom: '15px', padding: '10px', border: '1px solid blue' }}>
          {uploadProgress}
        </div>
      )}

      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="type" style={{ display: 'block', marginBottom: '5px' }}>
          Type: *
        </label>
        <select
          id="type"
          name="type"
          value={formData.type}
          onChange={handleInputChange}
          required
          style={{ width: '100%', padding: '8px', fontSize: '14px' }}
        >
          <option value="resource">Resource</option>
          <option value="whitepaper">Whitepaper</option>
        </select>
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="title" style={{ display: 'block', marginBottom: '5px' }}>
          Title: *
        </label>
        <input
          id="title"
          name="title"
          type="text"
          value={formData.title}
          onChange={handleInputChange}
          required
          style={{ width: '100%', padding: '8px', fontSize: '14px' }}
        />
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="slug" style={{ display: 'block', marginBottom: '5px' }}>
          Slug: * (unique URL identifier)
        </label>
        <input
          id="slug"
          name="slug"
          type="text"
          value={formData.slug}
          onChange={handleInputChange}
          required
          style={{ width: '100%', padding: '8px', fontSize: '14px' }}
        />
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="summary" style={{ display: 'block', marginBottom: '5px' }}>
          Summary:
        </label>
        <textarea
          id="summary"
          name="summary"
          value={formData.summary}
          onChange={handleInputChange}
          rows="3"
          style={{ width: '100%', padding: '8px', fontSize: '14px' }}
        />
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="body" style={{ display: 'block', marginBottom: '5px' }}>
          Body:
        </label>
        <textarea
          id="body"
          name="body"
          value={formData.body}
          onChange={handleInputChange}
          rows="10"
          style={{ width: '100%', padding: '8px', fontSize: '14px' }}
        />
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="author_name" style={{ display: 'block', marginBottom: '5px' }}>
          Author Name:
        </label>
        <input
          id="author_name"
          name="author_name"
          type="text"
          value={formData.author_name}
          onChange={handleInputChange}
          style={{ width: '100%', padding: '8px', fontSize: '14px' }}
        />
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="category" style={{ display: 'block', marginBottom: '5px' }}>
          Category:
        </label>
        <input
          id="category"
          name="category"
          type="text"
          value={formData.category}
          onChange={handleInputChange}
          style={{ width: '100%', padding: '8px', fontSize: '14px' }}
        />
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="tags" style={{ display: 'block', marginBottom: '5px' }}>
          Tags: (comma-separated)
        </label>
        <input
          id="tags"
          name="tags"
          type="text"
          value={formData.tags}
          onChange={handleInputChange}
          placeholder="tag1, tag2, tag3"
          style={{ width: '100%', padding: '8px', fontSize: '14px' }}
        />
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="cover_image" style={{ display: 'block', marginBottom: '5px' }}>
          Cover Image:
        </label>
        {formData.cover_image_url && (
          <div style={{ marginBottom: '5px' }}>
            Current: <a href={formData.cover_image_url} target="_blank" rel="noopener noreferrer">View Image</a>
          </div>
        )}
        <input
          id="cover_image"
          type="file"
          accept="image/*"
          onChange={(e) => setCoverImageFile(e.target.files[0])}
          style={{ width: '100%', padding: '8px', fontSize: '14px' }}
        />
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="pdf_file" style={{ display: 'block', marginBottom: '5px' }}>
          PDF File:
        </label>
        {formData.pdf_url && (
          <div style={{ marginBottom: '5px' }}>
            Current: <a href={formData.pdf_url} target="_blank" rel="noopener noreferrer">View PDF</a>
          </div>
        )}
        <input
          id="pdf_file"
          type="file"
          accept=".pdf"
          onChange={(e) => setPdfFile(e.target.files[0])}
          style={{ width: '100%', padding: '8px', fontSize: '14px' }}
        />
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'flex', alignItems: 'center' }}>
          <input
            name="is_featured"
            type="checkbox"
            checked={formData.is_featured}
            onChange={handleInputChange}
            style={{ marginRight: '8px' }}
          />
          Featured
        </label>
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'flex', alignItems: 'center' }}>
          <input
            name="is_published"
            type="checkbox"
            checked={formData.is_published}
            onChange={handleInputChange}
            style={{ marginRight: '8px' }}
          />
          Published
        </label>
      </div>

      <div style={{ display: 'flex', gap: '10px' }}>
        <button
          type="submit"
          disabled={loading}
          style={{ padding: '10px 20px', fontSize: '14px' }}
        >
          {loading ? 'Saving...' : existingContent ? 'Update Content' : 'Create Content'}
        </button>
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            disabled={loading}
            style={{ padding: '10px 20px', fontSize: '14px' }}
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default ContentForm;
