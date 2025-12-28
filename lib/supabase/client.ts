/**
 * Supabase Browser Client
 * 
 * This client is used in Client Components for browser-side operations.
 * It automatically manages authentication state and session tokens.
 * 
 * @usage
 * ```typescript
 * import { createClient } from '@/lib/supabase/client'
 * 
 * const supabase = createClient()
 * const { data, error } = await supabase.from('students').select('*')
 * ```
 */

import { createBrowserClient } from '@supabase/ssr'
import type { Database } from '@/types/database.types'

/**
 * Creates a Supabase client for browser-side operations
 * @returns Supabase client instance
 */
export function createClient() {
  return createBrowserClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}

/**
 * Singleton instance for browser client
 * Use this in Client Components that don't need cookie management
 */
export const supabase = createClient()
