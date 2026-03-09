import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { supabase, checkAuth } from '../supabaseClient';
import ContentForm from '../components/ContentForm';

const EditContent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState(null);
  const [error, setError] = useState('');

  // Check authentication and fetch content
  useEffect(() => {
    const initialize = async () => {
      // Check authentication first
      const session = await checkAuth();
      if (!session) {
        console.log('Not authenticated, redirecting to login');
        navigate('/admin/login');
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
      } catch (error) {
        console.error('Error fetching content:', error);
        setError(error.message || 'Failed to fetch content');
      } finally {
        setLoading(false);
      }
    };

    initialize();
  }, [id, navigate]);

  const handleSuccess = (updatedContent) => {
    console.log('Content updated successfully:', updatedContent);
    alert('Content updated successfully!');
    navigate('/admin/dashboard');
  };

  const handleCancel = () => {
    navigate('/admin/dashboard');
  };

  if (loading) {
    return <div style={{ padding: '20px' }}>Loading...</div>;
  }

  if (error) {
    return (
      <div style={{ padding: '20px' }}>
        <div style={{ color: 'red', marginBottom: '15px' }}>{error}</div>
        <button 
          onClick={() => navigate('/admin/dashboard')}
          style={{ padding: '8px 16px', fontSize: '14px' }}
        >
          ← Back to Dashboard
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px' }}>
      <button 
        onClick={() => navigate('/admin/dashboard')}
        style={{ marginBottom: '20px', padding: '8px 16px', fontSize: '14px' }}
      >
        ← Back to Dashboard
      </button>
      {content && (
        <ContentForm 
          existingContent={content}
          onSuccess={handleSuccess}
          onCancel={handleCancel}
        />
      )}
    </div>
  );
};

export default EditContent;
