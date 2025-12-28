/**
 * Simplified Admin Layout - For Testing
 * 
 * This bypasses the complex hooks and components to test basic functionality
 */

import { requireAuth, requireProfile } from '@/lib/auth/session'
import { redirect } from 'next/navigation'

export default async function SimpleAdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Require authentication
  await requireAuth()
  
  // Get user profile
  const profile = await requireProfile()

  // Check admin roles
  const adminRoles = [
    'SUPER_ADMIN',
    'PRINCIPAL',
    'VICE_PRINCIPAL',
    'ADMIN_MANAGER',
    'FINANCE_MANAGER',
    'EXAM_HEAD',
    'LIBRARIAN',
    'TRANSPORT_MANAGER',
    'HOSTEL_WARDEN',
    'ACCOUNTANT',
    'ADMIN_STAFF',
    'RECEPTIONIST',
    'MEDICAL_STAFF',
  ]

  if (!adminRoles.includes(profile.role)) {
    redirect('/unauthorized')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Simple Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">
            Admin Dashboard
          </h1>
          <div className="text-sm text-gray-600">
            {profile.full_name} ({profile.role})
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6">
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  )
}
