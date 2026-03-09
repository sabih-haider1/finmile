'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/supabaseClient';
import { Button } from '@/components/ui/Button';
import ContentList from '../components/ContentList';

export default function AdminDashboardPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const initialize = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        console.log('Not authenticated, redirecting to login');
        router.push('/admin/login');
      } else {
        console.log('Authenticated user:', session.user.email);
        setUser(session.user);
        setLoading(false);
      }
    };

    initialize();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      console.log('Auth state changed:', event);
      if (event === 'SIGNED_OUT') {
        router.push('/admin/login');
      }
    });

    return () => {
      subscription?.unsubscribe();
    };
  }, [router]);

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (!error) {
      console.log('Signed out successfully');
      router.push('/admin/login');
    }
  };

  const handleDelete = (id: string) => {
    console.log('Content deleted:', id);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-white text-lg">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-white/10 bg-white/5 backdrop-blur-xl">
        <div className="max-w-[1400px] mx-auto px-6 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-white mb-1">
                Admin <span className="gradient-text-os">Dashboard</span>
              </h1>
              {user && (
                <p className="text-white/60 text-sm">
                  Logged in as: <span className="text-white/80">{user.email}</span>
                </p>
              )}
            </div>
            <Button 
              onClick={handleSignOut}
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10"
            >
              Sign Out
            </Button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[1400px] mx-auto px-6 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-2">Content Management</h2>
          <p className="text-white/60 text-sm">
            Manage your resources and whitepapers. Add new content, edit existing entries, or delete content below.
          </p>
        </div>

        <ContentList onDelete={handleDelete} />
      </div>
    </div>
  );
}
