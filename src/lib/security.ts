/**
 * Security utilities for input sanitization and XSS prevention
 */

import validator from 'validator';

/**
 * Sanitize HTML content to prevent XSS attacks
 * 
 * Note: For server-side HTML sanitization, consider using a library like
 * sanitize-html or implementing a whitelist approach.
 * 
 * @param html - Raw HTML string
 * @returns Sanitized HTML safe for rendering
 */
export function sanitizeHtml(html: string): string {
  if (!html) return '';
  
  // Basic HTML entity encoding for server-side
  // For more advanced sanitization, use DOMPurify on the client or sanitize-html
  return html
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
}

/**
 * Sanitize plain text by escaping HTML entities
 * 
 * @param text - Raw text string
 * @returns Escaped text safe for display
 */
export function sanitizeText(text: string): string {
  if (!text) return '';
  return validator.escape(text);
}

/**
 * Validate and sanitize file name
 * Prevents directory traversal and dangerous characters
 * 
 * @param filename - Original filename
 * @returns Sanitized filename
 */
export function sanitizeFilename(filename: string): string {
  if (!filename) return '';
  
  // Remove path separators and dangerous characters
  return filename
    .replace(/[^a-z0-9._-]/gi, '_')
    .replace(/^\.+/, '') // Remove leading dots
    .replace(/\.+$/, '') // Remove trailing dots
    .substring(0, 255); // Limit length
}

/**
 * Validate URL to prevent malicious redirects
 * 
 * @param url - URL string to validate
 * @returns boolean indicating if URL is safe
 */
export function isValidUrl(url: string): boolean {
  if (!url) return false;
  
  try {
    const parsed = new URL(url);
    // Only allow http and https protocols
    return ['http:', 'https:'].includes(parsed.protocol);
  } catch {
    return false;
  }
}

/**
 * Generate a secure random filename
 * 
 * @param originalFilename - Original file name to extract extension from
 * @returns Secure random filename with UUID and timestamp
 */
export function generateSecureFilename(originalFilename: string): string {
  const extension = originalFilename.split('.').pop()?.toLowerCase() || '';
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2, 15);
  
  return `${timestamp}_${random}.${sanitizeFilename(extension)}`;
}

/**
 * Check if file type is allowed for upload
 * 
 * @param filename - File name to check
 * @param allowedExtensions - List of allowed extensions
 * @returns boolean indicating if file type is allowed
 */
export function isAllowedFileType(
  filename: string,
  allowedExtensions: string[] = ['pdf', 'docx', 'xlsx', 'zip', 'jpg', 'png', 'webp', 'doc', 'xls', 'pptx']
): boolean {
  const extension = filename.split('.').pop()?.toLowerCase();
  if (!extension) return false;
  
  return allowedExtensions.includes(extension);
}

/**
 * Block dangerous file types
 * 
 * @param filename - File name to check
 * @returns boolean indicating if file is dangerous
 */
export function isDangerousFileType(filename: string): boolean {
  const dangerousExtensions = [
    'exe', 'bat', 'cmd', 'com', 'pif', 'scr', 'vbs', 'js',
    'jar', 'sh', 'bash', 'php', 'py', 'rb', 'pl', 'app',
    'deb', 'rpm', 'dmg', 'pkg', 'run'
  ];
  
  const extension = filename.split('.').pop()?.toLowerCase();
  if (!extension) return false;
  
  return dangerousExtensions.includes(extension);
}

/**
 * Validate file size
 * 
 * @param size - File size in bytes
 * @param maxSizeMB - Maximum allowed size in MB
 * @returns boolean indicating if size is within limit
 */
export function isValidFileSize(size: number, maxSizeMB: number = 10): boolean {
  const maxSizeBytes = maxSizeMB * 1024 * 1024;
  return size > 0 && size <= maxSizeBytes;
}
