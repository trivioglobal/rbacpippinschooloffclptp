-- 🔍 DIAGNOSTIC SCRIPT - Run this to find the problem

-- 1. Check if user_profiles table exists
SELECT EXISTS (
  SELECT FROM information_schema.tables 
  WHERE table_schema = 'public' 
  AND table_name = 'user_profiles'
) as user_profiles_table_exists;

-- 2. Check if schools table exists and has data
SELECT EXISTS (
  SELECT FROM information_schema.tables 
  WHERE table_schema = 'public' 
  AND table_name = 'schools'
) as schools_table_exists;

-- 3. Count schools
SELECT COUNT(*) as school_count FROM schools;

-- 4. Check auth users
SELECT 
  id,
  email,
  created_at,
  email_confirmed_at
FROM auth.users
WHERE email IN (
  'principal@vedhitha.com',
  'teacher@vedhitha.com',
  'parent@vedhitha.com',
  'student@vedhitha.com'
)
ORDER BY email;

-- 5. Check user_profiles (if table exists)
SELECT 
  id,
  email,
  role,
  full_name,
  school_id,
  is_active
FROM user_profiles
WHERE email IN (
  'principal@vedhitha.com',
  'teacher@vedhitha.com',
  'parent@vedhitha.com',
  'student@vedhitha.com'
)
ORDER BY email;

-- 6. Check for ID mismatch
SELECT 
  au.id as auth_user_id,
  au.email as auth_email,
  up.id as profile_id,
  up.email as profile_email,
  CASE 
    WHEN up.id IS NULL THEN '❌ PROFILE MISSING'
    WHEN au.id = up.id THEN '✓ IDs MATCH'
    ELSE '✗ ID MISMATCH'
  END as status
FROM auth.users au
LEFT JOIN public.user_profiles up ON au.id = up.id
WHERE au.email LIKE '%@vedhitha.com'
ORDER BY au.email;
