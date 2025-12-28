/**
 * Data Scope Filtering
 * 
 * Implements data scope filtering based on user role and context.
 * Ensures users only see data they're authorized to access.
 */

import { UserRole, DataScope } from './roles'
import { getRoleDataScope } from './permissions'
import type { UserProfile } from '@/types/supabase'

/**
 * User Context for Data Scope Filtering
 */
export interface UserContext {
  userId: string
  role: UserRole
  schoolId: string | null
  studentId?: string | null
  staffId?: string | null
  parentId?: string | null
  classIds?: string[]
  sectionIds?: string[]
  subjectIds?: string[]
  childrenIds?: string[]
}

/**
 * Data Scope Filter Result
 */
export interface DataScopeFilter {
  scope: DataScope
  schoolId?: string | null
  classIds?: string[]
  sectionIds?: string[]
  subjectIds?: string[]
  studentIds?: string[]
  staffIds?: string[]
  userId?: string
}

/**
 * Get data scope filter for a user and module
 */
export async function getDataScopeFilter(
  userContext: UserContext,
  module: string
): Promise<DataScopeFilter> {
  const baseScope = getRoleDataScope(userContext.role)

  const filter: DataScopeFilter = {
    scope: baseScope,
  }

  // Apply scope based on role
  switch (baseScope) {
    case DataScope.ALL_SCHOOLS:
      // Super Admin - no filtering
      break

    case DataScope.SCHOOL_WIDE:
      // Filter by school
      filter.schoolId = userContext.schoolId
      break

    case DataScope.CLASS_WIDE:
      // Filter by assigned classes
      filter.schoolId = userContext.schoolId
      filter.classIds = userContext.classIds || []
      filter.sectionIds = userContext.sectionIds || []
      break

    case DataScope.OWN_SUBJECTS:
      // Filter by subjects taught
      filter.schoolId = userContext.schoolId
      filter.subjectIds = userContext.subjectIds || []
      // Also need to filter by classes where they teach these subjects
      filter.classIds = userContext.classIds || []
      break

    case DataScope.OWN_CHILDREN:
      // Filter by parent's children
      filter.schoolId = userContext.schoolId
      filter.studentIds = userContext.childrenIds || []
      break

    case DataScope.OWN_DATA:
      // Filter to user's own data
      filter.schoolId = userContext.schoolId
      filter.userId = userContext.userId
      
      // Depending on user type
      if (userContext.studentId) {
        filter.studentIds = [userContext.studentId]
      }
      if (userContext.staffId) {
        filter.staffIds = [userContext.staffId]
      }
      break

    default:
      // Default to own data only
      filter.schoolId = userContext.schoolId
      filter.userId = userContext.userId
  }

  return filter
}

/**
 * Check if user can access specific resource based on data scope
 */
export async function canAccessResource(
  userContext: UserContext,
  resourceType: string,
  resourceData: Record<string, any>
): Promise<boolean> {
  const filter = await getDataScopeFilter(userContext, resourceType)

  // Check school scope
  if (filter.schoolId && resourceData.school_id !== filter.schoolId) {
    return false
  }

  // Check class scope
  if (filter.classIds && filter.classIds.length > 0) {
    if (!resourceData.class_id || !filter.classIds.includes(resourceData.class_id)) {
      return false
    }
  }

  // Check section scope
  if (filter.sectionIds && filter.sectionIds.length > 0) {
    if (!resourceData.section_id || !filter.sectionIds.includes(resourceData.section_id)) {
      return false
    }
  }

  // Check student scope (for parent/student)
  if (filter.studentIds && filter.studentIds.length > 0) {
    const studentId = resourceData.student_id || resourceData.id
    if (!studentId || !filter.studentIds.includes(studentId)) {
      return false
    }
  }

  // Check user scope (own data)
  if (filter.userId) {
    // Check if resource belongs to user
    if (resourceData.user_id !== filter.userId && 
        resourceData.created_by !== filter.userId &&
        resourceData.student_id !== userContext.studentId &&
        resourceData.staff_id !== userContext.staffId &&
        resourceData.parent_id !== userContext.parentId) {
      return false
    }
  }

  return true
}

/**
 * Build SQL WHERE clause for data scope filtering
 * Used in Supabase queries
 */
export function buildScopeWhereClause(filter: DataScopeFilter): Record<string, any> {
  const where: Record<string, any> = {}

  if (filter.schoolId) {
    where.school_id = filter.schoolId
  }

  if (filter.classIds && filter.classIds.length > 0) {
    where.class_id = { in: filter.classIds }
  }

  if (filter.sectionIds && filter.sectionIds.length > 0) {
    where.section_id = { in: filter.sectionIds }
  }

  if (filter.studentIds && filter.studentIds.length > 0) {
    where.id = { in: filter.studentIds }
  }

  if (filter.staffIds && filter.staffIds.length > 0) {
    where.staff_id = { in: filter.staffIds }
  }

  return where
}

/**
 * Get user context from user profile
 * Fetches all necessary context data for permission checking
 */
export async function getUserContext(
  userId: string,
  profile: UserProfile
): Promise<UserContext> {
  const context: UserContext = {
    userId,
    role: profile.role as UserRole,
    schoolId: profile.school_id,
    studentId: profile.student_id,
    staffId: profile.staff_id,
    parentId: profile.parent_id,
  }

  // TODO: Fetch additional context data based on role
  // For CLASS_TEACHER: Fetch assigned classes
  // For TEACHER: Fetch subjects and classes taught
  // For PARENT: Fetch children IDs
  // This will be implemented in the services layer

  return context
}

/**
 * Mask sensitive fields based on role permissions
 */
export function maskSensitiveFields<T extends Record<string, any>>(
  data: T,
  userRole: UserRole,
  module: string
): Partial<T> {
  const masked = { ...data }

  // Mask contact info if no permission
  if (!hasPermission(userRole, module, 'view_contact_info')) {
    delete masked.phone
    delete masked.email
    delete masked.address_line1
    delete masked.address_line2
    delete masked.city
    delete masked.state
    delete masked.postal_code
    delete masked.primary_phone
    delete masked.secondary_phone
    delete masked.whatsapp_number
  }

  // Mask financial info if no permission
  if (!hasPermission(userRole, module, 'view_financial_info')) {
    delete masked.annual_income
    delete masked.fee_amount
    delete masked.outstanding_amount
    delete masked.total_paid
    delete masked.basic_salary
    delete masked.salary
  }

  // Mask medical info if no permission
  if (!hasPermission(userRole, module, 'view_medical_info')) {
    delete masked.blood_group
    delete masked.medical_conditions
    delete masked.allergies
    delete masked.chronic_conditions
    delete masked.medications
    delete masked.health_profile
  }

  return masked
}

// Import hasPermission for masking (avoid circular dependency by using dynamic import if needed)
function hasPermission(role: UserRole, module: string, permission: string): boolean {
  // This is a simplified version - actual implementation should use the full permission checker
  const adminRoles = ['SUPER_ADMIN', 'PRINCIPAL', 'VICE_PRINCIPAL']
  const medicalRoles = ['MEDICAL_STAFF', 'PRINCIPAL', 'VICE_PRINCIPAL']
  const financialRoles = ['FINANCE_MANAGER', 'ACCOUNTANT', 'PRINCIPAL']

  if (permission === 'view_contact_info') {
    return !['STUDENT', 'RECEPTIONIST', 'LAB_ASSISTANT'].includes(role)
  }

  if (permission === 'view_financial_info') {
    return financialRoles.includes(role)
  }

  if (permission === 'view_medical_info') {
    return medicalRoles.includes(role) || role === 'PARENT'
  }

  return false
}
