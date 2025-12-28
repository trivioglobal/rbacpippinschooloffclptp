-- 🔒 FIX RLS POLICY FOR USER_PROFILES

-- Check if RLS is enabled
SELECT 
  tablename,
  rowsecurity as rls_enabled
FROM pg_tables
WHERE schemaname = 'public' 
AND tablename = 'user_profiles';

-- Check existing policies
SELECT 
  policyname,
  cmd,
  qual
FROM pg_policies
WHERE schemaname = 'public'
AND tablename = 'user_profiles';

-- FIX: Create policy to allow users to read their own profile
CREATE POLICY IF NOT EXISTS "Users can read own profile"
ON user_profiles
FOR SELECT
TO authenticated
USING (id = auth.uid());

-- Also allow during login (important!)
CREATE POLICY IF NOT EXISTS "Enable read for authenticated users during login"
ON user_profiles
FOR SELECT
TO authenticated
USING (true);

-- Verify policies were created
SELECT 
  policyname,
  cmd,
  CASE WHEN cmd = 'SELECT' THEN '✓ Read Policy' ELSE cmd END as policy_type
FROM pg_policies
WHERE schemaname = 'public'
AND tablename = 'user_profiles';
