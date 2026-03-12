/**
 * Server-side Supabase client using service role key
 * 
 * SECURITY: This client has elevated privileges and should ONLY be used
 * in API routes after authentication checks.
 * 
 * Never expose this client to the browser.
 */

import { createClient } from '@supabase/supabase-js';

// Validate environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl) {
  throw new Error('Missing NEXT_PUBLIC_SUPABASE_URL environment variable');
}

if (!supabaseServiceRoleKey) {
  throw new Error('Missing SUPABASE_SERVICE_ROLE_KEY environment variable');
}

/**
 * Server-side Supabase client with service role key
 * Has elevated privileges - bypasses RLS
 * Use only after authentication verification
 */
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceRoleKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
});
