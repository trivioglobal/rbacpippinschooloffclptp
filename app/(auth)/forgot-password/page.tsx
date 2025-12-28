/**
 * Forgot Password Page
 * 
 * Allows users to request a password reset email
 */

import type { Metadata } from 'next'
import { ForgotPasswordForm } from '@/components/auth/ForgotPasswordForm'

export const metadata: Metadata = {
  title: 'Forgot Password - Vedhitha School Management',
  description: 'Reset your Vedhitha School account password',
}

export default function ForgotPasswordPage() {
  return <ForgotPasswordForm />
}
