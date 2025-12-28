/**
 * Login Page
 * 
 * Authentication page for all user types
 * Redirects to role-appropriate dashboard after successful login
 */

import type { Metadata } from 'next'
import { LoginForm } from '@/components/auth/LoginForm'

export const metadata: Metadata = {
  title: 'Login - Vedhitha School Management',
  description: 'Sign in to your Vedhitha School account',
}

export default function LoginPage() {
  return <LoginForm />
}
