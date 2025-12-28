# 🔧 FIX: Setup Test Users & Profiles

## Issue 1: "User profile not found"

Your auth users exist in Supabase, but they don't have corresponding records in the `user_profiles` table. Here's how to fix it:

### **Step 1: Create a School First (If Not Exists)**

Go to Supabase SQL Editor and run:

```sql
-- Check if school exists
SELECT * FROM schools;

-- If no school exists, create one:
INSERT INTO schools (
  school_code,
  school_name,
  school_type,
  principal_name,
  contact_person_name,
  primary_phone,
  primary_email,
  address_line1,
  city,
  state,
  postal_code,
  is_active
) VALUES (
  'VED001',
  'Vedhitha Model School',
  'CBSE',
  'Dr. Rajesh Kumar',
  'Dr. Rajesh Kumar',
  '+919876543210',
  'principal@vedhitha.com',
  '123 School Street, Education Block',
  'Bangalore',
  'Karnataka',
  '560001',
  true
) RETURNING id, school_name;
```

### **Step 2: Get Your Auth User IDs**

Run this in Supabase SQL Editor:

```sql
SELECT id, email, created_at 
FROM auth.users 
WHERE email IN (
  'principal@vedhitha.com',
  'teacher@vedhitha.com',
  'parent@vedhitha.com',
  'student@vedhitha.com'
)
ORDER BY email;
```

**Copy the UUIDs** - you'll need them!

### **Step 3: Create User Profiles (AUTOMATED)**

Run this script in Supabase SQL Editor - it will automatically create profiles:

```sql
DO $$
DECLARE
  v_school_id UUID;
  v_principal_id UUID;
  v_teacher_id UUID;
  v_parent_id UUID;
  v_student_id UUID;
BEGIN
  -- Get school ID (first school)
  SELECT id INTO v_school_id FROM public.schools LIMIT 1;
  
  IF v_school_id IS NULL THEN
    RAISE EXCEPTION 'No school found. Run Step 1 first to create a school.';
  END IF;

  RAISE NOTICE 'Using school_id: %', v_school_id;

  -- Get auth user IDs
  SELECT id INTO v_principal_id FROM auth.users WHERE email = 'principal@vedhitha.com';
  SELECT id INTO v_teacher_id FROM auth.users WHERE email = 'teacher@vedhitha.com';
  SELECT id INTO v_parent_id FROM auth.users WHERE email = 'parent@vedhitha.com';
  SELECT id INTO v_student_id FROM auth.users WHERE email = 'student@vedhitha.com';

  -- Principal
  IF v_principal_id IS NOT NULL THEN
    INSERT INTO public.user_profiles (id, school_id, email, role, full_name, is_active)
    VALUES (v_principal_id, v_school_id, 'principal@vedhitha.com', 'PRINCIPAL', 'Dr. Rajesh Kumar', true)
    ON CONFLICT (id) DO UPDATE SET
      school_id = v_school_id,
      role = 'PRINCIPAL',
      full_name = 'Dr. Rajesh Kumar';
    RAISE NOTICE '✓ Principal profile created';
  END IF;

  -- Teacher
  IF v_teacher_id IS NOT NULL THEN
    INSERT INTO public.user_profiles (id, school_id, email, role, full_name, is_active)
    VALUES (v_teacher_id, v_school_id, 'teacher@vedhitha.com', 'TEACHER', 'Mrs. Priya Sharma', true)
    ON CONFLICT (id) DO UPDATE SET
      school_id = v_school_id,
      role = 'TEACHER',
      full_name = 'Mrs. Priya Sharma';
    RAISE NOTICE '✓ Teacher profile created';
  END IF;

  -- Parent
  IF v_parent_id IS NOT NULL THEN
    INSERT INTO public.user_profiles (id, school_id, email, role, full_name, is_active)
    VALUES (v_parent_id, v_school_id, 'parent@vedhitha.com', 'PARENT', 'Mr. Amit Patel', true)
    ON CONFLICT (id) DO UPDATE SET
      school_id = v_school_id,
      role = 'PARENT',
      full_name = 'Mr. Amit Patel';
    RAISE NOTICE '✓ Parent profile created';
  END IF;

  -- Student
  IF v_student_id IS NOT NULL THEN
    INSERT INTO public.user_profiles (id, school_id, email, role, full_name, is_active)
    VALUES (v_student_id, v_school_id, 'student@vedhitha.com', 'STUDENT', 'Rahul Verma', true)
    ON CONFLICT (id) DO UPDATE SET
      school_id = v_school_id,
      role = 'STUDENT',
      full_name = 'Rahul Verma';
    RAISE NOTICE '✓ Student profile created';
  END IF;

END $$;
```

### **Step 4: Verify Profiles Were Created**

```sql
SELECT 
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
)
ORDER BY up.email;
```

You should see 4 rows with all users having a school_name.

---

## Issue 2: "UI is grayed off"

This might be due to loading states or disabled styles. Let me check a few things:

### **Quick Fix 1: Check Console**
Open browser DevTools (F12) → Console tab
Look for any errors like:
- "Failed to fetch user profile"
- Network errors to `/api/auth/profile`

### **Quick Fix 2: Clear Browser Cache**
1. Press Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac) for hard refresh
2. Or clear browser cache and reload

### **Quick Fix 3: Check Network Tab**
In DevTools → Network tab:
- Make sure `/api/auth/profile` returns 200 OK
- Check if it returns proper user data

---

## 🎯 **After Running the SQL Script**

### **You Should Be Able To:**
1. ✅ Login with: `principal@vedhitha.com` / `password`
2. ✅ See the admin dashboard (no "profile not found" error)
3. ✅ See sidebar with navigation menu
4. ✅ See your name "Dr. Rajesh Kumar" in the dashboard
5. ✅ See 4 KPI cards with data
6. ✅ Click through navigation items
7. ✅ Sign out successfully

### **Test Each User:**
```
Principal  → Should redirect to /admin/dashboard
Teacher    → Should redirect to /teacher/dashboard (will show 404 for now)
Parent     → Should redirect to /parent/dashboard (will show 404 for now)
Student    → Should redirect to /student/dashboard (will show 404 for now)
```

**Note:** Teacher/Parent/Student dashboards aren't built yet, so they'll show 404. That's expected! We'll build them next.

---

## 🐛 **Troubleshooting**

### **If you still get "User profile not found":**

1. **Verify the script ran successfully:**
   ```sql
   SELECT COUNT(*) FROM user_profiles;
   ```
   Should return 4 (or more if you have other users)

2. **Check if IDs match:**
   ```sql
   SELECT 
     au.id as auth_id,
     au.email as auth_email,
     up.id as profile_id,
     up.email as profile_email,
     CASE WHEN au.id = up.id THEN '✓ Match' ELSE '✗ Mismatch' END as status
   FROM auth.users au
   LEFT JOIN public.user_profiles up ON au.id = up.id
   WHERE au.email = 'principal@vedhitha.com';
   ```
   The auth_id and profile_id MUST be the same!

3. **Manual fix if needed:**
   Copy the actual UUID from auth.users and insert manually:
   ```sql
   INSERT INTO public.user_profiles (id, school_id, email, role, full_name, is_active)
   VALUES (
     'paste-actual-uuid-here',
     (SELECT id FROM schools LIMIT 1),
     'principal@vedhitha.com',
     'PRINCIPAL',
     'Dr. Rajesh Kumar',
     true
   );
   ```

### **If UI is still grayed:**

Check the browser console for errors. The issue might be:
- JavaScript not loading
- Component rendering errors
- Network failures

Try opening browser DevTools (F12) and check:
1. Console tab - any red errors?
2. Network tab - are requests completing?
3. Elements tab - is HTML rendering?

---

## ✅ **Success Checklist**

Run the SQL script in Supabase, then test:
- [ ] Can login with principal@vedhitha.com
- [ ] No "User profile not found" error
- [ ] Dashboard shows name "Dr. Rajesh Kumar"
- [ ] Sidebar is visible and not grayed
- [ ] Can click navigation items
- [ ] Can sign out successfully
- [ ] UI is clear and readable

**Once all checkboxes are ✓, we're ready to continue building!**
