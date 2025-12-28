/**
 * RBAC Permission Matrix
 * 
 * Defines what each role can do in each module.
 * Based on RBAC_PERMISSIONS_SPECIFICATION-2025-12-26.md
 */

import { UserRole, Module, Permission, DataScope } from './roles'

/**
 * Permission check result type
 */
export type PermissionLevel = 
  | 'FULL_CONTROL'      // Complete CRUD + special operations
  | 'EDIT_ALL'          // Can edit all records in scope
  | 'EDIT_OWN'          // Can edit own records only
  | 'CREATE_ONLY'       // Can create new records
  | 'VIEW_ONLY'         // Read-only access
  | 'NO_ACCESS'         // No access

/**
 * Module Permission Map
 */
export type ModulePermissions = {
  [key in Module]?: {
    [key in Permission]?: boolean
  }
}

/**
 * Role Permission Configuration
 */
export type RolePermissionConfig = {
  permissions: ModulePermissions
  dataScope: DataScope
  specialPermissions?: string[]
}

/**
 * Complete Permission Matrix
 * Defines exact permissions for each role in each module
 */
export const PERMISSIONS_MATRIX: Record<UserRole, RolePermissionConfig> = {
  // ============================================================================
  // LEVEL 0: SYSTEM LEVEL
  // ============================================================================
  [UserRole.SUPER_ADMIN]: {
    dataScope: DataScope.ALL_SCHOOLS,
    permissions: {
      // Full access to all modules
      [Module.STUDENTS]: Object.fromEntries(
        Object.values(Permission).map(p => [p, true])
      ),
      [Module.STAFF]: Object.fromEntries(
        Object.values(Permission).map(p => [p, true])
      ),
      [Module.FEES]: Object.fromEntries(
        Object.values(Permission).map(p => [p, true])
      ),
      [Module.EXAMINATIONS]: Object.fromEntries(
        Object.values(Permission).map(p => [p, true])
      ),
      [Module.ATTENDANCE]: Object.fromEntries(
        Object.values(Permission).map(p => [p, true])
      ),
      [Module.LIBRARY]: Object.fromEntries(
        Object.values(Permission).map(p => [p, true])
      ),
      [Module.TRANSPORT]: Object.fromEntries(
        Object.values(Permission).map(p => [p, true])
      ),
      [Module.HOSTEL]: Object.fromEntries(
        Object.values(Permission).map(p => [p, true])
      ),
      [Module.HEALTH]: Object.fromEntries(
        Object.values(Permission).map(p => [p, true])
      ),
      [Module.COMMUNICATION]: Object.fromEntries(
        Object.values(Permission).map(p => [p, true])
      ),
      [Module.HOMEWORK]: Object.fromEntries(
        Object.values(Permission).map(p => [p, true])
      ),
      [Module.EVENTS]: Object.fromEntries(
        Object.values(Permission).map(p => [p, true])
      ),
      [Module.REPORTS]: Object.fromEntries(
        Object.values(Permission).map(p => [p, true])
      ),
      [Module.SETTINGS]: Object.fromEntries(
        Object.values(Permission).map(p => [p, true])
      ),
    },
    specialPermissions: ['BYPASS_RLS', 'VIEW_AUDIT_LOGS', 'SYSTEM_CONFIG'],
  },

  // ============================================================================
  // LEVEL 1: SCHOOL LEADERSHIP
  // ============================================================================
  [UserRole.PRINCIPAL]: {
    dataScope: DataScope.SCHOOL_WIDE,
    permissions: {
      [Module.STUDENTS]: {
        [Permission.CREATE]: true,
        [Permission.READ]: true,
        [Permission.UPDATE]: true,
        [Permission.DELETE]: true,
        [Permission.EXPORT]: true,
        [Permission.IMPORT]: true,
        [Permission.APPROVE]: true,
        [Permission.VIEW_CONTACT_INFO]: true,
        [Permission.VIEW_FINANCIAL_INFO]: true,
        [Permission.VIEW_MEDICAL_INFO]: true,
        [Permission.VIEW_ACADEMIC_INFO]: true,
        [Permission.OVERRIDE]: true,
      },
      [Module.STAFF]: {
        [Permission.CREATE]: true,
        [Permission.READ]: true,
        [Permission.UPDATE]: true,
        [Permission.DELETE]: true,
        [Permission.APPROVE]: true,
        [Permission.VIEW_FINANCIAL_INFO]: true,
        [Permission.EXPORT]: true,
      },
      [Module.FEES]: {
        [Permission.CREATE]: true,
        [Permission.READ]: true,
        [Permission.UPDATE]: true,
        [Permission.APPROVE]: true,
        [Permission.WAIVE]: true,
        [Permission.REFUND]: true,
        [Permission.ADJUST]: true,
        [Permission.PROCESS_PAYMENT]: true,
        [Permission.VIEW_FINANCIAL_INFO]: true,
        [Permission.EXPORT]: true,
        [Permission.OVERRIDE]: true,
      },
      [Module.EXAMINATIONS]: {
        [Permission.CREATE]: true,
        [Permission.READ]: true,
        [Permission.UPDATE]: true,
        [Permission.DELETE]: true,
        [Permission.APPROVE]: true,
        [Permission.PUBLISH]: true,
        [Permission.EXPORT]: true,
        [Permission.OVERRIDE]: true,
      },
      [Module.ATTENDANCE]: {
        [Permission.READ]: true,
        [Permission.UPDATE]: true,
        [Permission.APPROVE]: true,
        [Permission.EXPORT]: true,
        [Permission.OVERRIDE]: true,
      },
      [Module.LIBRARY]: {
        [Permission.READ]: true,
        [Permission.APPROVE]: true,
        [Permission.WAIVE]: true,
        [Permission.EXPORT]: true,
      },
      [Module.TRANSPORT]: {
        [Permission.READ]: true,
        [Permission.APPROVE]: true,
        [Permission.EXPORT]: true,
      },
      [Module.HOSTEL]: {
        [Permission.READ]: true,
        [Permission.APPROVE]: true,
        [Permission.EXPORT]: true,
      },
      [Module.HEALTH]: {
        [Permission.READ]: true,
        [Permission.APPROVE]: true,
        [Permission.VIEW_MEDICAL_INFO]: true,
      },
      [Module.COMMUNICATION]: {
        [Permission.CREATE]: true,
        [Permission.READ]: true,
        [Permission.PUBLISH]: true,
        [Permission.APPROVE]: true,
      },
      [Module.HOMEWORK]: {
        [Permission.READ]: true,
        [Permission.APPROVE]: true,
      },
      [Module.EVENTS]: {
        [Permission.CREATE]: true,
        [Permission.READ]: true,
        [Permission.UPDATE]: true,
        [Permission.DELETE]: true,
        [Permission.APPROVE]: true,
      },
      [Module.REPORTS]: {
        [Permission.READ]: true,
        [Permission.EXPORT]: true,
        [Permission.CONFIGURE]: true,
      },
      [Module.SETTINGS]: {
        [Permission.READ]: true,
        [Permission.UPDATE]: true,
        [Permission.CONFIGURE]: true,
      },
    },
    specialPermissions: ['APPROVE_ALL_WORKFLOWS', 'EMERGENCY_OVERRIDE'],
  },

  // ============================================================================
  // LEVEL 2: SENIOR MANAGEMENT
  // ============================================================================
  [UserRole.VICE_PRINCIPAL]: {
    dataScope: DataScope.SCHOOL_WIDE,
    permissions: {
      [Module.STUDENTS]: {
        [Permission.CREATE]: true,
        [Permission.READ]: true,
        [Permission.UPDATE]: true,
        [Permission.EXPORT]: true,
        [Permission.IMPORT]: true,
        [Permission.VIEW_CONTACT_INFO]: true,
        [Permission.VIEW_ACADEMIC_INFO]: true,
      },
      [Module.STAFF]: {
        [Permission.READ]: true,
        [Permission.UPDATE]: true,
        [Permission.APPROVE]: true,
      },
      [Module.FEES]: {
        [Permission.READ]: true,
        [Permission.VIEW_FINANCIAL_INFO]: true,
        [Permission.WAIVE]: true, // Up to ₹5000
        [Permission.APPROVE]: true,
      },
      [Module.EXAMINATIONS]: {
        [Permission.CREATE]: true,
        [Permission.READ]: true,
        [Permission.UPDATE]: true,
        [Permission.APPROVE]: true,
        [Permission.EXPORT]: true,
      },
      [Module.ATTENDANCE]: {
        [Permission.READ]: true,
        [Permission.UPDATE]: true,
        [Permission.APPROVE]: true,
        [Permission.EXPORT]: true,
      },
      [Module.LIBRARY]: {
        [Permission.READ]: true,
        [Permission.EXPORT]: true,
      },
      [Module.TRANSPORT]: {
        [Permission.READ]: true,
        [Permission.EXPORT]: true,
      },
      [Module.HOSTEL]: {
        [Permission.READ]: true,
        [Permission.EXPORT]: true,
      },
      [Module.HEALTH]: {
        [Permission.READ]: true,
        [Permission.VIEW_MEDICAL_INFO]: true,
      },
      [Module.COMMUNICATION]: {
        [Permission.CREATE]: true,
        [Permission.READ]: true,
        [Permission.PUBLISH]: true,
      },
      [Module.HOMEWORK]: {
        [Permission.READ]: true,
      },
      [Module.EVENTS]: {
        [Permission.CREATE]: true,
        [Permission.READ]: true,
        [Permission.UPDATE]: true,
        [Permission.APPROVE]: true,
      },
      [Module.REPORTS]: {
        [Permission.READ]: true,
        [Permission.EXPORT]: true,
      },
      [Module.SETTINGS]: {
        [Permission.READ]: true,
      },
    },
    specialPermissions: ['APPROVE_LEAVE_UP_TO_10_DAYS', 'APPROVE_EXPENSES_UP_TO_50000'],
  },

  [UserRole.ADMIN_MANAGER]: {
    dataScope: DataScope.SCHOOL_WIDE,
    permissions: {
      [Module.STUDENTS]: {
        [Permission.CREATE]: true,
        [Permission.READ]: true,
        [Permission.UPDATE]: true,
        [Permission.EXPORT]: true,
        [Permission.IMPORT]: true,
        [Permission.VIEW_CONTACT_INFO]: true,
        [Permission.VIEW_ACADEMIC_INFO]: true,
      },
      [Module.STAFF]: {
        [Permission.READ]: true,
      },
      [Module.FEES]: {
        [Permission.READ]: true,
      },
      [Module.EXAMINATIONS]: {
        [Permission.READ]: true,
      },
      [Module.ATTENDANCE]: {
        [Permission.READ]: true,
        [Permission.UPDATE]: true,
        [Permission.EXPORT]: true,
      },
      [Module.COMMUNICATION]: {
        [Permission.CREATE]: true,
        [Permission.READ]: true,
      },
      [Module.REPORTS]: {
        [Permission.READ]: true,
        [Permission.EXPORT]: true,
      },
      [Module.SETTINGS]: {
        [Permission.READ]: true,
      },
    },
  },

  [UserRole.FINANCE_MANAGER]: {
    dataScope: DataScope.SCHOOL_WIDE,
    permissions: {
      [Module.STUDENTS]: {
        [Permission.READ]: true,
        [Permission.VIEW_CONTACT_INFO]: true,
        [Permission.VIEW_FINANCIAL_INFO]: true,
      },
      [Module.STAFF]: {
        [Permission.READ]: true,
        [Permission.VIEW_FINANCIAL_INFO]: true, // Payroll
      },
      [Module.FEES]: {
        [Permission.CREATE]: true,
        [Permission.READ]: true,
        [Permission.UPDATE]: true,
        [Permission.APPROVE]: true,
        [Permission.WAIVE]: true,
        [Permission.REFUND]: true,
        [Permission.ADJUST]: true,
        [Permission.PROCESS_PAYMENT]: true,
        [Permission.VIEW_FINANCIAL_INFO]: true,
        [Permission.EXPORT]: true,
      },
      [Module.REPORTS]: {
        [Permission.READ]: true,
        [Permission.EXPORT]: true,
      },
      [Module.SETTINGS]: {
        [Permission.READ]: true,
      },
    },
    specialPermissions: ['PROCESS_PAYROLL', 'FINANCIAL_REPORTS'],
  },

  // ============================================================================
  // LEVEL 3: DEPARTMENT HEADS
  // ============================================================================
  [UserRole.EXAM_HEAD]: {
    dataScope: DataScope.SCHOOL_WIDE,
    permissions: {
      [Module.STUDENTS]: {
        [Permission.READ]: true,
        [Permission.VIEW_ACADEMIC_INFO]: true,
      },
      [Module.EXAMINATIONS]: {
        [Permission.CREATE]: true,
        [Permission.READ]: true,
        [Permission.UPDATE]: true,
        [Permission.DELETE]: true,
        [Permission.APPROVE]: true,
        [Permission.PUBLISH]: true,
        [Permission.EXPORT]: true,
        [Permission.OVERRIDE]: true,
      },
      [Module.REPORTS]: {
        [Permission.READ]: true,
        [Permission.EXPORT]: true,
      },
    },
    specialPermissions: ['OVERRIDE_MARKS', 'PUBLISH_RESULTS'],
  },

  [UserRole.LIBRARIAN]: {
    dataScope: DataScope.SCHOOL_WIDE,
    permissions: {
      [Module.STUDENTS]: {
        [Permission.READ]: true,
      },
      [Module.LIBRARY]: {
        [Permission.CREATE]: true,
        [Permission.READ]: true,
        [Permission.UPDATE]: true,
        [Permission.DELETE]: true,
        [Permission.EXPORT]: true,
        [Permission.WAIVE]: true, // Up to ₹100
      },
      [Module.REPORTS]: {
        [Permission.READ]: true,
        [Permission.EXPORT]: true,
      },
    },
    specialPermissions: ['WAIVE_FINE_UP_TO_100'],
  },

  [UserRole.TRANSPORT_MANAGER]: {
    dataScope: DataScope.SCHOOL_WIDE,
    permissions: {
      [Module.STUDENTS]: {
        [Permission.READ]: true,
        [Permission.VIEW_CONTACT_INFO]: true,
      },
      [Module.TRANSPORT]: {
        [Permission.CREATE]: true,
        [Permission.READ]: true,
        [Permission.UPDATE]: true,
        [Permission.DELETE]: true,
        [Permission.EXPORT]: true,
      },
      [Module.REPORTS]: {
        [Permission.READ]: true,
        [Permission.EXPORT]: true,
      },
    },
  },

  [UserRole.HOSTEL_WARDEN]: {
    dataScope: DataScope.SCHOOL_WIDE,
    permissions: {
      [Module.STUDENTS]: {
        [Permission.READ]: true,
        [Permission.VIEW_CONTACT_INFO]: true,
        [Permission.VIEW_MEDICAL_INFO]: true,
      },
      [Module.HOSTEL]: {
        [Permission.CREATE]: true,
        [Permission.READ]: true,
        [Permission.UPDATE]: true,
        [Permission.DELETE]: true,
        [Permission.EXPORT]: true,
      },
      [Module.REPORTS]: {
        [Permission.READ]: true,
        [Permission.EXPORT]: true,
      },
    },
  },

  // ============================================================================
  // LEVEL 4: STAFF & FACULTY
  // ============================================================================
  [UserRole.CLASS_TEACHER]: {
    dataScope: DataScope.CLASS_WIDE,
    permissions: {
      [Module.STUDENTS]: {
        [Permission.READ]: true,
        [Permission.UPDATE]: true, // Conduct remarks only
        [Permission.VIEW_CONTACT_INFO]: true,
        [Permission.VIEW_ACADEMIC_INFO]: true,
        [Permission.EXPORT]: true,
      },
      [Module.FEES]: {
        [Permission.READ]: true, // Class students only
      },
      [Module.EXAMINATIONS]: {
        [Permission.READ]: true,
        [Permission.UPDATE]: true, // Own subjects
        [Permission.EXPORT]: true,
      },
      [Module.ATTENDANCE]: {
        [Permission.READ]: true,
        [Permission.UPDATE]: true,
        [Permission.EXPORT]: true,
      },
      [Module.HOMEWORK]: {
        [Permission.CREATE]: true,
        [Permission.READ]: true,
        [Permission.UPDATE]: true,
        [Permission.EXPORT]: true,
      },
      [Module.COMMUNICATION]: {
        [Permission.CREATE]: true,
        [Permission.READ]: true,
      },
      [Module.REPORTS]: {
        [Permission.READ]: true,
        [Permission.EXPORT]: true,
      },
    },
    specialPermissions: ['APPROVE_LEAVE_UP_TO_3_DAYS', 'BULK_PARENT_COMMUNICATION'],
  },

  [UserRole.TEACHER]: {
    dataScope: DataScope.OWN_SUBJECTS,
    permissions: {
      [Module.STUDENTS]: {
        [Permission.READ]: true,
        [Permission.VIEW_ACADEMIC_INFO]: true,
      },
      [Module.EXAMINATIONS]: {
        [Permission.READ]: true,
        [Permission.UPDATE]: true, // Mark entry only
      },
      [Module.ATTENDANCE]: {
        [Permission.READ]: true,
        [Permission.UPDATE]: true, // Own classes only
      },
      [Module.HOMEWORK]: {
        [Permission.CREATE]: true,
        [Permission.READ]: true,
        [Permission.UPDATE]: true,
      },
      [Module.COMMUNICATION]: {
        [Permission.CREATE]: true,
        [Permission.READ]: true,
      },
      [Module.LIBRARY]: {
        [Permission.READ]: true, // Self
      },
      [Module.REPORTS]: {
        [Permission.READ]: true,
      },
    },
    specialPermissions: ['MARK_ENTRY_OWN_SUBJECTS'],
  },

  [UserRole.ACCOUNTANT]: {
    dataScope: DataScope.SCHOOL_WIDE,
    permissions: {
      [Module.STUDENTS]: {
        [Permission.READ]: true,
        [Permission.VIEW_CONTACT_INFO]: true,
      },
      [Module.FEES]: {
        [Permission.READ]: true,
        [Permission.PROCESS_PAYMENT]: true,
        [Permission.VIEW_FINANCIAL_INFO]: true,
        [Permission.EXPORT]: true,
      },
      [Module.REPORTS]: {
        [Permission.READ]: true,
        [Permission.EXPORT]: true,
      },
    },
    specialPermissions: ['PROCESS_PAYMENT_UP_TO_50000'],
  },

  [UserRole.ADMIN_STAFF]: {
    dataScope: DataScope.SCHOOL_WIDE,
    permissions: {
      [Module.STUDENTS]: {
        [Permission.READ]: true,
        [Permission.UPDATE]: true, // Limited fields
      },
      [Module.COMMUNICATION]: {
        [Permission.CREATE]: true,
        [Permission.READ]: true,
      },
    },
  },

  // ============================================================================
  // LEVEL 5: SUPPORT STAFF
  // ============================================================================
  [UserRole.RECEPTIONIST]: {
    dataScope: DataScope.SCHOOL_WIDE,
    permissions: {
      [Module.STUDENTS]: {
        [Permission.READ]: true, // Basic info only
      },
      [Module.STAFF]: {
        [Permission.READ]: true, // Directory only
      },
    },
  },

  [UserRole.LAB_ASSISTANT]: {
    dataScope: DataScope.SCHOOL_WIDE,
    permissions: {
      [Module.STUDENTS]: {
        [Permission.READ]: true,
      },
    },
  },

  [UserRole.MEDICAL_STAFF]: {
    dataScope: DataScope.SCHOOL_WIDE,
    permissions: {
      [Module.STUDENTS]: {
        [Permission.READ]: true,
        [Permission.VIEW_CONTACT_INFO]: true,
        [Permission.VIEW_MEDICAL_INFO]: true,
      },
      [Module.HEALTH]: {
        [Permission.CREATE]: true,
        [Permission.READ]: true,
        [Permission.UPDATE]: true,
        [Permission.VIEW_MEDICAL_INFO]: true,
        [Permission.EXPORT]: true,
      },
    },
    specialPermissions: ['FULL_MEDICAL_ACCESS'],
  },

  [UserRole.DRIVER]: {
    dataScope: DataScope.OWN_DATA,
    permissions: {
      [Module.STUDENTS]: {
        [Permission.READ]: true, // Route students only
      },
      [Module.TRANSPORT]: {
        [Permission.READ]: true,
        [Permission.UPDATE]: true, // Attendance marking
      },
    },
  },

  // ============================================================================
  // LEVEL 6: STAKEHOLDERS
  // ============================================================================
  [UserRole.PARENT]: {
    dataScope: DataScope.OWN_CHILDREN,
    permissions: {
      [Module.STUDENTS]: {
        [Permission.READ]: true,
        [Permission.VIEW_CONTACT_INFO]: true,
        [Permission.VIEW_ACADEMIC_INFO]: true,
        [Permission.VIEW_MEDICAL_INFO]: true,
      },
      [Module.FEES]: {
        [Permission.READ]: true,
        [Permission.PROCESS_PAYMENT]: true,
        [Permission.VIEW_FINANCIAL_INFO]: true,
      },
      [Module.EXAMINATIONS]: {
        [Permission.READ]: true,
        [Permission.EXPORT]: true, // Report cards
      },
      [Module.ATTENDANCE]: {
        [Permission.READ]: true,
      },
      [Module.LIBRARY]: {
        [Permission.READ]: true,
      },
      [Module.TRANSPORT]: {
        [Permission.READ]: true,
      },
      [Module.HOSTEL]: {
        [Permission.READ]: true,
      },
      [Module.HEALTH]: {
        [Permission.READ]: true,
        [Permission.VIEW_MEDICAL_INFO]: true,
      },
      [Module.COMMUNICATION]: {
        [Permission.CREATE]: true,
        [Permission.READ]: true,
      },
      [Module.HOMEWORK]: {
        [Permission.READ]: true,
      },
      [Module.EVENTS]: {
        [Permission.READ]: true,
      },
    },
    specialPermissions: ['ONLINE_FEE_PAYMENT', 'APPLY_LEAVE'],
  },

  [UserRole.STUDENT]: {
    dataScope: DataScope.OWN_DATA,
    permissions: {
      [Module.STUDENTS]: {
        [Permission.READ]: true, // Self only
      },
      [Module.EXAMINATIONS]: {
        [Permission.READ]: true,
        [Permission.EXPORT]: true, // Report cards
      },
      [Module.ATTENDANCE]: {
        [Permission.READ]: true,
      },
      [Module.LIBRARY]: {
        [Permission.READ]: true,
      },
      [Module.TRANSPORT]: {
        [Permission.READ]: true,
      },
      [Module.HOSTEL]: {
        [Permission.READ]: true,
      },
      [Module.COMMUNICATION]: {
        [Permission.READ]: true,
      },
      [Module.HOMEWORK]: {
        [Permission.READ]: true,
        [Permission.CREATE]: true, // Submit assignments
      },
      [Module.EVENTS]: {
        [Permission.READ]: true,
      },
    },
    specialPermissions: ['SUBMIT_HOMEWORK'],
  },
}

/**
 * Check if role has permission for a module and action
 */
export function hasPermission(
  role: UserRole,
  module: Module,
  permission: Permission
): boolean {
  const roleConfig = PERMISSIONS_MATRIX[role]
  return roleConfig?.permissions[module]?.[permission] ?? false
}

/**
 * Get all permissions for a role and module
 */
export function getModulePermissions(
  role: UserRole,
  module: Module
): Partial<Record<Permission, boolean>> | undefined {
  return PERMISSIONS_MATRIX[role]?.permissions[module]
}

/**
 * Get data scope for a role
 */
export function getRoleDataScope(role: UserRole): DataScope {
  return PERMISSIONS_MATRIX[role]?.dataScope ?? DataScope.OWN_DATA
}

/**
 * Get special permissions for a role
 */
export function getSpecialPermissions(role: UserRole): string[] {
  return PERMISSIONS_MATRIX[role]?.specialPermissions ?? []
}

/**
 * Check if role can access module at all
 */
export function canAccessModule(role: UserRole, module: Module): boolean {
  const modulePermissions = PERMISSIONS_MATRIX[role]?.permissions[module]
  return modulePermissions !== undefined && Object.keys(modulePermissions).length > 0
}
