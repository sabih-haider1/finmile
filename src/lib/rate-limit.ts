/**
 * Rate limiting implementation for API routes
 * 
 * Protects against abuse by limiting requests per IP address
 */

const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

interface RateLimitOptions {
  maxRequests: number;
  windowMs: number;
}

/**
 * Check if a request should be rate limited
 * 
 * @param identifier - Usually IP address or user ID
 * @param options - Rate limit configuration
 * @returns Object with allowed status and remaining requests
 */
export function checkRateLimit(
  identifier: string,
  options: RateLimitOptions = { maxRequests: 100, windowMs: 60000 } // default: 100 requests per minute
): {
  allowed: boolean;
  remaining: number;
  resetTime: number;
} {
  const now = Date.now();
  const record = rateLimitMap.get(identifier);

  // If no record or window expired, create new record
  if (!record || now > record.resetTime) {
    rateLimitMap.set(identifier, {
      count: 1,
      resetTime: now + options.windowMs,
    });
    return {
      allowed: true,
      remaining: options.maxRequests - 1,
      resetTime: now + options.windowMs,
    };
  }

  // Increment counter
  record.count++;

  // Check if limit exceeded
  if (record.count > options.maxRequests) {
    return {
      allowed: false,
      remaining: 0,
      resetTime: record.resetTime,
    };
  }

  return {
    allowed: true,
    remaining: options.maxRequests - record.count,
    resetTime: record.resetTime,
  };
}

/**
 * Get client IP from request
 */
export function getClientIp(request: Request): string {
  // Check various headers that might contain the real IP
  const forwardedFor = request.headers.get('x-forwarded-for');
  const realIp = request.headers.get('x-real-ip');
  const cfConnectingIp = request.headers.get('cf-connecting-ip'); // Cloudflare

  if (forwardedFor) {
    return forwardedFor.split(',')[0].trim();
  }

  if (realIp) {
    return realIp;
  }

  if (cfConnectingIp) {
    return cfConnectingIp;
  }

  return 'unknown';
}

/**
 * Clean up old rate limit records periodically
 * Call this in a background task or serverless cron
 */
export function cleanupRateLimitRecords(): void {
  const now = Date.now();
  const keysToDelete: string[] = [];
  
  rateLimitMap.forEach((value, key) => {
    if (now > value.resetTime) {
      keysToDelete.push(key);
    }
  });
  
  keysToDelete.forEach(key => rateLimitMap.delete(key));
}

// Cleanup every 5 minutes (Disabled for Edge Runtime compatibility)
// if (typeof setInterval !== 'undefined') {
//   setInterval(cleanupRateLimitRecords, 5 * 60 * 1000);
// }
