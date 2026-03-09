'use client';

import React, { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { supabase } from '@/supabaseClient';
import ContentForm from '../../components/ContentForm';

export default function EditContentPage() {
  const params = useParams();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState<any>(null);
  const [error, setError] = useState('');
  const id = params?.id as string;

  // Check authentication and fetch content
  useEffect(() => {
    const initialize = async () => {
      // Check authentication first
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        console.log('Not authenticated, redirecting to login');
        router.push('/admin/login');
        return;
      }

      // Fetch content to edit
      try {
        console.log('Fetching content with id:', id);
        const { data, error } = await supabase
          .from('contents')
          .select('*')
          .eq('id', id)
          .single();

        if (error) {
          throw error;
        }

        if (!data) {
          throw new Error('Content not found');
        }

        console.log('Content fetched:', data);
        setContent(data);
      } catch (error: any) {
        console.error('Error fetching content:', error);
        setError(error.message || 'Failed to fetch content');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      initialize();
    }
  }, [id, router]);

  const handleSuccess = (updatedContent: any) => {
    console.log('Content updated successfully:', updatedContent);
    alert('Content updated successfully!');
    router.push('/admin/dashboard');
  };

  const handleCancel = () => {
    router.push('/admin/dashboard');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-white text-lg">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-[900px] mx-auto px-6 py-8">
          <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 mb-6">
            <p className="text-red-400">{error}</p>
          </div>
          <button 
            onClick={() => router.push('/admin/dashboard')}
            className="px-4 py-2 text-sm text-white/80 hover:text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition-all flex items-center gap-2"
          >
            <span>←</span> Back to Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-[900px] mx-auto px-6 py-8">
        <button 
          onClick={() => router.push('/admin/dashboard')}
          className="mb-6 px-4 py-2 text-sm text-white/80 hover:text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition-all flex items-center gap-2"
        >
          <span>←</span> Back to Dashboard
        </button>
        {content && (
          <ContentForm 
            existingContent={content}
            onSuccess={handleSuccess}
            onCancel={handleCancel}
          />
        )}
      </div>
    </div>
  );
}
