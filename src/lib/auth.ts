/**
 * Authentication utilities for API routes
 * 
 * Provides middleware functions to verify user authentication
 * and admin authorization.
 */

import { NextRequest } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Get supabase credentials
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export interface AuthResult {
  authenticated: boolean;
  userId?: string;
  email?: string;
  error?: string;
}

/**
 * Verify that the request has a valid authentication token
 * 
 * This function extracts the JWT from the Authorization header
 * and verifies it with Supabase Auth.
 * 
 * @param request - Next.js request object
 * @returns Authentication result with user info or error
 */
export async function verifyAuth(request: NextRequest): Promise<AuthResult> {
  try {
    // Get authorization header
    const authHeader = request.headers.get('authorization');
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return {
        authenticated: false,
        error: 'Missing or invalid authorization header',
      };
    }

    // Extract token
    const token = authHeader.substring(7);

    // Create supabase client with the user's token
    const supabase = createClient(supabaseUrl, supabaseAnonKey);

    // Verify the token and get user
    const { data: { user }, error } = await supabase.auth.getUser(token);

    if (error || !user) {
      return {
        authenticated: false,
        error: 'Invalid or expired token',
      };
    }

    return {
      authenticated: true,
      userId: user.id,
      email: user.email,
    };
  } catch (error) {
    return {
      authenticated: false,
      error: 'Authentication verification failed',
    };
  }
}

/**
 * Verify that the authenticated user has admin role
 * 
 * IMPORTANT: This is a basic implementation. In production, you should:
 * 1. Store admin roles in a database table
 * 2. Use Supabase RLS policies
 * 3. Check user metadata or a dedicated admin_users table
 * 
 * For now, we check if the user has admin metadata.
 * You'll need to set this in Supabase Auth.
 * 
 * @param request - Next.js request object
 * @returns Authentication result with admin verification
 */
export async function verifyAdminAuth(request: NextRequest): Promise<AuthResult> {
  const authResult = await verifyAuth(request);

  if (!authResult.authenticated) {
    return authResult;
  }

  try {
    const authHeader = request.headers.get('authorization')!;
    const token = authHeader.substring(7);
    const supabase = createClient(supabaseUrl, supabaseAnonKey);

    // Get user with metadata
    const { data: { user }, error } = await supabase.auth.getUser(token);

    if (error || !user) {
      return {
        authenticated: false,
        error: 'Invalid user',
      };
    }

    // Check if user has admin role in user_metadata or app_metadata
    // This requires setting user metadata in Supabase
    const isAdmin = 
      user.user_metadata?.role === 'admin' || 
      user.app_metadata?.role === 'admin' ||
      user.role === 'admin';

    if (!isAdmin) {
      return {
        authenticated: false,
        error: 'Insufficient permissions - admin access required',
      };
    }

    return {
      authenticated: true,
      userId: user.id,
      email: user.email,
    };
  } catch (error) {
    return {
      authenticated: false,
      error: 'Admin verification failed',
    };
  }
}
