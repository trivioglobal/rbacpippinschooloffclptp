/**
 * Auth Callback Route
 * 
 * Handles authentication callbacks from Supabase
 * Used for email confirmations and password resets
 */

import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')
  const next = requestUrl.searchParams.get('next') || '/login'

  if (code) {
    const supabase = await createClient()
    
    const { error } = await supabase.auth.exchangeCodeForSession(code)
    
    if (!error) {
      // Get user profile to redirect to appropriate dashboard
      const { data: { user } } = await supabase.auth.getUser()
      
      if (user) {
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
      
      return NextResponse.redirect(new URL(next, request.url))
    }
  }

  // If there's an error or no code, redirect to login
  return NextResponse.redirect(new URL('/login?error=auth-callback-failed', request.url))
}

/**
 * Get dashboard URL based on role
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
