/**
 * Admin Students List Page
 * 
 * Displays paginated list of students with search, filters, and bulk actions
 * Implements RBAC permission checks and data scope filtering
 */

import { requireAuth, requireProfile } from '@/lib/auth/session'
import { Suspense } from 'react'
import { StudentTable } from '@/components/students/StudentTable/StudentTable'
import { StudentSearchBar } from '@/components/students/StudentSearchBar'
import { StudentFilters } from '@/components/students/StudentFilters'
import { Button } from '@/components/ui/button'
import { Plus, Upload, Download } from 'lucide-react'
import Link from 'next/link'

export default async function StudentsListPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  // Require authentication and profile
  await requireAuth()
  const profile = await requireProfile()

  // Await search params (Next.js 16 requirement)
  const params = await searchParams

  // Extract search params
  const search = typeof params.search === 'string' ? params.search : ''
  const page = typeof params.page === 'string' ? parseInt(params.page) : 1
  const classId = typeof params.class === 'string' ? params.class : undefined
  const section = typeof params.section === 'string' ? params.section : undefined
  const status = typeof params.status === 'string' ? params.status : undefined
  const gender = typeof params.gender === 'string' ? params.gender : undefined

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Students</h1>
          <p className="text-gray-600 mt-1">
            Manage student records, admissions, and profiles
          </p>
        </div>
        
        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button variant="outline" size="sm">
            <Upload className="h-4 w-4 mr-2" />
            Import
          </Button>
          <Button asChild>
            <Link href="/admin/students/add">
              <Plus className="h-4 w-4 mr-2" />
              New Admission
            </Link>
          </Button>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="space-y-4">
        <StudentSearchBar initialValue={search} />
        <StudentFilters
          initialFilters={{
            classId,
            section,
            status,
            gender,
          }}
        />
      </div>

      {/* Students Table */}
      <Suspense
        fallback={
          <div className="bg-white rounded-lg shadow p-8 text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-1/4 mx-auto mb-4" />
              <div className="space-y-3">
                <div className="h-4 bg-gray-200 rounded" />
                <div className="h-4 bg-gray-200 rounded" />
                <div className="h-4 bg-gray-200 rounded" />
              </div>
            </div>
          </div>
        }
      >
        <StudentTable
          userId={profile.id}
          userRole={profile.role}
          searchParams={{
            search,
            page,
            classId,
            section,
            status,
            gender,
          }}
        />
      </Suspense>
    </div>
  )
}
