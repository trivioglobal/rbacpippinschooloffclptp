/**
 * Supabase Middleware Client
 * 
 * This client is used in Next.js middleware for authentication and session management.
 * It refreshes expired auth tokens and manages cookies.
 * 
 * @usage
 * Used in root middleware.ts file
 */

import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'
import type { Database } from '@/types/database.types'

/**
 * Creates a Supabase client for middleware operations
 * Handles cookie management and token refresh
 * @param request - Next.js request object
 * @returns Object with supabase client and response
 */
export async function createClient(request: NextRequest) {
  // Create an unmodified response
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  })

  const supabase = createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          )
          response = NextResponse.next({
            request,
          })
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options)
          )
        },
      },
    }
  )

  // Refresh session if expired - required for Server Components
  // https://supabase.com/docs/guides/auth/server-side/nextjs
  const {
    data: { user },
  } = await supabase.auth.getUser()

  return { supabase, response, user }
}

/**
 * Updates the session in the response object
 * Call this in middleware to ensure tokens are refreshed
 * @param request - Next.js request object
 * @returns Updated NextResponse with refreshed session
 */
export async function updateSession(request: NextRequest) {
  const { supabase, response, user } = await createClient(request)

  // If no user and trying to access protected route, redirect to login
  const isProtectedRoute = request.nextUrl.pathname.startsWith('/admin') ||
    request.nextUrl.pathname.startsWith('/teacher') ||
    request.nextUrl.pathname.startsWith('/parent') ||
    request.nextUrl.pathname.startsWith('/student')

  if (!user && isProtectedRoute) {
    const redirectUrl = new URL('/login', request.url)
    redirectUrl.searchParams.set('redirect', request.nextUrl.pathname)
    return NextResponse.redirect(redirectUrl)
  }

  // If user exists and trying to access auth pages, redirect to dashboard
  const isAuthRoute = request.nextUrl.pathname.startsWith('/login') ||
    request.nextUrl.pathname.startsWith('/register') ||
    request.nextUrl.pathname.startsWith('/forgot-password')

  if (user && isAuthRoute) {
    // Get user profile to determine role-based redirect
    const { data: profile } = await supabase
      .from('user_profiles')
      .select('role')
      .eq('id', user.id)
      .single()

    if (profile) {
      const dashboardUrl = getRoleDashboardUrl(profile.role)
      return NextResponse.redirect(new URL(dashboardUrl, request.url))
    }
  }

  return response
}

/**
 * Get the appropriate dashboard URL based on user role
 * @param role - User's role
 * @returns Dashboard URL path
 */
function getRoleDashboardUrl(role: string): string {
  const roleMap: Record<string, string> = {
    SUPER_ADMIN: '/admin/dashboard',
    PRINCIPAL: '/admin/dashboard',
    VICE_PRINCIPAL: '/admin/dashboard',
    ADMIN_MANAGER: '/admin/dashboard',
    FINANCE_MANAGER: '/admin/fee-management',
    EXAM_HEAD: '/admin/examinations',
    LIBRARIAN: '/admin/library',
    TRANSPORT_MANAGER: '/admin/transport',
    HOSTEL_WARDEN: '/admin/hostel',
    TEACHER: '/teacher/dashboard',
    CLASS_TEACHER: '/teacher/dashboard',
    ACCOUNTANT: '/admin/fee-management/payments',
    ADMIN_STAFF: '/admin/dashboard',
    RECEPTIONIST: '/admin/dashboard',
    MEDICAL_STAFF: '/admin/health',
    DRIVER: '/driver/dashboard',
    PARENT: '/parent/dashboard',
    STUDENT: '/student/dashboard',
  }

  return roleMap[role] || '/admin/dashboard'
}
