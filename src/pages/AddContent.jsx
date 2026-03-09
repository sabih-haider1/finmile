import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { checkAuth } from '../supabaseClient';
import ContentForm from '../components/ContentForm';

const AddContent = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  // Check authentication
  useEffect(() => {
    const verifyAuth = async () => {
      const session = await checkAuth();
      if (!session) {
        console.log('Not authenticated, redirecting to login');
        navigate('/admin/login');
      } else {
        setLoading(false);
      }
    };
    verifyAuth();
  }, [navigate]);

  const handleSuccess = (newContent) => {
    console.log('Content created successfully:', newContent);
    alert('Content created successfully!');
    navigate('/admin/dashboard');
  };

  const handleCancel = () => {
    navigate('/admin/dashboard');
  };

  if (loading) {
    return <div style={{ padding: '20px' }}>Loading...</div>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <button 
        onClick={() => navigate('/admin/dashboard')}
        style={{ marginBottom: '20px', padding: '8px 16px', fontSize: '14px' }}
      >
        ← Back to Dashboard
      </button>
      <ContentForm 
        onSuccess={handleSuccess}
        onCancel={handleCancel}
      />
    </div>
  );
};

export default AddContent;
