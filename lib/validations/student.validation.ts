/**
 * Student Validation Schemas
 * 
 * Zod schemas for validating student data
 * Used by API routes and forms
 */

import { z } from 'zod'

/**
 * Student status enum
 */
export const StudentStatus = z.enum([
  'ACTIVE',
  'INACTIVE',
  'GRADUATED',
  'TRANSFERRED',
  'WITHDRAWN',
  'SUSPENDED',
])

/**
 * Gender enum
 */
export const Gender = z.enum(['MALE', 'FEMALE', 'OTHER'])

/**
 * Blood group enum
 */
export const BloodGroup = z.enum([
  'A_POSITIVE',
  'A_NEGATIVE',
  'B_POSITIVE',
  'B_NEGATIVE',
  'O_POSITIVE',
  'O_NEGATIVE',
  'AB_POSITIVE',
  'AB_NEGATIVE',
])

/**
 * Student search and filter params schema
 */
export const studentListParamsSchema = z.object({
  // Search
  search: z.string().optional(),

  // Pagination
  page: z.coerce.number().int().positive().default(1),
  pageSize: z.coerce.number().int().positive().max(100).default(20),

  // Filters
  classId: z.string().uuid().optional(),
  section: z.string().max(10).optional(),
  status: StudentStatus.optional(),
  gender: Gender.optional(),
  academicYearId: z.string().uuid().optional(),

  // Sorting
  sortBy: z
    .enum([
      'first_name',
      'last_name',
      'admission_number',
      'admission_date',
      'created_at',
    ])
    .optional()
    .default('first_name'),
  sortOrder: z.enum(['asc', 'desc']).optional().default('asc'),
})

export type StudentListParams = z.infer<typeof studentListParamsSchema>

/**
 * Student creation schema (for admission)
 */
export const createStudentSchema = z.object({
  // Basic Information
  first_name: z.string().min(1, 'First name is required').max(100),
  middle_name: z.string().max(100).optional().nullable(),
  last_name: z.string().min(1, 'Last name is required').max(100),
  date_of_birth: z.string().datetime(),
  gender: Gender,
  blood_group: BloodGroup.optional().nullable(),
  nationality: z.string().max(100).optional().nullable(),
  religion: z.string().max(100).optional().nullable(),
  caste_category: z.string().max(50).optional().nullable(),
  mother_tongue: z.string().max(100).optional().nullable(),
  aadhar_number: z.string().max(12).optional().nullable(),

  // Academic Information
  school_id: z.string().uuid(),
  class_id: z.string().uuid(),
  section: z.string().max(10),
  academic_year_id: z.string().uuid(),
  admission_number: z.string().max(50).optional(),
  roll_number: z.string().max(50).optional().nullable(),
  admission_date: z.string().datetime(),
  previous_school: z.string().max(255).optional().nullable(),
  previous_class: z.string().max(50).optional().nullable(),
  tc_number: z.string().max(50).optional().nullable(),
  tc_date: z.string().datetime().optional().nullable(),

  // Contact Information
  current_address: z.string().min(1, 'Current address is required'),
  permanent_address: z.string().optional().nullable(),
  city: z.string().max(100).optional().nullable(),
  state: z.string().max(100).optional().nullable(),
  postal_code: z.string().max(10).optional().nullable(),
  country: z.string().max(100).optional().nullable(),
  phone: z.string().max(20).optional().nullable(),
  email: z.string().email().optional().nullable(),

  // Medical Information
  allergies: z.string().optional().nullable(),
  chronic_conditions: z.string().optional().nullable(),
  current_medications: z.string().optional().nullable(),
  special_needs: z.string().optional().nullable(),
  disability: z.string().optional().nullable(),

  // Status
  status: StudentStatus.optional().default('ACTIVE'),
  is_active: z.boolean().optional().default(true),

  // Optional photo
  photo_url: z.string().url().optional().nullable(),

  // Metadata
  notes: z.string().optional().nullable(),
})

export type CreateStudentInput = z.infer<typeof createStudentSchema>

/**
 * Student update schema
 */
export const updateStudentSchema = createStudentSchema.partial().extend({
  id: z.string().uuid(),
})

export type UpdateStudentInput = z.infer<typeof updateStudentSchema>

/**
 * Parent information schema (for admission)
 */
export const parentInfoSchema = z.object({
  // Father Information
  father_name: z.string().max(255).optional().nullable(),
  father_phone: z.string().max(20).optional().nullable(),
  father_email: z.string().email().optional().nullable(),
  father_occupation: z.string().max(255).optional().nullable(),
  father_annual_income: z.number().optional().nullable(),

  // Mother Information
  mother_name: z.string().max(255).optional().nullable(),
  mother_phone: z.string().max(20).optional().nullable(),
  mother_email: z.string().email().optional().nullable(),
  mother_occupation: z.string().max(255).optional().nullable(),
  mother_annual_income: z.number().optional().nullable(),

  // Guardian Information (if different from parents)
  guardian_name: z.string().max(255).optional().nullable(),
  guardian_phone: z.string().max(20).optional().nullable(),
  guardian_email: z.string().email().optional().nullable(),
  guardian_relationship: z.string().max(100).optional().nullable(),
  guardian_occupation: z.string().max(255).optional().nullable(),

  // Emergency Contacts
  emergency_contact_1_name: z.string().max(255).optional().nullable(),
  emergency_contact_1_phone: z.string().max(20).optional().nullable(),
  emergency_contact_1_relationship: z.string().max(100).optional().nullable(),

  emergency_contact_2_name: z.string().max(255).optional().nullable(),
  emergency_contact_2_phone: z.string().max(20).optional().nullable(),
  emergency_contact_2_relationship: z.string().max(100).optional().nullable(),
})

export type ParentInfo = z.infer<typeof parentInfoSchema>

/**
 * Complete admission schema (student + parent)
 */
export const admissionSchema = z.object({
  student: createStudentSchema,
  parent: parentInfoSchema.optional(),
  create_parent_account: z.boolean().optional().default(true),
})

export type AdmissionInput = z.infer<typeof admissionSchema>

/**
 * Bulk import row schema
 */
export const bulkImportRowSchema = z.object({
  first_name: z.string().min(1),
  middle_name: z.string().optional(),
  last_name: z.string().min(1),
  date_of_birth: z.string(),
  gender: z.enum(['MALE', 'FEMALE', 'OTHER']),
  class_name: z.string(),
  section: z.string(),
  admission_number: z.string().optional(),
  roll_number: z.string().optional(),
  phone: z.string().optional(),
  email: z.string().email().optional(),
  father_name: z.string().optional(),
  father_phone: z.string().optional(),
  mother_name: z.string().optional(),
  mother_phone: z.string().optional(),
  current_address: z.string(),
})

export type BulkImportRow = z.infer<typeof bulkImportRowSchema>

/**
 * Student ID param schema
 */
export const studentIdSchema = z.object({
  id: z.string().uuid('Invalid student ID format'),
})

export type StudentIdParam = z.infer<typeof studentIdSchema>
