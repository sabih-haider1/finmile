# Admin Backend System - Setup Guide

This is a fully functional React admin backend system connected to Supabase for managing resources and whitepapers.

## 📋 Prerequisites

- Node.js and npm installed
- Supabase project created with the `contents` table
- Admin user created in Supabase (admin@finmile.com)

## 🚀 Installation

### 1. Install Dependencies

```bash
npm install @supabase/supabase-js react-router-dom
```

### 2. Configure Environment Variables

Create a `.env` file in the root directory (use `.env.example` as template):

```env
REACT_APP_SUPABASE_URL=your_supabase_project_url
REACT_APP_SUPABASE_ANON_KEY=your_supabase_anon_key
```

Get these values from: https://app.supabase.com/project/YOUR_PROJECT/settings/api

### 3. Setup Supabase Storage

The file upload functionality requires a storage bucket. In your Supabase dashboard:

1. Go to Storage section
2. Create a new bucket named: `content-files`
3. Set it to **Public** (or configure appropriate access policies)
4. The system will automatically create subfolders: `covers/` and `pdfs/`

### 4. Configure Routes

Add the admin routes to your main App.jsx:

```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminRoutes from './AdminRoutes';
// ... other imports

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Your existing routes */}
        <Route path="/" element={<HomePage />} />
        
        {/* Admin routes */}
        <Route path="/admin/*" element={<AdminRoutes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

## 📁 File Structure

```
src/
├── supabaseClient.js          # Supabase client initialization
├── AdminRoutes.jsx             # Admin routing configuration
├── pages/
│   ├── LoginPage.jsx           # Admin authentication page
│   ├── AdminDashboard.jsx      # Main dashboard with list view
│   ├── AddContent.jsx          # Add new content page
│   └── EditContent.jsx         # Edit existing content page
└── components/
    ├── ContentForm.jsx         # Reusable form for add/edit
    └── ContentList.jsx         # Content list with actions
```

## 🔐 Admin Access

### Login Credentials
- **Email:** admin@finmile.com
- **Password:** (use the password you set in Supabase Auth)

### Routes
- Login: `/admin/login`
- Dashboard: `/admin/dashboard`
- Add Content: `/admin/add`
- Edit Content: `/admin/edit/:id`

## ✨ Features

### Authentication
- ✅ Secure login via Supabase Auth
- ✅ Session management with automatic redirects
- ✅ Protected routes (require authentication)
- ✅ Sign out functionality

### Content Management
- ✅ Create new resources/whitepapers
- ✅ Edit existing content
- ✅ Delete content with confirmation
- ✅ List all content with filtering by type
- ✅ Featured and published toggles
- ✅ File uploads (cover images and PDFs)
- ✅ Tag management (comma-separated)

### File Uploads
- ✅ Cover image upload (any image format)
- ✅ PDF file upload
- ✅ Automatic file storage in Supabase Storage
- ✅ Public URL generation

## 🗄️ Database Schema

The `contents` table structure:

```sql
create table contents (
  id uuid primary key default gen_random_uuid(),
  type text check (type in ('resource','whitepaper')) not null,
  title text not null,
  slug text unique not null,
  summary text,
  body text,
  cover_image_url text,
  pdf_url text,
  author_name text,
  category text,
  tags text[],
  is_featured boolean default false,
  is_published boolean default true,
  published_at timestamp,
  created_at timestamp default now(),
  updated_at timestamp default now()
);
```

## 🛡️ Security Notes

1. **Row Level Security (RLS):** Consider enabling RLS on the `contents` table in production
2. **Storage Policies:** Configure appropriate storage bucket policies
3. **Admin Validation:** The current system checks authentication but doesn't validate admin roles
4. **Environment Variables:** Never commit your `.env` file with actual credentials

### Recommended RLS Policy

```sql
-- Allow authenticated users to read all contents
CREATE POLICY "Allow authenticated read" ON contents
  FOR SELECT TO authenticated USING (true);

-- Allow authenticated users to insert/update/delete
CREATE POLICY "Allow authenticated write" ON contents
  FOR ALL TO authenticated USING (true);
```

## 🐛 Debugging

All components include console logging for debugging:
- Authentication events
- Database operations
- File uploads
- Errors

Check the browser console for detailed information.

## 📝 Usage Examples

### Adding Content
1. Navigate to `/admin/dashboard`
2. Click "Add New Content" button
3. Fill in the form fields
4. Upload optional cover image and/or PDF
5. Click "Create Content"

### Editing Content
1. In the dashboard, click "Edit" on any content row
2. Modify the fields as needed
3. Upload new files if needed (replaces existing)
4. Click "Update Content"

### Deleting Content
1. In the dashboard, click "Delete" on any content row
2. Confirm the deletion in the popup
3. Content is permanently removed from database

## 🚧 Future Enhancements

Potential improvements for production:
- [ ] Add role-based access control
- [ ] Implement pagination for large content lists
- [ ] Add search functionality
- [ ] Rich text editor for body content
- [ ] Bulk operations (delete multiple)
- [ ] Image preview before upload
- [ ] Draft system (save without publishing)
- [ ] Audit log of changes

## 🆘 Troubleshooting

**Error: Missing Supabase environment variables**
- Ensure `.env` file exists and contains correct values
- Restart development server after adding `.env`

**Error: Failed to upload file**
- Check that `content-files` bucket exists in Supabase Storage
- Verify bucket is set to public or has appropriate policies

**Error: Not authenticated**
- Check that admin user exists in Supabase Auth
- Verify credentials are correct
- Check browser console for authentication errors

**Error: Failed to fetch contents**
- Verify database table `contents` exists
- Check Supabase project is active
- Review RLS policies if enabled

## 📞 Support

For issues related to:
- **Supabase:** https://supabase.com/docs
- **React Router:** https://reactrouter.com/docs
- **File uploads:** Check Supabase Storage documentation

---

Built with React + Supabase ❤️
