/**
 * Permission Checker
 * 
 * Core permission checking logic that combines role permissions
 * and data scope filtering.
 */

import { UserRole, Module, Permission } from './roles'
import { hasPermission as checkRolePermission, getSpecialPermissions } from './permissions'
import { getDataScopeFilter, canAccessResource, type UserContext } from './data-scope'

/**
 * Permission check context
 */
export interface PermissionContext {
  module: Module
  action: Permission
  resourceId?: string
  resourceData?: Record<string, any>
  additionalContext?: Record<string, any>
}

/**
 * Permission check result
 */
export interface PermissionCheckResult {
  granted: boolean
  reason?: string
  requiresApproval?: boolean
  approvalLevel?: number
}

/**
 * Main permission checker function
 * Checks if user has permission to perform action on resource
 */
export async function checkPermission(
  userContext: UserContext,
  context: PermissionContext
): Promise<PermissionCheckResult> {
  const { module, action, resourceData } = context

  // Step 1: Check if role has permission for this action
  const hasRolePermission = checkRolePermission(
    userContext.role,
    module,
    action
  )

  if (!hasRolePermission) {
    return {
      granted: false,
      reason: 'Role does not have permission for this action',
    }
  }

  // Step 2: If resource data provided, check data scope
  if (resourceData) {
    const canAccess = await canAccessResource(
      userContext,
      module,
      resourceData
    )

    if (!canAccess) {
      return {
        granted: false,
        reason: 'Resource is outside user\'s data scope',
      }
    }
  }

  // Step 3: Check special conditions
  const specialCheck = await checkSpecialConditions(
    userContext,
    context
  )

  if (!specialCheck.granted) {
    return specialCheck
  }

  // Step 4: Check if approval is required
  const approvalCheck = checkApprovalRequirement(
    userContext,
    context
  )

  return {
    granted: true,
    requiresApproval: approvalCheck.requiresApproval,
    approvalLevel: approvalCheck.approvalLevel,
  }
}

/**
 * Check special conditions based on context
 * Examples: Time-based, status-based, workflow-based conditions
 */
async function checkSpecialConditions(
  userContext: UserContext,
  context: PermissionContext
): Promise<PermissionCheckResult> {
  const { module, action, resourceData, additionalContext } = context

  // Example: Teachers can only enter marks before deadline
  if (
    module === Module.EXAMINATIONS &&
    action === Permission.UPDATE &&
    userContext.role === UserRole.TEACHER
  ) {
    // Check if mark entry deadline has passed
    const deadline = additionalContext?.markEntryDeadline
    if (deadline && new Date() > new Date(deadline)) {
      return {
        granted: false,
        reason: 'Mark entry deadline has passed. Request approval from Exam Head.',
        requiresApproval: true,
        approvalLevel: 1,
      }
    }
  }

  // Example: Cannot edit published results without approval
  if (
    module === Module.EXAMINATIONS &&
    action === Permission.UPDATE &&
    resourceData?.is_published === true &&
    ![UserRole.PRINCIPAL, UserRole.SUPER_ADMIN].includes(userContext.role)
  ) {
    return {
      granted: false,
      reason: 'Cannot edit published results. Requires Principal approval.',
      requiresApproval: true,
      approvalLevel: 1,
    }
  }

  // Example: Cannot modify paid fee records
  if (
    module === Module.FEES &&
    action === Permission.UPDATE &&
    resourceData?.payment_status === 'PAID' &&
    ![UserRole.PRINCIPAL, UserRole.SUPER_ADMIN, UserRole.FINANCE_MANAGER].includes(userContext.role)
  ) {
    return {
      granted: false,
      reason: 'Cannot modify paid fee records.',
    }
  }

  return { granted: true }
}

/**
 * Check if action requires approval
 */
function checkApprovalRequirement(
  userContext: UserContext,
  context: PermissionContext
): { requiresApproval: boolean; approvalLevel?: number } {
  const { module, action, additionalContext } = context

  // Fee waiver requires approval based on amount
  if (module === Module.FEES && action === Permission.WAIVE) {
    const amount = additionalContext?.amount || 0

    if (userContext.role === UserRole.VICE_PRINCIPAL && amount > 5000) {
      return { requiresApproval: true, approvalLevel: 1 } // Principal
    }

    if (userContext.role === UserRole.FINANCE_MANAGER && amount > 10000) {
      return { requiresApproval: true, approvalLevel: 1 } // Principal
    }

    if (amount > 25000) {
      return { requiresApproval: true, approvalLevel: 2 } // Fee Committee
    }
  }

  // Student deletion requires approval
  if (module === Module.STUDENTS && action === Permission.DELETE) {
    if (userContext.role !== UserRole.PRINCIPAL && userContext.role !== UserRole.SUPER_ADMIN) {
      return { requiresApproval: true, approvalLevel: 1 }
    }
  }

  // Mark correction after deadline requires approval
  if (
    module === Module.EXAMINATIONS &&
    action === Permission.UPDATE &&
    additionalContext?.afterDeadline === true &&
    userContext.role === UserRole.TEACHER
  ) {
    return { requiresApproval: true, approvalLevel: 1 } // Exam Head
  }

  return { requiresApproval: false }
}

/**
 * Quick permission check (without resource data)
 * Use for UI visibility decisions
 */
export function hasPermission(
  userRole: UserRole,
  module: Module,
  action: Permission
): boolean {
  return checkRolePermission(userRole, module, action)
}

/**
 * Batch permission check for multiple actions
 * Useful for checking multiple permissions at once
 */
export function hasAnyPermission(
  userRole: UserRole,
  module: Module,
  actions: Permission[]
): boolean {
  return actions.some(action => checkRolePermission(userRole, module, action))
}

/**
 * Check if user has all specified permissions
 */
export function hasAllPermissions(
  userRole: UserRole,
  module: Module,
  actions: Permission[]
): boolean {
  return actions.every(action => checkRolePermission(userRole, module, action))
}

/**
 * Get list of permitted actions for a role in a module
 */
export function getPermittedActions(
  userRole: UserRole,
  module: Module
): Permission[] {
  const permissions: Permission[] = []

  for (const action of Object.values(Permission)) {
    if (checkRolePermission(userRole, module, action)) {
      permissions.push(action)
    }
  }

  return permissions
}

/**
 * Check if user has special permission
 */
export function hasSpecialPermission(
  userRole: UserRole,
  permission: string
): boolean {
  const specialPerms = getSpecialPermissions(userRole)
  return specialPerms.includes(permission)
}

/**
 * Error class for permission denied
 */
export class PermissionDeniedError extends Error {
  constructor(
    public reason: string,
    public module: string,
    public action: string
  ) {
    super(`Permission denied: ${reason}`)
    this.name = 'PermissionDeniedError'
  }
}

/**
 * Require permission or throw error
 * Use in API routes for enforcement
 */
export async function requirePermission(
  userContext: UserContext,
  context: PermissionContext
): Promise<void> {
  const result = await checkPermission(userContext, context)

  if (!result.granted) {
    throw new PermissionDeniedError(
      result.reason || 'Permission denied',
      context.module,
      context.action
    )
  }

  if (result.requiresApproval) {
    throw new PermissionDeniedError(
      'This action requires approval',
      context.module,
      context.action
    )
  }
}
