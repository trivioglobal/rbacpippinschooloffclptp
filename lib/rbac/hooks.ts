/**
 * RBAC React Hooks
 * 
 * Custom hooks for permission checking and role-based UI rendering.
 * Use these hooks in your components for permission-based features.
 */

'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { UserRole, Module, Permission, DataScope, getRoleMetadata } from './roles'
import { hasPermission, getPermittedActions } from './checker'
import { getRoleDataScope, canAccessModule } from './permissions'
import type { UserProfile } from '@/types/supabase'
import React, { type ReactNode } from 'react'

/**
 * Hook to get current user's permissions
 * 
 * @example
 * ```tsx
 * const { hasPermission, userRole } = usePermissions()
 * 
 * if (hasPermission(Module.STUDENTS, Permission.CREATE)) {
 *   return <Button>Add Student</Button>
 * }
 * ```
 */
export function usePermissions() {
  const [userRole, setUserRole] = useState<UserRole | null>(null)
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchUserProfile()
  }, [])

  async function fetchUserProfile() {
    try {
      const response = await fetch('/api/auth/profile')
      if (response.ok) {
        const profile = await response.json()
        setUserProfile(profile)
        setUserRole(profile.role as UserRole)
      }
    } catch (error) {
      console.error('Failed to fetch user profile:', error)
    } finally {
      setLoading(false)
    }
  }

  return {
    userRole,
    userProfile,
    loading,
    hasPermission: (module: Module, action: Permission) => {
      if (!userRole) return false
      return hasPermission(userRole, module, action)
    },
    canAccessModule: (module: Module) => {
      if (!userRole) return false
      return canAccessModule(userRole, module)
    },
    getPermittedActions: (module: Module) => {
      if (!userRole) return []
      return getPermittedActions(userRole, module)
    },
    getRoleMetadata: () => {
      if (!userRole) return null
      return getRoleMetadata(userRole)
    },
    getDataScope: () => {
      if (!userRole) return DataScope.OWN_DATA
      return getRoleDataScope(userRole)
    },
    isAdmin: () => {
      if (!userRole) return false
      return [
        UserRole.SUPER_ADMIN,
        UserRole.PRINCIPAL,
        UserRole.VICE_PRINCIPAL,
        UserRole.ADMIN_MANAGER,
        UserRole.FINANCE_MANAGER,
      ].includes(userRole)
    },
    isTeacher: () => {
      if (!userRole) return false
      return [UserRole.TEACHER, UserRole.CLASS_TEACHER].includes(userRole)
    },
    isParent: () => userRole === UserRole.PARENT,
    isStudent: () => userRole === UserRole.STUDENT,
  }
}

/**
 * Hook to get current user's role
 * 
 * @example
 * ```tsx
 * const { role, isAdmin, isTeacher } = useRole()
 * ```
 */
export function useRole() {
  const { userRole, loading, isAdmin, isTeacher, isParent, isStudent, getRoleMetadata } = usePermissions()

  return {
    role: userRole,
    loading,
    isAdmin: isAdmin(),
    isTeacher: isTeacher(),
    isParent: isParent(),
    isStudent: isStudent(),
    metadata: getRoleMetadata(),
  }
}

/**
 * Hook to require specific role (redirects if not authorized)
 * 
 * @example
 * ```tsx
 * // In a page component
 * useRequireRole([UserRole.PRINCIPAL, UserRole.ADMIN_MANAGER])
 * ```
 */
export function useRequireRole(allowedRoles: UserRole[]) {
  const { userRole, loading } = usePermissions()
  const router = useRouter()

  useEffect(() => {
    if (!loading && userRole && !allowedRoles.includes(userRole)) {
      // Redirect to unauthorized page or dashboard
      router.push('/unauthorized')
    }
  }, [userRole, loading, allowedRoles, router])

  return { userRole, loading }
}

/**
 * Hook to require specific permission (redirects if not authorized)
 * 
 * @example
 * ```tsx
 * // In a page component
 * useRequirePermission(Module.STUDENTS, Permission.CREATE)
 * ```
 */
export function useRequirePermission(module: Module, permission: Permission) {
  const { userRole, loading, hasPermission } = usePermissions()
  const router = useRouter()

  useEffect(() => {
    if (!loading && userRole && !hasPermission(module, permission)) {
      router.push('/unauthorized')
    }
  }, [userRole, loading, module, permission, hasPermission, router])

  return { hasAccess: hasPermission(module, permission), loading }
}

/**
 * Permission-based component wrapper
 * 
 * @example
 * ```tsx
 * <PermissionGate module={Module.STUDENTS} action={Permission.CREATE}>
 *   <Button>Add Student</Button>
 * </PermissionGate>
 * ```
 */
export function PermissionGate({
  module,
  action,
  fallback = null,
  children,
}: {
  module: Module
  action: Permission
  fallback?: ReactNode
  children: ReactNode
}) {
  const { hasPermission: checkPermission } = usePermissions()

  if (!checkPermission(module, action)) {
    return fallback
  }

  return children
}

/**
 * Role-based component wrapper
 * 
 * @example
 * ```tsx
 * <RoleGate allowedRoles={[UserRole.PRINCIPAL, UserRole.ADMIN_MANAGER]}>
 *   <AdminPanel />
 * </RoleGate>
 * ```
 */
export function RoleGate({
  allowedRoles,
  fallback = null,
  children,
}: {
  allowedRoles: UserRole[]
  fallback?: ReactNode
  children: ReactNode
}) {
  const { userRole } = usePermissions()

  if (!userRole || !allowedRoles.includes(userRole)) {
    return fallback
  }

  return children
}

/**
 * Hook to check if user can access a specific student
 * Useful for student detail pages
 */
export function useCanAccessStudent(studentId: string) {
  const [canAccess, setCanAccess] = useState(false)
  const [loading, setLoading] = useState(true)
  const { userRole } = usePermissions()

  useEffect(() => {
    if (!userRole) {
      setLoading(false)
      return
    }

    checkStudentAccess()
  }, [studentId, userRole])

  async function checkStudentAccess() {
    try {
      const response = await fetch(`/api/students/${studentId}/check-access`)
      if (response.ok) {
        const { canAccess } = await response.json()
        setCanAccess(canAccess)
      }
    } catch (error) {
      console.error('Failed to check student access:', error)
      setCanAccess(false)
    } finally {
      setLoading(false)
    }
  }

  return { canAccess, loading }
}

/**
 * Hook to filter data based on user's data scope
 * 
 * @example
 * ```tsx
 * const { filterData } = useDataScopeFilter()
 * const visibleStudents = filterData(allStudents)
 * ```
 */
export function useDataScopeFilter() {
  const { userRole, userProfile } = usePermissions()

  return {
    filterData: <T extends Record<string, any>>(data: T[]): T[] => {
      if (!userRole || !userProfile) return []

      const dataScope = getRoleDataScope(userRole)

      switch (dataScope) {
        case DataScope.ALL_SCHOOLS:
          return data

        case DataScope.SCHOOL_WIDE:
          return data.filter(item => item.school_id === userProfile.school_id)

        case DataScope.CLASS_WIDE:
          // TODO: Filter by assigned classes (needs class context)
          return data.filter(item => item.school_id === userProfile.school_id)

        case DataScope.OWN_CHILDREN:
          // TODO: Filter by children IDs (needs parent-child relationship)
          return data.filter(item => item.school_id === userProfile.school_id)

        case DataScope.OWN_DATA:
          return data.filter(item => 
            item.id === userProfile.student_id ||
            item.id === userProfile.staff_id ||
            item.user_id === userProfile.id
          )

        default:
          return []
      }
    },
  }
}
