# 🎓 COMPLETE DATABASE SUMMARY - ALL 95 TABLES & FIELDS

**Generated:** Sat Dec 27 16:51:32 PST 2025

             Table             | Columns 
-------------------------------+---------
 academic_years                |      11
 activity_attendance           |      14
 announcements                 |     134
 asset_maintenance             |      13
 assets_equipment              |     129
 automated_alerts              |     111
 book_copies                   |      81
 book_issues                   |     107
 book_returns                  |      33
 class_timetables              |      98
 classes                       |      12
 clubs_societies               |      83
 communication_channels        |     115
 communication_logs            |     140
 communication_preferences     |      98
 competitions                  |      66
 digital_library               |       9
 drivers                       |     127
 email_messages                |     172
 event_registrations           |      85
 events_analytics              |      15
 examination_results           |      97
 examination_schedule          |      93
 examinations                  |     125
 extracurricular_activities    |      76
 fee_adjustments_refunds       |     152
 fee_committee_approvals       |     161
 fee_concessions_scholarships  |      64
 fee_defaulters                |      62
 fee_installments              |      50
 fee_payments                  |     136
 fee_receipts                  |     141
 fee_structures                |     157
 government_reimbursements     |     155
 health_analytics              |      88
 health_configuration          |      68
 homework_analytics            |     110
 homework_assignments          |     140
 homework_evaluations          |     118
 hostel_attendance             |       8
 hostel_buildings              |      54
 hostel_fees                   |      12
 hostel_maintenance            |       9
 hostel_rooms                  |      73
 immunization_records          |      99
 in_app_notifications          |     112
 infirmary_visits              |     105
 inventory_analytics           |      12
 inventory_items               |      94
 library_analytics             |      13
 library_books                 |     139
 library_fines                 |      22
 library_members               |      76
 medical_checkups              |      80
 medical_incidents             |     153
 mess_management               |       8
 message_templates             |     108
 parent_communication_portal   |     113
 parents_guardians             |      25
 prescriptions_medications     |     115
 purchase_orders               |     127
 push_notifications            |     104
 report_cards                  |      56
 school_events                 |     156
 schools                       |      31
 sections                      |      11
 sms_messages                  |     120
 spatial_ref_sys               |       5
 staff                         |      39
 stock_audits                  |      14
 stock_movements               |      18
 student_achievements          |     107
 student_exam_registrations    |      46
 student_fee_assignments       |     116
 student_health_profiles       |     112
 student_hostel_assignments    |     130
 student_parents               |       7
 student_submissions           |     115
 student_transport_assignments |     115
 students                      |      38
 subjects                      |      11
 teacher_timetables            |     118
 timetable_periods             |     119
 timetable_substitutions       |     122
 timetable_templates           |     103
 transport_analytics           |      12
 transport_fees                |      19
 transport_routes              |      97
 trip_logs                     |      20
 user_profiles                 |      15
 vehicle_maintenance           |      12
 vehicles                      |     147
 vendors_suppliers             |     115
 visitor_management            |       8
 whatsapp_messages             |     131
(95 rows)


## DETAILED TABLE STRUCTURES

### academic_years

   Column    |           Type           |        Full Type         | Nullable |           Default           
-------------+--------------------------+--------------------------+----------+-----------------------------
 id          | uuid                     | uuid                     | NOT NULL | gen_random_uuid()
 school_id   | uuid                     | uuid                     | NOT NULL | -
 year_code   | character varying        | character varying(20)    | NOT NULL | -
 year_name   | character varying        | character varying(100)   | NOT NULL | -
 start_date  | date                     | date                     | NOT NULL | -
 end_date    | date                     | date                     | NOT NULL | -
 is_current  | boolean                  | boolean                  | NOT NULL | false
 status      | character varying        | character varying(20)    | NOT NULL | 'ACTIVE'::character varying
 description | text                     | text                     | NULL     | -
 created_at  | timestamp with time zone | timestamp with time zone | NOT NULL | now()
 updated_at  | timestamp with time zone | timestamp with time zone | NOT NULL | now()
(11 rows)


### activity_attendance

       Column       |           Type           |        Full Type         | Nullable |      Default       
--------------------+--------------------------+--------------------------+----------+--------------------
 id                 | uuid                     | uuid                     | NOT NULL | uuid_generate_v4()
 school_id          | uuid                     | uuid                     | NOT NULL | -
 attendance_code    | character varying        | character varying(50)    | NOT NULL | -
 student_id         | uuid                     | uuid                     | NOT NULL | -
 activity_id        | uuid                     | uuid                     | NULL     | -
 club_id            | uuid                     | uuid                     | NULL     | -
 attendance_date    | date                     | date                     | NOT NULL | CURRENT_DATE
 is_present         | boolean                  | boolean                  | NULL     | true
 check_in_time      | time without time zone   | time without time zone   | NULL     | -
 check_out_time     | time without time zone   | time without time zone   | NULL     | -
 performance_rating | numeric                  | numeric                  | NULL     | -
 notes              | text                     | text                     | NULL     | -
 metadata           | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 created_at         | timestamp with time zone | timestamp with time zone | NULL     | now()
(14 rows)


### announcements

            Column            |           Type           |        Full Type         | Nullable |              Default               
------------------------------+--------------------------+--------------------------+----------+------------------------------------
 id                           | uuid                     | uuid                     | NOT NULL | gen_random_uuid()
 school_id                    | uuid                     | uuid                     | NOT NULL | -
 academic_year_id             | uuid                     | uuid                     | NULL     | -
 announcement_code            | character varying        | character varying(50)    | NULL     | -
 title                        | character varying        | character varying(200)   | NOT NULL | -
 subtitle                     | character varying        | character varying(200)   | NULL     | -
 content                      | text                     | text                     | NOT NULL | -
 content_html                 | text                     | text                     | NULL     | -
 summary                      | text                     | text                     | NULL     | -
 excerpt_length               | integer                  | integer                  | NULL     | 150
 announcement_type            | character varying        | character varying(30)    | NULL     | -
 category                     | character varying        | character varying(50)    | NULL     | -
 subcategory                  | character varying        | character varying(50)    | NULL     | -
 priority                     | character varying        | character varying(20)    | NULL     | 'NORMAL'::character varying
 severity_level               | integer                  | integer                  | NULL     | 1
 target_audience              | character varying        | character varying(30)    | NULL     | 'ALL'::character varying
 target_class_ids             | ARRAY                    | ARRAY                    | NULL     | -
 target_section_ids           | ARRAY                    | ARRAY                    | NULL     | -
 target_user_ids              | ARRAY                    | ARRAY                    | NULL     | -
 target_role_codes            | ARRAY                    | ARRAY                    | NULL     | -
 total_target_audience        | integer                  | integer                  | NULL     | 0
 target_by_gender             | character varying        | character varying(10)    | NULL     | -
 target_by_age_min            | integer                  | integer                  | NULL     | -
 target_by_age_max            | integer                  | integer                  | NULL     | -
 custom_filter_criteria       | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 publish_date                 | date                     | date                     | NOT NULL | CURRENT_DATE
 publish_time                 | time without time zone   | time without time zone   | NULL     | '09:00:00'::time without time zone
 publish_timestamp            | timestamp with time zone | timestamp with time zone | NULL     | -
 expiry_date                  | date                     | date                     | NULL     | -
 expiry_time                  | time without time zone   | time without time zone   | NULL     | -
 expiry_timestamp             | timestamp with time zone | timestamp with time zone | NULL     | -
 auto_expire                  | boolean                  | boolean                  | NULL     | true
 days_to_expire               | integer                  | integer                  | NULL     | 30
 is_published                 | boolean                  | boolean                  | NULL     | false
 published_at                 | timestamp with time zone | timestamp with time zone | NULL     | -
 published_by                 | uuid                     | uuid                     | NULL     | -
 unpublished_at               | timestamp with time zone | timestamp with time zone | NULL     | -
 unpublish_reason             | text                     | text                     | NULL     | -
 show_on_website              | boolean                  | boolean                  | NULL     | true
 show_on_mobile_app           | boolean                  | boolean                  | NULL     | true
 show_on_dashboard            | boolean                  | boolean                  | NULL     | true
 show_on_notice_board         | boolean                  | boolean                  | NULL     | true
 show_in_parent_portal        | boolean                  | boolean                  | NULL     | true
 show_in_student_portal       | boolean                  | boolean                  | NULL     | true
 show_in_staff_portal         | boolean                  | boolean                  | NULL     | true
 require_authentication       | boolean                  | boolean                  | NULL     | false
 is_pinned                    | boolean                  | boolean                  | NULL     | false
 pinned_until                 | date                     | date                     | NULL     | -
 pinned_order                 | integer                  | integer                  | NULL     | 0
 is_featured                  | boolean                  | boolean                  | NULL     | false
 featured_until               | date                     | date                     | NULL     | -
 is_breaking_news             | boolean                  | boolean                  | NULL     | false
 breaking_news_until          | timestamp with time zone | timestamp with time zone | NULL     | -
 highlight_color              | character varying        | character varying(7)     | NULL     | -
 banner_image_url             | text                     | text                     | NULL     | -
 thumbnail_url                | text                     | text                     | NULL     | -
 attachments                  | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 total_attachments            | integer                  | integer                  | NULL     | 0
 images                       | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 videos                       | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 documents                    | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 gallery_images               | ARRAY                    | ARRAY                    | NULL     | -
 has_video                    | boolean                  | boolean                  | NULL     | false
 video_url                    | text                     | text                     | NULL     | -
 video_thumbnail_url          | text                     | text                     | NULL     | -
 has_audio                    | boolean                  | boolean                  | NULL     | false
 audio_url                    | text                     | text                     | NULL     | -
 embedded_content             | text                     | text                     | NULL     | -
 has_cta                      | boolean                  | boolean                  | NULL     | false
 cta_text                     | character varying        | character varying(50)    | NULL     | -
 cta_url                      | text                     | text                     | NULL     | -
 cta_action                   | character varying        | character varying(30)    | NULL     | -
 send_notification            | boolean                  | boolean                  | NULL     | true
 notification_channels        | ARRAY                    | ARRAY                    | NULL     | ARRAY['IN_APP'::text]
 notification_title           | character varying        | character varying(100)   | NULL     | -
 notification_body            | text                     | text                     | NULL     | -
 total_notified               | integer                  | integer                  | NULL     | 0
 total_notification_sent      | integer                  | integer                  | NULL     | 0
 total_notification_delivered | integer                  | integer                  | NULL     | 0
 total_notification_failed    | integer                  | integer                  | NULL     | 0
 notification_sent_at         | timestamp with time zone | timestamp with time zone | NULL     | -
 send_email                   | boolean                  | boolean                  | NULL     | false
 email_sent                   | boolean                  | boolean                  | NULL     | false
 total_emails_sent            | integer                  | integer                  | NULL     | 0
 send_sms                     | boolean                  | boolean                  | NULL     | false
 sms_sent                     | boolean                  | boolean                  | NULL     | false
 total_sms_sent               | integer                  | integer                  | NULL     | 0
 send_whatsapp                | boolean                  | boolean                  | NULL     | false
 whatsapp_sent                | boolean                  | boolean                  | NULL     | false
 total_whatsapp_sent          | integer                  | integer                  | NULL     | 0
 view_count                   | integer                  | integer                  | NULL     | 0
 unique_view_count            | integer                  | integer                  | NULL     | 0
 like_count                   | integer                  | integer                  | NULL     | 0
 dislike_count                | integer                  | integer                  | NULL     | 0
 comment_count                | integer                  | integer                  | NULL     | 0
 share_count                  | integer                  | integer                  | NULL     | 0
 download_count               | integer                  | integer                  | NULL     | 0
 engagement_score             | numeric                  | numeric                  | NULL     | 0
 total_reached                | integer                  | integer                  | NULL     | 0
 reach_percentage             | numeric                  | numeric                  | NULL     | -
 average_read_time_seconds    | integer                  | integer                  | NULL     | -
 bounce_rate                  | numeric                  | numeric                  | NULL     | -
 first_viewed_at              | timestamp with time zone | timestamp with time zone | NULL     | -
 last_viewed_at               | timestamp with time zone | timestamp with time zone | NULL     | -
 requires_acknowledgment      | boolean                  | boolean                  | NULL     | false
 total_acknowledged           | integer                  | integer                  | NULL     | 0
 acknowledgment_deadline      | date                     | date                     | NULL     | -
 slug                         | character varying        | character varying(200)   | NULL     | -
 meta_title                   | character varying        | character varying(200)   | NULL     | -
 meta_description             | text                     | text                     | NULL     | -
 meta_keywords                | character varying        | character varying(500)   | NULL     | -
 searchable                   | boolean                  | boolean                  | NULL     | true
 search_tags                  | ARRAY                    | ARRAY                    | NULL     | -
 is_scheduled                 | boolean                  | boolean                  | NULL     | false
 scheduled_for                | timestamp with time zone | timestamp with time zone | NULL     | -
 auto_publish                 | boolean                  | boolean                  | NULL     | true
 is_recurring                 | boolean                  | boolean                  | NULL     | false
 recurrence_pattern           | character varying        | character varying(30)    | NULL     | -
 recurrence_interval          | integer                  | integer                  | NULL     | -
 recurrence_end_date          | date                     | date                     | NULL     | -
 requires_approval            | boolean                  | boolean                  | NULL     | false
 approval_status              | character varying        | character varying(30)    | NULL     | 'DRAFT'::character varying
 approved_by                  | uuid                     | uuid                     | NULL     | -
 approved_at                  | timestamp with time zone | timestamp with time zone | NULL     | -
 rejected_by                  | uuid                     | uuid                     | NULL     | -
 rejection_reason             | text                     | text                     | NULL     | -
 status                       | character varying        | character varying(20)    | NULL     | 'DRAFT'::character varying
 is_active                    | boolean                  | boolean                  | NULL     | true
 tags                         | ARRAY                    | ARRAY                    | NULL     | -
 metadata                     | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 notes                        | text                     | text                     | NULL     | -
 created_by                   | uuid                     | uuid                     | NULL     | -
 created_at                   | timestamp with time zone | timestamp with time zone | NULL     | now()
 updated_at                   | timestamp with time zone | timestamp with time zone | NULL     | now()
(134 rows)


### asset_maintenance

         Column          |           Type           |        Full Type         | Nullable |            Default             
-------------------------+--------------------------+--------------------------+----------+--------------------------------
 id                      | uuid                     | uuid                     | NOT NULL | uuid_generate_v4()
 school_id               | uuid                     | uuid                     | NOT NULL | -
 maintenance_code        | character varying        | character varying(50)    | NOT NULL | -
 asset_id                | uuid                     | uuid                     | NOT NULL | -
 maintenance_type        | character varying        | character varying(30)    | NOT NULL | -
 maintenance_date        | date                     | date                     | NOT NULL | -
 maintenance_description | text                     | text                     | NOT NULL | -
 performed_by            | character varying        | character varying(200)   | NULL     | -
 cost                    | numeric                  | numeric                  | NULL     | -
 next_maintenance_due    | date                     | date                     | NULL     | -
 status                  | character varying        | character varying(30)    | NULL     | 'COMPLETED'::character varying
 metadata                | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 created_at              | timestamp with time zone | timestamp with time zone | NULL     | now()
(13 rows)


### assets_equipment

             Column              |           Type           |        Full Type         | Nullable |             Default              
---------------------------------+--------------------------+--------------------------+----------+----------------------------------
 id                              | uuid                     | uuid                     | NOT NULL | uuid_generate_v4()
 school_id                       | uuid                     | uuid                     | NOT NULL | -
 asset_code                      | character varying        | character varying(50)    | NOT NULL | -
 asset_tag_number                | character varying        | character varying(50)    | NOT NULL | -
 barcode                         | character varying        | character varying(100)   | NULL     | -
 qr_code                         | character varying        | character varying(100)   | NULL     | -
 asset_name                      | character varying        | character varying(200)   | NOT NULL | -
 asset_description               | text                     | text                     | NULL     | -
 asset_type                      | character varying        | character varying(50)    | NOT NULL | -
 asset_category                  | character varying        | character varying(50)    | NOT NULL | -
 asset_sub_category              | character varying        | character varying(100)   | NULL     | -
 current_location                | character varying        | character varying(200)   | NOT NULL | -
 location_type                   | character varying        | character varying(50)    | NULL     | -
 room_number                     | character varying        | character varying(50)    | NULL     | -
 floor_number                    | integer                  | integer                  | NULL     | -
 building_name                   | character varying        | character varying(100)   | NULL     | -
 specific_location_details       | text                     | text                     | NULL     | -
 is_assigned                     | boolean                  | boolean                  | NULL     | false
 assigned_to_type                | character varying        | character varying(30)    | NULL     | -
 assigned_to_staff_id            | uuid                     | uuid                     | NULL     | -
 assigned_to_staff_name          | character varying        | character varying(200)   | NULL     | -
 assigned_to_student_id          | uuid                     | uuid                     | NULL     | -
 assigned_to_student_name        | character varying        | character varying(200)   | NULL     | -
 assigned_to_department          | character varying        | character varying(100)   | NULL     | -
 assigned_to_class_id            | uuid                     | uuid                     | NULL     | -
 assignment_date                 | date                     | date                     | NULL     | -
 assignment_purpose              | text                     | text                     | NULL     | -
 custodian_staff_id              | uuid                     | uuid                     | NULL     | -
 custodian_name                  | character varying        | character varying(200)   | NULL     | -
 custodian_phone                 | character varying        | character varying(15)    | NULL     | -
 purchase_date                   | date                     | date                     | NOT NULL | -
 purchase_order_number           | character varying        | character varying(50)    | NULL     | -
 vendor_id                       | uuid                     | uuid                     | NULL     | -
 vendor_name                     | character varying        | character varying(200)   | NOT NULL | -
 vendor_invoice_number           | character varying        | character varying(50)    | NULL     | -
 vendor_invoice_date             | date                     | date                     | NULL     | -
 purchase_price                  | numeric                  | numeric                  | NOT NULL | -
 purchase_currency               | character varying        | character varying(10)    | NULL     | 'INR'::character varying
 gst_percentage                  | numeric                  | numeric                  | NULL     | -
 gst_amount                      | numeric                  | numeric                  | NULL     | -
 total_cost                      | numeric                  | numeric                  | NOT NULL | -
 payment_mode                    | character varying        | character varying(30)    | NULL     | -
 payment_status                  | character varying        | character varying(30)    | NULL     | 'PAID'::character varying
 has_warranty                    | boolean                  | boolean                  | NULL     | false
 warranty_period_months          | integer                  | integer                  | NULL     | -
 warranty_start_date             | date                     | date                     | NULL     | -
 warranty_end_date               | date                     | date                     | NULL     | -
 warranty_terms                  | text                     | text                     | NULL     | -
 is_under_warranty               | boolean                  | boolean                  | NULL     | false
 has_amc                         | boolean                  | boolean                  | NULL     | false
 amc_provider                    | character varying        | character varying(200)   | NULL     | -
 amc_start_date                  | date                     | date                     | NULL     | -
 amc_end_date                    | date                     | date                     | NULL     | -
 amc_annual_cost                 | numeric                  | numeric                  | NULL     | -
 has_insurance                   | boolean                  | boolean                  | NULL     | false
 insurance_provider              | character varying        | character varying(200)   | NULL     | -
 insurance_policy_number         | character varying        | character varying(50)    | NULL     | -
 insurance_coverage_amount       | numeric                  | numeric                  | NULL     | -
 insurance_valid_till            | date                     | date                     | NULL     | -
 make                            | character varying        | character varying(100)   | NULL     | -
 model                           | character varying        | character varying(100)   | NULL     | -
 serial_number                   | character varying        | character varying(100)   | NULL     | -
 year_of_manufacture             | integer                  | integer                  | NULL     | -
 technical_specifications        | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 capacity                        | character varying        | character varying(50)    | NULL     | -
 dimensions                      | character varying        | character varying(100)   | NULL     | -
 weight_kg                       | numeric                  | numeric                  | NULL     | -
 color                           | character varying        | character varying(50)    | NULL     | -
 depreciation_method             | character varying        | character varying(30)    | NULL     | -
 depreciation_rate_percentage    | numeric                  | numeric                  | NULL     | -
 useful_life_years               | integer                  | integer                  | NULL     | -
 residual_value                  | numeric                  | numeric                  | NULL     | -
 current_book_value              | numeric                  | numeric                  | NULL     | -
 accumulated_depreciation        | numeric                  | numeric                  | NULL     | -
 last_depreciation_date          | date                     | date                     | NULL     | -
 condition_status                | character varying        | character varying(30)    | NULL     | 'GOOD'::character varying
 operational_status              | character varying        | character varying(30)    | NULL     | 'OPERATIONAL'::character varying
 last_inspection_date            | date                     | date                     | NULL     | -
 next_inspection_due_date        | date                     | date                     | NULL     | -
 requires_regular_maintenance    | boolean                  | boolean                  | NULL     | false
 maintenance_frequency_days      | integer                  | integer                  | NULL     | -
 last_maintenance_date           | date                     | date                     | NULL     | -
 next_maintenance_due_date       | date                     | date                     | NULL     | -
 total_maintenance_cost          | numeric                  | numeric                  | NULL     | 0.00
 maintenance_count               | integer                  | integer                  | NULL     | 0
 repair_count                    | integer                  | integer                  | NULL     | 0
 total_repair_cost               | numeric                  | numeric                  | NULL     | 0.00
 last_repair_date                | date                     | date                     | NULL     | -
 usage_meter_type                | character varying        | character varying(30)    | NULL     | -
 current_meter_reading           | numeric                  | numeric                  | NULL     | -
 last_meter_reading_date         | date                     | date                     | NULL     | -
 total_usage_hours               | integer                  | integer                  | NULL     | -
 commissioning_date              | date                     | date                     | NULL     | -
 expected_retirement_date        | date                     | date                     | NULL     | -
 actual_retirement_date          | date                     | date                     | NULL     | -
 disposal_date                   | date                     | date                     | NULL     | -
 disposal_method                 | character varying        | character varying(50)    | NULL     | -
 disposal_amount                 | numeric                  | numeric                  | NULL     | -
 disposal_remarks                | text                     | text                     | NULL     | -
 has_school_marking              | boolean                  | boolean                  | NULL     | true
 marking_details                 | text                     | text                     | NULL     | -
 has_rfid_tag                    | boolean                  | boolean                  | NULL     | false
 rfid_tag_number                 | character varying        | character varying(50)    | NULL     | -
 requires_safety_certification   | boolean                  | boolean                  | NULL     | false
 safety_certificate_number       | character varying        | character varying(50)    | NULL     | -
 safety_certificate_valid_till   | date                     | date                     | NULL     | -
 fire_safety_compliant           | boolean                  | boolean                  | NULL     | true
 purchase_invoice_url            | text                     | text                     | NULL     | -
 warranty_card_url               | text                     | text                     | NULL     | -
 user_manual_url                 | text                     | text                     | NULL     | -
 asset_photos                    | ARRAY                    | ARRAY                    | NULL     | -
 documents                       | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 transfer_history                | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 is_movable                      | boolean                  | boolean                  | NULL     | true
 is_critical_asset               | boolean                  | boolean                  | NULL     | false
 requires_approval_for_movement  | boolean                  | boolean                  | NULL     | false
 last_physical_verification_date | date                     | date                     | NULL     | -
 verified_by                     | uuid                     | uuid                     | NULL     | -
 verification_status             | character varying        | character varying(30)    | NULL     | 'VERIFIED'::character varying
 discrepancy_remarks             | text                     | text                     | NULL     | -
 status                          | character varying        | character varying(30)    | NULL     | 'ACTIVE'::character varying
 is_active                       | boolean                  | boolean                  | NULL     | true
 metadata                        | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 custom_fields                   | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 notes                           | text                     | text                     | NULL     | -
 remarks                         | text                     | text                     | NULL     | -
 created_by                      | uuid                     | uuid                     | NULL     | -
 created_at                      | timestamp with time zone | timestamp with time zone | NULL     | now()
 updated_at                      | timestamp with time zone | timestamp with time zone | NULL     | now()
(129 rows)


### automated_alerts

               Column               |           Type           |        Full Type         | Nullable |              Default               
------------------------------------+--------------------------+--------------------------+----------+------------------------------------
 id                                 | uuid                     | uuid                     | NOT NULL | gen_random_uuid()
 school_id                          | uuid                     | uuid                     | NOT NULL | -
 alert_code                         | character varying        | character varying(50)    | NOT NULL | -
 alert_name                         | character varying        | character varying(200)   | NOT NULL | -
 alert_description                  | text                     | text                     | NULL     | -
 alert_type                         | character varying        | character varying(50)    | NOT NULL | -
 alert_category                     | character varying        | character varying(50)    | NULL     | -
 alert_subcategory                  | character varying        | character varying(50)    | NULL     | -
 trigger_event                      | character varying        | character varying(50)    | NOT NULL | -
 trigger_conditions                 | jsonb                    | jsonb                    | NOT NULL | -
 trigger_query                      | text                     | text                     | NULL     | -
 event_type                         | character varying        | character varying(50)    | NULL     | -
 event_source                       | character varying        | character varying(50)    | NULL     | -
 schedule_type                      | character varying        | character varying(30)    | NULL     | -
 schedule_time                      | time without time zone   | time without time zone   | NULL     | -
 schedule_days                      | ARRAY                    | ARRAY                    | NULL     | -
 schedule_cron                      | character varying        | character varying(100)   | NULL     | -
 timezone                           | character varying        | character varying(50)    | NULL     | 'Asia/Kolkata'::character varying
 threshold_field                    | character varying        | character varying(100)   | NULL     | -
 threshold_operator                 | character varying        | character varying(20)    | NULL     | -
 threshold_value                    | numeric                  | numeric                  | NULL     | -
 threshold_percentage               | numeric                  | numeric                  | NULL     | -
 condition_rules                    | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 condition_logic                    | character varying        | character varying(10)    | NULL     | 'AND'::character varying
 applies_to_classes                 | ARRAY                    | ARRAY                    | NULL     | -
 applies_to_sections                | ARRAY                    | ARRAY                    | NULL     | -
 applies_to_students                | ARRAY                    | ARRAY                    | NULL     | -
 applies_to_roles                   | ARRAY                    | ARRAY                    | NULL     | -
 target_recipient_type              | character varying        | character varying(30)    | NULL     | 'AUTO'::character varying
 target_recipient_ids               | ARRAY                    | ARRAY                    | NULL     | -
 dynamic_recipient_query            | text                     | text                     | NULL     | -
 send_to_student                    | boolean                  | boolean                  | NULL     | false
 send_to_parent                     | boolean                  | boolean                  | NULL     | true
 send_to_class_teacher              | boolean                  | boolean                  | NULL     | false
 send_to_principal                  | boolean                  | boolean                  | NULL     | false
 send_to_admin                      | boolean                  | boolean                  | NULL     | false
 additional_recipients              | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 channels                           | ARRAY                    | ARRAY                    | NOT NULL | ARRAY['EMAIL'::text]
 primary_channel                    | character varying        | character varying(30)    | NULL     | 'EMAIL'::character varying
 fallback_channels                  | ARRAY                    | ARRAY                    | NULL     | -
 enable_sms                         | boolean                  | boolean                  | NULL     | false
 enable_email                       | boolean                  | boolean                  | NULL     | true
 enable_whatsapp                    | boolean                  | boolean                  | NULL     | false
 enable_push                        | boolean                  | boolean                  | NULL     | true
 enable_in_app                      | boolean                  | boolean                  | NULL     | true
 sms_template_id                    | uuid                     | uuid                     | NULL     | -
 email_template_id                  | uuid                     | uuid                     | NULL     | -
 whatsapp_template_id               | uuid                     | uuid                     | NULL     | -
 message_subject                    | character varying        | character varying(200)   | NULL     | -
 message_body                       | text                     | text                     | NULL     | -
 message_variables                  | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 priority                           | integer                  | integer                  | NULL     | 1
 is_urgent                          | boolean                  | boolean                  | NULL     | false
 is_critical                        | boolean                  | boolean                  | NULL     | false
 max_alerts_per_recipient_per_day   | integer                  | integer                  | NULL     | -
 max_alerts_per_recipient_per_week  | integer                  | integer                  | NULL     | -
 max_alerts_per_recipient_per_month | integer                  | integer                  | NULL     | -
 min_interval_between_alerts_hours  | integer                  | integer                  | NULL     | 24
 suppress_duplicate_alerts          | boolean                  | boolean                  | NULL     | true
 duplicate_check_window_hours       | integer                  | integer                  | NULL     | 24
 respect_quiet_hours                | boolean                  | boolean                  | NULL     | true
 quiet_hours_start                  | time without time zone   | time without time zone   | NULL     | '22:00:00'::time without time zone
 quiet_hours_end                    | time without time zone   | time without time zone   | NULL     | '08:00:00'::time without time zone
 send_on_weekends                   | boolean                  | boolean                  | NULL     | true
 send_on_holidays                   | boolean                  | boolean                  | NULL     | false
 retry_on_failure                   | boolean                  | boolean                  | NULL     | true
 max_retries                        | integer                  | integer                  | NULL     | 3
 retry_delay_minutes                | integer                  | integer                  | NULL     | 5
 batch_processing                   | boolean                  | boolean                  | NULL     | false
 batch_size                         | integer                  | integer                  | NULL     | 100
 is_active                          | boolean                  | boolean                  | NULL     | true
 activation_date                    | date                     | date                     | NULL     | -
 deactivation_date                  | date                     | date                     | NULL     | -
 auto_activate                      | boolean                  | boolean                  | NULL     | false
 auto_deactivate                    | boolean                  | boolean                  | NULL     | false
 last_triggered_at                  | timestamp with time zone | timestamp with time zone | NULL     | -
 last_execution_status              | character varying        | character varying(30)    | NULL     | -
 last_execution_duration_seconds    | integer                  | integer                  | NULL     | -
 total_triggered                    | integer                  | integer                  | NULL     | 0
 total_successful                   | integer                  | integer                  | NULL     | 0
 total_failed                       | integer                  | integer                  | NULL     | 0
 total_recipients_notified          | integer                  | integer                  | NULL     | 0
 total_messages_sent                | integer                  | integer                  | NULL     | 0
 total_messages_delivered           | integer                  | integer                  | NULL     | 0
 success_rate                       | numeric                  | numeric                  | NULL     | -
 next_scheduled_run                 | timestamp with time zone | timestamp with time zone | NULL     | -
 average_execution_time_seconds     | numeric                  | numeric                  | NULL     | -
 average_recipients_per_execution   | integer                  | integer                  | NULL     | -
 last_error_message                 | text                     | text                     | NULL     | -
 last_error_timestamp               | timestamp with time zone | timestamp with time zone | NULL     | -
 consecutive_failures               | integer                  | integer                  | NULL     | 0
 auto_disable_on_failure            | boolean                  | boolean                  | NULL     | false
 failure_threshold                  | integer                  | integer                  | NULL     | 5
 enable_logging                     | boolean                  | boolean                  | NULL     | true
 log_level                          | character varying        | character varying(20)    | NULL     | 'INFO'::character varying
 execution_logs                     | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 requires_approval                  | boolean                  | boolean                  | NULL     | false
 approved_by                        | uuid                     | uuid                     | NULL     | -
 approved_at                        | timestamp with time zone | timestamp with time zone | NULL     | -
 compliance_checked                 | boolean                  | boolean                  | NULL     | false
 compliance_notes                   | text                     | text                     | NULL     | -
 test_mode                          | boolean                  | boolean                  | NULL     | false
 test_recipients                    | ARRAY                    | ARRAY                    | NULL     | -
 dry_run_enabled                    | boolean                  | boolean                  | NULL     | false
 metadata                           | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 configuration                      | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 tags                               | ARRAY                    | ARRAY                    | NULL     | -
 notes                              | text                     | text                     | NULL     | -
 created_by                         | uuid                     | uuid                     | NULL     | -
 created_at                         | timestamp with time zone | timestamp with time zone | NULL     | now()
 updated_at                         | timestamp with time zone | timestamp with time zone | NULL     | now()
(111 rows)


### book_copies

           Column            |           Type           |        Full Type         | Nullable |            Default             
-----------------------------+--------------------------+--------------------------+----------+--------------------------------
 id                          | uuid                     | uuid                     | NOT NULL | uuid_generate_v4()
 school_id                   | uuid                     | uuid                     | NOT NULL | -
 copy_code                   | character varying        | character varying(50)    | NOT NULL | -
 copy_number                 | integer                  | integer                  | NOT NULL | -
 book_id                     | uuid                     | uuid                     | NOT NULL | -
 barcode                     | character varying        | character varying(50)    | NULL     | -
 rfid_tag                    | character varying        | character varying(50)    | NULL     | -
 accession_number            | character varying        | character varying(50)    | NULL     | -
 copy_type                   | character varying        | character varying(30)    | NULL     | 'PHYSICAL'::character varying
 condition_status            | character varying        | character varying(30)    | NULL     | 'NEW'::character varying
 condition_description       | text                     | text                     | NULL     | -
 binding_condition           | character varying        | character varying(30)    | NULL     | 'INTACT'::character varying
 pages_condition             | character varying        | character varying(30)    | NULL     | 'INTACT'::character varying
 cover_condition             | character varying        | character varying(30)    | NULL     | 'INTACT'::character varying
 has_markings                | boolean                  | boolean                  | NULL     | false
 marking_details             | text                     | text                     | NULL     | -
 purchase_date               | date                     | date                     | NULL     | -
 purchase_price              | numeric                  | numeric                  | NULL     | -
 vendor_name                 | character varying        | character varying(200)   | NULL     | -
 invoice_number              | character varying        | character varying(50)    | NULL     | -
 current_value               | numeric                  | numeric                  | NULL     | -
 depreciation_percentage     | numeric                  | numeric                  | NULL     | -
 last_valuation_date         | date                     | date                     | NULL     | -
 location_rack               | character varying        | character varying(50)    | NULL     | -
 location_shelf              | character varying        | character varying(50)    | NULL     | -
 location_section            | character varying        | character varying(50)    | NULL     | -
 full_location               | character varying        | character varying(200)   | NULL     | -
 status                      | character varying        | character varying(30)    | NULL     | 'AVAILABLE'::character varying
 is_available                | boolean                  | boolean                  | NULL     | true
 is_reference_only           | boolean                  | boolean                  | NULL     | false
 currently_issued_to         | uuid                     | uuid                     | NULL     | -
 current_issue_id            | uuid                     | uuid                     | NULL     | -
 issue_date                  | date                     | date                     | NULL     | -
 due_date                    | date                     | date                     | NULL     | -
 is_overdue                  | boolean                  | boolean                  | NULL     | false
 days_overdue                | integer                  | integer                  | NULL     | 0
 is_reserved                 | boolean                  | boolean                  | NULL     | false
 reserved_by                 | uuid                     | uuid                     | NULL     | -
 reserved_date               | date                     | date                     | NULL     | -
 reservation_expires_on      | date                     | date                     | NULL     | -
 total_issues_count          | integer                  | integer                  | NULL     | 0
 first_issued_date           | date                     | date                     | NULL     | -
 last_issued_date            | date                     | date                     | NULL     | -
 last_returned_date          | date                     | date                     | NULL     | -
 average_issue_duration_days | numeric                  | numeric                  | NULL     | -
 total_overdue_count         | integer                  | integer                  | NULL     | 0
 total_fines_collected       | numeric                  | numeric                  | NULL     | 0.00
 times_damaged               | integer                  | integer                  | NULL     | 0
 last_damaged_date           | date                     | date                     | NULL     | -
 damage_history              | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 total_repair_cost           | numeric                  | numeric                  | NULL     | 0.00
 is_lost                     | boolean                  | boolean                  | NULL     | false
 lost_date                   | date                     | date                     | NULL     | -
 lost_by                     | uuid                     | uuid                     | NULL     | -
 loss_reason                 | text                     | text                     | NULL     | -
 compensation_amount         | numeric                  | numeric                  | NULL     | -
 compensation_received       | boolean                  | boolean                  | NULL     | false
 last_maintenance_date       | date                     | date                     | NULL     | -
 next_maintenance_date       | date                     | date                     | NULL     | -
 maintenance_history         | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 requires_repair             | boolean                  | boolean                  | NULL     | false
 repair_notes                | text                     | text                     | NULL     | -
 in_repair_since             | date                     | date                     | NULL     | -
 expected_return_from_repair | date                     | date                     | NULL     | -
 is_withdrawn                | boolean                  | boolean                  | NULL     | false
 withdrawn_date              | date                     | date                     | NULL     | -
 withdrawn_reason            | text                     | text                     | NULL     | -
 withdrawn_by                | uuid                     | uuid                     | NULL     | -
 disposal_method             | character varying        | character varying(30)    | NULL     | -
 disposal_date               | date                     | date                     | NULL     | -
 is_high_demand              | boolean                  | boolean                  | NULL     | false
 is_rare                     | boolean                  | boolean                  | NULL     | false
 requires_special_care       | boolean                  | boolean                  | NULL     | false
 special_care_instructions   | text                     | text                     | NULL     | -
 metadata                    | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 custom_fields               | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 notes                       | text                     | text                     | NULL     | -
 internal_notes              | text                     | text                     | NULL     | -
 created_by                  | uuid                     | uuid                     | NULL     | -
 created_at                  | timestamp with time zone | timestamp with time zone | NULL     | now()
 updated_at                  | timestamp with time zone | timestamp with time zone | NULL     | now()
(81 rows)


### book_issues

           Column            |           Type           |        Full Type         | Nullable |           Default            
-----------------------------+--------------------------+--------------------------+----------+------------------------------
 id                          | uuid                     | uuid                     | NOT NULL | uuid_generate_v4()
 school_id                   | uuid                     | uuid                     | NOT NULL | -
 academic_year_id            | uuid                     | uuid                     | NOT NULL | -
 issue_code                  | character varying        | character varying(50)    | NOT NULL | -
 issue_number                | character varying        | character varying(50)    | NOT NULL | -
 book_id                     | uuid                     | uuid                     | NOT NULL | -
 book_copy_id                | uuid                     | uuid                     | NOT NULL | -
 library_member_id           | uuid                     | uuid                     | NOT NULL | -
 book_title                  | character varying        | character varying(500)   | NULL     | -
 book_code                   | character varying        | character varying(50)    | NULL     | -
 member_name                 | character varying        | character varying(200)   | NULL     | -
 member_type                 | character varying        | character varying(30)    | NULL     | -
 student_id                  | uuid                     | uuid                     | NULL     | -
 staff_id                    | uuid                     | uuid                     | NULL     | -
 class_id                    | uuid                     | uuid                     | NULL     | -
 section_id                  | uuid                     | uuid                     | NULL     | -
 issue_date                  | date                     | date                     | NOT NULL | CURRENT_DATE
 issue_time                  | time without time zone   | time without time zone   | NULL     | CURRENT_TIME
 issue_timestamp             | timestamp with time zone | timestamp with time zone | NULL     | now()
 due_date                    | date                     | date                     | NOT NULL | -
 days_allowed                | integer                  | integer                  | NULL     | 14
 issue_method                | character varying        | character varying(30)    | NULL     | 'COUNTER'::character varying
 issued_by                   | uuid                     | uuid                     | NULL     | -
 issued_by_name              | character varying        | character varying(200)   | NULL     | -
 was_reserved                | boolean                  | boolean                  | NULL     | false
 reservation_id              | uuid                     | uuid                     | NULL     | -
 is_renewed                  | boolean                  | boolean                  | NULL     | false
 renewal_count               | integer                  | integer                  | NULL     | 0
 max_renewals_allowed        | integer                  | integer                  | NULL     | 2
 can_renew                   | boolean                  | boolean                  | NULL     | true
 renewal_blocked_reason      | text                     | text                     | NULL     | -
 last_renewed_date           | date                     | date                     | NULL     | -
 renewal_history             | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 status                      | character varying        | character varying(30)    | NULL     | 'ISSUED'::character varying
 is_active                   | boolean                  | boolean                  | NULL     | true
 is_overdue                  | boolean                  | boolean                  | NULL     | false
 overdue_since               | date                     | date                     | NULL     | -
 days_overdue                | integer                  | integer                  | NULL     | 0
 is_returned                 | boolean                  | boolean                  | NULL     | false
 return_date                 | date                     | date                     | NULL     | -
 return_time                 | time without time zone   | time without time zone   | NULL     | -
 return_timestamp            | timestamp with time zone | timestamp with time zone | NULL     | -
 returned_by                 | uuid                     | uuid                     | NULL     | -
 returned_by_name            | character varying        | character varying(200)   | NULL     | -
 days_taken                  | integer                  | integer                  | NULL     | -
 return_condition            | character varying        | character varying(30)    | NULL     | -
 return_condition_notes      | text                     | text                     | NULL     | -
 was_damaged_on_return       | boolean                  | boolean                  | NULL     | false
 damage_description          | text                     | text                     | NULL     | -
 damage_severity             | character varying        | character varying(20)    | NULL     | -
 fine_applicable             | boolean                  | boolean                  | NULL     | false
 fine_type                   | character varying        | character varying(30)    | NULL     | -
 fine_rate_per_day           | numeric                  | numeric                  | NULL     | -
 calculated_fine_amount      | numeric                  | numeric                  | NULL     | 0.00
 actual_fine_amount          | numeric                  | numeric                  | NULL     | 0.00
 fine_waived                 | boolean                  | boolean                  | NULL     | false
 fine_waived_amount          | numeric                  | numeric                  | NULL     | -
 fine_waiver_reason          | text                     | text                     | NULL     | -
 fine_waived_by              | uuid                     | uuid                     | NULL     | -
 fine_paid                   | boolean                  | boolean                  | NULL     | false
 fine_payment_date           | date                     | date                     | NULL     | -
 fine_payment_id             | uuid                     | uuid                     | NULL     | -
 reminder_sent_count         | integer                  | integer                  | NULL     | 0
 first_reminder_sent_at      | timestamp with time zone | timestamp with time zone | NULL     | -
 last_reminder_sent_at       | timestamp with time zone | timestamp with time zone | NULL     | -
 due_date_reminder_sent      | boolean                  | boolean                  | NULL     | false
 overdue_reminder_sent       | boolean                  | boolean                  | NULL     | false
 is_emergency_issue          | boolean                  | boolean                  | NULL     | false
 emergency_reason            | text                     | text                     | NULL     | -
 is_extended                 | boolean                  | boolean                  | NULL     | false
 extended_due_date           | date                     | date                     | NULL     | -
 extension_granted_by        | uuid                     | uuid                     | NULL     | -
 extension_reason            | text                     | text                     | NULL     | -
 is_lost                     | boolean                  | boolean                  | NULL     | false
 lost_reported_date          | date                     | date                     | NULL     | -
 lost_reason                 | text                     | text                     | NULL     | -
 compensation_required       | boolean                  | boolean                  | NULL     | false
 compensation_amount         | numeric                  | numeric                  | NULL     | -
 compensation_paid           | boolean                  | boolean                  | NULL     | false
 compensation_payment_date   | date                     | date                     | NULL     | -
 is_damaged                  | boolean                  | boolean                  | NULL     | false
 damaged_reported_date       | date                     | date                     | NULL     | -
 damage_cost                 | numeric                  | numeric                  | NULL     | -
 damage_cost_paid            | boolean                  | boolean                  | NULL     | false
 member_rating               | integer                  | integer                  | NULL     | -
 member_feedback             | text                     | text                     | NULL     | -
 behavior_notes              | text                     | text                     | NULL     | -
 issue_photo_url             | text                     | text                     | NULL     | -
 return_photo_url            | text                     | text                     | NULL     | -
 damage_photo_urls           | ARRAY                    | ARRAY                    | NULL     | -
 auto_renewed                | boolean                  | boolean                  | NULL     | false
 auto_renewal_failed         | boolean                  | boolean                  | NULL     | false
 auto_renewal_failure_reason | text                     | text                     | NULL     | -
 system_generated_issue      | boolean                  | boolean                  | NULL     | false
 linked_to_assignment        | uuid                     | uuid                     | NULL     | -
 linked_to_project           | uuid                     | uuid                     | NULL     | -
 reading_completed           | boolean                  | boolean                  | NULL     | -
 reading_progress_percentage | integer                  | integer                  | NULL     | -
 book_rating                 | integer                  | integer                  | NULL     | -
 book_review                 | text                     | text                     | NULL     | -
 metadata                    | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 custom_fields               | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 notes                       | text                     | text                     | NULL     | -
 internal_notes              | text                     | text                     | NULL     | -
 created_by                  | uuid                     | uuid                     | NULL     | -
 created_at                  | timestamp with time zone | timestamp with time zone | NULL     | now()
 updated_at                  | timestamp with time zone | timestamp with time zone | NULL     | now()
(107 rows)


### book_returns

       Column        |           Type           |        Full Type         | Nullable |           Default            
---------------------+--------------------------+--------------------------+----------+------------------------------
 id                  | uuid                     | uuid                     | NOT NULL | uuid_generate_v4()
 school_id           | uuid                     | uuid                     | NOT NULL | -
 academic_year_id    | uuid                     | uuid                     | NOT NULL | -
 return_code         | character varying        | character varying(50)    | NOT NULL | -
 return_number       | character varying        | character varying(50)    | NOT NULL | -
 book_issue_id       | uuid                     | uuid                     | NOT NULL | -
 book_id             | uuid                     | uuid                     | NOT NULL | -
 book_copy_id        | uuid                     | uuid                     | NOT NULL | -
 library_member_id   | uuid                     | uuid                     | NOT NULL | -
 book_title          | character varying        | character varying(500)   | NULL     | -
 member_name         | character varying        | character varying(200)   | NULL     | -
 student_id          | uuid                     | uuid                     | NULL     | -
 staff_id            | uuid                     | uuid                     | NULL     | -
 return_date         | date                     | date                     | NOT NULL | CURRENT_DATE
 return_time         | time without time zone   | time without time zone   | NULL     | CURRENT_TIME
 return_timestamp    | timestamp with time zone | timestamp with time zone | NULL     | now()
 issue_date          | date                     | date                     | NOT NULL | -
 due_date            | date                     | date                     | NOT NULL | -
 days_issued         | integer                  | integer                  | NULL     | -
 return_status       | character varying        | character varying(30)    | NULL     | 'ON_TIME'::character varying
 was_overdue         | boolean                  | boolean                  | NULL     | false
 days_overdue        | integer                  | integer                  | NULL     | 0
 return_method       | character varying        | character varying(30)    | NULL     | 'COUNTER'::character varying
 received_by         | uuid                     | uuid                     | NULL     | -
 received_by_name    | character varying        | character varying(200)   | NULL     | -
 condition_on_return | character varying        | character varying(30)    | NULL     | 'GOOD'::character varying
 is_damaged          | boolean                  | boolean                  | NULL     | false
 damage_description  | text                     | text                     | NULL     | -
 fine_applicable     | boolean                  | boolean                  | NULL     | false
 overdue_fine_amount | numeric                  | numeric                  | NULL     | 0.00
 metadata            | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 created_at          | timestamp with time zone | timestamp with time zone | NULL     | now()
 updated_at          | timestamp with time zone | timestamp with time zone | NULL     | now()
(33 rows)


### class_timetables

                Column                |           Type           |        Full Type         | Nullable |              Default               
--------------------------------------+--------------------------+--------------------------+----------+------------------------------------
 id                                   | uuid                     | uuid                     | NOT NULL | uuid_generate_v4()
 school_id                            | uuid                     | uuid                     | NOT NULL | -
 academic_year_id                     | uuid                     | uuid                     | NOT NULL | -
 timetable_code                       | character varying        | character varying(50)    | NOT NULL | -
 timetable_name                       | character varying        | character varying(200)   | NULL     | -
 template_id                          | uuid                     | uuid                     | NOT NULL | -
 class_id                             | uuid                     | uuid                     | NOT NULL | -
 class_name                           | character varying        | character varying(100)   | NULL     | -
 grade_level                          | character varying        | character varying(20)    | NULL     | -
 section_id                           | uuid                     | uuid                     | NULL     | -
 section_name                         | character varying        | character varying(50)    | NULL     | -
 total_students                       | integer                  | integer                  | NULL     | 0
 class_teacher_id                     | uuid                     | uuid                     | NULL     | -
 class_teacher_name                   | character varying        | character varying(200)   | NULL     | -
 total_periods_per_week               | integer                  | integer                  | NULL     | 42
 total_teaching_periods               | integer                  | integer                  | NULL     | -
 total_break_periods                  | integer                  | integer                  | NULL     | -
 total_free_periods                   | integer                  | integer                  | NULL     | 0
 total_subjects                       | integer                  | integer                  | NULL     | 0
 subjects_covered                     | ARRAY                    | ARRAY                    | NULL     | -
 subject_names                        | ARRAY                    | ARRAY                    | NULL     | -
 subject_period_distribution          | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 total_teachers_assigned              | integer                  | integer                  | NULL     | 0
 assigned_teachers                    | ARRAY                    | ARRAY                    | NULL     | -
 teacher_names                        | ARRAY                    | ARRAY                    | NULL     | -
 teacher_subject_mapping              | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 primary_classroom                    | character varying        | character varying(50)    | NULL     | -
 room_assignments                     | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 requires_multiple_rooms              | boolean                  | boolean                  | NULL     | false
 school_start_time                    | time without time zone   | time without time zone   | NULL     | '08:00:00'::time without time zone
 school_end_time                      | time without time zone   | time without time zone   | NULL     | '15:00:00'::time without time zone
 total_instructional_hours            | numeric                  | numeric                  | NULL     | -
 monday_periods                       | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 tuesday_periods                      | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 wednesday_periods                    | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 thursday_periods                     | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 friday_periods                       | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 saturday_periods                     | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 sunday_periods                       | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 library_periods_per_week             | integer                  | integer                  | NULL     | 1
 sports_periods_per_week              | integer                  | integer                  | NULL     | 2
 computer_periods_per_week            | integer                  | integer                  | NULL     | 1
 activity_periods_per_week            | integer                  | integer                  | NULL     | 1
 has_assembly                         | boolean                  | boolean                  | NULL     | true
 assembly_day                         | integer                  | integer                  | NULL     | 1
 max_consecutive_periods_same_subject | integer                  | integer                  | NULL     | 2
 free_periods_allowed                 | integer                  | integer                  | NULL     | 1
 heavy_subjects_distribution_balanced | boolean                  | boolean                  | NULL     | true
 total_conflicts                      | integer                  | integer                  | NULL     | 0
 teacher_conflicts                    | integer                  | integer                  | NULL     | 0
 room_conflicts                       | integer                  | integer                  | NULL     | 0
 resource_conflicts                   | integer                  | integer                  | NULL     | 0
 has_unresolved_conflicts             | boolean                  | boolean                  | NULL     | false
 conflict_details                     | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 is_validated                         | boolean                  | boolean                  | NULL     | false
 validated_at                         | timestamp with time zone | timestamp with time zone | NULL     | -
 validated_by                         | uuid                     | uuid                     | NULL     | -
 validation_errors                    | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 validation_warnings                  | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 approval_status                      | character varying        | character varying(30)    | NULL     | 'DRAFT'::character varying
 submitted_for_approval_at            | timestamp with time zone | timestamp with time zone | NULL     | -
 submitted_by                         | uuid                     | uuid                     | NULL     | -
 approved_by                          | uuid                     | uuid                     | NULL     | -
 approved_at                          | timestamp with time zone | timestamp with time zone | NULL     | -
 approval_notes                       | text                     | text                     | NULL     | -
 rejected_by                          | uuid                     | uuid                     | NULL     | -
 rejection_reason                     | text                     | text                     | NULL     | -
 is_published                         | boolean                  | boolean                  | NULL     | false
 published_at                         | timestamp with time zone | timestamp with time zone | NULL     | -
 published_by                         | uuid                     | uuid                     | NULL     | -
 publish_to_students                  | boolean                  | boolean                  | NULL     | true
 publish_to_parents                   | boolean                  | boolean                  | NULL     | true
 effective_from                       | date                     | date                     | NOT NULL | -
 effective_to                         | date                     | date                     | NULL     | -
 is_currently_active                  | boolean                  | boolean                  | NULL     | false
 last_modified_date                   | date                     | date                     | NULL     | -
 last_modified_by                     | uuid                     | uuid                     | NULL     | -
 modification_count                   | integer                  | integer                  | NULL     | 0
 major_changes_log                    | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 last_printed_at                      | timestamp with time zone | timestamp with time zone | NULL     | -
 print_count                          | integer                  | integer                  | NULL     | 0
 last_exported_at                     | timestamp with time zone | timestamp with time zone | NULL     | -
 export_count                         | integer                  | integer                  | NULL     | 0
 average_periods_per_day              | numeric                  | numeric                  | NULL     | -
 subject_variety_score                | numeric                  | numeric                  | NULL     | -
 balance_score                        | numeric                  | numeric                  | NULL     | -
 student_satisfaction_score           | numeric                  | numeric                  | NULL     | -
 teacher_satisfaction_score           | numeric                  | numeric                  | NULL     | -
 is_active                            | boolean                  | boolean                  | NULL     | true
 is_locked                            | boolean                  | boolean                  | NULL     | false
 is_archived                          | boolean                  | boolean                  | NULL     | false
 metadata                             | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 configuration                        | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 tags                                 | ARRAY                    | ARRAY                    | NULL     | -
 notes                                | text                     | text                     | NULL     | -
 created_by                           | uuid                     | uuid                     | NULL     | -
 created_at                           | timestamp with time zone | timestamp with time zone | NULL     | now()
 updated_at                           | timestamp with time zone | timestamp with time zone | NULL     | now()
(98 rows)


### classes

      Column      |           Type           |        Full Type         | Nullable |           Default            
------------------+--------------------------+--------------------------+----------+------------------------------
 id               | uuid                     | uuid                     | NOT NULL | gen_random_uuid()
 school_id        | uuid                     | uuid                     | NOT NULL | -
 class_code       | character varying        | character varying(20)    | NOT NULL | -
 class_name       | character varying        | character varying(100)   | NOT NULL | -
 display_order    | integer                  | integer                  | NOT NULL | 0
 grade_level      | character varying        | character varying(20)    | NULL     | -
 class_type       | character varying        | character varying(30)    | NULL     | 'REGULAR'::character varying
 capacity         | integer                  | integer                  | NULL     | -
 current_strength | integer                  | integer                  | NULL     | 0
 is_active        | boolean                  | boolean                  | NOT NULL | true
 created_at       | timestamp with time zone | timestamp with time zone | NOT NULL | now()
 updated_at       | timestamp with time zone | timestamp with time zone | NOT NULL | now()
(12 rows)


### clubs_societies

            Column             |           Type           |        Full Type         | Nullable |           Default           
-------------------------------+--------------------------+--------------------------+----------+-----------------------------
 id                            | uuid                     | uuid                     | NOT NULL | uuid_generate_v4()
 school_id                     | uuid                     | uuid                     | NOT NULL | -
 academic_year_id              | uuid                     | uuid                     | NOT NULL | -
 club_code                     | character varying        | character varying(50)    | NOT NULL | -
 club_name                     | character varying        | character varying(200)   | NOT NULL | -
 club_short_name               | character varying        | character varying(50)    | NULL     | -
 club_type                     | character varying        | character varying(50)    | NOT NULL | -
 club_category                 | character varying        | character varying(50)    | NULL     | -
 description                   | text                     | text                     | NOT NULL | -
 objectives                    | ARRAY                    | ARRAY                    | NULL     | -
 vision                        | text                     | text                     | NULL     | -
 mission                       | text                     | text                     | NULL     | -
 establishment_date            | date                     | date                     | NOT NULL | -
 established_by                | character varying        | character varying(200)   | NULL     | -
 faculty_incharge_id           | uuid                     | uuid                     | NOT NULL | -
 faculty_incharge_name         | character varying        | character varying(200)   | NULL     | -
 faculty_incharge_phone        | character varying        | character varying(15)    | NULL     | -
 co_incharge_id                | uuid                     | uuid                     | NULL     | -
 co_incharge_name              | character varying        | character varying(200)   | NULL     | -
 faculty_advisors              | ARRAY                    | ARRAY                    | NULL     | -
 has_student_leadership        | boolean                  | boolean                  | NULL     | true
 president_student_id          | uuid                     | uuid                     | NULL     | -
 president_name                | character varying        | character varying(200)   | NULL     | -
 vice_president_student_id     | uuid                     | uuid                     | NULL     | -
 vice_president_name           | character varying        | character varying(200)   | NULL     | -
 secretary_student_id          | uuid                     | uuid                     | NULL     | -
 secretary_name                | character varying        | character varying(200)   | NULL     | -
 treasurer_student_id          | uuid                     | uuid                     | NULL     | -
 student_committee             | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 membership_type               | character varying        | character varying(30)    | NULL     | 'OPEN'::character varying
 membership_fee                | numeric                  | numeric                  | NULL     | 0.00
 has_membership_fee            | boolean                  | boolean                  | NULL     | false
 total_members                 | integer                  | integer                  | NULL     | 0
 max_members                   | integer                  | integer                  | NULL     | -
 membership_open               | boolean                  | boolean                  | NULL     | true
 membership_criteria           | text                     | text                     | NULL     | -
 current_members_count         | integer                  | integer                  | NULL     | 0
 members_list                  | ARRAY                    | ARRAY                    | NULL     | -
 eligible_classes              | ARRAY                    | ARRAY                    | NULL     | -
 min_age                       | integer                  | integer                  | NULL     | -
 max_age                       | integer                  | integer                  | NULL     | -
 regular_meetings              | boolean                  | boolean                  | NULL     | true
 meeting_frequency             | character varying        | character varying(50)    | NULL     | -
 meeting_day                   | character varying        | character varying(20)    | NULL     | -
 meeting_time                  | time without time zone   | time without time zone   | NULL     | -
 meeting_venue                 | character varying        | character varying(200)   | NULL     | -
 last_meeting_date             | date                     | date                     | NULL     | -
 next_meeting_date             | date                     | date                     | NULL     | -
 meetings_conducted            | integer                  | integer                  | NULL     | 0
 activities_planned            | integer                  | integer                  | NULL     | 0
 activities_completed          | integer                  | integer                  | NULL     | 0
 activity_calendar             | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 major_events                  | ARRAY                    | ARRAY                    | NULL     | -
 annual_budget                 | numeric                  | numeric                  | NULL     | -
 budget_utilized               | numeric                  | numeric                  | NULL     | -
 fund_sources                  | ARRAY                    | ARRAY                    | NULL     | -
 achievements                  | ARRAY                    | ARRAY                    | NULL     | -
 awards_won                    | ARRAY                    | ARRAY                    | NULL     | -
 participation_in_competitions | integer                  | integer                  | NULL     | 0
 competitions_won              | integer                  | integer                  | NULL     | 0
 dedicated_room                | boolean                  | boolean                  | NULL     | false
 room_number                   | character varying        | character varying(20)    | NULL     | -
 equipment_available           | ARRAY                    | ARRAY                    | NULL     | -
 materials_inventory           | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 email_id                      | character varying        | character varying(100)   | NULL     | -
 social_media_handles          | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 has_website                   | boolean                  | boolean                  | NULL     | false
 website_url                   | text                     | text                     | NULL     | -
 annual_report_required        | boolean                  | boolean                  | NULL     | true
 annual_report_submitted       | boolean                  | boolean                  | NULL     | false
 annual_report_url             | text                     | text                     | NULL     | -
 status                        | character varying        | character varying(30)    | NULL     | 'ACTIVE'::character varying
 is_active                     | boolean                  | boolean                  | NULL     | true
 deactivation_date             | date                     | date                     | NULL     | -
 deactivation_reason           | text                     | text                     | NULL     | -
 constitution_url              | text                     | text                     | NULL     | -
 membership_form_url           | text                     | text                     | NULL     | -
 documents                     | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 metadata                      | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 notes                         | text                     | text                     | NULL     | -
 created_by                    | uuid                     | uuid                     | NULL     | -
 created_at                    | timestamp with time zone | timestamp with time zone | NULL     | now()
 updated_at                    | timestamp with time zone | timestamp with time zone | NULL     | now()
(83 rows)


### communication_channels

             Column             |           Type           |        Full Type         | Nullable |           Default            
--------------------------------+--------------------------+--------------------------+----------+------------------------------
 id                             | uuid                     | uuid                     | NOT NULL | gen_random_uuid()
 school_id                      | uuid                     | uuid                     | NOT NULL | -
 channel_code                   | character varying        | character varying(20)    | NOT NULL | -
 channel_name                   | character varying        | character varying(100)   | NOT NULL | -
 channel_description            | text                     | text                     | NULL     | -
 channel_type                   | character varying        | character varying(30)    | NOT NULL | -
 channel_subtype                | character varying        | character varying(50)    | NULL     | -
 provider_name                  | character varying        | character varying(50)    | NOT NULL | -
 provider_type                  | character varying        | character varying(30)    | NULL     | -
 provider_api_key               | text                     | text                     | NULL     | -
 provider_api_secret            | text                     | text                     | NULL     | -
 provider_auth_token            | text                     | text                     | NULL     | -
 provider_api_endpoint          | text                     | text                     | NULL     | -
 provider_api_version           | character varying        | character varying(20)    | NULL     | -
 provider_region                | character varying        | character varying(50)    | NULL     | -
 sms_sender_id                  | character varying        | character varying(20)    | NULL     | -
 sms_entity_id                  | character varying        | character varying(50)    | NULL     | -
 dlt_entity_id                  | character varying        | character varying(50)    | NULL     | -
 dlt_principal_entity_id        | character varying        | character varying(50)    | NULL     | -
 dlt_registered                 | boolean                  | boolean                  | NULL     | false
 dlt_registration_date          | date                     | date                     | NULL     | -
 dlt_expiry_date                | date                     | date                     | NULL     | -
 requires_template_registration | boolean                  | boolean                  | NULL     | false
 default_template_id            | character varying        | character varying(50)    | NULL     | -
 smtp_host                      | character varying        | character varying(200)   | NULL     | -
 smtp_port                      | integer                  | integer                  | NULL     | -
 smtp_username                  | character varying        | character varying(200)   | NULL     | -
 smtp_password                  | text                     | text                     | NULL     | -
 smtp_encryption                | character varying        | character varying(10)    | NULL     | -
 smtp_timeout_seconds           | integer                  | integer                  | NULL     | 30
 from_email                     | character varying        | character varying(200)   | NULL     | -
 from_name                      | character varying        | character varying(200)   | NULL     | -
 reply_to_email                 | character varying        | character varying(200)   | NULL     | -
 bounce_email                   | character varying        | character varying(200)   | NULL     | -
 dkim_enabled                   | boolean                  | boolean                  | NULL     | false
 dkim_selector                  | character varying        | character varying(100)   | NULL     | -
 dkim_private_key               | text                     | text                     | NULL     | -
 spf_record                     | character varying        | character varying(500)   | NULL     | -
 dmarc_policy                   | character varying        | character varying(20)    | NULL     | -
 whatsapp_business_account_id   | character varying        | character varying(100)   | NULL     | -
 whatsapp_phone_number_id       | character varying        | character varying(100)   | NULL     | -
 whatsapp_phone_number          | character varying        | character varying(20)    | NULL     | -
 whatsapp_api_key               | text                     | text                     | NULL     | -
 whatsapp_webhook_verify_token  | text                     | text                     | NULL     | -
 whatsapp_display_name          | character varying        | character varying(100)   | NULL     | -
 whatsapp_quality_rating        | character varying        | character varying(20)    | NULL     | -
 whatsapp_status                | character varying        | character varying(20)    | NULL     | -
 priority_level                 | integer                  | integer                  | NULL     | 1
 is_default_channel             | boolean                  | boolean                  | NULL     | false
 load_balancing_weight          | integer                  | integer                  | NULL     | 100
 daily_quota                    | integer                  | integer                  | NULL     | -
 monthly_quota                  | integer                  | integer                  | NULL     | -
 annual_quota                   | integer                  | integer                  | NULL     | -
 current_daily_usage            | integer                  | integer                  | NULL     | 0
 current_monthly_usage          | integer                  | integer                  | NULL     | 0
 current_annual_usage           | integer                  | integer                  | NULL     | 0
 quota_reset_hour               | integer                  | integer                  | NULL     | 0
 rate_limit_per_second          | integer                  | integer                  | NULL     | 10
 rate_limit_per_minute          | integer                  | integer                  | NULL     | 60
 rate_limit_per_hour            | integer                  | integer                  | NULL     | 1000
 rate_limit_per_day             | integer                  | integer                  | NULL     | -
 burst_limit                    | integer                  | integer                  | NULL     | 50
 cost_per_message               | numeric                  | numeric                  | NULL     | -
 cost_per_unit                  | numeric                  | numeric                  | NULL     | -
 currency                       | character varying        | character varying(10)    | NULL     | 'INR'::character varying
 billing_cycle                  | character varying        | character varying(20)    | NULL     | 'MONTHLY'::character varying
 monthly_budget                 | numeric                  | numeric                  | NULL     | -
 budget_spent                   | numeric                  | numeric                  | NULL     | 0
 connection_timeout_seconds     | integer                  | integer                  | NULL     | 30
 read_timeout_seconds           | integer                  | integer                  | NULL     | 60
 max_retries                    | integer                  | integer                  | NULL     | 3
 retry_delay_seconds            | integer                  | integer                  | NULL     | 5
 use_connection_pooling         | boolean                  | boolean                  | NULL     | true
 max_connections                | integer                  | integer                  | NULL     | 10
 failover_enabled               | boolean                  | boolean                  | NULL     | true
 failover_channel_id            | uuid                     | uuid                     | NULL     | -
 auto_failover                  | boolean                  | boolean                  | NULL     | true
 failover_threshold_failures    | integer                  | integer                  | NULL     | 5
 health_check_enabled           | boolean                  | boolean                  | NULL     | true
 health_check_interval_minutes  | integer                  | integer                  | NULL     | 15
 health_check_endpoint          | text                     | text                     | NULL     | -
 last_health_check              | timestamp with time zone | timestamp with time zone | NULL     | -
 health_status                  | character varying        | character varying(20)    | NULL     | 'UNKNOWN'::character varying
 consecutive_failures           | integer                  | integer                  | NULL     | 0
 total_messages_sent            | integer                  | integer                  | NULL     | 0
 total_messages_delivered       | integer                  | integer                  | NULL     | 0
 total_messages_failed          | integer                  | integer                  | NULL     | 0
 average_delivery_time_seconds  | numeric                  | numeric                  | NULL     | -
 success_rate                   | numeric                  | numeric                  | NULL     | -
 webhook_url                    | text                     | text                     | NULL     | -
 webhook_secret                 | text                     | text                     | NULL     | -
 webhook_enabled                | boolean                  | boolean                  | NULL     | false
 webhook_events                 | ARRAY                    | ARRAY                    | NULL     | -
 is_active                      | boolean                  | boolean                  | NULL     | true
 is_verified                    | boolean                  | boolean                  | NULL     | false
 verified_date                  | date                     | date                     | NULL     | -
 verified_by                    | uuid                     | uuid                     | NULL     | -
 is_production                  | boolean                  | boolean                  | NULL     | false
 activation_date                | timestamp with time zone | timestamp with time zone | NULL     | -
 deactivation_date              | timestamp with time zone | timestamp with time zone | NULL     | -
 deactivation_reason            | text                     | text                     | NULL     | -
 last_used_at                   | timestamp with time zone | timestamp with time zone | NULL     | -
 maintenance_mode               | boolean                  | boolean                  | NULL     | false
 maintenance_start_time         | time without time zone   | time without time zone   | NULL     | -
 maintenance_end_time           | time without time zone   | time without time zone   | NULL     | -
 maintenance_message            | text                     | text                     | NULL     | -
 compliance_verified            | boolean                  | boolean                  | NULL     | false
 compliance_certificate_url     | text                     | text                     | NULL     | -
 audit_logging_enabled          | boolean                  | boolean                  | NULL     | true
 configuration_json             | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 metadata                       | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 notes                          | text                     | text                     | NULL     | -
 created_at                     | timestamp with time zone | timestamp with time zone | NULL     | now()
 updated_at                     | timestamp with time zone | timestamp with time zone | NULL     | now()
 created_by                     | uuid                     | uuid                     | NULL     | -
(115 rows)


### communication_logs

            Column             |           Type           |        Full Type         | Nullable |         Default          
-------------------------------+--------------------------+--------------------------+----------+--------------------------
 id                            | uuid                     | uuid                     | NOT NULL | gen_random_uuid()
 school_id                     | uuid                     | uuid                     | NOT NULL | -
 log_code                      | character varying        | character varying(50)    | NULL     | -
 log_uuid                      | uuid                     | uuid                     | NULL     | gen_random_uuid()
 communication_type            | character varying        | character varying(30)    | NOT NULL | -
 communication_subtype         | character varying        | character varying(50)    | NULL     | -
 sms_message_id                | uuid                     | uuid                     | NULL     | -
 email_message_id              | uuid                     | uuid                     | NULL     | -
 whatsapp_message_id           | uuid                     | uuid                     | NULL     | -
 push_notification_id          | uuid                     | uuid                     | NULL     | -
 in_app_notification_id        | uuid                     | uuid                     | NULL     | -
 announcement_id               | uuid                     | uuid                     | NULL     | -
 sender_id                     | uuid                     | uuid                     | NULL     | -
 sender_type                   | character varying        | character varying(20)    | NULL     | -
 sender_name                   | character varying        | character varying(200)   | NULL     | -
 sender_email                  | character varying        | character varying(200)   | NULL     | -
 sender_phone                  | character varying        | character varying(15)    | NULL     | -
 recipient_id                  | uuid                     | uuid                     | NULL     | -
 recipient_type                | character varying        | character varying(20)    | NULL     | -
 recipient_name                | character varying        | character varying(200)   | NULL     | -
 recipient_email               | character varying        | character varying(200)   | NULL     | -
 recipient_phone               | character varying        | character varying(15)    | NULL     | -
 total_recipients              | integer                  | integer                  | NULL     | 1
 recipient_list                | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 student_id                    | uuid                     | uuid                     | NULL     | -
 parent_id                     | uuid                     | uuid                     | NULL     | -
 class_id                      | uuid                     | uuid                     | NULL     | -
 section_id                    | uuid                     | uuid                     | NULL     | -
 subject                       | text                     | text                     | NULL     | -
 message_text                  | text                     | text                     | NULL     | -
 message_html                  | text                     | text                     | NULL     | -
 message_preview               | text                     | text                     | NULL     | -
 message_length                | integer                  | integer                  | NULL     | -
 word_count                    | integer                  | integer                  | NULL     | -
 has_attachments               | boolean                  | boolean                  | NULL     | false
 attachments                   | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 attachment_count              | integer                  | integer                  | NULL     | 0
 has_media                     | boolean                  | boolean                  | NULL     | false
 media_urls                    | ARRAY                    | ARRAY                    | NULL     | -
 channel                       | character varying        | character varying(30)    | NULL     | -
 channel_id                    | uuid                     | uuid                     | NULL     | -
 provider_name                 | character varying        | character varying(50)    | NULL     | -
 provider_message_id           | character varying        | character varying(100)   | NULL     | -
 template_id                   | uuid                     | uuid                     | NULL     | -
 template_code                 | character varying        | character varying(50)    | NULL     | -
 template_name                 | character varying        | character varying(200)   | NULL     | -
 status                        | character varying        | character varying(30)    | NOT NULL | -
 delivery_status               | character varying        | character varying(30)    | NULL     | -
 queued_at                     | timestamp with time zone | timestamp with time zone | NULL     | -
 sent_at                       | timestamp with time zone | timestamp with time zone | NULL     | -
 delivered_at                  | timestamp with time zone | timestamp with time zone | NULL     | -
 read_at                       | timestamp with time zone | timestamp with time zone | NULL     | -
 opened_at                     | timestamp with time zone | timestamp with time zone | NULL     | -
 clicked_at                    | timestamp with time zone | timestamp with time zone | NULL     | -
 failed_at                     | timestamp with time zone | timestamp with time zone | NULL     | -
 queue_wait_time_seconds       | integer                  | integer                  | NULL     | -
 delivery_time_seconds         | integer                  | integer                  | NULL     | -
 total_processing_time_seconds | integer                  | integer                  | NULL     | -
 is_delivered                  | boolean                  | boolean                  | NULL     | false
 is_read                       | boolean                  | boolean                  | NULL     | false
 is_opened                     | boolean                  | boolean                  | NULL     | false
 is_clicked                    | boolean                  | boolean                  | NULL     | false
 is_failed                     | boolean                  | boolean                  | NULL     | false
 open_count                    | integer                  | integer                  | NULL     | 0
 click_count                   | integer                  | integer                  | NULL     | 0
 first_open_at                 | timestamp with time zone | timestamp with time zone | NULL     | -
 last_open_at                  | timestamp with time zone | timestamp with time zone | NULL     | -
 first_click_at                | timestamp with time zone | timestamp with time zone | NULL     | -
 last_click_at                 | timestamp with time zone | timestamp with time zone | NULL     | -
 engagement_score              | numeric                  | numeric                  | NULL     | 0
 response_received             | boolean                  | boolean                  | NULL     | false
 response_text                 | text                     | text                     | NULL     | -
 response_timestamp            | timestamp with time zone | timestamp with time zone | NULL     | -
 response_data                 | jsonb                    | jsonb                    | NULL     | -
 failure_reason                | text                     | text                     | NULL     | -
 failure_code                  | character varying        | character varying(20)    | NULL     | -
 error_message                 | text                     | text                     | NULL     | -
 error_details                 | jsonb                    | jsonb                    | NULL     | -
 bounce_type                   | character varying        | character varying(20)    | NULL     | -
 bounce_reason                 | text                     | text                     | NULL     | -
 retry_count                   | integer                  | integer                  | NULL     | 0
 last_retry_at                 | timestamp with time zone | timestamp with time zone | NULL     | -
 cost                          | numeric                  | numeric                  | NULL     | -
 cost_currency                 | character varying        | character varying(10)    | NULL     | 'INR'::character varying
 credits_used                  | integer                  | integer                  | NULL     | 0
 priority                      | integer                  | integer                  | NULL     | 1
 importance                    | character varying        | character varying(20)    | NULL     | -
 scheduled_at                  | timestamp with time zone | timestamp with time zone | NULL     | -
 is_scheduled                  | boolean                  | boolean                  | NULL     | false
 campaign_id                   | character varying        | character varying(100)   | NULL     | -
 campaign_name                 | character varying        | character varying(200)   | NULL     | -
 campaign_type                 | character varying        | character varying(50)    | NULL     | -
 batch_id                      | character varying        | character varying(100)   | NULL     | -
 batch_name                    | character varying        | character varying(200)   | NULL     | -
 source_module                 | character varying        | character varying(50)    | NULL     | -
 source_record_id              | uuid                     | uuid                     | NULL     | -
 source_record_type            | character varying        | character varying(50)    | NULL     | -
 trigger_event                 | character varying        | character varying(50)    | NULL     | -
 trigger_conditions            | jsonb                    | jsonb                    | NULL     | -
 triggered_by                  | uuid                     | uuid                     | NULL     | -
 category                      | character varying        | character varying(50)    | NULL     | -
 subcategory                   | character varying        | character varying(50)    | NULL     | -
 tags                          | ARRAY                    | ARRAY                    | NULL     | -
 user_action_taken             | boolean                  | boolean                  | NULL     | false
 action_type                   | character varying        | character varying(50)    | NULL     | -
 action_timestamp              | timestamp with time zone | timestamp with time zone | NULL     | -
 action_data                   | jsonb                    | jsonb                    | NULL     | -
 device_type                   | character varying        | character varying(30)    | NULL     | -
 device_os                     | character varying        | character varying(50)    | NULL     | -
 device_model                  | character varying        | character varying(100)   | NULL     | -
 client_type                   | character varying        | character varying(50)    | NULL     | -
 client_version                | character varying        | character varying(20)    | NULL     | -
 user_agent                    | text                     | text                     | NULL     | -
 sender_ip                     | character varying        | character varying(50)    | NULL     | -
 sender_location               | jsonb                    | jsonb                    | NULL     | -
 recipient_ip                  | character varying        | character varying(50)    | NULL     | -
 recipient_location            | jsonb                    | jsonb                    | NULL     | -
 consent_obtained              | boolean                  | boolean                  | NULL     | true
 consent_type                  | character varying        | character varying(20)    | NULL     | -
 consent_timestamp             | timestamp with time zone | timestamp with time zone | NULL     | -
 gdpr_compliant                | boolean                  | boolean                  | NULL     | true
 opt_out_requested             | boolean                  | boolean                  | NULL     | false
 opt_out_timestamp             | timestamp with time zone | timestamp with time zone | NULL     | -
 unsubscribed                  | boolean                  | boolean                  | NULL     | false
 unsubscribe_timestamp         | timestamp with time zone | timestamp with time zone | NULL     | -
 quality_score                 | numeric                  | numeric                  | NULL     | -
 spam_score                    | numeric                  | numeric                  | NULL     | -
 marked_as_spam                | boolean                  | boolean                  | NULL     | false
 spam_report_timestamp         | timestamp with time zone | timestamp with time zone | NULL     | -
 is_archived                   | boolean                  | boolean                  | NULL     | false
 archived_at                   | timestamp with time zone | timestamp with time zone | NULL     | -
 archive_reason                | text                     | text                     | NULL     | -
 metadata                      | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 custom_fields                 | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 provider_response             | jsonb                    | jsonb                    | NULL     | -
 webhook_data                  | jsonb                    | jsonb                    | NULL     | -
 notes                         | text                     | text                     | NULL     | -
 created_at                    | timestamp with time zone | timestamp with time zone | NULL     | now()
 updated_at                    | timestamp with time zone | timestamp with time zone | NULL     | now()
 created_by                    | uuid                     | uuid                     | NULL     | -
(140 rows)


### communication_preferences

           Column           |           Type           |        Full Type         | Nullable |                      Default                      
----------------------------+--------------------------+--------------------------+----------+---------------------------------------------------
 id                         | uuid                     | uuid                     | NOT NULL | gen_random_uuid()
 school_id                  | uuid                     | uuid                     | NOT NULL | -
 user_id                    | uuid                     | uuid                     | NOT NULL | -
 user_type                  | character varying        | character varying(20)    | NULL     | -
 user_name                  | character varying        | character varying(200)   | NULL     | -
 user_email                 | character varying        | character varying(200)   | NULL     | -
 user_phone                 | character varying        | character varying(15)    | NULL     | -
 communications_enabled     | boolean                  | boolean                  | NULL     | true
 email_enabled              | boolean                  | boolean                  | NULL     | true
 sms_enabled                | boolean                  | boolean                  | NULL     | true
 whatsapp_enabled           | boolean                  | boolean                  | NULL     | true
 push_enabled               | boolean                  | boolean                  | NULL     | true
 in_app_enabled             | boolean                  | boolean                  | NULL     | true
 voice_call_enabled         | boolean                  | boolean                  | NULL     | false
 preferred_channel          | character varying        | character varying(30)    | NULL     | 'EMAIL'::character varying
 preferred_channels_order   | ARRAY                    | ARRAY                    | NULL     | ARRAY['EMAIL'::text, 'SMS'::text, 'IN_APP'::text]
 primary_email              | character varying        | character varying(200)   | NULL     | -
 secondary_email            | character varying        | character varying(200)   | NULL     | -
 email_verified             | boolean                  | boolean                  | NULL     | false
 primary_phone              | character varying        | character varying(15)    | NULL     | -
 secondary_phone            | character varying        | character varying(15)    | NULL     | -
 phone_verified             | boolean                  | boolean                  | NULL     | false
 whatsapp_number            | character varying        | character varying(15)    | NULL     | -
 whatsapp_opt_in            | boolean                  | boolean                  | NULL     | false
 whatsapp_opt_in_date       | date                     | date                     | NULL     | -
 notification_types_enabled | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 fee_notifications          | boolean                  | boolean                  | NULL     | true
 exam_notifications         | boolean                  | boolean                  | NULL     | true
 attendance_notifications   | boolean                  | boolean                  | NULL     | true
 academic_notifications     | boolean                  | boolean                  | NULL     | true
 event_notifications        | boolean                  | boolean                  | NULL     | true
 announcement_notifications | boolean                  | boolean                  | NULL     | true
 transport_notifications    | boolean                  | boolean                  | NULL     | true
 library_notifications      | boolean                  | boolean                  | NULL     | true
 marketing_notifications    | boolean                  | boolean                  | NULL     | false
 promotional_notifications  | boolean                  | boolean                  | NULL     | false
 urgent_only                | boolean                  | boolean                  | NULL     | false
 high_priority_only         | boolean                  | boolean                  | NULL     | false
 min_priority_level         | integer                  | integer                  | NULL     | 1
 daily_digest               | boolean                  | boolean                  | NULL     | false
 weekly_summary             | boolean                  | boolean                  | NULL     | false
 digest_delivery_time       | time without time zone   | time without time zone   | NULL     | '18:00:00'::time without time zone
 digest_delivery_day        | integer                  | integer                  | NULL     | 1
 instant_notifications      | boolean                  | boolean                  | NULL     | true
 batch_notifications        | boolean                  | boolean                  | NULL     | false
 max_notifications_per_day  | integer                  | integer                  | NULL     | -
 max_notifications_per_week | integer                  | integer                  | NULL     | -
 quiet_hours_enabled        | boolean                  | boolean                  | NULL     | true
 quiet_hours_start          | time without time zone   | time without time zone   | NULL     | '22:00:00'::time without time zone
 quiet_hours_end            | time without time zone   | time without time zone   | NULL     | '08:00:00'::time without time zone
 weekend_quiet_mode         | boolean                  | boolean                  | NULL     | false
 do_not_disturb             | boolean                  | boolean                  | NULL     | false
 dnd_start_date             | date                     | date                     | NULL     | -
 dnd_end_date               | date                     | date                     | NULL     | -
 mobile_app_notifications   | boolean                  | boolean                  | NULL     | true
 web_notifications          | boolean                  | boolean                  | NULL     | true
 device_tokens              | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 preferred_language         | character varying        | character varying(10)    | NULL     | 'en'::character varying
 fallback_language          | character varying        | character varying(10)    | NULL     | 'en'::character varying
 multilingual_enabled       | boolean                  | boolean                  | NULL     | false
 html_emails                | boolean                  | boolean                  | NULL     | true
 plain_text_only            | boolean                  | boolean                  | NULL     | false
 include_images             | boolean                  | boolean                  | NULL     | true
 include_attachments        | boolean                  | boolean                  | NULL     | true
 compact_view               | boolean                  | boolean                  | NULL     | false
 detailed_view              | boolean                  | boolean                  | NULL     | true
 read_receipts_enabled      | boolean                  | boolean                  | NULL     | true
 share_read_status          | boolean                  | boolean                  | NULL     | true
 share_online_status        | boolean                  | boolean                  | NULL     | true
 allow_direct_messages      | boolean                  | boolean                  | NULL     | true
 spam_filter_enabled        | boolean                  | boolean                  | NULL     | true
 aggressive_filtering       | boolean                  | boolean                  | NULL     | false
 blocked_senders            | ARRAY                    | ARRAY                    | NULL     | -
 blocked_keywords           | ARRAY                    | ARRAY                    | NULL     | -
 trusted_senders            | ARRAY                    | ARRAY                    | NULL     | -
 opted_out_of_all           | boolean                  | boolean                  | NULL     | false
 opted_out_at               | timestamp with time zone | timestamp with time zone | NULL     | -
 opted_out_channels         | ARRAY                    | ARRAY                    | NULL     | -
 opted_out_categories       | ARRAY                    | ARRAY                    | NULL     | -
 unsubscribe_all            | boolean                  | boolean                  | NULL     | false
 unsubscribe_timestamp      | timestamp with time zone | timestamp with time zone | NULL     | -
 consent_given              | boolean                  | boolean                  | NULL     | false
 consent_timestamp          | timestamp with time zone | timestamp with time zone | NULL     | -
 consent_ip_address         | character varying        | character varying(50)    | NULL     | -
 gdpr_consent               | boolean                  | boolean                  | NULL     | false
 data_processing_consent    | boolean                  | boolean                  | NULL     | false
 last_email_opened_at       | timestamp with time zone | timestamp with time zone | NULL     | -
 last_sms_received_at       | timestamp with time zone | timestamp with time zone | NULL     | -
 last_push_clicked_at       | timestamp with time zone | timestamp with time zone | NULL     | -
 total_emails_received      | integer                  | integer                  | NULL     | 0
 total_sms_received         | integer                  | integer                  | NULL     | 0
 total_push_received        | integer                  | integer                  | NULL     | 0
 metadata                   | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 custom_preferences         | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 notes                      | text                     | text                     | NULL     | -
 created_at                 | timestamp with time zone | timestamp with time zone | NULL     | now()
 updated_at                 | timestamp with time zone | timestamp with time zone | NULL     | now()
 last_modified_by           | uuid                     | uuid                     | NULL     | -
(98 rows)


### competitions

           Column           |           Type           |        Full Type         | Nullable |             Default             
----------------------------+--------------------------+--------------------------+----------+---------------------------------
 id                         | uuid                     | uuid                     | NOT NULL | uuid_generate_v4()
 school_id                  | uuid                     | uuid                     | NOT NULL | -
 academic_year_id           | uuid                     | uuid                     | NOT NULL | -
 competition_code           | character varying        | character varying(50)    | NOT NULL | -
 competition_name           | character varying        | character varying(200)   | NOT NULL | -
 school_event_id            | uuid                     | uuid                     | NULL     | -
 competition_type           | character varying        | character varying(50)    | NOT NULL | -
 competition_category       | character varying        | character varying(50)    | NULL     | -
 competition_level          | character varying        | character varying(30)    | NULL     | 'SCHOOL'::character varying
 description                | text                     | text                     | NOT NULL | -
 rules_and_regulations      | text                     | text                     | NOT NULL | -
 eligibility_criteria       | text                     | text                     | NULL     | -
 competition_date           | date                     | date                     | NOT NULL | -
 start_time                 | time without time zone   | time without time zone   | NOT NULL | -
 end_time                   | time without time zone   | time without time zone   | NOT NULL | -
 registration_start_date    | date                     | date                     | NOT NULL | -
 registration_end_date      | date                     | date                     | NOT NULL | -
 venue                      | character varying        | character varying(200)   | NOT NULL | -
 venue_details              | text                     | text                     | NULL     | -
 participation_mode         | character varying        | character varying(30)    | NULL     | 'OFFLINE'::character varying
 participation_type         | character varying        | character varying(30)    | NULL     | 'INDIVIDUAL'::character varying
 team_size_min              | integer                  | integer                  | NULL     | -
 team_size_max              | integer                  | integer                  | NULL     | -
 max_participants           | integer                  | integer                  | NULL     | -
 min_participants           | integer                  | integer                  | NULL     | -
 current_participants       | integer                  | integer                  | NULL     | 0
 eligible_classes           | ARRAY                    | ARRAY                    | NULL     | -
 eligible_age_min           | integer                  | integer                  | NULL     | -
 eligible_age_max           | integer                  | integer                  | NULL     | -
 registration_fee           | numeric                  | numeric                  | NULL     | 0.00
 registration_open          | boolean                  | boolean                  | NULL     | true
 has_multiple_rounds        | boolean                  | boolean                  | NULL     | false
 total_rounds               | integer                  | integer                  | NULL     | 1
 rounds_details             | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 current_round              | integer                  | integer                  | NULL     | 1
 judging_criteria           | text                     | text                     | NOT NULL | -
 marking_scheme             | text                     | text                     | NULL     | -
 total_marks                | integer                  | integer                  | NULL     | -
 evaluation_parameters      | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 judges                     | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 chief_coordinator_id       | uuid                     | uuid                     | NULL     | -
 coordinators               | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 total_prizes               | integer                  | integer                  | NULL     | -
 prize_pool_amount          | numeric                  | numeric                  | NULL     | -
 prizes                     | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 participation_certificate  | boolean                  | boolean                  | NULL     | true
 results_declared           | boolean                  | boolean                  | NULL     | false
 results_declaration_date   | date                     | date                     | NULL     | -
 winners                    | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 budget_allocated           | numeric                  | numeric                  | NULL     | -
 actual_expenditure         | numeric                  | numeric                  | NULL     | -
 has_sponsors               | boolean                  | boolean                  | NULL     | false
 sponsors                   | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 media_coverage             | boolean                  | boolean                  | NULL     | false
 event_photos               | ARRAY                    | ARRAY                    | NULL     | -
 status                     | character varying        | character varying(30)    | NULL     | 'UPCOMING'::character varying
 total_registrations        | integer                  | integer                  | NULL     | 0
 total_participants         | integer                  | integer                  | NULL     | 0
 success_rate               | numeric                  | numeric                  | NULL     | -
 competition_guidelines_url | text                     | text                     | NULL     | -
 results_pdf_url            | text                     | text                     | NULL     | -
 metadata                   | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 notes                      | text                     | text                     | NULL     | -
 created_by                 | uuid                     | uuid                     | NULL     | -
 created_at                 | timestamp with time zone | timestamp with time zone | NULL     | now()
 updated_at                 | timestamp with time zone | timestamp with time zone | NULL     | now()
(66 rows)


### digital_library

     Column      |           Type           |        Full Type         | Nullable |      Default       
-----------------+--------------------------+--------------------------+----------+--------------------
 id              | uuid                     | uuid                     | NOT NULL | uuid_generate_v4()
 school_id       | uuid                     | uuid                     | NOT NULL | -
 resource_code   | character varying        | character varying(50)    | NOT NULL | -
 resource_type   | character varying        | character varying(30)    | NOT NULL | -
 title           | character varying        | character varying(500)   | NOT NULL | -
 primary_subject | character varying        | character varying(100)   | NOT NULL | -
 primary_url     | text                     | text                     | NOT NULL | -
 is_available    | boolean                  | boolean                  | NULL     | true
 created_at      | timestamp with time zone | timestamp with time zone | NULL     | now()
(9 rows)


### drivers

               Column                |           Type           |        Full Type         | Nullable |                                Default                                 
-------------------------------------+--------------------------+--------------------------+----------+------------------------------------------------------------------------
 id                                  | uuid                     | uuid                     | NOT NULL | uuid_generate_v4()
 school_id                           | uuid                     | uuid                     | NOT NULL | -
 staff_id                            | uuid                     | uuid                     | NULL     | -
 driver_code                         | character varying        | character varying(50)    | NOT NULL | -
 employee_number                     | character varying        | character varying(50)    | NULL     | -
 first_name                          | character varying        | character varying(100)   | NOT NULL | -
 middle_name                         | character varying        | character varying(100)   | NULL     | -
 last_name                           | character varying        | character varying(100)   | NOT NULL | -
 full_name                           | character varying        | character varying(200)   | NULL     | -
 date_of_birth                       | date                     | date                     | NOT NULL | -
 age                                 | integer                  | integer                  | NULL     | -
 gender                              | character varying        | character varying(10)    | NULL     | -
 blood_group                         | character varying        | character varying(5)     | NULL     | -
 mobile_number                       | character varying        | character varying(15)    | NOT NULL | -
 alternate_mobile                    | character varying        | character varying(15)    | NULL     | -
 email                               | character varying        | character varying(100)   | NULL     | -
 current_address                     | text                     | text                     | NOT NULL | -
 permanent_address                   | text                     | text                     | NULL     | -
 city                                | character varying        | character varying(100)   | NULL     | -
 state                               | character varying        | character varying(100)   | NULL     | -
 postal_code                         | character varying        | character varying(10)    | NULL     | -
 role_type                           | character varying        | character varying(30)    | NOT NULL | -
 employment_type                     | character varying        | character varying(30)    | NULL     | 'FULL_TIME'::character varying
 license_number                      | character varying        | character varying(50)    | NOT NULL | -
 license_type                        | character varying        | character varying(30)    | NOT NULL | -
 license_issue_date                  | date                     | date                     | NOT NULL | -
 license_expiry_date                 | date                     | date                     | NOT NULL | -
 license_issuing_authority           | character varying        | character varying(100)   | NULL     | -
 license_issuing_state               | character varying        | character varying(50)    | NULL     | -
 has_badge                           | boolean                  | boolean                  | NULL     | false
 badge_number                        | character varying        | character varying(50)    | NULL     | -
 badge_expiry_date                   | date                     | date                     | NULL     | -
 total_driving_experience_years      | integer                  | integer                  | NULL     | -
 school_bus_driving_experience_years | integer                  | integer                  | NULL     | -
 license_endorsements                | ARRAY                    | ARRAY                    | NULL     | -
 special_training                    | ARRAY                    | ARRAY                    | NULL     | -
 police_verification_done            | boolean                  | boolean                  | NULL     | false
 police_verification_date            | date                     | date                     | NULL     | -
 police_verification_number          | character varying        | character varying(50)    | NULL     | -
 police_verification_valid_till      | date                     | date                     | NULL     | -
 background_check_done               | boolean                  | boolean                  | NULL     | false
 background_check_date               | date                     | date                     | NULL     | -
 background_check_status             | character varying        | character varying(20)    | NULL     | -
 has_criminal_record                 | boolean                  | boolean                  | NULL     | false
 criminal_record_details             | text                     | text                     | NULL     | -
 medical_certificate_number          | character varying        | character varying(50)    | NULL     | -
 medical_certificate_date            | date                     | date                     | NULL     | -
 medical_certificate_valid_till      | date                     | date                     | NULL     | -
 is_medically_fit                    | boolean                  | boolean                  | NULL     | true
 medical_conditions                  | ARRAY                    | ARRAY                    | NULL     | -
 last_health_checkup_date            | date                     | date                     | NULL     | -
 next_health_checkup_due             | date                     | date                     | NULL     | -
 defensive_driving_trained           | boolean                  | boolean                  | NULL     | false
 defensive_driving_certificate_date  | date                     | date                     | NULL     | -
 first_aid_trained                   | boolean                  | boolean                  | NULL     | false
 first_aid_certificate_date          | date                     | date                     | NULL     | -
 first_aid_certificate_valid_till    | date                     | date                     | NULL     | -
 fire_safety_trained                 | boolean                  | boolean                  | NULL     | false
 fire_safety_certificate_date        | date                     | date                     | NULL     | -
 child_safety_trained                | boolean                  | boolean                  | NULL     | false
 child_safety_certificate_date       | date                     | date                     | NULL     | -
 additional_certifications           | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 joining_date                        | date                     | date                     | NOT NULL | -
 confirmation_date                   | date                     | date                     | NULL     | -
 resignation_date                    | date                     | date                     | NULL     | -
 last_working_date                   | date                     | date                     | NULL     | -
 current_salary                      | numeric                  | numeric                  | NULL     | -
 salary_account_number               | character varying        | character varying(50)    | NULL     | -
 salary_bank_name                    | character varying        | character varying(100)   | NULL     | -
 salary_ifsc_code                    | character varying        | character varying(20)    | NULL     | -
 assigned_route_id                   | uuid                     | uuid                     | NULL     | -
 assigned_vehicle_id                 | uuid                     | uuid                     | NULL     | -
 assignment_start_date               | date                     | date                     | NULL     | -
 assignment_type                     | character varying        | character varying(20)    | NULL     | -
 shift_timing                        | character varying        | character varying(20)    | NULL     | -
 working_days                        | ARRAY                    | ARRAY                    | NULL     | ARRAY['MON'::text, 'TUE'::text, 'WED'::text, 'THU'::text, 'FRI'::text]
 total_trips_completed               | integer                  | integer                  | NULL     | 0
 total_km_driven                     | integer                  | integer                  | NULL     | 0
 on_time_performance_percentage      | numeric                  | numeric                  | NULL     | 100.00
 safety_score                        | numeric                  | numeric                  | NULL     | 100.00
 punctuality_rating                  | numeric                  | numeric                  | NULL     | -
 behavior_rating                     | numeric                  | numeric                  | NULL     | -
 parent_feedback_score               | numeric                  | numeric                  | NULL     | -
 student_feedback_score              | numeric                  | numeric                  | NULL     | -
 total_warnings                      | integer                  | integer                  | NULL     | 0
 total_suspensions                   | integer                  | integer                  | NULL     | 0
 last_warning_date                   | date                     | date                     | NULL     | -
 last_warning_reason                 | text                     | text                     | NULL     | -
 is_suspended                        | boolean                  | boolean                  | NULL     | false
 suspension_start_date               | date                     | date                     | NULL     | -
 suspension_end_date                 | date                     | date                     | NULL     | -
 suspension_reason                   | text                     | text                     | NULL     | -
 disciplinary_actions                | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 total_accidents                     | integer                  | integer                  | NULL     | 0
 total_violations                    | integer                  | integer                  | NULL     | 0
 total_complaints                    | integer                  | integer                  | NULL     | 0
 last_accident_date                  | date                     | date                     | NULL     | -
 accident_severity                   | character varying        | character varying(20)    | NULL     | -
 last_violation_date                 | date                     | date                     | NULL     | -
 violation_type                      | character varying        | character varying(50)    | NULL     | -
 incident_history                    | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 total_leaves_taken                  | integer                  | integer                  | NULL     | 0
 remaining_leaves                    | integer                  | integer                  | NULL     | -
 last_leave_date                     | date                     | date                     | NULL     | -
 attendance_percentage               | numeric                  | numeric                  | NULL     | 100.00
 emergency_contact_name              | character varying        | character varying(100)   | NULL     | -
 emergency_contact_relationship      | character varying        | character varying(50)    | NULL     | -
 emergency_contact_phone             | character varying        | character varying(15)    | NULL     | -
 emergency_contact_address           | text                     | text                     | NULL     | -
 photo_url                           | text                     | text                     | NULL     | -
 license_photo_url                   | text                     | text                     | NULL     | -
 id_proof_url                        | text                     | text                     | NULL     | -
 address_proof_url                   | text                     | text                     | NULL     | -
 medical_certificate_url             | text                     | text                     | NULL     | -
 police_verification_url             | text                     | text                     | NULL     | -
 document_urls                       | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 status                              | character varying        | character varying(30)    | NULL     | 'ACTIVE'::character varying
 is_active                           | boolean                  | boolean                  | NULL     | true
 is_available                        | boolean                  | boolean                  | NULL     | true
 availability_reason                 | text                     | text                     | NULL     | -
 metadata                            | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 custom_fields                       | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 notes                               | text                     | text                     | NULL     | -
 internal_notes                      | text                     | text                     | NULL     | -
 created_by                          | uuid                     | uuid                     | NULL     | -
 created_at                          | timestamp with time zone | timestamp with time zone | NULL     | now()
 updated_at                          | timestamp with time zone | timestamp with time zone | NULL     | now()
(127 rows)


### email_messages

            Column            |           Type           |        Full Type         | Nullable |           Default            
------------------------------+--------------------------+--------------------------+----------+------------------------------
 id                           | uuid                     | uuid                     | NOT NULL | gen_random_uuid()
 school_id                    | uuid                     | uuid                     | NOT NULL | -
 message_code                 | character varying        | character varying(50)    | NULL     | -
 message_uuid                 | uuid                     | uuid                     | NULL     | gen_random_uuid()
 message_id                   | character varying        | character varying(200)   | NULL     | -
 communication_channel_id     | uuid                     | uuid                     | NULL     | -
 provider_name                | character varying        | character varying(50)    | NULL     | -
 template_id                  | uuid                     | uuid                     | NULL     | -
 template_code                | character varying        | character varying(50)    | NULL     | -
 recipient_type               | character varying        | character varying(20)    | NULL     | -
 recipient_id                 | uuid                     | uuid                     | NULL     | -
 recipient_email              | character varying        | character varying(200)   | NOT NULL | -
 recipient_name               | character varying        | character varying(200)   | NULL     | -
 recipient_phone              | character varying        | character varying(15)    | NULL     | -
 student_id                   | uuid                     | uuid                     | NULL     | -
 parent_id                    | uuid                     | uuid                     | NULL     | -
 class_id                     | uuid                     | uuid                     | NULL     | -
 section_id                   | uuid                     | uuid                     | NULL     | -
 subject                      | character varying        | character varying(500)   | NOT NULL | -
 preheader                    | text                     | text                     | NULL     | -
 body_text                    | text                     | text                     | NULL     | -
 body_html                    | text                     | text                     | NULL     | -
 original_subject             | character varying        | character varying(500)   | NULL     | -
 original_body                | text                     | text                     | NULL     | -
 subject_length               | integer                  | integer                  | NULL     | -
 body_length                  | integer                  | integer                  | NULL     | -
 word_count                   | integer                  | integer                  | NULL     | -
 read_time_minutes            | integer                  | integer                  | NULL     | -
 contains_html                | boolean                  | boolean                  | NULL     | false
 contains_images              | boolean                  | boolean                  | NULL     | false
 contains_attachments         | boolean                  | boolean                  | NULL     | false
 from_email                   | character varying        | character varying(200)   | NOT NULL | -
 from_name                    | character varying        | character varying(200)   | NULL     | -
 reply_to                     | character varying        | character varying(200)   | NULL     | -
 return_path                  | character varying        | character varying(200)   | NULL     | -
 sender_domain                | character varying        | character varying(200)   | NULL     | -
 cc_emails                    | ARRAY                    | ARRAY                    | NULL     | -
 bcc_emails                   | ARRAY                    | ARRAY                    | NULL     | -
 total_cc_count               | integer                  | integer                  | NULL     | 0
 total_bcc_count              | integer                  | integer                  | NULL     | 0
 email_headers                | jsonb                    | jsonb                    | NULL     | -
 custom_headers               | jsonb                    | jsonb                    | NULL     | -
 attachments                  | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 total_attachments            | integer                  | integer                  | NULL     | 0
 total_attachment_size_kb     | integer                  | integer                  | NULL     | 0
 max_attachment_size_mb       | numeric                  | numeric                  | NULL     | 25
 inline_images                | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 spf_result                   | character varying        | character varying(20)    | NULL     | -
 dkim_result                  | character varying        | character varying(20)    | NULL     | -
 dmarc_result                 | character varying        | character varying(20)    | NULL     | -
 authentication_results       | text                     | text                     | NULL     | -
 tracking_enabled             | boolean                  | boolean                  | NULL     | true
 open_tracking_enabled        | boolean                  | boolean                  | NULL     | true
 open_tracking_pixel_url      | text                     | text                     | NULL     | -
 click_tracking_enabled       | boolean                  | boolean                  | NULL     | true
 unsubscribe_tracking_enabled | boolean                  | boolean                  | NULL     | true
 unsubscribe_link             | text                     | text                     | NULL     | -
 opened                       | boolean                  | boolean                  | NULL     | false
 opened_at                    | timestamp with time zone | timestamp with time zone | NULL     | -
 open_count                   | integer                  | integer                  | NULL     | 0
 unique_opens                 | integer                  | integer                  | NULL     | 1
 first_open_at                | timestamp with time zone | timestamp with time zone | NULL     | -
 last_open_at                 | timestamp with time zone | timestamp with time zone | NULL     | -
 open_locations               | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 clicked                      | boolean                  | boolean                  | NULL     | false
 clicked_at                   | timestamp with time zone | timestamp with time zone | NULL     | -
 click_count                  | integer                  | integer                  | NULL     | 0
 unique_clicks                | integer                  | integer                  | NULL     | 0
 first_click_at               | timestamp with time zone | timestamp with time zone | NULL     | -
 last_click_at                | timestamp with time zone | timestamp with time zone | NULL     | -
 clicked_links                | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 total_links                  | integer                  | integer                  | NULL     | 0
 tracked_links                | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 engagement_score             | numeric                  | numeric                  | NULL     | 0
 engagement_level             | character varying        | character varying(20)    | NULL     | -
 opened_on_device             | character varying        | character varying(30)    | NULL     | -
 opened_on_client             | character varying        | character varying(50)    | NULL     | -
 opened_on_os                 | character varying        | character varying(50)    | NULL     | -
 opened_on_browser            | character varying        | character varying(50)    | NULL     | -
 user_agent                   | text                     | text                     | NULL     | -
 opened_from_ip               | character varying        | character varying(50)    | NULL     | -
 opened_from_country          | character varying        | character varying(50)    | NULL     | -
 opened_from_city             | character varying        | character varying(100)   | NULL     | -
 geo_location                 | jsonb                    | jsonb                    | NULL     | -
 status                       | character varying        | character varying(30)    | NULL     | 'PENDING'::character varying
 queued_at                    | timestamp with time zone | timestamp with time zone | NULL     | -
 sent_at                      | timestamp with time zone | timestamp with time zone | NULL     | -
 delivered_at                 | timestamp with time zone | timestamp with time zone | NULL     | -
 failed_at                    | timestamp with time zone | timestamp with time zone | NULL     | -
 delivery_delay_seconds       | integer                  | integer                  | NULL     | -
 provider_message_id          | character varying        | character varying(100)   | NULL     | -
 provider_request_id          | character varying        | character varying(100)   | NULL     | -
 provider_response            | jsonb                    | jsonb                    | NULL     | -
 provider_status_code         | character varying        | character varying(20)    | NULL     | -
 smtp_response                | text                     | text                     | NULL     | -
 smtp_code                    | integer                  | integer                  | NULL     | -
 bounced                      | boolean                  | boolean                  | NULL     | false
 bounce_type                  | character varying        | character varying(20)    | NULL     | -
 bounce_reason                | text                     | text                     | NULL     | -
 bounce_code                  | character varying        | character varying(20)    | NULL     | -
 bounce_timestamp             | timestamp with time zone | timestamp with time zone | NULL     | -
 bounce_category              | character varying        | character varying(50)    | NULL     | -
 is_hard_bounce               | boolean                  | boolean                  | NULL     | false
 is_soft_bounce               | boolean                  | boolean                  | NULL     | false
 bounce_details               | jsonb                    | jsonb                    | NULL     | -
 marked_as_spam               | boolean                  | boolean                  | NULL     | false
 spam_score                   | numeric                  | numeric                  | NULL     | -
 spam_report_timestamp        | timestamp with time zone | timestamp with time zone | NULL     | -
 complained                   | boolean                  | boolean                  | NULL     | false
 complaint_feedback_type      | character varying        | character varying(30)    | NULL     | -
 complaint_timestamp          | timestamp with time zone | timestamp with time zone | NULL     | -
 unsubscribed                 | boolean                  | boolean                  | NULL     | false
 unsubscribe_timestamp        | timestamp with time zone | timestamp with time zone | NULL     | -
 unsubscribe_method           | character varying        | character varying(30)    | NULL     | -
 list_unsubscribe_header      | text                     | text                     | NULL     | -
 failure_reason               | text                     | text                     | NULL     | -
 failure_code                 | character varying        | character varying(20)    | NULL     | -
 error_message                | text                     | text                     | NULL     | -
 error_details                | jsonb                    | jsonb                    | NULL     | -
 retry_count                  | integer                  | integer                  | NULL     | 0
 max_retries                  | integer                  | integer                  | NULL     | 3
 next_retry_at                | timestamp with time zone | timestamp with time zone | NULL     | -
 last_retry_at                | timestamp with time zone | timestamp with time zone | NULL     | -
 priority                     | integer                  | integer                  | NULL     | 1
 importance                   | character varying        | character varying(20)    | NULL     | 'NORMAL'::character varying
 scheduled_at                 | timestamp with time zone | timestamp with time zone | NULL     | -
 is_scheduled                 | boolean                  | boolean                  | NULL     | false
 schedule_timezone            | character varying        | character varying(50)    | NULL     | -
 send_after                   | timestamp with time zone | timestamp with time zone | NULL     | -
 send_before                  | timestamp with time zone | timestamp with time zone | NULL     | -
 optimal_send_time            | boolean                  | boolean                  | NULL     | false
 campaign_id                  | character varying        | character varying(100)   | NULL     | -
 campaign_name                | character varying        | character varying(200)   | NULL     | -
 batch_id                     | character varying        | character varying(100)   | NULL     | -
 batch_size                   | integer                  | integer                  | NULL     | -
 batch_sequence_number        | integer                  | integer                  | NULL     | -
 is_bulk_email                | boolean                  | boolean                  | NULL     | false
 personalized                 | boolean                  | boolean                  | NULL     | false
 personalization_data         | jsonb                    | jsonb                    | NULL     | -
 variables_used               | jsonb                    | jsonb                    | NULL     | -
 ab_test_id                   | character varying        | character varying(50)    | NULL     | -
 ab_variant                   | character varying        | character varying(20)    | NULL     | -
 category                     | character varying        | character varying(50)    | NULL     | -
 subcategory                  | character varying        | character varying(50)    | NULL     | -
 email_tags                   | ARRAY                    | ARRAY                    | NULL     | -
 expires_at                   | timestamp with time zone | timestamp with time zone | NULL     | -
 is_expired                   | boolean                  | boolean                  | NULL     | false
 message_hash                 | character varying        | character varying(64)    | NULL     | -
 is_duplicate                 | boolean                  | boolean                  | NULL     | false
 duplicate_of_id              | uuid                     | uuid                     | NULL     | -
 is_test_email                | boolean                  | boolean                  | NULL     | false
 test_mode                    | boolean                  | boolean                  | NULL     | false
 source_module                | character varying        | character varying(50)    | NULL     | -
 source_record_id             | uuid                     | uuid                     | NULL     | -
 trigger_event                | character varying        | character varying(50)    | NULL     | -
 callback_url                 | text                     | text                     | NULL     | -
 callback_sent                | boolean                  | boolean                  | NULL     | false
 callback_response            | jsonb                    | jsonb                    | NULL     | -
 cost                         | numeric                  | numeric                  | NULL     | -
 cost_currency                | character varying        | character varying(10)    | NULL     | 'INR'::character varying
 credits_used                 | integer                  | integer                  | NULL     | 1
 gdpr_compliant               | boolean                  | boolean                  | NULL     | true
 can_spam_compliant           | boolean                  | boolean                  | NULL     | true
 consent_obtained             | boolean                  | boolean                  | NULL     | true
 consent_type                 | character varying        | character varying(20)    | NULL     | -
 consent_timestamp            | timestamp with time zone | timestamp with time zone | NULL     | -
 metadata                     | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 tags                         | ARRAY                    | ARRAY                    | NULL     | -
 notes                        | text                     | text                     | NULL     | -
 created_by                   | uuid                     | uuid                     | NULL     | -
 created_at                   | timestamp with time zone | timestamp with time zone | NULL     | now()
 updated_at                   | timestamp with time zone | timestamp with time zone | NULL     | now()
(172 rows)


### event_registrations

           Column           |           Type           |        Full Type         | Nullable |             Default             
----------------------------+--------------------------+--------------------------+----------+---------------------------------
 id                         | uuid                     | uuid                     | NOT NULL | uuid_generate_v4()
 school_id                  | uuid                     | uuid                     | NOT NULL | -
 academic_year_id           | uuid                     | uuid                     | NOT NULL | -
 registration_code          | character varying        | character varying(50)    | NOT NULL | -
 student_id                 | uuid                     | uuid                     | NOT NULL | -
 class_id                   | uuid                     | uuid                     | NULL     | -
 section_id                 | uuid                     | uuid                     | NULL     | -
 event_id                   | uuid                     | uuid                     | NULL     | -
 competition_id             | uuid                     | uuid                     | NULL     | -
 activity_id                | uuid                     | uuid                     | NULL     | -
 club_id                    | uuid                     | uuid                     | NULL     | -
 registration_type          | character varying        | character varying(30)    | NOT NULL | -
 registration_date          | date                     | date                     | NOT NULL | CURRENT_DATE
 registration_time          | time without time zone   | time without time zone   | NULL     | CURRENT_TIME
 registered_by              | character varying        | character varying(30)    | NULL     | -
 participation_mode         | character varying        | character varying(30)    | NULL     | 'INDIVIDUAL'::character varying
 is_team_lead               | boolean                  | boolean                  | NULL     | false
 team_name                  | character varying        | character varying(200)   | NULL     | -
 team_id                    | uuid                     | uuid                     | NULL     | -
 team_members               | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 registration_fee           | numeric                  | numeric                  | NULL     | 0.00
 fee_paid                   | boolean                  | boolean                  | NULL     | false
 payment_date               | date                     | date                     | NULL     | -
 payment_mode               | character varying        | character varying(30)    | NULL     | -
 receipt_number             | character varying        | character varying(50)    | NULL     | -
 parent_consent_required    | boolean                  | boolean                  | NULL     | false
 parent_consent_obtained    | boolean                  | boolean                  | NULL     | false
 parent_consent_date        | date                     | date                     | NULL     | -
 parent_signature_url       | text                     | text                     | NULL     | -
 medical_clearance_required | boolean                  | boolean                  | NULL     | false
 medical_clearance_obtained | boolean                  | boolean                  | NULL     | false
 medical_certificate_url    | text                     | text                     | NULL     | -
 emergency_contact_name     | character varying        | character varying(100)   | NULL     | -
 emergency_contact_phone    | character varying        | character varying(15)    | NULL     | -
 emergency_contact_relation | character varying        | character varying(50)    | NULL     | -
 has_special_requirements   | boolean                  | boolean                  | NULL     | false
 special_requirements       | text                     | text                     | NULL     | -
 dietary_restrictions       | text                     | text                     | NULL     | -
 medical_conditions         | text                     | text                     | NULL     | -
 preferences                | text                     | text                     | NULL     | -
 notes_from_student         | text                     | text                     | NULL     | -
 registration_confirmed     | boolean                  | boolean                  | NULL     | false
 confirmation_date          | date                     | date                     | NULL     | -
 confirmation_sent          | boolean                  | boolean                  | NULL     | false
 admit_card_issued          | boolean                  | boolean                  | NULL     | false
 admit_card_number          | character varying        | character varying(50)    | NULL     | -
 admit_card_url             | text                     | text                     | NULL     | -
 id_card_required           | boolean                  | boolean                  | NULL     | false
 id_card_issued             | boolean                  | boolean                  | NULL     | false
 attended                   | boolean                  | boolean                  | NULL     | false
 attendance_marked          | boolean                  | boolean                  | NULL     | false
 attendance_date            | date                     | date                     | NULL     | -
 attendance_time            | time without time zone   | time without time zone   | NULL     | -
 check_in_time              | time without time zone   | time without time zone   | NULL     | -
 check_out_time             | time without time zone   | time without time zone   | NULL     | -
 participated               | boolean                  | boolean                  | NULL     | false
 performance_rating         | numeric                  | numeric                  | NULL     | -
 marks_obtained             | numeric                  | numeric                  | NULL     | -
 total_marks                | numeric                  | numeric                  | NULL     | -
 rank_position              | integer                  | integer                  | NULL     | -
 award_received             | boolean                  | boolean                  | NULL     | false
 award_name                 | character varying        | character varying(200)   | NULL     | -
 award_type                 | character varying        | character varying(50)    | NULL     | -
 certificate_eligible       | boolean                  | boolean                  | NULL     | false
 certificate_issued         | boolean                  | boolean                  | NULL     | false
 certificate_number         | character varying        | character varying(50)    | NULL     | -
 certificate_issue_date     | date                     | date                     | NULL     | -
 certificate_url            | text                     | text                     | NULL     | -
 feedback_submitted         | boolean                  | boolean                  | NULL     | false
 feedback_rating            | numeric                  | numeric                  | NULL     | -
 feedback_comments          | text                     | text                     | NULL     | -
 status                     | character varying        | character varying(30)    | NULL     | 'REGISTERED'::character varying
 cancellation_date          | date                     | date                     | NULL     | -
 cancellation_reason        | text                     | text                     | NULL     | -
 cancelled_by               | character varying        | character varying(30)    | NULL     | -
 refund_requested           | boolean                  | boolean                  | NULL     | false
 refund_processed           | boolean                  | boolean                  | NULL     | false
 refund_amount              | numeric                  | numeric                  | NULL     | -
 refund_date                | date                     | date                     | NULL     | -
 documents                  | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 metadata                   | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 notes                      | text                     | text                     | NULL     | -
 created_by                 | uuid                     | uuid                     | NULL     | -
 created_at                 | timestamp with time zone | timestamp with time zone | NULL     | now()
 updated_at                 | timestamp with time zone | timestamp with time zone | NULL     | now()
(85 rows)


### events_analytics

           Column            |           Type           |        Full Type         | Nullable |      Default       
-----------------------------+--------------------------+--------------------------+----------+--------------------
 id                          | uuid                     | uuid                     | NOT NULL | uuid_generate_v4()
 school_id                   | uuid                     | uuid                     | NOT NULL | -
 analytics_code              | character varying        | character varying(50)    | NOT NULL | -
 academic_year_id            | uuid                     | uuid                     | NULL     | -
 report_date                 | date                     | date                     | NULL     | CURRENT_DATE
 total_events                | integer                  | integer                  | NULL     | 0
 total_competitions          | integer                  | integer                  | NULL     | 0
 total_activities            | integer                  | integer                  | NULL     | 0
 total_clubs                 | integer                  | integer                  | NULL     | 0
 student_participation_count | integer                  | integer                  | NULL     | 0
 participation_rate          | numeric                  | numeric                  | NULL     | -
 popular_activities          | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 achievements_count          | integer                  | integer                  | NULL     | 0
 metadata                    | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 created_at                  | timestamp with time zone | timestamp with time zone | NULL     | now()
(15 rows)


### examination_results

              Column               |           Type           |        Full Type         | Nullable |           Default            
-----------------------------------+--------------------------+--------------------------+----------+------------------------------
 id                                | uuid                     | uuid                     | NOT NULL | gen_random_uuid()
 school_id                         | uuid                     | uuid                     | NOT NULL | -
 examination_id                    | uuid                     | uuid                     | NOT NULL | -
 student_id                        | uuid                     | uuid                     | NOT NULL | -
 exam_schedule_id                  | uuid                     | uuid                     | NULL     | -
 subject_id                        | uuid                     | uuid                     | NOT NULL | -
 class_id                          | uuid                     | uuid                     | NOT NULL | -
 section_id                        | uuid                     | uuid                     | NULL     | -
 max_marks                         | numeric                  | numeric                  | NOT NULL | -
 passing_marks                     | numeric                  | numeric                  | NOT NULL | -
 theory_max_marks                  | numeric                  | numeric                  | NULL     | -
 theory_marks_obtained             | numeric                  | numeric                  | NULL     | -
 practical_max_marks               | numeric                  | numeric                  | NULL     | -
 practical_marks_obtained          | numeric                  | numeric                  | NULL     | -
 internal_max_marks                | numeric                  | numeric                  | NULL     | -
 internal_marks_obtained           | numeric                  | numeric                  | NULL     | -
 project_max_marks                 | numeric                  | numeric                  | NULL     | -
 project_marks_obtained            | numeric                  | numeric                  | NULL     | -
 oral_max_marks                    | numeric                  | numeric                  | NULL     | -
 oral_marks_obtained               | numeric                  | numeric                  | NULL     | -
 total_marks_obtained              | numeric                  | numeric                  | NULL     | -
 grace_marks                       | numeric                  | numeric                  | NULL     | 0
 grace_marks_reason                | text                     | text                     | NULL     | -
 final_marks                       | numeric                  | numeric                  | NULL     | -
 percentage                        | numeric                  | numeric                  | NULL     | -
 letter_grade                      | character varying        | character varying(5)     | NULL     | -
 grade_points                      | numeric                  | numeric                  | NULL     | -
 is_passed                         | boolean                  | boolean                  | NULL     | false
 is_failed                         | boolean                  | boolean                  | NULL     | false
 pass_fail_status                  | character varying        | character varying(20)    | NULL     | 'PENDING'::character varying
 failure_reason                    | text                     | text                     | NULL     | -
 is_absent                         | boolean                  | boolean                  | NULL     | false
 absent_reason                     | text                     | text                     | NULL     | -
 is_exempted                       | boolean                  | boolean                  | NULL     | false
 exemption_reason                  | text                     | text                     | NULL     | -
 class_rank                        | integer                  | integer                  | NULL     | -
 section_rank                      | integer                  | integer                  | NULL     | -
 school_rank                       | integer                  | integer                  | NULL     | -
 percentile                        | numeric                  | numeric                  | NULL     | -
 marks_above_average               | boolean                  | boolean                  | NULL     | -
 deviation_from_average            | numeric                  | numeric                  | NULL     | -
 is_distinction                    | boolean                  | boolean                  | NULL     | false
 distinction_criteria_met          | boolean                  | boolean                  | NULL     | false
 is_topper                         | boolean                  | boolean                  | NULL     | false
 topper_category                   | character varying        | character varying(50)    | NULL     | -
 performance_category              | character varying        | character varying(30)    | NULL     | -
 teacher_remarks                   | text                     | text                     | NULL     | -
 strengths                         | text                     | text                     | NULL     | -
 areas_of_improvement              | text                     | text                     | NULL     | -
 answer_sheet_number               | character varying        | character varying(50)    | NULL     | -
 answer_sheet_barcode              | character varying        | character varying(50)    | NULL     | -
 evaluated_by                      | uuid                     | uuid                     | NULL     | -
 evaluation_date                   | date                     | date                     | NULL     | -
 evaluation_completed_at           | timestamp with time zone | timestamp with time zone | NULL     | -
 co_evaluated_by                   | uuid                     | uuid                     | NULL     | -
 verified_by                       | uuid                     | uuid                     | NULL     | -
 verification_date                 | date                     | date                     | NULL     | -
 is_verified                       | boolean                  | boolean                  | NULL     | false
 moderated_by                      | uuid                     | uuid                     | NULL     | -
 moderation_date                   | date                     | date                     | NULL     | -
 marks_before_moderation           | numeric                  | numeric                  | NULL     | -
 marks_after_moderation            | numeric                  | numeric                  | NULL     | -
 moderation_notes                  | text                     | text                     | NULL     | -
 marks_entered_by                  | uuid                     | uuid                     | NULL     | -
 marks_entered_at                  | timestamp with time zone | timestamp with time zone | NULL     | -
 marks_last_modified_by            | uuid                     | uuid                     | NULL     | -
 marks_last_modified_at            | timestamp with time zone | timestamp with time zone | NULL     | -
 marks_modification_reason         | text                     | text                     | NULL     | -
 is_revaluation_requested          | boolean                  | boolean                  | NULL     | false
 revaluation_requested_date        | date                     | date                     | NULL     | -
 revaluation_fee_paid              | boolean                  | boolean                  | NULL     | false
 revaluation_completed             | boolean                  | boolean                  | NULL     | false
 marks_before_revaluation          | numeric                  | numeric                  | NULL     | -
 marks_after_revaluation           | numeric                  | numeric                  | NULL     | -
 revaluation_remarks               | text                     | text                     | NULL     | -
 is_photocopy_requested            | boolean                  | boolean                  | NULL     | false
 photocopy_provided                | boolean                  | boolean                  | NULL     | false
 photocopy_url                     | text                     | text                     | NULL     | -
 is_published                      | boolean                  | boolean                  | NULL     | false
 published_at                      | timestamp with time zone | timestamp with time zone | NULL     | -
 result_withheld                   | boolean                  | boolean                  | NULL     | false
 withheld_reason                   | text                     | text                     | NULL     | -
 eligible_for_improvement          | boolean                  | boolean                  | NULL     | false
 improvement_exam_required         | boolean                  | boolean                  | NULL     | false
 learning_outcomes_achieved        | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 skill_development_notes           | text                     | text                     | NULL     | -
 topic_wise_performance            | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 chapter_wise_marks                | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 was_present                       | boolean                  | boolean                  | NULL     | true
 attendance_percentage_during_exam | numeric                  | numeric                  | NULL     | -
 result_status                     | character varying        | character varying(30)    | NULL     | 'PENDING'::character varying
 is_active                         | boolean                  | boolean                  | NULL     | true
 is_deleted                        | boolean                  | boolean                  | NULL     | false
 notes                             | text                     | text                     | NULL     | -
 metadata                          | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 created_at                        | timestamp with time zone | timestamp with time zone | NULL     | now()
 updated_at                        | timestamp with time zone | timestamp with time zone | NULL     | now()
(97 rows)


### examination_schedule

            Column            |           Type           |        Full Type         | Nullable |            Default             
------------------------------+--------------------------+--------------------------+----------+--------------------------------
 id                           | uuid                     | uuid                     | NOT NULL | gen_random_uuid()
 school_id                    | uuid                     | uuid                     | NOT NULL | -
 examination_id               | uuid                     | uuid                     | NOT NULL | -
 class_id                     | uuid                     | uuid                     | NOT NULL | -
 section_id                   | uuid                     | uuid                     | NULL     | -
 subject_id                   | uuid                     | uuid                     | NOT NULL | -
 exam_date                    | date                     | date                     | NOT NULL | -
 exam_day                     | character varying        | character varying(20)    | NULL     | -
 start_time                   | time without time zone   | time without time zone   | NOT NULL | -
 end_time                     | time without time zone   | time without time zone   | NOT NULL | -
 duration_minutes             | integer                  | integer                  | NOT NULL | -
 reporting_time               | time without time zone   | time without time zone   | NULL     | -
 exam_component               | character varying        | character varying(30)    | NULL     | 'THEORY'::character varying
 max_marks                    | numeric                  | numeric                  | NOT NULL | -
 passing_marks                | numeric                  | numeric                  | NOT NULL | -
 theory_marks                 | numeric                  | numeric                  | NULL     | -
 practical_marks              | numeric                  | numeric                  | NULL     | -
 internal_marks               | numeric                  | numeric                  | NULL     | -
 question_paper_pattern       | character varying        | character varying(50)    | NULL     | -
 total_questions              | integer                  | integer                  | NULL     | -
 has_sections                 | boolean                  | boolean                  | NULL     | false
 section_wise_marks           | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 has_choice                   | boolean                  | boolean                  | NULL     | false
 choice_details               | text                     | text                     | NULL     | -
 question_paper_code          | character varying        | character varying(50)    | NULL     | -
 question_paper_url           | text                     | text                     | NULL     | -
 question_paper_uploaded      | boolean                  | boolean                  | NULL     | false
 question_paper_uploaded_at   | timestamp with time zone | timestamp with time zone | NULL     | -
 marking_scheme_url           | text                     | text                     | NULL     | -
 answer_key_url               | text                     | text                     | NULL     | -
 exam_venue                   | character varying        | character varying(200)   | NULL     | -
 exam_room_number             | character varying        | character varying(50)    | NULL     | -
 seating_arrangement_required | boolean                  | boolean                  | NULL     | false
 seating_plan_url             | text                     | text                     | NULL     | -
 total_seats_allocated        | integer                  | integer                  | NULL     | -
 students_per_bench           | integer                  | integer                  | NULL     | 1
 chief_invigilator_id         | uuid                     | uuid                     | NULL     | -
 invigilators                 | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 total_invigilators_required  | integer                  | integer                  | NULL     | 2
 invigilators_assigned        | integer                  | integer                  | NULL     | 0
 total_students_scheduled     | integer                  | integer                  | NULL     | 0
 total_students_appeared      | integer                  | integer                  | NULL     | 0
 total_students_absent        | integer                  | integer                  | NULL     | 0
 attendance_marked            | boolean                  | boolean                  | NULL     | false
 attendance_marked_by         | uuid                     | uuid                     | NULL     | -
 attendance_marked_at         | timestamp with time zone | timestamp with time zone | NULL     | -
 materials_required           | text                     | text                     | NULL     | -
 stationery_list              | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 calculator_allowed           | boolean                  | boolean                  | NULL     | false
 graph_paper_required         | boolean                  | boolean                  | NULL     | false
 extra_sheets_allowed         | boolean                  | boolean                  | NULL     | true
 answer_sheet_type            | character varying        | character varying(30)    | NULL     | 'BOOKLET'::character varying
 total_answer_sheets_required | integer                  | integer                  | NULL     | -
 answer_sheets_distributed    | integer                  | integer                  | NULL     | 0
 answer_sheets_collected      | integer                  | integer                  | NULL     | 0
 submission_status            | character varying        | character varying(30)    | NULL     | 'PENDING'::character varying
 answer_sheets_received_at    | timestamp with time zone | timestamp with time zone | NULL     | -
 answer_sheets_received_by    | uuid                     | uuid                     | NULL     | -
 evaluator_id                 | uuid                     | uuid                     | NULL     | -
 co_evaluator_id              | uuid                     | uuid                     | NULL     | -
 evaluation_start_date        | date                     | date                     | NULL     | -
 evaluation_deadline          | date                     | date                     | NULL     | -
 evaluation_completed         | boolean                  | boolean                  | NULL     | false
 evaluation_completed_at      | timestamp with time zone | timestamp with time zone | NULL     | -
 marks_entry_completed        | boolean                  | boolean                  | NULL     | false
 marks_entry_completed_at     | timestamp with time zone | timestamp with time zone | NULL     | -
 marks_entry_completed_by     | uuid                     | uuid                     | NULL     | -
 marks_verified               | boolean                  | boolean                  | NULL     | false
 marks_verified_by            | uuid                     | uuid                     | NULL     | -
 marks_verified_at            | timestamp with time zone | timestamp with time zone | NULL     | -
 moderation_required          | boolean                  | boolean                  | NULL     | false
 moderation_completed         | boolean                  | boolean                  | NULL     | false
 moderated_by                 | uuid                     | uuid                     | NULL     | -
 moderation_notes             | text                     | text                     | NULL     | -
 highest_marks                | numeric                  | numeric                  | NULL     | -
 lowest_marks                 | numeric                  | numeric                  | NULL     | -
 average_marks                | numeric                  | numeric                  | NULL     | -
 students_passed              | integer                  | integer                  | NULL     | 0
 students_failed              | integer                  | integer                  | NULL     | 0
 pass_percentage              | numeric                  | numeric                  | NULL     | -
 special_instructions         | text                     | text                     | NULL     | -
 covid_protocols              | text                     | text                     | NULL     | -
 schedule_status              | character varying        | character varying(30)    | NULL     | 'SCHEDULED'::character varying
 is_cancelled                 | boolean                  | boolean                  | NULL     | false
 cancellation_reason          | text                     | text                     | NULL     | -
 cancelled_at                 | timestamp with time zone | timestamp with time zone | NULL     | -
 is_postponed                 | boolean                  | boolean                  | NULL     | false
 postponement_reason          | text                     | text                     | NULL     | -
 rescheduled_to               | uuid                     | uuid                     | NULL     | -
 notes                        | text                     | text                     | NULL     | -
 metadata                     | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 created_at                   | timestamp with time zone | timestamp with time zone | NULL     | now()
 updated_at                   | timestamp with time zone | timestamp with time zone | NULL     | now()
(93 rows)


### examinations

              Column               |           Type           |        Full Type         | Nullable |                                                                                                                                                                                                                                                   Default                                                                                                                                                                                                                                                   
-----------------------------------+--------------------------+--------------------------+----------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 id                                | uuid                     | uuid                     | NOT NULL | gen_random_uuid()
 school_id                         | uuid                     | uuid                     | NOT NULL | -
 academic_year_id                  | uuid                     | uuid                     | NOT NULL | -
 exam_code                         | character varying        | character varying(20)    | NOT NULL | -
 exam_name                         | character varying        | character varying(200)   | NOT NULL | -
 short_name                        | character varying        | character varying(50)    | NULL     | -
 exam_series                       | character varying        | character varying(50)    | NULL     | -
 exam_type                         | character varying        | character varying(30)    | NOT NULL | -
 exam_category                     | character varying        | character varying(50)    | NULL     | -
 is_final_exam                     | boolean                  | boolean                  | NULL     | false
 is_board_exam                     | boolean                  | boolean                  | NULL     | false
 is_internal_exam                  | boolean                  | boolean                  | NULL     | true
 start_date                        | date                     | date                     | NOT NULL | -
 end_date                          | date                     | date                     | NOT NULL | -
 registration_start_date           | date                     | date                     | NULL     | -
 registration_end_date             | date                     | date                     | NULL     | -
 registration_deadline             | date                     | date                     | NULL     | -
 result_declaration_date           | date                     | date                     | NULL     | -
 result_published_date             | timestamp with time zone | timestamp with time zone | NULL     | -
 revaluation_start_date            | date                     | date                     | NULL     | -
 revaluation_end_date              | date                     | date                     | NULL     | -
 total_marks                       | numeric                  | numeric                  | NOT NULL | 100
 passing_marks                     | numeric                  | numeric                  | NOT NULL | 33
 passing_percentage                | numeric                  | numeric                  | NOT NULL | 33.00
 grace_marks_allowed               | boolean                  | boolean                  | NULL     | true
 max_grace_marks                   | numeric                  | numeric                  | NULL     | 5
 grading_system                    | character varying        | character varying(30)    | NULL     | 'PERCENTAGE'::character varying
 use_letter_grades                 | boolean                  | boolean                  | NULL     | true
 use_grade_points                  | boolean                  | boolean                  | NULL     | false
 grade_scale                       | jsonb                    | jsonb                    | NULL     | '[{"max": 100, "min": 91, "grade": "A1", "points": 10.0}, {"max": 90, "min": 81, "grade": "A2", "points": 9.0}, {"max": 80, "min": 71, "grade": "B1", "points": 8.0}, {"max": 70, "min": 61, "grade": "B2", "points": 7.0}, {"max": 60, "min": 51, "grade": "C1", "points": 6.0}, {"max": 50, "min": 41, "grade": "C2", "points": 5.0}, {"max": 40, "min": 33, "grade": "D", "points": 4.0}, {"max": 32, "min": 21, "grade": "E1", "points": 0}, {"max": 20, "min": 0, "grade": "E2", "points": 0}]'::jsonb
 weightage_percentage              | numeric                  | numeric                  | NULL     | 100.00
 is_included_in_final_result       | boolean                  | boolean                  | NULL     | true
 applicable_classes                | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 applicable_sections               | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 exam_pattern                      | character varying        | character varying(50)    | NULL     | -
 total_subjects                    | integer                  | integer                  | NULL     | 0
 total_students_registered         | integer                  | integer                  | NULL     | 0
 has_theory_component              | boolean                  | boolean                  | NULL     | true
 theory_max_marks                  | numeric                  | numeric                  | NULL     | -
 theory_passing_marks              | numeric                  | numeric                  | NULL     | -
 has_practical_component           | boolean                  | boolean                  | NULL     | false
 practical_max_marks               | numeric                  | numeric                  | NULL     | -
 practical_passing_marks           | numeric                  | numeric                  | NULL     | -
 has_internal_assessment           | boolean                  | boolean                  | NULL     | false
 internal_assessment_max_marks     | numeric                  | numeric                  | NULL     | -
 has_project_component             | boolean                  | boolean                  | NULL     | false
 project_max_marks                 | numeric                  | numeric                  | NULL     | -
 admit_card_required               | boolean                  | boolean                  | NULL     | true
 admit_card_generation_date        | date                     | date                     | NULL     | -
 admit_card_template_url           | text                     | text                     | NULL     | -
 exam_center_required              | boolean                  | boolean                  | NULL     | false
 seat_number_required              | boolean                  | boolean                  | NULL     | false
 photo_required_on_admit_card      | boolean                  | boolean                  | NULL     | true
 mark_entry_start_date             | date                     | date                     | NULL     | -
 mark_entry_end_date               | date                     | date                     | NULL     | -
 mark_entry_deadline               | timestamp with time zone | timestamp with time zone | NULL     | -
 allow_decimal_marks               | boolean                  | boolean                  | NULL     | true
 decimal_places                    | integer                  | integer                  | NULL     | 0
 marks_moderation_required         | boolean                  | boolean                  | NULL     | false
 marks_verification_required       | boolean                  | boolean                  | NULL     | true
 allow_absent_marking              | boolean                  | boolean                  | NULL     | true
 absent_mark_value                 | character varying        | character varying(10)    | NULL     | 'AB'::character varying
 allow_exemption                   | boolean                  | boolean                  | NULL     | false
 exemption_mark_value              | character varying        | character varying(10)    | NULL     | 'EX'::character varying
 auto_calculate_results            | boolean                  | boolean                  | NULL     | true
 auto_calculate_ranks              | boolean                  | boolean                  | NULL     | true
 rank_calculation_method           | character varying        | character varying(30)    | NULL     | 'PERCENTAGE'::character varying
 include_grace_marks_in_total      | boolean                  | boolean                  | NULL     | true
 round_off_marks                   | boolean                  | boolean                  | NULL     | false
 result_status                     | character varying        | character varying(30)    | NULL     | 'PENDING'::character varying
 publish_results_online            | boolean                  | boolean                  | NULL     | true
 allow_online_result_viewing       | boolean                  | boolean                  | NULL     | true
 send_result_notifications         | boolean                  | boolean                  | NULL     | true
 report_card_template_id           | uuid                     | uuid                     | NULL     | -
 report_card_format                | character varying        | character varying(20)    | NULL     | 'A4'::character varying
 include_attendance_in_report      | boolean                  | boolean                  | NULL     | true
 include_remarks_in_report         | boolean                  | boolean                  | NULL     | true
 principal_signature_url           | text                     | text                     | NULL     | -
 class_teacher_signature_required  | boolean                  | boolean                  | NULL     | true
 calculate_class_average           | boolean                  | boolean                  | NULL     | true
 calculate_section_average         | boolean                  | boolean                  | NULL     | true
 calculate_subject_average         | boolean                  | boolean                  | NULL     | true
 show_class_rank                   | boolean                  | boolean                  | NULL     | true
 show_section_rank                 | boolean                  | boolean                  | NULL     | true
 show_percentile                   | boolean                  | boolean                  | NULL     | false
 revaluation_allowed               | boolean                  | boolean                  | NULL     | false
 revaluation_fee                   | numeric                  | numeric                  | NULL     | -
 revaluation_deadline              | date                     | date                     | NULL     | -
 photocopy_allowed                 | boolean                  | boolean                  | NULL     | false
 photocopy_fee                     | numeric                  | numeric                  | NULL     | -
 total_marks_entered               | integer                  | integer                  | NULL     | 0
 marks_entry_completion_percentage | numeric                  | numeric                  | NULL     | 0.00
 highest_marks                     | numeric                  | numeric                  | NULL     | -
 lowest_marks                      | numeric                  | numeric                  | NULL     | -
 average_marks                     | numeric                  | numeric                  | NULL     | -
 median_marks                      | numeric                  | numeric                  | NULL     | -
 pass_percentage                   | numeric                  | numeric                  | NULL     | -
 fail_percentage                   | numeric                  | numeric                  | NULL     | -
 total_passed_students             | integer                  | integer                  | NULL     | 0
 total_failed_students             | integer                  | integer                  | NULL     | 0
 total_absent_students             | integer                  | integer                  | NULL     | 0
 subject_wise_statistics           | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 class_wise_statistics             | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 school_topper_id                  | uuid                     | uuid                     | NULL     | -
 class_toppers                     | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 exam_instructions                 | text                     | text                     | NULL     | -
 general_instructions              | text                     | text                     | NULL     | -
 reporting_instructions            | text                     | text                     | NULL     | -
 syllabus_url                      | text                     | text                     | NULL     | -
 question_paper_pattern_url        | text                     | text                     | NULL     | -
 sample_paper_urls                 | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 notification_settings             | jsonb                    | jsonb                    | NULL     | '{"notification_channels": ["EMAIL", "SMS", "PUSH"], "send_mark_entry_reminders": true, "send_result_notifications": true, "send_schedule_notifications": true, "send_admit_card_notifications": true}'::jsonb
 status                            | character varying        | character varying(30)    | NULL     | 'DRAFT'::character varying
 is_active                         | boolean                  | boolean                  | NULL     | true
 is_deleted                        | boolean                  | boolean                  | NULL     | false
 created_by                        | uuid                     | uuid                     | NULL     | -
 approved_by                       | uuid                     | uuid                     | NULL     | -
 approved_at                       | timestamp with time zone | timestamp with time zone | NULL     | -
 cancelled_by                      | uuid                     | uuid                     | NULL     | -
 cancelled_at                      | timestamp with time zone | timestamp with time zone | NULL     | -
 cancellation_reason               | text                     | text                     | NULL     | -
 notes                             | text                     | text                     | NULL     | -
 metadata                          | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 created_at                        | timestamp with time zone | timestamp with time zone | NULL     | now()
 updated_at                        | timestamp with time zone | timestamp with time zone | NULL     | now()
(125 rows)


### extracurricular_activities

          Column           |           Type           |        Full Type         | Nullable |            Default             
---------------------------+--------------------------+--------------------------+----------+--------------------------------
 id                        | uuid                     | uuid                     | NOT NULL | uuid_generate_v4()
 school_id                 | uuid                     | uuid                     | NOT NULL | -
 academic_year_id          | uuid                     | uuid                     | NOT NULL | -
 activity_code             | character varying        | character varying(50)    | NOT NULL | -
 activity_name             | character varying        | character varying(200)   | NOT NULL | -
 activity_type             | character varying        | character varying(50)    | NOT NULL | -
 activity_category         | character varying        | character varying(50)    | NULL     | -
 club_id                   | uuid                     | uuid                     | NULL     | -
 event_id                  | uuid                     | uuid                     | NULL     | -
 description               | text                     | text                     | NOT NULL | -
 learning_objectives       | ARRAY                    | ARRAY                    | NULL     | -
 expected_outcomes         | ARRAY                    | ARRAY                    | NULL     | -
 activity_date             | date                     | date                     | NULL     | -
 start_time                | time without time zone   | time without time zone   | NULL     | -
 end_time                  | time without time zone   | time without time zone   | NULL     | -
 duration_minutes          | integer                  | integer                  | NULL     | -
 is_recurring              | boolean                  | boolean                  | NULL     | false
 recurrence_pattern        | character varying        | character varying(30)    | NULL     | -
 recurring_day             | character varying        | character varying(20)    | NULL     | -
 recurring_time            | time without time zone   | time without time zone   | NULL     | -
 sessions_planned          | integer                  | integer                  | NULL     | -
 sessions_completed        | integer                  | integer                  | NULL     | 0
 venue                     | character varying        | character varying(200)   | NULL     | -
 venue_type                | character varying        | character varying(50)    | NULL     | -
 instructor_type           | character varying        | character varying(30)    | NULL     | -
 instructor_staff_id       | uuid                     | uuid                     | NULL     | -
 instructor_name           | character varying        | character varying(200)   | NULL     | -
 instructor_qualification  | character varying        | character varying(200)   | NULL     | -
 instructor_phone          | character varying        | character varying(15)    | NULL     | -
 external_trainer          | boolean                  | boolean                  | NULL     | false
 trainer_organization      | character varying        | character varying(200)   | NULL     | -
 target_classes            | ARRAY                    | ARRAY                    | NULL     | -
 eligible_age_min          | integer                  | integer                  | NULL     | -
 eligible_age_max          | integer                  | integer                  | NULL     | -
 gender_restriction        | character varying        | character varying(20)    | NULL     | -
 enrollment_required       | boolean                  | boolean                  | NULL     | true
 enrollment_open           | boolean                  | boolean                  | NULL     | true
 max_participants          | integer                  | integer                  | NULL     | -
 min_participants          | integer                  | integer                  | NULL     | -
 current_enrollments       | integer                  | integer                  | NULL     | 0
 waitlist_available        | boolean                  | boolean                  | NULL     | false
 waitlist_count            | integer                  | integer                  | NULL     | 0
 activity_fee              | numeric                  | numeric                  | NULL     | 0.00
 has_fee                   | boolean                  | boolean                  | NULL     | false
 material_fee              | numeric                  | numeric                  | NULL     | -
 materials_required        | ARRAY                    | ARRAY                    | NULL     | -
 equipment_needed          | ARRAY                    | ARRAY                    | NULL     | -
 prerequisites             | text                     | text                     | NULL     | -
 skill_level               | character varying        | character varying(30)    | NULL     | -
 attendance_mandatory      | boolean                  | boolean                  | NULL     | true
 min_attendance_percentage | numeric                  | numeric                  | NULL     | 75.00
 total_sessions            | integer                  | integer                  | NULL     | 0
 has_assessment            | boolean                  | boolean                  | NULL     | false
 assessment_type           | character varying        | character varying(30)    | NULL     | -
 certificates_provided     | boolean                  | boolean                  | NULL     | true
 certificate_criteria      | text                     | text                     | NULL     | -
 budget_allocated          | numeric                  | numeric                  | NULL     | -
 expenses                  | numeric                  | numeric                  | NULL     | -
 parent_consent_required   | boolean                  | boolean                  | NULL     | false
 safety_measures           | ARRAY                    | ARRAY                    | NULL     | -
 insurance_required        | boolean                  | boolean                  | NULL     | false
 total_participants        | integer                  | integer                  | NULL     | 0
 completion_rate           | numeric                  | numeric                  | NULL     | -
 participant_satisfaction  | numeric                  | numeric                  | NULL     | -
 achievements              | ARRAY                    | ARRAY                    | NULL     | -
 status                    | character varying        | character varying(30)    | NULL     | 'SCHEDULED'::character varying
 is_active                 | boolean                  | boolean                  | NULL     | true
 cancellation_reason       | text                     | text                     | NULL     | -
 activity_plan_url         | text                     | text                     | NULL     | -
 attendance_sheet_url      | text                     | text                     | NULL     | -
 photos                    | ARRAY                    | ARRAY                    | NULL     | -
 metadata                  | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 notes                     | text                     | text                     | NULL     | -
 created_by                | uuid                     | uuid                     | NULL     | -
 created_at                | timestamp with time zone | timestamp with time zone | NULL     | now()
 updated_at                | timestamp with time zone | timestamp with time zone | NULL     | now()
(76 rows)


### fee_adjustments_refunds

           Column            |           Type           |        Full Type         | Nullable |           Default            
-----------------------------+--------------------------+--------------------------+----------+------------------------------
 id                          | uuid                     | uuid                     | NOT NULL | gen_random_uuid()
 school_id                   | uuid                     | uuid                     | NOT NULL | -
 academic_year_id            | uuid                     | uuid                     | NOT NULL | -
 adjustment_number           | character varying        | character varying(50)    | NOT NULL | -
 adjustment_type             | character varying        | character varying(30)    | NOT NULL | -
 transaction_type            | character varying        | character varying(30)    | NULL     | 'CREDIT'::character varying
 student_id                  | uuid                     | uuid                     | NOT NULL | -
 student_fee_assignment_id   | uuid                     | uuid                     | NULL     | -
 original_payment_id         | uuid                     | uuid                     | NULL     | -
 original_receipt_id         | uuid                     | uuid                     | NULL     | -
 class_id                    | uuid                     | uuid                     | NOT NULL | -
 section_id                  | uuid                     | uuid                     | NULL     | -
 student_admission_number    | character varying        | character varying(50)    | NULL     | -
 student_name                | character varying        | character varying(200)   | NOT NULL | -
 class_name                  | character varying        | character varying(50)    | NULL     | -
 adjustment_date             | date                     | date                     | NOT NULL | CURRENT_DATE
 adjustment_timestamp        | timestamp with time zone | timestamp with time zone | NOT NULL | now()
 financial_year              | character varying        | character varying(10)    | NULL     | -
 original_amount             | numeric                  | numeric                  | NULL     | -
 adjustment_amount           | numeric                  | numeric                  | NOT NULL | -
 adjusted_amount             | numeric                  | numeric                  | NULL     | -
 amount_in_words             | text                     | text                     | NULL     | -
 tuition_fee_adjustment      | numeric                  | numeric                  | NULL     | 0
 development_fee_adjustment  | numeric                  | numeric                  | NULL     | 0
 sports_fee_adjustment       | numeric                  | numeric                  | NULL     | 0
 library_fee_adjustment      | numeric                  | numeric                  | NULL     | 0
 lab_fee_adjustment          | numeric                  | numeric                  | NULL     | 0
 transport_fee_adjustment    | numeric                  | numeric                  | NULL     | 0
 hostel_fee_adjustment       | numeric                  | numeric                  | NULL     | 0
 examination_fee_adjustment  | numeric                  | numeric                  | NULL     | 0
 late_fee_adjustment         | numeric                  | numeric                  | NULL     | 0
 other_adjustments           | numeric                  | numeric                  | NULL     | 0
 tax_adjustment              | numeric                  | numeric                  | NULL     | 0
 gst_adjustment              | numeric                  | numeric                  | NULL     | 0
 adjustment_category         | character varying        | character varying(50)    | NULL     | -
 reason_code                 | character varying        | character varying(20)    | NULL     | -
 reason_description          | text                     | text                     | NOT NULL | -
 detailed_justification      | text                     | text                     | NULL     | -
 refund_mode                 | character varying        | character varying(30)    | NULL     | -
 refund_processing_fee       | numeric                  | numeric                  | NULL     | 0
 refund_deduction_percentage | numeric                  | numeric                  | NULL     | 0
 refund_deduction_amount     | numeric                  | numeric                  | NULL     | 0
 net_refund_amount           | numeric                  | numeric                  | NULL     | -
 refund_payment_date         | date                     | date                     | NULL     | -
 refund_cheque_number        | character varying        | character varying(50)    | NULL     | -
 refund_transaction_id       | character varying        | character varying(100)   | NULL     | -
 refund_bank_reference       | character varying        | character varying(100)   | NULL     | -
 refund_payee_name           | character varying        | character varying(200)   | NULL     | -
 refund_bank_account_number  | character varying        | character varying(50)    | NULL     | -
 refund_bank_ifsc            | character varying        | character varying(20)    | NULL     | -
 refund_bank_name            | character varying        | character varying(200)   | NULL     | -
 credit_note_number          | character varying        | character varying(50)    | NULL     | -
 credit_note_date            | date                     | date                     | NULL     | -
 credit_note_url             | text                     | text                     | NULL     | -
 credit_note_validity_days   | integer                  | integer                  | NULL     | 365
 credit_note_expiry_date     | date                     | date                     | NULL     | -
 credit_note_utilized        | boolean                  | boolean                  | NULL     | false
 credit_note_utilized_date   | date                     | date                     | NULL     | -
 credit_note_balance         | numeric                  | numeric                  | NULL     | -
 debit_note_number           | character varying        | character varying(50)    | NULL     | -
 debit_note_date             | date                     | date                     | NULL     | -
 debit_note_url              | text                     | text                     | NULL     | -
 write_off_approved_by       | uuid                     | uuid                     | NULL     | -
 write_off_approval_date     | date                     | date                     | NULL     | -
 write_off_approval_number   | character varying        | character varying(50)    | NULL     | -
 write_off_category          | character varying        | character varying(50)    | NULL     | -
 transfer_to_school_name     | character varying        | character varying(200)   | NULL     | -
 transfer_date               | date                     | date                     | NULL     | -
 transfer_certificate_number | character varying        | character varying(50)    | NULL     | -
 proportion_refundable       | numeric                  | numeric                  | NULL     | 100.00
 months_attended             | integer                  | integer                  | NULL     | -
 months_total                | integer                  | integer                  | NULL     | -
 policy_reference            | character varying        | character varying(100)   | NULL     | -
 policy_clause               | text                     | text                     | NULL     | -
 refund_policy_percentage    | numeric                  | numeric                  | NULL     | -
 retention_percentage        | numeric                  | numeric                  | NULL     | -
 notice_period_days          | integer                  | integer                  | NULL     | -
 notice_given_date           | date                     | date                     | NULL     | -
 notice_compliance           | boolean                  | boolean                  | NULL     | true
 supporting_documents        | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 parent_application_url      | text                     | text                     | NULL     | -
 parent_application_date     | date                     | date                     | NULL     | -
 transfer_certificate_url    | text                     | text                     | NULL     | -
 bank_passbook_url           | text                     | text                     | NULL     | -
 cancelled_cheque_url        | text                     | text                     | NULL     | -
 id_proof_url                | text                     | text                     | NULL     | -
 requires_approval           | boolean                  | boolean                  | NULL     | true
 approval_level              | integer                  | integer                  | NULL     | 0
 hod_approved                | boolean                  | boolean                  | NULL     | false
 hod_approved_by             | uuid                     | uuid                     | NULL     | -
 hod_approval_date           | date                     | date                     | NULL     | -
 hod_remarks                 | text                     | text                     | NULL     | -
 principal_approved          | boolean                  | boolean                  | NULL     | false
 principal_approved_by       | uuid                     | uuid                     | NULL     | -
 principal_approval_date     | date                     | date                     | NULL     | -
 principal_remarks           | text                     | text                     | NULL     | -
 board_approved              | boolean                  | boolean                  | NULL     | false
 board_approval_date         | date                     | date                     | NULL     | -
 board_approval_number       | character varying        | character varying(50)    | NULL     | -
 committee_approval_required | boolean                  | boolean                  | NULL     | false
 committee_approval_id       | uuid                     | uuid                     | NULL     | -
 final_approval_by           | uuid                     | uuid                     | NULL     | -
 final_approval_date         | date                     | date                     | NULL     | -
 is_rejected                 | boolean                  | boolean                  | NULL     | false
 rejected_by                 | uuid                     | uuid                     | NULL     | -
 rejection_date              | date                     | date                     | NULL     | -
 rejection_reason            | text                     | text                     | NULL     | -
 processing_status           | character varying        | character varying(30)    | NULL     | 'PENDING'::character varying
 processed_by                | uuid                     | uuid                     | NULL     | -
 processed_date              | date                     | date                     | NULL     | -
 processing_notes            | text                     | text                     | NULL     | -
 payment_status              | character varying        | character varying(30)    | NULL     | 'PENDING'::character varying
 payment_initiated_date      | date                     | date                     | NULL     | -
 payment_completed_date      | date                     | date                     | NULL     | -
 payment_failure_reason      | text                     | text                     | NULL     | -
 accounting_entry_created    | boolean                  | boolean                  | NULL     | false
 accounting_entry_id         | character varying        | character varying(100)   | NULL     | -
 journal_entry_number        | character varying        | character varying(50)    | NULL     | -
 ledger_account_debited      | character varying        | character varying(100)   | NULL     | -
 ledger_account_credited     | character varying        | character varying(100)   | NULL     | -
 posted_to_ledger            | boolean                  | boolean                  | NULL     | false
 ledger_posting_date         | date                     | date                     | NULL     | -
 reversed_entry              | boolean                  | boolean                  | NULL     | false
 reversal_entry_id           | character varying        | character varying(100)   | NULL     | -
 tds_applicable              | boolean                  | boolean                  | NULL     | false
 tds_percentage              | numeric                  | numeric                  | NULL     | -
 tds_amount                  | numeric                  | numeric                  | NULL     | -
 gst_reversal_required       | boolean                  | boolean                  | NULL     | false
 gst_reversal_amount         | numeric                  | numeric                  | NULL     | -
 gst_reversal_period         | character varying        | character varying(20)    | NULL     | -
 audit_trail                 | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 compliance_checked          | boolean                  | boolean                  | NULL     | false
 compliance_checked_by       | uuid                     | uuid                     | NULL     | -
 compliance_remarks          | text                     | text                     | NULL     | -
 statutory_compliance        | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 parent_notified             | boolean                  | boolean                  | NULL     | false
 parent_notification_date    | date                     | date                     | NULL     | -
 accountant_notified         | boolean                  | boolean                  | NULL     | false
 parent_acknowledged         | boolean                  | boolean                  | NULL     | false
 parent_acknowledgment_date  | date                     | date                     | NULL     | -
 parent_signature_url        | text                     | text                     | NULL     | -
 is_cancelled                | boolean                  | boolean                  | NULL     | false
 cancelled_by                | uuid                     | uuid                     | NULL     | -
 cancelled_date              | date                     | date                     | NULL     | -
 cancellation_reason         | text                     | text                     | NULL     | -
 remarks                     | text                     | text                     | NULL     | -
 internal_notes              | text                     | text                     | NULL     | -
 metadata                    | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 is_active                   | boolean                  | boolean                  | NULL     | true
 created_at                  | timestamp with time zone | timestamp with time zone | NULL     | now()
 updated_at                  | timestamp with time zone | timestamp with time zone | NULL     | now()
 created_by                  | uuid                     | uuid                     | NULL     | -
(152 rows)


### fee_committee_approvals

              Column              |           Type           |        Full Type         | Nullable |              Default               
----------------------------------+--------------------------+--------------------------+----------+------------------------------------
 id                               | uuid                     | uuid                     | NOT NULL | gen_random_uuid()
 school_id                        | uuid                     | uuid                     | NOT NULL | -
 academic_year_id                 | uuid                     | uuid                     | NOT NULL | -
 request_number                   | character varying        | character varying(50)    | NOT NULL | -
 request_type                     | character varying        | character varying(50)    | NOT NULL | -
 request_category                 | character varying        | character varying(50)    | NULL     | -
 student_id                       | uuid                     | uuid                     | NULL     | -
 fee_structure_id                 | uuid                     | uuid                     | NULL     | -
 fee_adjustment_id                | uuid                     | uuid                     | NULL     | -
 concession_id                    | uuid                     | uuid                     | NULL     | -
 request_date                     | date                     | date                     | NOT NULL | CURRENT_DATE
 request_timestamp                | timestamp with time zone | timestamp with time zone | NOT NULL | now()
 financial_year                   | character varying        | character varying(10)    | NULL     | -
 student_admission_number         | character varying        | character varying(50)    | NULL     | -
 student_name                     | character varying        | character varying(200)   | NULL     | -
 class_id                         | uuid                     | uuid                     | NULL     | -
 class_name                       | character varying        | character varying(50)    | NULL     | -
 amount_involved                  | numeric                  | numeric                  | NULL     | -
 amount_in_words                  | text                     | text                     | NULL     | -
 current_fee_amount               | numeric                  | numeric                  | NULL     | -
 requested_fee_amount             | numeric                  | numeric                  | NULL     | -
 difference_amount                | numeric                  | numeric                  | NULL     | -
 percentage_change                | numeric                  | numeric                  | NULL     | -
 total_students_impacted          | integer                  | integer                  | NULL     | 0
 student_list                     | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 classes_impacted                 | ARRAY                    | ARRAY                    | NULL     | -
 estimated_revenue_impact         | numeric                  | numeric                  | NULL     | -
 request_title                    | character varying        | character varying(200)   | NOT NULL | -
 request_description              | text                     | text                     | NOT NULL | -
 detailed_justification           | text                     | text                     | NULL     | -
 reason_code                      | character varying        | character varying(20)    | NULL     | -
 reason_category                  | character varying        | character varying(50)    | NULL     | -
 background_information           | text                     | text                     | NULL     | -
 current_situation                | text                     | text                     | NULL     | -
 proposed_solution                | text                     | text                     | NULL     | -
 policy_reference                 | character varying        | character varying(100)   | NULL     | -
 policy_clause                    | text                     | text                     | NULL     | -
 regulatory_requirement           | boolean                  | boolean                  | NULL     | false
 regulatory_reference             | character varying        | character varying(200)   | NULL     | -
 precedent_exists                 | boolean                  | boolean                  | NULL     | false
 precedent_details                | text                     | text                     | NULL     | -
 financial_impact_analysis        | text                     | text                     | NULL     | -
 budget_availability              | boolean                  | boolean                  | NULL     | true
 budget_allocation_details        | text                     | text                     | NULL     | -
 cost_benefit_analysis            | text                     | text                     | NULL     | -
 alternatives_considered          | text                     | text                     | NULL     | -
 recommended_option               | text                     | text                     | NULL     | -
 risk_assessment                  | text                     | text                     | NULL     | -
 risk_level                       | character varying        | character varying(20)    | NULL     | -
 mitigation_measures              | text                     | text                     | NULL     | -
 supporting_documents             | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 parent_application_url           | text                     | text                     | NULL     | -
 income_certificate_url           | text                     | text                     | NULL     | -
 medical_certificate_url          | text                     | text                     | NULL     | -
 court_order_url                  | text                     | text                     | NULL     | -
 policy_document_url              | text                     | text                     | NULL     | -
 financial_analysis_url           | text                     | text                     | NULL     | -
 other_documents_url              | ARRAY                    | ARRAY                    | NULL     | -
 requested_by                     | uuid                     | uuid                     | NULL     | -
 requester_designation            | character varying        | character varying(100)   | NULL     | -
 requester_remarks                | text                     | text                     | NULL     | -
 recommended_by                   | uuid                     | uuid                     | NULL     | -
 recommender_remarks              | text                     | text                     | NULL     | -
 recommendation_date              | date                     | date                     | NULL     | -
 requires_hod_review              | boolean                  | boolean                  | NULL     | false
 hod_reviewed                     | boolean                  | boolean                  | NULL     | false
 hod_reviewed_by                  | uuid                     | uuid                     | NULL     | -
 hod_review_date                  | date                     | date                     | NULL     | -
 hod_recommendation               | character varying        | character varying(20)    | NULL     | -
 hod_remarks                      | text                     | text                     | NULL     | -
 requires_principal_review        | boolean                  | boolean                  | NULL     | true
 principal_reviewed               | boolean                  | boolean                  | NULL     | false
 principal_reviewed_by            | uuid                     | uuid                     | NULL     | -
 principal_review_date            | date                     | date                     | NULL     | -
 principal_recommendation         | character varying        | character varying(20)    | NULL     | -
 principal_remarks                | text                     | text                     | NULL     | -
 requires_committee_approval      | boolean                  | boolean                  | NULL     | true
 committee_name                   | character varying        | character varying(200)   | NULL     | 'Fee Committee'::character varying
 committee_meeting_id             | character varying        | character varying(50)    | NULL     | -
 committee_meeting_date           | date                     | date                     | NULL     | -
 committee_meeting_agenda_number  | character varying        | character varying(20)    | NULL     | -
 committee_members                | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 quorum_present                   | boolean                  | boolean                  | NULL     | false
 total_members                    | integer                  | integer                  | NULL     | -
 members_present                  | integer                  | integer                  | NULL     | -
 presented_by                     | uuid                     | uuid                     | NULL     | -
 presentation_date                | date                     | date                     | NULL     | -
 voting_conducted                 | boolean                  | boolean                  | NULL     | false
 voting_method                    | character varying        | character varying(30)    | NULL     | -
 votes_in_favor                   | integer                  | integer                  | NULL     | 0
 votes_against                    | integer                  | integer                  | NULL     | 0
 votes_abstained                  | integer                  | integer                  | NULL     | 0
 voting_details                   | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 committee_decision               | character varying        | character varying(30)    | NULL     | -
 committee_decision_date          | date                     | date                     | NULL     | -
 conditions_attached              | ARRAY                    | ARRAY                    | NULL     | -
 compliance_required              | text                     | text                     | NULL     | -
 committee_resolution_number      | character varying        | character varying(50)    | NULL     | -
 committee_minutes_url            | text                     | text                     | NULL     | -
 committee_remarks                | text                     | text                     | NULL     | -
 dissent_notes                    | text                     | text                     | NULL     | -
 requires_board_approval          | boolean                  | boolean                  | NULL     | false
 board_approval_obtained          | boolean                  | boolean                  | NULL     | false
 board_meeting_date               | date                     | date                     | NULL     | -
 board_resolution_number          | character varying        | character varying(50)    | NULL     | -
 board_resolution_url             | text                     | text                     | NULL     | -
 approval_status                  | character varying        | character varying(30)    | NULL     | 'PENDING'::character varying
 final_approver_id                | uuid                     | uuid                     | NULL     | -
 final_approval_date              | date                     | date                     | NULL     | -
 final_approval_order_number      | character varying        | character varying(50)    | NULL     | -
 approved_amount                  | numeric                  | numeric                  | NULL     | -
 conditional_approval             | boolean                  | boolean                  | NULL     | false
 approval_conditions              | ARRAY                    | ARRAY                    | NULL     | -
 approval_validity_days           | integer                  | integer                  | NULL     | -
 approval_expiry_date             | date                     | date                     | NULL     | -
 rejection_reason                 | text                     | text                     | NULL     | -
 rejection_date                   | date                     | date                     | NULL     | -
 rejected_by                      | uuid                     | uuid                     | NULL     | -
 appeal_allowed                   | boolean                  | boolean                  | NULL     | true
 appeal_deadline                  | date                     | date                     | NULL     | -
 implementation_required          | boolean                  | boolean                  | NULL     | true
 implementation_status            | character varying        | character varying(30)    | NULL     | -
 implementation_date              | date                     | date                     | NULL     | -
 implemented_by                   | uuid                     | uuid                     | NULL     | -
 implementation_notes             | text                     | text                     | NULL     | -
 effective_from_date              | date                     | date                     | NULL     | -
 compliance_verification_required | boolean                  | boolean                  | NULL     | false
 compliance_verified              | boolean                  | boolean                  | NULL     | false
 compliance_verification_date     | date                     | date                     | NULL     | -
 compliance_verified_by           | uuid                     | uuid                     | NULL     | -
 monitoring_required              | boolean                  | boolean                  | NULL     | false
 next_review_date                 | date                     | date                     | NULL     | -
 stakeholders_notified            | boolean                  | boolean                  | NULL     | false
 notification_date                | date                     | date                     | NULL     | -
 notification_channels            | ARRAY                    | ARRAY                    | NULL     | ARRAY['EMAIL'::text]
 parent_informed                  | boolean                  | boolean                  | NULL     | false
 staff_informed                   | boolean                  | boolean                  | NULL     | false
 audit_trail                      | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 policy_compliance_checked        | boolean                  | boolean                  | NULL     | false
 legal_compliance_checked         | boolean                  | boolean                  | NULL     | false
 transparency_compliance          | boolean                  | boolean                  | NULL     | false
 public_disclosure_required       | boolean                  | boolean                  | NULL     | false
 disclosure_date                  | date                     | date                     | NULL     | -
 is_withdrawn                     | boolean                  | boolean                  | NULL     | false
 withdrawn_by                     | uuid                     | uuid                     | NULL     | -
 withdrawal_date                  | date                     | date                     | NULL     | -
 withdrawal_reason                | text                     | text                     | NULL     | -
 is_cancelled                     | boolean                  | boolean                  | NULL     | false
 cancelled_by                     | uuid                     | uuid                     | NULL     | -
 cancellation_date                | date                     | date                     | NULL     | -
 cancellation_reason              | text                     | text                     | NULL     | -
 remarks                          | text                     | text                     | NULL     | -
 internal_notes                   | text                     | text                     | NULL     | -
 confidential_notes               | text                     | text                     | NULL     | -
 is_active                        | boolean                  | boolean                  | NULL     | true
 is_closed                        | boolean                  | boolean                  | NULL     | false
 closed_date                      | date                     | date                     | NULL     | -
 metadata                         | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 created_at                       | timestamp with time zone | timestamp with time zone | NULL     | now()
 updated_at                       | timestamp with time zone | timestamp with time zone | NULL     | now()
 created_by                       | uuid                     | uuid                     | NULL     | -
(161 rows)


### fee_concessions_scholarships

               Column                |           Type           |        Full Type         | Nullable |             Default             
-------------------------------------+--------------------------+--------------------------+----------+---------------------------------
 id                                  | uuid                     | uuid                     | NOT NULL | gen_random_uuid()
 school_id                           | uuid                     | uuid                     | NOT NULL | -
 academic_year_id                    | uuid                     | uuid                     | NOT NULL | -
 concession_code                     | character varying        | character varying(20)    | NOT NULL | -
 concession_name                     | character varying        | character varying(200)   | NOT NULL | -
 concession_type                     | character varying        | character varying(30)    | NOT NULL | -
 eligibility_criteria                | text                     | text                     | NULL     | -
 minimum_attendance_percentage       | numeric                  | numeric                  | NULL     | -
 minimum_academic_percentage         | numeric                  | numeric                  | NULL     | -
 income_criteria                     | boolean                  | boolean                  | NULL     | false
 maximum_annual_income               | numeric                  | numeric                  | NULL     | -
 category_specific                   | boolean                  | boolean                  | NULL     | false
 applicable_categories               | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 merit_based                         | boolean                  | boolean                  | NULL     | false
 minimum_merit_percentage            | numeric                  | numeric                  | NULL     | -
 sports_achievement_based            | boolean                  | boolean                  | NULL     | false
 cultural_achievement_based          | boolean                  | boolean                  | NULL     | false
 concession_calculation_type         | character varying        | character varying(20)    | NULL     | 'PERCENTAGE'::character varying
 concession_percentage               | numeric                  | numeric                  | NULL     | -
 concession_fixed_amount             | numeric                  | numeric                  | NULL     | -
 maximum_concession_amount           | numeric                  | numeric                  | NULL     | -
 applies_to_tuition_fee              | boolean                  | boolean                  | NULL     | true
 applies_to_development_fee          | boolean                  | boolean                  | NULL     | false
 applies_to_transport_fee            | boolean                  | boolean                  | NULL     | false
 applies_to_hostel_fee               | boolean                  | boolean                  | NULL     | false
 applies_to_all_fees                 | boolean                  | boolean                  | NULL     | false
 applicable_fee_components           | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 is_government_scheme                | boolean                  | boolean                  | NULL     | false
 scheme_code                         | character varying        | character varying(50)    | NULL     | -
 scheme_sponsor                      | character varying        | character varying(200)   | NULL     | -
 government_reimbursement_applicable | boolean                  | boolean                  | NULL     | false
 reimbursement_percentage            | numeric                  | numeric                  | NULL     | -
 reimbursement_processing_days       | integer                  | integer                  | NULL     | -
 total_slots_available               | integer                  | integer                  | NULL     | -
 slots_allocated                     | integer                  | integer                  | NULL     | 0
 slots_remaining                     | integer                  | integer                  | NULL     | -
 budget_allocated                    | numeric                  | numeric                  | NULL     | -
 budget_utilized                     | numeric                  | numeric                  | NULL     | 0
 budget_remaining                    | numeric                  | numeric                  | NULL     | -
 requires_application                | boolean                  | boolean                  | NULL     | true
 application_start_date              | date                     | date                     | NULL     | -
 application_end_date                | date                     | date                     | NULL     | -
 application_deadline                | date                     | date                     | NULL     | -
 required_documents                  | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 approval_required                   | boolean                  | boolean                  | NULL     | true
 approval_authority                  | character varying        | character varying(50)    | NULL     | -
 committee_approval_required         | boolean                  | boolean                  | NULL     | false
 principal_approval_required         | boolean                  | boolean                  | NULL     | true
 board_approval_required             | boolean                  | boolean                  | NULL     | false
 is_renewable                        | boolean                  | boolean                  | NULL     | false
 renewal_frequency                   | character varying        | character varying(20)    | NULL     | -
 renewal_criteria                    | text                     | text                     | NULL     | -
 auto_renew_if_eligible              | boolean                  | boolean                  | NULL     | false
 status                              | character varying        | character varying(30)    | NULL     | 'ACTIVE'::character varying
 valid_from                          | date                     | date                     | NOT NULL | -
 valid_to                            | date                     | date                     | NOT NULL | -
 is_active                           | boolean                  | boolean                  | NULL     | true
 total_students_benefited            | integer                  | integer                  | NULL     | 0
 total_amount_disbursed              | numeric                  | numeric                  | NULL     | 0
 notes                               | text                     | text                     | NULL     | -
 metadata                            | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 created_by                          | uuid                     | uuid                     | NULL     | -
 created_at                          | timestamp with time zone | timestamp with time zone | NULL     | now()
 updated_at                          | timestamp with time zone | timestamp with time zone | NULL     | now()
(64 rows)


### fee_defaulters

             Column              |           Type           |        Full Type         | Nullable |           Default           
---------------------------------+--------------------------+--------------------------+----------+-----------------------------
 id                              | uuid                     | uuid                     | NOT NULL | gen_random_uuid()
 school_id                       | uuid                     | uuid                     | NOT NULL | -
 academic_year_id                | uuid                     | uuid                     | NOT NULL | -
 student_id                      | uuid                     | uuid                     | NOT NULL | -
 student_fee_assignment_id       | uuid                     | uuid                     | NOT NULL | -
 class_id                        | uuid                     | uuid                     | NOT NULL | -
 section_id                      | uuid                     | uuid                     | NULL     | -
 defaulter_status                | character varying        | character varying(30)    | NULL     | 'ACTIVE'::character varying
 marked_as_defaulter_date        | date                     | date                     | NOT NULL | CURRENT_DATE
 marked_by                       | uuid                     | uuid                     | NULL     | -
 total_outstanding_amount        | numeric                  | numeric                  | NOT NULL | -
 principal_outstanding           | numeric                  | numeric                  | NULL     | -
 late_fee_outstanding            | numeric                  | numeric                  | NULL     | -
 oldest_pending_installment_date | date                     | date                     | NULL     | -
 days_overdue                    | integer                  | integer                  | NULL     | 0
 overdue_installments            | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 total_overdue_installments      | integer                  | integer                  | NULL     | 0
 total_reminders_sent            | integer                  | integer                  | NULL     | 0
 last_reminder_sent_date         | date                     | date                     | NULL     | -
 phone_calls_made                | integer                  | integer                  | NULL     | 0
 last_call_date                  | date                     | date                     | NULL     | -
 physical_visits_made            | integer                  | integer                  | NULL     | 0
 last_visit_date                 | date                     | date                     | NULL     | -
 parent_contacted                | boolean                  | boolean                  | NULL     | false
 parent_response                 | text                     | text                     | NULL     | -
 parent_commitment_date          | date                     | date                     | NULL     | -
 parent_committed_amount         | numeric                  | numeric                  | NULL     | -
 payment_plan_offered            | boolean                  | boolean                  | NULL     | false
 payment_plan_accepted           | boolean                  | boolean                  | NULL     | false
 payment_plan_details            | jsonb                    | jsonb                    | NULL     | -
 warning_letter_sent             | boolean                  | boolean                  | NULL     | false
 warning_letter_date             | date                     | date                     | NULL     | -
 final_notice_sent               | boolean                  | boolean                  | NULL     | false
 final_notice_date               | date                     | date                     | NULL     | -
 student_suspended               | boolean                  | boolean                  | NULL     | false
 suspension_date                 | date                     | date                     | NULL     | -
 report_card_withheld            | boolean                  | boolean                  | NULL     | false
 exam_participation_restricted   | boolean                  | boolean                  | NULL     | false
 legal_notice_sent               | boolean                  | boolean                  | NULL     | false
 legal_notice_date               | date                     | date                     | NULL     | -
 legal_case_filed                | boolean                  | boolean                  | NULL     | false
 case_number                     | character varying        | character varying(50)    | NULL     | -
 court_name                      | character varying        | character varying(200)   | NULL     | -
 settlement_offered              | boolean                  | boolean                  | NULL     | false
 settlement_amount               | numeric                  | numeric                  | NULL     | -
 settlement_accepted             | boolean                  | boolean                  | NULL     | false
 partial_payment_received        | boolean                  | boolean                  | NULL     | false
 last_partial_payment_date       | date                     | date                     | NULL     | -
 last_partial_payment_amount     | numeric                  | numeric                  | NULL     | -
 is_resolved                     | boolean                  | boolean                  | NULL     | false
 resolution_date                 | date                     | date                     | NULL     | -
 resolution_method               | character varying        | character varying(50)    | NULL     | -
 resolution_notes                | text                     | text                     | NULL     | -
 is_written_off                  | boolean                  | boolean                  | NULL     | false
 written_off_date                | date                     | date                     | NULL     | -
 written_off_amount              | numeric                  | numeric                  | NULL     | -
 written_off_reason              | text                     | text                     | NULL     | -
 written_off_approved_by         | uuid                     | uuid                     | NULL     | -
 notes                           | text                     | text                     | NULL     | -
 metadata                        | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 created_at                      | timestamp with time zone | timestamp with time zone | NULL     | now()
 updated_at                      | timestamp with time zone | timestamp with time zone | NULL     | now()
(62 rows)


### fee_installments

              Column               |           Type           |        Full Type         | Nullable |           Default            
-----------------------------------+--------------------------+--------------------------+----------+------------------------------
 id                                | uuid                     | uuid                     | NOT NULL | gen_random_uuid()
 school_id                         | uuid                     | uuid                     | NOT NULL | -
 academic_year_id                  | uuid                     | uuid                     | NOT NULL | -
 student_fee_assignment_id         | uuid                     | uuid                     | NOT NULL | -
 student_id                        | uuid                     | uuid                     | NOT NULL | -
 fee_structure_id                  | uuid                     | uuid                     | NOT NULL | -
 installment_number                | integer                  | integer                  | NOT NULL | -
 installment_name                  | character varying        | character varying(100)   | NULL     | -
 due_date                          | date                     | date                     | NOT NULL | -
 due_month                         | integer                  | integer                  | NULL     | -
 due_year                          | integer                  | integer                  | NULL     | -
 installment_amount                | numeric                  | numeric                  | NOT NULL | -
 installment_percentage            | numeric                  | numeric                  | NULL     | -
 tax_amount                        | numeric                  | numeric                  | NULL     | 0
 total_installment_amount          | numeric                  | numeric                  | NOT NULL | -
 amount_paid                       | numeric                  | numeric                  | NULL     | 0
 amount_outstanding                | numeric                  | numeric                  | NOT NULL | -
 payment_date                      | date                     | date                     | NULL     | -
 paid_in_full                      | boolean                  | boolean                  | NULL     | false
 late_fee_applicable               | boolean                  | boolean                  | NULL     | true
 grace_period_days                 | integer                  | integer                  | NULL     | 0
 grace_period_end_date             | date                     | date                     | NULL     | -
 is_overdue                        | boolean                  | boolean                  | NULL     | false
 overdue_since                     | date                     | date                     | NULL     | -
 days_overdue                      | integer                  | integer                  | NULL     | 0
 late_fee_charged                  | numeric                  | numeric                  | NULL     | 0
 late_fee_paid                     | numeric                  | numeric                  | NULL     | 0
 late_fee_waived                   | numeric                  | numeric                  | NULL     | 0
 early_payment_discount_applicable | boolean                  | boolean                  | NULL     | false
 early_payment_deadline            | date                     | date                     | NULL     | -
 early_payment_discount_amount     | numeric                  | numeric                  | NULL     | 0
 discount_applied                  | numeric                  | numeric                  | NULL     | 0
 payment_status                    | character varying        | character varying(30)    | NULL     | 'PENDING'::character varying
 total_payments_made               | integer                  | integer                  | NULL     | 0
 payment_ids                       | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 last_payment_id                   | uuid                     | uuid                     | NULL     | -
 last_payment_date                 | date                     | date                     | NULL     | -
 last_payment_amount               | numeric                  | numeric                  | NULL     | -
 reminder_sent                     | boolean                  | boolean                  | NULL     | false
 last_reminder_sent_at             | timestamp with time zone | timestamp with time zone | NULL     | -
 total_reminders_sent              | integer                  | integer                  | NULL     | 0
 examination_id                    | uuid                     | uuid                     | NULL     | -
 exam_participation_allowed        | boolean                  | boolean                  | NULL     | true
 is_active                         | boolean                  | boolean                  | NULL     | true
 is_cancelled                      | boolean                  | boolean                  | NULL     | false
 cancellation_reason               | text                     | text                     | NULL     | -
 notes                             | text                     | text                     | NULL     | -
 metadata                          | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 created_at                        | timestamp with time zone | timestamp with time zone | NULL     | now()
 updated_at                        | timestamp with time zone | timestamp with time zone | NULL     | now()
(50 rows)


### fee_payments

            Column             |           Type           |        Full Type         | Nullable |           Default            
-------------------------------+--------------------------+--------------------------+----------+------------------------------
 id                            | uuid                     | uuid                     | NOT NULL | gen_random_uuid()
 school_id                     | uuid                     | uuid                     | NOT NULL | -
 academic_year_id              | uuid                     | uuid                     | NOT NULL | -
 payment_number                | character varying        | character varying(50)    | NOT NULL | -
 transaction_id                | character varying        | character varying(100)   | NULL     | -
 receipt_number                | character varying        | character varying(50)    | NULL     | -
 student_id                    | uuid                     | uuid                     | NOT NULL | -
 student_fee_assignment_id     | uuid                     | uuid                     | NOT NULL | -
 fee_structure_id              | uuid                     | uuid                     | NOT NULL | -
 fee_installment_id            | uuid                     | uuid                     | NULL     | -
 class_id                      | uuid                     | uuid                     | NOT NULL | -
 section_id                    | uuid                     | uuid                     | NULL     | -
 payment_date                  | date                     | date                     | NOT NULL | CURRENT_DATE
 payment_time                  | time without time zone   | time without time zone   | NOT NULL | CURRENT_TIME
 payment_timestamp             | timestamp with time zone | timestamp with time zone | NOT NULL | now()
 paid_amount                   | numeric                  | numeric                  | NOT NULL | -
 late_fee_paid                 | numeric                  | numeric                  | NULL     | 0
 total_payment_amount          | numeric                  | numeric                  | NOT NULL | -
 tuition_fee_paid              | numeric                  | numeric                  | NULL     | 0
 development_fee_paid          | numeric                  | numeric                  | NULL     | 0
 sports_fee_paid               | numeric                  | numeric                  | NULL     | 0
 library_fee_paid              | numeric                  | numeric                  | NULL     | 0
 lab_fee_paid                  | numeric                  | numeric                  | NULL     | 0
 transport_fee_paid            | numeric                  | numeric                  | NULL     | 0
 hostel_fee_paid               | numeric                  | numeric                  | NULL     | 0
 other_fee_paid                | numeric                  | numeric                  | NULL     | 0
 payment_method                | character varying        | character varying(30)    | NOT NULL | -
 payment_mode                  | character varying        | character varying(30)    | NULL     | -
 cash_received_by              | uuid                     | uuid                     | NULL     | -
 cash_denomination_details     | jsonb                    | jsonb                    | NULL     | -
 cheque_number                 | character varying        | character varying(50)    | NULL     | -
 cheque_date                   | date                     | date                     | NULL     | -
 cheque_bank_name              | character varying        | character varying(200)   | NULL     | -
 cheque_branch                 | character varying        | character varying(200)   | NULL     | -
 cheque_ifsc_code              | character varying        | character varying(20)    | NULL     | -
 cheque_status                 | character varying        | character varying(30)    | NULL     | 'PENDING'::character varying
 cheque_cleared_date           | date                     | date                     | NULL     | -
 cheque_bounce_reason          | text                     | text                     | NULL     | -
 cheque_bounce_charges         | numeric                  | numeric                  | NULL     | 0
 dd_number                     | character varying        | character varying(50)    | NULL     | -
 dd_bank                       | character varying        | character varying(200)   | NULL     | -
 dd_branch                     | character varying        | character varying(200)   | NULL     | -
 payment_gateway               | character varying        | character varying(50)    | NULL     | -
 gateway_transaction_id        | character varying        | character varying(100)   | NULL     | -
 gateway_order_id              | character varying        | character varying(100)   | NULL     | -
 gateway_payment_id            | character varying        | character varying(100)   | NULL     | -
 gateway_signature             | character varying        | character varying(500)   | NULL     | -
 gateway_status                | character varying        | character varying(30)    | NULL     | -
 gateway_response              | jsonb                    | jsonb                    | NULL     | -
 gateway_charges               | numeric                  | numeric                  | NULL     | 0
 gateway_charges_borne_by      | character varying        | character varying(20)    | NULL     | 'SCHOOL'::character varying
 upi_id                        | character varying        | character varying(100)   | NULL     | -
 upi_transaction_ref           | character varying        | character varying(100)   | NULL     | -
 upi_app                       | character varying        | character varying(50)    | NULL     | -
 card_type                     | character varying        | character varying(20)    | NULL     | -
 card_last_four_digits         | character varying        | character varying(4)     | NULL     | -
 card_brand                    | character varying        | character varying(30)    | NULL     | -
 bank_transaction_ref          | character varying        | character varying(100)   | NULL     | -
 bank_name                     | character varying        | character varying(200)   | NULL     | -
 bank_branch                   | character varying        | character varying(200)   | NULL     | -
 bank_ifsc_code                | character varying        | character varying(20)    | NULL     | -
 payer_name                    | character varying        | character varying(200)   | NULL     | -
 payer_relationship            | character varying        | character varying(50)    | NULL     | -
 payer_phone                   | character varying        | character varying(15)    | NULL     | -
 payer_email                   | character varying        | character varying(100)   | NULL     | -
 receipt_generated             | boolean                  | boolean                  | NULL     | false
 receipt_generated_at          | timestamp with time zone | timestamp with time zone | NULL     | -
 receipt_generated_by          | uuid                     | uuid                     | NULL     | -
 receipt_pdf_url               | text                     | text                     | NULL     | -
 receipt_sent_via_email        | boolean                  | boolean                  | NULL     | false
 receipt_sent_via_sms          | boolean                  | boolean                  | NULL     | false
 receipt_sent_via_whatsapp     | boolean                  | boolean                  | NULL     | false
 receipt_email_sent_at         | timestamp with time zone | timestamp with time zone | NULL     | -
 receipt_sms_sent_at           | timestamp with time zone | timestamp with time zone | NULL     | -
 payment_acknowledged          | boolean                  | boolean                  | NULL     | false
 acknowledgement_signature_url | text                     | text                     | NULL     | -
 payment_status                | character varying        | character varying(30)    | NULL     | 'SUCCESS'::character varying
 is_successful                 | boolean                  | boolean                  | NULL     | true
 is_failed                     | boolean                  | boolean                  | NULL     | false
 failure_reason                | text                     | text                     | NULL     | -
 is_refunded                   | boolean                  | boolean                  | NULL     | false
 refund_amount                 | numeric                  | numeric                  | NULL     | 0
 refund_date                   | date                     | date                     | NULL     | -
 refund_reason                 | text                     | text                     | NULL     | -
 refund_processed_by           | uuid                     | uuid                     | NULL     | -
 refund_transaction_id         | character varying        | character varying(100)   | NULL     | -
 partial_refund_amount         | numeric                  | numeric                  | NULL     | 0
 is_reconciled                 | boolean                  | boolean                  | NULL     | false
 reconciled_date               | date                     | date                     | NULL     | -
 reconciled_by                 | uuid                     | uuid                     | NULL     | -
 bank_statement_matched        | boolean                  | boolean                  | NULL     | false
 bank_statement_date           | date                     | date                     | NULL     | -
 bank_statement_entry_id       | character varying        | character varying(100)   | NULL     | -
 accounting_entry_created      | boolean                  | boolean                  | NULL     | false
 accounting_entry_id           | character varying        | character varying(100)   | NULL     | -
 journal_entry_number          | character varying        | character varying(50)    | NULL     | -
 ledger_account                | character varying        | character varying(100)   | NULL     | -
 cost_center                   | character varying        | character varying(100)   | NULL     | -
 tds_applicable                | boolean                  | boolean                  | NULL     | false
 tds_percentage                | numeric                  | numeric                  | NULL     | 0
 tds_amount                    | numeric                  | numeric                  | NULL     | 0
 tax_invoice_number            | character varying        | character varying(50)    | NULL     | -
 tax_invoice_date              | date                     | date                     | NULL     | -
 bbps_transaction              | boolean                  | boolean                  | NULL     | false
 bbps_transaction_id           | character varying        | character varying(100)   | NULL     | -
 bbps_agent_id                 | character varying        | character varying(100)   | NULL     | -
 is_advance_payment            | boolean                  | boolean                  | NULL     | false
 advance_adjusted_against      | text                     | text                     | NULL     | -
 is_bulk_payment               | boolean                  | boolean                  | NULL     | false
 bulk_payment_batch_id         | character varying        | character varying(100)   | NULL     | -
 collected_by                  | uuid                     | uuid                     | NULL     | -
 collection_counter            | character varying        | character varying(50)    | NULL     | -
 verified_by                   | uuid                     | uuid                     | NULL     | -
 verified_at                   | timestamp with time zone | timestamp with time zone | NULL     | -
 approved_by                   | uuid                     | uuid                     | NULL     | -
 approved_at                   | timestamp with time zone | timestamp with time zone | NULL     | -
 payment_confirmation_sent     | boolean                  | boolean                  | NULL     | false
 parent_notified               | boolean                  | boolean                  | NULL     | false
 is_settled                    | boolean                  | boolean                  | NULL     | false
 settlement_date               | date                     | date                     | NULL     | -
 settlement_batch_id           | character varying        | character varying(100)   | NULL     | -
 is_disputed                   | boolean                  | boolean                  | NULL     | false
 dispute_reason                | text                     | text                     | NULL     | -
 dispute_raised_date           | date                     | date                     | NULL     | -
 dispute_resolved              | boolean                  | boolean                  | NULL     | false
 dispute_resolution_notes      | text                     | text                     | NULL     | -
 is_active                     | boolean                  | boolean                  | NULL     | true
 is_cancelled                  | boolean                  | boolean                  | NULL     | false
 cancellation_reason           | text                     | text                     | NULL     | -
 cancelled_by                  | uuid                     | uuid                     | NULL     | -
 cancelled_at                  | timestamp with time zone | timestamp with time zone | NULL     | -
 payment_remarks               | text                     | text                     | NULL     | -
 internal_notes                | text                     | text                     | NULL     | -
 metadata                      | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 created_at                    | timestamp with time zone | timestamp with time zone | NULL     | now()
 updated_at                    | timestamp with time zone | timestamp with time zone | NULL     | now()
(136 rows)


### fee_receipts

            Column            |           Type           |        Full Type         | Nullable |            Default            
------------------------------+--------------------------+--------------------------+----------+-------------------------------
 id                           | uuid                     | uuid                     | NOT NULL | gen_random_uuid()
 school_id                    | uuid                     | uuid                     | NOT NULL | -
 academic_year_id             | uuid                     | uuid                     | NOT NULL | -
 receipt_number               | character varying        | character varying(50)    | NOT NULL | -
 receipt_series               | character varying        | character varying(20)    | NULL     | -
 receipt_type                 | character varying        | character varying(30)    | NULL     | 'OFFICIAL'::character varying
 fee_payment_id               | uuid                     | uuid                     | NOT NULL | -
 student_id                   | uuid                     | uuid                     | NOT NULL | -
 student_fee_assignment_id    | uuid                     | uuid                     | NULL     | -
 class_id                     | uuid                     | uuid                     | NOT NULL | -
 section_id                   | uuid                     | uuid                     | NULL     | -
 receipt_date                 | date                     | date                     | NOT NULL | CURRENT_DATE
 receipt_time                 | time without time zone   | time without time zone   | NOT NULL | CURRENT_TIME
 receipt_timestamp            | timestamp with time zone | timestamp with time zone | NOT NULL | now()
 financial_year               | character varying        | character varying(10)    | NULL     | -
 student_admission_number     | character varying        | character varying(50)    | NULL     | -
 student_name                 | character varying        | character varying(200)   | NOT NULL | -
 father_name                  | character varying        | character varying(200)   | NULL     | -
 mother_name                  | character varying        | character varying(200)   | NULL     | -
 class_name                   | character varying        | character varying(50)    | NULL     | -
 section_name                 | character varying        | character varying(50)    | NULL     | -
 amount_received              | numeric                  | numeric                  | NOT NULL | -
 amount_in_words              | text                     | text                     | NOT NULL | -
 tuition_fee_amount           | numeric                  | numeric                  | NULL     | 0
 development_fee_amount       | numeric                  | numeric                  | NULL     | 0
 sports_fee_amount            | numeric                  | numeric                  | NULL     | 0
 library_fee_amount           | numeric                  | numeric                  | NULL     | 0
 lab_fee_amount               | numeric                  | numeric                  | NULL     | 0
 transport_fee_amount         | numeric                  | numeric                  | NULL     | 0
 hostel_fee_amount            | numeric                  | numeric                  | NULL     | 0
 examination_fee_amount       | numeric                  | numeric                  | NULL     | 0
 late_fee_amount              | numeric                  | numeric                  | NULL     | 0
 other_charges                | numeric                  | numeric                  | NULL     | 0
 taxable_amount               | numeric                  | numeric                  | NULL     | 0
 tax_percentage               | numeric                  | numeric                  | NULL     | 0
 gst_amount                   | numeric                  | numeric                  | NULL     | 0
 cgst_amount                  | numeric                  | numeric                  | NULL     | 0
 sgst_amount                  | numeric                  | numeric                  | NULL     | 0
 igst_amount                  | numeric                  | numeric                  | NULL     | 0
 hsn_sac_code                 | character varying        | character varying(20)    | NULL     | -
 payment_method               | character varying        | character varying(30)    | NOT NULL | -
 payment_mode_details         | text                     | text                     | NULL     | -
 cash_denomination_breakdown  | jsonb                    | jsonb                    | NULL     | -
 cheque_number                | character varying        | character varying(50)    | NULL     | -
 cheque_date                  | date                     | date                     | NULL     | -
 cheque_bank_name             | character varying        | character varying(200)   | NULL     | -
 cheque_branch                | character varying        | character varying(200)   | NULL     | -
 dd_number                    | character varying        | character varying(50)    | NULL     | -
 dd_bank                      | character varying        | character varying(200)   | NULL     | -
 transaction_id               | character varying        | character varying(100)   | NULL     | -
 gateway_name                 | character varying        | character varying(50)    | NULL     | -
 gateway_transaction_ref      | character varying        | character varying(100)   | NULL     | -
 upi_id                       | character varying        | character varying(100)   | NULL     | -
 upi_transaction_ref          | character varying        | character varying(100)   | NULL     | -
 bank_reference_number        | character varying        | character varying(100)   | NULL     | -
 installment_number           | integer                  | integer                  | NULL     | -
 total_installments           | integer                  | integer                  | NULL     | -
 installment_period           | character varying        | character varying(50)    | NULL     | -
 previous_outstanding         | numeric                  | numeric                  | NULL     | 0
 total_fee_payable            | numeric                  | numeric                  | NULL     | -
 amount_now_paid              | numeric                  | numeric                  | NOT NULL | -
 balance_outstanding          | numeric                  | numeric                  | NULL     | 0
 advance_amount               | numeric                  | numeric                  | NULL     | 0
 advance_adjusted             | numeric                  | numeric                  | NULL     | 0
 discount_amount              | numeric                  | numeric                  | NULL     | 0
 discount_reason              | text                     | text                     | NULL     | -
 concession_amount            | numeric                  | numeric                  | NULL     | 0
 concession_name              | character varying        | character varying(200)   | NULL     | -
 waiver_amount                | numeric                  | numeric                  | NULL     | 0
 waiver_approved_by           | uuid                     | uuid                     | NULL     | -
 paid_by_name                 | character varying        | character varying(200)   | NULL     | -
 paid_by_relationship         | character varying        | character varying(50)    | NULL     | -
 paid_by_phone                | character varying        | character varying(15)    | NULL     | -
 paid_by_email                | character varying        | character varying(100)   | NULL     | -
 payer_address                | text                     | text                     | NULL     | -
 payer_pan_number             | character varying        | character varying(20)    | NULL     | -
 payer_aadhar_number          | character varying        | character varying(12)    | NULL     | -
 generated_by                 | uuid                     | uuid                     | NULL     | -
 generated_at                 | timestamp with time zone | timestamp with time zone | NULL     | now()
 counter_number               | character varying        | character varying(20)    | NULL     | -
 cashier_name                 | character varying        | character varying(100)   | NULL     | -
 receipt_template_id          | character varying        | character varying(50)    | NULL     | -
 receipt_format               | character varying        | character varying(20)    | NULL     | 'A4'::character varying
 receipt_pdf_url              | text                     | text                     | NULL     | -
 receipt_pdf_generated        | boolean                  | boolean                  | NULL     | false
 receipt_pdf_size_kb          | integer                  | integer                  | NULL     | -
 qr_code_data                 | text                     | text                     | NULL     | -
 qr_code_url                  | text                     | text                     | NULL     | -
 digital_signature_url        | text                     | text                     | NULL     | -
 digital_signature_verified   | boolean                  | boolean                  | NULL     | false
 email_sent                   | boolean                  | boolean                  | NULL     | false
 email_sent_to                | character varying        | character varying(200)   | NULL     | -
 email_sent_at                | timestamp with time zone | timestamp with time zone | NULL     | -
 sms_sent                     | boolean                  | boolean                  | NULL     | false
 sms_sent_to                  | character varying        | character varying(15)    | NULL     | -
 sms_sent_at                  | timestamp with time zone | timestamp with time zone | NULL     | -
 whatsapp_sent                | boolean                  | boolean                  | NULL     | false
 whatsapp_sent_at             | timestamp with time zone | timestamp with time zone | NULL     | -
 printed                      | boolean                  | boolean                  | NULL     | false
 print_count                  | integer                  | integer                  | NULL     | 0
 last_printed_at              | timestamp with time zone | timestamp with time zone | NULL     | -
 printed_by                   | uuid                     | uuid                     | NULL     | -
 is_duplicate                 | boolean                  | boolean                  | NULL     | false
 duplicate_reason             | text                     | text                     | NULL     | -
 original_receipt_id          | uuid                     | uuid                     | NULL     | -
 duplicate_issued_date        | date                     | date                     | NULL     | -
 duplicate_fee_charged        | numeric                  | numeric                  | NULL     | 0
 is_cancelled                 | boolean                  | boolean                  | NULL     | false
 cancelled_date               | date                     | date                     | NULL     | -
 cancelled_by                 | uuid                     | uuid                     | NULL     | -
 cancellation_reason          | text                     | text                     | NULL     | -
 cancellation_approval_number | character varying        | character varying(50)    | NULL     | -
 is_revised                   | boolean                  | boolean                  | NULL     | false
 revised_reason               | text                     | text                     | NULL     | -
 original_amount              | numeric                  | numeric                  | NULL     | -
 revised_amount               | numeric                  | numeric                  | NULL     | -
 superseded_by_receipt_id     | uuid                     | uuid                     | NULL     | -
 verified_by                  | uuid                     | uuid                     | NULL     | -
 verified_at                  | timestamp with time zone | timestamp with time zone | NULL     | -
 approved_by                  | uuid                     | uuid                     | NULL     | -
 approved_at                  | timestamp with time zone | timestamp with time zone | NULL     | -
 accounting_entry_created     | boolean                  | boolean                  | NULL     | false
 accounting_entry_id          | character varying        | character varying(100)   | NULL     | -
 journal_entry_number         | character varying        | character varying(50)    | NULL     | -
 posted_to_ledger             | boolean                  | boolean                  | NULL     | false
 ledger_posting_date          | date                     | date                     | NULL     | -
 bank_reconciled              | boolean                  | boolean                  | NULL     | false
 bank_reconciliation_date     | date                     | date                     | NULL     | -
 bank_statement_entry_id      | character varying        | character varying(100)   | NULL     | -
 tax_invoice_number           | character varying        | character varying(50)    | NULL     | -
 tax_invoice_date             | date                     | date                     | NULL     | -
 gst_compliance_verified      | boolean                  | boolean                  | NULL     | false
 gst_return_period            | character varying        | character varying(20)    | NULL     | -
 audit_trail                  | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 remarks                      | text                     | text                     | NULL     | -
 internal_notes               | text                     | text                     | NULL     | -
 receipt_status               | character varying        | character varying(30)    | NULL     | 'VALID'::character varying
 is_active                    | boolean                  | boolean                  | NULL     | true
 metadata                     | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 created_at                   | timestamp with time zone | timestamp with time zone | NULL     | now()
 updated_at                   | timestamp with time zone | timestamp with time zone | NULL     | now()
(141 rows)


### fee_structures

                  Column                   |           Type           |        Full Type         | Nullable |                       Default                        
-------------------------------------------+--------------------------+--------------------------+----------+------------------------------------------------------
 id                                        | uuid                     | uuid                     | NOT NULL | gen_random_uuid()
 school_id                                 | uuid                     | uuid                     | NOT NULL | -
 academic_year_id                          | uuid                     | uuid                     | NOT NULL | -
 structure_code                            | character varying        | character varying(20)    | NOT NULL | -
 structure_name                            | character varying        | character varying(200)   | NOT NULL | -
 short_name                                | character varying        | character varying(50)    | NULL     | -
 description                               | text                     | text                     | NULL     | -
 applicable_to                             | character varying        | character varying(30)    | NULL     | 'CLASS'::character varying
 class_id                                  | uuid                     | uuid                     | NULL     | -
 section_id                                | uuid                     | uuid                     | NULL     | -
 applicable_classes                        | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 applicable_sections                       | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 student_category                          | character varying        | character varying(50)    | NULL     | -
 applicable_categories                     | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 fee_type                                  | character varying        | character varying(50)    | NOT NULL | 'ACADEMIC'::character varying
 fee_category                              | character varying        | character varying(30)    | NULL     | 'MANDATORY'::character varying
 is_tuition_fee                            | boolean                  | boolean                  | NULL     | false
 is_refundable                             | boolean                  | boolean                  | NULL     | false
 is_one_time                               | boolean                  | boolean                  | NULL     | false
 is_recurring                              | boolean                  | boolean                  | NULL     | true
 base_amount                               | numeric                  | numeric                  | NOT NULL | 0
 tuition_fee_component                     | numeric                  | numeric                  | NULL     | 0
 development_fee_component                 | numeric                  | numeric                  | NULL     | 0
 sports_fee_component                      | numeric                  | numeric                  | NULL     | 0
 library_fee_component                     | numeric                  | numeric                  | NULL     | 0
 computer_lab_fee_component                | numeric                  | numeric                  | NULL     | 0
 science_lab_fee_component                 | numeric                  | numeric                  | NULL     | 0
 activity_fee_component                    | numeric                  | numeric                  | NULL     | 0
 maintenance_fee_component                 | numeric                  | numeric                  | NULL     | 0
 examination_fee_component                 | numeric                  | numeric                  | NULL     | 0
 other_fee_component                       | numeric                  | numeric                  | NULL     | 0
 uniform_fee                               | numeric                  | numeric                  | NULL     | 0
 books_fee                                 | numeric                  | numeric                  | NULL     | 0
 stationery_fee                            | numeric                  | numeric                  | NULL     | 0
 id_card_fee                               | numeric                  | numeric                  | NULL     | 0
 diary_fee                                 | numeric                  | numeric                  | NULL     | 0
 is_taxable                                | boolean                  | boolean                  | NULL     | false
 tax_type                                  | character varying        | character varying(20)    | NULL     | -
 tax_percentage                            | numeric                  | numeric                  | NULL     | 0
 tax_amount                                | numeric                  | numeric                  | NULL     | 0
 gst_applicable                            | boolean                  | boolean                  | NULL     | false
 gst_percentage                            | numeric                  | numeric                  | NULL     | 0
 gst_amount                                | numeric                  | numeric                  | NULL     | 0
 cgst_percentage                           | numeric                  | numeric                  | NULL     | 0
 sgst_percentage                           | numeric                  | numeric                  | NULL     | 0
 igst_percentage                           | numeric                  | numeric                  | NULL     | 0
 hsn_code                                  | character varying        | character varying(20)    | NULL     | -
 sac_code                                  | character varying        | character varying(20)    | NULL     | -
 total_amount                              | numeric                  | numeric                  | NOT NULL | 0
 allow_installments                        | boolean                  | boolean                  | NULL     | true
 number_of_installments                    | integer                  | integer                  | NULL     | 1
 installment_structure                     | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 minimum_installment_amount                | numeric                  | numeric                  | NULL     | -
 payment_frequency                         | character varying        | character varying(30)    | NULL     | 'ANNUAL'::character varying
 due_dates                                 | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 first_installment_due_date                | date                     | date                     | NULL     | -
 second_installment_due_date               | date                     | date                     | NULL     | -
 third_installment_due_date                | date                     | date                     | NULL     | -
 fourth_installment_due_date               | date                     | date                     | NULL     | -
 late_fee_applicable                       | boolean                  | boolean                  | NULL     | true
 late_fee_grace_period_days                | integer                  | integer                  | NULL     | 0
 late_fee_type                             | character varying        | character varying(20)    | NULL     | 'FIXED'::character varying
 late_fee_amount                           | numeric                  | numeric                  | NULL     | 0
 late_fee_percentage                       | numeric                  | numeric                  | NULL     | 0
 late_fee_per_day                          | numeric                  | numeric                  | NULL     | 0
 late_fee_per_month                        | numeric                  | numeric                  | NULL     | 0
 maximum_late_fee                          | numeric                  | numeric                  | NULL     | -
 late_fee_calculation_method               | text                     | text                     | NULL     | -
 early_payment_discount_applicable         | boolean                  | boolean                  | NULL     | false
 early_payment_discount_days               | integer                  | integer                  | NULL     | 0
 early_payment_discount_type               | character varying        | character varying(20)    | NULL     | 'PERCENTAGE'::character varying
 early_payment_discount_amount             | numeric                  | numeric                  | NULL     | 0
 early_payment_discount_percentage         | numeric                  | numeric                  | NULL     | 0
 sibling_discount_applicable               | boolean                  | boolean                  | NULL     | false
 sibling_discount_type                     | character varying        | character varying(20)    | NULL     | 'PERCENTAGE'::character varying
 sibling_discount_percentage               | numeric                  | numeric                  | NULL     | 0
 sibling_discount_amount                   | numeric                  | numeric                  | NULL     | 0
 sibling_discount_applies_to               | character varying        | character varying(20)    | NULL     | 'YOUNGER'::character varying
 merit_discount_applicable                 | boolean                  | boolean                  | NULL     | false
 merit_discount_criteria                   | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 rte_applicable                            | boolean                  | boolean                  | NULL     | false
 rte_reimbursement_percentage              | numeric                  | numeric                  | NULL     | 0
 rte_maximum_amount                        | numeric                  | numeric                  | NULL     | -
 government_scheme_applicable              | boolean                  | boolean                  | NULL     | false
 government_schemes                        | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 minority_scholarship_applicable           | boolean                  | boolean                  | NULL     | false
 sc_st_scholarship_applicable              | boolean                  | boolean                  | NULL     | false
 obc_scholarship_applicable                | boolean                  | boolean                  | NULL     | false
 ews_concession_applicable                 | boolean                  | boolean                  | NULL     | false
 waiver_applicable                         | boolean                  | boolean                  | NULL     | false
 maximum_waiver_percentage                 | numeric                  | numeric                  | NULL     | 0
 waiver_approval_required                  | boolean                  | boolean                  | NULL     | true
 waiver_approval_authority                 | character varying        | character varying(50)    | NULL     | -
 accepted_payment_methods                  | jsonb                    | jsonb                    | NULL     | '["CASH", "CHEQUE", "ONLINE", "UPI", "CARD"]'::jsonb
 online_payment_enabled                    | boolean                  | boolean                  | NULL     | true
 cash_payment_enabled                      | boolean                  | boolean                  | NULL     | true
 cheque_payment_enabled                    | boolean                  | boolean                  | NULL     | true
 dd_payment_enabled                        | boolean                  | boolean                  | NULL     | true
 upi_payment_enabled                       | boolean                  | boolean                  | NULL     | true
 card_payment_enabled                      | boolean                  | boolean                  | NULL     | true
 gateway_charges_applicable                | boolean                  | boolean                  | NULL     | false
 gateway_charges_type                      | character varying        | character varying(20)    | NULL     | 'PERCENTAGE'::character varying
 gateway_charges_percentage                | numeric                  | numeric                  | NULL     | 0
 gateway_charges_amount                    | numeric                  | numeric                  | NULL     | 0
 gateway_charges_borne_by                  | character varying        | character varying(20)    | NULL     | 'SCHOOL'::character varying
 target_collection_percentage              | numeric                  | numeric                  | NULL     | 100.00
 minimum_collection_percentage             | numeric                  | numeric                  | NULL     | 80.00
 collection_start_date                     | date                     | date                     | NULL     | -
 collection_end_date                       | date                     | date                     | NULL     | -
 allow_advance_payment                     | boolean                  | boolean                  | NULL     | true
 advance_payment_discount_applicable       | boolean                  | boolean                  | NULL     | false
 advance_payment_discount_percentage       | numeric                  | numeric                  | NULL     | 0
 allow_partial_payment                     | boolean                  | boolean                  | NULL     | true
 minimum_partial_payment_percentage        | numeric                  | numeric                  | NULL     | 10.00
 minimum_partial_payment_amount            | numeric                  | numeric                  | NULL     | -
 allow_mid_year_admission_proration        | boolean                  | boolean                  | NULL     | true
 proration_calculation_method              | character varying        | character varying(50)    | NULL     | 'MONTHLY'::character varying
 refund_policy                             | text                     | text                     | NULL     | -
 refund_processing_days                    | integer                  | integer                  | NULL     | 30
 refund_deduction_percentage               | numeric                  | numeric                  | NULL     | 0
 is_fee_frozen                             | boolean                  | boolean                  | NULL     | false
 fee_frozen_at                             | timestamp with time zone | timestamp with time zone | NULL     | -
 fee_frozen_by                             | uuid                     | uuid                     | NULL     | -
 freeze_reason                             | text                     | text                     | NULL     | -
 allow_rollover_to_next_year               | boolean                  | boolean                  | NULL     | false
 send_fee_due_reminders                    | boolean                  | boolean                  | NULL     | true
 reminder_days_before_due                  | jsonb                    | jsonb                    | NULL     | '[7, 3, 1]'::jsonb
 send_payment_confirmation                 | boolean                  | boolean                  | NULL     | true
 send_receipt_via_email                    | boolean                  | boolean                  | NULL     | true
 send_receipt_via_sms                      | boolean                  | boolean                  | NULL     | false
 mark_as_defaulter_after_days              | integer                  | integer                  | NULL     | 30
 suspend_student_after_days                | integer                  | integer                  | NULL     | 90
 restrict_exam_participation               | boolean                  | boolean                  | NULL     | false
 withhold_report_card                      | boolean                  | boolean                  | NULL     | false
 fee_regulation_compliance_certificate_url | text                     | text                     | NULL     | -
 fee_committee_approval_required           | boolean                  | boolean                  | NULL     | false
 fee_committee_approval_number             | character varying        | character varying(50)    | NULL     | -
 fee_committee_approval_date               | date                     | date                     | NULL     | -
 parent_acknowledgement_required           | boolean                  | boolean                  | NULL     | false
 total_students_assigned                   | integer                  | integer                  | NULL     | 0
 total_amount_collectible                  | numeric                  | numeric                  | NULL     | 0
 total_amount_collected                    | numeric                  | numeric                  | NULL     | 0
 collection_percentage                     | numeric                  | numeric                  | NULL     | 0
 total_outstanding                         | numeric                  | numeric                  | NULL     | 0
 total_defaulters                          | integer                  | integer                  | NULL     | 0
 valid_from                                | date                     | date                     | NOT NULL | -
 valid_to                                  | date                     | date                     | NOT NULL | -
 status                                    | character varying        | character varying(30)    | NULL     | 'DRAFT'::character varying
 is_active                                 | boolean                  | boolean                  | NULL     | true
 is_deleted                                | boolean                  | boolean                  | NULL     | false
 created_by                                | uuid                     | uuid                     | NULL     | -
 approved_by                               | uuid                     | uuid                     | NULL     | -
 approved_at                               | timestamp with time zone | timestamp with time zone | NULL     | -
 notes                                     | text                     | text                     | NULL     | -
 metadata                                  | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 created_at                                | timestamp with time zone | timestamp with time zone | NULL     | now()
 updated_at                                | timestamp with time zone | timestamp with time zone | NULL     | now()
(157 rows)


### government_reimbursements

               Column                |           Type           |        Full Type         | Nullable |          Default           
-------------------------------------+--------------------------+--------------------------+----------+----------------------------
 id                                  | uuid                     | uuid                     | NOT NULL | gen_random_uuid()
 school_id                           | uuid                     | uuid                     | NOT NULL | -
 academic_year_id                    | uuid                     | uuid                     | NOT NULL | -
 reimbursement_code                  | character varying        | character varying(50)    | NOT NULL | -
 claim_number                        | character varying        | character varying(50)    | NULL     | -
 scheme_type                         | character varying        | character varying(50)    | NOT NULL | -
 scheme_name                         | character varying        | character varying(200)   | NOT NULL | -
 scheme_code                         | character varying        | character varying(50)    | NULL     | -
 scheme_year                         | character varying        | character varying(10)    | NULL     | -
 sponsoring_authority                | character varying        | character varying(100)   | NOT NULL | -
 department_name                     | character varying        | character varying(200)   | NULL     | -
 nodal_officer_name                  | character varying        | character varying(200)   | NULL     | -
 nodal_officer_contact               | character varying        | character varying(15)    | NULL     | -
 nodal_officer_email                 | character varying        | character varying(100)   | NULL     | -
 claim_start_date                    | date                     | date                     | NOT NULL | -
 claim_end_date                      | date                     | date                     | NOT NULL | -
 claim_submission_deadline           | date                     | date                     | NULL     | -
 term_covered                        | character varying        | character varying(50)    | NULL     | -
 months_covered                      | integer                  | integer                  | NULL     | -
 total_students_covered              | integer                  | integer                  | NULL     | 0
 eligible_students                   | integer                  | integer                  | NULL     | 0
 claimed_students                    | integer                  | integer                  | NULL     | 0
 student_list                        | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 sc_students                         | integer                  | integer                  | NULL     | 0
 st_students                         | integer                  | integer                  | NULL     | 0
 obc_students                        | integer                  | integer                  | NULL     | 0
 ews_students                        | integer                  | integer                  | NULL     | 0
 minority_students                   | integer                  | integer                  | NULL     | 0
 disabled_students                   | integer                  | integer                  | NULL     | 0
 girl_students                       | integer                  | integer                  | NULL     | 0
 class_wise_breakdown                | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 per_student_amount                  | numeric                  | numeric                  | NULL     | -
 total_claim_amount                  | numeric                  | numeric                  | NOT NULL | 0
 eligible_claim_amount               | numeric                  | numeric                  | NULL     | -
 approved_amount                     | numeric                  | numeric                  | NULL     | -
 rejected_amount                     | numeric                  | numeric                  | NULL     | 0
 rejection_details                   | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 adjusted_amount                     | numeric                  | numeric                  | NULL     | 0
 adjustment_reason                   | text                     | text                     | NULL     | -
 net_reimbursement_amount            | numeric                  | numeric                  | NULL     | -
 tuition_fee_claimed                 | numeric                  | numeric                  | NULL     | 0
 admission_fee_claimed               | numeric                  | numeric                  | NULL     | 0
 examination_fee_claimed             | numeric                  | numeric                  | NULL     | 0
 books_stationery_claimed            | numeric                  | numeric                  | NULL     | 0
 uniform_claimed                     | numeric                  | numeric                  | NULL     | 0
 transport_claimed                   | numeric                  | numeric                  | NULL     | 0
 hostel_claimed                      | numeric                  | numeric                  | NULL     | 0
 other_charges_claimed               | numeric                  | numeric                  | NULL     | 0
 previous_claim_id                   | uuid                     | uuid                     | NULL     | -
 is_revised_claim                    | boolean                  | boolean                  | NULL     | false
 revision_reason                     | text                     | text                     | NULL     | -
 cumulative_claimed_amount           | numeric                  | numeric                  | NULL     | 0
 claim_prepared_by                   | uuid                     | uuid                     | NULL     | -
 claim_preparation_date              | date                     | date                     | NULL     | -
 claim_submitted                     | boolean                  | boolean                  | NULL     | false
 claim_submitted_by                  | uuid                     | uuid                     | NULL     | -
 claim_submission_date               | date                     | date                     | NULL     | -
 claim_submission_mode               | character varying        | character varying(30)    | NULL     | -
 submission_portal_url               | text                     | text                     | NULL     | -
 submission_reference_number         | character varying        | character varying(100)   | NULL     | -
 submission_acknowledgment_number    | character varying        | character varying(100)   | NULL     | -
 submission_acknowledgment_url       | text                     | text                     | NULL     | -
 required_documents                  | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 documents_submitted                 | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 student_enrollment_certificates_url | text                     | text                     | NULL     | -
 attendance_certificates_url         | text                     | text                     | NULL     | -
 fee_receipts_bundle_url             | text                     | text                     | NULL     | -
 caste_certificates_url              | text                     | text                     | NULL     | -
 income_certificates_url             | text                     | text                     | NULL     | -
 disability_certificates_url         | text                     | text                     | NULL     | -
 bank_account_details_url            | text                     | text                     | NULL     | -
 cancelled_cheque_url                | text                     | text                     | NULL     | -
 school_affiliation_certificate_url  | text                     | text                     | NULL     | -
 documents_verified                  | boolean                  | boolean                  | NULL     | false
 verified_by_authority               | character varying        | character varying(200)   | NULL     | -
 verification_date                   | date                     | date                     | NULL     | -
 verification_remarks                | text                     | text                     | NULL     | -
 internal_verification_by            | uuid                     | uuid                     | NULL     | -
 internal_verification_date          | date                     | date                     | NULL     | -
 principal_approval                  | boolean                  | boolean                  | NULL     | false
 principal_approved_by               | uuid                     | uuid                     | NULL     | -
 principal_approval_date             | date                     | date                     | NULL     | -
 claim_status                        | character varying        | character varying(30)    | NULL     | 'DRAFT'::character varying
 query_raised                        | boolean                  | boolean                  | NULL     | false
 query_date                          | date                     | date                     | NULL     | -
 query_details                       | text                     | text                     | NULL     | -
 query_documents_url                 | text                     | text                     | NULL     | -
 clarification_submitted             | boolean                  | boolean                  | NULL     | false
 clarification_date                  | date                     | date                     | NULL     | -
 clarification_details               | text                     | text                     | NULL     | -
 inspection_required                 | boolean                  | boolean                  | NULL     | false
 inspection_date                     | date                     | date                     | NULL     | -
 inspection_officer_name             | character varying        | character varying(200)   | NULL     | -
 inspection_report_url               | text                     | text                     | NULL     | -
 approved_by_authority               | character varying        | character varying(200)   | NULL     | -
 approval_date                       | date                     | date                     | NULL     | -
 approval_order_number               | character varying        | character varying(100)   | NULL     | -
 approval_order_url                  | text                     | text                     | NULL     | -
 rejection_reason                    | text                     | text                     | NULL     | -
 rejection_date                      | date                     | date                     | NULL     | -
 payment_initiated                   | boolean                  | boolean                  | NULL     | false
 payment_initiation_date             | date                     | date                     | NULL     | -
 payment_reference_number            | character varying        | character varying(100)   | NULL     | -
 expected_payment_date               | date                     | date                     | NULL     | -
 payment_received                    | boolean                  | boolean                  | NULL     | false
 payment_received_date               | date                     | date                     | NULL     | -
 payment_mode                        | character varying        | character varying(30)    | NULL     | -
 payment_transaction_id              | character varying        | character varying(100)   | NULL     | -
 payment_utr_number                  | character varying        | character varying(100)   | NULL     | -
 cheque_number                       | character varying        | character varying(50)    | NULL     | -
 cheque_date                         | date                     | date                     | NULL     | -
 cheque_bank                         | character varying        | character varying(200)   | NULL     | -
 amount_received                     | numeric                  | numeric                  | NULL     | -
 bank_account_credited               | character varying        | character varying(50)    | NULL     | -
 bank_credit_date                    | date                     | date                     | NULL     | -
 bank_reconciled                     | boolean                  | boolean                  | NULL     | false
 bank_reconciliation_date            | date                     | date                     | NULL     | -
 bank_statement_reference            | character varying        | character varying(100)   | NULL     | -
 tds_deducted                        | boolean                  | boolean                  | NULL     | false
 tds_percentage                      | numeric                  | numeric                  | NULL     | -
 tds_amount                          | numeric                  | numeric                  | NULL     | -
 accounting_entry_created            | boolean                  | boolean                  | NULL     | false
 accounting_entry_id                 | character varying        | character varying(100)   | NULL     | -
 journal_entry_number                | character varying        | character varying(50)    | NULL     | -
 posted_to_ledger                    | boolean                  | boolean                  | NULL     | false
 ledger_posting_date                 | date                     | date                     | NULL     | -
 income_recognized                   | boolean                  | boolean                  | NULL     | false
 income_recognition_date             | date                     | date                     | NULL     | -
 student_accounts_updated            | boolean                  | boolean                  | NULL     | false
 accounts_update_date                | date                     | date                     | NULL     | -
 fee_adjustments_made                | boolean                  | boolean                  | NULL     | false
 adjustment_entries                  | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 statutory_returns_filed             | boolean                  | boolean                  | NULL     | false
 return_filing_date                  | date                     | date                     | NULL     | -
 utilization_certificate_required    | boolean                  | boolean                  | NULL     | false
 utilization_certificate_submitted   | boolean                  | boolean                  | NULL     | false
 utilization_certificate_url         | text                     | text                     | NULL     | -
 utilization_certificate_date        | date                     | date                     | NULL     | -
 audit_compliance                    | boolean                  | boolean                  | NULL     | false
 auditor_verified                    | boolean                  | boolean                  | NULL     | false
 audit_report_url                    | text                     | text                     | NULL     | -
 follow_up_required                  | boolean                  | boolean                  | NULL     | false
 follow_up_count                     | integer                  | integer                  | NULL     | 0
 last_follow_up_date                 | date                     | date                     | NULL     | -
 next_follow_up_date                 | date                     | date                     | NULL     | -
 correspondence_log                  | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 remarks                             | text                     | text                     | NULL     | -
 internal_notes                      | text                     | text                     | NULL     | -
 is_active                           | boolean                  | boolean                  | NULL     | true
 is_closed                           | boolean                  | boolean                  | NULL     | false
 closed_date                         | date                     | date                     | NULL     | -
 metadata                            | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 created_at                          | timestamp with time zone | timestamp with time zone | NULL     | now()
 updated_at                          | timestamp with time zone | timestamp with time zone | NULL     | now()
 created_by                          | uuid                     | uuid                     | NULL     | -
(155 rows)


### health_analytics

                  Column                   |           Type           |        Full Type         | Nullable |             Default              
-------------------------------------------+--------------------------+--------------------------+----------+----------------------------------
 id                                        | uuid                     | uuid                     | NOT NULL | uuid_generate_v4()
 school_id                                 | uuid                     | uuid                     | NOT NULL | -
 academic_year_id                          | uuid                     | uuid                     | NULL     | -
 analytics_code                            | character varying        | character varying(50)    | NOT NULL | -
 report_id                                 | character varying        | character varying(50)    | NOT NULL | -
 report_type                               | character varying        | character varying(30)    | NULL     | 'MONTHLY'::character varying
 report_date                               | date                     | date                     | NULL     | CURRENT_DATE
 period_start_date                         | date                     | date                     | NOT NULL | -
 period_end_date                           | date                     | date                     | NOT NULL | -
 period_days                               | integer                  | integer                  | NULL     | -
 analytics_scope                           | character varying        | character varying(30)    | NULL     | 'SCHOOL_WIDE'::character varying
 class_id                                  | uuid                     | uuid                     | NULL     | -
 section_id                                | uuid                     | uuid                     | NULL     | -
 total_students_enrolled                   | integer                  | integer                  | NOT NULL | -
 total_students_active                     | integer                  | integer                  | NULL     | -
 male_students                             | integer                  | integer                  | NULL     | -
 female_students                           | integer                  | integer                  | NULL     | -
 age_group_breakdown                       | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 total_students_screened                   | integer                  | integer                  | NULL     | 0
 screening_coverage_percentage             | numeric                  | numeric                  | NULL     | -
 vision_screenings_done                    | integer                  | integer                  | NULL     | 0
 dental_screenings_done                    | integer                  | integer                  | NULL     | 0
 hearing_screenings_done                   | integer                  | integer                  | NULL     | 0
 health_issues_detected                    | integer                  | integer                  | NULL     | 0
 health_issues_percentage                  | numeric                  | numeric                  | NULL     | -
 vision_problems_detected                  | integer                  | integer                  | NULL     | 0
 dental_problems_detected                  | integer                  | integer                  | NULL     | 0
 hearing_problems_detected                 | integer                  | integer                  | NULL     | 0
 chronic_conditions_identified             | integer                  | integer                  | NULL     | 0
 underweight_students                      | integer                  | integer                  | NULL     | 0
 normal_weight_students                    | integer                  | integer                  | NULL     | 0
 overweight_students                       | integer                  | integer                  | NULL     | 0
 obese_students                            | integer                  | integer                  | NULL     | 0
 average_bmi                               | numeric                  | numeric                  | NULL     | -
 total_infirmary_visits                    | integer                  | integer                  | NULL     | 0
 average_visits_per_day                    | numeric                  | numeric                  | NULL     | -
 emergency_visits                          | integer                  | integer                  | NULL     | 0
 routine_visits                            | integer                  | integer                  | NULL     | 0
 common_ailments                           | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 top_5_complaints                          | ARRAY                    | ARRAY                    | NULL     | -
 fever_cases                               | integer                  | integer                  | NULL     | 0
 headache_cases                            | integer                  | integer                  | NULL     | 0
 stomach_ache_cases                        | integer                  | integer                  | NULL     | 0
 injury_cases                              | integer                  | integer                  | NULL     | 0
 total_incidents                           | integer                  | integer                  | NULL     | 0
 minor_incidents                           | integer                  | integer                  | NULL     | 0
 major_incidents                           | integer                  | integer                  | NULL     | 0
 critical_incidents                        | integer                  | integer                  | NULL     | 0
 accidents_count                           | integer                  | integer                  | NULL     | 0
 sports_injuries_count                     | integer                  | integer                  | NULL     | 0
 hospitalizations_required                 | integer                  | integer                  | NULL     | 0
 total_medications_dispensed               | integer                  | integer                  | NULL     | 0
 common_medications                        | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 prescriptions_issued                      | integer                  | integer                  | NULL     | 0
 total_immunizations_given                 | integer                  | integer                  | NULL     | 0
 immunization_compliance_percentage        | numeric                  | numeric                  | NULL     | -
 pending_vaccinations                      | integer                  | integer                  | NULL     | 0
 overdue_vaccinations                      | integer                  | integer                  | NULL     | 0
 referrals_made                            | integer                  | integer                  | NULL     | 0
 ophthalmologist_referrals                 | integer                  | integer                  | NULL     | 0
 dentist_referrals                         | integer                  | integer                  | NULL     | 0
 physician_referrals                       | integer                  | integer                  | NULL     | 0
 specialist_referrals                      | integer                  | integer                  | NULL     | 0
 trend_comparison                          | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 high_risk_students                        | integer                  | integer                  | NULL     | 0
 medium_risk_students                      | integer                  | integer                  | NULL     | 0
 low_risk_students                         | integer                  | integer                  | NULL     | 0
 students_requiring_monitoring             | integer                  | integer                  | NULL     | 0
 health_checkup_compliance_percentage      | numeric                  | numeric                  | NULL     | -
 medical_certificate_compliance_percentage | numeric                  | numeric                  | NULL     | -
 recommendations                           | ARRAY                    | ARRAY                    | NULL     | -
 action_items                              | ARRAY                    | ARRAY                    | NULL     | -
 concerns_identified                       | ARRAY                    | ARRAY                    | NULL     | -
 total_medical_expenses                    | numeric                  | numeric                  | NULL     | -
 average_cost_per_student                  | numeric                  | numeric                  | NULL     | -
 medication_costs                          | numeric                  | numeric                  | NULL     | -
 referral_costs                            | numeric                  | numeric                  | NULL     | -
 generated_by                              | character varying        | character varying(200)   | NULL     | -
 generated_at                              | timestamp with time zone | timestamp with time zone | NULL     | now()
 approved_by                               | uuid                     | uuid                     | NULL     | -
 approved_date                             | date                     | date                     | NULL     | -
 detailed_report_url                       | text                     | text                     | NULL     | -
 summary_report_url                        | text                     | text                     | NULL     | -
 charts_images                             | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 metadata                                  | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 notes                                     | text                     | text                     | NULL     | -
 created_by                                | uuid                     | uuid                     | NULL     | -
 created_at                                | timestamp with time zone | timestamp with time zone | NULL     | now()
(88 rows)


### health_configuration

             Column              |           Type           |        Full Type         | Nullable |              Default               
---------------------------------+--------------------------+--------------------------+----------+------------------------------------
 id                              | uuid                     | uuid                     | NOT NULL | uuid_generate_v4()
 school_id                       | uuid                     | uuid                     | NOT NULL | -
 config_code                     | character varying        | character varying(50)    | NOT NULL | -
 config_name                     | character varying        | character varying(200)   | NOT NULL | -
 has_infirmary                   | boolean                  | boolean                  | NULL     | true
 infirmary_location              | character varying        | character varying(200)   | NULL     | -
 infirmary_capacity              | integer                  | integer                  | NULL     | -
 has_ambulance                   | boolean                  | boolean                  | NULL     | false
 ambulance_number                | character varying        | character varying(20)    | NULL     | -
 ambulance_driver_name           | character varying        | character varying(100)   | NULL     | -
 ambulance_driver_phone          | character varying        | character varying(15)    | NULL     | -
 has_full_time_doctor            | boolean                  | boolean                  | NULL     | false
 doctor_name                     | character varying        | character varying(200)   | NULL     | -
 doctor_phone                    | character varying        | character varying(15)    | NULL     | -
 doctor_email                    | character varying        | character varying(100)   | NULL     | -
 doctor_qualification            | character varying        | character varying(100)   | NULL     | -
 doctor_registration_number      | character varying        | character varying(50)    | NULL     | -
 has_nurse                       | boolean                  | boolean                  | NULL     | true
 nurse_name                      | character varying        | character varying(200)   | NULL     | -
 nurse_phone                     | character varying        | character varying(15)    | NULL     | -
 nurse_qualification             | character varying        | character varying(100)   | NULL     | -
 medical_staff_count             | integer                  | integer                  | NULL     | 0
 infirmary_open_time             | time without time zone   | time without time zone   | NULL     | '08:00:00'::time without time zone
 infirmary_close_time            | time without time zone   | time without time zone   | NULL     | '17:00:00'::time without time zone
 emergency_available_24x7        | boolean                  | boolean                  | NULL     | false
 emergency_contact_1_name        | character varying        | character varying(100)   | NULL     | -
 emergency_contact_1_phone       | character varying        | character varying(15)    | NULL     | -
 emergency_contact_1_type        | character varying        | character varying(50)    | NULL     | -
 emergency_contact_2_name        | character varying        | character varying(100)   | NULL     | -
 emergency_contact_2_phone       | character varying        | character varying(15)    | NULL     | -
 nearest_hospital_name           | character varying        | character varying(200)   | NOT NULL | -
 nearest_hospital_address        | text                     | text                     | NULL     | -
 nearest_hospital_phone          | character varying        | character varying(15)    | NULL     | -
 nearest_hospital_distance_km    | numeric                  | numeric                  | NULL     | -
 nearest_clinic_name             | character varying        | character varying(200)   | NULL     | -
 nearest_clinic_phone            | character varying        | character varying(15)    | NULL     | -
 tie_up_hospital_name            | character varying        | character varying(200)   | NULL     | -
 tie_up_hospital_phone           | character varying        | character varying(15)    | NULL     | -
 has_ambulance_agreement         | boolean                  | boolean                  | NULL     | false
 has_first_aid_kit               | boolean                  | boolean                  | NULL     | true
 first_aid_kits_count            | integer                  | integer                  | NULL     | -
 has_oxygen_cylinder             | boolean                  | boolean                  | NULL     | false
 has_stretcher                   | boolean                  | boolean                  | NULL     | true
 has_wheelchair                  | boolean                  | boolean                  | NULL     | true
 has_defibrillator               | boolean                  | boolean                  | NULL     | false
 has_nebulizer                   | boolean                  | boolean                  | NULL     | false
 equipment_list                  | ARRAY                    | ARRAY                    | NULL     | -
 maintains_medicine_stock        | boolean                  | boolean                  | NULL     | true
 medicine_dispensary_available   | boolean                  | boolean                  | NULL     | true
 common_medicines_list           | ARRAY                    | ARRAY                    | NULL     | -
 annual_health_checkup_mandatory | boolean                  | boolean                  | NULL     | true
 health_checkup_frequency_months | integer                  | integer                  | NULL     | 12
 vision_screening                | boolean                  | boolean                  | NULL     | true
 dental_screening                | boolean                  | boolean                  | NULL     | true
 hearing_screening               | boolean                  | boolean                  | NULL     | false
 group_health_insurance          | boolean                  | boolean                  | NULL     | false
 insurance_provider              | character varying        | character varying(200)   | NULL     | -
 insurance_policy_number         | character varying        | character varying(50)    | NULL     | -
 insurance_coverage_amount       | numeric                  | numeric                  | NULL     | -
 medical_waste_management        | boolean                  | boolean                  | NULL     | true
 waste_disposal_vendor           | character varying        | character varying(200)   | NULL     | -
 status                          | character varying        | character varying(30)    | NULL     | 'ACTIVE'::character varying
 is_active                       | boolean                  | boolean                  | NULL     | true
 metadata                        | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 notes                           | text                     | text                     | NULL     | -
 created_by                      | uuid                     | uuid                     | NULL     | -
 created_at                      | timestamp with time zone | timestamp with time zone | NULL     | now()
 updated_at                      | timestamp with time zone | timestamp with time zone | NULL     | now()
(68 rows)


### homework_analytics

                Column                 |           Type           |        Full Type         | Nullable |             Default             
---------------------------------------+--------------------------+--------------------------+----------+---------------------------------
 id                                    | uuid                     | uuid                     | NOT NULL | uuid_generate_v4()
 school_id                             | uuid                     | uuid                     | NOT NULL | -
 academic_year_id                      | uuid                     | uuid                     | NOT NULL | -
 analytics_code                        | character varying        | character varying(50)    | NOT NULL | -
 analytics_type                        | character varying        | character varying(30)    | NULL     | 'ASSIGNMENT'::character varying
 homework_assignment_id                | uuid                     | uuid                     | NULL     | -
 student_id                            | uuid                     | uuid                     | NULL     | -
 class_id                              | uuid                     | uuid                     | NULL     | -
 section_id                            | uuid                     | uuid                     | NULL     | -
 subject_id                            | uuid                     | uuid                     | NULL     | -
 teacher_id                            | uuid                     | uuid                     | NULL     | -
 analysis_date                         | date                     | date                     | NULL     | CURRENT_DATE
 analysis_period                       | character varying        | character varying(30)    | NULL     | -
 period_start_date                     | date                     | date                     | NULL     | -
 period_end_date                       | date                     | date                     | NULL     | -
 term_name                             | character varying        | character varying(50)    | NULL     | -
 month_year                            | character varying        | character varying(20)    | NULL     | -
 total_assignments_given               | integer                  | integer                  | NULL     | 0
 total_assignments_completed           | integer                  | integer                  | NULL     | 0
 total_assignments_pending             | integer                  | integer                  | NULL     | 0
 assignment_completion_rate            | numeric                  | numeric                  | NULL     | -
 total_students_assigned               | integer                  | integer                  | NULL     | 0
 total_submissions_received            | integer                  | integer                  | NULL     | 0
 total_submissions_pending             | integer                  | integer                  | NULL     | 0
 submission_rate                       | numeric                  | numeric                  | NULL     | -
 on_time_submission_rate               | numeric                  | numeric                  | NULL     | -
 late_submission_rate                  | numeric                  | numeric                  | NULL     | -
 average_days_to_submit                | numeric                  | numeric                  | NULL     | -
 total_evaluated                       | integer                  | integer                  | NULL     | 0
 total_pending_evaluation              | integer                  | integer                  | NULL     | 0
 evaluation_completion_rate            | numeric                  | numeric                  | NULL     | -
 average_days_to_evaluate              | numeric                  | numeric                  | NULL     | -
 average_marks_obtained                | numeric                  | numeric                  | NULL     | -
 average_percentage                    | numeric                  | numeric                  | NULL     | -
 highest_marks                         | numeric                  | numeric                  | NULL     | -
 lowest_marks                          | numeric                  | numeric                  | NULL     | -
 median_marks                          | numeric                  | numeric                  | NULL     | -
 standard_deviation                    | numeric                  | numeric                  | NULL     | -
 grade_a_plus_count                    | integer                  | integer                  | NULL     | 0
 grade_a_count                         | integer                  | integer                  | NULL     | 0
 grade_b_plus_count                    | integer                  | integer                  | NULL     | 0
 grade_b_count                         | integer                  | integer                  | NULL     | 0
 grade_c_count                         | integer                  | integer                  | NULL     | 0
 grade_d_count                         | integer                  | integer                  | NULL     | 0
 grade_f_count                         | integer                  | integer                  | NULL     | 0
 grade_distribution_percentage         | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 pass_count                            | integer                  | integer                  | NULL     | 0
 fail_count                            | integer                  | integer                  | NULL     | 0
 pass_percentage                       | numeric                  | numeric                  | NULL     | -
 outstanding_count                     | integer                  | integer                  | NULL     | 0
 excellent_count                       | integer                  | integer                  | NULL     | 0
 good_count                            | integer                  | integer                  | NULL     | 0
 satisfactory_count                    | integer                  | integer                  | NULL     | 0
 needs_improvement_count               | integer                  | integer                  | NULL     | 0
 class_rank                            | integer                  | integer                  | NULL     | -
 section_rank                          | integer                  | integer                  | NULL     | -
 percentile_score                      | numeric                  | numeric                  | NULL     | -
 performance_trend                     | character varying        | character varying(20)    | NULL     | -
 trend_analysis                        | text                     | text                     | NULL     | -
 average_effort_rating                 | numeric                  | numeric                  | NULL     | -
 average_time_spent_hours              | numeric                  | numeric                  | NULL     | -
 engagement_level                      | character varying        | character varying(20)    | NULL     | -
 participation_rate                    | numeric                  | numeric                  | NULL     | -
 average_completeness                  | numeric                  | numeric                  | NULL     | -
 average_originality_score             | numeric                  | numeric                  | NULL     | -
 plagiarism_incidents                  | integer                  | integer                  | NULL     | 0
 plagiarism_rate                       | numeric                  | numeric                  | NULL     | -
 subject_wise_performance              | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 strongest_subject                     | character varying        | character varying(100)   | NULL     | -
 weakest_subject                       | character varying        | character varying(100)   | NULL     | -
 topic_performance                     | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 topics_mastered                       | ARRAY                    | ARRAY                    | NULL     | -
 topics_needing_improvement            | ARRAY                    | ARRAY                    | NULL     | -
 consistency_score                     | numeric                  | numeric                  | NULL     | -
 variance_coefficient                  | numeric                  | numeric                  | NULL     | -
 most_consistent_in                    | character varying        | character varying(100)   | NULL     | -
 most_variable_in                      | character varying        | character varying(100)   | NULL     | -
 punctuality_score                     | numeric                  | numeric                  | NULL     | -
 average_late_days                     | numeric                  | numeric                  | NULL     | -
 never_late_count                      | integer                  | integer                  | NULL     | 0
 frequently_late_count                 | integer                  | integer                  | NULL     | 0
 parent_engagement_score               | numeric                  | numeric                  | NULL     | -
 parent_view_rate                      | numeric                  | numeric                  | NULL     | -
 parent_acknowledgment_rate            | numeric                  | numeric                  | NULL     | -
 average_evaluation_time_days          | numeric                  | numeric                  | NULL     | -
 feedback_quality_score                | numeric                  | numeric                  | NULL     | -
 detailed_feedback_provided_percentage | numeric                  | numeric                  | NULL     | -
 improvement_percentage                | numeric                  | numeric                  | NULL     | -
 improvement_trend                     | character varying        | character varying(20)    | NULL     | -
 areas_of_improvement                  | ARRAY                    | ARRAY                    | NULL     | -
 areas_of_decline                      | ARRAY                    | ARRAY                    | NULL     | -
 predicted_final_percentage            | numeric                  | numeric                  | NULL     | -
 risk_level                            | character varying        | character varying(20)    | NULL     | -
 risk_factors                          | ARRAY                    | ARRAY                    | NULL     | -
 recommended_interventions             | ARRAY                    | ARRAY                    | NULL     | -
 suggested_actions                     | ARRAY                    | ARRAY                    | NULL     | -
 compared_to_class_average             | numeric                  | numeric                  | NULL     | -
 compared_to_school_average            | numeric                  | numeric                  | NULL     | -
 above_average_subjects                | ARRAY                    | ARRAY                    | NULL     | -
 below_average_subjects                | ARRAY                    | ARRAY                    | NULL     | -
 last_calculated_at                    | timestamp with time zone | timestamp with time zone | NULL     | now()
 calculation_method                    | character varying        | character varying(50)    | NULL     | -
 data_points_count                     | integer                  | integer                  | NULL     | -
 confidence_level                      | numeric                  | numeric                  | NULL     | -
 metadata                              | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 custom_metrics                        | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 notes                                 | text                     | text                     | NULL     | -
 created_by                            | uuid                     | uuid                     | NULL     | -
 created_at                            | timestamp with time zone | timestamp with time zone | NULL     | now()
 updated_at                            | timestamp with time zone | timestamp with time zone | NULL     | now()
(110 rows)


### homework_assignments

               Column               |           Type           |        Full Type         | Nullable |                          Default                           
------------------------------------+--------------------------+--------------------------+----------+------------------------------------------------------------
 id                                 | uuid                     | uuid                     | NOT NULL | uuid_generate_v4()
 school_id                          | uuid                     | uuid                     | NOT NULL | -
 academic_year_id                   | uuid                     | uuid                     | NOT NULL | -
 assignment_code                    | character varying        | character varying(50)    | NOT NULL | -
 assignment_title                   | character varying        | character varying(300)   | NOT NULL | -
 assignment_description             | text                     | text                     | NULL     | -
 assignment_type                    | character varying        | character varying(30)    | NOT NULL | 'HOMEWORK'::character varying
 assignment_category                | character varying        | character varying(30)    | NULL     | 'REGULAR'::character varying
 priority_level                     | character varying        | character varying(20)    | NULL     | 'MEDIUM'::character varying
 difficulty_level                   | character varying        | character varying(20)    | NULL     | 'MEDIUM'::character varying
 class_id                           | uuid                     | uuid                     | NOT NULL | -
 section_id                         | uuid                     | uuid                     | NULL     | -
 subject_id                         | uuid                     | uuid                     | NOT NULL | -
 class_name                         | character varying        | character varying(100)   | NULL     | -
 section_name                       | character varying        | character varying(50)    | NULL     | -
 subject_name                       | character varying        | character varying(100)   | NULL     | -
 assigned_by_teacher_id             | uuid                     | uuid                     | NOT NULL | -
 teacher_name                       | character varying        | character varying(200)   | NULL     | -
 co_teachers                        | ARRAY                    | ARRAY                    | NULL     | -
 chapter_id                         | uuid                     | uuid                     | NULL     | -
 chapter_name                       | character varying        | character varying(200)   | NULL     | -
 topic_name                         | character varying        | character varying(200)   | NULL     | -
 subtopic_name                      | character varying        | character varying(200)   | NULL     | -
 learning_outcomes                  | ARRAY                    | ARRAY                    | NULL     | -
 skills_targeted                    | ARRAY                    | ARRAY                    | NULL     | -
 syllabus_percentage                | numeric                  | numeric                  | NULL     | -
 curriculum_alignment               | text                     | text                     | NULL     | -
 textbook_references                | text                     | text                     | NULL     | -
 page_numbers                       | character varying        | character varying(100)   | NULL     | -
 applies_to_all_students            | boolean                  | boolean                  | NULL     | true
 target_student_ids                 | ARRAY                    | ARRAY                    | NULL     | -
 target_student_count               | integer                  | integer                  | NULL     | 0
 excluded_student_ids               | ARRAY                    | ARRAY                    | NULL     | -
 is_group_assignment                | boolean                  | boolean                  | NULL     | false
 group_size_min                     | integer                  | integer                  | NULL     | -
 group_size_max                     | integer                  | integer                  | NULL     | -
 allow_individual_submission        | boolean                  | boolean                  | NULL     | true
 assigned_date                      | date                     | date                     | NOT NULL | CURRENT_DATE
 assigned_time                      | time without time zone   | time without time zone   | NULL     | CURRENT_TIME
 due_date                           | date                     | date                     | NOT NULL | -
 due_time                           | time without time zone   | time without time zone   | NULL     | '23:59:59'::time without time zone
 days_to_complete                   | integer                  | integer                  | NULL     | -
 submission_start_date              | date                     | date                     | NULL     | -
 submission_end_date                | date                     | date                     | NULL     | -
 allow_late_submission              | boolean                  | boolean                  | NULL     | true
 late_submission_penalty_percentage | numeric                  | numeric                  | NULL     | 10.00
 late_submission_cutoff_date        | date                     | date                     | NULL     | -
 max_late_days                      | integer                  | integer                  | NULL     | 3
 estimated_time_minutes             | integer                  | integer                  | NULL     | -
 estimated_difficulty_hours         | numeric                  | numeric                  | NULL     | -
 instructions                       | text                     | text                     | NOT NULL | -
 detailed_requirements              | text                     | text                     | NULL     | -
 submission_format                  | character varying        | character varying(30)    | NULL     | 'PDF'::character varying
 expected_deliverables              | ARRAY                    | ARRAY                    | NULL     | -
 grading_rubric                     | text                     | text                     | NULL     | -
 marking_scheme                     | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 total_marks                        | numeric                  | numeric                  | NOT NULL | -
 passing_marks                      | numeric                  | numeric                  | NULL     | -
 weightage_percentage               | numeric                  | numeric                  | NULL     | 5.00
 is_graded                          | boolean                  | boolean                  | NULL     | true
 evaluation_type                    | character varying        | character varying(30)    | NULL     | 'MARKS'::character varying
 has_attachments                    | boolean                  | boolean                  | NULL     | false
 attachment_files                   | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 reference_links                    | ARRAY                    | ARRAY                    | NULL     | -
 video_links                        | ARRAY                    | ARRAY                    | NULL     | -
 max_attachment_size_mb             | integer                  | integer                  | NULL     | 10
 allowed_file_types                 | ARRAY                    | ARRAY                    | NULL     | ARRAY['pdf'::text, 'docx'::text, 'jpg'::text, 'png'::text]
 allow_multiple_submissions         | boolean                  | boolean                  | NULL     | false
 allow_resubmission                 | boolean                  | boolean                  | NULL     | true
 resubmission_allowed_until         | date                     | date                     | NULL     | -
 max_resubmission_count             | integer                  | integer                  | NULL     | 2
 require_parent_signature           | boolean                  | boolean                  | NULL     | false
 require_photo_evidence             | boolean                  | boolean                  | NULL     | false
 allow_collaboration                | boolean                  | boolean                  | NULL     | false
 collaboration_guidelines           | text                     | text                     | NULL     | -
 plagiarism_check_enabled           | boolean                  | boolean                  | NULL     | true
 similarity_threshold_percentage    | integer                  | integer                  | NULL     | 20
 submission_mode                    | character varying        | character varying(30)    | NULL     | 'BOTH'::character varying
 requires_physical_submission       | boolean                  | boolean                  | NULL     | false
 physical_submission_location       | character varying        | character varying(200)   | NULL     | -
 auto_remind_before_due_days        | integer                  | integer                  | NULL     | 1
 reminder_sent_count                | integer                  | integer                  | NULL     | 0
 last_reminder_sent_at              | timestamp with time zone | timestamp with time zone | NULL     | -
 send_notification_on_assignment    | boolean                  | boolean                  | NULL     | true
 send_notification_on_due           | boolean                  | boolean                  | NULL     | true
 status                             | character varying        | character varying(30)    | NULL     | 'DRAFT'::character varying
 is_published                       | boolean                  | boolean                  | NULL     | false
 published_at                       | timestamp with time zone | timestamp with time zone | NULL     | -
 published_by                       | uuid                     | uuid                     | NULL     | -
 is_visible_to_students             | boolean                  | boolean                  | NULL     | false
 is_visible_to_parents              | boolean                  | boolean                  | NULL     | true
 total_students_assigned            | integer                  | integer                  | NULL     | 0
 total_submissions_received         | integer                  | integer                  | NULL     | 0
 total_submissions_pending          | integer                  | integer                  | NULL     | 0
 total_submissions_late             | integer                  | integer                  | NULL     | 0
 total_submissions_evaluated        | integer                  | integer                  | NULL     | 0
 submission_percentage              | numeric                  | numeric                  | NULL     | 0.00
 average_submission_time_hours      | numeric                  | numeric                  | NULL     | -
 total_evaluated                    | integer                  | integer                  | NULL     | 0
 evaluation_pending                 | integer                  | integer                  | NULL     | 0
 average_marks_obtained             | numeric                  | numeric                  | NULL     | -
 highest_marks                      | numeric                  | numeric                  | NULL     | -
 lowest_marks                       | numeric                  | numeric                  | NULL     | -
 average_percentage                 | numeric                  | numeric                  | NULL     | -
 pass_count                         | integer                  | integer                  | NULL     | 0
 fail_count                         | integer                  | integer                  | NULL     | 0
 pass_percentage                    | numeric                  | numeric                  | NULL     | -
 grade_distribution                 | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 completion_rate                    | numeric                  | numeric                  | NULL     | -
 on_time_submission_rate            | numeric                  | numeric                  | NULL     | -
 class_performance_rating           | character varying        | character varying(20)    | NULL     | -
 parent_view_count                  | integer                  | integer                  | NULL     | 0
 parent_acknowledgment_count        | integer                  | integer                  | NULL     | 0
 student_feedback_collected         | boolean                  | boolean                  | NULL     | false
 average_difficulty_rating          | numeric                  | numeric                  | NULL     | -
 average_time_taken_hours           | numeric                  | numeric                  | NULL     | -
 student_feedback_summary           | text                     | text                     | NULL     | -
 is_recurring                       | boolean                  | boolean                  | NULL     | false
 recurrence_pattern                 | character varying        | character varying(30)    | NULL     | -
 recurrence_end_date                | date                     | date                     | NULL     | -
 parent_assignment_id               | uuid                     | uuid                     | NULL     | -
 linked_to_timetable_period         | uuid                     | uuid                     | NULL     | -
 linked_to_lesson_plan              | uuid                     | uuid                     | NULL     | -
 part_of_project_id                 | uuid                     | uuid                     | NULL     | -
 is_featured                        | boolean                  | boolean                  | NULL     | false
 is_mandatory                       | boolean                  | boolean                  | NULL     | true
 requires_approval                  | boolean                  | boolean                  | NULL     | false
 approved_by                        | uuid                     | uuid                     | NULL     | -
 approved_at                        | timestamp with time zone | timestamp with time zone | NULL     | -
 is_locked                          | boolean                  | boolean                  | NULL     | false
 locked_at                          | timestamp with time zone | timestamp with time zone | NULL     | -
 locked_by                          | uuid                     | uuid                     | NULL     | -
 metadata                           | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 custom_fields                      | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 tags                               | ARRAY                    | ARRAY                    | NULL     | -
 notes                              | text                     | text                     | NULL     | -
 internal_notes                     | text                     | text                     | NULL     | -
 created_by                         | uuid                     | uuid                     | NULL     | -
 created_at                         | timestamp with time zone | timestamp with time zone | NULL     | now()
 updated_at                         | timestamp with time zone | timestamp with time zone | NULL     | now()
(140 rows)


### homework_evaluations

             Column              |           Type           |        Full Type         | Nullable |              Default              
---------------------------------+--------------------------+--------------------------+----------+-----------------------------------
 id                              | uuid                     | uuid                     | NOT NULL | uuid_generate_v4()
 school_id                       | uuid                     | uuid                     | NOT NULL | -
 academic_year_id                | uuid                     | uuid                     | NOT NULL | -
 evaluation_code                 | character varying        | character varying(50)    | NOT NULL | -
 homework_assignment_id          | uuid                     | uuid                     | NOT NULL | -
 student_submission_id           | uuid                     | uuid                     | NOT NULL | -
 assignment_title                | character varying        | character varying(300)   | NULL     | -
 student_id                      | uuid                     | uuid                     | NOT NULL | -
 student_name                    | character varying        | character varying(200)   | NULL     | -
 class_id                        | uuid                     | uuid                     | NOT NULL | -
 section_id                      | uuid                     | uuid                     | NULL     | -
 evaluated_by_teacher_id         | uuid                     | uuid                     | NOT NULL | -
 teacher_name                    | character varying        | character varying(200)   | NULL     | -
 co_evaluator_id                 | uuid                     | uuid                     | NULL     | -
 co_evaluator_name               | character varying        | character varying(200)   | NULL     | -
 evaluation_date                 | date                     | date                     | NOT NULL | CURRENT_DATE
 evaluation_time                 | time without time zone   | time without time zone   | NULL     | CURRENT_TIME
 evaluation_timestamp            | timestamp with time zone | timestamp with time zone | NULL     | now()
 time_taken_to_evaluate_minutes  | integer                  | integer                  | NULL     | -
 days_to_evaluate                | integer                  | integer                  | NULL     | -
 total_marks_available           | numeric                  | numeric                  | NOT NULL | -
 marks_obtained                  | numeric                  | numeric                  | NOT NULL | -
 percentage                      | numeric                  | numeric                  | NULL     | -
 grade                           | character varying        | character varying(10)    | NULL     | -
 grade_point                     | numeric                  | numeric                  | NULL     | -
 rubric_scores                   | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 theory_marks                    | numeric                  | numeric                  | NULL     | -
 practical_marks                 | numeric                  | numeric                  | NULL     | -
 presentation_marks              | numeric                  | numeric                  | NULL     | -
 creativity_marks                | numeric                  | numeric                  | NULL     | -
 bonus_marks                     | numeric                  | numeric                  | NULL     | 0.00
 penalty_marks                   | numeric                  | numeric                  | NULL     | 0.00
 late_penalty_applied            | boolean                  | boolean                  | NULL     | false
 late_penalty_marks              | numeric                  | numeric                  | NULL     | -
 marks_before_penalty            | numeric                  | numeric                  | NULL     | -
 result_status                   | character varying        | character varying(20)    | NULL     | 'PASS'::character varying
 performance_level               | character varying        | character varying(20)    | NULL     | 'SATISFACTORY'::character varying
 understanding_level             | character varying        | character varying(20)    | NULL     | -
 concept_clarity_rating          | integer                  | integer                  | NULL     | -
 application_skills_rating       | integer                  | integer                  | NULL     | -
 presentation_quality_rating     | integer                  | integer                  | NULL     | -
 strengths                       | ARRAY                    | ARRAY                    | NULL     | -
 weaknesses                      | ARRAY                    | ARRAY                    | NULL     | -
 improvement_areas               | ARRAY                    | ARRAY                    | NULL     | -
 overall_feedback                | text                     | text                     | NOT NULL | -
 specific_comments               | text                     | text                     | NULL     | -
 question_wise_feedback          | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 positive_remarks                | text                     | text                     | NULL     | -
 constructive_criticism          | text                     | text                     | NULL     | -
 recommended_actions             | ARRAY                    | ARRAY                    | NULL     | -
 study_suggestions               | text                     | text                     | NULL     | -
 practice_recommendations        | text                     | text                     | NULL     | -
 additional_resources_suggested  | ARRAY                    | ARRAY                    | NULL     | -
 reference_material_links        | ARRAY                    | ARRAY                    | NULL     | -
 total_errors_found              | integer                  | integer                  | NULL     | 0
 error_categories                | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 common_mistakes                 | ARRAY                    | ARRAY                    | NULL     | -
 class_average_marks             | numeric                  | numeric                  | NULL     | -
 rank_in_class                   | integer                  | integer                  | NULL     | -
 percentile                      | numeric                  | numeric                  | NULL     | -
 above_class_average             | boolean                  | boolean                  | NULL     | -
 difference_from_average         | numeric                  | numeric                  | NULL     | -
 effort_rating                   | integer                  | integer                  | NULL     | -
 effort_remarks                  | text                     | text                     | NULL     | -
 time_management_assessment      | text                     | text                     | NULL     | -
 originality_score               | integer                  | integer                  | NULL     | -
 shows_creativity                | boolean                  | boolean                  | NULL     | false
 unique_approach                 | boolean                  | boolean                  | NULL     | false
 approach_description            | text                     | text                     | NULL     | -
 requires_rework                 | boolean                  | boolean                  | NULL     | false
 rework_areas                    | ARRAY                    | ARRAY                    | NULL     | -
 rework_deadline                 | date                     | date                     | NULL     | -
 requires_discussion             | boolean                  | boolean                  | NULL     | false
 discussion_scheduled_date       | date                     | date                     | NULL     | -
 discussion_notes                | text                     | text                     | NULL     | -
 requires_remedial_help          | boolean                  | boolean                  | NULL     | false
 remedial_topics                 | ARRAY                    | ARRAY                    | NULL     | -
 parent_conference_required      | boolean                  | boolean                  | NULL     | false
 parent_meeting_scheduled        | boolean                  | boolean                  | NULL     | false
 parent_meeting_date             | date                     | date                     | NULL     | -
 parent_notification_sent        | boolean                  | boolean                  | NULL     | false
 parent_notification_date        | date                     | date                     | NULL     | -
 is_exemplary_work               | boolean                  | boolean                  | NULL     | false
 recommended_for_display         | boolean                  | boolean                  | NULL     | false
 awarded_certificate             | boolean                  | boolean                  | NULL     | false
 special_recognition             | text                     | text                     | NULL     | -
 annotated_submission_url        | text                     | text                     | NULL     | -
 marked_copy_url                 | text                     | text                     | NULL     | -
 evaluation_attachments          | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 evaluation_status               | character varying        | character varying(30)    | NULL     | 'COMPLETED'::character varying
 is_finalized                    | boolean                  | boolean                  | NULL     | false
 finalized_at                    | timestamp with time zone | timestamp with time zone | NULL     | -
 requires_moderation             | boolean                  | boolean                  | NULL     | false
 moderated_by                    | uuid                     | uuid                     | NULL     | -
 moderated_at                    | timestamp with time zone | timestamp with time zone | NULL     | -
 moderation_notes                | text                     | text                     | NULL     | -
 marks_adjusted_after_moderation | boolean                  | boolean                  | NULL     | false
 original_marks                  | numeric                  | numeric                  | NULL     | -
 returned_to_student             | boolean                  | boolean                  | NULL     | false
 returned_date                   | date                     | date                     | NULL     | -
 student_viewed                  | boolean                  | boolean                  | NULL     | false
 student_view_date               | date                     | date                     | NULL     | -
 student_acknowledged            | boolean                  | boolean                  | NULL     | false
 student_feedback_on_evaluation  | text                     | text                     | NULL     | -
 appeal_filed                    | boolean                  | boolean                  | NULL     | false
 appeal_date                     | date                     | date                     | NULL     | -
 appeal_reason                   | text                     | text                     | NULL     | -
 appeal_status                   | character varying        | character varying(30)    | NULL     | -
 difficulty_match_rating         | integer                  | integer                  | NULL     | -
 time_taken_vs_estimated         | numeric                  | numeric                  | NULL     | -
 metadata                        | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 custom_fields                   | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 tags                            | ARRAY                    | ARRAY                    | NULL     | -
 notes                           | text                     | text                     | NULL     | -
 internal_notes                  | text                     | text                     | NULL     | -
 created_by                      | uuid                     | uuid                     | NULL     | -
 created_at                      | timestamp with time zone | timestamp with time zone | NULL     | now()
 updated_at                      | timestamp with time zone | timestamp with time zone | NULL     | now()
(118 rows)


### hostel_attendance

      Column       |           Type           |        Full Type         | Nullable |      Default       
-------------------+--------------------------+--------------------------+----------+--------------------
 id                | uuid                     | uuid                     | NOT NULL | uuid_generate_v4()
 school_id         | uuid                     | uuid                     | NOT NULL | -
 attendance_code   | character varying        | character varying(50)    | NOT NULL | -
 student_id        | uuid                     | uuid                     | NOT NULL | -
 attendance_date   | date                     | date                     | NOT NULL | CURRENT_DATE
 attendance_status | character varying        | character varying(30)    | NOT NULL | -
 metadata          | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 created_at        | timestamp with time zone | timestamp with time zone | NULL     | now()
(8 rows)


### hostel_buildings

               Column               |           Type           |        Full Type         | Nullable |              Default               
------------------------------------+--------------------------+--------------------------+----------+------------------------------------
 id                                 | uuid                     | uuid                     | NOT NULL | uuid_generate_v4()
 school_id                          | uuid                     | uuid                     | NOT NULL | -
 building_code                      | character varying        | character varying(50)    | NOT NULL | -
 building_name                      | character varying        | character varying(200)   | NOT NULL | -
 building_number                    | character varying        | character varying(20)    | NULL     | -
 building_type                      | character varying        | character varying(30)    | NULL     | 'RESIDENTIAL'::character varying
 hostel_type                        | character varying        | character varying(30)    | NOT NULL | -
 location_on_campus                 | character varying        | character varying(200)   | NULL     | -
 address_line1                      | character varying        | character varying(200)   | NULL     | -
 total_floors                       | integer                  | integer                  | NOT NULL | -
 building_area_sqft                 | numeric                  | numeric                  | NULL     | -
 total_rooms                        | integer                  | integer                  | NOT NULL | 0
 occupied_rooms                     | integer                  | integer                  | NULL     | 0
 vacant_rooms                       | integer                  | integer                  | NULL     | -
 total_bed_capacity                 | integer                  | integer                  | NOT NULL | 0
 occupied_beds                      | integer                  | integer                  | NULL     | 0
 available_beds                     | integer                  | integer                  | NULL     | -
 current_occupancy_percentage       | numeric                  | numeric                  | NULL     | -
 single_rooms_count                 | integer                  | integer                  | NULL     | 0
 double_rooms_count                 | integer                  | integer                  | NULL     | 0
 triple_rooms_count                 | integer                  | integer                  | NULL     | 0
 has_elevator                       | boolean                  | boolean                  | NULL     | false
 has_common_room                    | boolean                  | boolean                  | NULL     | true
 has_dining_hall                    | boolean                  | boolean                  | NULL     | false
 dining_capacity                    | integer                  | integer                  | NULL     | -
 has_wifi                           | boolean                  | boolean                  | NULL     | true
 has_cctv                           | boolean                  | boolean                  | NULL     | true
 cctv_camera_count                  | integer                  | integer                  | NULL     | -
 facilities_list                    | ARRAY                    | ARRAY                    | NULL     | -
 has_fire_safety_equipment          | boolean                  | boolean                  | NULL     | true
 fire_extinguisher_count            | integer                  | integer                  | NULL     | -
 has_emergency_exit                 | boolean                  | boolean                  | NULL     | true
 has_security_guard                 | boolean                  | boolean                  | NULL     | true
 warden_id                          | uuid                     | uuid                     | NULL     | -
 warden_name                        | character varying        | character varying(200)   | NULL     | -
 warden_phone                       | character varying        | character varying(15)    | NULL     | -
 last_inspection_date               | date                     | date                     | NULL     | -
 annual_maintenance_budget          | numeric                  | numeric                  | NULL     | -
 fire_safety_certificate_valid_till | date                     | date                     | NULL     | -
 meets_regulatory_standards         | boolean                  | boolean                  | NULL     | true
 establishment_date                 | date                     | date                     | NULL     | -
 check_in_time                      | time without time zone   | time without time zone   | NULL     | '18:00:00'::time without time zone
 check_out_time                     | time without time zone   | time without time zone   | NULL     | '07:00:00'::time without time zone
 gate_closing_time                  | time without time zone   | time without time zone   | NULL     | '22:00:00'::time without time zone
 monthly_operational_cost           | numeric                  | numeric                  | NULL     | -
 status                             | character varying        | character varying(30)    | NULL     | 'OPERATIONAL'::character varying
 is_active                          | boolean                  | boolean                  | NULL     | true
 building_photo_url                 | text                     | text                     | NULL     | -
 floor_plan_url                     | text                     | text                     | NULL     | -
 metadata                           | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 notes                              | text                     | text                     | NULL     | -
 created_by                         | uuid                     | uuid                     | NULL     | -
 created_at                         | timestamp with time zone | timestamp with time zone | NULL     | now()
 updated_at                         | timestamp with time zone | timestamp with time zone | NULL     | now()
(54 rows)


### hostel_fees

            Column            |           Type           |        Full Type         | Nullable |           Default            
------------------------------+--------------------------+--------------------------+----------+------------------------------
 id                           | uuid                     | uuid                     | NOT NULL | uuid_generate_v4()
 school_id                    | uuid                     | uuid                     | NOT NULL | -
 academic_year_id             | uuid                     | uuid                     | NOT NULL | -
 fee_code                     | character varying        | character varying(50)    | NOT NULL | -
 student_id                   | uuid                     | uuid                     | NOT NULL | -
 student_hostel_assignment_id | uuid                     | uuid                     | NOT NULL | -
 hostel_fee_amount            | numeric                  | numeric                  | NOT NULL | -
 mess_fee_amount              | numeric                  | numeric                  | NULL     | -
 total_payable                | numeric                  | numeric                  | NOT NULL | -
 payment_status               | character varying        | character varying(30)    | NULL     | 'PENDING'::character varying
 metadata                     | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 created_at                   | timestamp with time zone | timestamp with time zone | NULL     | now()
(12 rows)


### hostel_maintenance

        Column         |           Type           |        Full Type         | Nullable |          Default          
-----------------------+--------------------------+--------------------------+----------+---------------------------
 id                    | uuid                     | uuid                     | NOT NULL | uuid_generate_v4()
 school_id             | uuid                     | uuid                     | NOT NULL | -
 maintenance_code      | character varying        | character varying(50)    | NOT NULL | -
 hostel_building_id    | uuid                     | uuid                     | NULL     | -
 hostel_room_id        | uuid                     | uuid                     | NULL     | -
 complaint_description | text                     | text                     | NOT NULL | -
 resolution_status     | character varying        | character varying(30)    | NULL     | 'OPEN'::character varying
 metadata              | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 created_at            | timestamp with time zone | timestamp with time zone | NULL     | now()
(9 rows)


### hostel_rooms

           Column           |           Type           |        Full Type         | Nullable |            Default             
----------------------------+--------------------------+--------------------------+----------+--------------------------------
 id                         | uuid                     | uuid                     | NOT NULL | uuid_generate_v4()
 school_id                  | uuid                     | uuid                     | NOT NULL | -
 hostel_building_id         | uuid                     | uuid                     | NOT NULL | -
 room_code                  | character varying        | character varying(50)    | NOT NULL | -
 room_number                | character varying        | character varying(20)    | NOT NULL | -
 floor_number               | integer                  | integer                  | NOT NULL | -
 wing                       | character varying        | character varying(20)    | NULL     | -
 room_type                  | character varying        | character varying(30)    | NOT NULL | -
 room_category              | character varying        | character varying(30)    | NULL     | 'STANDARD'::character varying
 bed_capacity               | integer                  | integer                  | NOT NULL | -
 occupied_beds              | integer                  | integer                  | NULL     | 0
 available_beds             | integer                  | integer                  | NULL     | -
 room_area_sqft             | numeric                  | numeric                  | NULL     | -
 window_count               | integer                  | integer                  | NULL     | -
 has_balcony                | boolean                  | boolean                  | NULL     | false
 has_study_table            | boolean                  | boolean                  | NULL     | true
 study_table_count          | integer                  | integer                  | NULL     | -
 has_chair                  | boolean                  | boolean                  | NULL     | true
 has_wardrobe               | boolean                  | boolean                  | NULL     | true
 wardrobe_count             | integer                  | integer                  | NULL     | -
 has_bookshelf              | boolean                  | boolean                  | NULL     | true
 furniture_condition        | character varying        | character varying(30)    | NULL     | 'GOOD'::character varying
 furniture_list             | ARRAY                    | ARRAY                    | NULL     | -
 has_attached_bathroom      | boolean                  | boolean                  | NULL     | true
 has_hot_water              | boolean                  | boolean                  | NULL     | true
 has_geyser                 | boolean                  | boolean                  | NULL     | false
 light_points               | integer                  | integer                  | NULL     | -
 fan_count                  | integer                  | integer                  | NULL     | -
 power_socket_count         | integer                  | integer                  | NULL     | -
 has_ac                     | boolean                  | boolean                  | NULL     | false
 has_lan_connection         | boolean                  | boolean                  | NULL     | true
 has_wifi                   | boolean                  | boolean                  | NULL     | true
 has_intercom               | boolean                  | boolean                  | NULL     | true
 intercom_number            | character varying        | character varying(20)    | NULL     | -
 ventilation_type           | character varying        | character varying(30)    | NULL     | -
 natural_light_availability | character varying        | character varying(30)    | NULL     | -
 current_occupants          | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 bed_assignments            | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 has_reading_lamp           | boolean                  | boolean                  | NULL     | true
 has_notice_board           | boolean                  | boolean                  | NULL     | true
 special_features           | ARRAY                    | ARRAY                    | NULL     | -
 last_cleaning_date         | date                     | date                     | NULL     | -
 last_pest_control_date     | date                     | date                     | NULL     | -
 cleaning_status            | character varying        | character varying(30)    | NULL     | 'CLEAN'::character varying
 overall_condition          | character varying        | character varying(30)    | NULL     | 'GOOD'::character varying
 floor_condition            | character varying        | character varying(30)    | NULL     | -
 wall_condition             | character varying        | character varying(30)    | NULL     | -
 last_inspection_date       | date                     | date                     | NULL     | -
 requires_repair            | boolean                  | boolean                  | NULL     | false
 repair_priority            | character varying        | character varying(20)    | NULL     | -
 repair_description         | text                     | text                     | NULL     | -
 has_smoke_detector         | boolean                  | boolean                  | NULL     | true
 has_door_lock              | boolean                  | boolean                  | NULL     | true
 lock_type                  | character varying        | character varying(30)    | NULL     | -
 has_window_grills          | boolean                  | boolean                  | NULL     | true
 fire_extinguisher_nearby   | boolean                  | boolean                  | NULL     | true
 monthly_rent               | numeric                  | numeric                  | NULL     | -
 security_deposit           | numeric                  | numeric                  | NULL     | -
 availability_status        | character varying        | character varying(30)    | NULL     | 'AVAILABLE'::character varying
 is_available               | boolean                  | boolean                  | NULL     | true
 reserved_for_student_id    | uuid                     | uuid                     | NULL     | -
 reservation_date           | date                     | date                     | NULL     | -
 is_quarantine_room         | boolean                  | boolean                  | NULL     | false
 quarantine_start_date      | date                     | date                     | NULL     | -
 status                     | character varying        | character varying(30)    | NULL     | 'ACTIVE'::character varying
 is_active                  | boolean                  | boolean                  | NULL     | true
 room_photo_url             | text                     | text                     | NULL     | -
 photos                     | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 metadata                   | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 notes                      | text                     | text                     | NULL     | -
 created_by                 | uuid                     | uuid                     | NULL     | -
 created_at                 | timestamp with time zone | timestamp with time zone | NULL     | now()
 updated_at                 | timestamp with time zone | timestamp with time zone | NULL     | now()
(73 rows)


### immunization_records

                Column                 |           Type           |        Full Type         | Nullable |            Default             
---------------------------------------+--------------------------+--------------------------+----------+--------------------------------
 id                                    | uuid                     | uuid                     | NOT NULL | uuid_generate_v4()
 school_id                             | uuid                     | uuid                     | NOT NULL | -
 academic_year_id                      | uuid                     | uuid                     | NULL     | -
 record_code                           | character varying        | character varying(50)    | NOT NULL | -
 immunization_id                       | character varying        | character varying(50)    | NOT NULL | -
 student_id                            | uuid                     | uuid                     | NOT NULL | -
 student_health_profile_id             | uuid                     | uuid                     | NULL     | -
 vaccine_name                          | character varying        | character varying(200)   | NOT NULL | -
 vaccine_full_name                     | character varying        | character varying(300)   | NULL     | -
 vaccine_brand                         | character varying        | character varying(100)   | NULL     | -
 vaccine_type                          | character varying        | character varying(50)    | NOT NULL | -
 disease_prevented                     | character varying        | character varying(200)   | NULL     | -
 diseases_prevented                    | ARRAY                    | ARRAY                    | NULL     | -
 is_mandatory                          | boolean                  | boolean                  | NULL     | true
 is_government_recommended             | boolean                  | boolean                  | NULL     | true
 is_school_required                    | boolean                  | boolean                  | NULL     | true
 vaccine_category                      | character varying        | character varying(50)    | NULL     | -
 dose_number                           | integer                  | integer                  | NOT NULL | -
 total_doses_required                  | integer                  | integer                  | NOT NULL | -
 is_first_dose                         | boolean                  | boolean                  | NULL     | -
 is_booster_dose                       | boolean                  | boolean                  | NULL     | -
 dosage_amount                         | character varying        | character varying(50)    | NULL     | -
 dosage_unit                           | character varying        | character varying(20)    | NULL     | -
 route_of_administration               | character varying        | character varying(50)    | NULL     | -
 injection_site                        | character varying        | character varying(50)    | NULL     | -
 administered_date                     | date                     | date                     | NOT NULL | -
 administered_time                     | time without time zone   | time without time zone   | NULL     | -
 administered_by                       | character varying        | character varying(200)   | NOT NULL | -
 administrator_qualification           | character varying        | character varying(100)   | NULL     | -
 administrator_registration_number     | character varying        | character varying(50)    | NULL     | -
 administered_at                       | character varying        | character varying(200)   | NULL     | -
 administered_at_type                  | character varying        | character varying(50)    | NULL     | -
 administering_organization            | character varying        | character varying(200)   | NULL     | -
 batch_number                          | character varying        | character varying(50)    | NOT NULL | -
 lot_number                            | character varying        | character varying(50)    | NULL     | -
 manufacturer_name                     | character varying        | character varying(200)   | NULL     | -
 manufacture_date                      | date                     | date                     | NULL     | -
 expiry_date                           | date                     | date                     | NULL     | -
 vaccine_verified                      | boolean                  | boolean                  | NULL     | false
 vaccine_source                        | character varying        | character varying(100)   | NULL     | -
 government_program                    | boolean                  | boolean                  | NULL     | false
 program_name                          | character varying        | character varying(200)   | NULL     | -
 program_id                            | character varying        | character varying(50)    | NULL     | -
 free_vaccine                          | boolean                  | boolean                  | NULL     | false
 vaccine_cost                          | numeric                  | numeric                  | NULL     | -
 pre_vaccination_screening_done        | boolean                  | boolean                  | NULL     | false
 contraindications_checked             | boolean                  | boolean                  | NULL     | false
 parent_consent_obtained               | boolean                  | boolean                  | NULL     | false
 consent_date                          | date                     | date                     | NULL     | -
 consent_form_url                      | text                     | text                     | NULL     | -
 observation_period_minutes            | integer                  | integer                  | NULL     | 30
 immediate_reaction                    | boolean                  | boolean                  | NULL     | false
 immediate_reaction_type               | character varying        | character varying(50)    | NULL     | -
 immediate_reaction_description        | text                     | text                     | NULL     | -
 side_effects_reported                 | boolean                  | boolean                  | NULL     | false
 side_effects                          | ARRAY                    | ARRAY                    | NULL     | -
 side_effects_description              | text                     | text                     | NULL     | -
 side_effects_severity                 | character varying        | character varying(30)    | NULL     | -
 adverse_event                         | boolean                  | boolean                  | NULL     | false
 adverse_event_details                 | text                     | text                     | NULL     | -
 adverse_event_reported_to_authorities | boolean                  | boolean                  | NULL     | false
 follow_up_required                    | boolean                  | boolean                  | NULL     | false
 follow_up_date                        | date                     | date                     | NULL     | -
 follow_up_completed                   | boolean                  | boolean                  | NULL     | false
 follow_up_notes                       | text                     | text                     | NULL     | -
 next_dose_due_date                    | date                     | date                     | NULL     | -
 next_dose_scheduled                   | boolean                  | boolean                  | NULL     | false
 next_dose_reminder_sent               | boolean                  | boolean                  | NULL     | false
 completed_vaccination_series          | boolean                  | boolean                  | NULL     | false
 series_completion_date                | date                     | date                     | NULL     | -
 certificate_issued                    | boolean                  | boolean                  | NULL     | false
 certificate_number                    | character varying        | character varying(50)    | NULL     | -
 certificate_issue_date                | date                     | date                     | NULL     | -
 certificate_url                       | text                     | text                     | NULL     | -
 verified_by_doctor                    | boolean                  | boolean                  | NULL     | false
 doctor_name                           | character varying        | character varying(200)   | NULL     | -
 doctor_signature_url                  | text                     | text                     | NULL     | -
 verified_by_school                    | boolean                  | boolean                  | NULL     | false
 school_verification_date              | date                     | date                     | NULL     | -
 vaccination_card_updated              | boolean                  | boolean                  | NULL     | false
 medical_certificate_url               | text                     | text                     | NULL     | -
 prescription_url                      | text                     | text                     | NULL     | -
 supporting_documents                  | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 parent_notified                       | boolean                  | boolean                  | NULL     | false
 parent_notification_date              | date                     | date                     | NULL     | -
 overdue                               | boolean                  | boolean                  | NULL     | false
 overdue_days                          | integer                  | integer                  | NULL     | -
 exemption_claimed                     | boolean                  | boolean                  | NULL     | false
 exemption_type                        | character varying        | character varying(50)    | NULL     | -
 exemption_reason                      | text                     | text                     | NULL     | -
 exemption_document_url                | text                     | text                     | NULL     | -
 status                                | character varying        | character varying(30)    | NULL     | 'COMPLETED'::character varying
 is_active                             | boolean                  | boolean                  | NULL     | true
 metadata                              | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 notes                                 | text                     | text                     | NULL     | -
 medical_notes                         | text                     | text                     | NULL     | -
 created_by                            | uuid                     | uuid                     | NULL     | -
 created_at                            | timestamp with time zone | timestamp with time zone | NULL     | now()
 updated_at                            | timestamp with time zone | timestamp with time zone | NULL     | now()
(99 rows)


### in_app_notifications

            Column            |           Type           |        Full Type         | Nullable |           Default           
------------------------------+--------------------------+--------------------------+----------+-----------------------------
 id                           | uuid                     | uuid                     | NOT NULL | gen_random_uuid()
 school_id                    | uuid                     | uuid                     | NOT NULL | -
 notification_code            | character varying        | character varying(50)    | NULL     | -
 notification_uuid            | uuid                     | uuid                     | NULL     | gen_random_uuid()
 user_id                      | uuid                     | uuid                     | NOT NULL | -
 recipient_type               | character varying        | character varying(20)    | NULL     | -
 recipient_name               | character varying        | character varying(200)   | NULL     | -
 student_id                   | uuid                     | uuid                     | NULL     | -
 parent_id                    | uuid                     | uuid                     | NULL     | -
 class_id                     | uuid                     | uuid                     | NULL     | -
 notification_type            | character varying        | character varying(50)    | NOT NULL | -
 category                     | character varying        | character varying(50)    | NULL     | -
 subcategory                  | character varying        | character varying(50)    | NULL     | -
 title                        | character varying        | character varying(200)   | NOT NULL | -
 message                      | text                     | text                     | NOT NULL | -
 short_message                | character varying        | character varying(150)   | NULL     | -
 html_content                 | text                     | text                     | NULL     | -
 icon                         | character varying        | character varying(50)    | NULL     | -
 icon_url                     | text                     | text                     | NULL     | -
 icon_color                   | character varying        | character varying(7)     | NULL     | -
 image_url                    | text                     | text                     | NULL     | -
 thumbnail_url                | text                     | text                     | NULL     | -
 avatar_url                   | text                     | text                     | NULL     | -
 priority                     | character varying        | character varying(20)    | NULL     | 'NORMAL'::character varying
 importance_level             | integer                  | integer                  | NULL     | 1
 is_critical                  | boolean                  | boolean                  | NULL     | false
 is_urgent                    | boolean                  | boolean                  | NULL     | false
 badge_text                   | character varying        | character varying(20)    | NULL     | -
 badge_color                  | character varying        | character varying(7)     | NULL     | -
 show_badge                   | boolean                  | boolean                  | NULL     | true
 is_actionable                | boolean                  | boolean                  | NULL     | false
 action_type                  | character varying        | character varying(50)    | NULL     | -
 action_url                   | text                     | text                     | NULL     | -
 action_route                 | character varying        | character varying(200)   | NULL     | -
 action_parameters            | jsonb                    | jsonb                    | NULL     | -
 primary_action_text          | character varying        | character varying(50)    | NULL     | -
 primary_action_url           | text                     | text                     | NULL     | -
 secondary_action_text        | character varying        | character varying(50)    | NULL     | -
 secondary_action_url         | text                     | text                     | NULL     | -
 quick_actions                | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 action_taken                 | boolean                  | boolean                  | NULL     | false
 action_taken_at              | timestamp with time zone | timestamp with time zone | NULL     | -
 action_type_taken            | character varying        | character varying(50)    | NULL     | -
 action_result                | jsonb                    | jsonb                    | NULL     | -
 is_read                      | boolean                  | boolean                  | NULL     | false
 read_at                      | timestamp with time zone | timestamp with time zone | NULL     | -
 marked_read_at               | timestamp with time zone | timestamp with time zone | NULL     | -
 auto_mark_read               | boolean                  | boolean                  | NULL     | false
 auto_mark_read_after_seconds | integer                  | integer                  | NULL     | 5
 display_duration_seconds     | integer                  | integer                  | NULL     | -
 auto_dismiss                 | boolean                  | boolean                  | NULL     | false
 auto_dismiss_after_seconds   | integer                  | integer                  | NULL     | 10
 is_dismissible               | boolean                  | boolean                  | NULL     | true
 dismissed                    | boolean                  | boolean                  | NULL     | false
 dismissed_at                 | timestamp with time zone | timestamp with time zone | NULL     | -
 is_pinned                    | boolean                  | boolean                  | NULL     | false
 pinned_at                    | timestamp with time zone | timestamp with time zone | NULL     | -
 pinned_until                 | timestamp with time zone | timestamp with time zone | NULL     | -
 is_persistent                | boolean                  | boolean                  | NULL     | true
 persist_after_read           | boolean                  | boolean                  | NULL     | false
 group_key                    | character varying        | character varying(100)   | NULL     | -
 group_title                  | character varying        | character varying(200)   | NULL     | -
 is_group_summary             | boolean                  | boolean                  | NULL     | false
 grouped_notification_ids     | ARRAY                    | ARRAY                    | NULL     | -
 thread_id                    | character varying        | character varying(100)   | NULL     | -
 expires_at                   | timestamp with time zone | timestamp with time zone | NULL     | -
 is_expired                   | boolean                  | boolean                  | NULL     | false
 auto_expire                  | boolean                  | boolean                  | NULL     | true
 expire_after_days            | integer                  | integer                  | NULL     | 30
 status                       | character varying        | character varying(30)    | NULL     | 'ACTIVE'::character varying
 delivered                    | boolean                  | boolean                  | NULL     | true
 delivered_at                 | timestamp with time zone | timestamp with time zone | NULL     | now()
 clicked                      | boolean                  | boolean                  | NULL     | false
 click_count                  | integer                  | integer                  | NULL     | 0
 first_clicked_at             | timestamp with time zone | timestamp with time zone | NULL     | -
 last_clicked_at              | timestamp with time zone | timestamp with time zone | NULL     | -
 engagement_score             | numeric                  | numeric                  | NULL     | 0
 time_to_read_seconds         | integer                  | integer                  | NULL     | -
 time_to_action_seconds       | integer                  | integer                  | NULL     | -
 related_entity_type          | character varying        | character varying(50)    | NULL     | -
 related_entity_id            | uuid                     | uuid                     | NULL     | -
 related_entity_data          | jsonb                    | jsonb                    | NULL     | -
 source_module                | character varying        | character varying(50)    | NULL     | -
 source_record_id             | uuid                     | uuid                     | NULL     | -
 trigger_event                | character varying        | character varying(50)    | NULL     | -
 triggered_by                 | uuid                     | uuid                     | NULL     | -
 campaign_id                  | character varying        | character varying(100)   | NULL     | -
 batch_id                     | character varying        | character varying(100)   | NULL     | -
 scheduled_for                | timestamp with time zone | timestamp with time zone | NULL     | -
 is_scheduled                 | boolean                  | boolean                  | NULL     | false
 display_after                | timestamp with time zone | timestamp with time zone | NULL     | -
 display_until                | timestamp with time zone | timestamp with time zone | NULL     | -
 play_sound                   | boolean                  | boolean                  | NULL     | false
 sound_file                   | character varying        | character varying(100)   | NULL     | -
 show_alert                   | boolean                  | boolean                  | NULL     | true
 alert_style                  | character varying        | character varying(20)    | NULL     | -
 vibrate                      | boolean                  | boolean                  | NULL     | false
 respects_user_preferences    | boolean                  | boolean                  | NULL     | true
 can_be_muted                 | boolean                  | boolean                  | NULL     | true
 is_archived                  | boolean                  | boolean                  | NULL     | false
 archived_at                  | timestamp with time zone | timestamp with time zone | NULL     | -
 auto_archive_after_read      | boolean                  | boolean                  | NULL     | false
 impression_count             | integer                  | integer                  | NULL     | 0
 first_impression_at          | timestamp with time zone | timestamp with time zone | NULL     | -
 last_impression_at           | timestamp with time zone | timestamp with time zone | NULL     | -
 metadata                     | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 tags                         | ARRAY                    | ARRAY                    | NULL     | -
 custom_fields                | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 notes                        | text                     | text                     | NULL     | -
 created_by                   | uuid                     | uuid                     | NULL     | -
 created_at                   | timestamp with time zone | timestamp with time zone | NULL     | now()
 updated_at                   | timestamp with time zone | timestamp with time zone | NULL     | now()
(112 rows)


### infirmary_visits

            Column            |           Type           |        Full Type         | Nullable |            Default             
------------------------------+--------------------------+--------------------------+----------+--------------------------------
 id                           | uuid                     | uuid                     | NOT NULL | uuid_generate_v4()
 school_id                    | uuid                     | uuid                     | NOT NULL | -
 academic_year_id             | uuid                     | uuid                     | NOT NULL | -
 visit_code                   | character varying        | character varying(50)    | NOT NULL | -
 visit_number                 | character varying        | character varying(50)    | NOT NULL | -
 student_id                   | uuid                     | uuid                     | NOT NULL | -
 student_health_profile_id    | uuid                     | uuid                     | NULL     | -
 class_id                     | uuid                     | uuid                     | NULL     | -
 section_id                   | uuid                     | uuid                     | NULL     | -
 visit_date                   | date                     | date                     | NOT NULL | CURRENT_DATE
 visit_time                   | time without time zone   | time without time zone   | NOT NULL | -
 visit_type                   | character varying        | character varying(30)    | NULL     | 'WALK_IN'::character varying
 arrival_method               | character varying        | character varying(50)    | NULL     | -
 brought_by                   | character varying        | character varying(200)   | NULL     | -
 brought_by_role              | character varying        | character varying(50)    | NULL     | -
 chief_complaint              | text                     | text                     | NOT NULL | -
 complaint_category           | character varying        | character varying(50)    | NULL     | -
 symptoms                     | ARRAY                    | ARRAY                    | NOT NULL | -
 symptom_onset                | time without time zone   | time without time zone   | NULL     | -
 symptom_duration             | character varying        | character varying(50)    | NULL     | -
 pain_level                   | integer                  | integer                  | NULL     | -
 pain_location                | character varying        | character varying(100)   | NULL     | -
 recurrent_complaint          | boolean                  | boolean                  | NULL     | false
 previous_visit_count         | integer                  | integer                  | NULL     | 0
 last_similar_visit_date      | date                     | date                     | NULL     | -
 temperature_fahrenheit       | numeric                  | numeric                  | NULL     | -
 temperature_method           | character varying        | character varying(30)    | NULL     | -
 pulse_rate                   | integer                  | integer                  | NULL     | -
 pulse_regularity             | character varying        | character varying(30)    | NULL     | -
 blood_pressure_systolic      | integer                  | integer                  | NULL     | -
 blood_pressure_diastolic     | integer                  | integer                  | NULL     | -
 respiratory_rate             | integer                  | integer                  | NULL     | -
 oxygen_saturation_percentage | numeric                  | numeric                  | NULL     | -
 general_appearance           | character varying        | character varying(100)   | NULL     | -
 consciousness_level          | character varying        | character varying(50)    | NULL     | -
 skin_condition               | character varying        | character varying(100)   | NULL     | -
 eyes_examination             | character varying        | character varying(100)   | NULL     | -
 throat_examination           | character varying        | character varying(100)   | NULL     | -
 chest_examination            | character varying        | character varying(100)   | NULL     | -
 abdomen_examination          | character varying        | character varying(100)   | NULL     | -
 examination_findings         | text                     | text                     | NULL     | -
 preliminary_diagnosis        | text                     | text                     | NULL     | -
 diagnosis_confidence         | character varying        | character varying(30)    | NULL     | -
 treatment_given              | text                     | text                     | NOT NULL | -
 treatment_type               | character varying        | character varying(50)    | NULL     | -
 medication_dispensed         | ARRAY                    | ARRAY                    | NULL     | -
 medication_details           | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 rest_given                   | boolean                  | boolean                  | NULL     | false
 rest_duration_minutes        | integer                  | integer                  | NULL     | -
 rest_location                | character varying        | character varying(100)   | NULL     | -
 kept_under_observation       | boolean                  | boolean                  | NULL     | false
 observation_duration_minutes | integer                  | integer                  | NULL     | -
 observation_notes            | text                     | text                     | NULL     | -
 condition_improved           | boolean                  | boolean                  | NULL     | -
 improvement_percentage       | integer                  | integer                  | NULL     | -
 attended_by                  | character varying        | character varying(200)   | NOT NULL | -
 attended_by_role             | character varying        | character varying(50)    | NOT NULL | -
 attended_by_qualification    | character varying        | character varying(100)   | NULL     | -
 doctor_consulted             | boolean                  | boolean                  | NULL     | false
 doctor_name                  | character varying        | character varying(200)   | NULL     | -
 doctor_phone                 | character varying        | character varying(15)    | NULL     | -
 consultation_mode            | character varying        | character varying(30)    | NULL     | -
 parent_notified              | boolean                  | boolean                  | NULL     | false
 parent_notification_time     | time without time zone   | time without time zone   | NULL     | -
 parent_notification_method   | character varying        | character varying(30)    | NULL     | -
 parent_informed_by           | character varying        | character varying(200)   | NULL     | -
 parent_response              | text                     | text                     | NULL     | -
 parent_pickup_required       | boolean                  | boolean                  | NULL     | false
 parent_arrived               | boolean                  | boolean                  | NULL     | false
 parent_arrival_time          | time without time zone   | time without time zone   | NULL     | -
 disposition                  | character varying        | character varying(50)    | NOT NULL | -
 returned_to_class            | boolean                  | boolean                  | NULL     | false
 return_to_class_time         | time without time zone   | time without time zone   | NULL     | -
 return_with_restrictions     | boolean                  | boolean                  | NULL     | false
 restrictions                 | text                     | text                     | NULL     | -
 sent_home                    | boolean                  | boolean                  | NULL     | false
 sent_home_time               | time without time zone   | time without time zone   | NULL     | -
 sent_home_with               | character varying        | character varying(200)   | NULL     | -
 sent_home_reason             | text                     | text                     | NULL     | -
 referred_to_hospital         | boolean                  | boolean                  | NULL     | false
 referral_reason              | text                     | text                     | NULL     | -
 referral_urgency             | character varying        | character varying(30)    | NULL     | -
 hospital_name                | character varying        | character varying(200)   | NULL     | -
 referral_letter_issued       | boolean                  | boolean                  | NULL     | false
 referral_letter_url          | text                     | text                     | NULL     | -
 ambulance_arranged           | boolean                  | boolean                  | NULL     | false
 transport_details            | text                     | text                     | NULL     | -
 follow_up_required           | boolean                  | boolean                  | NULL     | false
 follow_up_date               | date                     | date                     | NULL     | -
 follow_up_instructions       | text                     | text                     | NULL     | -
 follow_up_completed          | boolean                  | boolean                  | NULL     | false
 follow_up_notes              | text                     | text                     | NULL     | -
 medical_certificate_issued   | boolean                  | boolean                  | NULL     | false
 certificate_url              | text                     | text                     | NULL     | -
 visit_notes                  | text                     | text                     | NULL     | -
 nurse_notes                  | text                     | text                     | NULL     | -
 doctor_notes                 | text                     | text                     | NULL     | -
 photo_evidence               | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 visit_status                 | character varying        | character varying(30)    | NULL     | 'COMPLETED'::character varying
 is_completed                 | boolean                  | boolean                  | NULL     | true
 metadata                     | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 notes                        | text                     | text                     | NULL     | -
 created_by                   | uuid                     | uuid                     | NULL     | -
 created_at                   | timestamp with time zone | timestamp with time zone | NULL     | now()
 updated_at                   | timestamp with time zone | timestamp with time zone | NULL     | now()
(105 rows)


### inventory_analytics

          Column          |           Type           |        Full Type         | Nullable |      Default       
--------------------------+--------------------------+--------------------------+----------+--------------------
 id                       | uuid                     | uuid                     | NOT NULL | uuid_generate_v4()
 school_id                | uuid                     | uuid                     | NOT NULL | -
 analytics_code           | character varying        | character varying(50)    | NOT NULL | -
 report_date              | date                     | date                     | NULL     | CURRENT_DATE
 total_assets_value       | numeric                  | numeric                  | NULL     | 0
 total_inventory_value    | numeric                  | numeric                  | NULL     | 0
 low_stock_items_count    | integer                  | integer                  | NULL     | 0
 out_of_stock_items_count | integer                  | integer                  | NULL     | 0
 total_purchase_orders    | integer                  | integer                  | NULL     | 0
 pending_po_value         | numeric                  | numeric                  | NULL     | 0
 metadata                 | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 created_at               | timestamp with time zone | timestamp with time zone | NULL     | now()
(12 rows)


### inventory_items

           Column            |           Type           |        Full Type         | Nullable |           Default           
-----------------------------+--------------------------+--------------------------+----------+-----------------------------
 id                          | uuid                     | uuid                     | NOT NULL | uuid_generate_v4()
 school_id                   | uuid                     | uuid                     | NOT NULL | -
 item_code                   | character varying        | character varying(50)    | NOT NULL | -
 item_name                   | character varying        | character varying(200)   | NOT NULL | -
 item_description            | text                     | text                     | NULL     | -
 item_type                   | character varying        | character varying(50)    | NOT NULL | -
 item_category               | character varying        | character varying(50)    | NOT NULL | -
 item_sub_category           | character varying        | character varying(100)   | NULL     | -
 brand                       | character varying        | character varying(100)   | NULL     | -
 manufacturer                | character varying        | character varying(200)   | NULL     | -
 model_number                | character varying        | character varying(50)    | NULL     | -
 unit_of_measurement         | character varying        | character varying(30)    | NOT NULL | -
 standard_pack_size          | integer                  | integer                  | NULL     | -
 current_stock_quantity      | numeric                  | numeric                  | NOT NULL | 0
 minimum_stock_level         | numeric                  | numeric                  | NOT NULL | -
 maximum_stock_level         | numeric                  | numeric                  | NULL     | -
 reorder_level               | numeric                  | numeric                  | NOT NULL | -
 reorder_quantity            | numeric                  | numeric                  | NULL     | -
 low_stock_alert             | boolean                  | boolean                  | NULL     | false
 out_of_stock                | boolean                  | boolean                  | NULL     | false
 overstock_alert             | boolean                  | boolean                  | NULL     | false
 storage_location            | character varying        | character varying(200)   | NOT NULL | -
 storage_type                | character varying        | character varying(50)    | NULL     | -
 shelf_number                | character varying        | character varying(50)    | NULL     | -
 rack_number                 | character varying        | character varying(50)    | NULL     | -
 bin_location                | character varying        | character varying(50)    | NULL     | -
 storage_requirements        | text                     | text                     | NULL     | -
 special_handling_required   | boolean                  | boolean                  | NULL     | false
 handling_instructions       | text                     | text                     | NULL     | -
 has_expiry_date             | boolean                  | boolean                  | NULL     | false
 expiry_tracking_required    | boolean                  | boolean                  | NULL     | false
 batch_tracking_enabled      | boolean                  | boolean                  | NULL     | false
 batches                     | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 unit_cost                   | numeric                  | numeric                  | NOT NULL | -
 latest_purchase_price       | numeric                  | numeric                  | NULL     | -
 average_purchase_price      | numeric                  | numeric                  | NULL     | -
 selling_price               | numeric                  | numeric                  | NULL     | -
 gst_applicable              | boolean                  | boolean                  | NULL     | true
 gst_percentage              | numeric                  | numeric                  | NULL     | -
 hsn_code                    | character varying        | character varying(20)    | NULL     | -
 valuation_method            | character varying        | character varying(30)    | NULL     | 'FIFO'::character varying
 total_stock_value           | numeric                  | numeric                  | NULL     | -
 preferred_vendor_id         | uuid                     | uuid                     | NULL     | -
 preferred_vendor_name       | character varying        | character varying(200)   | NULL     | -
 alternate_vendors           | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 last_purchase_date          | date                     | date                     | NULL     | -
 last_purchase_quantity      | numeric                  | numeric                  | NULL     | -
 last_purchase_price         | numeric                  | numeric                  | NULL     | -
 total_consumed_quantity     | numeric                  | numeric                  | NULL     | 0
 average_monthly_consumption | numeric                  | numeric                  | NULL     | -
 last_issue_date             | date                     | date                     | NULL     | -
 last_issue_quantity         | numeric                  | numeric                  | NULL     | -
 total_received_quantity     | numeric                  | numeric                  | NULL     | 0
 total_issued_quantity       | numeric                  | numeric                  | NULL     | 0
 total_returned_quantity     | numeric                  | numeric                  | NULL     | 0
 total_damaged_quantity      | numeric                  | numeric                  | NULL     | 0
 total_expired_quantity      | numeric                  | numeric                  | NULL     | 0
 requires_quality_check      | boolean                  | boolean                  | NULL     | false
 quality_standards           | text                     | text                     | NULL     | -
 rejection_rate              | numeric                  | numeric                  | NULL     | -
 is_hazardous                | boolean                  | boolean                  | NULL     | false
 hazard_classification       | character varying        | character varying(50)    | NULL     | -
 safety_precautions          | ARRAY                    | ARRAY                    | NULL     | -
 msds_available              | boolean                  | boolean                  | NULL     | false
 msds_document_url           | text                     | text                     | NULL     | -
 requires_license            | boolean                  | boolean                  | NULL     | false
 license_number              | character varying        | character varying(50)    | NULL     | -
 license_valid_till          | date                     | date                     | NULL     | -
 restricted_item             | boolean                  | boolean                  | NULL     | false
 usage_restrictions          | text                     | text                     | NULL     | -
 requires_approval_for_issue | boolean                  | boolean                  | NULL     | false
 approval_authority          | character varying        | character varying(200)   | NULL     | -
 item_status                 | character varying        | character varying(30)    | NULL     | 'ACTIVE'::character varying
 discontinuation_date        | date                     | date                     | NULL     | -
 replacement_item_code       | character varying        | character varying(50)    | NULL     | -
 barcode                     | character varying        | character varying(100)   | NULL     | -
 sku                         | character varying        | character varying(50)    | NULL     | -
 weight_per_unit             | numeric                  | numeric                  | NULL     | -
 dimensions                  | character varying        | character varying(100)   | NULL     | -
 color                       | character varying        | character varying(50)    | NULL     | -
 product_image_url           | text                     | text                     | NULL     | -
 specification_sheet_url     | text                     | text                     | NULL     | -
 documents                   | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 last_stock_audit_date       | date                     | date                     | NULL     | -
 last_audit_variance         | numeric                  | numeric                  | NULL     | -
 stock_accuracy_percentage   | numeric                  | numeric                  | NULL     | -
 is_active                   | boolean                  | boolean                  | NULL     | true
 metadata                    | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 custom_fields               | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 notes                       | text                     | text                     | NULL     | -
 remarks                     | text                     | text                     | NULL     | -
 created_by                  | uuid                     | uuid                     | NULL     | -
 created_at                  | timestamp with time zone | timestamp with time zone | NULL     | now()
 updated_at                  | timestamp with time zone | timestamp with time zone | NULL     | now()
(94 rows)


### library_analytics

        Column         |           Type           |        Full Type         | Nullable |           Default           
-----------------------+--------------------------+--------------------------+----------+-----------------------------
 id                    | uuid                     | uuid                     | NOT NULL | uuid_generate_v4()
 school_id             | uuid                     | uuid                     | NOT NULL | -
 academic_year_id      | uuid                     | uuid                     | NOT NULL | -
 analytics_code        | character varying        | character varying(50)    | NOT NULL | -
 analytics_type        | character varying        | character varying(30)    | NULL     | 'MEMBER'::character varying
 analysis_date         | date                     | date                     | NULL     | CURRENT_DATE
 total_issues          | integer                  | integer                  | NULL     | 0
 total_returns         | integer                  | integer                  | NULL     | 0
 books_damaged         | integer                  | integer                  | NULL     | 0
 books_lost            | integer                  | integer                  | NULL     | 0
 total_fines_collected | numeric                  | numeric                  | NULL     | 0.00
 metadata              | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 created_at            | timestamp with time zone | timestamp with time zone | NULL     | now()
(13 rows)


### library_books

            Column            |           Type           |        Full Type         | Nullable |            Default             
------------------------------+--------------------------+--------------------------+----------+--------------------------------
 id                           | uuid                     | uuid                     | NOT NULL | uuid_generate_v4()
 school_id                    | uuid                     | uuid                     | NOT NULL | -
 book_code                    | character varying        | character varying(50)    | NOT NULL | -
 accession_number             | character varying        | character varying(50)    | NULL     | -
 isbn_10                      | character varying        | character varying(13)    | NULL     | -
 isbn_13                      | character varying        | character varying(17)    | NULL     | -
 issn                         | character varying        | character varying(20)    | NULL     | -
 title                        | character varying        | character varying(500)   | NOT NULL | -
 subtitle                     | character varying        | character varying(300)   | NULL     | -
 series_title                 | character varying        | character varying(200)   | NULL     | -
 volume_number                | character varying        | character varying(20)    | NULL     | -
 edition                      | character varying        | character varying(50)    | NULL     | -
 primary_author               | character varying        | character varying(200)   | NOT NULL | -
 co_authors                   | ARRAY                    | ARRAY                    | NULL     | -
 author_count                 | integer                  | integer                  | NULL     | 1
 editor                       | character varying        | character varying(200)   | NULL     | -
 translator                   | character varying        | character varying(200)   | NULL     | -
 illustrator                  | character varying        | character varying(200)   | NULL     | -
 publisher                    | character varying        | character varying(200)   | NOT NULL | -
 publication_year             | integer                  | integer                  | NULL     | -
 publication_date             | date                     | date                     | NULL     | -
 publication_place            | character varying        | character varying(100)   | NULL     | -
 reprint_year                 | integer                  | integer                  | NULL     | -
 edition_statement            | text                     | text                     | NULL     | -
 total_pages                  | integer                  | integer                  | NULL     | -
 page_count_roman             | character varying        | character varying(20)    | NULL     | -
 binding_type                 | character varying        | character varying(30)    | NULL     | 'PAPERBACK'::character varying
 dimensions                   | character varying        | character varying(50)    | NULL     | -
 weight_grams                 | integer                  | integer                  | NULL     | -
 book_condition               | character varying        | character varying(30)    | NULL     | 'NEW'::character varying
 primary_language             | character varying        | character varying(50)    | NULL     | 'English'::character varying
 additional_languages         | ARRAY                    | ARRAY                    | NULL     | -
 original_language            | character varying        | character varying(50)    | NULL     | -
 is_translated                | boolean                  | boolean                  | NULL     | false
 classification_system        | character varying        | character varying(30)    | NULL     | 'DDC'::character varying
 call_number                  | character varying        | character varying(100)   | NOT NULL | -
 ddc_number                   | character varying        | character varying(20)    | NULL     | -
 ddc_class_name               | character varying        | character varying(200)   | NULL     | -
 lcc_number                   | character varying        | character varying(50)    | NULL     | -
 lcc_class_name               | character varying        | character varying(200)   | NULL     | -
 primary_subject              | character varying        | character varying(100)   | NOT NULL | -
 subject_keywords             | ARRAY                    | ARRAY                    | NULL     | -
 genre                        | character varying        | character varying(50)    | NULL     | -
 sub_genre                    | character varying        | character varying(50)    | NULL     | -
 topics                       | ARRAY                    | ARRAY                    | NULL     | -
 book_category                | character varying        | character varying(50)    | NULL     | 'REFERENCE'::character varying
 age_group                    | character varying        | character varying(30)    | NULL     | 'ALL'::character varying
 recommended_grades           | ARRAY                    | ARRAY                    | NULL     | -
 difficulty_level             | character varying        | character varying(20)    | NULL     | 'MEDIUM'::character varying
 description                  | text                     | text                     | NULL     | -
 table_of_contents            | text                     | text                     | NULL     | -
 summary                      | text                     | text                     | NULL     | -
 synopsis                     | text                     | text                     | NULL     | -
 keywords                     | ARRAY                    | ARRAY                    | NULL     | -
 tags                         | ARRAY                    | ARRAY                    | NULL     | -
 has_awards                   | boolean                  | boolean                  | NULL     | false
 awards_received              | ARRAY                    | ARRAY                    | NULL     | -
 is_bestseller                | boolean                  | boolean                  | NULL     | false
 bestseller_lists             | ARRAY                    | ARRAY                    | NULL     | -
 critical_reviews             | text                     | text                     | NULL     | -
 average_rating               | numeric                  | numeric                  | NULL     | -
 purchase_date                | date                     | date                     | NULL     | -
 purchase_price               | numeric                  | numeric                  | NULL     | -
 purchase_currency            | character varying        | character varying(10)    | NULL     | 'INR'::character varying
 vendor_name                  | character varying        | character varying(200)   | NULL     | -
 vendor_invoice_number        | character varying        | character varying(50)    | NULL     | -
 current_market_price         | numeric                  | numeric                  | NULL     | -
 replacement_cost             | numeric                  | numeric                  | NULL     | -
 book_value                   | numeric                  | numeric                  | NULL     | -
 depreciation_rate            | numeric                  | numeric                  | NULL     | 10.00
 last_valuation_date          | date                     | date                     | NULL     | -
 total_copies_purchased       | integer                  | integer                  | NULL     | 1
 copies_available             | integer                  | integer                  | NULL     | 1
 copies_issued                | integer                  | integer                  | NULL     | 0
 copies_damaged               | integer                  | integer                  | NULL     | 0
 copies_lost                  | integer                  | integer                  | NULL     | 0
 copies_in_repair             | integer                  | integer                  | NULL     | 0
 copies_reserved              | integer                  | integer                  | NULL     | 0
 reorder_level                | integer                  | integer                  | NULL     | 2
 requires_reorder             | boolean                  | boolean                  | NULL     | false
 location_rack                | character varying        | character varying(50)    | NULL     | -
 location_shelf               | character varying        | character varying(50)    | NULL     | -
 location_section             | character varying        | character varying(50)    | NULL     | -
 full_location                | character varying        | character varying(200)   | NULL     | -
 is_reference_only            | boolean                  | boolean                  | NULL     | false
 is_restricted_access         | boolean                  | boolean                  | NULL     | false
 is_issuable                  | boolean                  | boolean                  | NULL     | true
 max_issue_days               | integer                  | integer                  | NULL     | 14
 max_renewal_count            | integer                  | integer                  | NULL     | 2
 issue_limit_per_user         | integer                  | integer                  | NULL     | 1
 fine_per_day                 | numeric                  | numeric                  | NULL     | 2.00
 max_fine_amount              | numeric                  | numeric                  | NULL     | 500.00
 is_recommended               | boolean                  | boolean                  | NULL     | false
 is_featured                  | boolean                  | boolean                  | NULL     | false
 is_new_arrival               | boolean                  | boolean                  | NULL     | false
 new_arrival_date             | date                     | date                     | NULL     | -
 is_rare_collection           | boolean                  | boolean                  | NULL     | false
 is_digital_available         | boolean                  | boolean                  | NULL     | false
 requires_permission          | boolean                  | boolean                  | NULL     | false
 permission_required_from     | character varying        | character varying(100)   | NULL     | -
 total_issues_count           | integer                  | integer                  | NULL     | 0
 current_reservations_count   | integer                  | integer                  | NULL     | 0
 popularity_score             | numeric                  | numeric                  | NULL     | 0.00
 demand_level                 | character varying        | character varying(20)    | NULL     | 'LOW'::character varying
 last_issued_date             | date                     | date                     | NULL     | -
 last_returned_date           | date                     | date                     | NULL     | -
 average_issue_frequency_days | numeric                  | numeric                  | NULL     | -
 has_ebook                    | boolean                  | boolean                  | NULL     | false
 ebook_url                    | text                     | text                     | NULL     | -
 ebook_format                 | character varying        | character varying(20)    | NULL     | -
 has_audiobook                | boolean                  | boolean                  | NULL     | false
 audiobook_url                | text                     | text                     | NULL     | -
 online_preview_url           | text                     | text                     | NULL     | -
 goodreads_id                 | character varying        | character varying(50)    | NULL     | -
 google_books_id              | character varying        | character varying(50)    | NULL     | -
 amazon_asin                  | character varying        | character varying(20)    | NULL     | -
 external_links               | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 cover_image_url              | text                     | text                     | NULL     | -
 thumbnail_url                | text                     | text                     | NULL     | -
 has_illustrations            | boolean                  | boolean                  | NULL     | false
 illustration_count           | integer                  | integer                  | NULL     | -
 has_maps                     | boolean                  | boolean                  | NULL     | false
 has_diagrams                 | boolean                  | boolean                  | NULL     | false
 status                       | character varying        | character varying(30)    | NULL     | 'ACTIVE'::character varying
 is_active                    | boolean                  | boolean                  | NULL     | true
 is_deleted                   | boolean                  | boolean                  | NULL     | false
 withdrawn_date               | date                     | date                     | NULL     | -
 withdrawn_reason             | text                     | text                     | NULL     | -
 barcode                      | character varying        | character varying(50)    | NULL     | -
 rfid_tag                     | character varying        | character varying(50)    | NULL     | -
 qr_code_url                  | text                     | text                     | NULL     | -
 metadata                     | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 custom_fields                | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 notes                        | text                     | text                     | NULL     | -
 internal_notes               | text                     | text                     | NULL     | -
 librarian_notes              | text                     | text                     | NULL     | -
 created_by                   | uuid                     | uuid                     | NULL     | -
 created_at                   | timestamp with time zone | timestamp with time zone | NULL     | now()
 updated_at                   | timestamp with time zone | timestamp with time zone | NULL     | now()
(139 rows)


### library_fines

       Column       |           Type           |        Full Type         | Nullable |           Default            
--------------------+--------------------------+--------------------------+----------+------------------------------
 id                 | uuid                     | uuid                     | NOT NULL | uuid_generate_v4()
 school_id          | uuid                     | uuid                     | NOT NULL | -
 academic_year_id   | uuid                     | uuid                     | NOT NULL | -
 fine_code          | character varying        | character varying(50)    | NOT NULL | -
 fine_number        | character varying        | character varying(50)    | NOT NULL | -
 fine_type          | character varying        | character varying(30)    | NOT NULL | -
 library_member_id  | uuid                     | uuid                     | NOT NULL | -
 book_issue_id      | uuid                     | uuid                     | NULL     | -
 member_name        | character varying        | character varying(200)   | NULL     | -
 member_type        | character varying        | character varying(30)    | NULL     | -
 student_id         | uuid                     | uuid                     | NULL     | -
 staff_id           | uuid                     | uuid                     | NULL     | -
 fine_date          | date                     | date                     | NOT NULL | CURRENT_DATE
 total_fine_amount  | numeric                  | numeric                  | NOT NULL | -
 payment_status     | character varying        | character varying(30)    | NULL     | 'PENDING'::character varying
 amount_paid        | numeric                  | numeric                  | NULL     | 0.00
 outstanding_amount | numeric                  | numeric                  | NULL     | -
 is_paid            | boolean                  | boolean                  | NULL     | false
 is_waived          | boolean                  | boolean                  | NULL     | false
 metadata           | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 created_at         | timestamp with time zone | timestamp with time zone | NULL     | now()
 updated_at         | timestamp with time zone | timestamp with time zone | NULL     | now()
(22 rows)


### library_members

            Column             |           Type           |        Full Type         | Nullable |           Default            
-------------------------------+--------------------------+--------------------------+----------+------------------------------
 id                            | uuid                     | uuid                     | NOT NULL | uuid_generate_v4()
 school_id                     | uuid                     | uuid                     | NOT NULL | -
 academic_year_id              | uuid                     | uuid                     | NOT NULL | -
 member_code                   | character varying        | character varying(50)    | NOT NULL | -
 membership_number             | character varying        | character varying(50)    | NOT NULL | -
 member_type                   | character varying        | character varying(30)    | NOT NULL | -
 student_id                    | uuid                     | uuid                     | NULL     | -
 staff_id                      | uuid                     | uuid                     | NULL     | -
 member_name                   | character varying        | character varying(200)   | NOT NULL | -
 member_email                  | character varying        | character varying(100)   | NULL     | -
 member_phone                  | character varying        | character varying(15)    | NULL     | -
 class_id                      | uuid                     | uuid                     | NULL     | -
 section_id                    | uuid                     | uuid                     | NULL     | -
 membership_start_date         | date                     | date                     | NOT NULL | CURRENT_DATE
 membership_end_date           | date                     | date                     | NULL     | -
 membership_status             | character varying        | character varying(30)    | NULL     | 'ACTIVE'::character varying
 is_active                     | boolean                  | boolean                  | NULL     | true
 membership_tier               | character varying        | character varying(30)    | NULL     | 'REGULAR'::character varying
 max_books_allowed             | integer                  | integer                  | NULL     | 3
 max_issue_duration_days       | integer                  | integer                  | NULL     | 14
 max_renewals_allowed          | integer                  | integer                  | NULL     | 2
 can_reserve_books             | boolean                  | boolean                  | NULL     | true
 max_reservations_allowed      | integer                  | integer                  | NULL     | 2
 books_issued_count            | integer                  | integer                  | NULL     | 0
 books_reserved_count          | integer                  | integer                  | NULL     | 0
 has_overdue_books             | boolean                  | boolean                  | NULL     | false
 overdue_books_count           | integer                  | integer                  | NULL     | 0
 total_fine_amount             | numeric                  | numeric                  | NULL     | 0.00
 outstanding_fine              | numeric                  | numeric                  | NULL     | 0.00
 is_suspended                  | boolean                  | boolean                  | NULL     | false
 suspended_date                | date                     | date                     | NULL     | -
 suspension_reason             | text                     | text                     | NULL     | -
 suspension_end_date           | date                     | date                     | NULL     | -
 is_blacklisted                | boolean                  | boolean                  | NULL     | false
 blacklist_reason              | text                     | text                     | NULL     | -
 blacklisted_date              | date                     | date                     | NULL     | -
 total_books_issued            | integer                  | integer                  | NULL     | 0
 total_books_returned          | integer                  | integer                  | NULL     | 0
 total_books_lost              | integer                  | integer                  | NULL     | 0
 total_books_damaged           | integer                  | integer                  | NULL     | 0
 total_fines_paid              | numeric                  | numeric                  | NULL     | 0.00
 total_fines_waived            | numeric                  | numeric                  | NULL     | 0.00
 favorite_genres               | ARRAY                    | ARRAY                    | NULL     | -
 favorite_subjects             | ARRAY                    | ARRAY                    | NULL     | -
 average_books_per_month       | numeric                  | numeric                  | NULL     | -
 last_book_issued_date         | date                     | date                     | NULL     | -
 reading_level                 | character varying        | character varying(20)    | NULL     | -
 preferred_language            | character varying        | character varying(50)    | NULL     | -
 preferred_genres              | ARRAY                    | ARRAY                    | NULL     | -
 reading_interests             | ARRAY                    | ARRAY                    | NULL     | -
 notification_preference       | character varying        | character varying(30)    | NULL     | 'EMAIL'::character varying
 send_due_date_reminders       | boolean                  | boolean                  | NULL     | true
 send_new_arrival_alerts       | boolean                  | boolean                  | NULL     | false
 has_digital_access            | boolean                  | boolean                  | NULL     | false
 digital_library_username      | character varying        | character varying(100)   | NULL     | -
 can_access_ebooks             | boolean                  | boolean                  | NULL     | false
 can_access_journals           | boolean                  | boolean                  | NULL     | false
 has_reference_access          | boolean                  | boolean                  | NULL     | false
 has_rare_books_access         | boolean                  | boolean                  | NULL     | false
 can_access_restricted_section | boolean                  | boolean                  | NULL     | false
 special_permissions           | ARRAY                    | ARRAY                    | NULL     | -
 attendance_count              | integer                  | integer                  | NULL     | 0
 last_library_visit_date       | date                     | date                     | NULL     | -
 membership_score              | numeric                  | numeric                  | NULL     | 0.00
 behavior_rating               | character varying        | character varying(20)    | NULL     | 'GOOD'::character varying
 id_card_issued                | boolean                  | boolean                  | NULL     | false
 id_card_number                | character varying        | character varying(50)    | NULL     | -
 id_card_issue_date            | date                     | date                     | NULL     | -
 id_card_expiry_date           | date                     | date                     | NULL     | -
 metadata                      | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 custom_fields                 | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 notes                         | text                     | text                     | NULL     | -
 internal_notes                | text                     | text                     | NULL     | -
 created_by                    | uuid                     | uuid                     | NULL     | -
 created_at                    | timestamp with time zone | timestamp with time zone | NULL     | now()
 updated_at                    | timestamp with time zone | timestamp with time zone | NULL     | now()
(76 rows)


### medical_checkups

           Column            |           Type           |        Full Type         | Nullable |            Default             
-----------------------------+--------------------------+--------------------------+----------+--------------------------------
 id                          | uuid                     | uuid                     | NOT NULL | uuid_generate_v4()
 school_id                   | uuid                     | uuid                     | NOT NULL | -
 academic_year_id            | uuid                     | uuid                     | NOT NULL | -
 checkup_code                | character varying        | character varying(50)    | NOT NULL | -
 checkup_type                | character varying        | character varying(30)    | NOT NULL | -
 checkup_name                | character varying        | character varying(200)   | NOT NULL | -
 checkup_date                | date                     | date                     | NOT NULL | CURRENT_DATE
 student_id                  | uuid                     | uuid                     | NOT NULL | -
 student_health_profile_id   | uuid                     | uuid                     | NULL     | -
 class_id                    | uuid                     | uuid                     | NULL     | -
 section_id                  | uuid                     | uuid                     | NULL     | -
 doctor_name                 | character varying        | character varying(200)   | NULL     | -
 doctor_qualification        | character varying        | character varying(100)   | NULL     | -
 doctor_registration_number  | character varying        | character varying(50)    | NULL     | -
 conducting_organization     | character varying        | character varying(200)   | NULL     | -
 height_cm                   | numeric                  | numeric                  | NULL     | -
 weight_kg                   | numeric                  | numeric                  | NULL     | -
 bmi                         | numeric                  | numeric                  | NULL     | -
 bmi_category                | character varying        | character varying(30)    | NULL     | -
 chest_measurement_cm        | numeric                  | numeric                  | NULL     | -
 blood_pressure_systolic     | integer                  | integer                  | NULL     | -
 blood_pressure_diastolic    | integer                  | integer                  | NULL     | -
 pulse_rate                  | integer                  | integer                  | NULL     | -
 temperature_fahrenheit      | numeric                  | numeric                  | NULL     | -
 respiratory_rate            | integer                  | integer                  | NULL     | -
 vision_test_done            | boolean                  | boolean                  | NULL     | false
 vision_left_eye             | character varying        | character varying(20)    | NULL     | -
 vision_right_eye            | character varying        | character varying(20)    | NULL     | -
 color_vision_test           | character varying        | character varying(30)    | NULL     | -
 vision_remarks              | text                     | text                     | NULL     | -
 requires_glasses            | boolean                  | boolean                  | NULL     | false
 referred_to_ophthalmologist | boolean                  | boolean                  | NULL     | false
 dental_checkup_done         | boolean                  | boolean                  | NULL     | false
 dental_condition            | character varying        | character varying(50)    | NULL     | -
 cavities_found              | integer                  | integer                  | NULL     | -
 gum_condition               | character varying        | character varying(50)    | NULL     | -
 dental_remarks              | text                     | text                     | NULL     | -
 dental_treatment_required   | boolean                  | boolean                  | NULL     | false
 referred_to_dentist         | boolean                  | boolean                  | NULL     | false
 hearing_test_done           | boolean                  | boolean                  | NULL     | false
 hearing_left_ear            | character varying        | character varying(30)    | NULL     | -
 hearing_right_ear           | character varying        | character varying(30)    | NULL     | -
 hearing_remarks             | text                     | text                     | NULL     | -
 referred_to_ent             | boolean                  | boolean                  | NULL     | false
 general_appearance          | character varying        | character varying(50)    | NULL     | -
 skin_condition              | character varying        | character varying(50)    | NULL     | -
 hair_condition              | character varying        | character varying(50)    | NULL     | -
 nails_condition             | character varying        | character varying(50)    | NULL     | -
 throat_examination          | character varying        | character varying(50)    | NULL     | -
 lymph_nodes                 | character varying        | character varying(50)    | NULL     | -
 heart_sounds                | character varying        | character varying(50)    | NULL     | -
 lung_sounds                 | character varying        | character varying(50)    | NULL     | -
 abdomen_examination         | character varying        | character varying(50)    | NULL     | -
 posture_assessment          | character varying        | character varying(50)    | NULL     | -
 spine_curvature_detected    | boolean                  | boolean                  | NULL     | false
 flat_feet_detected          | boolean                  | boolean                  | NULL     | false
 health_issues_detected      | boolean                  | boolean                  | NULL     | false
 health_issues               | ARRAY                    | ARRAY                    | NULL     | -
 new_conditions_identified   | ARRAY                    | ARRAY                    | NULL     | -
 recommendations             | text                     | text                     | NULL     | -
 follow_up_required          | boolean                  | boolean                  | NULL     | false
 follow_up_date              | date                     | date                     | NULL     | -
 referral_required           | boolean                  | boolean                  | NULL     | false
 referred_to                 | character varying        | character varying(200)   | NULL     | -
 referral_reason             | text                     | text                     | NULL     | -
 medication_prescribed       | boolean                  | boolean                  | NULL     | false
 prescriptions               | text                     | text                     | NULL     | -
 overall_health_status       | character varying        | character varying(30)    | NULL     | 'GOOD'::character varying
 fitness_certificate_issued  | boolean                  | boolean                  | NULL     | false
 fit_for_sports              | boolean                  | boolean                  | NULL     | true
 checkup_report_url          | text                     | text                     | NULL     | -
 prescription_url            | text                     | text                     | NULL     | -
 reports                     | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 status                      | character varying        | character varying(30)    | NULL     | 'COMPLETED'::character varying
 is_completed                | boolean                  | boolean                  | NULL     | true
 metadata                    | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 notes                       | text                     | text                     | NULL     | -
 created_by                  | uuid                     | uuid                     | NULL     | -
 created_at                  | timestamp with time zone | timestamp with time zone | NULL     | now()
 updated_at                  | timestamp with time zone | timestamp with time zone | NULL     | now()
(80 rows)


### medical_incidents

             Column              |           Type           |        Full Type         | Nullable |          Default           
---------------------------------+--------------------------+--------------------------+----------+----------------------------
 id                              | uuid                     | uuid                     | NOT NULL | uuid_generate_v4()
 school_id                       | uuid                     | uuid                     | NOT NULL | -
 academic_year_id                | uuid                     | uuid                     | NOT NULL | -
 incident_code                   | character varying        | character varying(50)    | NOT NULL | -
 incident_number                 | character varying        | character varying(50)    | NOT NULL | -
 student_id                      | uuid                     | uuid                     | NOT NULL | -
 student_health_profile_id       | uuid                     | uuid                     | NULL     | -
 class_id                        | uuid                     | uuid                     | NULL     | -
 section_id                      | uuid                     | uuid                     | NULL     | -
 incident_type                   | character varying        | character varying(50)    | NOT NULL | -
 incident_category               | character varying        | character varying(30)    | NULL     | 'MINOR'::character varying
 incident_date                   | date                     | date                     | NOT NULL | CURRENT_DATE
 incident_time                   | time without time zone   | time without time zone   | NOT NULL | -
 incident_datetime               | timestamp with time zone | timestamp with time zone | NULL     | -
 reported_date                   | date                     | date                     | NOT NULL | CURRENT_DATE
 reported_time                   | time without time zone   | time without time zone   | NULL     | -
 reporting_delay_minutes         | integer                  | integer                  | NULL     | -
 incident_location               | character varying        | character varying(200)   | NOT NULL | -
 location_type                   | character varying        | character varying(50)    | NULL     | -
 specific_location_details       | text                     | text                     | NULL     | -
 floor_number                    | integer                  | integer                  | NULL     | -
 room_number                     | character varying        | character varying(20)    | NULL     | -
 incident_description            | text                     | text                     | NOT NULL | -
 how_incident_occurred           | text                     | text                     | NULL     | -
 injury_type                     | character varying        | character varying(50)    | NULL     | -
 injury_types                    | ARRAY                    | ARRAY                    | NULL     | -
 body_part_affected              | character varying        | character varying(100)   | NULL     | -
 body_parts_affected             | ARRAY                    | ARRAY                    | NULL     | -
 injury_severity                 | character varying        | character varying(30)    | NULL     | 'MINOR'::character varying
 visible_injury                  | boolean                  | boolean                  | NULL     | true
 injury_description              | text                     | text                     | NULL     | -
 bleeding                        | boolean                  | boolean                  | NULL     | false
 bleeding_severity               | character varying        | character varying(20)    | NULL     | -
 fracture_suspected              | boolean                  | boolean                  | NULL     | false
 head_injury                     | boolean                  | boolean                  | NULL     | false
 consciousness_lost              | boolean                  | boolean                  | NULL     | false
 consciousness_duration_minutes  | integer                  | integer                  | NULL     | -
 temperature_fahrenheit          | numeric                  | numeric                  | NULL     | -
 pulse_rate                      | integer                  | integer                  | NULL     | -
 blood_pressure_systolic         | integer                  | integer                  | NULL     | -
 blood_pressure_diastolic        | integer                  | integer                  | NULL     | -
 respiratory_rate                | integer                  | integer                  | NULL     | -
 oxygen_saturation_percentage    | numeric                  | numeric                  | NULL     | -
 witnessed                       | boolean                  | boolean                  | NULL     | false
 witness_count                   | integer                  | integer                  | NULL     | -
 witness_1_name                  | character varying        | character varying(200)   | NULL     | -
 witness_1_type                  | character varying        | character varying(50)    | NULL     | -
 witness_1_statement             | text                     | text                     | NULL     | -
 witness_2_name                  | character varying        | character varying(200)   | NULL     | -
 witness_2_type                  | character varying        | character varying(50)    | NULL     | -
 witness_2_statement             | text                     | text                     | NULL     | -
 witness_3_name                  | character varying        | character varying(200)   | NULL     | -
 witness_3_statement             | text                     | text                     | NULL     | -
 additional_witnesses            | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 reported_by_name                | character varying        | character varying(200)   | NOT NULL | -
 reported_by_role                | character varying        | character varying(50)    | NOT NULL | -
 reported_by_phone               | character varying        | character varying(15)    | NULL     | -
 supervising_staff_name          | character varying        | character varying(200)   | NULL     | -
 supervising_staff_id            | uuid                     | uuid                     | NULL     | -
 first_aid_given                 | boolean                  | boolean                  | NULL     | false
 first_aid_by_name               | character varying        | character varying(200)   | NULL     | -
 first_aid_by_role               | character varying        | character varying(50)    | NULL     | -
 first_aid_given_at              | time without time zone   | time without time zone   | NULL     | -
 first_aid_description           | text                     | text                     | NULL     | -
 first_aid_materials_used        | ARRAY                    | ARRAY                    | NULL     | -
 medical_attention_required      | boolean                  | boolean                  | NULL     | false
 medical_attention_type          | character varying        | character varying(50)    | NULL     | -
 treated_by_school_doctor        | boolean                  | boolean                  | NULL     | false
 doctor_name                     | character varying        | character varying(200)   | NULL     | -
 doctor_phone                    | character varying        | character varying(15)    | NULL     | -
 treatment_given                 | text                     | text                     | NULL     | -
 medication_administered         | ARRAY                    | ARRAY                    | NULL     | -
 hospitalization_required        | boolean                  | boolean                  | NULL     | false
 ambulance_called                | boolean                  | boolean                  | NULL     | false
 ambulance_arrival_time          | time without time zone   | time without time zone   | NULL     | -
 hospital_name                   | character varying        | character varying(200)   | NULL     | -
 hospital_address                | text                     | text                     | NULL     | -
 hospital_phone                  | character varying        | character varying(15)    | NULL     | -
 admitted_to_hospital            | boolean                  | boolean                  | NULL     | false
 admission_date                  | date                     | date                     | NULL     | -
 admission_time                  | time without time zone   | time without time zone   | NULL     | -
 discharge_date                  | date                     | date                     | NULL     | -
 discharge_time                  | time without time zone   | time without time zone   | NULL     | -
 hospital_bill_amount            | numeric                  | numeric                  | NULL     | -
 insurance_claimed               | boolean                  | boolean                  | NULL     | false
 medical_reports                 | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 parent_notified                 | boolean                  | boolean                  | NULL     | false
 parent_notification_method      | character varying        | character varying(30)    | NULL     | -
 parent_notification_time        | time without time zone   | time without time zone   | NULL     | -
 parent_notified_by              | character varying        | character varying(200)   | NULL     | -
 parent_reached_school           | boolean                  | boolean                  | NULL     | false
 parent_arrival_time             | time without time zone   | time without time zone   | NULL     | -
 parent_informed_in_person       | boolean                  | boolean                  | NULL     | false
 emergency_contact_called        | boolean                  | boolean                  | NULL     | false
 emergency_contact_name          | character varying        | character varying(100)   | NULL     | -
 emergency_contact_phone         | character varying        | character varying(15)    | NULL     | -
 student_sent_home               | boolean                  | boolean                  | NULL     | false
 sent_home_time                  | time without time zone   | time without time zone   | NULL     | -
 sent_home_with                  | character varying        | character varying(200)   | NULL     | -
 resumed_classes                 | boolean                  | boolean                  | NULL     | false
 resumed_classes_date            | date                     | date                     | NULL     | -
 absent_days                     | integer                  | integer                  | NULL     | 0
 follow_up_required              | boolean                  | boolean                  | NULL     | false
 follow_up_date                  | date                     | date                     | NULL     | -
 follow_up_completed             | boolean                  | boolean                  | NULL     | false
 follow_up_notes                 | text                     | text                     | NULL     | -
 investigation_required          | boolean                  | boolean                  | NULL     | false
 investigation_conducted         | boolean                  | boolean                  | NULL     | false
 investigation_date              | date                     | date                     | NULL     | -
 investigation_by                | character varying        | character varying(200)   | NULL     | -
 investigation_findings          | text                     | text                     | NULL     | -
 root_cause                      | text                     | text                     | NULL     | -
 preventive_measures             | text                     | text                     | NULL     | -
 corrective_action_taken         | text                     | text                     | NULL     | -
 corrective_action_date          | date                     | date                     | NULL     | -
 staff_responsible               | character varying        | character varying(200)   | NULL     | -
 staff_responsibility_notes      | text                     | text                     | NULL     | -
 disciplinary_action_required    | boolean                  | boolean                  | NULL     | false
 disciplinary_action_taken       | text                     | text                     | NULL     | -
 insurance_notification_required | boolean                  | boolean                  | NULL     | false
 insurance_notified              | boolean                  | boolean                  | NULL     | false
 insurance_claim_number          | character varying        | character varying(50)    | NULL     | -
 legal_action_potential          | boolean                  | boolean                  | NULL     | false
 legal_notes                     | text                     | text                     | NULL     | -
 incident_report_filed           | boolean                  | boolean                  | NULL     | false
 incident_report_number          | character varying        | character varying(50)    | NULL     | -
 incident_report_date            | date                     | date                     | NULL     | -
 police_informed                 | boolean                  | boolean                  | NULL     | false
 police_station_name             | character varying        | character varying(200)   | NULL     | -
 fir_number                      | character varying        | character varying(50)    | NULL     | -
 photos_taken                    | boolean                  | boolean                  | NULL     | false
 photo_urls                      | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 evidence_collected              | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 medical_certificate_url         | text                     | text                     | NULL     | -
 hospital_discharge_summary_url  | text                     | text                     | NULL     | -
 police_report_url               | text                     | text                     | NULL     | -
 document_urls                   | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 severity                        | character varying        | character varying(30)    | NULL     | 'MINOR'::character varying
 lost_time_incident              | boolean                  | boolean                  | NULL     | false
 recordable_incident             | boolean                  | boolean                  | NULL     | false
 incident_status                 | character varying        | character varying(30)    | NULL     | 'OPEN'::character varying
 resolution_date                 | date                     | date                     | NULL     | -
 resolution_notes                | text                     | text                     | NULL     | -
 is_closed                       | boolean                  | boolean                  | NULL     | false
 closed_by                       | uuid                     | uuid                     | NULL     | -
 closed_date                     | date                     | date                     | NULL     | -
 metadata                        | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 custom_fields                   | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 notes                           | text                     | text                     | NULL     | -
 internal_notes                  | text                     | text                     | NULL     | -
 created_by                      | uuid                     | uuid                     | NULL     | -
 created_at                      | timestamp with time zone | timestamp with time zone | NULL     | now()
 updated_at                      | timestamp with time zone | timestamp with time zone | NULL     | now()
(153 rows)


### mess_management

   Column   |           Type           |        Full Type         | Nullable |      Default       
------------+--------------------------+--------------------------+----------+--------------------
 id         | uuid                     | uuid                     | NOT NULL | uuid_generate_v4()
 school_id  | uuid                     | uuid                     | NOT NULL | -
 menu_code  | character varying        | character varying(50)    | NOT NULL | -
 menu_date  | date                     | date                     | NOT NULL | -
 meal_type  | character varying        | character varying(30)    | NOT NULL | -
 menu_items | ARRAY                    | ARRAY                    | NULL     | -
 metadata   | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 created_at | timestamp with time zone | timestamp with time zone | NULL     | now()
(8 rows)


### message_templates

            Column             |           Type           |        Full Type         | Nullable |              Default               
-------------------------------+--------------------------+--------------------------+----------+------------------------------------
 id                            | uuid                     | uuid                     | NOT NULL | gen_random_uuid()
 school_id                     | uuid                     | uuid                     | NOT NULL | -
 template_code                 | character varying        | character varying(50)    | NOT NULL | -
 template_name                 | character varying        | character varying(200)   | NOT NULL | -
 template_description          | text                     | text                     | NULL     | -
 template_category             | character varying        | character varying(50)    | NULL     | -
 template_subcategory          | character varying        | character varying(50)    | NULL     | -
 template_type                 | character varying        | character varying(30)    | NULL     | -
 channel_type                  | character varying        | character varying(30)    | NOT NULL | -
 is_multi_channel              | boolean                  | boolean                  | NULL     | false
 supported_channels            | ARRAY                    | ARRAY                    | NULL     | ARRAY['SMS'::text]
 subject                       | text                     | text                     | NULL     | -
 preheader                     | text                     | text                     | NULL     | -
 body_text                     | text                     | text                     | NOT NULL | -
 body_html                     | text                     | text                     | NULL     | -
 sms_text                      | text                     | text                     | NULL     | -
 whatsapp_text                 | text                     | text                     | NULL     | -
 preview_text                  | text                     | text                     | NULL     | -
 max_length                    | integer                  | integer                  | NULL     | -
 min_length                    | integer                  | integer                  | NULL     | -
 character_count               | integer                  | integer                  | NULL     | -
 sms_segment_count             | integer                  | integer                  | NULL     | -
 estimated_cost                | numeric                  | numeric                  | NULL     | -
 variables                     | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 total_variables               | integer                  | integer                  | NULL     | 0
 required_variables            | integer                  | integer                  | NULL     | 0
 variable_validation_rules     | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 sample_data                   | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 rendered_preview              | text                     | text                     | NULL     | -
 dlt_template_id               | character varying        | character varying(50)    | NULL     | -
 dlt_content_template          | text                     | text                     | NULL     | -
 dlt_template_type             | character varying        | character varying(30)    | NULL     | -
 dlt_approved                  | boolean                  | boolean                  | NULL     | false
 dlt_approval_date             | date                     | date                     | NULL     | -
 dlt_approval_number           | character varying        | character varying(50)    | NULL     | -
 dlt_expiry_date               | date                     | date                     | NULL     | -
 dlt_principal_entity_id       | character varying        | character varying(50)    | NULL     | -
 dlt_entity_id                 | character varying        | character varying(50)    | NULL     | -
 requires_dlt_approval         | boolean                  | boolean                  | NULL     | false
 whatsapp_template_name        | character varying        | character varying(200)   | NULL     | -
 whatsapp_template_id          | character varying        | character varying(100)   | NULL     | -
 whatsapp_language             | character varying        | character varying(10)    | NULL     | 'en'::character varying
 whatsapp_category             | character varying        | character varying(30)    | NULL     | -
 whatsapp_status               | character varying        | character varying(30)    | NULL     | -
 whatsapp_header_type          | character varying        | character varying(20)    | NULL     | -
 whatsapp_header_content       | text                     | text                     | NULL     | -
 whatsapp_footer               | text                     | text                     | NULL     | -
 whatsapp_buttons              | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 language                      | character varying        | character varying(10)    | NULL     | 'en'::character varying
 supports_multilingual         | boolean                  | boolean                  | NULL     | false
 available_languages           | ARRAY                    | ARRAY                    | NULL     | ARRAY['en'::text]
 translations                  | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 auto_detect_language          | boolean                  | boolean                  | NULL     | false
 fallback_language             | character varying        | character varying(10)    | NULL     | 'en'::character varying
 personalization_enabled       | boolean                  | boolean                  | NULL     | true
 personalization_rules         | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 dynamic_content_enabled       | boolean                  | boolean                  | NULL     | false
 dynamic_content_rules         | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 optimal_send_time             | time without time zone   | time without time zone   | NULL     | -
 avoid_time_ranges             | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 timezone_aware                | boolean                  | boolean                  | NULL     | true
 ab_testing_enabled            | boolean                  | boolean                  | NULL     | false
 ab_variant_id                 | character varying        | character varying(50)    | NULL     | -
 ab_test_percentage            | numeric                  | numeric                  | NULL     | -
 total_sent                    | integer                  | integer                  | NULL     | 0
 total_delivered               | integer                  | integer                  | NULL     | 0
 total_failed                  | integer                  | integer                  | NULL     | 0
 total_opened                  | integer                  | integer                  | NULL     | 0
 total_clicked                 | integer                  | integer                  | NULL     | 0
 delivery_rate                 | numeric                  | numeric                  | NULL     | -
 open_rate                     | numeric                  | numeric                  | NULL     | -
 click_rate                    | numeric                  | numeric                  | NULL     | -
 last_used_at                  | timestamp with time zone | timestamp with time zone | NULL     | -
 average_delivery_time_minutes | numeric                  | numeric                  | NULL     | -
 average_response_time_hours   | numeric                  | numeric                  | NULL     | -
 requires_consent              | boolean                  | boolean                  | NULL     | false
 consent_type                  | character varying        | character varying(30)    | NULL     | -
 rate_limit_per_hour           | integer                  | integer                  | NULL     | -
 daily_send_limit              | integer                  | integer                  | NULL     | -
 restricted_hours              | boolean                  | boolean                  | NULL     | false
 send_after_time               | time without time zone   | time without time zone   | NULL     | '08:00:00'::time without time zone
 send_before_time              | time without time zone   | time without time zone   | NULL     | '21:00:00'::time without time zone
 weekend_sending_allowed       | boolean                  | boolean                  | NULL     | true
 holiday_sending_allowed       | boolean                  | boolean                  | NULL     | false
 requires_approval             | boolean                  | boolean                  | NULL     | false
 approval_status               | character varying        | character varying(30)    | NULL     | 'DRAFT'::character varying
 approved_by                   | uuid                     | uuid                     | NULL     | -
 approved_at                   | timestamp with time zone | timestamp with time zone | NULL     | -
 approval_notes                | text                     | text                     | NULL     | -
 rejected_by                   | uuid                     | uuid                     | NULL     | -
 rejection_reason              | text                     | text                     | NULL     | -
 version_number                | integer                  | integer                  | NULL     | 1
 is_latest_version             | boolean                  | boolean                  | NULL     | true
 previous_version_id           | uuid                     | uuid                     | NULL     | -
 version_notes                 | text                     | text                     | NULL     | -
 is_active                     | boolean                  | boolean                  | NULL     | true
 is_default                    | boolean                  | boolean                  | NULL     | false
 activation_date               | date                     | date                     | NULL     | -
 expiry_date                   | date                     | date                     | NULL     | -
 is_archived                   | boolean                  | boolean                  | NULL     | false
 archived_at                   | timestamp with time zone | timestamp with time zone | NULL     | -
 archive_reason                | text                     | text                     | NULL     | -
 tags                          | ARRAY                    | ARRAY                    | NULL     | -
 metadata                      | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 notes                         | text                     | text                     | NULL     | -
 created_by                    | uuid                     | uuid                     | NULL     | -
 created_at                    | timestamp with time zone | timestamp with time zone | NULL     | now()
 updated_at                    | timestamp with time zone | timestamp with time zone | NULL     | now()
(108 rows)


### parent_communication_portal

         Column          |           Type           |        Full Type         | Nullable |           Default           
-------------------------+--------------------------+--------------------------+----------+-----------------------------
 id                      | uuid                     | uuid                     | NOT NULL | gen_random_uuid()
 school_id               | uuid                     | uuid                     | NOT NULL | -
 conversation_id         | character varying        | character varying(100)   | NOT NULL | -
 thread_id               | character varying        | character varying(100)   | NULL     | -
 message_id              | character varying        | character varying(100)   | NULL     | -
 parent_id               | uuid                     | uuid                     | NULL     | -
 parent_name             | character varying        | character varying(200)   | NULL     | -
 teacher_id              | uuid                     | uuid                     | NULL     | -
 teacher_name            | character varying        | character varying(200)   | NULL     | -
 admin_id                | uuid                     | uuid                     | NULL     | -
 student_id              | uuid                     | uuid                     | NULL     | -
 student_name            | character varying        | character varying(200)   | NULL     | -
 class_id                | uuid                     | uuid                     | NULL     | -
 section_id              | uuid                     | uuid                     | NULL     | -
 sender_id               | uuid                     | uuid                     | NOT NULL | -
 sender_type             | character varying        | character varying(20)    | NOT NULL | -
 sender_name             | character varying        | character varying(200)   | NULL     | -
 sender_user_id          | uuid                     | uuid                     | NULL     | -
 recipient_id            | uuid                     | uuid                     | NULL     | -
 recipient_type          | character varying        | character varying(20)    | NULL     | -
 recipient_name          | character varying        | character varying(200)   | NULL     | -
 recipient_user_id       | uuid                     | uuid                     | NULL     | -
 message_type            | character varying        | character varying(30)    | NULL     | 'TEXT'::character varying
 category                | character varying        | character varying(50)    | NULL     | -
 subcategory             | character varying        | character varying(50)    | NULL     | -
 subject                 | character varying        | character varying(200)   | NULL     | -
 message                 | text                     | text                     | NOT NULL | -
 message_html            | text                     | text                     | NULL     | -
 message_preview         | text                     | text                     | NULL     | -
 has_attachments         | boolean                  | boolean                  | NULL     | false
 attachments             | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 attachment_count        | integer                  | integer                  | NULL     | 0
 has_images              | boolean                  | boolean                  | NULL     | false
 images                  | ARRAY                    | ARRAY                    | NULL     | -
 has_documents           | boolean                  | boolean                  | NULL     | false
 documents               | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 parent_message_id       | uuid                     | uuid                     | NULL     | -
 is_reply                | boolean                  | boolean                  | NULL     | false
 reply_to_message_id     | uuid                     | uuid                     | NULL     | -
 is_forward              | boolean                  | boolean                  | NULL     | false
 forwarded_from_id       | uuid                     | uuid                     | NULL     | -
 is_thread_starter       | boolean                  | boolean                  | NULL     | false
 thread_message_count    | integer                  | integer                  | NULL     | 1
 conversation_status     | character varying        | character varying(30)    | NULL     | 'ACTIVE'::character varying
 is_read                 | boolean                  | boolean                  | NULL     | false
 read_at                 | timestamp with time zone | timestamp with time zone | NULL     | -
 read_by_recipient       | boolean                  | boolean                  | NULL     | false
 read_by_recipient_at    | timestamp with time zone | timestamp with time zone | NULL     | -
 delivery_status         | character varying        | character varying(30)    | NULL     | 'SENT'::character varying
 delivered_at            | timestamp with time zone | timestamp with time zone | NULL     | -
 priority                | character varying        | character varying(20)    | NULL     | 'NORMAL'::character varying
 is_important            | boolean                  | boolean                  | NULL     | false
 is_urgent               | boolean                  | boolean                  | NULL     | false
 marked_important_by     | uuid                     | uuid                     | NULL     | -
 is_flagged              | boolean                  | boolean                  | NULL     | false
 flagged_at              | timestamp with time zone | timestamp with time zone | NULL     | -
 flagged_by              | uuid                     | uuid                     | NULL     | -
 is_starred              | boolean                  | boolean                  | NULL     | false
 starred_at              | timestamp with time zone | timestamp with time zone | NULL     | -
 labels                  | ARRAY                    | ARRAY                    | NULL     | -
 tags                    | ARRAY                    | ARRAY                    | NULL     | -
 requires_response       | boolean                  | boolean                  | NULL     | false
 response_due_date       | date                     | date                     | NULL     | -
 is_responded            | boolean                  | boolean                  | NULL     | false
 responded_at            | timestamp with time zone | timestamp with time zone | NULL     | -
 responded_by            | uuid                     | uuid                     | NULL     | -
 response_time_hours     | numeric                  | numeric                  | NULL     | -
 is_escalated            | boolean                  | boolean                  | NULL     | false
 escalated_at            | timestamp with time zone | timestamp with time zone | NULL     | -
 escalated_to            | uuid                     | uuid                     | NULL     | -
 escalation_reason       | text                     | text                     | NULL     | -
 escalation_level        | integer                  | integer                  | NULL     | 0
 has_action_items        | boolean                  | boolean                  | NULL     | false
 action_items            | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 action_completed        | boolean                  | boolean                  | NULL     | false
 action_completed_at     | timestamp with time zone | timestamp with time zone | NULL     | -
 sentiment_score         | numeric                  | numeric                  | NULL     | -
 sentiment_label         | character varying        | character varying(20)    | NULL     | -
 contains_complaint      | boolean                  | boolean                  | NULL     | false
 complaint_severity      | character varying        | character varying(20)    | NULL     | -
 is_private              | boolean                  | boolean                  | NULL     | false
 is_confidential         | boolean                  | boolean                  | NULL     | false
 visible_to_teachers     | boolean                  | boolean                  | NULL     | true
 visible_to_admin        | boolean                  | boolean                  | NULL     | true
 visibility_restrictions | jsonb                    | jsonb                    | NULL     | -
 is_archived             | boolean                  | boolean                  | NULL     | false
 archived_at             | timestamp with time zone | timestamp with time zone | NULL     | -
 archived_by             | uuid                     | uuid                     | NULL     | -
 archive_reason          | text                     | text                     | NULL     | -
 auto_archive            | boolean                  | boolean                  | NULL     | false
 auto_archive_after_days | integer                  | integer                  | NULL     | 90
 is_spam                 | boolean                  | boolean                  | NULL     | false
 marked_spam_at          | timestamp with time zone | timestamp with time zone | NULL     | -
 marked_spam_by          | uuid                     | uuid                     | NULL     | -
 is_moderated            | boolean                  | boolean                  | NULL     | false
 moderated_by            | uuid                     | uuid                     | NULL     | -
 moderation_notes        | text                     | text                     | NULL     | -
 notify_recipient        | boolean                  | boolean                  | NULL     | true
 notification_sent       | boolean                  | boolean                  | NULL     | false
 notification_sent_at    | timestamp with time zone | timestamp with time zone | NULL     | -
 email_notification_sent | boolean                  | boolean                  | NULL     | false
 sms_notification_sent   | boolean                  | boolean                  | NULL     | false
 sent_from_device        | character varying        | character varying(30)    | NULL     | -
 sent_from_platform      | character varying        | character varying(20)    | NULL     | -
 sent_from_app_version   | character varying        | character varying(20)    | NULL     | -
 user_agent              | text                     | text                     | NULL     | -
 sender_ip               | character varying        | character varying(50)    | NULL     | -
 metadata                | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 custom_fields           | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 notes                   | text                     | text                     | NULL     | -
 internal_notes          | text                     | text                     | NULL     | -
 created_at              | timestamp with time zone | timestamp with time zone | NULL     | now()
 updated_at              | timestamp with time zone | timestamp with time zone | NULL     | now()
(113 rows)


### parents_guardians

        Column        |           Type           |        Full Type         | Nullable |      Default      
----------------------+--------------------------+--------------------------+----------+-------------------
 id                   | uuid                     | uuid                     | NOT NULL | gen_random_uuid()
 school_id            | uuid                     | uuid                     | NOT NULL | -
 user_profile_id      | uuid                     | uuid                     | NULL     | -
 first_name           | character varying        | character varying(100)   | NOT NULL | -
 middle_name          | character varying        | character varying(100)   | NULL     | -
 last_name            | character varying        | character varying(100)   | NOT NULL | -
 relationship         | character varying        | character varying(50)    | NOT NULL | -
 primary_phone        | character varying        | character varying(15)    | NOT NULL | -
 secondary_phone      | character varying        | character varying(15)    | NULL     | -
 email                | character varying        | character varying(100)   | NULL     | -
 whatsapp_number      | character varying        | character varying(15)    | NULL     | -
 occupation           | character varying        | character varying(100)   | NULL     | -
 organization         | character varying        | character varying(200)   | NULL     | -
 designation          | character varying        | character varying(100)   | NULL     | -
 annual_income        | numeric                  | numeric                  | NULL     | -
 address_line1        | character varying        | character varying(200)   | NULL     | -
 city                 | character varying        | character varying(100)   | NULL     | -
 state                | character varying        | character varying(100)   | NULL     | -
 postal_code          | character varying        | character varying(10)    | NULL     | -
 is_emergency_contact | boolean                  | boolean                  | NULL     | true
 photo_url            | text                     | text                     | NULL     | -
 aadhar_number        | character varying        | character varying(12)    | NULL     | -
 is_active            | boolean                  | boolean                  | NOT NULL | true
 created_at           | timestamp with time zone | timestamp with time zone | NOT NULL | now()
 updated_at           | timestamp with time zone | timestamp with time zone | NOT NULL | now()
(25 rows)


### prescriptions_medications

             Column             |           Type           |        Full Type         | Nullable |           Default            
--------------------------------+--------------------------+--------------------------+----------+------------------------------
 id                             | uuid                     | uuid                     | NOT NULL | uuid_generate_v4()
 school_id                      | uuid                     | uuid                     | NOT NULL | -
 academic_year_id               | uuid                     | uuid                     | NULL     | -
 prescription_code              | character varying        | character varying(50)    | NOT NULL | -
 prescription_number            | character varying        | character varying(50)    | NOT NULL | -
 student_id                     | uuid                     | uuid                     | NOT NULL | -
 student_health_profile_id      | uuid                     | uuid                     | NULL     | -
 class_id                       | uuid                     | uuid                     | NULL     | -
 section_id                     | uuid                     | uuid                     | NULL     | -
 prescription_type              | character varying        | character varying(30)    | NULL     | 'REGULAR'::character varying
 prescribed_date                | date                     | date                     | NOT NULL | CURRENT_DATE
 prescribed_time                | time without time zone   | time without time zone   | NULL     | -
 prescribed_by                  | character varying        | character varying(200)   | NOT NULL | -
 doctor_qualification           | character varying        | character varying(100)   | NULL     | -
 doctor_registration_number     | character varying        | character varying(50)    | NOT NULL | -
 doctor_phone                   | character varying        | character varying(15)    | NULL     | -
 doctor_email                   | character varying        | character varying(100)   | NULL     | -
 prescribing_hospital_clinic    | character varying        | character varying(200)   | NULL     | -
 prescription_source            | character varying        | character varying(50)    | NULL     | -
 diagnosis                      | text                     | text                     | NOT NULL | -
 diagnosis_code                 | character varying        | character varying(20)    | NULL     | -
 chief_complaint                | text                     | text                     | NULL     | -
 symptoms                       | ARRAY                    | ARRAY                    | NULL     | -
 related_to_incident            | boolean                  | boolean                  | NULL     | false
 medical_incident_id            | uuid                     | uuid                     | NULL     | -
 infirmary_visit_id             | uuid                     | uuid                     | NULL     | -
 medication_name                | character varying        | character varying(200)   | NOT NULL | -
 medication_generic_name        | character varying        | character varying(200)   | NULL     | -
 medication_brand_name          | character varying        | character varying(200)   | NULL     | -
 medication_type                | character varying        | character varying(50)    | NULL     | -
 medication_category            | character varying        | character varying(50)    | NULL     | -
 dosage                         | character varying        | character varying(100)   | NOT NULL | -
 dosage_strength                | character varying        | character varying(50)    | NULL     | -
 dosage_unit                    | character varying        | character varying(20)    | NULL     | -
 frequency                      | character varying        | character varying(100)   | NOT NULL | -
 frequency_times_per_day        | integer                  | integer                  | NULL     | -
 timing                         | character varying        | character varying(200)   | NULL     | -
 timing_details                 | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 duration_days                  | integer                  | integer                  | NULL     | -
 duration_description           | character varying        | character varying(100)   | NULL     | -
 start_date                     | date                     | date                     | NOT NULL | -
 end_date                       | date                     | date                     | NULL     | -
 is_ongoing                     | boolean                  | boolean                  | NULL     | false
 quantity_prescribed            | integer                  | integer                  | NULL     | -
 quantity_unit                  | character varying        | character varying(20)    | NULL     | -
 refills_allowed                | integer                  | integer                  | NULL     | 0
 refills_remaining              | integer                  | integer                  | NULL     | -
 instructions                   | text                     | text                     | NOT NULL | -
 special_instructions           | text                     | text                     | NULL     | -
 route_of_administration        | character varying        | character varying(50)    | NULL     | -
 food_interaction               | character varying        | character varying(100)   | NULL     | -
 precautions                    | ARRAY                    | ARRAY                    | NULL     | -
 contraindications              | ARRAY                    | ARRAY                    | NULL     | -
 possible_side_effects          | ARRAY                    | ARRAY                    | NULL     | -
 drug_interactions              | text                     | text                     | NULL     | -
 to_be_dispensed_at_school      | boolean                  | boolean                  | NULL     | false
 dispensed_by_school            | boolean                  | boolean                  | NULL     | false
 dispensed_date                 | date                     | date                     | NULL     | -
 dispensed_by                   | character varying        | character varying(200)   | NULL     | -
 dispensed_quantity             | integer                  | integer                  | NULL     | -
 pharmacy_name                  | character varying        | character varying(200)   | NULL     | -
 pharmacy_address               | text                     | text                     | NULL     | -
 pharmacy_phone                 | character varying        | character varying(15)    | NULL     | -
 medication_cost                | numeric                  | numeric                  | NULL     | -
 insurance_covered              | boolean                  | boolean                  | NULL     | false
 insurance_claim_amount         | numeric                  | numeric                  | NULL     | -
 reimbursement_applicable       | boolean                  | boolean                  | NULL     | false
 to_be_administered_at_school   | boolean                  | boolean                  | NULL     | false
 parent_authorization_required  | boolean                  | boolean                  | NULL     | true
 parent_authorization_obtained  | boolean                  | boolean                  | NULL     | false
 authorization_date             | date                     | date                     | NULL     | -
 authorization_form_url         | text                     | text                     | NULL     | -
 self_administered              | boolean                  | boolean                  | NULL     | false
 supervised_administration      | boolean                  | boolean                  | NULL     | true
 supervising_staff_name         | character varying        | character varying(200)   | NULL     | -
 storage_instructions           | text                     | text                     | NULL     | -
 storage_location               | character varying        | character varying(100)   | NULL     | -
 total_doses_to_be_given        | integer                  | integer                  | NULL     | -
 doses_administered             | integer                  | integer                  | NULL     | 0
 doses_missed                   | integer                  | integer                  | NULL     | 0
 administration_log             | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 medication_effective           | boolean                  | boolean                  | NULL     | -
 effectiveness_notes            | text                     | text                     | NULL     | -
 side_effects_observed          | boolean                  | boolean                  | NULL     | false
 observed_side_effects          | ARRAY                    | ARRAY                    | NULL     | -
 side_effects_details           | text                     | text                     | NULL     | -
 adverse_reaction               | boolean                  | boolean                  | NULL     | false
 adverse_reaction_details       | text                     | text                     | NULL     | -
 medication_stopped             | boolean                  | boolean                  | NULL     | false
 stopped_date                   | date                     | date                     | NULL     | -
 stopped_reason                 | text                     | text                     | NULL     | -
 follow_up_required             | boolean                  | boolean                  | NULL     | false
 follow_up_date                 | date                     | date                     | NULL     | -
 follow_up_completed            | boolean                  | boolean                  | NULL     | false
 follow_up_notes                | text                     | text                     | NULL     | -
 renewable                      | boolean                  | boolean                  | NULL     | false
 renewal_date                   | date                     | date                     | NULL     | -
 renewed                        | boolean                  | boolean                  | NULL     | false
 prescription_image_url         | text                     | text                     | NULL     | -
 prescription_pdf_url           | text                     | text                     | NULL     | -
 lab_reports                    | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 supporting_documents           | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 parent_notified                | boolean                  | boolean                  | NULL     | false
 parent_notification_date       | date                     | date                     | NULL     | -
 parent_acknowledgment_received | boolean                  | boolean                  | NULL     | false
 compliance_percentage          | numeric                  | numeric                  | NULL     | -
 non_compliance_reasons         | ARRAY                    | ARRAY                    | NULL     | -
 status                         | character varying        | character varying(30)    | NULL     | 'ACTIVE'::character varying
 is_active                      | boolean                  | boolean                  | NULL     | true
 metadata                       | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 notes                          | text                     | text                     | NULL     | -
 pharmacist_notes               | text                     | text                     | NULL     | -
 created_by                     | uuid                     | uuid                     | NULL     | -
 created_at                     | timestamp with time zone | timestamp with time zone | NULL     | now()
 updated_at                     | timestamp with time zone | timestamp with time zone | NULL     | now()
(115 rows)


### purchase_orders

             Column             |           Type           |        Full Type         | Nullable |           Default            
--------------------------------+--------------------------+--------------------------+----------+------------------------------
 id                             | uuid                     | uuid                     | NOT NULL | uuid_generate_v4()
 school_id                      | uuid                     | uuid                     | NOT NULL | -
 academic_year_id               | uuid                     | uuid                     | NULL     | -
 po_number                      | character varying        | character varying(50)    | NOT NULL | -
 po_date                        | date                     | date                     | NOT NULL | CURRENT_DATE
 po_type                        | character varying        | character varying(30)    | NULL     | 'REGULAR'::character varying
 vendor_id                      | uuid                     | uuid                     | NOT NULL | -
 vendor_name                    | character varying        | character varying(200)   | NOT NULL | -
 vendor_code                    | character varying        | character varying(50)    | NULL     | -
 vendor_gst_number              | character varying        | character varying(20)    | NULL     | -
 requisition_number             | character varying        | character varying(50)    | NULL     | -
 requisition_date               | date                     | date                     | NULL     | -
 requisitioned_by               | character varying        | character varying(200)   | NULL     | -
 requisition_department         | character varying        | character varying(100)   | NULL     | -
 order_purpose                  | text                     | text                     | NULL     | -
 order_priority                 | character varying        | character varying(20)    | NULL     | 'MEDIUM'::character varying
 line_items                     | jsonb                    | jsonb                    | NOT NULL | -
 total_line_items               | integer                  | integer                  | NOT NULL | -
 subtotal_amount                | numeric                  | numeric                  | NOT NULL | -
 discount_type                  | character varying        | character varying(20)    | NULL     | -
 discount_percentage            | numeric                  | numeric                  | NULL     | -
 discount_amount                | numeric                  | numeric                  | NULL     | -
 amount_after_discount          | numeric                  | numeric                  | NULL     | -
 cgst_percentage                | numeric                  | numeric                  | NULL     | -
 cgst_amount                    | numeric                  | numeric                  | NULL     | -
 sgst_percentage                | numeric                  | numeric                  | NULL     | -
 sgst_amount                    | numeric                  | numeric                  | NULL     | -
 igst_percentage                | numeric                  | numeric                  | NULL     | -
 igst_amount                    | numeric                  | numeric                  | NULL     | -
 total_gst_amount               | numeric                  | numeric                  | NULL     | -
 shipping_charges               | numeric                  | numeric                  | NULL     | 0.00
 packing_charges                | numeric                  | numeric                  | NULL     | 0.00
 handling_charges               | numeric                  | numeric                  | NULL     | 0.00
 insurance_charges              | numeric                  | numeric                  | NULL     | 0.00
 other_charges                  | numeric                  | numeric                  | NULL     | 0.00
 other_charges_description      | text                     | text                     | NULL     | -
 total_amount                   | numeric                  | numeric                  | NOT NULL | -
 amount_in_words                | character varying        | character varying(500)   | NULL     | -
 payment_terms                  | character varying        | character varying(30)    | NOT NULL | -
 advance_payment_required       | boolean                  | boolean                  | NULL     | false
 advance_payment_percentage     | numeric                  | numeric                  | NULL     | -
 advance_payment_amount         | numeric                  | numeric                  | NULL     | -
 advance_paid                   | boolean                  | boolean                  | NULL     | false
 advance_payment_date           | date                     | date                     | NULL     | -
 delivery_address               | text                     | text                     | NOT NULL | -
 delivery_location              | character varying        | character varying(200)   | NULL     | -
 delivery_contact_person        | character varying        | character varying(100)   | NULL     | -
 delivery_contact_phone         | character varying        | character varying(15)    | NULL     | -
 expected_delivery_date         | date                     | date                     | NOT NULL | -
 delivery_time_period_days      | integer                  | integer                  | NULL     | -
 partial_delivery_allowed       | boolean                  | boolean                  | NULL     | false
 delivery_terms                 | character varying        | character varying(50)    | NULL     | -
 delivery_instructions          | text                     | text                     | NULL     | -
 shipping_method                | character varying        | character varying(50)    | NULL     | -
 shipping_tracking_number       | character varying        | character varying(100)   | NULL     | -
 inspection_required            | boolean                  | boolean                  | NULL     | true
 inspection_criteria            | text                     | text                     | NULL     | -
 quality_check_required         | boolean                  | boolean                  | NULL     | true
 terms_and_conditions           | text                     | text                     | NULL     | -
 special_terms                  | text                     | text                     | NULL     | -
 warranty_terms                 | text                     | text                     | NULL     | -
 return_policy                  | text                     | text                     | NULL     | -
 requires_approval              | boolean                  | boolean                  | NULL     | true
 approval_workflow              | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 current_approval_level         | integer                  | integer                  | NULL     | 0
 approved_by                    | uuid                     | uuid                     | NULL     | -
 approved_date                  | date                     | date                     | NULL     | -
 approval_remarks               | text                     | text                     | NULL     | -
 rejected_by                    | uuid                     | uuid                     | NULL     | -
 rejection_date                 | date                     | date                     | NULL     | -
 rejection_reason               | text                     | text                     | NULL     | -
 budget_head                    | character varying        | character varying(100)   | NULL     | -
 budget_allocated               | numeric                  | numeric                  | NULL     | -
 budget_available               | numeric                  | numeric                  | NULL     | -
 exceeds_budget                 | boolean                  | boolean                  | NULL     | false
 budget_exception_approved      | boolean                  | boolean                  | NULL     | false
 vendor_acknowledgment_received | boolean                  | boolean                  | NULL     | false
 vendor_acknowledgment_date     | date                     | date                     | NULL     | -
 vendor_confirmed_delivery_date | date                     | date                     | NULL     | -
 goods_received                 | boolean                  | boolean                  | NULL     | false
 partial_receipt                | boolean                  | boolean                  | NULL     | false
 receipt_history                | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 total_received_quantity        | numeric                  | numeric                  | NULL     | 0
 total_accepted_quantity        | numeric                  | numeric                  | NULL     | 0
 total_rejected_quantity        | numeric                  | numeric                  | NULL     | 0
 grn_numbers                    | ARRAY                    | ARRAY                    | NULL     | -
 invoice_received               | boolean                  | boolean                  | NULL     | false
 vendor_invoice_number          | character varying        | character varying(50)    | NULL     | -
 vendor_invoice_date            | date                     | date                     | NULL     | -
 vendor_invoice_amount          | numeric                  | numeric                  | NULL     | -
 invoice_url                    | text                     | text                     | NULL     | -
 payment_status                 | character varying        | character varying(30)    | NULL     | 'PENDING'::character varying
 amount_paid                    | numeric                  | numeric                  | NULL     | 0.00
 amount_pending                 | numeric                  | numeric                  | NULL     | -
 payment_history                | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 last_payment_date              | date                     | date                     | NULL     | -
 payment_due_date               | date                     | date                     | NULL     | -
 po_fulfilled                   | boolean                  | boolean                  | NULL     | false
 fulfillment_date               | date                     | date                     | NULL     | -
 fulfillment_percentage         | numeric                  | numeric                  | NULL     | -
 po_closed                      | boolean                  | boolean                  | NULL     | false
 closure_date                   | date                     | date                     | NULL     | -
 closure_reason                 | text                     | text                     | NULL     | -
 amendment_count                | integer                  | integer                  | NULL     | 0
 amendments                     | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 status                         | character varying        | character varying(30)    | NULL     | 'DRAFT'::character varying
 cancellation_date              | date                     | date                     | NULL     | -
 cancellation_reason            | text                     | text                     | NULL     | -
 cancelled_by                   | uuid                     | uuid                     | NULL     | -
 on_time_delivery               | boolean                  | boolean                  | NULL     | -
 quality_met                    | boolean                  | boolean                  | NULL     | -
 vendor_performance_rating      | numeric                  | numeric                  | NULL     | -
 performance_remarks            | text                     | text                     | NULL     | -
 po_document_url                | text                     | text                     | NULL     | -
 vendor_quotation_url           | text                     | text                     | NULL     | -
 attachments                    | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 email_sent_to_vendor           | boolean                  | boolean                  | NULL     | false
 email_sent_date                | date                     | date                     | NULL     | -
 reminder_sent_count            | integer                  | integer                  | NULL     | 0
 last_reminder_date             | date                     | date                     | NULL     | -
 metadata                       | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 custom_fields                  | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 notes                          | text                     | text                     | NULL     | -
 internal_remarks               | text                     | text                     | NULL     | -
 created_by                     | uuid                     | uuid                     | NULL     | -
 created_at                     | timestamp with time zone | timestamp with time zone | NULL     | now()
 updated_at                     | timestamp with time zone | timestamp with time zone | NULL     | now()
(127 rows)


### push_notifications

          Column           |           Type           |        Full Type         | Nullable |           Default            
---------------------------+--------------------------+--------------------------+----------+------------------------------
 id                        | uuid                     | uuid                     | NOT NULL | gen_random_uuid()
 school_id                 | uuid                     | uuid                     | NOT NULL | -
 notification_code         | character varying        | character varying(50)    | NULL     | -
 notification_uuid         | uuid                     | uuid                     | NULL     | gen_random_uuid()
 recipient_id              | uuid                     | uuid                     | NOT NULL | -
 recipient_type            | character varying        | character varying(20)    | NULL     | -
 user_id                   | uuid                     | uuid                     | NULL     | -
 recipient_name            | character varying        | character varying(200)   | NULL     | -
 student_id                | uuid                     | uuid                     | NULL     | -
 parent_id                 | uuid                     | uuid                     | NULL     | -
 class_id                  | uuid                     | uuid                     | NULL     | -
 title                     | character varying        | character varying(200)   | NOT NULL | -
 body                      | text                     | text                     | NOT NULL | -
 short_body                | character varying        | character varying(100)   | NULL     | -
 image_url                 | text                     | text                     | NULL     | -
 icon_url                  | text                     | text                     | NULL     | -
 badge_count               | integer                  | integer                  | NULL     | 1
 subtitle                  | character varying        | character varying(200)   | NULL     | -
 summary                   | text                     | text                     | NULL     | -
 large_icon_url            | text                     | text                     | NULL     | -
 big_picture_url           | text                     | text                     | NULL     | -
 android_channel_id        | character varying        | character varying(50)    | NULL     | -
 android_priority          | character varying        | character varying(20)    | NULL     | 'HIGH'::character varying
 android_sound             | character varying        | character varying(50)    | NULL     | -
 android_color             | character varying        | character varying(7)     | NULL     | -
 android_notification_id   | integer                  | integer                  | NULL     | -
 android_group             | character varying        | character varying(50)    | NULL     | -
 android_group_summary     | boolean                  | boolean                  | NULL     | false
 ios_badge                 | integer                  | integer                  | NULL     | -
 ios_sound                 | character varying        | character varying(50)    | NULL     | -
 ios_category              | character varying        | character varying(50)    | NULL     | -
 ios_thread_id             | character varying        | character varying(50)    | NULL     | -
 ios_interruption_level    | character varying        | character varying(20)    | NULL     | 'ACTIVE'::character varying
 ios_relevance_score       | numeric                  | numeric                  | NULL     | -
 click_action              | character varying        | character varying(200)   | NULL     | -
 action_url                | text                     | text                     | NULL     | -
 deep_link                 | text                     | text                     | NULL     | -
 screen_to_open            | character varying        | character varying(100)   | NULL     | -
 route_parameters          | jsonb                    | jsonb                    | NULL     | -
 action_buttons            | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 data                      | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 custom_data               | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 device_tokens             | ARRAY                    | ARRAY                    | NULL     | -
 total_device_tokens       | integer                  | integer                  | NULL     | 0
 platform                  | character varying        | character varying(20)    | NULL     | -
 device_ids                | ARRAY                    | ARRAY                    | NULL     | -
 fcm_token                 | text                     | text                     | NULL     | -
 fcm_message_id            | character varying        | character varying(100)   | NULL     | -
 fcm_response              | jsonb                    | jsonb                    | NULL     | -
 apns_token                | text                     | text                     | NULL     | -
 apns_id                   | character varying        | character varying(100)   | NULL     | -
 apns_response             | jsonb                    | jsonb                    | NULL     | -
 web_push_subscription     | jsonb                    | jsonb                    | NULL     | -
 web_push_endpoint         | text                     | text                     | NULL     | -
 status                    | character varying        | character varying(30)    | NULL     | 'PENDING'::character varying
 queued_at                 | timestamp with time zone | timestamp with time zone | NULL     | -
 sent_at                   | timestamp with time zone | timestamp with time zone | NULL     | -
 delivered_at              | timestamp with time zone | timestamp with time zone | NULL     | -
 clicked_at                | timestamp with time zone | timestamp with time zone | NULL     | -
 dismissed_at              | timestamp with time zone | timestamp with time zone | NULL     | -
 failed_at                 | timestamp with time zone | timestamp with time zone | NULL     | -
 delivery_confirmed        | boolean                  | boolean                  | NULL     | false
 delivery_timestamp        | timestamp with time zone | timestamp with time zone | NULL     | -
 opened                    | boolean                  | boolean                  | NULL     | false
 opened_at                 | timestamp with time zone | timestamp with time zone | NULL     | -
 clicked                   | boolean                  | boolean                  | NULL     | false
 click_count               | integer                  | integer                  | NULL     | 0
 dismissed                 | boolean                  | boolean                  | NULL     | false
 button_clicked            | character varying        | character varying(100)   | NULL     | -
 action_taken              | character varying        | character varying(50)    | NULL     | -
 failure_reason            | text                     | text                     | NULL     | -
 failure_code              | character varying        | character varying(20)    | NULL     | -
 error_message             | text                     | text                     | NULL     | -
 retry_count               | integer                  | integer                  | NULL     | 0
 max_retries               | integer                  | integer                  | NULL     | 3
 priority                  | integer                  | integer                  | NULL     | 1
 scheduled_at              | timestamp with time zone | timestamp with time zone | NULL     | -
 is_scheduled              | boolean                  | boolean                  | NULL     | false
 send_after                | timestamp with time zone | timestamp with time zone | NULL     | -
 expire_at                 | timestamp with time zone | timestamp with time zone | NULL     | -
 time_to_live_seconds      | integer                  | integer                  | NULL     | 86400
 campaign_id               | character varying        | character varying(100)   | NULL     | -
 campaign_name             | character varying        | character varying(200)   | NULL     | -
 batch_id                  | character varying        | character varying(100)   | NULL     | -
 notification_category     | character varying        | character varying(50)    | NULL     | -
 group_key                 | character varying        | character varying(100)   | NULL     | -
 collapse_key              | character varying        | character varying(100)   | NULL     | -
 thread_id                 | character varying        | character varying(100)   | NULL     | -
 respects_user_preferences | boolean                  | boolean                  | NULL     | true
 silent                    | boolean                  | boolean                  | NULL     | false
 vibrate                   | boolean                  | boolean                  | NULL     | true
 is_expired                | boolean                  | boolean                  | NULL     | false
 device_type               | character varying        | character varying(30)    | NULL     | -
 os_version                | character varying        | character varying(20)    | NULL     | -
 app_version               | character varying        | character varying(20)    | NULL     | -
 source_module             | character varying        | character varying(50)    | NULL     | -
 source_record_id          | uuid                     | uuid                     | NULL     | -
 trigger_event             | character varying        | character varying(50)    | NULL     | -
 metadata                  | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 tags                      | ARRAY                    | ARRAY                    | NULL     | -
 notes                     | text                     | text                     | NULL     | -
 created_by                | uuid                     | uuid                     | NULL     | -
 created_at                | timestamp with time zone | timestamp with time zone | NULL     | now()
 updated_at                | timestamp with time zone | timestamp with time zone | NULL     | now()
(104 rows)


### report_cards

              Column              |           Type           |        Full Type         | Nullable |          Default           
----------------------------------+--------------------------+--------------------------+----------+----------------------------
 id                               | uuid                     | uuid                     | NOT NULL | gen_random_uuid()
 school_id                        | uuid                     | uuid                     | NOT NULL | -
 examination_id                   | uuid                     | uuid                     | NOT NULL | -
 student_id                       | uuid                     | uuid                     | NOT NULL | -
 academic_year_id                 | uuid                     | uuid                     | NOT NULL | -
 class_id                         | uuid                     | uuid                     | NOT NULL | -
 section_id                       | uuid                     | uuid                     | NULL     | -
 report_card_number               | character varying        | character varying(50)    | NOT NULL | -
 issue_date                       | date                     | date                     | NOT NULL | CURRENT_DATE
 total_max_marks                  | numeric                  | numeric                  | NOT NULL | -
 total_marks_obtained             | numeric                  | numeric                  | NOT NULL | -
 overall_percentage               | numeric                  | numeric                  | NOT NULL | -
 overall_grade                    | character varying        | character varying(5)     | NULL     | -
 overall_grade_points             | numeric                  | numeric                  | NULL     | -
 cgpa                             | numeric                  | numeric                  | NULL     | -
 class_rank                       | integer                  | integer                  | NULL     | -
 section_rank                     | integer                  | integer                  | NULL     | -
 school_rank                      | integer                  | integer                  | NULL     | -
 total_students                   | integer                  | integer                  | NULL     | -
 result                           | character varying        | character varying(20)    | NULL     | 'PASS'::character varying
 subjects_passed                  | integer                  | integer                  | NULL     | 0
 subjects_failed                  | integer                  | integer                  | NULL     | 0
 subjects_absent                  | integer                  | integer                  | NULL     | 0
 subject_wise_results             | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 total_working_days               | integer                  | integer                  | NULL     | -
 days_present                     | integer                  | integer                  | NULL     | -
 attendance_percentage            | numeric                  | numeric                  | NULL     | -
 co_curricular_grades             | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 sports_grades                    | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 conduct_grade                    | character varying        | character varying(5)     | NULL     | -
 discipline_remarks               | text                     | text                     | NULL     | -
 class_teacher_remarks            | text                     | text                     | NULL     | -
 principal_remarks                | text                     | text                     | NULL     | -
 promoted_to_class                | character varying        | character varying(50)    | NULL     | -
 is_promoted                      | boolean                  | boolean                  | NULL     | true
 detention_reason                 | text                     | text                     | NULL     | -
 report_card_template_id          | uuid                     | uuid                     | NULL     | -
 report_card_generated_at         | timestamp with time zone | timestamp with time zone | NULL     | -
 report_card_pdf_url              | text                     | text                     | NULL     | -
 is_distributed                   | boolean                  | boolean                  | NULL     | false
 distributed_to                   | character varying        | character varying(100)   | NULL     | -
 distributed_at                   | timestamp with time zone | timestamp with time zone | NULL     | -
 distribution_acknowledgement_url | text                     | text                     | NULL     | -
 email_sent                       | boolean                  | boolean                  | NULL     | false
 email_sent_at                    | timestamp with time zone | timestamp with time zone | NULL     | -
 sms_sent                         | boolean                  | boolean                  | NULL     | false
 sms_sent_at                      | timestamp with time zone | timestamp with time zone | NULL     | -
 downloaded_by_parent             | boolean                  | boolean                  | NULL     | false
 download_count                   | integer                  | integer                  | NULL     | 0
 last_downloaded_at               | timestamp with time zone | timestamp with time zone | NULL     | -
 status                           | character varying        | character varying(30)    | NULL     | 'DRAFT'::character varying
 is_active                        | boolean                  | boolean                  | NULL     | true
 notes                            | text                     | text                     | NULL     | -
 metadata                         | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 created_at                       | timestamp with time zone | timestamp with time zone | NULL     | now()
 updated_at                       | timestamp with time zone | timestamp with time zone | NULL     | now()
(56 rows)


### school_events

             Column              |           Type           |        Full Type         | Nullable |             Default             
---------------------------------+--------------------------+--------------------------+----------+---------------------------------
 id                              | uuid                     | uuid                     | NOT NULL | uuid_generate_v4()
 school_id                       | uuid                     | uuid                     | NOT NULL | -
 academic_year_id                | uuid                     | uuid                     | NOT NULL | -
 event_code                      | character varying        | character varying(50)    | NOT NULL | -
 event_name                      | character varying        | character varying(200)   | NOT NULL | -
 event_theme                     | character varying        | character varying(300)   | NULL     | -
 event_tagline                   | character varying        | character varying(300)   | NULL     | -
 event_type                      | character varying        | character varying(50)    | NOT NULL | -
 event_category                  | character varying        | character varying(50)    | NULL     | -
 event_level                     | character varying        | character varying(30)    | NULL     | 'SCHOOL'::character varying
 is_annual_event                 | boolean                  | boolean                  | NULL     | false
 is_flagship_event               | boolean                  | boolean                  | NULL     | false
 description                     | text                     | text                     | NOT NULL | -
 objectives                      | ARRAY                    | ARRAY                    | NULL     | -
 key_highlights                  | ARRAY                    | ARRAY                    | NULL     | -
 event_date                      | date                     | date                     | NOT NULL | -
 event_start_time                | time without time zone   | time without time zone   | NOT NULL | -
 event_end_time                  | time without time zone   | time without time zone   | NOT NULL | -
 setup_date                      | date                     | date                     | NULL     | -
 setup_start_time                | time without time zone   | time without time zone   | NULL     | -
 registration_start_date         | date                     | date                     | NULL     | -
 registration_end_date           | date                     | date                     | NULL     | -
 duration_hours                  | numeric                  | numeric                  | NULL     | -
 duration_days                   | integer                  | integer                  | NULL     | 1
 is_multi_day                    | boolean                  | boolean                  | NULL     | false
 start_date                      | date                     | date                     | NULL     | -
 end_date                        | date                     | date                     | NULL     | -
 event_schedule                  | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 venue                           | character varying        | character varying(200)   | NOT NULL | -
 venue_type                      | character varying        | character varying(50)    | NULL     | -
 venue_address                   | text                     | text                     | NULL     | -
 venue_capacity                  | integer                  | integer                  | NULL     | -
 room_numbers                    | ARRAY                    | ARRAY                    | NULL     | -
 specific_location               | text                     | text                     | NULL     | -
 is_outdoor                      | boolean                  | boolean                  | NULL     | false
 backup_venue                    | character varying        | character varying(200)   | NULL     | -
 target_audience                 | character varying        | character varying(50)    | NOT NULL | -
 target_classes                  | ARRAY                    | ARRAY                    | NULL     | -
 target_sections                 | ARRAY                    | ARRAY                    | NULL     | -
 eligible_students_count         | integer                  | integer                  | NULL     | -
 min_age                         | integer                  | integer                  | NULL     | -
 max_age                         | integer                  | integer                  | NULL     | -
 gender_restriction              | character varying        | character varying(20)    | NULL     | -
 registration_required           | boolean                  | boolean                  | NULL     | true
 registration_mode               | character varying        | character varying(30)    | NULL     | -
 max_participants                | integer                  | integer                  | NULL     | -
 min_participants                | integer                  | integer                  | NULL     | -
 current_registrations           | integer                  | integer                  | NULL     | 0
 registration_open               | boolean                  | boolean                  | NULL     | false
 registration_fee                | numeric                  | numeric                  | NULL     | 0.00
 has_registration_fee            | boolean                  | boolean                  | NULL     | false
 participation_certificate       | boolean                  | boolean                  | NULL     | true
 participation_type              | character varying        | character varying(30)    | NULL     | 'INDIVIDUAL'::character varying
 team_size_min                   | integer                  | integer                  | NULL     | -
 team_size_max                   | integer                  | integer                  | NULL     | -
 is_competitive                  | boolean                  | boolean                  | NULL     | false
 has_prizes                      | boolean                  | boolean                  | NULL     | false
 prizes_description              | text                     | text                     | NULL     | -
 prize_distribution_date         | date                     | date                     | NULL     | -
 winning_criteria                | text                     | text                     | NULL     | -
 organizing_committee            | character varying        | character varying(200)   | NULL     | -
 chief_coordinator_id            | uuid                     | uuid                     | NULL     | -
 chief_coordinator_name          | character varying        | character varying(200)   | NULL     | -
 chief_coordinator_phone         | character varying        | character varying(15)    | NULL     | -
 coordinator_ids                 | ARRAY                    | ARRAY                    | NULL     | -
 coordinators                    | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 staff_in_charge_ids             | ARRAY                    | ARRAY                    | NULL     | -
 staff_in_charge                 | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 volunteers_required             | integer                  | integer                  | NULL     | -
 student_volunteers_ids          | ARRAY                    | ARRAY                    | NULL     | -
 has_chief_guest                 | boolean                  | boolean                  | NULL     | false
 chief_guest_name                | character varying        | character varying(200)   | NULL     | -
 chief_guest_designation         | character varying        | character varying(200)   | NULL     | -
 chief_guest_organization        | character varying        | character varying(200)   | NULL     | -
 has_guests                      | boolean                  | boolean                  | NULL     | false
 guests                          | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 has_judges                      | boolean                  | boolean                  | NULL     | false
 judges                          | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 has_sponsors                    | boolean                  | boolean                  | NULL     | false
 sponsors                        | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 estimated_budget                | numeric                  | numeric                  | NULL     | -
 approved_budget                 | numeric                  | numeric                  | NULL     | -
 actual_expenditure              | numeric                  | numeric                  | NULL     | -
 budget_breakdown                | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 revenue_from_registrations      | numeric                  | numeric                  | NULL     | -
 sponsorship_amount              | numeric                  | numeric                  | NULL     | -
 equipment_required              | ARRAY                    | ARRAY                    | NULL     | -
 materials_required              | ARRAY                    | ARRAY                    | NULL     | -
 tech_requirements               | ARRAY                    | ARRAY                    | NULL     | -
 catering_required               | boolean                  | boolean                  | NULL     | false
 catering_details                | text                     | text                     | NULL     | -
 transportation_required         | boolean                  | boolean                  | NULL     | false
 transport_details               | text                     | text                     | NULL     | -
 accommodation_required          | boolean                  | boolean                  | NULL     | false
 accommodation_details           | text                     | text                     | NULL     | -
 requires_approval               | boolean                  | boolean                  | NULL     | true
 approval_status                 | character varying        | character varying(30)    | NULL     | 'PENDING'::character varying
 approved_by                     | uuid                     | uuid                     | NULL     | -
 approved_date                   | date                     | date                     | NULL     | -
 approval_remarks                | text                     | text                     | NULL     | -
 principal_approval              | boolean                  | boolean                  | NULL     | false
 principal_approval_date         | date                     | date                     | NULL     | -
 requires_external_permission    | boolean                  | boolean                  | NULL     | false
 external_permissions_obtained   | boolean                  | boolean                  | NULL     | false
 safety_measures                 | ARRAY                    | ARRAY                    | NULL     | -
 emergency_contact_name          | character varying        | character varying(100)   | NULL     | -
 emergency_contact_phone         | character varying        | character varying(15)    | NULL     | -
 first_aid_arrangements          | boolean                  | boolean                  | NULL     | false
 security_arrangements           | boolean                  | boolean                  | NULL     | false
 insurance_required              | boolean                  | boolean                  | NULL     | false
 insurance_obtained              | boolean                  | boolean                  | NULL     | false
 parent_consent_required         | boolean                  | boolean                  | NULL     | false
 parent_consent_form_url         | text                     | text                     | NULL     | -
 media_coverage_planned          | boolean                  | boolean                  | NULL     | false
 social_media_promotion          | boolean                  | boolean                  | NULL     | false
 event_poster_url                | text                     | text                     | NULL     | -
 event_brochure_url              | text                     | text                     | NULL     | -
 promotional_materials           | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 event_report_required           | boolean                  | boolean                  | NULL     | true
 event_report_url                | text                     | text                     | NULL     | -
 event_report_submitted          | boolean                  | boolean                  | NULL     | false
 photos_url                      | ARRAY                    | ARRAY                    | NULL     | -
 videos_url                      | ARRAY                    | ARRAY                    | NULL     | -
 attendance_sheet_url            | text                     | text                     | NULL     | -
 documents                       | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 feedback_collected              | boolean                  | boolean                  | NULL     | false
 feedback_form_url               | text                     | text                     | NULL     | -
 participant_satisfaction_rating | numeric                  | numeric                  | NULL     | -
 overall_success_rating          | numeric                  | numeric                  | NULL     | -
 feedback_summary                | text                     | text                     | NULL     | -
 weather_dependent               | boolean                  | boolean                  | NULL     | false
 weather_backup_plan             | text                     | text                     | NULL     | -
 status                          | character varying        | character varying(30)    | NULL     | 'PLANNED'::character varying
 cancellation_date               | date                     | date                     | NULL     | -
 cancellation_reason             | text                     | text                     | NULL     | -
 postponement_date               | date                     | date                     | NULL     | -
 postponement_reason             | text                     | text                     | NULL     | -
 rescheduled_date                | date                     | date                     | NULL     | -
 rescheduled_time                | time without time zone   | time without time zone   | NULL     | -
 total_participants              | integer                  | integer                  | NULL     | -
 total_attendees                 | integer                  | integer                  | NULL     | -
 winners                         | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 achievements                    | ARRAY                    | ARRAY                    | NULL     | -
 lessons_learned                 | text                     | text                     | NULL     | -
 recommendations_for_future      | text                     | text                     | NULL     | -
 is_recurring                    | boolean                  | boolean                  | NULL     | false
 recurrence_pattern              | character varying        | character varying(50)    | NULL     | -
 reminder_sent                   | boolean                  | boolean                  | NULL     | false
 reminder_date                   | date                     | date                     | NULL     | -
 metadata                        | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 custom_fields                   | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 notes                           | text                     | text                     | NULL     | -
 internal_notes                  | text                     | text                     | NULL     | -
 created_by                      | uuid                     | uuid                     | NULL     | -
 created_at                      | timestamp with time zone | timestamp with time zone | NULL     | now()
 updated_at                      | timestamp with time zone | timestamp with time zone | NULL     | now()
(156 rows)


### schools

          Column           |           Type           |        Full Type         | Nullable |              Default              
---------------------------+--------------------------+--------------------------+----------+-----------------------------------
 id                        | uuid                     | uuid                     | NOT NULL | gen_random_uuid()
 school_code               | character varying        | character varying(20)    | NOT NULL | -
 school_name               | character varying        | character varying(200)   | NOT NULL | -
 school_type               | character varying        | character varying(50)    | NOT NULL | 'CBSE'::character varying
 establishment_year        | integer                  | integer                  | NULL     | -
 principal_name            | character varying        | character varying(100)   | NOT NULL | -
 contact_person_name       | character varying        | character varying(100)   | NOT NULL | -
 primary_phone             | character varying        | character varying(15)    | NOT NULL | -
 secondary_phone           | character varying        | character varying(15)    | NULL     | -
 primary_email             | character varying        | character varying(100)   | NOT NULL | -
 secondary_email           | character varying        | character varying(100)   | NULL     | -
 address_line1             | character varying        | character varying(200)   | NOT NULL | -
 address_line2             | character varying        | character varying(200)   | NULL     | -
 city                      | character varying        | character varying(100)   | NOT NULL | -
 state                     | character varying        | character varying(100)   | NOT NULL | -
 postal_code               | character varying        | character varying(10)    | NOT NULL | -
 country                   | character varying        | character varying(50)    | NOT NULL | 'India'::character varying
 registration_number       | character varying        | character varying(50)    | NULL     | -
 affiliation_number        | character varying        | character varying(50)    | NULL     | -
 academic_year_start_month | integer                  | integer                  | NULL     | 6
 academic_year_end_month   | integer                  | integer                  | NULL     | 5
 default_language          | character varying        | character varying(20)    | NULL     | 'English'::character varying
 timezone                  | character varying        | character varying(50)    | NULL     | 'Asia/Kolkata'::character varying
 currency                  | character varying        | character varying(10)    | NULL     | 'INR'::character varying
 is_active                 | boolean                  | boolean                  | NOT NULL | true
 subscription_tier         | character varying        | character varying(20)    | NULL     | 'BASIC'::character varying
 subscription_valid_until  | date                     | date                     | NULL     | -
 logo_url                  | text                     | text                     | NULL     | -
 website_url               | text                     | text                     | NULL     | -
 created_at                | timestamp with time zone | timestamp with time zone | NOT NULL | now()
 updated_at                | timestamp with time zone | timestamp with time zone | NOT NULL | now()
(31 rows)


### sections

      Column      |           Type           |        Full Type         | Nullable |      Default      
------------------+--------------------------+--------------------------+----------+-------------------
 id               | uuid                     | uuid                     | NOT NULL | gen_random_uuid()
 school_id        | uuid                     | uuid                     | NOT NULL | -
 class_id         | uuid                     | uuid                     | NOT NULL | -
 section_code     | character varying        | character varying(10)    | NOT NULL | -
 section_name     | character varying        | character varying(50)    | NOT NULL | -
 capacity         | integer                  | integer                  | NULL     | -
 current_strength | integer                  | integer                  | NULL     | 0
 class_teacher_id | uuid                     | uuid                     | NULL     | -
 is_active        | boolean                  | boolean                  | NOT NULL | true
 created_at       | timestamp with time zone | timestamp with time zone | NOT NULL | now()
 updated_at       | timestamp with time zone | timestamp with time zone | NOT NULL | now()
(11 rows)


### sms_messages

           Column           |           Type           |        Full Type         | Nullable |              Default               
----------------------------+--------------------------+--------------------------+----------+------------------------------------
 id                         | uuid                     | uuid                     | NOT NULL | gen_random_uuid()
 school_id                  | uuid                     | uuid                     | NOT NULL | -
 message_code               | character varying        | character varying(50)    | NULL     | -
 message_uuid               | uuid                     | uuid                     | NULL     | gen_random_uuid()
 communication_channel_id   | uuid                     | uuid                     | NULL     | -
 provider_name              | character varying        | character varying(50)    | NULL     | -
 sender_id                  | character varying        | character varying(20)    | NULL     | -
 template_id                | uuid                     | uuid                     | NULL     | -
 template_code              | character varying        | character varying(50)    | NULL     | -
 recipient_type             | character varying        | character varying(20)    | NULL     | -
 recipient_id               | uuid                     | uuid                     | NULL     | -
 recipient_phone            | character varying        | character varying(15)    | NOT NULL | -
 recipient_name             | character varying        | character varying(200)   | NULL     | -
 recipient_email            | character varying        | character varying(100)   | NULL     | -
 recipient_country_code     | character varying        | character varying(5)     | NULL     | '+91'::character varying
 normalized_phone           | character varying        | character varying(20)    | NULL     | -
 student_id                 | uuid                     | uuid                     | NULL     | -
 parent_id                  | uuid                     | uuid                     | NULL     | -
 class_id                   | uuid                     | uuid                     | NULL     | -
 section_id                 | uuid                     | uuid                     | NULL     | -
 message_text               | text                     | text                     | NOT NULL | -
 message_length             | integer                  | integer                  | NULL     | -
 original_message           | text                     | text                     | NULL     | -
 sms_type                   | character varying        | character varying(20)    | NULL     | 'TEXT'::character varying
 message_type               | character varying        | character varying(30)    | NULL     | 'TRANSACTIONAL'::character varying
 sms_encoding               | character varying        | character varying(20)    | NULL     | 'GSM7'::character varying
 segment_count              | integer                  | integer                  | NULL     | 1
 is_long_message            | boolean                  | boolean                  | NULL     | false
 unicode_characters         | boolean                  | boolean                  | NULL     | false
 dlt_entity_id              | character varying        | character varying(50)    | NULL     | -
 dlt_template_id            | character varying        | character varying(50)    | NULL     | -
 dlt_content_id             | character varying        | character varying(50)    | NULL     | -
 dlt_principal_entity_id    | character varying        | character varying(50)    | NULL     | -
 dlt_compliance_checked     | boolean                  | boolean                  | NULL     | false
 dlt_approved               | boolean                  | boolean                  | NULL     | false
 provider_message_id        | character varying        | character varying(100)   | NULL     | -
 provider_request_id        | character varying        | character varying(100)   | NULL     | -
 provider_response          | jsonb                    | jsonb                    | NULL     | -
 provider_status_code       | character varying        | character varying(20)    | NULL     | -
 status                     | character varying        | character varying(30)    | NULL     | 'PENDING'::character varying
 queued_at                  | timestamp with time zone | timestamp with time zone | NULL     | -
 sent_at                    | timestamp with time zone | timestamp with time zone | NULL     | -
 delivered_at               | timestamp with time zone | timestamp with time zone | NULL     | -
 failed_at                  | timestamp with time zone | timestamp with time zone | NULL     | -
 expired_at                 | timestamp with time zone | timestamp with time zone | NULL     | -
 delivery_status            | character varying        | character varying(30)    | NULL     | -
 delivery_timestamp         | timestamp with time zone | timestamp with time zone | NULL     | -
 delivery_receipt_received  | boolean                  | boolean                  | NULL     | false
 delivery_receipt_timestamp | timestamp with time zone | timestamp with time zone | NULL     | -
 delivery_receipt_status    | character varying        | character varying(30)    | NULL     | -
 dlr_status                 | character varying        | character varying(30)    | NULL     | -
 dlr_error_code             | character varying        | character varying(10)    | NULL     | -
 failure_reason             | text                     | text                     | NULL     | -
 failure_code               | character varying        | character varying(20)    | NULL     | -
 error_message              | text                     | text                     | NULL     | -
 error_details              | jsonb                    | jsonb                    | NULL     | -
 is_permanent_failure       | boolean                  | boolean                  | NULL     | false
 retry_count                | integer                  | integer                  | NULL     | 0
 max_retries                | integer                  | integer                  | NULL     | 3
 next_retry_at              | timestamp with time zone | timestamp with time zone | NULL     | -
 last_retry_at              | timestamp with time zone | timestamp with time zone | NULL     | -
 cost                       | numeric                  | numeric                  | NULL     | -
 cost_currency              | character varying        | character varying(10)    | NULL     | 'INR'::character varying
 credits_used               | integer                  | integer                  | NULL     | 1
 billing_units              | integer                  | integer                  | NULL     | -
 priority                   | integer                  | integer                  | NULL     | 1
 route_type                 | character varying        | character varying(20)    | NULL     | 'AUTO'::character varying
 route_used                 | character varying        | character varying(50)    | NULL     | -
 scheduled_at               | timestamp with time zone | timestamp with time zone | NULL     | -
 is_scheduled               | boolean                  | boolean                  | NULL     | false
 schedule_timezone          | character varying        | character varying(50)    | NULL     | -
 send_after                 | timestamp with time zone | timestamp with time zone | NULL     | -
 send_before                | timestamp with time zone | timestamp with time zone | NULL     | -
 optimal_send_time          | boolean                  | boolean                  | NULL     | false
 campaign_id                | character varying        | character varying(100)   | NULL     | -
 campaign_name              | character varying        | character varying(200)   | NULL     | -
 batch_id                   | character varying        | character varying(100)   | NULL     | -
 batch_size                 | integer                  | integer                  | NULL     | -
 batch_sequence_number      | integer                  | integer                  | NULL     | -
 is_bulk_message            | boolean                  | boolean                  | NULL     | false
 personalized               | boolean                  | boolean                  | NULL     | false
 personalization_data       | jsonb                    | jsonb                    | NULL     | -
 variables_used             | jsonb                    | jsonb                    | NULL     | -
 contains_url               | boolean                  | boolean                  | NULL     | false
 original_urls              | ARRAY                    | ARRAY                    | NULL     | -
 short_urls                 | ARRAY                    | ARRAY                    | NULL     | -
 url_clicks                 | integer                  | integer                  | NULL     | 0
 first_click_at             | timestamp with time zone | timestamp with time zone | NULL     | -
 last_click_at              | timestamp with time zone | timestamp with time zone | NULL     | -
 consent_obtained           | boolean                  | boolean                  | NULL     | true
 consent_type               | character varying        | character varying(20)    | NULL     | -
 consent_timestamp          | timestamp with time zone | timestamp with time zone | NULL     | -
 opt_out_requested          | boolean                  | boolean                  | NULL     | false
 opt_out_timestamp          | timestamp with time zone | timestamp with time zone | NULL     | -
 expects_response           | boolean                  | boolean                  | NULL     | false
 response_received          | boolean                  | boolean                  | NULL     | false
 response_text              | text                     | text                     | NULL     | -
 response_timestamp         | timestamp with time zone | timestamp with time zone | NULL     | -
 expires_at                 | timestamp with time zone | timestamp with time zone | NULL     | -
 is_expired                 | boolean                  | boolean                  | NULL     | false
 validity_period_minutes    | integer                  | integer                  | NULL     | 1440
 message_hash               | character varying        | character varying(64)    | NULL     | -
 is_duplicate               | boolean                  | boolean                  | NULL     | false
 duplicate_of_id            | uuid                     | uuid                     | NULL     | -
 is_test_message            | boolean                  | boolean                  | NULL     | false
 test_mode                  | boolean                  | boolean                  | NULL     | false
 opened                     | boolean                  | boolean                  | NULL     | false
 open_timestamp             | timestamp with time zone | timestamp with time zone | NULL     | -
 source_module              | character varying        | character varying(50)    | NULL     | -
 source_record_id           | uuid                     | uuid                     | NULL     | -
 trigger_event              | character varying        | character varying(50)    | NULL     | -
 callback_url               | text                     | text                     | NULL     | -
 callback_sent              | boolean                  | boolean                  | NULL     | false
 callback_response          | jsonb                    | jsonb                    | NULL     | -
 metadata                   | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 tags                       | ARRAY                    | ARRAY                    | NULL     | -
 notes                      | text                     | text                     | NULL     | -
 created_by                 | uuid                     | uuid                     | NULL     | -
 created_at                 | timestamp with time zone | timestamp with time zone | NULL     | now()
 updated_at                 | timestamp with time zone | timestamp with time zone | NULL     | now()
(120 rows)


### spatial_ref_sys

  Column   |       Type        |        Full Type        | Nullable | Default 
-----------+-------------------+-------------------------+----------+---------
 srid      | integer           | integer                 | NOT NULL | -
 auth_name | character varying | character varying(256)  | NULL     | -
 auth_srid | integer           | integer                 | NULL     | -
 srtext    | character varying | character varying(2048) | NULL     | -
 proj4text | character varying | character varying(2048) | NULL     | -
(5 rows)


### staff

        Column         |           Type           |        Full Type         | Nullable |            Default             
-----------------------+--------------------------+--------------------------+----------+--------------------------------
 id                    | uuid                     | uuid                     | NOT NULL | uuid_generate_v4()
 school_id             | uuid                     | uuid                     | NOT NULL | -
 employee_id           | character varying        | character varying(50)    | NOT NULL | -
 employee_code         | character varying        | character varying(20)    | NOT NULL | -
 first_name            | character varying        | character varying(100)   | NOT NULL | -
 middle_name           | character varying        | character varying(100)   | NULL     | -
 last_name             | character varying        | character varying(100)   | NOT NULL | -
 full_name             | character varying        | character varying(300)   | NULL     | -
 date_of_birth         | date                     | date                     | NOT NULL | -
 gender                | character varying        | character varying(10)    | NOT NULL | -
 email                 | character varying        | character varying(100)   | NOT NULL | -
 phone                 | character varying        | character varying(15)    | NOT NULL | -
 alternate_phone       | character varying        | character varying(15)    | NULL     | -
 current_address       | text                     | text                     | NOT NULL | -
 permanent_address     | text                     | text                     | NULL     | -
 city                  | character varying        | character varying(100)   | NULL     | -
 state                 | character varying        | character varying(100)   | NULL     | -
 postal_code           | character varying        | character varying(10)    | NULL     | -
 country               | character varying        | character varying(50)    | NULL     | 'India'::character varying
 designation           | character varying        | character varying(100)   | NOT NULL | -
 department            | character varying        | character varying(100)   | NULL     | -
 staff_type            | character varying        | character varying(30)    | NULL     | 'TEACHING'::character varying
 employment_type       | character varying        | character varying(30)    | NULL     | 'PERMANENT'::character varying
 date_of_joining       | date                     | date                     | NOT NULL | -
 date_of_leaving       | date                     | date                     | NULL     | -
 teaching_subjects     | ARRAY                    | ARRAY                    | NULL     | -
 primary_subject_id    | uuid                     | uuid                     | NULL     | -
 highest_qualification | character varying        | character varying(100)   | NULL     | -
 qualifications        | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 experience_years      | integer                  | integer                  | NULL     | 0
 basic_salary          | numeric                  | numeric                  | NULL     | -
 currency              | character varying        | character varying(10)    | NULL     | 'INR'::character varying
 status                | character varying        | character varying(20)    | NULL     | 'ACTIVE'::character varying
 is_active             | boolean                  | boolean                  | NULL     | true
 user_profile_id       | uuid                     | uuid                     | NULL     | -
 metadata              | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 notes                 | text                     | text                     | NULL     | -
 created_at            | timestamp with time zone | timestamp with time zone | NULL     | now()
 updated_at            | timestamp with time zone | timestamp with time zone | NULL     | now()
(39 rows)


### stock_audits

       Column        |           Type           |        Full Type         | Nullable |            Default             
---------------------+--------------------------+--------------------------+----------+--------------------------------
 id                  | uuid                     | uuid                     | NOT NULL | uuid_generate_v4()
 school_id           | uuid                     | uuid                     | NOT NULL | -
 audit_code          | character varying        | character varying(50)    | NOT NULL | -
 audit_date          | date                     | date                     | NOT NULL | CURRENT_DATE
 audit_type          | character varying        | character varying(30)    | NULL     | 'PHYSICAL'::character varying
 inventory_item_id   | uuid                     | uuid                     | NULL     | -
 system_quantity     | numeric                  | numeric                  | NULL     | -
 physical_quantity   | numeric                  | numeric                  | NULL     | -
 variance            | numeric                  | numeric                  | NULL     | -
 variance_percentage | numeric                  | numeric                  | NULL     | -
 audited_by          | character varying        | character varying(200)   | NULL     | -
 status              | character varying        | character varying(30)    | NULL     | 'COMPLETED'::character varying
 metadata            | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 created_at          | timestamp with time zone | timestamp with time zone | NULL     | now()
(14 rows)


### stock_movements

            Column            |           Type           |        Full Type         | Nullable |      Default       
------------------------------+--------------------------+--------------------------+----------+--------------------
 id                           | uuid                     | uuid                     | NOT NULL | uuid_generate_v4()
 school_id                    | uuid                     | uuid                     | NOT NULL | -
 movement_code                | character varying        | character varying(50)    | NOT NULL | -
 inventory_item_id            | uuid                     | uuid                     | NOT NULL | -
 movement_type                | character varying        | character varying(30)    | NOT NULL | -
 movement_date                | date                     | date                     | NOT NULL | CURRENT_DATE
 quantity                     | numeric                  | numeric                  | NOT NULL | -
 from_location                | character varying        | character varying(200)   | NULL     | -
 to_location                  | character varying        | character varying(200)   | NULL     | -
 issued_to_type               | character varying        | character varying(30)    | NULL     | -
 issued_to_staff_id           | uuid                     | uuid                     | NULL     | -
 issued_to_student_id         | uuid                     | uuid                     | NULL     | -
 purchase_order_id            | uuid                     | uuid                     | NULL     | -
 reason                       | text                     | text                     | NULL     | -
 approved_by                  | uuid                     | uuid                     | NULL     | -
 current_stock_after_movement | numeric                  | numeric                  | NULL     | -
 metadata                     | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 created_at                   | timestamp with time zone | timestamp with time zone | NULL     | now()
(18 rows)


### student_achievements

            Column            |           Type           |        Full Type         | Nullable |            Default            
------------------------------+--------------------------+--------------------------+----------+-------------------------------
 id                           | uuid                     | uuid                     | NOT NULL | uuid_generate_v4()
 school_id                    | uuid                     | uuid                     | NOT NULL | -
 academic_year_id             | uuid                     | uuid                     | NOT NULL | -
 achievement_code             | character varying        | character varying(50)    | NOT NULL | -
 student_id                   | uuid                     | uuid                     | NOT NULL | -
 class_id                     | uuid                     | uuid                     | NULL     | -
 section_id                   | uuid                     | uuid                     | NULL     | -
 achievement_type             | character varying        | character varying(50)    | NOT NULL | -
 achievement_category         | character varying        | character varying(50)    | NULL     | -
 achievement_level            | character varying        | character varying(30)    | NOT NULL | -
 achievement_title            | character varying        | character varying(300)   | NOT NULL | -
 achievement_description      | text                     | text                     | NOT NULL | -
 event_name                   | character varying        | character varying(200)   | NULL     | -
 event_id                     | uuid                     | uuid                     | NULL     | -
 competition_id               | uuid                     | uuid                     | NULL     | -
 organized_by                 | character varying        | character varying(200)   | NULL     | -
 organizing_body              | character varying        | character varying(200)   | NULL     | -
 achievement_date             | date                     | date                     | NOT NULL | -
 award_ceremony_date          | date                     | date                     | NULL     | -
 award_name                   | character varying        | character varying(200)   | NULL     | -
 award_type                   | character varying        | character varying(50)    | NULL     | -
 position                     | character varying        | character varying(50)    | NULL     | -
 rank_achieved                | integer                  | integer                  | NULL     | -
 medal_type                   | character varying        | character varying(20)    | NULL     | -
 prize_money                  | numeric                  | numeric                  | NULL     | -
 prize_description            | text                     | text                     | NULL     | -
 scholarship_amount           | numeric                  | numeric                  | NULL     | -
 scholarship_duration         | character varying        | character varying(50)    | NULL     | -
 total_participants           | integer                  | integer                  | NULL     | -
 total_teams                  | integer                  | integer                  | NULL     | -
 participation_mode           | character varying        | character varying(30)    | NULL     | -
 team_name                    | character varying        | character varying(200)   | NULL     | -
 team_members                 | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 was_team_captain             | boolean                  | boolean                  | NULL     | false
 score_obtained               | numeric                  | numeric                  | NULL     | -
 total_score                  | numeric                  | numeric                  | NULL     | -
 percentage                   | numeric                  | numeric                  | NULL     | -
 time_taken                   | character varying        | character varying(50)    | NULL     | -
 performance_rating           | character varying        | character varying(30)    | NULL     | -
 evaluated_by                 | ARRAY                    | ARRAY                    | NULL     | -
 recognition_level            | character varying        | character varying(30)    | NULL     | -
 special_mention              | text                     | text                     | NULL     | -
 featured_in_media            | boolean                  | boolean                  | NULL     | false
 media_coverage               | ARRAY                    | ARRAY                    | NULL     | -
 certificate_issued           | boolean                  | boolean                  | NULL     | true
 certificate_number           | character varying        | character varying(50)    | NULL     | -
 certificate_issue_date       | date                     | date                     | NULL     | -
 certificate_issued_by        | character varying        | character varying(200)   | NULL     | -
 certificate_url              | text                     | text                     | NULL     | -
 trophy_received              | boolean                  | boolean                  | NULL     | false
 trophy_description           | text                     | text                     | NULL     | -
 medal_received               | boolean                  | boolean                  | NULL     | false
 award_presented_by           | character varying        | character varying(200)   | NULL     | -
 award_presenter_designation  | character varying        | character varying(200)   | NULL     | -
 ceremony_location            | character varying        | character varying(200)   | NULL     | -
 ceremony_attended            | boolean                  | boolean                  | NULL     | true
 mentor_teacher_id            | uuid                     | uuid                     | NULL     | -
 mentor_teacher_name          | character varying        | character varying(200)   | NULL     | -
 coach_name                   | character varying        | character varying(200)   | NULL     | -
 coach_organization           | character varying        | character varying(200)   | NULL     | -
 trainer_acknowledgment       | text                     | text                     | NULL     | -
 represented_school           | boolean                  | boolean                  | NULL     | true
 represented_district         | boolean                  | boolean                  | NULL     | false
 represented_state            | boolean                  | boolean                  | NULL     | false
 represented_country          | boolean                  | boolean                  | NULL     | false
 skills_demonstrated          | ARRAY                    | ARRAY                    | NULL     | -
 competencies_shown           | ARRAY                    | ARRAY                    | NULL     | -
 impact_on_school             | text                     | text                     | NULL     | -
 inspiration_to_peers         | boolean                  | boolean                  | NULL     | false
 announcement_made            | boolean                  | boolean                  | NULL     | false
 announcement_date            | date                     | date                     | NULL     | -
 displayed_in_school          | boolean                  | boolean                  | NULL     | false
 display_location             | character varying        | character varying(100)   | NULL     | -
 published_in_newsletter      | boolean                  | boolean                  | NULL     | false
 published_on_website         | boolean                  | boolean                  | NULL     | false
 social_media_shared          | boolean                  | boolean                  | NULL     | false
 parents_notified             | boolean                  | boolean                  | NULL     | false
 parent_notification_date     | date                     | date                     | NULL     | -
 parents_felicitated          | boolean                  | boolean                  | NULL     | false
 morning_assembly_recognition | boolean                  | boolean                  | NULL     | false
 recognition_date             | date                     | date                     | NULL     | -
 special_assembly             | boolean                  | boolean                  | NULL     | false
 school_reward                | boolean                  | boolean                  | NULL     | false
 school_reward_description    | text                     | text                     | NULL     | -
 photo_url                    | text                     | text                     | NULL     | -
 video_url                    | text                     | text                     | NULL     | -
 achievement_photos           | ARRAY                    | ARRAY                    | NULL     | -
 news_clippings               | ARRAY                    | ARRAY                    | NULL     | -
 supporting_documents         | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 verified                     | boolean                  | boolean                  | NULL     | false
 verified_by                  | uuid                     | uuid                     | NULL     | -
 verification_date            | date                     | date                     | NULL     | -
 verification_documents       | ARRAY                    | ARRAY                    | NULL     | -
 add_to_hall_of_fame          | boolean                  | boolean                  | NULL     | false
 hall_of_fame_category        | character varying        | character varying(50)    | NULL     | -
 school_record                | boolean                  | boolean                  | NULL     | false
 record_description           | text                     | text                     | NULL     | -
 previous_record_holder       | character varying        | character varying(200)   | NULL     | -
 status                       | character varying        | character varying(30)    | NULL     | 'APPROVED'::character varying
 is_active                    | boolean                  | boolean                  | NULL     | true
 metadata                     | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 custom_fields                | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 notes                        | text                     | text                     | NULL     | -
 congratulatory_message       | text                     | text                     | NULL     | -
 created_by                   | uuid                     | uuid                     | NULL     | -
 created_at                   | timestamp with time zone | timestamp with time zone | NULL     | now()
 updated_at                   | timestamp with time zone | timestamp with time zone | NULL     | now()
(107 rows)


### student_exam_registrations

             Column             |           Type           |        Full Type         | Nullable |           Default            
--------------------------------+--------------------------+--------------------------+----------+------------------------------
 id                             | uuid                     | uuid                     | NOT NULL | gen_random_uuid()
 school_id                      | uuid                     | uuid                     | NOT NULL | -
 examination_id                 | uuid                     | uuid                     | NOT NULL | -
 student_id                     | uuid                     | uuid                     | NOT NULL | -
 class_id                       | uuid                     | uuid                     | NOT NULL | -
 section_id                     | uuid                     | uuid                     | NULL     | -
 registration_number            | character varying        | character varying(50)    | NULL     | -
 registration_date              | timestamp with time zone | timestamp with time zone | NULL     | now()
 registered_by                  | uuid                     | uuid                     | NULL     | -
 is_eligible                    | boolean                  | boolean                  | NULL     | true
 eligibility_criteria_met       | boolean                  | boolean                  | NULL     | true
 ineligibility_reason           | text                     | text                     | NULL     | -
 minimum_attendance_met         | boolean                  | boolean                  | NULL     | true
 attendance_percentage          | numeric                  | numeric                  | NULL     | -
 fee_paid                       | boolean                  | boolean                  | NULL     | true
 fee_clearance_certificate_url  | text                     | text                     | NULL     | -
 exam_center_id                 | uuid                     | uuid                     | NULL     | -
 exam_center_name               | character varying        | character varying(200)   | NULL     | -
 exam_center_address            | text                     | text                     | NULL     | -
 seat_number                    | character varying        | character varying(50)    | NULL     | -
 roll_number                    | character varying        | character varying(50)    | NULL     | -
 admit_card_generated           | boolean                  | boolean                  | NULL     | false
 admit_card_number              | character varying        | character varying(50)    | NULL     | -
 admit_card_generated_at        | timestamp with time zone | timestamp with time zone | NULL     | -
 admit_card_url                 | text                     | text                     | NULL     | -
 admit_card_downloaded          | boolean                  | boolean                  | NULL     | false
 admit_card_downloaded_at       | timestamp with time zone | timestamp with time zone | NULL     | -
 admit_card_sent                | boolean                  | boolean                  | NULL     | false
 admit_card_sent_at             | timestamp with time zone | timestamp with time zone | NULL     | -
 subjects_registered            | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 total_subjects                 | integer                  | integer                  | NULL     | 0
 requires_special_accommodation | boolean                  | boolean                  | NULL     | false
 special_accommodation_type     | character varying        | character varying(50)    | NULL     | -
 special_accommodation_details  | text                     | text                     | NULL     | -
 has_exemptions                 | boolean                  | boolean                  | NULL     | false
 exempted_subjects              | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 exemption_reason               | text                     | text                     | NULL     | -
 registration_status            | character varying        | character varying(30)    | NULL     | 'PENDING'::character varying
 is_active                      | boolean                  | boolean                  | NULL     | true
 is_withdrawn                   | boolean                  | boolean                  | NULL     | false
 withdrawal_date                | timestamp with time zone | timestamp with time zone | NULL     | -
 withdrawal_reason              | text                     | text                     | NULL     | -
 notes                          | text                     | text                     | NULL     | -
 metadata                       | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 created_at                     | timestamp with time zone | timestamp with time zone | NULL     | now()
 updated_at                     | timestamp with time zone | timestamp with time zone | NULL     | now()
(46 rows)


### student_fee_assignments

             Column             |           Type           |        Full Type         | Nullable |           Default            
--------------------------------+--------------------------+--------------------------+----------+------------------------------
 id                             | uuid                     | uuid                     | NOT NULL | gen_random_uuid()
 school_id                      | uuid                     | uuid                     | NOT NULL | -
 academic_year_id               | uuid                     | uuid                     | NOT NULL | -
 student_id                     | uuid                     | uuid                     | NOT NULL | -
 fee_structure_id               | uuid                     | uuid                     | NOT NULL | -
 class_id                       | uuid                     | uuid                     | NOT NULL | -
 section_id                     | uuid                     | uuid                     | NULL     | -
 assignment_date                | date                     | date                     | NOT NULL | CURRENT_DATE
 assigned_by                    | uuid                     | uuid                     | NULL     | -
 base_fee_amount                | numeric                  | numeric                  | NOT NULL | -
 tuition_fee                    | numeric                  | numeric                  | NULL     | 0
 development_fee                | numeric                  | numeric                  | NULL     | 0
 sports_fee                     | numeric                  | numeric                  | NULL     | 0
 library_fee                    | numeric                  | numeric                  | NULL     | 0
 computer_fee                   | numeric                  | numeric                  | NULL     | 0
 lab_fee                        | numeric                  | numeric                  | NULL     | 0
 activity_fee                   | numeric                  | numeric                  | NULL     | 0
 examination_fee                | numeric                  | numeric                  | NULL     | 0
 transport_fee                  | numeric                  | numeric                  | NULL     | 0
 hostel_fee                     | numeric                  | numeric                  | NULL     | 0
 uniform_fee                    | numeric                  | numeric                  | NULL     | 0
 books_fee                      | numeric                  | numeric                  | NULL     | 0
 other_fees                     | numeric                  | numeric                  | NULL     | 0
 tax_amount                     | numeric                  | numeric                  | NULL     | 0
 gst_amount                     | numeric                  | numeric                  | NULL     | 0
 cgst_amount                    | numeric                  | numeric                  | NULL     | 0
 sgst_amount                    | numeric                  | numeric                  | NULL     | 0
 gross_amount                   | numeric                  | numeric                  | NOT NULL | -
 sibling_discount_applied       | boolean                  | boolean                  | NULL     | false
 sibling_discount_percentage    | numeric                  | numeric                  | NULL     | 0
 sibling_discount_amount        | numeric                  | numeric                  | NULL     | 0
 early_payment_discount_applied | boolean                  | boolean                  | NULL     | false
 early_payment_discount_amount  | numeric                  | numeric                  | NULL     | 0
 merit_discount_applied         | boolean                  | boolean                  | NULL     | false
 merit_discount_percentage      | numeric                  | numeric                  | NULL     | 0
 merit_discount_amount          | numeric                  | numeric                  | NULL     | 0
 special_discount_applied       | boolean                  | boolean                  | NULL     | false
 special_discount_reason        | text                     | text                     | NULL     | -
 special_discount_amount        | numeric                  | numeric                  | NULL     | 0
 special_discount_approved_by   | uuid                     | uuid                     | NULL     | -
 total_discount_amount          | numeric                  | numeric                  | NULL     | 0
 concession_applied             | boolean                  | boolean                  | NULL     | false
 concession_id                  | uuid                     | uuid                     | NULL     | -
 concession_percentage          | numeric                  | numeric                  | NULL     | 0
 concession_amount              | numeric                  | numeric                  | NULL     | 0
 scholarship_applied            | boolean                  | boolean                  | NULL     | false
 scholarship_id                 | uuid                     | uuid                     | NULL     | -
 scholarship_amount             | numeric                  | numeric                  | NULL     | 0
 rte_applicable                 | boolean                  | boolean                  | NULL     | false
 rte_reimbursement_amount       | numeric                  | numeric                  | NULL     | 0
 rte_reimbursement_received     | boolean                  | boolean                  | NULL     | false
 government_scheme_applicable   | boolean                  | boolean                  | NULL     | false
 government_scheme_name         | character varying        | character varying(200)   | NULL     | -
 government_scheme_amount       | numeric                  | numeric                  | NULL     | 0
 government_scheme_received     | boolean                  | boolean                  | NULL     | false
 waiver_applied                 | boolean                  | boolean                  | NULL     | false
 waiver_percentage              | numeric                  | numeric                  | NULL     | 0
 waiver_amount                  | numeric                  | numeric                  | NULL     | 0
 waiver_reason                  | text                     | text                     | NULL     | -
 waiver_approved_by             | uuid                     | uuid                     | NULL     | -
 waiver_approval_date           | date                     | date                     | NULL     | -
 waiver_approval_number         | character varying        | character varying(50)    | NULL     | -
 total_adjustments              | numeric                  | numeric                  | NULL     | 0
 net_payable_amount             | numeric                  | numeric                  | NOT NULL | -
 total_paid_amount              | numeric                  | numeric                  | NULL     | 0
 total_outstanding_amount       | numeric                  | numeric                  | NULL     | 0
 last_payment_date              | date                     | date                     | NULL     | -
 last_payment_amount            | numeric                  | numeric                  | NULL     | 0
 number_of_installments         | integer                  | integer                  | NULL     | 1
 installments_paid              | integer                  | integer                  | NULL     | 0
 installments_pending           | integer                  | integer                  | NULL     | 0
 next_installment_due_date      | date                     | date                     | NULL     | -
 next_installment_amount        | numeric                  | numeric                  | NULL     | -
 late_fee_applicable            | boolean                  | boolean                  | NULL     | true
 total_late_fee_charged         | numeric                  | numeric                  | NULL     | 0
 total_late_fee_paid            | numeric                  | numeric                  | NULL     | 0
 total_late_fee_waived          | numeric                  | numeric                  | NULL     | 0
 payment_status                 | character varying        | character varying(30)    | NULL     | 'PENDING'::character varying
 is_fully_paid                  | boolean                  | boolean                  | NULL     | false
 paid_in_full_date              | date                     | date                     | NULL     | -
 is_overdue                     | boolean                  | boolean                  | NULL     | false
 overdue_since                  | date                     | date                     | NULL     | -
 days_overdue                   | integer                  | integer                  | NULL     | 0
 is_defaulter                   | boolean                  | boolean                  | NULL     | false
 defaulter_marked_date          | date                     | date                     | NULL     | -
 is_prorated                    | boolean                  | boolean                  | NULL     | false
 proration_start_date           | date                     | date                     | NULL     | -
 proration_percentage           | numeric                  | numeric                  | NULL     | 100.00
 proration_months               | integer                  | integer                  | NULL     | -
 advance_payment_made           | boolean                  | boolean                  | NULL     | false
 advance_payment_amount         | numeric                  | numeric                  | NULL     | 0
 advance_payment_date           | date                     | date                     | NULL     | -
 is_frozen                      | boolean                  | boolean                  | NULL     | false
 frozen_reason                  | text                     | text                     | NULL     | -
 frozen_by                      | uuid                     | uuid                     | NULL     | -
 frozen_at                      | timestamp with time zone | timestamp with time zone | NULL     | -
 student_suspended              | boolean                  | boolean                  | NULL     | false
 exam_participation_restricted  | boolean                  | boolean                  | NULL     | false
 report_card_withheld           | boolean                  | boolean                  | NULL     | false
 due_reminder_sent              | boolean                  | boolean                  | NULL     | false
 last_reminder_sent_at          | timestamp with time zone | timestamp with time zone | NULL     | -
 total_reminders_sent           | integer                  | integer                  | NULL     | 0
 payment_confirmation_sent      | boolean                  | boolean                  | NULL     | false
 parent_acknowledged            | boolean                  | boolean                  | NULL     | false
 parent_acknowledged_at         | timestamp with time zone | timestamp with time zone | NULL     | -
 parent_signature_url           | text                     | text                     | NULL     | -
 legal_notice_sent              | boolean                  | boolean                  | NULL     | false
 legal_notice_date              | date                     | date                     | NULL     | -
 payment_behavior_score         | integer                  | integer                  | NULL     | 0
 payment_history_category       | character varying        | character varying(30)    | NULL     | -
 status                         | character varying        | character varying(30)    | NULL     | 'ACTIVE'::character varying
 is_active                      | boolean                  | boolean                  | NULL     | true
 notes                          | text                     | text                     | NULL     | -
 metadata                       | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 created_at                     | timestamp with time zone | timestamp with time zone | NULL     | now()
 updated_at                     | timestamp with time zone | timestamp with time zone | NULL     | now()
(116 rows)


### student_health_profiles

               Column               |           Type           |        Full Type         | Nullable |           Default           
------------------------------------+--------------------------+--------------------------+----------+-----------------------------
 id                                 | uuid                     | uuid                     | NOT NULL | uuid_generate_v4()
 school_id                          | uuid                     | uuid                     | NOT NULL | -
 profile_code                       | character varying        | character varying(50)    | NOT NULL | -
 student_id                         | uuid                     | uuid                     | NOT NULL | -
 academic_year_id                   | uuid                     | uuid                     | NULL     | -
 blood_group                        | character varying        | character varying(5)     | NULL     | -
 blood_group_verified               | boolean                  | boolean                  | NULL     | false
 height_cm                          | numeric                  | numeric                  | NULL     | -
 weight_kg                          | numeric                  | numeric                  | NULL     | -
 bmi                                | numeric                  | numeric                  | NULL     | -
 bmi_category                       | character varying        | character varying(30)    | NULL     | -
 last_measured_date                 | date                     | date                     | NULL     | -
 vision_left_eye                    | character varying        | character varying(20)    | NULL     | -
 vision_right_eye                   | character varying        | character varying(20)    | NULL     | -
 wears_glasses                      | boolean                  | boolean                  | NULL     | false
 glasses_prescription               | text                     | text                     | NULL     | -
 last_eye_checkup_date              | date                     | date                     | NULL     | -
 has_color_blindness                | boolean                  | boolean                  | NULL     | false
 dental_condition                   | character varying        | character varying(50)    | NULL     | -
 has_cavities                       | boolean                  | boolean                  | NULL     | false
 cavities_count                     | integer                  | integer                  | NULL     | -
 requires_dental_treatment          | boolean                  | boolean                  | NULL     | false
 last_dental_checkup_date           | date                     | date                     | NULL     | -
 hearing_status                     | character varying        | character varying(30)    | NULL     | 'NORMAL'::character varying
 requires_hearing_aid               | boolean                  | boolean                  | NULL     | false
 last_hearing_test_date             | date                     | date                     | NULL     | -
 has_chronic_conditions             | boolean                  | boolean                  | NULL     | false
 chronic_conditions                 | ARRAY                    | ARRAY                    | NULL     | -
 chronic_conditions_details         | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 has_allergies                      | boolean                  | boolean                  | NULL     | false
 allergies                          | ARRAY                    | ARRAY                    | NULL     | -
 allergy_severity                   | ARRAY                    | ARRAY                    | NULL     | -
 allergy_triggers                   | ARRAY                    | ARRAY                    | NULL     | -
 has_food_allergies                 | boolean                  | boolean                  | NULL     | false
 food_allergies                     | ARRAY                    | ARRAY                    | NULL     | -
 has_drug_allergies                 | boolean                  | boolean                  | NULL     | false
 drug_allergies                     | ARRAY                    | ARRAY                    | NULL     | -
 has_asthma                         | boolean                  | boolean                  | NULL     | false
 asthma_severity                    | character varying        | character varying(30)    | NULL     | -
 asthma_triggers                    | ARRAY                    | ARRAY                    | NULL     | -
 has_diabetes                       | boolean                  | boolean                  | NULL     | false
 diabetes_type                      | character varying        | character varying(30)    | NULL     | -
 insulin_dependent                  | boolean                  | boolean                  | NULL     | false
 has_epilepsy                       | boolean                  | boolean                  | NULL     | false
 seizure_frequency                  | character varying        | character varying(50)    | NULL     | -
 seizure_precautions                | text                     | text                     | NULL     | -
 has_heart_condition                | boolean                  | boolean                  | NULL     | false
 heart_condition_details            | text                     | text                     | NULL     | -
 has_adhd                           | boolean                  | boolean                  | NULL     | false
 has_autism                         | boolean                  | boolean                  | NULL     | false
 has_dyslexia                       | boolean                  | boolean                  | NULL     | false
 special_needs                      | ARRAY                    | ARRAY                    | NULL     | -
 on_regular_medication              | boolean                  | boolean                  | NULL     | false
 current_medications                | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 has_surgical_history               | boolean                  | boolean                  | NULL     | false
 surgeries                          | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 family_diabetes                    | boolean                  | boolean                  | NULL     | false
 family_heart_disease               | boolean                  | boolean                  | NULL     | false
 family_cancer                      | boolean                  | boolean                  | NULL     | false
 family_asthma                      | boolean                  | boolean                  | NULL     | false
 family_medical_history             | text                     | text                     | NULL     | -
 emergency_contact_name             | character varying        | character varying(100)   | NOT NULL | -
 emergency_contact_relation         | character varying        | character varying(50)    | NOT NULL | -
 emergency_contact_phone            | character varying        | character varying(15)    | NOT NULL | -
 emergency_contact_alternate        | character varying        | character varying(15)    | NULL     | -
 emergency_contact_2_name           | character varying        | character varying(100)   | NULL     | -
 emergency_contact_2_phone          | character varying        | character varying(15)    | NULL     | -
 has_health_insurance               | boolean                  | boolean                  | NULL     | false
 insurance_provider                 | character varying        | character varying(200)   | NULL     | -
 insurance_policy_number            | character varying        | character varying(50)    | NULL     | -
 insurance_valid_till               | date                     | date                     | NULL     | -
 family_doctor_name                 | character varying        | character varying(100)   | NULL     | -
 family_doctor_phone                | character varying        | character varying(15)    | NULL     | -
 family_doctor_address              | text                     | text                     | NULL     | -
 dietary_restrictions               | ARRAY                    | ARRAY                    | NULL     | -
 food_preferences                   | text                     | text                     | NULL     | -
 fitness_level                      | character varying        | character varying(30)    | NULL     | -
 can_participate_sports             | boolean                  | boolean                  | NULL     | true
 sports_restrictions                | ARRAY                    | ARRAY                    | NULL     | -
 swimming_ability                   | character varying        | character varying(30)    | NULL     | -
 immunization_complete              | boolean                  | boolean                  | NULL     | false
 immunization_percentage            | numeric                  | numeric                  | NULL     | -
 pending_vaccinations               | ARRAY                    | ARRAY                    | NULL     | -
 mental_health_support_required     | boolean                  | boolean                  | NULL     | false
 counseling_sessions_count          | integer                  | integer                  | NULL     | 0
 last_counseling_date               | date                     | date                     | NULL     | -
 requires_special_care              | boolean                  | boolean                  | NULL     | false
 special_care_instructions          | text                     | text                     | NULL     | -
 requires_medication_at_school      | boolean                  | boolean                  | NULL     | false
 school_medication_instructions     | text                     | text                     | NULL     | -
 requires_supervision               | boolean                  | boolean                  | NULL     | false
 supervision_instructions           | text                     | text                     | NULL     | -
 last_health_checkup_date           | date                     | date                     | NULL     | -
 next_health_checkup_due            | date                     | date                     | NULL     | -
 last_vaccination_date              | date                     | date                     | NULL     | -
 overall_health_status              | character varying        | character varying(30)    | NULL     | 'GOOD'::character varying
 health_risk_category               | character varying        | character varying(30)    | NULL     | 'LOW'::character varying
 medical_certificate_url            | text                     | text                     | NULL     | -
 fitness_certificate_url            | text                     | text                     | NULL     | -
 vaccination_card_url               | text                     | text                     | NULL     | -
 medical_reports                    | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 parent_consent_emergency_treatment | boolean                  | boolean                  | NULL     | false
 parent_consent_medication          | boolean                  | boolean                  | NULL     | false
 consent_date                       | date                     | date                     | NULL     | -
 status                             | character varying        | character varying(30)    | NULL     | 'ACTIVE'::character varying
 is_active                          | boolean                  | boolean                  | NULL     | true
 metadata                           | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 notes                              | text                     | text                     | NULL     | -
 medical_notes                      | text                     | text                     | NULL     | -
 created_by                         | uuid                     | uuid                     | NULL     | -
 created_at                         | timestamp with time zone | timestamp with time zone | NULL     | now()
 updated_at                         | timestamp with time zone | timestamp with time zone | NULL     | now()
(112 rows)


### student_hostel_assignments

            Column             |           Type           |        Full Type         | Nullable |              Default               
-------------------------------+--------------------------+--------------------------+----------+------------------------------------
 id                            | uuid                     | uuid                     | NOT NULL | uuid_generate_v4()
 school_id                     | uuid                     | uuid                     | NOT NULL | -
 academic_year_id              | uuid                     | uuid                     | NOT NULL | -
 assignment_code               | character varying        | character varying(50)    | NOT NULL | -
 student_id                    | uuid                     | uuid                     | NOT NULL | -
 class_id                      | uuid                     | uuid                     | NULL     | -
 section_id                    | uuid                     | uuid                     | NULL     | -
 hostel_building_id            | uuid                     | uuid                     | NOT NULL | -
 hostel_room_id                | uuid                     | uuid                     | NOT NULL | -
 bed_number                    | integer                  | integer                  | NULL     | -
 bed_position                  | character varying        | character varying(100)   | NULL     | -
 allocation_date               | date                     | date                     | NOT NULL | CURRENT_DATE
 check_in_date                 | date                     | date                     | NOT NULL | -
 expected_check_out_date       | date                     | date                     | NULL     | -
 actual_check_out_date         | date                     | date                     | NULL     | -
 is_permanent                  | boolean                  | boolean                  | NULL     | true
 assignment_type               | character varying        | character varying(30)    | NULL     | 'REGULAR'::character varying
 parent_name                   | character varying        | character varying(200)   | NOT NULL | -
 parent_phone                  | character varying        | character varying(15)    | NOT NULL | -
 parent_email                  | character varying        | character varying(100)   | NULL     | -
 parent_address                | text                     | text                     | NULL     | -
 local_guardian_name           | character varying        | character varying(200)   | NULL     | -
 local_guardian_phone          | character varying        | character varying(15)    | NULL     | -
 local_guardian_relation       | character varying        | character varying(50)    | NULL     | -
 emergency_contact_1_name      | character varying        | character varying(100)   | NOT NULL | -
 emergency_contact_1_phone     | character varying        | character varying(15)    | NOT NULL | -
 emergency_contact_1_relation  | character varying        | character varying(50)    | NULL     | -
 emergency_contact_2_name      | character varying        | character varying(100)   | NULL     | -
 emergency_contact_2_phone     | character varying        | character varying(15)    | NULL     | -
 blood_group                   | character varying        | character varying(5)     | NULL     | -
 has_medical_conditions        | boolean                  | boolean                  | NULL     | false
 medical_conditions            | ARRAY                    | ARRAY                    | NULL     | -
 has_allergies                 | boolean                  | boolean                  | NULL     | false
 allergies                     | ARRAY                    | ARRAY                    | NULL     | -
 current_medications           | ARRAY                    | ARRAY                    | NULL     | -
 requires_special_care         | boolean                  | boolean                  | NULL     | false
 special_care_instructions     | text                     | text                     | NULL     | -
 medical_insurance_available   | boolean                  | boolean                  | NULL     | false
 insurance_company             | character varying        | character varying(100)   | NULL     | -
 insurance_policy_number       | character varying        | character varying(50)    | NULL     | -
 family_doctor_name            | character varying        | character varying(100)   | NULL     | -
 family_doctor_phone           | character varying        | character varying(15)    | NULL     | -
 food_preference               | character varying        | character varying(30)    | NULL     | 'VEG'::character varying
 has_food_allergies            | boolean                  | boolean                  | NULL     | false
 food_allergies                | ARRAY                    | ARRAY                    | NULL     | -
 special_dietary_requirements  | text                     | text                     | NULL     | -
 mess_opt_in                   | boolean                  | boolean                  | NULL     | true
 monthly_hostel_fee            | numeric                  | numeric                  | NOT NULL | -
 monthly_mess_fee              | numeric                  | numeric                  | NULL     | -
 security_deposit              | numeric                  | numeric                  | NULL     | -
 total_monthly_fee             | numeric                  | numeric                  | NULL     | -
 discount_applicable           | boolean                  | boolean                  | NULL     | false
 discount_percentage           | numeric                  | numeric                  | NULL     | -
 discount_amount               | numeric                  | numeric                  | NULL     | -
 actual_fee_payable            | numeric                  | numeric                  | NULL     | -
 security_deposit_paid         | boolean                  | boolean                  | NULL     | false
 security_deposit_payment_date | date                     | date                     | NULL     | -
 total_fee_paid                | numeric                  | numeric                  | NULL     | 0.00
 outstanding_fee               | numeric                  | numeric                  | NULL     | -
 payment_status                | character varying        | character varying(30)    | NULL     | 'PENDING'::character varying
 last_payment_date             | date                     | date                     | NULL     | -
 checked_in                    | boolean                  | boolean                  | NULL     | false
 check_in_time                 | time without time zone   | time without time zone   | NULL     | -
 checked_in_by                 | character varying        | character varying(100)   | NULL     | -
 belongings_received           | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 room_key_issued               | boolean                  | boolean                  | NULL     | false
 room_key_number               | character varying        | character varying(20)    | NULL     | -
 id_card_issued                | boolean                  | boolean                  | NULL     | false
 mattress_issued               | boolean                  | boolean                  | NULL     | true
 pillow_issued                 | boolean                  | boolean                  | NULL     | true
 bedsheet_issued               | boolean                  | boolean                  | NULL     | true
 blanket_issued                | boolean                  | boolean                  | NULL     | false
 assets_issued                 | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 checked_out                   | boolean                  | boolean                  | NULL     | false
 check_out_time                | time without time zone   | time without time zone   | NULL     | -
 room_key_returned             | boolean                  | boolean                  | NULL     | false
 room_inspection_done          | boolean                  | boolean                  | NULL     | false
 room_condition_on_checkout    | character varying        | character varying(30)    | NULL     | -
 damage_charges                | numeric                  | numeric                  | NULL     | 0.00
 damage_description            | text                     | text                     | NULL     | -
 security_deposit_refunded     | boolean                  | boolean                  | NULL     | false
 refund_amount                 | numeric                  | numeric                  | NULL     | -
 refund_date                   | date                     | date                     | NULL     | -
 current_roommates             | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 roommate_preferences          | text                     | text                     | NULL     | -
 behavior_rating               | numeric                  | numeric                  | NULL     | -
 conduct_notes                 | text                     | text                     | NULL     | -
 disciplinary_actions          | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 warning_count                 | integer                  | integer                  | NULL     | 0
 attendance_percentage         | numeric                  | numeric                  | NULL     | 0.00
 total_days_present            | integer                  | integer                  | NULL     | 0
 total_days_absent             | integer                  | integer                  | NULL     | 0
 total_late_entries            | integer                  | integer                  | NULL     | 0
 leave_balance_days            | integer                  | integer                  | NULL     | 0
 leaves_taken                  | integer                  | integer                  | NULL     | 0
 current_leave_status          | character varying        | character varying(30)    | NULL     | 'PRESENT'::character varying
 on_leave_since                | date                     | date                     | NULL     | -
 expected_return_date          | date                     | date                     | NULL     | -
 visitor_allowed               | boolean                  | boolean                  | NULL     | true
 visiting_hours_start          | time without time zone   | time without time zone   | NULL     | '09:00:00'::time without time zone
 visiting_hours_end            | time without time zone   | time without time zone   | NULL     | '18:00:00'::time without time zone
 parent_visit_count            | integer                  | integer                  | NULL     | 0
 has_out_pass                  | boolean                  | boolean                  | NULL     | true
 night_out_allowed             | boolean                  | boolean                  | NULL     | false
 weekend_out_allowed           | boolean                  | boolean                  | NULL     | true
 curfew_time                   | time without time zone   | time without time zone   | NULL     | '22:00:00'::time without time zone
 complaint_count               | integer                  | integer                  | NULL     | 0
 feedback_rating               | numeric                  | numeric                  | NULL     | -
 parent_satisfaction_rating    | numeric                  | numeric                  | NULL     | -
 status                        | character varying        | character varying(30)    | NULL     | 'ACTIVE'::character varying
 is_active                     | boolean                  | boolean                  | NULL     | true
 suspension_start_date         | date                     | date                     | NULL     | -
 discontinuation_date          | date                     | date                     | NULL     | -
 discontinuation_reason        | text                     | text                     | NULL     | -
 transfer_to_room_id           | uuid                     | uuid                     | NULL     | -
 transfer_date                 | date                     | date                     | NULL     | -
 admission_form_submitted      | boolean                  | boolean                  | NULL     | false
 parent_consent_form_signed    | boolean                  | boolean                  | NULL     | false
 medical_certificate_submitted | boolean                  | boolean                  | NULL     | false
 documents_verified            | boolean                  | boolean                  | NULL     | false
 document_urls                 | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 sms_alerts_enabled            | boolean                  | boolean                  | NULL     | true
 email_alerts_enabled          | boolean                  | boolean                  | NULL     | true
 previous_rooms                | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 metadata                      | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 notes                         | text                     | text                     | NULL     | -
 warden_notes                  | text                     | text                     | NULL     | -
 created_by                    | uuid                     | uuid                     | NULL     | -
 created_at                    | timestamp with time zone | timestamp with time zone | NULL     | now()
 updated_at                    | timestamp with time zone | timestamp with time zone | NULL     | now()
(130 rows)


### student_parents

       Column       |           Type           |        Full Type         | Nullable |      Default      
--------------------+--------------------------+--------------------------+----------+-------------------
 id                 | uuid                     | uuid                     | NOT NULL | gen_random_uuid()
 student_id         | uuid                     | uuid                     | NOT NULL | -
 parent_id          | uuid                     | uuid                     | NOT NULL | -
 relationship       | character varying        | character varying(50)    | NOT NULL | -
 is_primary_contact | boolean                  | boolean                  | NULL     | false
 is_fee_payer       | boolean                  | boolean                  | NULL     | false
 created_at         | timestamp with time zone | timestamp with time zone | NOT NULL | now()
(7 rows)


### student_submissions

            Column            |           Type           |        Full Type         | Nullable |            Default             
------------------------------+--------------------------+--------------------------+----------+--------------------------------
 id                           | uuid                     | uuid                     | NOT NULL | uuid_generate_v4()
 school_id                    | uuid                     | uuid                     | NOT NULL | -
 academic_year_id             | uuid                     | uuid                     | NOT NULL | -
 submission_code              | character varying        | character varying(50)    | NOT NULL | -
 submission_number            | integer                  | integer                  | NULL     | -
 homework_assignment_id       | uuid                     | uuid                     | NOT NULL | -
 assignment_title             | character varying        | character varying(300)   | NULL     | -
 student_id                   | uuid                     | uuid                     | NOT NULL | -
 student_name                 | character varying        | character varying(200)   | NULL     | -
 student_admission_number     | character varying        | character varying(50)    | NULL     | -
 class_id                     | uuid                     | uuid                     | NOT NULL | -
 section_id                   | uuid                     | uuid                     | NULL     | -
 is_group_submission          | boolean                  | boolean                  | NULL     | false
 group_name                   | character varying        | character varying(100)   | NULL     | -
 group_members                | ARRAY                    | ARRAY                    | NULL     | -
 group_member_names           | ARRAY                    | ARRAY                    | NULL     | -
 group_leader_id              | uuid                     | uuid                     | NULL     | -
 submission_date              | date                     | date                     | NOT NULL | CURRENT_DATE
 submission_time              | time without time zone   | time without time zone   | NULL     | CURRENT_TIME
 submission_timestamp         | timestamp with time zone | timestamp with time zone | NULL     | now()
 days_taken                   | integer                  | integer                  | NULL     | -
 hours_taken                  | numeric                  | numeric                  | NULL     | -
 is_late                      | boolean                  | boolean                  | NULL     | false
 days_late                    | integer                  | integer                  | NULL     | 0
 late_penalty_applied         | boolean                  | boolean                  | NULL     | false
 late_penalty_percentage      | numeric                  | numeric                  | NULL     | -
 submission_text              | text                     | text                     | NULL     | -
 submission_notes             | text                     | text                     | NULL     | -
 answer_content               | text                     | text                     | NULL     | -
 solution_steps               | text                     | text                     | NULL     | -
 has_attachments              | boolean                  | boolean                  | NULL     | false
 submitted_files              | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 total_files_count            | integer                  | integer                  | NULL     | 0
 total_files_size_mb          | numeric                  | numeric                  | NULL     | -
 image_urls                   | ARRAY                    | ARRAY                    | NULL     | -
 document_urls                | ARRAY                    | ARRAY                    | NULL     | -
 video_urls                   | ARRAY                    | ARRAY                    | NULL     | -
 handwritten_photo_urls       | ARRAY                    | ARRAY                    | NULL     | -
 scanned_copy_url             | text                     | text                     | NULL     | -
 parent_signature_required    | boolean                  | boolean                  | NULL     | false
 parent_signature_provided    | boolean                  | boolean                  | NULL     | false
 parent_signature_image_url   | text                     | text                     | NULL     | -
 parent_signature_date        | date                     | date                     | NULL     | -
 parent_remarks               | text                     | text                     | NULL     | -
 submission_method            | character varying        | character varying(30)    | NULL     | 'ONLINE'::character varying
 submitted_via_app            | boolean                  | boolean                  | NULL     | true
 device_type                  | character varying        | character varying(30)    | NULL     | -
 ip_address                   | inet                     | inet                     | NULL     | -
 user_agent                   | text                     | text                     | NULL     | -
 physical_submission_received | boolean                  | boolean                  | NULL     | false
 physical_submission_date     | date                     | date                     | NULL     | -
 received_by                  | uuid                     | uuid                     | NULL     | -
 physical_copy_location       | character varying        | character varying(200)   | NULL     | -
 is_resubmission              | boolean                  | boolean                  | NULL     | false
 resubmission_number          | integer                  | integer                  | NULL     | 0
 previous_submission_id       | uuid                     | uuid                     | NULL     | -
 reason_for_resubmission      | text                     | text                     | NULL     | -
 version_number               | integer                  | integer                  | NULL     | 1
 status                       | character varying        | character varying(30)    | NULL     | 'SUBMITTED'::character varying
 submission_status            | character varying        | character varying(30)    | NULL     | 'COMPLETE'::character varying
 plagiarism_check_done        | boolean                  | boolean                  | NULL     | false
 plagiarism_check_timestamp   | timestamp with time zone | timestamp with time zone | NULL     | -
 plagiarism_score             | numeric                  | numeric                  | NULL     | -
 has_plagiarism_issues        | boolean                  | boolean                  | NULL     | false
 plagiarism_report_url        | text                     | text                     | NULL     | -
 matched_sources              | ARRAY                    | ARRAY                    | NULL     | -
 plagiarism_severity          | character varying        | character varying(20)    | NULL     | -
 plagiarism_action_taken      | text                     | text                     | NULL     | -
 completeness_percentage      | numeric                  | numeric                  | NULL     | -
 word_count                   | integer                  | integer                  | NULL     | -
 page_count                   | integer                  | integer                  | NULL     | -
 meets_requirements           | boolean                  | boolean                  | NULL     | -
 requirements_met             | ARRAY                    | ARRAY                    | NULL     | -
 requirements_missing         | ARRAY                    | ARRAY                    | NULL     | -
 student_difficulty_rating    | integer                  | integer                  | NULL     | -
 student_time_spent_hours     | numeric                  | numeric                  | NULL     | -
 student_confidence_level     | character varying        | character varying(20)    | NULL     | -
 student_self_comments        | text                     | text                     | NULL     | -
 help_taken_from              | character varying        | character varying(200)   | NULL     | -
 is_evaluated                 | boolean                  | boolean                  | NULL     | false
 evaluated_at                 | timestamp with time zone | timestamp with time zone | NULL     | -
 evaluated_by                 | uuid                     | uuid                     | NULL     | -
 evaluation_id                | uuid                     | uuid                     | NULL     | -
 marks_obtained               | numeric                  | numeric                  | NULL     | -
 grade                        | character varying        | character varying(10)    | NULL     | -
 percentage                   | numeric                  | numeric                  | NULL     | -
 result_status                | character varying        | character varying(20)    | NULL     | -
 teacher_quick_comments       | text                     | text                     | NULL     | -
 requires_improvement         | boolean                  | boolean                  | NULL     | false
 improvement_areas            | ARRAY                    | ARRAY                    | NULL     | -
 is_exemplary                 | boolean                  | boolean                  | NULL     | false
 featured_in_display          | boolean                  | boolean                  | NULL     | false
 received_award               | boolean                  | boolean                  | NULL     | false
 award_name                   | character varying        | character varying(100)   | NULL     | -
 student_notified             | boolean                  | boolean                  | NULL     | false
 parent_notified              | boolean                  | boolean                  | NULL     | false
 notification_sent_at         | timestamp with time zone | timestamp with time zone | NULL     | -
 viewed_by_teacher            | boolean                  | boolean                  | NULL     | false
 teacher_view_count           | integer                  | integer                  | NULL     | 0
 first_viewed_by_teacher_at   | timestamp with time zone | timestamp with time zone | NULL     | -
 parent_viewed                | boolean                  | boolean                  | NULL     | false
 parent_view_count            | integer                  | integer                  | NULL     | 0
 student_acknowledged         | boolean                  | boolean                  | NULL     | false
 student_acknowledgment_date  | date                     | date                     | NULL     | -
 flagged_for_review           | boolean                  | boolean                  | NULL     | false
 flag_reason                  | text                     | text                     | NULL     | -
 flagged_by                   | uuid                     | uuid                     | NULL     | -
 requires_discussion          | boolean                  | boolean                  | NULL     | false
 metadata                     | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 custom_fields                | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 tags                         | ARRAY                    | ARRAY                    | NULL     | -
 notes                        | text                     | text                     | NULL     | -
 created_by                   | uuid                     | uuid                     | NULL     | -
 created_at                   | timestamp with time zone | timestamp with time zone | NULL     | now()
 updated_at                   | timestamp with time zone | timestamp with time zone | NULL     | now()
(115 rows)


### student_transport_assignments

              Column              |           Type           |        Full Type         | Nullable |           Default            
----------------------------------+--------------------------+--------------------------+----------+------------------------------
 id                               | uuid                     | uuid                     | NOT NULL | uuid_generate_v4()
 school_id                        | uuid                     | uuid                     | NOT NULL | -
 academic_year_id                 | uuid                     | uuid                     | NOT NULL | -
 assignment_code                  | character varying        | character varying(50)    | NOT NULL | -
 student_id                       | uuid                     | uuid                     | NOT NULL | -
 class_id                         | uuid                     | uuid                     | NULL     | -
 section_id                       | uuid                     | uuid                     | NULL     | -
 transport_route_id               | uuid                     | uuid                     | NOT NULL | -
 pickup_stop_name                 | character varying        | character varying(200)   | NULL     | -
 pickup_stop_number               | integer                  | integer                  | NULL     | -
 pickup_time                      | time without time zone   | time without time zone   | NULL     | -
 drop_stop_name                   | character varying        | character varying(200)   | NULL     | -
 drop_stop_number                 | integer                  | integer                  | NULL     | -
 drop_time                        | time without time zone   | time without time zone   | NULL     | -
 distance_from_school_km          | numeric                  | numeric                  | NULL     | -
 service_opted                    | character varying        | character varying(30)    | NULL     | 'BOTH'::character varying
 assigned_vehicle_id              | uuid                     | uuid                     | NULL     | -
 assigned_driver_id               | uuid                     | uuid                     | NULL     | -
 vehicle_number                   | character varying        | character varying(20)    | NULL     | -
 driver_name                      | character varying        | character varying(200)   | NULL     | -
 driver_mobile                    | character varying        | character varying(15)    | NULL     | -
 seat_number                      | character varying        | character varying(10)    | NULL     | -
 is_window_seat                   | boolean                  | boolean                  | NULL     | -
 parent_name                      | character varying        | character varying(200)   | NULL     | -
 parent_mobile                    | character varying        | character varying(15)    | NOT NULL | -
 parent_email                     | character varying        | character varying(100)   | NULL     | -
 alternate_pickup_person_name     | character varying        | character varying(200)   | NULL     | -
 alternate_pickup_person_mobile   | character varying        | character varying(15)    | NULL     | -
 alternate_pickup_person_relation | character varying        | character varying(50)    | NULL     | -
 emergency_contact_name           | character varying        | character varying(100)   | NULL     | -
 emergency_contact_phone          | character varying        | character varying(15)    | NULL     | -
 emergency_contact_relation       | character varying        | character varying(50)    | NULL     | -
 pickup_address                   | text                     | text                     | NOT NULL | -
 pickup_landmark                  | character varying        | character varying(200)   | NULL     | -
 pickup_latitude                  | numeric                  | numeric                  | NULL     | -
 pickup_longitude                 | numeric                  | numeric                  | NULL     | -
 drop_address                     | text                     | text                     | NULL     | -
 drop_landmark                    | character varying        | character varying(200)   | NULL     | -
 drop_latitude                    | numeric                  | numeric                  | NULL     | -
 drop_longitude                   | numeric                  | numeric                  | NULL     | -
 same_pickup_drop_location        | boolean                  | boolean                  | NULL     | true
 preferred_pickup_time            | time without time zone   | time without time zone   | NULL     | -
 preferred_drop_time              | time without time zone   | time without time zone   | NULL     | -
 flexible_timing                  | boolean                  | boolean                  | NULL     | false
 assignment_start_date            | date                     | date                     | NOT NULL | CURRENT_DATE
 assignment_end_date              | date                     | date                     | NULL     | -
 is_permanent                     | boolean                  | boolean                  | NULL     | true
 monthly_transport_fee            | numeric                  | numeric                  | NOT NULL | -
 annual_transport_fee             | numeric                  | numeric                  | NULL     | -
 fee_calculation_basis            | character varying        | character varying(30)    | NULL     | -
 discount_applicable              | boolean                  | boolean                  | NULL     | false
 discount_percentage              | numeric                  | numeric                  | NULL     | -
 discount_amount                  | numeric                  | numeric                  | NULL     | -
 discount_reason                  | text                     | text                     | NULL     | -
 actual_fee_payable               | numeric                  | numeric                  | NULL     | -
 total_fee_paid                   | numeric                  | numeric                  | NULL     | 0.00
 outstanding_fee                  | numeric                  | numeric                  | NULL     | -
 payment_status                   | character varying        | character varying(30)    | NULL     | 'PENDING'::character varying
 last_payment_date                | date                     | date                     | NULL     | -
 next_payment_due_date            | date                     | date                     | NULL     | -
 has_special_needs                | boolean                  | boolean                  | NULL     | false
 special_needs_description        | text                     | text                     | NULL     | -
 requires_wheelchair_access       | boolean                  | boolean                  | NULL     | false
 requires_attendant               | boolean                  | boolean                  | NULL     | false
 medical_conditions               | ARRAY                    | ARRAY                    | NULL     | -
 allergies                        | ARRAY                    | ARRAY                    | NULL     | -
 special_instructions             | text                     | text                     | NULL     | -
 has_rfid_card                    | boolean                  | boolean                  | NULL     | false
 rfid_card_number                 | character varying        | character varying(50)    | NULL     | -
 gps_tracking_enabled             | boolean                  | boolean                  | NULL     | true
 parent_app_access_enabled        | boolean                  | boolean                  | NULL     | true
 sms_alerts_enabled               | boolean                  | boolean                  | NULL     | true
 email_alerts_enabled             | boolean                  | boolean                  | NULL     | false
 total_trips_taken                | integer                  | integer                  | NULL     | 0
 pickup_attendance_count          | integer                  | integer                  | NULL     | 0
 drop_attendance_count            | integer                  | integer                  | NULL     | 0
 absent_count                     | integer                  | integer                  | NULL     | 0
 last_trip_date                   | date                     | date                     | NULL     | -
 attendance_percentage            | numeric                  | numeric                  | NULL     | 0.00
 behavior_rating                  | numeric                  | numeric                  | NULL     | -
 behavior_notes                   | text                     | text                     | NULL     | -
 parent_satisfaction_rating       | numeric                  | numeric                  | NULL     | -
 parent_feedback                  | text                     | text                     | NULL     | -
 complaint_count                  | integer                  | integer                  | NULL     | 0
 last_complaint_date              | date                     | date                     | NULL     | -
 status                           | character varying        | character varying(30)    | NULL     | 'ACTIVE'::character varying
 is_active                        | boolean                  | boolean                  | NULL     | true
 suspension_start_date            | date                     | date                     | NULL     | -
 suspension_end_date              | date                     | date                     | NULL     | -
 suspension_reason                | text                     | text                     | NULL     | -
 discontinuation_date             | date                     | date                     | NULL     | -
 discontinuation_reason           | text                     | text                     | NULL     | -
 address_proof_verified           | boolean                  | boolean                  | NULL     | false
 address_proof_document           | text                     | text                     | NULL     | -
 consent_form_signed              | boolean                  | boolean                  | NULL     | false
 consent_form_url                 | text                     | text                     | NULL     | -
 parent_id_verified               | boolean                  | boolean                  | NULL     | false
 route_change_notified            | boolean                  | boolean                  | NULL     | false
 fee_reminder_sent_count          | integer                  | integer                  | NULL     | 0
 last_fee_reminder_date           | date                     | date                     | NULL     | -
 was_on_waitlist                  | boolean                  | boolean                  | NULL     | false
 waitlist_join_date               | date                     | date                     | NULL     | -
 waitlist_cleared_date            | date                     | date                     | NULL     | -
 waitlist_position                | integer                  | integer                  | NULL     | -
 previous_route_id                | uuid                     | uuid                     | NULL     | -
 route_change_date                | date                     | date                     | NULL     | -
 route_change_reason              | text                     | text                     | NULL     | -
 route_change_history             | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 metadata                         | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 custom_fields                    | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 notes                            | text                     | text                     | NULL     | -
 internal_notes                   | text                     | text                     | NULL     | -
 created_by                       | uuid                     | uuid                     | NULL     | -
 created_at                       | timestamp with time zone | timestamp with time zone | NULL     | now()
 updated_at                       | timestamp with time zone | timestamp with time zone | NULL     | now()
(115 rows)


### students

          Column           |           Type           |        Full Type         | Nullable |           Default           
---------------------------+--------------------------+--------------------------+----------+-----------------------------
 id                        | uuid                     | uuid                     | NOT NULL | gen_random_uuid()
 school_id                 | uuid                     | uuid                     | NOT NULL | -
 user_profile_id           | uuid                     | uuid                     | NULL     | -
 admission_number          | character varying        | character varying(50)    | NOT NULL | -
 roll_number               | character varying        | character varying(20)    | NULL     | -
 first_name                | character varying        | character varying(100)   | NOT NULL | -
 middle_name               | character varying        | character varying(100)   | NULL     | -
 last_name                 | character varying        | character varying(100)   | NOT NULL | -
 date_of_birth             | date                     | date                     | NOT NULL | -
 gender                    | USER-DEFINED             | USER-DEFINED             | NOT NULL | -
 blood_group               | USER-DEFINED             | USER-DEFINED             | NULL     | -
 email                     | character varying        | character varying(100)   | NULL     | -
 phone                     | character varying        | character varying(15)    | NULL     | -
 address_line1             | character varying        | character varying(200)   | NULL     | -
 address_line2             | character varying        | character varying(200)   | NULL     | -
 city                      | character varying        | character varying(100)   | NULL     | -
 state                     | character varying        | character varying(100)   | NULL     | -
 postal_code               | character varying        | character varying(10)    | NULL     | -
 country                   | character varying        | character varying(50)    | NULL     | 'India'::character varying
 current_class_id          | uuid                     | uuid                     | NULL     | -
 current_section_id        | uuid                     | uuid                     | NULL     | -
 current_academic_year_id  | uuid                     | uuid                     | NULL     | -
 admission_date            | date                     | date                     | NOT NULL | -
 admission_class           | character varying        | character varying(50)    | NULL     | -
 status                    | USER-DEFINED             | USER-DEFINED             | NOT NULL | 'ACTIVE'::student_status
 aadhar_number             | character varying        | character varying(12)    | NULL     | -
 birth_certificate_url     | text                     | text                     | NULL     | -
 transfer_certificate_url  | text                     | text                     | NULL     | -
 photo_url                 | text                     | text                     | NULL     | -
 nationality               | character varying        | character varying(50)    | NULL     | 'Indian'::character varying
 religion                  | character varying        | character varying(50)    | NULL     | -
 caste_category            | character varying        | character varying(50)    | NULL     | -
 mother_tongue             | character varying        | character varying(50)    | NULL     | -
 has_special_needs         | boolean                  | boolean                  | NULL     | false
 special_needs_description | text                     | text                     | NULL     | -
 metadata                  | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 created_at                | timestamp with time zone | timestamp with time zone | NOT NULL | now()
 updated_at                | timestamp with time zone | timestamp with time zone | NOT NULL | now()
(38 rows)


### subjects

    Column    |           Type           |        Full Type         | Nullable |          Default          
--------------+--------------------------+--------------------------+----------+---------------------------
 id           | uuid                     | uuid                     | NOT NULL | gen_random_uuid()
 school_id    | uuid                     | uuid                     | NOT NULL | -
 subject_code | character varying        | character varying(20)    | NOT NULL | -
 subject_name | character varying        | character varying(100)   | NOT NULL | -
 short_name   | character varying        | character varying(50)    | NULL     | -
 subject_type | character varying        | character varying(30)    | NULL     | 'CORE'::character varying
 category     | character varying        | character varying(50)    | NULL     | -
 description  | text                     | text                     | NULL     | -
 is_active    | boolean                  | boolean                  | NOT NULL | true
 created_at   | timestamp with time zone | timestamp with time zone | NOT NULL | now()
 updated_at   | timestamp with time zone | timestamp with time zone | NOT NULL | now()
(11 rows)


### teacher_timetables

               Column               |           Type           |        Full Type         | Nullable |            Default            
------------------------------------+--------------------------+--------------------------+----------+-------------------------------
 id                                 | uuid                     | uuid                     | NOT NULL | uuid_generate_v4()
 school_id                          | uuid                     | uuid                     | NOT NULL | -
 academic_year_id                   | uuid                     | uuid                     | NOT NULL | -
 teacher_id                         | uuid                     | uuid                     | NOT NULL | -
 teacher_name                       | character varying        | character varying(200)   | NULL     | -
 employee_code                      | character varying        | character varying(50)    | NULL     | -
 department                         | character varying        | character varying(100)   | NULL     | -
 designation                        | character varying        | character varying(100)   | NULL     | -
 template_id                        | uuid                     | uuid                     | NULL     | -
 primary_subject_id                 | uuid                     | uuid                     | NULL     | -
 primary_subject_name               | character varying        | character varying(100)   | NULL     | -
 teaching_subjects                  | ARRAY                    | ARRAY                    | NULL     | -
 subject_names                      | ARRAY                    | ARRAY                    | NULL     | -
 total_subjects_teaching            | integer                  | integer                  | NULL     | 0
 total_periods_per_week             | integer                  | integer                  | NULL     | 0
 teaching_periods_per_week          | integer                  | integer                  | NULL     | 0
 supervision_periods_per_week       | integer                  | integer                  | NULL     | 0
 free_periods_per_week              | integer                  | integer                  | NULL     | 0
 periods_per_day                    | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 average_periods_per_day            | numeric                  | numeric                  | NULL     | -
 max_periods_in_a_day               | integer                  | integer                  | NULL     | 0
 min_periods_in_a_day               | integer                  | integer                  | NULL     | 0
 total_classes_assigned             | integer                  | integer                  | NULL     | 0
 total_sections_assigned            | integer                  | integer                  | NULL     | 0
 assigned_classes                   | ARRAY                    | ARRAY                    | NULL     | -
 assigned_sections                  | ARRAY                    | ARRAY                    | NULL     | -
 class_section_mapping              | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 is_class_teacher                   | boolean                  | boolean                  | NULL     | false
 class_teacher_of_class_id          | uuid                     | uuid                     | NULL     | -
 class_teacher_of_section_id        | uuid                     | uuid                     | NULL     | -
 monday_periods                     | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 tuesday_periods                    | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 wednesday_periods                  | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 thursday_periods                   | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 friday_periods                     | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 saturday_periods                   | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 sunday_periods                     | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 monday_total_periods               | integer                  | integer                  | NULL     | 0
 tuesday_total_periods              | integer                  | integer                  | NULL     | 0
 wednesday_total_periods            | integer                  | integer                  | NULL     | 0
 thursday_total_periods             | integer                  | integer                  | NULL     | 0
 friday_total_periods               | integer                  | integer                  | NULL     | 0
 saturday_total_periods             | integer                  | integer                  | NULL     | 0
 sunday_total_periods               | integer                  | integer                  | NULL     | 0
 monday_free_periods                | ARRAY                    | ARRAY                    | NULL     | ARRAY[]::integer[]
 tuesday_free_periods               | ARRAY                    | ARRAY                    | NULL     | ARRAY[]::integer[]
 wednesday_free_periods             | ARRAY                    | ARRAY                    | NULL     | ARRAY[]::integer[]
 thursday_free_periods              | ARRAY                    | ARRAY                    | NULL     | ARRAY[]::integer[]
 friday_free_periods                | ARRAY                    | ARRAY                    | NULL     | ARRAY[]::integer[]
 saturday_free_periods              | ARRAY                    | ARRAY                    | NULL     | ARRAY[]::integer[]
 total_free_periods                 | integer                  | integer                  | NULL     | 0
 max_consecutive_periods            | integer                  | integer                  | NULL     | 0
 has_excessive_consecutive_periods  | boolean                  | boolean                  | NULL     | false
 consecutive_periods_details        | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 has_adequate_breaks                | boolean                  | boolean                  | NULL     | true
 break_time_minutes_per_day         | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 workload_percentage                | numeric                  | numeric                  | NULL     | -
 is_overloaded                      | boolean                  | boolean                  | NULL     | false
 is_underutilized                   | boolean                  | boolean                  | NULL     | false
 workload_status                    | character varying        | character varying(30)    | NULL     | 'BALANCED'::character varying
 recommended_adjustments            | text                     | text                     | NULL     | -
 primary_classroom                  | character varying        | character varying(50)    | NULL     | -
 room_changes_per_day               | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 total_room_transitions             | integer                  | integer                  | NULL     | 0
 requires_room_optimization         | boolean                  | boolean                  | NULL     | false
 has_supervision_duties             | boolean                  | boolean                  | NULL     | false
 assembly_supervision               | boolean                  | boolean                  | NULL     | false
 break_supervision                  | boolean                  | boolean                  | NULL     | false
 lunch_supervision                  | boolean                  | boolean                  | NULL     | false
 supervision_days                   | ARRAY                    | ARRAY                    | NULL     | -
 supervision_details                | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 exam_invigilation_duty             | boolean                  | boolean                  | NULL     | false
 extracurricular_activities         | ARRAY                    | ARRAY                    | NULL     | -
 total_additional_hours_per_week    | numeric                  | numeric                  | NULL     | 0
 total_conflicts                    | integer                  | integer                  | NULL     | 0
 schedule_conflicts                 | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 has_timing_conflicts               | boolean                  | boolean                  | NULL     | false
 has_location_conflicts             | boolean                  | boolean                  | NULL     | false
 total_leaves_this_year             | integer                  | integer                  | NULL     | 0
 upcoming_leaves                    | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 substitution_required_count        | integer                  | integer                  | NULL     | 0
 substitution_provided_count        | integer                  | integer                  | NULL     | 0
 can_provide_substitution           | boolean                  | boolean                  | NULL     | true
 available_for_substitution_periods | ARRAY                    | ARRAY                    | NULL     | ARRAY[]::integer[]
 preferred_time_slots               | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 avoid_time_slots                   | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 preferred_days                     | ARRAY                    | ARRAY                    | NULL     | -
 non_teaching_days                  | ARRAY                    | ARRAY                    | NULL     | -
 max_hours_per_day_preference       | numeric                  | numeric                  | NULL     | -
 attendance_percentage              | numeric                  | numeric                  | NULL     | 100
 punctuality_score                  | numeric                  | numeric                  | NULL     | 5
 syllabus_completion_average        | numeric                  | numeric                  | NULL     | -
 student_satisfaction_score         | numeric                  | numeric                  | NULL     | -
 is_validated                       | boolean                  | boolean                  | NULL     | false
 validated_at                       | timestamp with time zone | timestamp with time zone | NULL     | -
 validated_by                       | uuid                     | uuid                     | NULL     | -
 is_approved                        | boolean                  | boolean                  | NULL     | false
 approved_by                        | uuid                     | uuid                     | NULL     | -
 approved_at                        | timestamp with time zone | timestamp with time zone | NULL     | -
 teacher_consent                    | boolean                  | boolean                  | NULL     | false
 consent_date                       | date                     | date                     | NULL     | -
 effective_from                     | date                     | date                     | NOT NULL | -
 effective_to                       | date                     | date                     | NULL     | -
 is_currently_active                | boolean                  | boolean                  | NULL     | false
 last_modified_at                   | timestamp with time zone | timestamp with time zone | NULL     | -
 modification_count                 | integer                  | integer                  | NULL     | 0
 is_active                          | boolean                  | boolean                  | NULL     | true
 is_locked                          | boolean                  | boolean                  | NULL     | false
 efficiency_score                   | numeric                  | numeric                  | NULL     | -
 balance_score                      | numeric                  | numeric                  | NULL     | -
 satisfaction_score                 | numeric                  | numeric                  | NULL     | -
 metadata                           | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 preferences                        | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 notes                              | text                     | text                     | NULL     | -
 teacher_feedback                   | text                     | text                     | NULL     | -
 created_by                         | uuid                     | uuid                     | NULL     | -
 created_at                         | timestamp with time zone | timestamp with time zone | NULL     | now()
 updated_at                         | timestamp with time zone | timestamp with time zone | NULL     | now()
(118 rows)


### timetable_periods

            Column             |           Type           |        Full Type         | Nullable |            Default             
-------------------------------+--------------------------+--------------------------+----------+--------------------------------
 id                            | uuid                     | uuid                     | NOT NULL | uuid_generate_v4()
 school_id                     | uuid                     | uuid                     | NOT NULL | -
 academic_year_id              | uuid                     | uuid                     | NOT NULL | -
 period_code                   | character varying        | character varying(50)    | NOT NULL | -
 period_number                 | integer                  | integer                  | NOT NULL | -
 template_id                   | uuid                     | uuid                     | NOT NULL | -
 class_id                      | uuid                     | uuid                     | NOT NULL | -
 section_id                    | uuid                     | uuid                     | NOT NULL | -
 class_name                    | character varying        | character varying(100)   | NULL     | -
 section_name                  | character varying        | character varying(50)    | NULL     | -
 day_of_week                   | integer                  | integer                  | NOT NULL | -
 day_name                      | character varying        | character varying(20)    | NULL     | -
 period_type                   | character varying        | character varying(30)    | NOT NULL | 'TEACHING'::character varying
 start_time                    | time without time zone   | time without time zone   | NOT NULL | -
 end_time                      | time without time zone   | time without time zone   | NOT NULL | -
 duration_minutes              | integer                  | integer                  | NULL     | -
 subject_id                    | uuid                     | uuid                     | NULL     | -
 subject_name                  | character varying        | character varying(100)   | NULL     | -
 subject_code                  | character varying        | character varying(20)    | NULL     | -
 subject_type                  | character varying        | character varying(30)    | NULL     | -
 teacher_id                    | uuid                     | uuid                     | NULL     | -
 teacher_name                  | character varying        | character varying(200)   | NULL     | -
 teacher_employee_code         | character varying        | character varying(50)    | NULL     | -
 co_teacher_id                 | uuid                     | uuid                     | NULL     | -
 co_teacher_name               | character varying        | character varying(200)   | NULL     | -
 is_team_teaching              | boolean                  | boolean                  | NULL     | false
 team_teachers                 | ARRAY                    | ARRAY                    | NULL     | -
 room_number                   | character varying        | character varying(50)    | NULL     | -
 room_type                     | character varying        | character varying(30)    | NULL     | -
 room_capacity                 | integer                  | integer                  | NULL     | -
 building_name                 | character varying        | character varying(100)   | NULL     | -
 floor_number                  | integer                  | integer                  | NULL     | -
 requires_special_room         | boolean                  | boolean                  | NULL     | false
 special_room_requirements     | text                     | text                     | NULL     | -
 is_lab_session                | boolean                  | boolean                  | NULL     | false
 lab_name                      | character varying        | character varying(100)   | NULL     | -
 lab_batch                     | character varying        | character varying(20)    | NULL     | -
 requires_projector            | boolean                  | boolean                  | NULL     | false
 requires_computer             | boolean                  | boolean                  | NULL     | false
 requires_smart_board          | boolean                  | boolean                  | NULL     | false
 requires_lab_equipment        | boolean                  | boolean                  | NULL     | false
 required_resources            | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 resource_allocation_status    | character varying        | character varying(30)    | NULL     | 'PENDING'::character varying
 student_group                 | character varying        | character varying(20)    | NULL     | -
 total_students                | integer                  | integer                  | NULL     | -
 student_ids                   | ARRAY                    | ARRAY                    | NULL     | -
 status                        | character varying        | character varying(30)    | NULL     | 'SCHEDULED'::character varying
 is_confirmed                  | boolean                  | boolean                  | NULL     | false
 confirmed_at                  | timestamp with time zone | timestamp with time zone | NULL     | -
 confirmed_by                  | uuid                     | uuid                     | NULL     | -
 is_substituted                | boolean                  | boolean                  | NULL     | false
 original_teacher_id           | uuid                     | uuid                     | NULL     | -
 substitute_teacher_id         | uuid                     | uuid                     | NULL     | -
 substitution_reason           | text                     | text                     | NULL     | -
 substitution_date             | date                     | date                     | NULL     | -
 substitution_id               | uuid                     | uuid                     | NULL     | -
 is_modified                   | boolean                  | boolean                  | NULL     | false
 modified_at                   | timestamp with time zone | timestamp with time zone | NULL     | -
 modified_by                   | uuid                     | uuid                     | NULL     | -
 modification_reason           | text                     | text                     | NULL     | -
 original_period_id            | uuid                     | uuid                     | NULL     | -
 is_swapped                    | boolean                  | boolean                  | NULL     | false
 swapped_with_period_id        | uuid                     | uuid                     | NULL     | -
 swap_reason                   | text                     | text                     | NULL     | -
 attendance_marked             | boolean                  | boolean                  | NULL     | false
 attendance_marked_at          | timestamp with time zone | timestamp with time zone | NULL     | -
 attendance_marked_by          | uuid                     | uuid                     | NULL     | -
 present_count                 | integer                  | integer                  | NULL     | 0
 absent_count                  | integer                  | integer                  | NULL     | 0
 attendance_percentage         | numeric                  | numeric                  | NULL     | -
 topic_covered                 | text                     | text                     | NULL     | -
 chapter_name                  | character varying        | character varying(200)   | NULL     | -
 lesson_plan_id                | uuid                     | uuid                     | NULL     | -
 syllabus_coverage_percentage  | numeric                  | numeric                  | NULL     | -
 is_homework_assigned          | boolean                  | boolean                  | NULL     | false
 homework_id                   | uuid                     | uuid                     | NULL     | -
 teacher_notes                 | text                     | text                     | NULL     | -
 period_objectives             | text                     | text                     | NULL     | -
 teaching_method               | character varying        | character varying(30)    | NULL     | -
 engagement_score              | numeric                  | numeric                  | NULL     | -
 difficulty_level              | character varying        | character varying(20)    | NULL     | -
 student_feedback_summary      | text                     | text                     | NULL     | -
 learning_outcomes_achieved    | boolean                  | boolean                  | NULL     | -
 objectives_met                | boolean                  | boolean                  | NULL     | -
 effectiveness_rating          | integer                  | integer                  | NULL     | -
 has_conflicts                 | boolean                  | boolean                  | NULL     | false
 conflict_type                 | ARRAY                    | ARRAY                    | NULL     | -
 conflict_details              | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 conflict_resolved             | boolean                  | boolean                  | NULL     | false
 conflict_resolution           | text                     | text                     | NULL     | -
 special_instructions          | text                     | text                     | NULL     | -
 preparation_required          | text                     | text                     | NULL     | -
 is_assessment_period          | boolean                  | boolean                  | NULL     | false
 assessment_type               | character varying        | character varying(30)    | NULL     | -
 is_recurring                  | boolean                  | boolean                  | NULL     | true
 recurrence_pattern            | character varying        | character varying(30)    | NULL     | 'WEEKLY'::character varying
 recurrence_end_date           | date                     | date                     | NULL     | -
 is_exception                  | boolean                  | boolean                  | NULL     | false
 exception_date                | date                     | date                     | NULL     | -
 exception_reason              | text                     | text                     | NULL     | -
 priority_level                | integer                  | integer                  | NULL     | 1
 is_mandatory                  | boolean                  | boolean                  | NULL     | true
 is_flexible                   | boolean                  | boolean                  | NULL     | false
 can_be_rescheduled            | boolean                  | boolean                  | NULL     | true
 is_locked                     | boolean                  | boolean                  | NULL     | false
 locked_by                     | uuid                     | uuid                     | NULL     | -
 locked_at                     | timestamp with time zone | timestamp with time zone | NULL     | -
 lock_reason                   | text                     | text                     | NULL     | -
 total_occurrences             | integer                  | integer                  | NULL     | 0
 completed_occurrences         | integer                  | integer                  | NULL     | 0
 cancelled_occurrences         | integer                  | integer                  | NULL     | 0
 average_attendance_percentage | numeric                  | numeric                  | NULL     | -
 metadata                      | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 custom_fields                 | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 tags                          | ARRAY                    | ARRAY                    | NULL     | -
 notes                         | text                     | text                     | NULL     | -
 created_by                    | uuid                     | uuid                     | NULL     | -
 created_at                    | timestamp with time zone | timestamp with time zone | NULL     | now()
 updated_at                    | timestamp with time zone | timestamp with time zone | NULL     | now()
(119 rows)


### timetable_substitutions

             Column             |           Type           |        Full Type         | Nullable |            Default             
--------------------------------+--------------------------+--------------------------+----------+--------------------------------
 id                             | uuid                     | uuid                     | NOT NULL | uuid_generate_v4()
 school_id                      | uuid                     | uuid                     | NOT NULL | -
 academic_year_id               | uuid                     | uuid                     | NOT NULL | -
 substitution_code              | character varying        | character varying(50)    | NOT NULL | -
 substitution_request_number    | character varying        | character varying(50)    | NULL     | -
 absent_teacher_id              | uuid                     | uuid                     | NOT NULL | -
 absent_teacher_name            | character varying        | character varying(200)   | NULL     | -
 absent_teacher_employee_code   | character varying        | character varying(50)    | NULL     | -
 absence_type                   | character varying        | character varying(30)    | NOT NULL | -
 absence_reason                 | text                     | text                     | NULL     | -
 leave_application_id           | uuid                     | uuid                     | NULL     | -
 absence_date                   | date                     | date                     | NOT NULL | -
 absence_start_time             | time without time zone   | time without time zone   | NULL     | -
 absence_end_time               | time without time zone   | time without time zone   | NULL     | -
 is_full_day_absence            | boolean                  | boolean                  | NULL     | true
 is_partial_day_absence         | boolean                  | boolean                  | NULL     | false
 total_periods_affected         | integer                  | integer                  | NULL     | 0
 affected_period_ids            | ARRAY                    | ARRAY                    | NULL     | -
 affected_periods               | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 substitute_teacher_id          | uuid                     | uuid                     | NULL     | -
 substitute_teacher_name        | character varying        | character varying(200)   | NULL     | -
 substitute_employee_code       | character varying        | character varying(50)    | NULL     | -
 substitute_qualification       | character varying        | character varying(100)   | NULL     | -
 substitute_experience_years    | integer                  | integer                  | NULL     | -
 is_qualified_substitute        | boolean                  | boolean                  | NULL     | true
 qualification_match_percentage | integer                  | integer                  | NULL     | -
 assignment_method              | character varying        | character varying(30)    | NULL     | 'MANUAL'::character varying
 assigned_by                    | uuid                     | uuid                     | NULL     | -
 assigned_at                    | timestamp with time zone | timestamp with time zone | NULL     | -
 substitute_notified            | boolean                  | boolean                  | NULL     | false
 notification_sent_at           | timestamp with time zone | timestamp with time zone | NULL     | -
 notification_channels          | ARRAY                    | ARRAY                    | NULL     | -
 substitute_acceptance_status   | character varying        | character varying(30)    | NULL     | 'PENDING'::character varying
 accepted_at                    | timestamp with time zone | timestamp with time zone | NULL     | -
 declined_at                    | timestamp with time zone | timestamp with time zone | NULL     | -
 decline_reason                 | text                     | text                     | NULL     | -
 class_id                       | uuid                     | uuid                     | NOT NULL | -
 section_id                     | uuid                     | uuid                     | NOT NULL | -
 class_name                     | character varying        | character varying(100)   | NULL     | -
 section_name                   | character varying        | character varying(50)    | NULL     | -
 subject_id                     | uuid                     | uuid                     | NULL     | -
 subject_name                   | character varying        | character varying(100)   | NULL     | -
 period_number                  | integer                  | integer                  | NULL     | -
 period_time_range              | character varying        | character varying(50)    | NULL     | -
 room_number                    | character varying        | character varying(50)    | NULL     | -
 original_period_id             | uuid                     | uuid                     | NULL     | -
 teaching_instructions          | text                     | text                     | NULL     | -
 chapter_to_cover               | text                     | text                     | NULL     | -
 topics_to_teach                | ARRAY                    | ARRAY                    | NULL     | -
 lesson_plan_url                | text                     | text                     | NULL     | -
 teaching_materials_url         | text                     | text                     | NULL     | -
 classroom_management_notes     | text                     | text                     | NULL     | -
 special_student_needs          | text                     | text                     | NULL     | -
 attendance_required            | boolean                  | boolean                  | NULL     | true
 attendance_sheet_url           | text                     | text                     | NULL     | -
 has_alternative_arrangement    | boolean                  | boolean                  | NULL     | false
 alternative_arrangement_type   | character varying        | character varying(30)    | NULL     | -
 alternative_details            | text                     | text                     | NULL     | -
 has_multiple_substitutes       | boolean                  | boolean                  | NULL     | false
 substitute_assignments         | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 is_compensated                 | boolean                  | boolean                  | NULL     | true
 compensation_type              | character varying        | character varying(30)    | NULL     | -
 compensation_amount            | numeric                  | numeric                  | NULL     | -
 compensation_currency          | character varying        | character varying(10)    | NULL     | 'INR'::character varying
 compensation_processed         | boolean                  | boolean                  | NULL     | false
 compensation_date              | date                     | date                     | NULL     | -
 status                         | character varying        | character varying(30)    | NULL     | 'SCHEDULED'::character varying
 substitute_attended            | boolean                  | boolean                  | NULL     | -
 attendance_marked_at           | timestamp with time zone | timestamp with time zone | NULL     | -
 actual_start_time              | time without time zone   | time without time zone   | NULL     | -
 actual_end_time                | time without time zone   | time without time zone   | NULL     | -
 was_on_time                    | boolean                  | boolean                  | NULL     | true
 late_by_minutes                | integer                  | integer                  | NULL     | 0
 class_conducted                | boolean                  | boolean                  | NULL     | false
 topics_covered                 | text                     | text                     | NULL     | -
 syllabus_progress_maintained   | boolean                  | boolean                  | NULL     | true
 student_attendance_marked      | boolean                  | boolean                  | NULL     | false
 present_students               | integer                  | integer                  | NULL     | -
 absent_students                | integer                  | integer                  | NULL     | -
 substitute_feedback            | text                     | text                     | NULL     | -
 substitute_rating              | integer                  | integer                  | NULL     | -
 class_teacher_feedback         | text                     | text                     | NULL     | -
 class_teacher_rating           | integer                  | integer                  | NULL     | -
 student_feedback_summary       | text                     | text                     | NULL     | -
 any_issues_reported            | boolean                  | boolean                  | NULL     | false
 issues_description             | text                     | text                     | NULL     | -
 disciplinary_issues            | boolean                  | boolean                  | NULL     | false
 effectiveness_rating           | integer                  | integer                  | NULL     | -
 learning_continuity_maintained | boolean                  | boolean                  | NULL     | true
 would_recommend_substitute     | boolean                  | boolean                  | NULL     | true
 requires_approval              | boolean                  | boolean                  | NULL     | false
 approval_status                | character varying        | character varying(30)    | NULL     | 'APPROVED'::character varying
 approved_by                    | uuid                     | uuid                     | NULL     | -
 approved_at                    | timestamp with time zone | timestamp with time zone | NULL     | -
 rejected_by                    | uuid                     | uuid                     | NULL     | -
 rejection_reason               | text                     | text                     | NULL     | -
 is_emergency                   | boolean                  | boolean                  | NULL     | false
 emergency_arranged_at          | timestamp with time zone | timestamp with time zone | NULL     | -
 emergency_contact_person       | uuid                     | uuid                     | NULL     | -
 absent_teacher_informed        | boolean                  | boolean                  | NULL     | false
 class_teacher_informed         | boolean                  | boolean                  | NULL     | false
 principal_informed             | boolean                  | boolean                  | NULL     | false
 parents_informed               | boolean                  | boolean                  | NULL     | false
 communication_log              | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 preparation_time_minutes       | integer                  | integer                  | NULL     | -
 notice_period_hours            | numeric                  | numeric                  | NULL     | -
 short_notice                   | boolean                  | boolean                  | NULL     | false
 is_recurring_substitution      | boolean                  | boolean                  | NULL     | false
 recurrence_pattern             | character varying        | character varying(30)    | NULL     | -
 recurrence_end_date            | date                     | date                     | NULL     | -
 parent_substitution_id         | uuid                     | uuid                     | NULL     | -
 is_active                      | boolean                  | boolean                  | NULL     | true
 is_cancelled                   | boolean                  | boolean                  | NULL     | false
 cancelled_at                   | timestamp with time zone | timestamp with time zone | NULL     | -
 cancellation_reason            | text                     | text                     | NULL     | -
 metadata                       | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 custom_fields                  | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 notes                          | text                     | text                     | NULL     | -
 internal_notes                 | text                     | text                     | NULL     | -
 created_by                     | uuid                     | uuid                     | NULL     | -
 created_at                     | timestamp with time zone | timestamp with time zone | NULL     | now()
 updated_at                     | timestamp with time zone | timestamp with time zone | NULL     | now()
(122 rows)


### timetable_templates

                Column                |           Type           |        Full Type         | Nullable |                                     Default                                     
--------------------------------------+--------------------------+--------------------------+----------+---------------------------------------------------------------------------------
 id                                   | uuid                     | uuid                     | NOT NULL | uuid_generate_v4()
 school_id                            | uuid                     | uuid                     | NOT NULL | -
 academic_year_id                     | uuid                     | uuid                     | NOT NULL | -
 template_code                        | character varying        | character varying(50)    | NOT NULL | -
 template_name                        | character varying        | character varying(200)   | NOT NULL | -
 template_description                 | text                     | text                     | NULL     | -
 template_type                        | character varying        | character varying(30)    | NULL     | 'REGULAR'::character varying
 scope_level                          | character varying        | character varying(30)    | NULL     | 'SCHOOL'::character varying
 applies_to_grades                    | ARRAY                    | ARRAY                    | NULL     | -
 applies_to_class_ids                 | ARRAY                    | ARRAY                    | NULL     | -
 applies_to_section_ids               | ARRAY                    | ARRAY                    | NULL     | -
 working_days                         | ARRAY                    | ARRAY                    | NULL     | ARRAY[1, 2, 3, 4, 5, 6]
 total_working_days_per_week          | integer                  | integer                  | NULL     | 6
 has_saturday                         | boolean                  | boolean                  | NULL     | true
 saturday_schedule                    | character varying        | character varying(30)    | NULL     | 'FULL'::character varying
 saturday_periods_count               | integer                  | integer                  | NULL     | 6
 school_start_time                    | time without time zone   | time without time zone   | NOT NULL | '08:00:00'::time without time zone
 school_end_time                      | time without time zone   | time without time zone   | NOT NULL | '15:00:00'::time without time zone
 total_school_hours                   | numeric                  | numeric                  | NULL     | -
 total_periods_per_day                | integer                  | integer                  | NOT NULL | 7
 period_duration_minutes              | integer                  | integer                  | NOT NULL | 40
 total_teaching_periods               | integer                  | integer                  | NULL     | -
 total_break_periods                  | integer                  | integer                  | NULL     | -
 has_short_breaks                     | boolean                  | boolean                  | NULL     | true
 short_break_duration_minutes         | integer                  | integer                  | NULL     | 5
 short_break_after_periods            | ARRAY                    | ARRAY                    | NULL     | ARRAY[2, 4]
 has_lunch_break                      | boolean                  | boolean                  | NULL     | true
 lunch_break_duration_minutes         | integer                  | integer                  | NULL     | 30
 lunch_break_after_period             | integer                  | integer                  | NULL     | 4
 has_assembly                         | boolean                  | boolean                  | NULL     | true
 assembly_duration_minutes            | integer                  | integer                  | NULL     | 15
 assembly_time                        | time without time zone   | time without time zone   | NULL     | '08:00:00'::time without time zone
 assembly_days                        | ARRAY                    | ARRAY                    | NULL     | ARRAY[1]
 auto_calculate_period_times          | boolean                  | boolean                  | NULL     | true
 period_timings                       | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 subjects_per_day_min                 | integer                  | integer                  | NULL     | 5
 subjects_per_day_max                 | integer                  | integer                  | NULL     | 7
 max_consecutive_periods_same_subject | integer                  | integer                  | NULL     | 2
 avoid_heavy_subjects_together        | boolean                  | boolean                  | NULL     | true
 heavy_subjects                       | ARRAY                    | ARRAY                    | NULL     | ARRAY['MATHEMATICS'::text, 'SCIENCE'::text, 'PHYSICS'::text, 'CHEMISTRY'::text]
 max_periods_per_teacher_per_day      | integer                  | integer                  | NULL     | 6
 max_consecutive_periods_per_teacher  | integer                  | integer                  | NULL     | 3
 teacher_free_periods_min             | integer                  | integer                  | NULL     | 1
 teacher_break_after_periods          | integer                  | integer                  | NULL     | 3
 avoid_teacher_conflicts              | boolean                  | boolean                  | NULL     | true
 max_free_periods_per_class           | integer                  | integer                  | NULL     | 1
 avoid_free_periods_at_start          | boolean                  | boolean                  | NULL     | true
 avoid_free_periods_at_end            | boolean                  | boolean                  | NULL     | true
 optimal_free_period_slots            | ARRAY                    | ARRAY                    | NULL     | ARRAY[4, 5]
 has_library_period                   | boolean                  | boolean                  | NULL     | true
 library_periods_per_week             | integer                  | integer                  | NULL     | 1
 has_sports_period                    | boolean                  | boolean                  | NULL     | true
 sports_periods_per_week              | integer                  | integer                  | NULL     | 2
 sports_period_slots                  | ARRAY                    | ARRAY                    | NULL     | ARRAY[6, 7]
 has_activity_period                  | boolean                  | boolean                  | NULL     | true
 activity_periods_per_week            | integer                  | integer                  | NULL     | 1
 has_moral_science                    | boolean                  | boolean                  | NULL     | true
 moral_science_day                    | integer                  | integer                  | NULL     | 1
 has_computer_lab                     | boolean                  | boolean                  | NULL     | true
 computer_lab_periods_per_week        | integer                  | integer                  | NULL     | 1
 optimize_teacher_workload            | boolean                  | boolean                  | NULL     | true
 balance_subject_distribution         | boolean                  | boolean                  | NULL     | true
 optimization_priority                | character varying        | character varying(30)    | NULL     | 'BALANCED'::character varying
 detect_teacher_conflicts             | boolean                  | boolean                  | NULL     | true
 detect_room_conflicts                | boolean                  | boolean                  | NULL     | true
 detect_resource_conflicts            | boolean                  | boolean                  | NULL     | true
 allow_parallel_sections              | boolean                  | boolean                  | NULL     | true
 allow_period_swaps                   | boolean                  | boolean                  | NULL     | true
 allow_daily_adjustments              | boolean                  | boolean                  | NULL     | true
 lock_after_approval                  | boolean                  | boolean                  | NULL     | true
 version_number                       | integer                  | integer                  | NULL     | 1
 is_latest_version                    | boolean                  | boolean                  | NULL     | true
 previous_version_id                  | uuid                     | uuid                     | NULL     | -
 version_notes                        | text                     | text                     | NULL     | -
 approval_status                      | character varying        | character varying(30)    | NULL     | 'DRAFT'::character varying
 submitted_for_approval_at            | timestamp with time zone | timestamp with time zone | NULL     | -
 submitted_by                         | uuid                     | uuid                     | NULL     | -
 approved_by                          | uuid                     | uuid                     | NULL     | -
 approved_at                          | timestamp with time zone | timestamp with time zone | NULL     | -
 approval_notes                       | text                     | text                     | NULL     | -
 rejected_by                          | uuid                     | uuid                     | NULL     | -
 rejected_at                          | timestamp with time zone | timestamp with time zone | NULL     | -
 rejection_reason                     | text                     | text                     | NULL     | -
 published_at                         | timestamp with time zone | timestamp with time zone | NULL     | -
 published_by                         | uuid                     | uuid                     | NULL     | -
 effective_from                       | date                     | date                     | NOT NULL | -
 effective_to                         | date                     | date                     | NULL     | -
 is_currently_active                  | boolean                  | boolean                  | NULL     | false
 total_classes_using                  | integer                  | integer                  | NULL     | 0
 total_sections_using                 | integer                  | integer                  | NULL     | 0
 total_teachers_assigned              | integer                  | integer                  | NULL     | 0
 is_active                            | boolean                  | boolean                  | NULL     | true
 is_default                           | boolean                  | boolean                  | NULL     | false
 is_archived                          | boolean                  | boolean                  | NULL     | false
 archived_at                          | timestamp with time zone | timestamp with time zone | NULL     | -
 configuration                        | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 custom_rules                         | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 tags                                 | ARRAY                    | ARRAY                    | NULL     | -
 metadata                             | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 notes                                | text                     | text                     | NULL     | -
 created_by                           | uuid                     | uuid                     | NULL     | -
 created_at                           | timestamp with time zone | timestamp with time zone | NULL     | now()
 updated_at                           | timestamp with time zone | timestamp with time zone | NULL     | now()
(103 rows)


### transport_analytics

        Column         |           Type           |        Full Type         | Nullable |           Default            
-----------------------+--------------------------+--------------------------+----------+------------------------------
 id                    | uuid                     | uuid                     | NOT NULL | uuid_generate_v4()
 school_id             | uuid                     | uuid                     | NOT NULL | -
 academic_year_id      | uuid                     | uuid                     | NOT NULL | -
 analytics_code        | character varying        | character varying(50)    | NOT NULL | -
 analytics_type        | character varying        | character varying(30)    | NULL     | 'MONTHLY'::character varying
 analysis_date         | date                     | date                     | NULL     | CURRENT_DATE
 total_trips_scheduled | integer                  | integer                  | NULL     | 0
 total_trips_completed | integer                  | integer                  | NULL     | 0
 on_time_percentage    | numeric                  | numeric                  | NULL     | 100.00
 safety_score          | numeric                  | numeric                  | NULL     | 100.00
 metadata              | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 created_at            | timestamp with time zone | timestamp with time zone | NULL     | now()
(12 rows)


### transport_fees

             Column              |           Type           |        Full Type         | Nullable |           Default            
---------------------------------+--------------------------+--------------------------+----------+------------------------------
 id                              | uuid                     | uuid                     | NOT NULL | uuid_generate_v4()
 school_id                       | uuid                     | uuid                     | NOT NULL | -
 academic_year_id                | uuid                     | uuid                     | NOT NULL | -
 fee_code                        | character varying        | character varying(50)    | NOT NULL | -
 student_id                      | uuid                     | uuid                     | NOT NULL | -
 student_transport_assignment_id | uuid                     | uuid                     | NOT NULL | -
 transport_route_id              | uuid                     | uuid                     | NULL     | -
 fee_month                       | character varying        | character varying(20)    | NULL     | -
 fee_year                        | integer                  | integer                  | NULL     | -
 billing_start_date              | date                     | date                     | NOT NULL | -
 billing_end_date                | date                     | date                     | NOT NULL | -
 total_payable                   | numeric                  | numeric                  | NOT NULL | -
 amount_paid                     | numeric                  | numeric                  | NULL     | 0.00
 outstanding_amount              | numeric                  | numeric                  | NULL     | -
 payment_status                  | character varying        | character varying(30)    | NULL     | 'PENDING'::character varying
 due_date                        | date                     | date                     | NOT NULL | -
 metadata                        | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 created_at                      | timestamp with time zone | timestamp with time zone | NULL     | now()
 updated_at                      | timestamp with time zone | timestamp with time zone | NULL     | now()
(19 rows)


### transport_routes

             Column             |           Type           |        Full Type         | Nullable |                                Default                                 
--------------------------------+--------------------------+--------------------------+----------+------------------------------------------------------------------------
 id                             | uuid                     | uuid                     | NOT NULL | uuid_generate_v4()
 school_id                      | uuid                     | uuid                     | NOT NULL | -
 academic_year_id               | uuid                     | uuid                     | NOT NULL | -
 route_code                     | character varying        | character varying(50)    | NOT NULL | -
 route_number                   | character varying        | character varying(20)    | NOT NULL | -
 route_name                     | character varying        | character varying(200)   | NOT NULL | -
 route_type                     | character varying        | character varying(30)    | NULL     | 'REGULAR'::character varying
 service_type                   | character varying        | character varying(30)    | NULL     | 'BOTH'::character varying
 start_location                 | character varying        | character varying(200)   | NOT NULL | -
 start_latitude                 | numeric                  | numeric                  | NULL     | -
 start_longitude                | numeric                  | numeric                  | NULL     | -
 end_location                   | character varying        | character varying(200)   | NOT NULL | -
 end_latitude                   | numeric                  | numeric                  | NULL     | -
 end_longitude                  | numeric                  | numeric                  | NULL     | -
 coverage_area                  | character varying        | character varying(200)   | NULL     | -
 coverage_zones                 | ARRAY                    | ARRAY                    | NULL     | -
 total_distance_km              | numeric                  | numeric                  | NOT NULL | -
 estimated_duration_minutes     | integer                  | integer                  | NOT NULL | -
 total_stops                    | integer                  | integer                  | NULL     | 0
 pickup_stops                   | integer                  | integer                  | NULL     | 0
 drop_stops                     | integer                  | integer                  | NULL     | 0
 stops                          | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 pickup_start_time              | time without time zone   | time without time zone   | NOT NULL | -
 pickup_end_time                | time without time zone   | time without time zone   | NULL     | -
 estimated_school_arrival_time  | time without time zone   | time without time zone   | NULL     | -
 drop_start_time                | time without time zone   | time without time zone   | NULL     | -
 drop_end_time                  | time without time zone   | time without time zone   | NULL     | -
 estimated_last_drop_time       | time without time zone   | time without time zone   | NULL     | -
 operational_days               | ARRAY                    | ARRAY                    | NULL     | ARRAY['MON'::text, 'TUE'::text, 'WED'::text, 'THU'::text, 'FRI'::text]
 operates_on_saturday           | boolean                  | boolean                  | NULL     | false
 holiday_schedule               | text                     | text                     | NULL     | -
 special_timings                | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 primary_vehicle_id             | uuid                     | uuid                     | NULL     | -
 backup_vehicle_id              | uuid                     | uuid                     | NULL     | -
 vehicle_type_required          | character varying        | character varying(30)    | NULL     | -
 minimum_capacity_required      | integer                  | integer                  | NULL     | -
 primary_driver_id              | uuid                     | uuid                     | NULL     | -
 backup_driver_id               | uuid                     | uuid                     | NULL     | -
 attendant_required             | boolean                  | boolean                  | NULL     | true
 primary_attendant_id           | uuid                     | uuid                     | NULL     | -
 backup_attendant_id            | uuid                     | uuid                     | NULL     | -
 total_capacity                 | integer                  | integer                  | NOT NULL | -
 current_occupancy              | integer                  | integer                  | NULL     | 0
 available_seats                | integer                  | integer                  | NULL     | -
 waiting_list_count             | integer                  | integer                  | NULL     | 0
 minimum_students_required      | integer                  | integer                  | NULL     | 10
 maximum_students_allowed       | integer                  | integer                  | NULL     | -
 base_transport_fee             | numeric                  | numeric                  | NULL     | -
 fee_calculation_method         | character varying        | character varying(30)    | NULL     | 'DISTANCE_BASED'::character varying
 per_km_rate                    | numeric                  | numeric                  | NULL     | -
 distance_slabs                 | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 has_gps_tracking               | boolean                  | boolean                  | NULL     | true
 gps_device_id                  | character varying        | character varying(100)   | NULL     | -
 has_cctv                       | boolean                  | boolean                  | NULL     | false
 cctv_camera_count              | integer                  | integer                  | NULL     | -
 has_first_aid                  | boolean                  | boolean                  | NULL     | true
 has_fire_extinguisher          | boolean                  | boolean                  | NULL     | true
 safety_equipment_list          | ARRAY                    | ARRAY                    | NULL     | -
 last_safety_inspection_date    | date                     | date                     | NULL     | -
 next_safety_inspection_due     | date                     | date                     | NULL     | -
 meets_safety_standards         | boolean                  | boolean                  | NULL     | true
 safety_compliance_notes        | text                     | text                     | NULL     | -
 emergency_contact_name         | character varying        | character varying(100)   | NULL     | -
 emergency_contact_phone        | character varying        | character varying(15)    | NULL     | -
 nearest_hospital               | character varying        | character varying(200)   | NULL     | -
 nearest_police_station         | character varying        | character varying(200)   | NULL     | -
 emergency_protocol             | text                     | text                     | NULL     | -
 on_time_performance_percentage | numeric                  | numeric                  | NULL     | 100.00
 average_delay_minutes          | numeric                  | numeric                  | NULL     | -
 total_trips_completed          | integer                  | integer                  | NULL     | 0
 total_incidents                | integer                  | integer                  | NULL     | 0
 student_satisfaction_rating    | numeric                  | numeric                  | NULL     | -
 parent_feedback_score          | numeric                  | numeric                  | NULL     | -
 status                         | character varying        | character varying(30)    | NULL     | 'ACTIVE'::character varying
 is_active                      | boolean                  | boolean                  | NULL     | true
 activation_date                | date                     | date                     | NULL     | -
 deactivation_date              | date                     | date                     | NULL     | -
 deactivation_reason            | text                     | text                     | NULL     | -
 is_air_conditioned             | boolean                  | boolean                  | NULL     | false
 has_wheelchair_access          | boolean                  | boolean                  | NULL     | false
 has_wifi                       | boolean                  | boolean                  | NULL     | false
 special_facilities             | ARRAY                    | ARRAY                    | NULL     | -
 is_optimized                   | boolean                  | boolean                  | NULL     | false
 last_optimization_date         | date                     | date                     | NULL     | -
 optimization_score             | numeric                  | numeric                  | NULL     | -
 suggested_improvements         | text                     | text                     | NULL     | -
 live_tracking_url              | text                     | text                     | NULL     | -
 parent_tracking_enabled        | boolean                  | boolean                  | NULL     | true
 route_map_url                  | text                     | text                     | NULL     | -
 route_description              | text                     | text                     | NULL     | -
 metadata                       | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 custom_fields                  | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 notes                          | text                     | text                     | NULL     | -
 internal_notes                 | text                     | text                     | NULL     | -
 created_by                     | uuid                     | uuid                     | NULL     | -
 created_at                     | timestamp with time zone | timestamp with time zone | NULL     | now()
 updated_at                     | timestamp with time zone | timestamp with time zone | NULL     | now()
(97 rows)


### trip_logs

         Column          |           Type           |        Full Type         | Nullable |            Default             
-------------------------+--------------------------+--------------------------+----------+--------------------------------
 id                      | uuid                     | uuid                     | NOT NULL | uuid_generate_v4()
 school_id               | uuid                     | uuid                     | NOT NULL | -
 academic_year_id        | uuid                     | uuid                     | NOT NULL | -
 trip_code               | character varying        | character varying(50)    | NOT NULL | -
 trip_type               | character varying        | character varying(30)    | NOT NULL | -
 trip_date               | date                     | date                     | NOT NULL | CURRENT_DATE
 transport_route_id      | uuid                     | uuid                     | NOT NULL | -
 vehicle_id              | uuid                     | uuid                     | NOT NULL | -
 driver_id               | uuid                     | uuid                     | NOT NULL | -
 scheduled_start_time    | time without time zone   | time without time zone   | NOT NULL | -
 actual_start_time       | time without time zone   | time without time zone   | NULL     | -
 scheduled_end_time      | time without time zone   | time without time zone   | NOT NULL | -
 actual_end_time         | time without time zone   | time without time zone   | NULL     | -
 distance_travelled_km   | numeric                  | numeric                  | NULL     | -
 total_students_expected | integer                  | integer                  | NULL     | -
 total_students_boarded  | integer                  | integer                  | NULL     | 0
 trip_status             | character varying        | character varying(30)    | NULL     | 'SCHEDULED'::character varying
 metadata                | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 created_at              | timestamp with time zone | timestamp with time zone | NULL     | now()
 updated_at              | timestamp with time zone | timestamp with time zone | NULL     | now()
(20 rows)


### user_profiles

    Column     |           Type           |        Full Type         | Nullable |   Default   
---------------+--------------------------+--------------------------+----------+-------------
 id            | uuid                     | uuid                     | NOT NULL | -
 school_id     | uuid                     | uuid                     | NULL     | -
 email         | character varying        | character varying(255)   | NOT NULL | -
 role          | USER-DEFINED             | USER-DEFINED             | NOT NULL | -
 full_name     | character varying        | character varying(200)   | NOT NULL | -
 phone         | character varying        | character varying(15)    | NULL     | -
 student_id    | uuid                     | uuid                     | NULL     | -
 staff_id      | uuid                     | uuid                     | NULL     | -
 parent_id     | uuid                     | uuid                     | NULL     | -
 avatar_url    | text                     | text                     | NULL     | -
 is_active     | boolean                  | boolean                  | NOT NULL | true
 last_login_at | timestamp with time zone | timestamp with time zone | NULL     | -
 preferences   | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 created_at    | timestamp with time zone | timestamp with time zone | NOT NULL | now()
 updated_at    | timestamp with time zone | timestamp with time zone | NOT NULL | now()
(15 rows)


### vehicle_maintenance

         Column         |           Type           |        Full Type         | Nullable |            Default             
------------------------+--------------------------+--------------------------+----------+--------------------------------
 id                     | uuid                     | uuid                     | NOT NULL | uuid_generate_v4()
 school_id              | uuid                     | uuid                     | NOT NULL | -
 maintenance_code       | character varying        | character varying(50)    | NOT NULL | -
 vehicle_id             | uuid                     | uuid                     | NOT NULL | -
 maintenance_type       | character varying        | character varying(30)    | NOT NULL | -
 issue_reported_date    | date                     | date                     | NOT NULL | CURRENT_DATE
 issue_description      | text                     | text                     | NOT NULL | -
 total_maintenance_cost | numeric                  | numeric                  | NOT NULL | -
 completion_status      | character varying        | character varying(30)    | NULL     | 'SCHEDULED'::character varying
 metadata               | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 created_at             | timestamp with time zone | timestamp with time zone | NULL     | now()
 updated_at             | timestamp with time zone | timestamp with time zone | NULL     | now()
(12 rows)


### vehicles

             Column              |           Type           |        Full Type         | Nullable |            Default             
---------------------------------+--------------------------+--------------------------+----------+--------------------------------
 id                              | uuid                     | uuid                     | NOT NULL | uuid_generate_v4()
 school_id                       | uuid                     | uuid                     | NOT NULL | -
 vehicle_code                    | character varying        | character varying(50)    | NOT NULL | -
 vehicle_number                  | character varying        | character varying(20)    | NOT NULL | -
 registration_number             | character varying        | character varying(50)    | NOT NULL | -
 chassis_number                  | character varying        | character varying(50)    | NULL     | -
 engine_number                   | character varying        | character varying(50)    | NULL     | -
 vehicle_type                    | character varying        | character varying(30)    | NOT NULL | -
 ownership_type                  | character varying        | character varying(30)    | NULL     | 'OWNED'::character varying
 manufacturer_name               | character varying        | character varying(100)   | NOT NULL | -
 model_name                      | character varying        | character varying(100)   | NOT NULL | -
 model_year                      | integer                  | integer                  | NOT NULL | -
 manufacturing_date              | date                     | date                     | NULL     | -
 purchase_date                   | date                     | date                     | NULL     | -
 purchase_price                  | numeric                  | numeric                  | NULL     | -
 lease_start_date                | date                     | date                     | NULL     | -
 lease_end_date                  | date                     | date                     | NULL     | -
 lease_company                   | character varying        | character varying(200)   | NULL     | -
 monthly_lease_amount            | numeric                  | numeric                  | NULL     | -
 current_market_value            | numeric                  | numeric                  | NULL     | -
 depreciation_rate               | numeric                  | numeric                  | NULL     | -
 seating_capacity                | integer                  | integer                  | NOT NULL | -
 standing_capacity               | integer                  | integer                  | NULL     | 0
 total_capacity                  | integer                  | integer                  | NULL     | -
 fuel_type                       | character varying        | character varying(20)    | NOT NULL | -
 fuel_tank_capacity_liters       | numeric                  | numeric                  | NULL     | -
 average_mileage_kmpl            | numeric                  | numeric                  | NULL     | -
 engine_capacity_cc              | integer                  | integer                  | NULL     | -
 transmission_type               | character varying        | character varying(20)    | NULL     | -
 length_meters                   | numeric                  | numeric                  | NULL     | -
 width_meters                    | numeric                  | numeric                  | NULL     | -
 height_meters                   | numeric                  | numeric                  | NULL     | -
 weight_kg                       | numeric                  | numeric                  | NULL     | -
 max_payload_kg                  | numeric                  | numeric                  | NULL     | -
 color_primary                   | character varying        | character varying(50)    | NULL     | -
 color_secondary                 | character varying        | character varying(50)    | NULL     | -
 registration_date               | date                     | date                     | NOT NULL | -
 registration_valid_till         | date                     | date                     | NOT NULL | -
 registration_authority          | character varying        | character varying(100)   | NULL     | -
 registration_state              | character varying        | character varying(50)    | NULL     | -
 fitness_certificate_number      | character varying        | character varying(50)    | NULL     | -
 fitness_valid_till              | date                     | date                     | NULL     | -
 permit_number                   | character varying        | character varying(50)    | NULL     | -
 permit_type                     | character varying        | character varying(50)    | NULL     | -
 permit_valid_till               | date                     | date                     | NULL     | -
 pollution_certificate_number    | character varying        | character varying(50)    | NULL     | -
 pollution_check_valid_till      | date                     | date                     | NULL     | -
 insurance_company               | character varying        | character varying(200)   | NOT NULL | -
 insurance_policy_number         | character varying        | character varying(50)    | NOT NULL | -
 insurance_type                  | character varying        | character varying(30)    | NULL     | -
 insurance_start_date            | date                     | date                     | NOT NULL | -
 insurance_expiry_date           | date                     | date                     | NOT NULL | -
 insurance_premium_amount        | numeric                  | numeric                  | NULL     | -
 insurance_coverage_amount       | numeric                  | numeric                  | NULL     | -
 insured_declared_value          | numeric                  | numeric                  | NULL     | -
 road_tax_paid_till              | date                     | date                     | NULL     | -
 annual_road_tax                 | numeric                  | numeric                  | NULL     | -
 has_gps_tracking                | boolean                  | boolean                  | NULL     | true
 gps_device_id                   | character varying        | character varying(100)   | NULL     | -
 gps_provider                    | character varying        | character varying(100)   | NULL     | -
 gps_installation_date           | date                     | date                     | NULL     | -
 has_cctv                        | boolean                  | boolean                  | NULL     | false
 cctv_camera_count               | integer                  | integer                  | NULL     | -
 cctv_recording_capacity_days    | integer                  | integer                  | NULL     | -
 has_fire_extinguisher           | boolean                  | boolean                  | NULL     | true
 fire_extinguisher_count         | integer                  | integer                  | NULL     | -
 fire_extinguisher_expiry_date   | date                     | date                     | NULL     | -
 has_first_aid_box               | boolean                  | boolean                  | NULL     | true
 first_aid_box_last_checked      | date                     | date                     | NULL     | -
 has_emergency_exit              | boolean                  | boolean                  | NULL     | true
 emergency_exit_count            | integer                  | integer                  | NULL     | -
 has_speed_governor              | boolean                  | boolean                  | NULL     | true
 speed_limit_kmph                | integer                  | integer                  | NULL     | -
 has_reverse_horn                | boolean                  | boolean                  | NULL     | true
 has_seat_belts                  | boolean                  | boolean                  | NULL     | true
 safety_equipment_list           | ARRAY                    | ARRAY                    | NULL     | -
 is_air_conditioned              | boolean                  | boolean                  | NULL     | false
 has_wheelchair_access           | boolean                  | boolean                  | NULL     | false
 has_wifi                        | boolean                  | boolean                  | NULL     | false
 has_music_system                | boolean                  | boolean                  | NULL     | false
 has_public_address_system       | boolean                  | boolean                  | NULL     | false
 special_features                | ARRAY                    | ARRAY                    | NULL     | -
 current_condition               | character varying        | character varying(30)    | NULL     | 'GOOD'::character varying
 body_condition                  | character varying        | character varying(30)    | NULL     | -
 engine_condition                | character varying        | character varying(30)    | NULL     | -
 tire_condition                  | character varying        | character varying(30)    | NULL     | -
 interior_condition              | character varying        | character varying(30)    | NULL     | -
 last_condition_assessment_date  | date                     | date                     | NULL     | -
 next_condition_assessment_due   | date                     | date                     | NULL     | -
 total_maintenance_cost          | numeric                  | numeric                  | NULL     | 0.00
 last_maintenance_date           | date                     | date                     | NULL     | -
 next_maintenance_due            | date                     | date                     | NULL     | -
 maintenance_frequency_days      | integer                  | integer                  | NULL     | 90
 odometer_reading_km             | integer                  | integer                  | NOT NULL | 0
 last_odometer_reading_date      | date                     | date                     | NULL     | -
 average_monthly_km              | integer                  | integer                  | NULL     | -
 last_major_service_date         | date                     | date                     | NULL     | -
 last_minor_service_date         | date                     | date                     | NULL     | -
 engine_oil_changed_date         | date                     | date                     | NULL     | -
 engine_oil_change_due_km        | integer                  | integer                  | NULL     | -
 tire_rotation_date              | date                     | date                     | NULL     | -
 tire_replacement_date           | date                     | date                     | NULL     | -
 battery_replacement_date        | date                     | date                     | NULL     | -
 battery_warranty_expiry         | date                     | date                     | NULL     | -
 total_trips_completed           | integer                  | integer                  | NULL     | 0
 total_km_travelled              | integer                  | integer                  | NULL     | 0
 total_fuel_consumed_liters      | numeric                  | numeric                  | NULL     | 0.00
 fuel_efficiency_kmpl            | numeric                  | numeric                  | NULL     | -
 total_operational_hours         | integer                  | integer                  | NULL     | 0
 breakdown_count                 | integer                  | integer                  | NULL     | 0
 accident_count                  | integer                  | integer                  | NULL     | 0
 days_out_of_service             | integer                  | integer                  | NULL     | 0
 availability_status             | character varying        | character varying(30)    | NULL     | 'AVAILABLE'::character varying
 is_available                    | boolean                  | boolean                  | NULL     | true
 current_route_id                | uuid                     | uuid                     | NULL     | -
 current_driver_id               | uuid                     | uuid                     | NULL     | -
 last_trip_date                  | date                     | date                     | NULL     | -
 vehicle_photo_front_url         | text                     | text                     | NULL     | -
 vehicle_photo_rear_url          | text                     | text                     | NULL     | -
 vehicle_photo_interior_url      | text                     | text                     | NULL     | -
 registration_certificate_url    | text                     | text                     | NULL     | -
 insurance_document_url          | text                     | text                     | NULL     | -
 fitness_certificate_url         | text                     | text                     | NULL     | -
 permit_document_url             | text                     | text                     | NULL     | -
 pollution_certificate_url       | text                     | text                     | NULL     | -
 document_urls                   | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 contractor_name                 | character varying        | character varying(200)   | NULL     | -
 contractor_phone                | character varying        | character varying(15)    | NULL     | -
 contractor_email                | character varying        | character varying(100)   | NULL     | -
 contract_start_date             | date                     | date                     | NULL     | -
 contract_end_date               | date                     | date                     | NULL     | -
 contract_amount                 | numeric                  | numeric                  | NULL     | -
 status                          | character varying        | character varying(30)    | NULL     | 'ACTIVE'::character varying
 is_active                       | boolean                  | boolean                  | NULL     | true
 deactivation_date               | date                     | date                     | NULL     | -
 deactivation_reason             | text                     | text                     | NULL     | -
 requires_immediate_attention    | boolean                  | boolean                  | NULL     | false
 alert_messages                  | ARRAY                    | ARRAY                    | NULL     | -
 insurance_renewal_reminder_sent | boolean                  | boolean                  | NULL     | false
 fitness_renewal_reminder_sent   | boolean                  | boolean                  | NULL     | false
 metadata                        | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 custom_fields                   | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 notes                           | text                     | text                     | NULL     | -
 internal_notes                  | text                     | text                     | NULL     | -
 created_by                      | uuid                     | uuid                     | NULL     | -
 created_at                      | timestamp with time zone | timestamp with time zone | NULL     | now()
 updated_at                      | timestamp with time zone | timestamp with time zone | NULL     | now()
(147 rows)


### vendors_suppliers

            Column             |           Type           |        Full Type         | Nullable |           Default           
-------------------------------+--------------------------+--------------------------+----------+-----------------------------
 id                            | uuid                     | uuid                     | NOT NULL | uuid_generate_v4()
 school_id                     | uuid                     | uuid                     | NOT NULL | -
 vendor_code                   | character varying        | character varying(50)    | NOT NULL | -
 vendor_name                   | character varying        | character varying(200)   | NOT NULL | -
 vendor_type                   | character varying        | character varying(50)    | NOT NULL | -
 business_type                 | character varying        | character varying(30)    | NULL     | -
 categories_supplied           | ARRAY                    | ARRAY                    | NULL     | -
 primary_category              | character varying        | character varying(100)   | NULL     | -
 contact_person_name           | character varying        | character varying(100)   | NOT NULL | -
 designation                   | character varying        | character varying(100)   | NULL     | -
 primary_phone                 | character varying        | character varying(15)    | NOT NULL | -
 alternate_phone               | character varying        | character varying(15)    | NULL     | -
 mobile_number                 | character varying        | character varying(15)    | NULL     | -
 primary_email                 | character varying        | character varying(100)   | NOT NULL | -
 alternate_email               | character varying        | character varying(100)   | NULL     | -
 website_url                   | text                     | text                     | NULL     | -
 address_line1                 | character varying        | character varying(200)   | NOT NULL | -
 address_line2                 | character varying        | character varying(200)   | NULL     | -
 city                          | character varying        | character varying(100)   | NOT NULL | -
 state                         | character varying        | character varying(100)   | NOT NULL | -
 postal_code                   | character varying        | character varying(10)    | NOT NULL | -
 country                       | character varying        | character varying(50)    | NOT NULL | 'India'::character varying
 office_address                | text                     | text                     | NULL     | -
 warehouse_address             | text                     | text                     | NULL     | -
 company_registration_number   | character varying        | character varying(50)    | NULL     | -
 registration_date             | date                     | date                     | NULL     | -
 gst_number                    | character varying        | character varying(20)    | NOT NULL | -
 gst_registration_date         | date                     | date                     | NULL     | -
 pan_number                    | character varying        | character varying(20)    | NULL     | -
 tan_number                    | character varying        | character varying(20)    | NULL     | -
 msme_registered               | boolean                  | boolean                  | NULL     | false
 msme_registration_number      | character varying        | character varying(50)    | NULL     | -
 bank_name                     | character varying        | character varying(200)   | NULL     | -
 bank_branch                   | character varying        | character varying(200)   | NULL     | -
 account_number                | character varying        | character varying(50)    | NULL     | -
 ifsc_code                     | character varying        | character varying(20)    | NULL     | -
 account_type                  | character varying        | character varying(30)    | NULL     | -
 beneficiary_name              | character varying        | character varying(200)   | NULL     | -
 upi_id                        | character varying        | character varying(100)   | NULL     | -
 payment_terms                 | character varying        | character varying(30)    | NULL     | 'NET_30'::character varying
 credit_period_days            | integer                  | integer                  | NULL     | -
 credit_limit                  | numeric                  | numeric                  | NULL     | -
 payment_mode_preferred        | character varying        | character varying(30)    | NULL     | -
 standard_discount_percentage  | numeric                  | numeric                  | NULL     | -
 volume_discount_applicable    | boolean                  | boolean                  | NULL     | false
 discount_terms                | text                     | text                     | NULL     | -
 delivery_terms                | character varying        | character varying(50)    | NULL     | -
 standard_delivery_time_days   | integer                  | integer                  | NULL     | -
 minimum_order_quantity        | numeric                  | numeric                  | NULL     | -
 minimum_order_value           | numeric                  | numeric                  | NULL     | -
 free_delivery_above_amount    | numeric                  | numeric                  | NULL     | -
 delivery_locations            | ARRAY                    | ARRAY                    | NULL     | -
 total_purchase_orders         | integer                  | integer                  | NULL     | 0
 total_purchase_value          | numeric                  | numeric                  | NULL     | 0.00
 orders_completed              | integer                  | integer                  | NULL     | 0
 orders_pending                | integer                  | integer                  | NULL     | 0
 orders_cancelled              | integer                  | integer                  | NULL     | 0
 on_time_delivery_percentage   | numeric                  | numeric                  | NULL     | -
 quality_acceptance_percentage | numeric                  | numeric                  | NULL     | -
 vendor_rating                 | numeric                  | numeric                  | NULL     | 0.00
 evaluation_parameters         | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 last_evaluation_date          | date                     | date                     | NULL     | -
 first_purchase_date           | date                     | date                     | NULL     | -
 last_purchase_date            | date                     | date                     | NULL     | -
 last_purchase_amount          | numeric                  | numeric                  | NULL     | -
 last_payment_date             | date                     | date                     | NULL     | -
 last_payment_amount           | numeric                  | numeric                  | NULL     | -
 outstanding_amount            | numeric                  | numeric                  | NULL     | 0.00
 advance_paid                  | numeric                  | numeric                  | NULL     | 0.00
 iso_certified                 | boolean                  | boolean                  | NULL     | false
 iso_certificate_number        | character varying        | character varying(50)    | NULL     | -
 quality_certifications        | ARRAY                    | ARRAY                    | NULL     | -
 licenses_held                 | ARRAY                    | ARRAY                    | NULL     | -
 has_trade_license             | boolean                  | boolean                  | NULL     | false
 trade_license_number          | character varying        | character varying(50)    | NULL     | -
 trade_license_valid_till      | date                     | date                     | NULL     | -
 has_insurance                 | boolean                  | boolean                  | NULL     | false
 insurance_details             | text                     | text                     | NULL     | -
 has_annual_contract           | boolean                  | boolean                  | NULL     | false
 contract_start_date           | date                     | date                     | NULL     | -
 contract_end_date             | date                     | date                     | NULL     | -
 contract_value                | numeric                  | numeric                  | NULL     | -
 contract_document_url         | text                     | text                     | NULL     | -
 contract_renewal_due          | boolean                  | boolean                  | NULL     | false
 is_approved_vendor            | boolean                  | boolean                  | NULL     | true
 approval_date                 | date                     | date                     | NULL     | -
 approved_by                   | uuid                     | uuid                     | NULL     | -
 is_blacklisted                | boolean                  | boolean                  | NULL     | false
 blacklist_date                | date                     | date                     | NULL     | -
 blacklist_reason              | text                     | text                     | NULL     | -
 is_preferred_vendor           | boolean                  | boolean                  | NULL     | false
 preference_reason             | text                     | text                     | NULL     | -
 send_purchase_orders_via      | character varying        | character varying(30)    | NULL     | 'EMAIL'::character varying
 notification_preferences      | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 additional_contacts           | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 products_catalog              | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 complaint_count               | integer                  | integer                  | NULL     | 0
 last_complaint_date           | date                     | date                     | NULL     | -
 complaints_history            | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 gst_certificate_url           | text                     | text                     | NULL     | -
 pan_card_url                  | text                     | text                     | NULL     | -
 cancelled_cheque_url          | text                     | text                     | NULL     | -
 company_profile_url           | text                     | text                     | NULL     | -
 documents                     | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 status                        | character varying        | character varying(30)    | NULL     | 'ACTIVE'::character varying
 is_active                     | boolean                  | boolean                  | NULL     | true
 deactivation_date             | date                     | date                     | NULL     | -
 deactivation_reason           | text                     | text                     | NULL     | -
 metadata                      | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 custom_fields                 | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 notes                         | text                     | text                     | NULL     | -
 remarks                       | text                     | text                     | NULL     | -
 created_by                    | uuid                     | uuid                     | NULL     | -
 created_at                    | timestamp with time zone | timestamp with time zone | NULL     | now()
 updated_at                    | timestamp with time zone | timestamp with time zone | NULL     | now()
(115 rows)


### visitor_management

    Column    |           Type           |        Full Type         | Nullable |      Default       
--------------+--------------------------+--------------------------+----------+--------------------
 id           | uuid                     | uuid                     | NOT NULL | uuid_generate_v4()
 school_id    | uuid                     | uuid                     | NOT NULL | -
 visitor_code | character varying        | character varying(50)    | NOT NULL | -
 student_id   | uuid                     | uuid                     | NOT NULL | -
 visitor_name | character varying        | character varying(200)   | NOT NULL | -
 visit_date   | date                     | date                     | NOT NULL | CURRENT_DATE
 metadata     | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 created_at   | timestamp with time zone | timestamp with time zone | NULL     | now()
(8 rows)


### whatsapp_messages

            Column            |           Type           |        Full Type         | Nullable |            Default            
------------------------------+--------------------------+--------------------------+----------+-------------------------------
 id                           | uuid                     | uuid                     | NOT NULL | gen_random_uuid()
 school_id                    | uuid                     | uuid                     | NOT NULL | -
 message_code                 | character varying        | character varying(50)    | NULL     | -
 message_uuid                 | uuid                     | uuid                     | NULL     | gen_random_uuid()
 communication_channel_id     | uuid                     | uuid                     | NULL     | -
 provider_name                | character varying        | character varying(50)    | NULL     | -
 whatsapp_business_account_id | character varying        | character varying(100)   | NULL     | -
 whatsapp_phone_number_id     | character varying        | character varying(100)   | NULL     | -
 template_id                  | uuid                     | uuid                     | NULL     | -
 template_code                | character varying        | character varying(50)    | NULL     | -
 whatsapp_template_name       | character varying        | character varying(200)   | NULL     | -
 whatsapp_template_id         | character varying        | character varying(100)   | NULL     | -
 template_language            | character varying        | character varying(10)    | NULL     | 'en'::character varying
 template_category            | character varying        | character varying(30)    | NULL     | -
 recipient_type               | character varying        | character varying(20)    | NULL     | -
 recipient_id                 | uuid                     | uuid                     | NULL     | -
 recipient_phone              | character varying        | character varying(20)    | NOT NULL | -
 recipient_name               | character varying        | character varying(200)   | NULL     | -
 recipient_email              | character varying        | character varying(100)   | NULL     | -
 recipient_country_code       | character varying        | character varying(5)     | NULL     | '+91'::character varying
 whatsapp_id                  | character varying        | character varying(50)    | NULL     | -
 student_id                   | uuid                     | uuid                     | NULL     | -
 parent_id                    | uuid                     | uuid                     | NULL     | -
 class_id                     | uuid                     | uuid                     | NULL     | -
 section_id                   | uuid                     | uuid                     | NULL     | -
 message_type                 | character varying        | character varying(30)    | NULL     | 'TEMPLATE'::character varying
 message_text                 | text                     | text                     | NULL     | -
 original_message             | text                     | text                     | NULL     | -
 template_parameters          | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 header_parameters            | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 body_parameters              | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 button_parameters            | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 media_url                    | text                     | text                     | NULL     | -
 media_type                   | character varying        | character varying(20)    | NULL     | -
 media_mime_type              | character varying        | character varying(50)    | NULL     | -
 media_size_kb                | integer                  | integer                  | NULL     | -
 media_caption                | text                     | text                     | NULL     | -
 media_filename               | character varying        | character varying(200)   | NULL     | -
 media_id                     | character varying        | character varying(100)   | NULL     | -
 media_sha256                 | character varying        | character varying(64)    | NULL     | -
 thumbnail_url                | text                     | text                     | NULL     | -
 interactive_type             | character varying        | character varying(30)    | NULL     | -
 interactive_header           | jsonb                    | jsonb                    | NULL     | -
 interactive_body             | text                     | text                     | NULL     | -
 interactive_footer           | text                     | text                     | NULL     | -
 interactive_action           | jsonb                    | jsonb                    | NULL     | -
 buttons                      | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 list_sections                | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 location_latitude            | numeric                  | numeric                  | NULL     | -
 location_longitude           | numeric                  | numeric                  | NULL     | -
 location_name                | character varying        | character varying(200)   | NULL     | -
 location_address             | text                     | text                     | NULL     | -
 contacts                     | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 whatsapp_message_id          | character varying        | character varying(100)   | NULL     | -
 conversation_id              | character varying        | character varying(100)   | NULL     | -
 status                       | character varying        | character varying(30)    | NULL     | 'PENDING'::character varying
 queued_at                    | timestamp with time zone | timestamp with time zone | NULL     | -
 sent_at                      | timestamp with time zone | timestamp with time zone | NULL     | -
 delivered_at                 | timestamp with time zone | timestamp with time zone | NULL     | -
 read_at                      | timestamp with time zone | timestamp with time zone | NULL     | -
 failed_at                    | timestamp with time zone | timestamp with time zone | NULL     | -
 deleted_at                   | timestamp with time zone | timestamp with time zone | NULL     | -
 whatsapp_status              | character varying        | character varying(30)    | NULL     | -
 status_timestamp             | timestamp with time zone | timestamp with time zone | NULL     | -
 failure_reason               | text                     | text                     | NULL     | -
 failure_code                 | character varying        | character varying(20)    | NULL     | -
 error_message                | text                     | text                     | NULL     | -
 error_details                | jsonb                    | jsonb                    | NULL     | -
 error_data                   | jsonb                    | jsonb                    | NULL     | -
 is_permanent_failure         | boolean                  | boolean                  | NULL     | false
 retry_count                  | integer                  | integer                  | NULL     | 0
 max_retries                  | integer                  | integer                  | NULL     | 3
 next_retry_at                | timestamp with time zone | timestamp with time zone | NULL     | -
 last_retry_at                | timestamp with time zone | timestamp with time zone | NULL     | -
 cost                         | numeric                  | numeric                  | NULL     | -
 cost_currency                | character varying        | character varying(10)    | NULL     | 'INR'::character varying
 conversation_category        | character varying        | character varying(30)    | NULL     | -
 conversation_origin          | character varying        | character varying(30)    | NULL     | -
 is_free_tier                 | boolean                  | boolean                  | NULL     | false
 is_free_entry_point          | boolean                  | boolean                  | NULL     | false
 priority                     | integer                  | integer                  | NULL     | 1
 scheduled_at                 | timestamp with time zone | timestamp with time zone | NULL     | -
 is_scheduled                 | boolean                  | boolean                  | NULL     | false
 schedule_timezone            | character varying        | character varying(50)    | NULL     | -
 send_after                   | timestamp with time zone | timestamp with time zone | NULL     | -
 send_before                  | timestamp with time zone | timestamp with time zone | NULL     | -
 campaign_id                  | character varying        | character varying(100)   | NULL     | -
 campaign_name                | character varying        | character varying(200)   | NULL     | -
 batch_id                     | character varying        | character varying(100)   | NULL     | -
 batch_size                   | integer                  | integer                  | NULL     | -
 batch_sequence_number        | integer                  | integer                  | NULL     | -
 is_bulk_message              | boolean                  | boolean                  | NULL     | false
 personalized                 | boolean                  | boolean                  | NULL     | false
 personalization_data         | jsonb                    | jsonb                    | NULL     | -
 variables_used               | jsonb                    | jsonb                    | NULL     | -
 expects_response             | boolean                  | boolean                  | NULL     | false
 response_received            | boolean                  | boolean                  | NULL     | false
 response_data                | jsonb                    | jsonb                    | NULL     | -
 response_timestamp           | timestamp with time zone | timestamp with time zone | NULL     | -
 button_clicked               | character varying        | character varying(100)   | NULL     | -
 list_item_selected           | character varying        | character varying(100)   | NULL     | -
 consent_obtained             | boolean                  | boolean                  | NULL     | true
 consent_type                 | character varying        | character varying(20)    | NULL     | -
 opt_out_requested            | boolean                  | boolean                  | NULL     | false
 quality_score                | numeric                  | numeric                  | NULL     | -
 phone_quality_score          | character varying        | character varying(20)    | NULL     | -
 spam_reported                | boolean                  | boolean                  | NULL     | false
 spam_report_timestamp        | timestamp with time zone | timestamp with time zone | NULL     | -
 blocked_by_user              | boolean                  | boolean                  | NULL     | false
 block_timestamp              | timestamp with time zone | timestamp with time zone | NULL     | -
 expires_at                   | timestamp with time zone | timestamp with time zone | NULL     | -
 is_expired                   | boolean                  | boolean                  | NULL     | false
 validity_period_hours        | integer                  | integer                  | NULL     | 24
 message_hash                 | character varying        | character varying(64)    | NULL     | -
 is_duplicate                 | boolean                  | boolean                  | NULL     | false
 duplicate_of_id              | uuid                     | uuid                     | NULL     | -
 is_test_message              | boolean                  | boolean                  | NULL     | false
 test_mode                    | boolean                  | boolean                  | NULL     | false
 source_module                | character varying        | character varying(50)    | NULL     | -
 source_record_id             | uuid                     | uuid                     | NULL     | -
 trigger_event                | character varying        | character varying(50)    | NULL     | -
 callback_url                 | text                     | text                     | NULL     | -
 callback_sent                | boolean                  | boolean                  | NULL     | false
 callback_response            | jsonb                    | jsonb                    | NULL     | -
 webhook_events               | jsonb                    | jsonb                    | NULL     | '[]'::jsonb
 metadata                     | jsonb                    | jsonb                    | NULL     | '{}'::jsonb
 tags                         | ARRAY                    | ARRAY                    | NULL     | -
 notes                        | text                     | text                     | NULL     | -
 created_by                   | uuid                     | uuid                     | NULL     | -
 created_at                   | timestamp with time zone | timestamp with time zone | NULL     | now()
 updated_at                   | timestamp with time zone | timestamp with time zone | NULL     | now()
(131 rows)


