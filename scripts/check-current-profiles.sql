-- Check what's actually in your user_profiles table RIGHT NOW

SELECT 
  email,
  role::text as role,
  full_name,
  school_id IS NOT NULL as has_school,
  is_active
FROM user_profiles
ORDER BY email;

-- Check if IDs match with auth users
SELECT 
  au.email,
  CASE WHEN up.id IS NOT NULL THEN '✓ Profile Exists' ELSE '❌ Missing Profile' END as profile_status,
  up.role::text as role,
  up.full_name
FROM auth.users au
LEFT JOIN user_profiles up ON au.id = up.id
WHERE au.email LIKE '%@vedhitha.com'
ORDER BY au.email;
