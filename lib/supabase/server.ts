/**
 * Supabase Server Client
 * 
 * This client is used in Server Components and API routes for server-side operations.
 * It manages authentication cookies and provides secure database access.
 * 
 * @usage
 * ```typescript
 * import { createClient } from '@/lib/supabase/server'
 * 
 * const supabase = await createClient()
 * const { data, error } = await supabase.from('students').select('*')
 * ```
 */

import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import type { Database } from '@/types/database.types'

/**
 * Creates a Supabase client for server-side operations
 * Manages authentication cookies automatically
 * @returns Promise<Supabase client instance>
 */
export async function createClient() {
  const cookieStore = await cookies()

  return createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            )
          } catch {
            // The `setAll` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
      },
    }
  )
}

/**
 * Creates a Supabase client with service role key for admin operations
 * USE WITH CAUTION: Bypasses RLS policies
 * Only use for server-side operations that require elevated permissions
 * @returns Supabase client with service role
 */
export function createServiceClient() {
  return createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    {
      cookies: {
        getAll() {
          return []
        },
        setAll() {},
      },
    }
  )
}

/**
 * Helper to get the current authenticated user
 * @returns User object or null if not authenticated
 */
export async function getCurrentUser() {
  const supabase = await createClient()
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser()

  if (error || !user) {
    return null
  }

  return user
}

/**
 * Helper to get the current user's session
 * @returns Session object or null if not authenticated
 */
export async function getSession() {
  const supabase = await createClient()
  const {
    data: { session },
    error,
  } = await supabase.auth.getSession()

  if (error || !session) {
    return null
  }

  return session
}

/**
 * Helper to get the current user with their profile
 * @returns User with profile data or null
 */
export async function getUserWithProfile() {
  const supabase = await createClient()
  const user = await getCurrentUser()

  if (!user) {
    return null
  }

  const { data: profile, error } = await supabase
    .from('user_profiles')
    .select('*')
    .eq('id', user.id)
    .single()

  if (error || !profile) {
    return null
  }

  return {
    ...user,
    profile,
  }
}
