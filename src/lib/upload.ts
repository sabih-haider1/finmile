/**
 * Secure file upload utilities for Supabase Storage
 * 
 * Implements validation, sanitization, and security best practices
 */

import { supabase } from '@/supabaseClient';
import {
  generateSecureFilename,
  isAllowedFileType,
  isDangerousFileType,
  isValidFileSize,
  sanitizeFilename,
} from './security';

export interface UploadOptions {
  bucket: string;
  folder: string;
  file: File;
  maxSizeMB?: number;
  allowedExtensions?: string[];
}

export interface UploadResult {
  success: boolean;
  url?: string;
  error?: string;
}

/**
 * Securely upload a file to Supabase Storage
 * 
 * Performs validation checks:
 * - File type validation
 * - File size limit
 * - Dangerous file type blocking
 * - Filename sanitization
 * 
 * @param options - Upload configuration
 * @returns Upload result with URL or error
 */
export async function uploadFile({
  bucket,
  folder,
  file,
  maxSizeMB = 10,
  allowedExtensions,
}: UploadOptions): Promise<UploadResult> {
  try {
    // Validate file exists
    if (!file) {
      return { success: false, error: 'No file provided' };
    }

    // Validate file size
    if (!isValidFileSize(file.size, maxSizeMB)) {
      return {
        success: false,
        error: `File size must not exceed ${maxSizeMB}MB`,
      };
    }

    // Check for dangerous file types
    if (isDangerousFileType(file.name)) {
      return {
        success: false,
        error: 'This file type is not allowed for security reasons',
      };
    }

    // Validate file extension
    if (allowedExtensions && !isAllowedFileType(file.name, allowedExtensions)) {
      return {
        success: false,
        error: `Only these file types are allowed: ${allowedExtensions.join(', ')}`,
      };
    }

    // Generate secure filename
    const secureFilename = generateSecureFilename(file.name);
    const sanitizedFolder = sanitizeFilename(folder);
    const filePath = `${sanitizedFolder}/${secureFilename}`;

    // Upload to Supabase Storage
    const { data, error } = await supabase.storage
      .from(bucket)
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: false, // Prevent overwriting existing files
      });

    if (error) {
      console.error('Upload error:', error);
      return {
        success: false,
        error: 'File upload failed. Please try again.',
      };
    }

    // Get public URL
    const { data: { publicUrl } } = supabase.storage
      .from(bucket)
      .getPublicUrl(filePath);

    return {
      success: true,
      url: publicUrl,
    };
  } catch (error) {
    console.error('Upload exception:', error);
    return {
      success: false,
      error: 'An unexpected error occurred during upload',
    };
  }
}

/**
 * Generate a URL-safe slug from a title
 * 
 * Security features:
 * - Converts to lowercase
 * - Removes special characters
 * - Replaces spaces with hyphens
 * - Removes consecutive hyphens
 * - Trims leading/trailing hyphens
 * 
 * @param title - Original title
 * @returns URL-safe slug
 */
export function generateSlug(title: string): string {
  if (!title) return '';

  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric with hyphens
    .replace(/-+/g, '-') // Replace multiple consecutive hyphens with single hyphen
    .replace(/^-|-$/g, ''); // Remove leading/trailing hyphens
}

/**
 * Check if a slug is unique in a given table
 * 
 * @param tableName - Database table name
 * @param slug - Slug to check
 * @param excludeId - Optional ID to exclude from check (for updates)
 * @returns true if slug is unique
 */
export async function isSlugUnique(
  tableName: string,
  slug: string,
  excludeId?: string
): Promise<boolean> {
  try {
    let query = supabase
      .from(tableName)
      .select('id')
      .eq('slug', slug);

    if (excludeId) {
      query = query.neq('id', excludeId);
    }

    const { data, error } = await query;

    if (error) {
      console.error('Slug uniqueness check error:', error);
      return false;
    }

    return !data || data.length === 0;
  } catch (error) {
    console.error('Slug uniqueness check exception:', error);
    return false;
  }
}
