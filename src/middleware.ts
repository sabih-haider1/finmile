/**
 * Next.js Middleware for security controls
 * 
 * Applies to all API routes
 * - CORS protection
 * - Security headers
 */

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Get origin from request
  const origin = request.headers.get('origin') || '';

  const requestedOrigin = (() => {
    try {
      return origin ? new URL(origin).origin : '';
    } catch {
      return '';
    }
  })();

  // Allowed origins
  const allowedOrigins = new Set([
    'http://localhost:3000',
    'http://localhost:3001',
    process.env.NEXT_PUBLIC_SITE_URL,
    process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : '',
  ].filter(Boolean) as string[]);

  // Check if origin is allowed
  const isAllowedOrigin = requestedOrigin ? allowedOrigins.has(requestedOrigin) : false;

  // Handle preflight OPTIONS request
  if (request.method === 'OPTIONS') {
    if (requestedOrigin && !isAllowedOrigin) {
      return new NextResponse(null, { status: 403 });
    }

    const headers = new Headers({
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Access-Control-Max-Age': '86400',
      'Vary': 'Origin',
    });

    if (isAllowedOrigin) {
      headers.set('Access-Control-Allow-Origin', requestedOrigin);
    }

    return new NextResponse(null, {
      status: 200,
      headers,
    });
  }

  // Get the response
  const response = NextResponse.next();

  // Add CORS headers
  if (isAllowedOrigin) {
    response.headers.set('Access-Control-Allow-Origin', requestedOrigin);
  }
  response.headers.set('Vary', 'Origin');
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // Add security headers
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  response.headers.set('Cross-Origin-Opener-Policy', 'same-origin');
  response.headers.set('Cross-Origin-Resource-Policy', 'same-origin');
  response.headers.set('Content-Security-Policy', "default-src 'none'; frame-ancestors 'none'; base-uri 'none';");

  if (request.nextUrl.protocol === 'https:') {
    response.headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
  }

  return response;
}

// Apply middleware to API routes only
export const config = {
  matcher: '/api/:path*',
};
