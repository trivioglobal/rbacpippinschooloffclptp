-- Create User Profiles for Test Users
-- Run this in your Supabase SQL Editor after creating auth users

-- First, get the UUIDs of your auth users
-- You can find these in: Authentication > Users in Supabase Dashboard

-- Replace these UUIDs with your actual auth user IDs
-- To get them: SELECT id, email FROM auth.users;

-- Example: Creating profiles for test users
-- IMPORTANT: Replace 'YOUR_AUTH_USER_ID_HERE' with actual UUIDs from auth.users

-- 1. Principal Profile
INSERT INTO public.user_profiles (
  id,  -- Must match auth.users.id
  school_id,  -- Get from schools table
  email,
  role,
  full_name,
  is_active
) VALUES (
  'YOUR_PRINCIPAL_AUTH_USER_ID',  -- Replace with actual UUID
  (SELECT id FROM public.schools LIMIT 1),  -- Gets first school
  'principal@vedhitha.com',
  'PRINCIPAL',
  'Dr. Rajesh Kumar',
  true
);

-- 2. Teacher Profile
INSERT INTO public.user_profiles (
  id,
  school_id,
  email,
  role,
  full_name,
  is_active
) VALUES (
  'YOUR_TEACHER_AUTH_USER_ID',  -- Replace with actual UUID
  (SELECT id FROM public.schools LIMIT 1),
  'teacher@vedhitha.com',
  'TEACHER',
  'Mrs. Priya Sharma',
  true
);

-- 3. Parent Profile
INSERT INTO public.user_profiles (
  id,
  school_id,
  email,
  role,
  full_name,
  is_active
) VALUES (
  'YOUR_PARENT_AUTH_USER_ID',  -- Replace with actual UUID
  (SELECT id FROM public.schools LIMIT 1),
  'parent@vedhitha.com',
  'PARENT',
  'Mr. Amit Patel',
  true
);

-- 4. Student Profile
INSERT INTO public.user_profiles (
  id,
  school_id,
  email,
  role,
  full_name,
  is_active
) VALUES (
  'YOUR_STUDENT_AUTH_USER_ID',  -- Replace with actual UUID
  (SELECT id FROM public.schools LIMIT 1),
  'student@vedhitha.com',
  'STUDENT',
  'Rahul Verma',
  true
);

-- ============================================================
-- AUTOMATED VERSION (Use this if you have the emails)
-- ============================================================

-- This version automatically looks up auth user IDs by email
-- and creates profiles for them

DO $$
DECLARE
  v_school_id UUID;
  v_principal_id UUID;
  v_teacher_id UUID;
  v_parent_id UUID;
  v_student_id UUID;
BEGIN
  -- Get school ID (assuming first school)
  SELECT id INTO v_school_id FROM public.schools LIMIT 1;
  
  IF v_school_id IS NULL THEN
    RAISE EXCEPTION 'No school found. Create a school first.';
  END IF;

  -- Get auth user IDs by email
  SELECT id INTO v_principal_id FROM auth.users WHERE email = 'principal@vedhitha.com';
  SELECT id INTO v_teacher_id FROM auth.users WHERE email = 'teacher@vedhitha.com';
  SELECT id INTO v_parent_id FROM auth.users WHERE email = 'parent@vedhitha.com';
  SELECT id INTO v_student_id FROM auth.users WHERE email = 'student@vedhitha.com';

  -- Create Principal Profile
  IF v_principal_id IS NOT NULL THEN
    INSERT INTO public.user_profiles (id, school_id, email, role, full_name, is_active)
    VALUES (v_principal_id, v_school_id, 'principal@vedhitha.com', 'PRINCIPAL', 'Dr. Rajesh Kumar', true)
    ON CONFLICT (id) DO UPDATE SET
      school_id = v_school_id,
      role = 'PRINCIPAL',
      full_name = 'Dr. Rajesh Kumar',
      is_active = true;
    
    RAISE NOTICE 'Principal profile created/updated';
  ELSE
    RAISE NOTICE 'Principal auth user not found';
  END IF;

  -- Create Teacher Profile  
  IF v_teacher_id IS NOT NULL THEN
    INSERT INTO public.user_profiles (id, school_id, email, role, full_name, is_active)
    VALUES (v_teacher_id, v_school_id, 'teacher@vedhitha.com', 'TEACHER', 'Mrs. Priya Sharma', true)
    ON CONFLICT (id) DO UPDATE SET
      school_id = v_school_id,
      role = 'TEACHER',
      full_name = 'Mrs. Priya Sharma',
      is_active = true;
    
    RAISE NOTICE 'Teacher profile created/updated';
  ELSE
    RAISE NOTICE 'Teacher auth user not found';
  END IF;

  -- Create Parent Profile
  IF v_parent_id IS NOT NULL THEN
    INSERT INTO public.user_profiles (id, school_id, email, role, full_name, is_active)
    VALUES (v_parent_id, v_school_id, 'parent@vedhitha.com', 'PARENT', 'Mr. Amit Patel', true)
    ON CONFLICT (id) DO UPDATE SET
      school_id = v_school_id,
      role = 'PARENT',
      full_name = 'Mr. Amit Patel',
      is_active = true;
    
    RAISE NOTICE 'Parent profile created/updated';
  ELSE
    RAISE NOTICE 'Parent auth user not found';
  END IF;

  -- Create Student Profile
  IF v_student_id IS NOT NULL THEN
    INSERT INTO public.user_profiles (id, school_id, email, role, full_name, is_active)
    VALUES (v_student_id, v_school_id, 'student@vedhitha.com', 'STUDENT', 'Rahul Verma', true)
    ON CONFLICT (id) DO UPDATE SET
      school_id = v_school_id,
      role = 'STUDENT',
      full_name = 'Rahul Verma',
      is_active = true;
    
    RAISE NOTICE 'Student profile created/updated';
  ELSE
    RAISE NOTICE 'Student auth user not found';
  END IF;

END $$;

-- Verify profiles were created
SELECT 
  up.id,
  up.email,
  up.role,
  up.full_name,
  up.is_active,
  s.school_name
FROM public.user_profiles up
LEFT JOIN public.schools s ON up.school_id = s.id
WHERE up.email IN (
  'principal@vedhitha.com',
  'teacher@vedhitha.com',
  'parent@vedhitha.com',
  'student@vedhitha.com'
);
