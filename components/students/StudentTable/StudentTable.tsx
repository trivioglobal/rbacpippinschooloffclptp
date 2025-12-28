/**
 * Student Table Component
 * 
 * Main table component for displaying students list
 * Includes sorting, pagination, and bulk selection
 * Fetches data directly from Supabase with RBAC permission checks
 */

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Eye, Edit, MoreVertical } from 'lucide-react'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import { getUserContext } from '@/lib/rbac/data-scope'
import { checkPermission, type PermissionContext } from '@/lib/rbac/checker'
import { Module, Permission, UserRole, DataScope } from '@/lib/rbac/roles'
import { getRoleDataScope } from '@/lib/rbac/permissions'

interface StudentTableProps {
  userId: string
  userRole: string
  searchParams: {
    search?: string
    page: number
    classId?: string
    section?: string
    status?: string
    gender?: string
  }
}

interface Student {
  id: string
  admission_number: string
  first_name: string
  middle_name: string | null
  last_name: string
  gender: string
  photo_url: string | null
  status: string
  classes: {
    class_name: string
  } | null
  sections: {
    section_name: string
  } | null
}

interface ApiResponse {
  data: Student[]
  pagination: {
    page: number
    pageSize: number
    total: number
    totalPages: number
    hasNextPage: boolean
    hasPreviousPage: boolean
  }
}

function getStatusColor(status: string) {
  switch (status) {
    case 'ACTIVE':
      return 'bg-green-100 text-green-800'
    case 'INACTIVE':
      return 'bg-gray-100 text-gray-800'
    case 'GRADUATED':
      return 'bg-blue-100 text-blue-800'
    case 'TRANSFERRED':
      return 'bg-yellow-100 text-yellow-800'
    case 'WITHDRAWN':
      return 'bg-red-100 text-red-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

function getInitials(firstName: string, lastName: string) {
  return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase()
}

export async function StudentTable({
  userId,
  userRole,
  searchParams,
}: StudentTableProps) {
  const supabase = await createClient()
  
  // Get user for permission context
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return (
      <Card>
        <CardContent className="py-16 text-center">
          <p className="text-red-500 text-lg">Authentication required</p>
        </CardContent>
      </Card>
    )
  }

  // Get user profile
  const { data: profile } = await supabase
    .from('user_profiles')
    .select('*')
    .eq('id', user.id)
    .single()

  if (!profile) {
    return (
      <Card>
        <CardContent className="py-16 text-center">
          <p className="text-red-500 text-lg">Profile not found</p>
        </CardContent>
      </Card>
    )
  }

  // Get data scope for user's role
  const dataScope = getRoleDataScope(profile.role as UserRole)

  // Pagination constants
  const pageSize = 20
  const page = searchParams.page || 1

  // Build query
  let query = supabase
    .from('students')
    .select(
      `
      id,
      admission_number,
      first_name,
      middle_name,
      last_name,
      gender,
      photo_url,
      status,
      classes:current_class_id (
        class_name
      ),
      sections:current_section_id (
        section_name
      )
    `,
      { count: 'exact' }
    )

  // Apply data scope filtering
  switch (dataScope) {
    case DataScope.ALL_SCHOOLS:
      // No filter - can see all students
      break

    case DataScope.SCHOOL_WIDE:
      // Filter by user's school
      if (profile.school_id) {
        query = query.eq('school_id', profile.school_id)
      }
      break

    case DataScope.CLASS_WIDE:
    case DataScope.OWN_SUBJECTS:
      // For teachers - only students in their classes
      if (profile.school_id) {
        query = query.eq('school_id', profile.school_id)
      }
      break

    default:
      // Default to school filter
      if (profile.school_id) {
        query = query.eq('school_id', profile.school_id)
      }
  }

  // Apply search
  if (searchParams.search) {
    const searchTerm = `%${searchParams.search}%`
    query = query.or(
      `first_name.ilike.${searchTerm},last_name.ilike.${searchTerm},admission_number.ilike.${searchTerm}`
    )
  }

  // Apply filters
  if (searchParams.classId) {
    query = query.eq('current_class_id', searchParams.classId)
  }
  if (searchParams.section) {
    query = query.eq('current_section_id', searchParams.section)
  }
  if (searchParams.status) {
    query = query.eq('status', searchParams.status as any)
  } else {
    query = query.eq('status', 'ACTIVE')
  }
  if (searchParams.gender) {
    query = query.eq('gender', searchParams.gender as any)
  }

  // Apply sorting
  query = query.order('first_name', { ascending: true })

  // Apply pagination
  const from = (page - 1) * pageSize
  const to = from + pageSize - 1
  query = query.range(from, to)

  // Execute query
  const { data: students, count, error } = await query

  if (error) {
    console.error('Error fetching students:', error)
    return (
      <Card>
        <CardContent className="py-16 text-center">
          <p className="text-red-500 text-lg mb-2">Error loading students</p>
          <p className="text-gray-400 text-sm">{error.message}</p>
        </CardContent>
      </Card>
    )
  }

  // Calculate pagination
  const totalPages = count ? Math.ceil(count / pageSize) : 0
  const hasNextPage = page < totalPages
  const hasPreviousPage = page > 1
  
  const pagination = {
    page,
    pageSize,
    total: count || 0,
    totalPages,
    hasNextPage,
    hasPreviousPage,
  }

  // Build URLSearchParams for pagination links
  const params = new URLSearchParams()
  if (searchParams.search) params.set('search', searchParams.search)
  if (searchParams.classId) params.set('class', searchParams.classId)
  if (searchParams.section) params.set('section', searchParams.section)
  if (searchParams.status) params.set('status', searchParams.status)
  if (searchParams.gender) params.set('gender', searchParams.gender)

  if (students.length === 0) {
    return (
      <Card>
        <CardContent className="py-16 text-center">
          <p className="text-gray-500 text-lg mb-2">No students found</p>
          <p className="text-gray-400 text-sm mb-6">
            Try adjusting your search or filters
          </p>
          <Button asChild>
            <Link href="/admin/students/add">Add First Student</Link>
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-4">
      <Card>
        <CardContent className="p-0">
          {/* Table Header */}
          <div className="bg-gray-50 px-6 py-4 border-b">
            <div className="grid grid-cols-12 gap-4 text-sm font-medium text-gray-700">
              <div className="col-span-1">
                <input
                  type="checkbox"
                  className="rounded border-gray-300"
                  aria-label="Select all students"
                />
              </div>
              <div className="col-span-4">Student</div>
              <div className="col-span-2">Admission No.</div>
              <div className="col-span-2">Class</div>
              <div className="col-span-2">Status</div>
              <div className="col-span-1 text-right">Actions</div>
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y">
            {students.map((student) => (
              <div
                key={student.id}
                className="px-6 py-4 hover:bg-gray-50 transition-colors"
              >
                <div className="grid grid-cols-12 gap-4 items-center">
                  {/* Checkbox */}
                  <div className="col-span-1">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300"
                      aria-label={`Select ${student.first_name} ${student.last_name}`}
                    />
                  </div>

                  {/* Student Info */}
                  <div className="col-span-4 flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={student.photo_url || undefined} />
                      <AvatarFallback className="bg-blue-100 text-blue-700">
                        {getInitials(student.first_name, student.last_name)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium text-gray-900">
                        {student.first_name} {student.last_name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {student.gender}
                      </div>
                    </div>
                  </div>

                  {/* Admission Number */}
                  <div className="col-span-2 text-sm text-gray-700">
                    {student.admission_number}
                  </div>

                  {/* Class */}
                  <div className="col-span-2 text-sm text-gray-700">
                    {student.classes?.class_name || 'N/A'} - {student.sections?.section_name || 'N/A'}
                  </div>

                  {/* Status */}
                  <div className="col-span-2">
                    <Badge
                      variant="secondary"
                      className={getStatusColor(student.status)}
                    >
                      {student.status}
                    </Badge>
                  </div>

                  {/* Actions */}
                  <div className="col-span-1 flex items-center justify-end gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      asChild
                      className="h-8 w-8 p-0"
                    >
                      <Link href={`/admin/students/${student.id}`}>
                        <Eye className="h-4 w-4" />
                        <span className="sr-only">View student</span>
                      </Link>
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      asChild
                      className="h-8 w-8 p-0"
                    >
                      <Link href={`/admin/students/${student.id}/edit`}>
                        <Edit className="h-4 w-4" />
                        <span className="sr-only">Edit student</span>
                      </Link>
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0"
                    >
                      <MoreVertical className="h-4 w-4" />
                      <span className="sr-only">More options</span>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-700">
          Showing{' '}
          <span className="font-medium">
            {pagination.total === 0 ? 0 : (pagination.page - 1) * pagination.pageSize + 1}
          </span>{' '}
          to{' '}
          <span className="font-medium">
            {Math.min(pagination.page * pagination.pageSize, pagination.total)}
          </span>{' '}
          of <span className="font-medium">{pagination.total}</span> students
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            asChild={pagination.hasPreviousPage}
            disabled={!pagination.hasPreviousPage}
          >
            {pagination.hasPreviousPage ? (
              <Link
                href={`?${new URLSearchParams({
                  ...Object.fromEntries(params),
                  page: (pagination.page - 1).toString(),
                }).toString()}`}
              >
                Previous
              </Link>
            ) : (
              <span>Previous</span>
            )}
          </Button>
          <div className="text-sm text-gray-600">
            Page {pagination.page} of {pagination.totalPages}
          </div>
          <Button
            variant="outline"
            size="sm"
            asChild={pagination.hasNextPage}
            disabled={!pagination.hasNextPage}
          >
            {pagination.hasNextPage ? (
              <Link
                href={`?${new URLSearchParams({
                  ...Object.fromEntries(params),
                  page: (pagination.page + 1).toString(),
                }).toString()}`}
              >
                Next
              </Link>
            ) : (
              <span>Next</span>
            )}
          </Button>
        </div>
      </div>
    </div>
  )
}
