/**
 * Login Form Component
 * 
 * Handles user authentication with email and password
 * Implements proper error handling and loading states
 */

'use client'

import { useState, useTransition } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { signIn } from '@/lib/auth/actions'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Loader2, Mail, Lock, AlertCircle } from 'lucide-react'

export function LoginForm() {
  const [error, setError] = useState<string | null>(null)
  const [isPending, startTransition] = useTransition()
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)

    const formData = new FormData(e.currentTarget)

    startTransition(async () => {
      try {
        const result = await signIn(formData)
        
        if (result?.error) {
          setError(result.error)
        }
        // If successful, signIn action will redirect automatically
      } catch (err) {
        setError('An unexpected error occurred. Please try again.')
        console.error('Login error:', err)
      }
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-gray-900">Welcome Back</h2>
        <p className="text-sm text-gray-600">
          Sign in to your account to continue
        </p>
      </div>

      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <div className="space-y-4">
        {/* Email Field */}
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="your.email@school.com"
              required
              autoComplete="email"
              disabled={isPending}
              className="pl-10"
            />
          </div>
        </div>

        {/* Password Field */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Password</Label>
            <Link
              href="/forgot-password"
              className="text-sm text-blue-600 hover:text-blue-700 hover:underline"
            >
              Forgot password?
            </Link>
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="••••••••"
              required
              autoComplete="current-password"
              disabled={isPending}
              className="pl-10"
            />
          </div>
        </div>

        {/* Remember Me */}
        <div className="flex items-center">
          <input
            id="remember"
            name="remember"
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          <label htmlFor="remember" className="ml-2 text-sm text-gray-700">
            Remember me for 30 days
          </label>
        </div>
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        className="w-full"
        disabled={isPending}
      >
        {isPending ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Signing in...
          </>
        ) : (
          'Sign In'
        )}
      </Button>

      {/* Help Text */}
      <div className="text-center text-sm text-gray-600">
        <p>
          Need help?{' '}
          <Link href="/contact" className="text-blue-600 hover:text-blue-700 hover:underline">
            Contact Support
          </Link>
        </p>
      </div>

      {/* Demo Credentials (Development Only) */}
      {process.env.NODE_ENV === 'development' && (
        <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
          <p className="text-xs font-semibold text-amber-900 mb-2">
            Demo Credentials (Development):
          </p>
          <div className="space-y-1 text-xs text-amber-800">
            <p><strong>Principal:</strong> principal@vedhitha.com / password</p>
            <p><strong>Teacher:</strong> teacher@vedhitha.com / password</p>
            <p><strong>Parent:</strong> parent@vedhitha.com / password</p>
            <p><strong>Student:</strong> student@vedhitha.com / password</p>
          </div>
        </div>
      )}
    </form>
  )
}
