/**
 * RBAC Role Definitions
 * 
 * Defines all user roles in the system with their hierarchy and metadata.
 * Based on RBAC_PERMISSIONS_SPECIFICATION-2025-12-26.md
 */

/**
 * User Role Enum
 * Hierarchy: Level 0 (highest) to Level 6 (lowest)
 */
export enum UserRole {
  // Level 0: System Level
  SUPER_ADMIN = 'SUPER_ADMIN',

  // Level 1: School Leadership
  PRINCIPAL = 'PRINCIPAL',

  // Level 2: Senior Management
  VICE_PRINCIPAL = 'VICE_PRINCIPAL',
  ADMIN_MANAGER = 'ADMIN_MANAGER',
  FINANCE_MANAGER = 'FINANCE_MANAGER',

  // Level 3: Department Heads
  EXAM_HEAD = 'EXAM_HEAD',
  LIBRARIAN = 'LIBRARIAN',
  TRANSPORT_MANAGER = 'TRANSPORT_MANAGER',
  HOSTEL_WARDEN = 'HOSTEL_WARDEN',

  // Level 4: Staff & Faculty
  CLASS_TEACHER = 'CLASS_TEACHER',
  TEACHER = 'TEACHER',
  ACCOUNTANT = 'ACCOUNTANT',
  ADMIN_STAFF = 'ADMIN_STAFF',

  // Level 5: Support Staff
  RECEPTIONIST = 'RECEPTIONIST',
  LAB_ASSISTANT = 'LAB_ASSISTANT',
  MEDICAL_STAFF = 'MEDICAL_STAFF',
  DRIVER = 'DRIVER',

  // Level 6: Stakeholders
  PARENT = 'PARENT',
  STUDENT = 'STUDENT',
}

/**
 * Data Scope Levels
 */
export enum DataScope {
  ALL_SCHOOLS = 'all_schools',       // Super Admin only
  SCHOOL_WIDE = 'school_wide',       // Entire school data
  DEPARTMENT_WIDE = 'department',    // Department/grade level
  CLASS_WIDE = 'class',              // Specific classes only
  SECTION_WIDE = 'section',          // Specific sections
  OWN_SUBJECTS = 'own_subjects',     // Teacher's subjects
  OWN_CHILDREN = 'own_children',     // Parent's children
  OWN_DATA = 'own_data',             // User's own data only
}

/**
 * Permission Types
 */
export enum Permission {
  // Basic CRUD
  CREATE = 'create',
  READ = 'read',
  UPDATE = 'update',
  DELETE = 'delete',
  
  // Advanced Operations
  APPROVE = 'approve',
  REJECT = 'reject',
  PUBLISH = 'publish',
  EXPORT = 'export',
  IMPORT = 'import',
  
  // Financial Operations
  WAIVE = 'waive',
  REFUND = 'refund',
  ADJUST = 'adjust',
  PROCESS_PAYMENT = 'process_payment',
  
  // Administrative
  CONFIGURE = 'configure',
  OVERRIDE = 'override',
  
  // View Permissions
  VIEW_CONTACT_INFO = 'view_contact_info',
  VIEW_FINANCIAL_INFO = 'view_financial_info',
  VIEW_MEDICAL_INFO = 'view_medical_info',
  VIEW_ACADEMIC_INFO = 'view_academic_info',
}

/**
 * Module Names
 */
export enum Module {
  STUDENTS = 'students',
  STAFF = 'staff',
  FEES = 'fees',
  EXAMINATIONS = 'examinations',
  ATTENDANCE = 'attendance',
  LIBRARY = 'library',
  TRANSPORT = 'transport',
  HOSTEL = 'hostel',
  HEALTH = 'health',
  COMMUNICATION = 'communication',
  HOMEWORK = 'homework',
  EVENTS = 'events',
  REPORTS = 'reports',
  SETTINGS = 'settings',
}

/**
 * Role Metadata Interface
 */
export interface RoleMetadata {
  code: UserRole
  name: string
  level: number
  dataScope: DataScope
  description: string
  dashboard: string
  color: string
  icon: string
}

/**
 * Role Metadata Mapping
 */
export const ROLE_METADATA: Record<UserRole, RoleMetadata> = {
  [UserRole.SUPER_ADMIN]: {
    code: UserRole.SUPER_ADMIN,
    name: 'Super Administrator',
    level: 0,
    dataScope: DataScope.ALL_SCHOOLS,
    description: 'Platform owner with access to all schools',
    dashboard: '/admin/dashboard',
    color: 'purple',
    icon: 'Shield',
  },
  [UserRole.PRINCIPAL]: {
    code: UserRole.PRINCIPAL,
    name: 'Principal',
    level: 1,
    dataScope: DataScope.SCHOOL_WIDE,
    description: 'School head with ultimate authority',
    dashboard: '/admin/dashboard',
    color: 'blue',
    icon: 'Crown',
  },
  [UserRole.VICE_PRINCIPAL]: {
    code: UserRole.VICE_PRINCIPAL,
    name: 'Vice Principal',
    level: 2,
    dataScope: DataScope.SCHOOL_WIDE,
    description: 'Deputy to principal with delegated authority',
    dashboard: '/admin/dashboard',
    color: 'indigo',
    icon: 'Award',
  },
  [UserRole.ADMIN_MANAGER]: {
    code: UserRole.ADMIN_MANAGER,
    name: 'Admin Manager',
    level: 2,
    dataScope: DataScope.SCHOOL_WIDE,
    description: 'Administrative operations manager',
    dashboard: '/admin/dashboard',
    color: 'cyan',
    icon: 'Briefcase',
  },
  [UserRole.FINANCE_MANAGER]: {
    code: UserRole.FINANCE_MANAGER,
    name: 'Finance Manager',
    level: 2,
    dataScope: DataScope.SCHOOL_WIDE,
    description: 'Financial operations and accounting head',
    dashboard: '/admin/fee-management',
    color: 'green',
    icon: 'DollarSign',
  },
  [UserRole.EXAM_HEAD]: {
    code: UserRole.EXAM_HEAD,
    name: 'Examination Head',
    level: 3,
    dataScope: DataScope.SCHOOL_WIDE,
    description: 'Examination controller',
    dashboard: '/admin/examinations',
    color: 'orange',
    icon: 'FileText',
  },
  [UserRole.LIBRARIAN]: {
    code: UserRole.LIBRARIAN,
    name: 'Librarian',
    level: 3,
    dataScope: DataScope.SCHOOL_WIDE,
    description: 'Library operations manager',
    dashboard: '/admin/library',
    color: 'pink',
    icon: 'BookOpen',
  },
  [UserRole.TRANSPORT_MANAGER]: {
    code: UserRole.TRANSPORT_MANAGER,
    name: 'Transport Manager',
    level: 3,
    dataScope: DataScope.SCHOOL_WIDE,
    description: 'Fleet and transport operations',
    dashboard: '/admin/transport',
    color: 'yellow',
    icon: 'Bus',
  },
  [UserRole.HOSTEL_WARDEN]: {
    code: UserRole.HOSTEL_WARDEN,
    name: 'Hostel Warden',
    level: 3,
    dataScope: DataScope.SCHOOL_WIDE,
    description: 'Hostel operations and welfare',
    dashboard: '/admin/hostel',
    color: 'teal',
    icon: 'Home',
  },
  [UserRole.CLASS_TEACHER]: {
    code: UserRole.CLASS_TEACHER,
    name: 'Class Teacher',
    level: 4,
    dataScope: DataScope.CLASS_WIDE,
    description: 'Class in-charge with enhanced access',
    dashboard: '/teacher/dashboard',
    color: 'violet',
    icon: 'Users',
  },
  [UserRole.TEACHER]: {
    code: UserRole.TEACHER,
    name: 'Teacher',
    level: 4,
    dataScope: DataScope.OWN_SUBJECTS,
    description: 'Subject teacher',
    dashboard: '/teacher/dashboard',
    color: 'sky',
    icon: 'GraduationCap',
  },
  [UserRole.ACCOUNTANT]: {
    code: UserRole.ACCOUNTANT,
    name: 'Accountant',
    level: 4,
    dataScope: DataScope.SCHOOL_WIDE,
    description: 'Fee collection and accounting',
    dashboard: '/admin/fee-management/payments',
    color: 'emerald',
    icon: 'Calculator',
  },
  [UserRole.ADMIN_STAFF]: {
    code: UserRole.ADMIN_STAFF,
    name: 'Admin Staff',
    level: 4,
    dataScope: DataScope.SCHOOL_WIDE,
    description: 'Administrative support staff',
    dashboard: '/admin/dashboard',
    color: 'slate',
    icon: 'ClipboardList',
  },
  [UserRole.RECEPTIONIST]: {
    code: UserRole.RECEPTIONIST,
    name: 'Receptionist',
    level: 5,
    dataScope: DataScope.SCHOOL_WIDE,
    description: 'Front desk operations',
    dashboard: '/admin/dashboard',
    color: 'gray',
    icon: 'Phone',
  },
  [UserRole.LAB_ASSISTANT]: {
    code: UserRole.LAB_ASSISTANT,
    name: 'Lab Assistant',
    level: 5,
    dataScope: DataScope.SCHOOL_WIDE,
    description: 'Laboratory support',
    dashboard: '/admin/dashboard',
    color: 'lime',
    icon: 'Flask',
  },
  [UserRole.MEDICAL_STAFF]: {
    code: UserRole.MEDICAL_STAFF,
    name: 'Medical Staff',
    level: 5,
    dataScope: DataScope.SCHOOL_WIDE,
    description: 'School nurse or doctor',
    dashboard: '/admin/health',
    color: 'red',
    icon: 'HeartPulse',
  },
  [UserRole.DRIVER]: {
    code: UserRole.DRIVER,
    name: 'Driver',
    level: 5,
    dataScope: DataScope.OWN_DATA,
    description: 'School bus driver',
    dashboard: '/driver/dashboard',
    color: 'amber',
    icon: 'TruckIcon',
  },
  [UserRole.PARENT]: {
    code: UserRole.PARENT,
    name: 'Parent/Guardian',
    level: 6,
    dataScope: DataScope.OWN_CHILDREN,
    description: 'Student parent or guardian',
    dashboard: '/parent/dashboard',
    color: 'rose',
    icon: 'Heart',
  },
  [UserRole.STUDENT]: {
    code: UserRole.STUDENT,
    name: 'Student',
    level: 6,
    dataScope: DataScope.OWN_DATA,
    description: 'Student portal access',
    dashboard: '/student/dashboard',
    color: 'blue',
    icon: 'User',
  },
}

/**
 * Get role metadata by role code
 */
export function getRoleMetadata(role: UserRole): RoleMetadata {
  return ROLE_METADATA[role]
}

/**
 * Check if role is admin-level (Levels 0-2)
 */
export function isAdminRole(role: UserRole): boolean {
  return ROLE_METADATA[role].level <= 2
}

/**
 * Check if role is management-level (Levels 0-3)
 */
export function isManagementRole(role: UserRole): boolean {
  return ROLE_METADATA[role].level <= 3
}

/**
 * Check if role is staff-level (Levels 0-5)
 */
export function isStaffRole(role: UserRole): boolean {
  return ROLE_METADATA[role].level <= 5
}

/**
 * Check if role is stakeholder (Level 6)
 */
export function isStakeholderRole(role: UserRole): boolean {
  return ROLE_METADATA[role].level === 6
}

/**
 * Check if role has higher or equal authority than another role
 */
export function hasHigherAuthority(role1: UserRole, role2: UserRole): boolean {
  return ROLE_METADATA[role1].level <= ROLE_METADATA[role2].level
}

/**
 * Admin roles (for quick checks)
 */
export const ADMIN_ROLES = [
  UserRole.SUPER_ADMIN,
  UserRole.PRINCIPAL,
  UserRole.VICE_PRINCIPAL,
  UserRole.ADMIN_MANAGER,
  UserRole.FINANCE_MANAGER,
]

/**
 * Management roles (Levels 0-3)
 */
export const MANAGEMENT_ROLES = [
  ...ADMIN_ROLES,
  UserRole.EXAM_HEAD,
  UserRole.LIBRARIAN,
  UserRole.TRANSPORT_MANAGER,
  UserRole.HOSTEL_WARDEN,
]

/**
 * Teaching staff roles
 */
export const TEACHING_ROLES = [
  UserRole.TEACHER,
  UserRole.CLASS_TEACHER,
]

/**
 * Financial roles
 */
export const FINANCIAL_ROLES = [
  UserRole.FINANCE_MANAGER,
  UserRole.ACCOUNTANT,
]

/**
 * Stakeholder roles
 */
export const STAKEHOLDER_ROLES = [
  UserRole.PARENT,
  UserRole.STUDENT,
]
