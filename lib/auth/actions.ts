/**
 * Authentication Server Actions
 * 
 * Server-side authentication actions for sign in, sign out, and password reset
 */

'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import type { UserProfile, UserProfileUpdate } from '@/types/supabase'

/**
 * Sign in with email and password
 */
export async function signIn(formData: FormData) {
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  if (!email || !password) {
    return { error: 'Email and password are required' }
  }

  const supabase = await createClient()

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    return { error: error.message }
  }

  if (!data.user) {
    return { error: 'Authentication failed' }
  }

  // Get user profile to determine redirect
  const { data: profile } = await supabase
    .from('user_profiles')
    .select('role')
    .eq('id', data.user.id)
    .single()

  if (!profile) {
    return { error: 'User profile not found' }
  }

  // Revalidate and redirect based on role
  revalidatePath('/', 'layout')
  
  const dashboardUrl = getRoleDashboardUrl(profile.role)
  redirect(dashboardUrl)
}

/**
 * Sign out current user
 */
export async function signOut() {
  const supabase = await createClient()
  
  const { error } = await supabase.auth.signOut()

  if (error) {
    return { error: error.message }
  }

  revalidatePath('/', 'layout')
  redirect('/login')
}

/**
 * Send password reset email
 */
export async function resetPassword(formData: FormData) {
  const email = formData.get('email') as string

  if (!email) {
    return { error: 'Email is required' }
  }

  const supabase = await createClient()

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${process.env.NEXT_PUBLIC_APP_URL}/auth/callback`,
  })

  if (error) {
    return { error: error.message }
  }

  return { success: true, message: 'Password reset email sent' }
}

/**
 * Update user password (after reset)
 */
export async function updatePassword(formData: FormData) {
  const password = formData.get('password') as string
  const confirmPassword = formData.get('confirmPassword') as string

  if (!password || !confirmPassword) {
    return { error: 'Password and confirmation are required' }
  }

  if (password !== confirmPassword) {
    return { error: 'Passwords do not match' }
  }

  if (password.length < 8) {
    return { error: 'Password must be at least 8 characters' }
  }

  const supabase = await createClient()

  const { error } = await supabase.auth.updateUser({
    password,
  })

  if (error) {
    return { error: error.message }
  }

  return { success: true, message: 'Password updated successfully' }
}

/**
 * Update user profile
 */
export async function updateProfile(data: UserProfileUpdate) {
  const supabase = await createClient()
  
  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user) {
    return { error: 'Not authenticated' }
  }

  const { error } = await supabase
    .from('user_profiles')
    .update(data)
    .eq('id', user.id)

  if (error) {
    return { error: error.message }
  }

  revalidatePath('/', 'layout')
  return { success: true }
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
