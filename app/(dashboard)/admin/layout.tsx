/**
 * Admin Dashboard Layout
 * 
 * Full-featured layout with sidebar, header, and navigation
 */

import { requireAuth, requireProfile } from '@/lib/auth/session'
import { redirect } from 'next/navigation'
import { Sidebar } from '@/components/layout/Sidebar/Sidebar'
import { Header } from '@/components/layout/Header/Header'

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Require authentication
  await requireAuth()
  
  // Get user profile to verify role
  const profile = await requireProfile()

  // Check if user has admin access
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
    // Redirect non-admin users to their appropriate dashboard
    if (profile.role === 'TEACHER' || profile.role === 'CLASS_TEACHER') {
      redirect('/teacher/dashboard')
    } else if (profile.role === 'PARENT') {
      redirect('/parent/dashboard')
    } else if (profile.role === 'STUDENT') {
      redirect('/student/dashboard')
    } else {
      redirect('/unauthorized')
    }
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col ml-64">
        {/* Header */}
        <Header />
        
        {/* Page Content */}
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
