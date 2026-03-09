'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/supabaseClient';
import ContentForm from '../components/ContentForm';

export default function AddContentPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  // Check authentication
  useEffect(() => {
    const verifyAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        console.log('Not authenticated, redirecting to login');
        router.push('/admin/login');
      } else {
        setLoading(false);
      }
    };
    verifyAuth();
  }, [router]);

  const handleSuccess = (newContent: any) => {
    console.log('Content created successfully:', newContent);
    alert('Content created successfully!');
    router.push('/admin/dashboard');
  };

  const handleCancel = () => {
    router.push('/admin/dashboard');
  };

  if (loading) {
    return <div style={{ padding: '20px' }}>Loading...</div>;
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
        <ContentForm 
          onSuccess={handleSuccess}
          onCancel={handleCancel}
        />
      </div>
    </div>
  );
}
