# Quick Integration Guide for Next.js

## ⚠️ Important Note

The admin backend system was built with **React Router** which is typically used in Create React App projects. Your project appears to be using **Next.js**.

## Options for Integration

### Option 1: Separate React App (Recommended)

Create a separate React app for the admin panel:

```bash
# In a separate directory
npx create-react-app finmile-admin
cd finmile-admin

# Install dependencies
npm install @supabase/supabase-js react-router-dom

# Copy the admin files into src/ directory
# Follow ADMIN_SETUP.md for configuration
```

### Option 2: Convert to Next.js Pages

Convert the React Router components to Next.js pages:

**File conversions needed:**

```
src/pages/LoginPage.jsx          → pages/admin/login.jsx
src/pages/AdminDashboard.jsx     → pages/admin/dashboard.jsx
src/pages/AddContent.jsx         → pages/admin/add.jsx
src/pages/EditContent.jsx        → pages/admin/edit/[id].jsx
```

**Changes required:**

1. Remove React Router hooks (`useNavigate`, `useParams`)
2. Use Next.js routing (`useRouter` from 'next/router')
3. Convert navigation: `navigate('/path')` → `router.push('/path')`
4. Get params: `const { id } = useParams()` → `const { id } = router.query`

### Option 3: Hybrid Approach

Keep the admin system as is and mount it in a Next.js page using dynamic import:

```jsx
// pages/admin/[[...slug]].jsx
import dynamic from 'next/dynamic';

const AdminApp = dynamic(() => import('../../src/AdminApp'), {
  ssr: false,
});

export default function AdminPage() {
  return <AdminApp />;
}
```

Then create `src/AdminApp.jsx`:

```jsx
import { BrowserRouter } from 'react-router-dom';
import AdminRoutes from './AdminRoutes';

export default function AdminApp() {
  return (
    <BrowserRouter basename="/admin">
      <AdminRoutes />
    </BrowserRouter>
  );
}
```

## Recommended Approach

For simplest integration with Next.js, I recommend **converting to Next.js pages** (Option 2).

Would you like me to convert the components to Next.js format?
