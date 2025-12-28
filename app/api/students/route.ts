/**
 * Students API Route
 * 
 * GET: List students with search, filters, and pagination
 * POST: Create new student (admission)
 * 
 * Implements RBAC permission checks and data scope filtering
 */

import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { studentListParamsSchema } from '@/lib/validations/student.validation'
import { checkPermission, type PermissionContext } from '@/lib/rbac/checker'
import { getUserContext, type UserContext } from '@/lib/rbac/data-scope'
import { Module, Permission, UserRole, DataScope } from '@/lib/rbac/roles'
import { getRoleDataScope } from '@/lib/rbac/permissions'

/**
 * GET /api/students
 * 
 * List students with search, filters, and pagination
 * Requires: students:read permission
 * Data scope: Filtered based on user role
 */
export async function GET(request: NextRequest) {
  try {
    const supabase = await createClient()

    // Get authenticated user
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()

    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Get user profile with role
    const { data: profile, error: profileError } = await supabase
      .from('user_profiles')
      .select('*')
      .eq('id', user.id)
      .single()

    if (profileError || !profile) {
      return NextResponse.json(
        { error: 'User profile not found' },
        { status: 404 }
      )
    }

    // Build user context
    const userContext = await getUserContext(user.id, profile)

    // Check permission
    const permissionContext: PermissionContext = {
      module: Module.STUDENTS,
      action: Permission.READ,
    }

    const permissionResult = await checkPermission(userContext, permissionContext)

    if (!permissionResult.granted) {
      return NextResponse.json(
        { error: 'Insufficient permissions', reason: permissionResult.reason },
        { status: 403 }
      )
    }

    // Parse and validate query parameters
    const searchParams = request.nextUrl.searchParams
    const params = {
      search: searchParams.get('search') || undefined,
      page: searchParams.get('page') || '1',
      pageSize: searchParams.get('pageSize') || '20',
      classId: searchParams.get('class') || undefined,
      section: searchParams.get('section') || undefined,
      status: searchParams.get('status') || undefined,
      gender: searchParams.get('gender') || undefined,
      academicYearId: searchParams.get('academicYear') || undefined,
      sortBy: searchParams.get('sortBy') || 'first_name',
      sortOrder: searchParams.get('sortOrder') || 'asc',
    }

    const validationResult = studentListParamsSchema.safeParse(params)

    if (!validationResult.success) {
      return NextResponse.json(
        { error: 'Invalid parameters', details: validationResult.error.issues },
        { status: 400 }
      )
    }

    const validParams = validationResult.data

    // Get data scope for user's role
    const dataScope = getRoleDataScope(profile.role as UserRole)

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
        date_of_birth,
        gender,
        photo_url,
        status,
        is_active,
        section,
        roll_number,
        phone,
        email,
        current_address,
        created_at,
        classes:class_id (
          id,
          class_name,
          class_numeric
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
        // TODO: Implement class teacher relationship check
        // For now, fallback to school filter
        if (profile.school_id) {
          query = query.eq('school_id', profile.school_id)
        }
        break

      case DataScope.OWN_CHILDREN:
        // For parents - only their children
        // TODO: Implement parent-student relationship check
        // For now, return empty result
        query = query.eq('id', '00000000-0000-0000-0000-000000000000')
        break

      case DataScope.OWN_DATA:
        // For students - only themselves
        // This shouldn't reach here for student list, but handle it
        query = query.eq('id', user.id)
        break

      default:
        // Default to school filter if scope unknown
        if (profile.school_id) {
          query = query.eq('school_id', profile.school_id)
        }
    }

    // Apply search filter
    if (validParams.search) {
      const searchTerm = `%${validParams.search}%`
      query = query.or(
        `first_name.ilike.${searchTerm},last_name.ilike.${searchTerm},admission_number.ilike.${searchTerm},email.ilike.${searchTerm},phone.ilike.${searchTerm}`
      )
    }

    // Apply filters
    if (validParams.classId) {
      query = query.eq('class_id', validParams.classId)
    }

    if (validParams.section) {
      query = query.eq('section', validParams.section)
    }

    if (validParams.status) {
      query = query.eq('status', validParams.status)
    } else {
      // By default, only show active students
      query = query.eq('status', 'ACTIVE')
    }

    if (validParams.gender) {
      query = query.eq('gender', validParams.gender)
    }

    if (validParams.academicYearId) {
      query = query.eq('academic_year_id', validParams.academicYearId)
    }

    // Apply sorting
    query = query.order(validParams.sortBy, {
      ascending: validParams.sortOrder === 'asc',
    })

    // Apply pagination
    const from = (validParams.page - 1) * validParams.pageSize
    const to = from + validParams.pageSize - 1
    query = query.range(from, to)

    // Execute query
    const { data: students, error, count } = await query

    if (error) {
      console.error('[API Error] Students list:', error)
      return NextResponse.json(
        { error: 'Failed to fetch students' },
        { status: 500 }
      )
    }

    // Calculate pagination metadata
    const totalPages = count ? Math.ceil(count / validParams.pageSize) : 0
    const hasNextPage = validParams.page < totalPages
    const hasPreviousPage = validParams.page > 1

    // Return response
    return NextResponse.json({
      data: students || [],
      pagination: {
        page: validParams.page,
        pageSize: validParams.pageSize,
        total: count || 0,
        totalPages,
        hasNextPage,
        hasPreviousPage,
      },
      meta: {
        dataScope,
        filtersApplied: {
          search: !!validParams.search,
          classId: !!validParams.classId,
          section: !!validParams.section,
          status: !!validParams.status,
          gender: !!validParams.gender,
        },
      },
    })
  } catch (error) {
    console.error('[API Error] Students list:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

/**
 * POST /api/students
 * 
 * Create new student (admission)
 * Requires: students:create permission
 * 
 * TODO: Implement student creation
 */
export async function POST(request: NextRequest) {
  return NextResponse.json(
    { error: 'Not implemented yet' },
    { status: 501 }
  )
}
