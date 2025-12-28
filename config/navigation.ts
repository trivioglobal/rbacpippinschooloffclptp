/**
 * Navigation Configuration
 * 
 * Defines navigation menu items for each role with icons and permissions
 */

import { UserRole } from '@/lib/rbac/roles'
import type { LucideIcon } from 'lucide-react'

export interface NavItem {
  label: string
  href: string
  icon: string // Icon name from lucide-react
  badge?: string | number
  children?: NavItem[]
  roles?: UserRole[] // If specified, only these roles can see this item
}

/**
 * Main Navigation Items for Admin Roles
 * (PRINCIPAL, VICE_PRINCIPAL, ADMIN_MANAGER, FINANCE_MANAGER)
 */
export const ADMIN_NAV_ITEMS: NavItem[] = [
  {
    label: 'Dashboard',
    href: '/admin/dashboard',
    icon: 'LayoutDashboard',
  },
  {
    label: 'Students',
    href: '/admin/students',
    icon: 'Users',
    children: [
      {
        label: 'All Students',
        href: '/admin/students',
        icon: 'List',
      },
      {
        label: 'Add Student',
        href: '/admin/students/add',
        icon: 'UserPlus',
        roles: [UserRole.PRINCIPAL, UserRole.VICE_PRINCIPAL, UserRole.ADMIN_MANAGER],
      },
      {
        label: 'Bulk Import',
        href: '/admin/students/bulk-import',
        icon: 'Upload',
        roles: [UserRole.PRINCIPAL, UserRole.VICE_PRINCIPAL, UserRole.ADMIN_MANAGER],
      },
      {
        label: 'Promotions',
        href: '/admin/students/promotions',
        icon: 'TrendingUp',
        roles: [UserRole.PRINCIPAL, UserRole.VICE_PRINCIPAL, UserRole.ADMIN_MANAGER],
      },
    ],
  },
  {
    label: 'Attendance',
    href: '/admin/attendance',
    icon: 'Calendar',
    children: [
      {
        label: 'Mark Attendance',
        href: '/admin/attendance/mark',
        icon: 'CheckSquare',
      },
      {
        label: 'Attendance Reports',
        href: '/admin/attendance/reports',
        icon: 'BarChart3',
      },
      {
        label: 'Defaulters',
        href: '/admin/attendance/defaulters',
        icon: 'AlertTriangle',
      },
    ],
  },
  {
    label: 'Examinations',
    href: '/admin/examinations',
    icon: 'FileText',
    children: [
      {
        label: 'Exam Schedule',
        href: '/admin/examinations/schedule',
        icon: 'Calendar',
      },
      {
        label: 'Results & Marks',
        href: '/admin/examinations/results',
        icon: 'Award',
      },
      {
        label: 'Report Cards',
        href: '/admin/examinations/report-cards',
        icon: 'FileCheck',
      },
      {
        label: 'Analytics',
        href: '/admin/examinations/analytics',
        icon: 'TrendingUp',
      },
    ],
  },
  {
    label: 'Fee Management',
    href: '/admin/fee-management',
    icon: 'DollarSign',
    children: [
      {
        label: 'Fee Structures',
        href: '/admin/fee-management/structures',
        icon: 'Settings',
        roles: [UserRole.PRINCIPAL, UserRole.FINANCE_MANAGER],
      },
      {
        label: 'Collect Payment',
        href: '/admin/fee-management/payments',
        icon: 'CreditCard',
        roles: [UserRole.FINANCE_MANAGER, UserRole.ACCOUNTANT],
      },
      {
        label: 'Concessions',
        href: '/admin/fee-management/concessions',
        icon: 'Percent',
        roles: [UserRole.PRINCIPAL, UserRole.FINANCE_MANAGER],
      },
      {
        label: 'Defaulters',
        href: '/admin/fee-management/defaulters',
        icon: 'AlertCircle',
        roles: [UserRole.PRINCIPAL, UserRole.FINANCE_MANAGER, UserRole.ACCOUNTANT],
      },
      {
        label: 'Reports',
        href: '/admin/fee-management/reports',
        icon: 'FileSpreadsheet',
      },
    ],
  },
  {
    label: 'Staff',
    href: '/admin/staff',
    icon: 'Briefcase',
    roles: [UserRole.PRINCIPAL, UserRole.VICE_PRINCIPAL],
    children: [
      {
        label: 'All Staff',
        href: '/admin/staff',
        icon: 'Users',
      },
      {
        label: 'Add Staff',
        href: '/admin/staff/add',
        icon: 'UserPlus',
        roles: [UserRole.PRINCIPAL],
      },
      {
        label: 'Leave Management',
        href: '/admin/staff/leave',
        icon: 'Calendar',
      },
      {
        label: 'Payroll',
        href: '/admin/staff/payroll',
        icon: 'Wallet',
        roles: [UserRole.PRINCIPAL, UserRole.FINANCE_MANAGER],
      },
      {
        label: 'Performance',
        href: '/admin/staff/performance',
        icon: 'TrendingUp',
      },
    ],
  },
  {
    label: 'Library',
    href: '/admin/library',
    icon: 'BookOpen',
    roles: [UserRole.PRINCIPAL, UserRole.VICE_PRINCIPAL, UserRole.LIBRARIAN],
    children: [
      {
        label: 'Books Catalog',
        href: '/admin/library/books',
        icon: 'Book',
      },
      {
        label: 'Circulation',
        href: '/admin/library/circulation',
        icon: 'RefreshCw',
      },
      {
        label: 'Fines',
        href: '/admin/library/fines',
        icon: 'AlertCircle',
      },
    ],
  },
  {
    label: 'Transport',
    href: '/admin/transport',
    icon: 'Bus',
    roles: [UserRole.PRINCIPAL, UserRole.VICE_PRINCIPAL, UserRole.TRANSPORT_MANAGER],
    children: [
      {
        label: 'Routes',
        href: '/admin/transport/routes',
        icon: 'Route',
      },
      {
        label: 'Vehicles',
        href: '/admin/transport/vehicles',
        icon: 'Truck',
      },
      {
        label: 'GPS Tracking',
        href: '/admin/transport/tracking',
        icon: 'MapPin',
      },
      {
        label: 'Fees',
        href: '/admin/transport/fees',
        icon: 'DollarSign',
      },
    ],
  },
  {
    label: 'Communication',
    href: '/admin/communication',
    icon: 'MessageSquare',
    children: [
      {
        label: 'Announcements',
        href: '/admin/communication/announcements',
        icon: 'Megaphone',
      },
      {
        label: 'Messages',
        href: '/admin/communication/messages',
        icon: 'Mail',
      },
      {
        label: 'Notifications',
        href: '/admin/communication/notifications',
        icon: 'Bell',
      },
    ],
  },
  {
    label: 'Reports',
    href: '/admin/reports',
    icon: 'FileBarChart',
    children: [
      {
        label: 'Academic Reports',
        href: '/admin/reports/academic',
        icon: 'GraduationCap',
      },
      {
        label: 'Financial Reports',
        href: '/admin/reports/financial',
        icon: 'DollarSign',
        roles: [UserRole.PRINCIPAL, UserRole.FINANCE_MANAGER],
      },
      {
        label: 'Custom Reports',
        href: '/admin/reports/custom',
        icon: 'FileSpreadsheet',
      },
    ],
  },
  {
    label: 'Settings',
    href: '/admin/settings',
    icon: 'Settings',
    roles: [UserRole.PRINCIPAL, UserRole.VICE_PRINCIPAL],
    children: [
      {
        label: 'School Settings',
        href: '/admin/settings/school',
        icon: 'Building2',
      },
      {
        label: 'Academic Settings',
        href: '/admin/settings/academic',
        icon: 'BookOpen',
      },
      {
        label: 'User Management',
        href: '/admin/settings/users',
        icon: 'Users',
      },
    ],
  },
]

/**
 * Navigation Items for Teachers
 */
export const TEACHER_NAV_ITEMS: NavItem[] = [
  {
    label: 'Dashboard',
    href: '/teacher/dashboard',
    icon: 'LayoutDashboard',
  },
  {
    label: 'My Classes',
    href: '/teacher/classes',
    icon: 'Users',
  },
  {
    label: 'Attendance',
    href: '/teacher/attendance',
    icon: 'Calendar',
    children: [
      {
        label: 'Mark Attendance',
        href: '/teacher/attendance/mark',
        icon: 'CheckSquare',
      },
      {
        label: 'Attendance Reports',
        href: '/teacher/attendance/reports',
        icon: 'BarChart3',
      },
    ],
  },
  {
    label: 'Homework',
    href: '/teacher/homework',
    icon: 'BookOpen',
    children: [
      {
        label: 'Assignments',
        href: '/teacher/homework/assignments',
        icon: 'FileText',
      },
      {
        label: 'Create Assignment',
        href: '/teacher/homework/create',
        icon: 'Plus',
      },
      {
        label: 'Evaluations',
        href: '/teacher/homework/evaluate',
        icon: 'CheckCircle',
      },
    ],
  },
  {
    label: 'Examinations',
    href: '/teacher/results',
    icon: 'FileText',
    children: [
      {
        label: 'Enter Marks',
        href: '/teacher/results/enter',
        icon: 'Edit',
      },
      {
        label: 'View Results',
        href: '/teacher/results/view',
        icon: 'Eye',
      },
    ],
  },
  {
    label: 'Timetable',
    href: '/teacher/timetable',
    icon: 'Clock',
  },
  {
    label: 'My Class',
    href: '/teacher/my-class',
    icon: 'Users',
    roles: [UserRole.CLASS_TEACHER],
  },
]

/**
 * Navigation Items for Parents
 */
export const PARENT_NAV_ITEMS: NavItem[] = [
  {
    label: 'Dashboard',
    href: '/parent/dashboard',
    icon: 'LayoutDashboard',
  },
  {
    label: 'My Children',
    href: '/parent/children',
    icon: 'Users',
  },
  {
    label: 'Fees',
    href: '/parent/fees',
    icon: 'DollarSign',
    children: [
      {
        label: 'Fee Status',
        href: '/parent/fees',
        icon: 'CreditCard',
      },
      {
        label: 'Payment History',
        href: '/parent/fees/history',
        icon: 'History',
      },
      {
        label: 'Pay Now',
        href: '/parent/fees/pay',
        icon: 'Wallet',
      },
    ],
  },
  {
    label: 'Communication',
    href: '/parent/communication',
    icon: 'MessageSquare',
    children: [
      {
        label: 'Messages',
        href: '/parent/communication/messages',
        icon: 'Mail',
      },
      {
        label: 'Announcements',
        href: '/parent/communication/announcements',
        icon: 'Megaphone',
      },
    ],
  },
  {
    label: 'Profile',
    href: '/parent/profile',
    icon: 'User',
  },
]

/**
 * Navigation Items for Students
 */
export const STUDENT_NAV_ITEMS: NavItem[] = [
  {
    label: 'Dashboard',
    href: '/student/dashboard',
    icon: 'LayoutDashboard',
  },
  {
    label: 'Attendance',
    href: '/student/attendance',
    icon: 'Calendar',
  },
  {
    label: 'Homework',
    href: '/student/homework',
    icon: 'BookOpen',
  },
  {
    label: 'Results',
    href: '/student/results',
    icon: 'Award',
  },
  {
    label: 'Library',
    href: '/student/library',
    icon: 'Book',
  },
  {
    label: 'Timetable',
    href: '/student/timetable',
    icon: 'Clock',
  },
]

/**
 * Get navigation items based on user role
 */
export function getNavigationForRole(role: UserRole): NavItem[] {
  // Admin roles
  if ([
    UserRole.SUPER_ADMIN,
    UserRole.PRINCIPAL,
    UserRole.VICE_PRINCIPAL,
    UserRole.ADMIN_MANAGER,
    UserRole.FINANCE_MANAGER,
    UserRole.EXAM_HEAD,
    UserRole.LIBRARIAN,
    UserRole.TRANSPORT_MANAGER,
    UserRole.HOSTEL_WARDEN,
    UserRole.ACCOUNTANT,
    UserRole.ADMIN_STAFF,
    UserRole.RECEPTIONIST,
    UserRole.MEDICAL_STAFF,
  ].includes(role)) {
    return filterNavByRole(ADMIN_NAV_ITEMS, role)
  }

  // Teacher roles
  if ([UserRole.TEACHER, UserRole.CLASS_TEACHER].includes(role)) {
    return filterNavByRole(TEACHER_NAV_ITEMS, role)
  }

  // Parent role
  if (role === UserRole.PARENT) {
    return PARENT_NAV_ITEMS
  }

  // Student role
  if (role === UserRole.STUDENT) {
    return STUDENT_NAV_ITEMS
  }

  return []
}

/**
 * Filter navigation items by role
 * Removes items that user doesn't have permission to see
 */
function filterNavByRole(items: NavItem[], role: UserRole): NavItem[] {
  return items
    .filter(item => {
      // If item specifies roles, check if user's role is in the list
      if (item.roles && item.roles.length > 0) {
        return item.roles.includes(role)
      }
      return true
    })
    .map(item => ({
      ...item,
      // Recursively filter children
      children: item.children
        ? filterNavByRole(item.children, role)
        : undefined,
    }))
    // Remove items with empty children arrays
    .filter(item => !item.children || item.children.length > 0)
}

/**
 * Quick actions for dashboard (role-based)
 */
export interface QuickAction {
  label: string
  description: string
  href: string
  icon: string
  color: string
  roles?: UserRole[]
}

export const ADMIN_QUICK_ACTIONS: QuickAction[] = [
  {
    label: 'Add Student',
    description: 'Admit new student',
    href: '/admin/students/add',
    icon: 'UserPlus',
    color: 'blue',
    roles: [UserRole.PRINCIPAL, UserRole.VICE_PRINCIPAL, UserRole.ADMIN_MANAGER],
  },
  {
    label: 'Mark Attendance',
    description: 'Take class attendance',
    href: '/admin/attendance/mark',
    icon: 'CheckSquare',
    color: 'green',
  },
  {
    label: 'Collect Fee',
    description: 'Process fee payment',
    href: '/admin/fee-management/payments',
    icon: 'CreditCard',
    color: 'emerald',
    roles: [UserRole.FINANCE_MANAGER, UserRole.ACCOUNTANT],
  },
  {
    label: 'Send Announcement',
    description: 'Broadcast message',
    href: '/admin/communication/announcements/new',
    icon: 'Megaphone',
    color: 'purple',
    roles: [UserRole.PRINCIPAL, UserRole.VICE_PRINCIPAL],
  },
  {
    label: 'Generate Report',
    description: 'Create custom report',
    href: '/admin/reports/custom',
    icon: 'FileSpreadsheet',
    color: 'orange',
  },
  {
    label: 'View Defaulters',
    description: 'Fee & attendance',
    href: '/admin/fee-management/defaulters',
    icon: 'AlertTriangle',
    color: 'red',
    roles: [UserRole.PRINCIPAL, UserRole.FINANCE_MANAGER],
  },
]

/**
 * Get quick actions for role
 */
export function getQuickActionsForRole(role: UserRole): QuickAction[] {
  return ADMIN_QUICK_ACTIONS.filter(action => {
    if (action.roles && action.roles.length > 0) {
      return action.roles.includes(role)
    }
    return true
  })
}
