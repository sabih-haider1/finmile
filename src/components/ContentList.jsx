import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';

const ContentList = ({ onDelete }) => {
  const [contents, setContents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [filterType, setFilterType] = useState('all');
  const navigate = useNavigate();

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

      console.log('Contents fetched:', data.length);
      setContents(data || []);
    } catch (error) {
      console.error('Error fetching contents:', error);
      setError(error.message || 'Failed to fetch contents');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id, title) => {
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
    } catch (error) {
      console.error('Error deleting content:', error);
      alert('Failed to delete content: ' + error.message);
    }
  };

  const handleEdit = (id) => {
    navigate(`/admin/edit/${id}`);
  };

  if (loading) {
    return <div style={{ padding: '20px' }}>Loading contents...</div>;
  }

  if (error) {
    return (
      <div style={{ padding: '20px' }}>
        <div style={{ color: 'red' }}>{error}</div>
        <button onClick={fetchContents} style={{ marginTop: '10px', padding: '8px 16px' }}>
          Retry
        </button>
      </div>
    );
  }

  return (
    <div>
      <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <label style={{ marginRight: '10px' }}>Filter by type:</label>
          <select 
            value={filterType} 
            onChange={(e) => setFilterType(e.target.value)}
            style={{ padding: '8px', fontSize: '14px' }}
          >
            <option value="all">All</option>
            <option value="resource">Resources</option>
            <option value="whitepaper">Whitepapers</option>
          </select>
        </div>
        <button 
          onClick={() => navigate('/admin/add')}
          style={{ padding: '10px 20px', fontSize: '14px' }}
        >
          + Add New Content
        </button>
      </div>

      {contents.length === 0 ? (
        <div style={{ padding: '20px', textAlign: 'center', border: '1px solid #ccc' }}>
          No contents found. Click "Add New Content" to create one.
        </div>
      ) : (
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#f0f0f0' }}>
              <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #ddd' }}>Type</th>
              <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #ddd' }}>Title</th>
              <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #ddd' }}>Slug</th>
              <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #ddd' }}>Author</th>
              <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #ddd' }}>Category</th>
              <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #ddd' }}>Featured</th>
              <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #ddd' }}>Published</th>
              <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #ddd' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contents.map((content) => (
              <tr key={content.id} style={{ borderBottom: '1px solid #ddd' }}>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                  <span style={{ 
                    padding: '3px 8px', 
                    backgroundColor: content.type === 'resource' ? '#e3f2fd' : '#fff3e0',
                    borderRadius: '3px',
                    fontSize: '12px'
                  }}>
                    {content.type}
                  </span>
                </td>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>{content.title}</td>
                <td style={{ padding: '10px', border: '1px solid #ddd', fontSize: '12px', color: '#666' }}>
                  {content.slug}
                </td>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>{content.author_name || '-'}</td>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>{content.category || '-'}</td>
                <td style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'center' }}>
                  {content.is_featured ? '⭐' : '-'}
                </td>
                <td style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'center' }}>
                  {content.is_published ? '✓' : '✗'}
                </td>
                <td style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'center' }}>
                  <button 
                    onClick={() => handleEdit(content.id)}
                    style={{ padding: '5px 10px', marginRight: '5px', fontSize: '12px' }}
                  >
                    Edit
                  </button>
                  <button 
                    onClick={() => handleDelete(content.id, content.title)}
                    style={{ padding: '5px 10px', fontSize: '12px', backgroundColor: '#ff5555', color: 'white', border: 'none', cursor: 'pointer' }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <div style={{ marginTop: '20px', fontSize: '14px', color: '#666' }}>
        Total: {contents.length} content(s)
      </div>
    </div>
  );
};

export default ContentList;
