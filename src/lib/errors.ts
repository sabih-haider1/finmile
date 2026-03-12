/**
 * Error handling utilities for API routes
 * 
 * Provides standardized error responses that don't leak sensitive information
 */

import { NextResponse } from 'next/server';

export class ApiError extends Error {
  constructor(
    public statusCode: number,
    message: string,
    public code?: string
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

/**
 * Safe error response that doesn't expose internal details
 * 
 * @param error - Error object
 * @param fallbackMessage - Default message if error can't be revealed
 * @returns Next.js JSON response with sanitized error
 */
export function handleApiError(
  error: unknown,
  fallbackMessage: string = 'An error occurred'
): NextResponse {
  // Log full error server-side for debugging
  console.error('API Error:', error);

  // Handle known API errors
  if (error instanceof ApiError) {
    return NextResponse.json(
      {
        error: error.message,
        code: error.code,
      },
      { status: error.statusCode }
    );
  }

  // Handle Zod validation errors
  if (error && typeof error === 'object' && 'name' in error && error.name === 'ZodError') {
    return NextResponse.json(
      {
        error: 'Validation failed',
        code: 'VALIDATION_ERROR',
      },
      { status: 400 }
    );
  }

  // Handle Supabase errors
  if (error && typeof error === 'object' && 'code' in error) {
    const supabaseError = error as { code: string; message?: string };
    
    // Map common Supabase error codes to user-friendly messages
    switch (supabaseError.code) {
      case '23505': // Unique violation
        return NextResponse.json(
          { error: 'A record with this value already exists', code: 'DUPLICATE_ERROR' },
          { status: 409 }
        );
      case '23503': // Foreign key violation
        return NextResponse.json(
          { error: 'Referenced record does not exist', code: 'REFERENCE_ERROR' },
          { status: 400 }
        );
      case '42501': // Insufficient privilege
        return NextResponse.json(
          { error: 'Insufficient permissions', code: 'PERMISSION_DENIED' },
          { status: 403 }
        );
      case 'PGRST116': // Not found
        return NextResponse.json(
          { error: 'Record not found', code: 'NOT_FOUND' },
          { status: 404 }
        );
      default:
        // Don't expose internal error details
        return NextResponse.json(
          { error: fallbackMessage, code: 'DATABASE_ERROR' },
          { status: 500 }
        );
    }
  }

  // Generic error response - don't leak details
  return NextResponse.json(
    {
      error: fallbackMessage,
      code: 'INTERNAL_ERROR',
    },
    { status: 500 }
  );
}

/**
 * Create standardized success response
 */
export function successResponse(data: unknown, status: number = 200): NextResponse {
  return NextResponse.json({ data }, { status });
}

/**
 * Create standardized error response
 */
export function errorResponse(
  message: string,
  status: number = 400,
  code?: string
): NextResponse {
  return NextResponse.json(
    {
      error: message,
      code: code || 'ERROR',
    },
    { status }
  );
}

/**
 * Authentication error response
 */
export function authErrorResponse(message: string = 'Authentication required'): NextResponse {
  return NextResponse.json(
    {
      error: message,
      code: 'AUTH_REQUIRED',
    },
    { status: 401 }
  );
}

/**
 * Authorization error response
 */
export function forbiddenResponse(message: string = 'Insufficient permissions'): NextResponse {
  return NextResponse.json(
    {
      error: message,
      code: 'FORBIDDEN',
    },
    { status: 403 }
  );
}

/**
 * Rate limit error response
 */
export function rateLimitResponse(resetTime: number): NextResponse {
  return NextResponse.json(
    {
      error: 'Too many requests. Please try again later.',
      code: 'RATE_LIMIT_EXCEEDED',
      resetTime,
    },
    { 
      status: 429,
      headers: {
        'Retry-After': Math.ceil((resetTime - Date.now()) / 1000).toString(),
      },
    }
  );
}
