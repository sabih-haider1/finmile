import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase, checkAuth, signOut } from '../supabaseClient';
import ContentList from '../components/ContentList';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const initialize = async () => {
      const session = await checkAuth();
      if (!session) {
        console.log('Not authenticated, redirecting to login');
        navigate('/admin/login');
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
        navigate('/admin/login');
      }
    });

    return () => {
      subscription?.unsubscribe();
    };
  }, [navigate]);

  const handleSignOut = async () => {
    const success = await signOut();
    if (success) {
      console.log('Signed out successfully');
      navigate('/admin/login');
    }
  };

  const handleDelete = (id) => {
    console.log('Content deleted:', id);
  };

  if (loading) {
    return <div style={{ padding: '20px' }}>Loading...</div>;
  }

  return (
    <div style={{ padding: '20px', maxWidth: '1400px', margin: '0 auto' }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginBottom: '30px',
        paddingBottom: '20px',
        borderBottom: '2px solid #ddd'
      }}>
        <div>
          <h1 style={{ margin: '0 0 5px 0' }}>Admin Dashboard</h1>
          {user && (
            <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>
              Logged in as: {user.email}
            </p>
          )}
        </div>
        <button 
          onClick={handleSignOut}
          style={{ padding: '10px 20px', fontSize: '14px' }}
        >
          Sign Out
        </button>
      </div>

      <div style={{ marginBottom: '30px' }}>
        <h2>Content Management</h2>
        <p style={{ color: '#666', fontSize: '14px' }}>
          Manage your resources and whitepapers. Add new content, edit existing entries, or delete content below.
        </p>
      </div>

      <ContentList onDelete={handleDelete} />
    </div>
  );
};

export default AdminDashboard;
