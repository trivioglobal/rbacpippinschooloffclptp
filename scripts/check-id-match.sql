-- 🔍 CHECK IF IDs MATCH between auth.users and user_profiles

SELECT 
  au.email,
  au.id as auth_user_id,
  up.id as profile_user_id,
  CASE 
    WHEN up.id IS NULL THEN '❌ PROFILE MISSING'
    WHEN au.id = up.id THEN '✅ IDs MATCH - GOOD!'
    ELSE '❌ IDs DONT MATCH - THIS IS THE PROBLEM!'
  END as id_status,
  up.role::text as profile_role,
  up.full_name as profile_name
FROM auth.users au
LEFT JOIN user_profiles up ON au.id = up.id
WHERE au.email IN (
  'principal@vedhitha.com',
  'teacher@vedhitha.com', 
  'parent@vedhitha.com',
  'student@vedhitha.com'
)
ORDER BY au.email;
