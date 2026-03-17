-- Add author and published_date support to whitepapers in a backward-compatible way.
ALTER TABLE public.whitepapers
  ADD COLUMN IF NOT EXISTS author text,
  ADD COLUMN IF NOT EXISTS published_date timestamptz;

-- Backfill author from existing author_name values where missing.
UPDATE public.whitepapers
SET author = author_name
WHERE author IS NULL
  AND author_name IS NOT NULL;

-- Backfill published_date from existing timestamps where missing.
UPDATE public.whitepapers
SET published_date = COALESCE(published_at, created_at, NOW())
WHERE published_date IS NULL;

-- Keep author_name synced for old readers.
UPDATE public.whitepapers
SET author_name = author
WHERE author_name IS DISTINCT FROM author
  AND author IS NOT NULL;
