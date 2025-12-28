/**
 * Authentication Hooks
 * 
 * React hooks for authentication state and user management
 */

'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import type { User, Session } from '@supabase/supabase-js'
import type { UserProfile } from '@/types/supabase'

/**
 * Hook to get current authenticated user
 * 
 * @example
 * ```tsx
 * const { user, loading } = useAuth()
 * ```
 */
export function useAuth() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const supabase = createClient()

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null)
      setLoading(false)
    })

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
      setLoading(false)
    })

    return () => subscription.unsubscribe()
  }, [supabase])

  return {
    user,
    loading,
    isAuthenticated: !!user,
  }
}

/**
 * Hook to get current session
 * 
 * @example
 * ```tsx
 * const { session, loading } = useSession()
 * ```
 */
export function useSession() {
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(true)
  const supabase = createClient()

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
      setLoading(false)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [supabase])

  return {
    session,
    loading,
  }
}

/**
 * Hook to get user with profile data
 * 
 * @example
 * ```tsx
 * const { user, profile, loading } = useUser()
 * ```
 */
export function useUser() {
  const [user, setUser] = useState<User | null>(null)
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [loading, setLoading] = useState(true)
  const supabase = createClient()

  useEffect(() => {
    loadUserWithProfile()

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        loadUserWithProfile()
      } else {
        setUser(null)
        setProfile(null)
        setLoading(false)
      }
    })

    return () => subscription.unsubscribe()
  }, [supabase])

  async function loadUserWithProfile() {
    try {
      const { data: { user } } = await supabase.auth.getUser()
      
      if (!user) {
        setUser(null)
        setProfile(null)
        setLoading(false)
        return
      }

      setUser(user)

      // Fetch user profile
      const { data: userProfile, error } = await supabase
        .from('user_profiles')
        .select('*')
        .eq('id', user.id)
        .single()

      if (!error && userProfile) {
        setProfile(userProfile)
      }
    } catch (error) {
      console.error('Error loading user profile:', error)
    } finally {
      setLoading(false)
    }
  }

  return {
    user,
    profile,
    loading,
    isAuthenticated: !!user,
    reload: loadUserWithProfile,
  }
}

/**
 * Hook to require authentication (redirects if not authenticated)
 * 
 * @example
 * ```tsx
 * // In a page component
 * useRequireAuth()
 * ```
 */
export function useRequireAuth() {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login')
    }
  }, [user, loading, router])

  return { user, loading }
}

/**
 * Hook for sign out with redirect
 * 
 * @example
 * ```tsx
 * const { signOut, loading } = useSignOut()
 * 
 * <Button onClick={signOut}>Logout</Button>
 * ```
 */
export function useSignOut() {
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  const signOut = async () => {
    setLoading(true)
    try {
      await supabase.auth.signOut()
      router.push('/login')
      router.refresh()
    } catch (error) {
      console.error('Error signing out:', error)
    } finally {
      setLoading(false)
    }
  }

  return {
    signOut,
    loading,
  }
}
