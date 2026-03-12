'use client';

import React, { useState, useEffect } from 'react';
import { supabase } from '@/supabaseClient';
import { CaseStudy } from '@/types/content';
import { Button } from '@/components/ui/Button';
import DataTable from '@/components/admin/DataTable';
import SearchBar from '@/components/admin/SearchBar';
import FilterToggle from '@/components/admin/FilterToggle';
import FormBuilder, { FormFieldConfig } from '@/components/admin/FormBuilder';
import AdminLayout from '@/components/admin/AdminLayout';
import { uploadFile, generateSlug } from '@/lib/upload';

export default function CaseStudiesPage() {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [featuredFilter, setFeaturedFilter] = useState<boolean | null>(null);
  const [publishedFilter, setPublishedFilter] = useState<boolean | null>(null);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [editingCaseStudy, setEditingCaseStudy] = useState<CaseStudy | null>(null);

  useEffect(() => {
    fetchCaseStudies();
  }, [searchQuery, featuredFilter, publishedFilter]);

  const fetchCaseStudies = async () => {
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
    } catch (error: any) {
      console.error('Error fetching case studies:', error);
      alert('Failed to fetch case studies: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (caseStudy: CaseStudy) => {
    if (!window.confirm(`Are you sure you want to delete "${caseStudy.title}"?`)) {
      return;
    }

    try {
      const { error } = await supabase.from('case_studies').delete().eq('id', caseStudy.id);
      if (error) throw error;
      alert('Case study deleted successfully!');
      fetchCaseStudies();
    } catch (error: any) {
      alert('Failed to delete case study: ' + error.message);
    }
  };

  const handleFormSubmit = async (formData: any, files: Record<string, File | null>) => {
    try {
      let coverImageUrl = formData.cover_image_url;

      // Upload cover image if provided
      if (files.cover_image_url) {
        coverImageUrl = await uploadFile({
          bucket: 'case-study-covers',
          folder: 'covers',
          file: files.cover_image_url,
        });
      }

      const caseStudyData = {
        ...formData,
        slug: generateSlug(formData.slug || formData.title),
        cover_image_url: coverImageUrl || null,
        industry: formData.industry && formData.industry.trim() !== '' ? formData.industry : null,
        company_name: formData.company_name && formData.company_name.trim() !== '' ? formData.company_name : null,
        challenge: formData.challenge && formData.challenge.trim() !== '' ? formData.challenge : null,
        solution: formData.solution && formData.solution.trim() !== '' ? formData.solution : null,
        results: formData.results && formData.results.trim() !== '' ? formData.results : null,
        tags: Array.isArray(formData.tags) ? formData.tags : [],
      };

      if (editingCaseStudy) {
        // Update existing case study
        const { id, created_at, ...updateData } = caseStudyData;
        const { error } = await supabase
          .from('case_studies')
          .update({ ...updateData, updated_at: new Date().toISOString() })
          .eq('id', editingCaseStudy.id);
        if (error) throw error;
        alert('Case study updated successfully!');
      } else {
        // Create new case study
        const now = new Date().toISOString();
        const { id, created_at, updated_at, ...insertData } = caseStudyData;
        const { error } = await supabase.from('case_studies').insert([{
          ...insertData,
          published_at: insertData.is_published ? now : null,
          created_at: now,
          updated_at: now,
        }]);
        if (error) throw error;
        alert('Case study created successfully!');
      }

      setShowCreateForm(false);
      setEditingCaseStudy(null);
      fetchCaseStudies();
    } catch (error: any) {
      throw new Error(error.message || 'Failed to save case study');
    }
  };

  const caseStudyFormFields: FormFieldConfig[] = [
    { name: 'title', label: 'Title', type: 'text', required: true, placeholder: 'Enter case study title' },
    { name: 'slug', label: 'Slug', type: 'text', required: true, helpText: 'URL-friendly identifier' },
    { name: 'summary', label: 'Summary', type: 'textarea', rows: 3, placeholder: 'Brief summary...' },
    { name: 'content', label: 'Main Content', type: 'textarea', rows: 10, required: true, placeholder: 'Full case study content...' },
    { name: 'cover_image_url', label: 'Cover Image', type: 'file', accept: 'image/*', bucket: 'case-study-covers', folder: 'covers' },
    { name: 'company_name', label: 'Company Name', type: 'text', placeholder: 'Acme Corporation' },
    { 
      name: 'industry', 
      label: 'Industry', 
      type: 'select',
      options: [
        { value: '', label: 'Select an industry' },
        { value: 'E-Commerce', label: 'E-Commerce' },
        { value: 'Retail', label: 'Retail' },
        { value: 'Food & Beverage', label: 'Food & Beverage' },
        { value: 'Healthcare', label: 'Healthcare' },
        { value: 'Manufacturing', label: 'Manufacturing' },
        { value: 'Logistics', label: 'Logistics' },
        { value: 'Technology', label: 'Technology' },
        { value: 'Transportation', label: 'Transportation' },
      ]
    },
    { name: 'challenge', label: 'The Challenge', type: 'textarea', rows: 5, placeholder: 'Describe the challenge faced...' },
    { name: 'solution', label: 'The Solution', type: 'textarea', rows: 5, placeholder: 'Describe how the problem was solved...' },
    { name: 'results', label: 'The Results', type: 'textarea', rows: 5, placeholder: 'Describe the outcomes and metrics...' },
    { name: 'tags', label: 'Tags', type: 'tags', placeholder: 'ai, automation, roi' },
    { name: 'is_featured', label: 'Featured', type: 'toggle' },
    { name: 'is_published', label: 'Published', type: 'toggle' },
  ];

  const columns = [
    { key: 'title', label: 'Title' },
    { key: 'company_name', label: 'Company', render: (cs: CaseStudy) => cs.company_name || '-' },
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
            initialData={editingCaseStudy || { is_featured: false, is_published: true }}
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
