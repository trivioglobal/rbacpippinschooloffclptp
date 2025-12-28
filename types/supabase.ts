/**
 * Supabase TypeScript Type Definitions
 * 
 * Helper types for working with Supabase client and database
 */

import type { Database } from './database.types'
import type { SupabaseClient } from '@supabase/supabase-js'

/**
 * Typed Supabase client
 */
export type TypedSupabaseClient = SupabaseClient<Database>

/**
 * Database table names
 */
export type Tables = Database['public']['Tables']

/**
 * Database table row types
 */
export type TableRow<T extends keyof Tables> = Tables[T]['Row']

/**
 * Database table insert types
 */
export type TableInsert<T extends keyof Tables> = Tables[T]['Insert']

/**
 * Database table update types
 */
export type TableUpdate<T extends keyof Tables> = Tables[T]['Update']

/**
 * Common table types for easy access
 */
export type Student = TableRow<'students'>
export type StudentInsert = TableInsert<'students'>
export type StudentUpdate = TableUpdate<'students'>

export type UserProfile = TableRow<'user_profiles'>
export type UserProfileInsert = TableInsert<'user_profiles'>
export type UserProfileUpdate = TableUpdate<'user_profiles'>

export type School = TableRow<'schools'>
export type Class = TableRow<'classes'>
export type Section = TableRow<'sections'>
export type Subject = TableRow<'subjects'>
export type AcademicYear = TableRow<'academic_years'>

export type Parent = TableRow<'parents_guardians'>
export type ParentInsert = TableInsert<'parents_guardians'>
export type ParentUpdate = TableUpdate<'parents_guardians'>

export type Staff = TableRow<'staff'>
export type StaffInsert = TableInsert<'staff'>
export type StaffUpdate = TableUpdate<'staff'>

export type FeeStructure = TableRow<'fee_structures'>
export type FeePayment = TableRow<'fee_payments'>
export type FeeReceipt = TableRow<'fee_receipts'>
export type StudentFeeAssignment = TableRow<'student_fee_assignments'>

export type Examination = TableRow<'examinations'>
export type ExaminationResult = TableRow<'examination_results'>
export type ExaminationSchedule = TableRow<'examination_schedule'>
export type ReportCard = TableRow<'report_cards'>

export type LibraryBook = TableRow<'library_books'>
export type BookIssue = TableRow<'book_issues'>
export type LibraryMember = TableRow<'library_members'>

export type TransportRoute = TableRow<'transport_routes'>
export type Vehicle = TableRow<'vehicles'>
export type StudentTransportAssignment = TableRow<'student_transport_assignments'>

export type Announcement = TableRow<'announcements'>
export type SMSMessage = TableRow<'sms_messages'>
export type EmailMessage = TableRow<'email_messages'>
export type WhatsAppMessage = TableRow<'whatsapp_messages'>

/**
 * User roles enum (from database)
 */
export type UserRole = UserProfile['role']

/**
 * Student status enum (from database)
 */
export type StudentStatus = Student['status']

/**
 * Gender enum (from database)
 */
export type Gender = Student['gender']

/**
 * Blood group enum (from database)
 */
export type BloodGroup = Student['blood_group']
