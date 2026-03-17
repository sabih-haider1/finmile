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

const ADMIN_ROLE_VALUES = new Set(['admin', 'super_admin', 'owner']);

function normalizeValue(value: unknown): string {
  return String(value || '').trim().toLowerCase();
}

function hasAdminRoleInMetadata(metadata: Record<string, any> | null | undefined): boolean {
  if (!metadata) return false;

  const role = normalizeValue(metadata.role);
  if (ADMIN_ROLE_VALUES.has(role)) return true;

  if (metadata.is_admin === true || metadata.admin === true) {
    return true;
  }

  if (Array.isArray(metadata.roles)) {
    const hasAdminRole = metadata.roles.some((entry: unknown) =>
      ADMIN_ROLE_VALUES.has(normalizeValue(entry))
    );
    if (hasAdminRole) return true;
  }

  if (Array.isArray(metadata.permissions)) {
    const hasAdminPermission = metadata.permissions.some((entry: unknown) => {
      const permission = normalizeValue(entry);
      return permission === 'admin' || permission === 'manage_content' || permission === 'manage_admin';
    });
    if (hasAdminPermission) return true;
  }

  return false;
}

function hasAnyAdminMetadata(user: any): boolean {
  const userMetadata = user?.user_metadata;
  const appMetadata = user?.app_metadata;

  const hasRoleField = userMetadata?.role !== undefined || appMetadata?.role !== undefined;
  const hasAdminFlag = userMetadata?.is_admin !== undefined || appMetadata?.is_admin !== undefined;
  const hasRolesArray = Array.isArray(userMetadata?.roles) || Array.isArray(appMetadata?.roles);

  return Boolean(hasRoleField || hasAdminFlag || hasRolesArray);
}

function isAdminEmail(email: string | undefined): boolean {
  if (!email) return false;

  const emailAllowlist = [process.env.ADMIN_EMAILS, process.env.NEXT_PUBLIC_ADMIN_EMAILS]
    .filter(Boolean)
    .flatMap((value) => String(value).split(','))
    .map((entry) => entry.trim().toLowerCase())
    .filter(Boolean);

  if (emailAllowlist.length === 0) {
    return false;
  }

  return emailAllowlist.includes(email.toLowerCase());
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

    const metadataAdmin =
      hasAdminRoleInMetadata(user.user_metadata) ||
      hasAdminRoleInMetadata(user.app_metadata);

    const directRoleAdmin = ADMIN_ROLE_VALUES.has(normalizeValue(user.role));
    const allowlistedAdminEmail = isAdminEmail(user.email);
    const isAdmin = metadataAdmin || directRoleAdmin || allowlistedAdminEmail;

    // Local dev fallback: if no explicit role metadata is configured yet,
    // allow authenticated users to continue development workflows.
    const canBypassInDev =
      process.env.NODE_ENV !== 'production' &&
      !hasAnyAdminMetadata(user) &&
      !process.env.ADMIN_EMAILS &&
      !process.env.NEXT_PUBLIC_ADMIN_EMAILS;

    if (!isAdmin && !canBypassInDev) {
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
