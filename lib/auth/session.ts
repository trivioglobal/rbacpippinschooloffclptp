/**
 * Authentication Session Management
 * 
 * Server-side session utilities for authentication
 */

import { createClient, getCurrentUser, getSession, getUserWithProfile } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { cache } from 'react'
import type { UserProfile } from '@/types/supabase'

/**
 * Get current user session (cached for request)
 * Use in Server Components and API Routes
 */
export const getCachedSession = cache(async () => {
  return await getSession()
})

/**
 * Get current user (cached for request)
 * Use in Server Components and API Routes
 */
export const getCachedUser = cache(async () => {
  return await getCurrentUser()
})

/**
 * Get current user with profile (cached for request)
 * Use in Server Components and API Routes
 */
export const getCachedUserWithProfile = cache(async () => {
  return await getUserWithProfile()
})

/**
 * Require authentication or redirect to login
 * Use in Server Components that need authentication
 * 
 * @example
 * ```tsx
 * // In a Server Component
 * export default async function ProtectedPage() {
 *   await requireAuth()
 *   // User is authenticated here
 * }
 * ```
 */
export async function requireAuth() {
  const user = await getCachedUser()
  
  if (!user) {
    redirect('/login')
  }
  
  return user
}

/**
 * Require specific role or redirect
 * Use in Server Components that need role-based access
 * 
 * @example
 * ```tsx
 * // In a Server Component
 * export default async function AdminPage() {
 *   await requireRole(['PRINCIPAL', 'ADMIN_MANAGER'])
 *   // User has required role here
 * }
 * ```
 */
export async function requireRole(allowedRoles: string[]) {
  const user = await requireAuth()
  
  const supabase = await createClient()
  const { data: profile } = await supabase
    .from('user_profiles')
    .select('role')
    .eq('id', user.id)
    .single()

  if (!profile || !allowedRoles.includes(profile.role)) {
    redirect('/unauthorized')
  }

  return { user, profile }
}

/**
 * Get user profile or redirect to login
 * Use in Server Components that need user profile
 * 
 * @example
 * ```tsx
 * // In a Server Component
 * export default async function DashboardPage() {
 *   const profile = await requireProfile()
 *   // User profile available here
 * }
 * ```
 */
export async function requireProfile(): Promise<UserProfile> {
  const user = await requireAuth()
  
  const supabase = await createClient()
  const { data: profile, error } = await supabase
    .from('user_profiles')
    .select('*')
    .eq('id', user.id)
    .single()

  if (error || !profile) {
    redirect('/login')
  }

  return profile
}

/**
 * Check if user is authenticated (without redirect)
 * Use when you need to check auth status without forcing login
 * 
 * @example
 * ```tsx
 * const isAuth = await isAuthenticated()
 * if (isAuth) {
 *   // Show authenticated content
 * }
 * ```
 */
export async function isAuthenticated(): Promise<boolean> {
  const user = await getCachedUser()
  return !!user
}

/**
 * Get user ID or throw error
 * Use in API routes that require authentication
 * 
 * @example
 * ```tsx
 * export async function GET() {
 *   const userId = await requireUserId()
 *   // userId is guaranteed to exist here
 * }
 * ```
 */
export async function requireUserId(): Promise<string> {
  const user = await requireAuth()
  return user.id
}

/**
 * Get school ID from user profile
 * Use in API routes that need school context
 */
export async function getSchoolId(): Promise<string | null> {
  const user = await getCachedUser()
  
  if (!user) {
    return null
  }

  const supabase = await createClient()
  const { data: profile } = await supabase
    .from('user_profiles')
    .select('school_id')
    .eq('id', user.id)
    .single()

  return profile?.school_id || null
}

/**
 * Require school ID or throw error
 * Use in API routes that require school context
 */
export async function requireSchoolId(): Promise<string> {
  const schoolId = await getSchoolId()
  
  if (!schoolId) {
    throw new Error('School context not found')
  }
  
  return schoolId
}
