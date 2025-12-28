-- ✅ VERIFY EXISTING PROFILES
-- You already have 4 profiles! Let's see what's in them.

SELECT 
  up.id,
  up.email,
  up.role::text as role_value,  -- Cast enum to text
  up.full_name,
  up.school_id,
  up.is_active,
  s.school_name,
  s.school_code
FROM user_profiles up
LEFT JOIN schools s ON up.school_id = s.id
WHERE up.email IN (
  'principal@vedhitha.com',
  'teacher@vedhitha.com',
  'parent@vedhitha.com',
  'student@vedhitha.com'
)
ORDER BY up.email;

-- Also check if the IDs match between auth.users and user_profiles
SELECT 
  au.email,
  au.id as auth_id,
  up.id as profile_id,
  CASE WHEN au.id = up.id THEN '✓ MATCH' ELSE '✗ MISMATCH' END as id_check,
  up.role::text as role,
  up.full_name
FROM auth.users au
LEFT JOIN user_profiles up ON au.id = up.id
WHERE au.email LIKE '%@vedhitha.com'
ORDER BY au.email;
```

**Please run this and share the output!**

The profiles already exist (count = 4), so the issue might be:
1. The role values are NULL or incorrect
2. The school_id is NULL
3. The IDs don't match between auth.users and user_profiles

Once you share the output, I'll give you the exact fix!
</result>
</attempt_completion>
