-- 🔧 FIX EXISTING PROFILES
-- This will UPDATE your existing 4 profiles with correct data

-- First, let's see what you have
SELECT 
  email,
  role::text as current_role,
  full_name as current_name,
  school_id IS NOT NULL as has_school_id
FROM user_profiles
WHERE email LIKE '%@vedhitha.com';

-- Now let's fix them by UPDATING (not inserting)
DO $$
DECLARE
  v_school_id UUID;
  v_updated INTEGER := 0;
BEGIN
  -- Get school ID
  SELECT id INTO v_school_id FROM schools ORDER BY created_at DESC LIMIT 1;
  
  -- Update Principal
  UPDATE user_profiles 
  SET 
    role = 'PRINCIPAL'::user_role,
    full_name = 'Dr. Rajesh Kumar',
    school_id = v_school_id,
    is_active = true
  WHERE email = 'principal@vedhitha.com';
  
  GET DIAGNOSTICS v_updated = ROW_COUNT;
  IF v_updated > 0 THEN
    RAISE NOTICE '✓ Updated Principal profile';
  END IF;

  -- Update Teacher
  UPDATE user_profiles 
  SET 
    role = 'TEACHER'::user_role,
    full_name = 'Mrs. Priya Sharma',
    school_id = v_school_id,
    is_active = true
  WHERE email = 'teacher@vedhitha.com';
  
  GET DIAGNOSTICS v_updated = ROW_COUNT;
  IF v_updated > 0 THEN
    RAISE NOTICE '✓ Updated Teacher profile';
  END IF;

  -- Update Parent
  UPDATE user_profiles 
  SET 
    role = 'PARENT'::user_role,
    full_name = 'Mr. Amit Patel',
    school_id = v_school_id,
    is_active = true
  WHERE email = 'parent@vedhitha.com';
  
  GET DIAGNOSTICS v_updated = ROW_COUNT;
  IF v_updated > 0 THEN
    RAISE NOTICE '✓ Updated Parent profile';
  END IF;

  -- Update Student
  UPDATE user_profiles 
  SET 
    role = 'STUDENT'::user_role,
    full_name = 'Rahul Verma',
    school_id = v_school_id,
    is_active = true
  WHERE email = 'student@vedhitha.com';
  
  GET DIAGNOSTICS v_updated = ROW_COUNT;
  IF v_updated > 0 THEN
    RAISE NOTICE '✓ Updated Student profile';
  END IF;

END $$;

-- Verify the fix worked
SELECT 
  '✓ VERIFIED' as status,
  email,
  role::text as role,
  full_name,
  school_id IS NOT NULL as has_school,
  is_active
FROM user_profiles
WHERE email LIKE '%@vedhitha.com'
ORDER BY email;
