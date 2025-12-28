/**
 * Authentication Layout
 * 
 * Clean layout for authentication pages (login, register, forgot password)
 * Centers content with school branding
 */

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Authentication - Vedhitha School Management',
  description: 'Login to Vedhitha School Management System',
}

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4">
      <div className="w-full max-w-md">
        {/* School Branding */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white text-2xl font-bold mb-4">
            V
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Vedhitha School
          </h1>
          <p className="text-gray-600">
            School Management System
          </p>
        </div>

        {/* Auth Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {children}
        </div>

        {/* Footer */}
        <div className="text-center mt-6 text-sm text-gray-600">
          <p>© 2025 Vedhitha School. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}
