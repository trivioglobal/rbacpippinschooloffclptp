/**
 * Next.js Middleware
 * 
 * Handles authentication, session refresh, and route protection.
 * Runs on every request to protected routes.
 */

import { updateSession } from '@/lib/supabase/middleware'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  // Update session and handle authentication
  return await updateSession(request)
}

/**
 * Middleware configuration
 * Specifies which routes should be protected
 */
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     * - api routes (handled separately)
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
