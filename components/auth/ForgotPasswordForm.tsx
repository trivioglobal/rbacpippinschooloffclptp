/**
 * Forgot Password Form Component
 * 
 * Handles password reset email sending
 */

'use client'

import { useState, useTransition } from 'react'
import Link from 'next/link'
import { resetPassword } from '@/lib/auth/actions'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Loader2, Mail, AlertCircle, CheckCircle2 } from 'lucide-react'

export function ForgotPasswordForm() {
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)
  const [isPending, startTransition] = useTransition()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)
    setSuccess(null)

    const formData = new FormData(e.currentTarget)

    startTransition(async () => {
      try {
        const result = await resetPassword(formData)
        
        if (result?.error) {
          setError(result.error)
        } else if (result?.success) {
          setSuccess(result.message || 'Password reset email sent successfully')
          // Clear form
          e.currentTarget.reset()
        }
      } catch (err) {
        setError('An unexpected error occurred. Please try again.')
        console.error('Password reset error:', err)
      }
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-gray-900">Reset Password</h2>
        <p className="text-sm text-gray-600">
          Enter your email address and we'll send you a link to reset your password
        </p>
      </div>

      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {success && (
        <Alert className="bg-green-50 text-green-900 border-green-200">
          <CheckCircle2 className="h-4 w-4 text-green-600" />
          <AlertDescription>{success}</AlertDescription>
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
              disabled={isPending || !!success}
              className="pl-10"
            />
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        className="w-full"
        disabled={isPending || !!success}
      >
        {isPending ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending email...
          </>
        ) : (
          'Send Reset Link'
        )}
      </Button>

      {/* Back to Login */}
      <div className="text-center">
        <Link
          href="/login"
          className="text-sm text-blue-600 hover:text-blue-700 hover:underline inline-flex items-center"
        >
          ← Back to login
        </Link>
      </div>

      {/* Help Text */}
      {success && (
        <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
          <p className="font-semibold mb-2">What's next?</p>
          <ol className="list-decimal list-inside space-y-1 text-xs">
            <li>Check your email inbox (and spam folder)</li>
            <li>Click the reset link in the email</li>
            <li>Enter your new password</li>
            <li>Sign in with your new password</li>
          </ol>
          <p className="mt-3 text-xs text-gray-500">
            The reset link will expire in 1 hour for security reasons.
          </p>
        </div>
      )}
    </form>
  )
}
