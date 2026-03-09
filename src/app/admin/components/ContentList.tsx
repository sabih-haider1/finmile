'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/supabaseClient';
import { Button } from '@/components/ui/Button';

interface ContentListProps {
  onDelete?: (id: string) => void;
}

export default function ContentList({ onDelete }: ContentListProps) {
  const [contents, setContents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [filterType, setFilterType] = useState('all');
  const router = useRouter();

  useEffect(() => {
    fetchContents();
  }, [filterType]);

  const fetchContents = async () => {
    setLoading(true);
    setError('');
    try {
      let query = supabase
        .from('contents')
        .select('*')
        .order('created_at', { ascending: false });

      if (filterType !== 'all') {
        query = query.eq('type', filterType);
      }

      const { data, error } = await query;

      if (error) {
        throw error;
      }

      console.log('Contents fetched:', data?.length || 0);
      setContents(data || []);
    } catch (error: any) {
      console.error('Error fetching contents:', error);
      setError(error.message || 'Failed to fetch contents');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string, title: string) => {
    if (!window.confirm(`Are you sure you want to delete "${title}"?`)) {
      return;
    }

    try {
      console.log('Deleting content with id:', id);
      const { error } = await supabase
        .from('contents')
        .delete()
        .eq('id', id);

      if (error) {
        throw error;
      }

      console.log('Content deleted successfully');
      alert('Content deleted successfully!');
      
      // Refresh the list
      fetchContents();
      
      if (onDelete) {
        onDelete(id);
      }
    } catch (error: any) {
      console.error('Error deleting content:', error);
      alert('Failed to delete content: ' + error.message);
    }
  };

  const handleEdit = (id: string) => {
    router.push(`/admin/edit/${id}`);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-white/60">Loading contents...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
        <div className="text-red-400 mb-4">{error}</div>
        <Button onClick={fetchContents} variant="solid" size="sm">
          Retry
        </Button>
      </div>
    );
  }

  return (
    <div>
      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div className="flex items-center gap-3">
          <label className="text-white/80 text-sm font-medium">Filter by type:</label>
          <select 
            value={filterType} 
            onChange={(e) => setFilterType(e.target.value)}
            className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#6A27D4] transition-all"
          >
            <option value="all" className="bg-[#0B0616]">All</option>
            <option value="resource" className="bg-[#0B0616]">Resources</option>
            <option value="whitepaper" className="bg-[#0B0616]">Whitepapers</option>
          </select>
        </div>
        <Button 
          onClick={() => router.push('/admin/add')}
          variant="solid"
        >
          + Add New Content
        </Button>
      </div>

      {/* Content Table */}
      {contents.length === 0 ? (
        <div className="bg-white/5 border border-white/10 rounded-xl p-12 text-center">
          <p className="text-white/60">
            No contents found. Click &quot;Add New Content&quot; to create one.
          </p>
        </div>
      ) : (
        <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-white/5 border-b border-white/10">
                  <th className="px-4 py-3 text-left text-xs font-semibold text-white/80 uppercase tracking-wider">Type</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-white/80 uppercase tracking-wider">Title</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-white/80 uppercase tracking-wider">Slug</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-white/80 uppercase tracking-wider">Author</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-white/80 uppercase tracking-wider">Category</th>
                  <th className="px-4 py-3 text-center text-xs font-semibold text-white/80 uppercase tracking-wider">Featured</th>
                  <th className="px-4 py-3 text-center text-xs font-semibold text-white/80 uppercase tracking-wider">Published</th>
                  <th className="px-4 py-3 text-center text-xs font-semibold text-white/80 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {contents.map((content) => (
                  <tr key={content.id} className="hover:bg-white/5 transition-colors">
                    <td className="px-4 py-3">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                        content.type === 'resource' 
                          ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' 
                          : 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                      }`}>
                        {content.type}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-white text-sm">{content.title}</td>
                    <td className="px-4 py-3 text-white/60 text-xs font-mono">{content.slug}</td>
                    <td className="px-4 py-3 text-white/80 text-sm">{content.author_name || '-'}</td>
                    <td className="px-4 py-3 text-white/80 text-sm">{content.category || '-'}</td>
                    <td className="px-4 py-3 text-center">
                      {content.is_featured ? (
                        <span className="text-yellow-400 text-lg">⭐</span>
                      ) : (
                        <span className="text-white/20">-</span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-center">
                      {content.is_published ? (
                        <span className="text-green-400 font-bold">✓</span>
                      ) : (
                        <span className="text-red-400 font-bold">✗</span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <button 
                          onClick={() => handleEdit(content.id)}
                          className="px-3 py-1 text-xs font-medium text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition-colors"
                        >
                          Edit
                        </button>
                        <button 
                          onClick={() => handleDelete(content.id, content.title)}
                          className="px-3 py-1 text-xs font-medium text-white bg-red-500/20 hover:bg-red-500/30 border border-red-500/30 rounded-lg transition-colors"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Stats */}
      <div className="mt-4 text-sm text-white/60">
        Total: <span className="text-white font-medium">{contents.length}</span> content(s)
      </div>
    </div>
  );
}
