# Finmile Website

Production website for Finmile, built with Next.js (App Router), TypeScript, Tailwind CSS, and Supabase.

## Requirements

- Node.js 20+
- npm 10+

## Setup

1. Install dependencies:

```bash
npm ci
```

2. Create local env file from the template:

```bash
cp .env.example .env.local
```

3. Fill required environment variables:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `NEXT_PUBLIC_SITE_URL`

Optional:

- `ADMIN_EMAILS`
- `NEXT_PUBLIC_ADMIN_EMAILS`
- `VERCEL_URL` (auto-set on Vercel)

## Scripts

- `npm run dev`: start local development server
- `npm run lint`: run ESLint
- `npm run build`: create production build
- `npm run start`: run production server

## Local Run

```bash
npm run dev
```

App runs at `http://localhost:3000`.

## Production Validation

Run this before deployment:

```bash
npm ci
npm run lint
CI=1 npm run build
```

## Deployment (Vercel)

1. Connect repository to Vercel.
2. Set all required environment variables in project settings.
3. Build command: `npm run build`
4. Output: Next.js default
5. Deploy.

## Security Notes

- Never commit `.env` files.
- Keep `SUPABASE_SERVICE_ROLE_KEY` server-side only.
- Use admin allowlist env vars for explicit admin access control in production.
