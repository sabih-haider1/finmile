# How to Create Admin User in Supabase

## Step 1: Go to Supabase Dashboard

Visit: https://app.supabase.com

Select your project: **viljcqshhlfkqnjuetmo**

## Step 2: Navigate to Authentication

1. Click on **Authentication** in the left sidebar
2. Click on **Users** tab

## Step 3: Create New User

1. Click **Add user** button (top right)
2. Choose **Create new user**
3. Fill in the form:
   - **Email**: `admin@finmile.com`
   - **Password**: Choose a secure password (you'll use this to login)
   - **Auto Confirm User**: ✅ Enable this (so you don't need email verification)

4. Click **Create user**

## Step 4: Verify Storage Bucket

For file uploads to work:

1. Go to **Storage** in the left sidebar
2. Check if bucket `content-files` exists
3. If not, create it:
   - Click **New bucket**
   - Name: `content-files`
   - Public bucket: ✅ Enable (or configure access policies)
   - Click **Create bucket**

## Step 5: Test Login

1. Go to: http://localhost:3000/admin/login
2. Login with:
   - Email: `admin@finmile.com`
   - Password: (the password you set in Step 3)

## Troubleshooting

**Still getting "Invalid credentials"?**
- Make sure you auto-confirmed the user in Step 3
- Check that the email is exactly `admin@finmile.com`
- Try resetting the password in Supabase dashboard

**File upload not working?**
- Ensure `content-files` bucket exists and is public
- Check bucket policies if you have RLS enabled

---

Once logged in, you'll see the beautiful glassmorphic dashboard matching your frontend! 🎉
