import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(process.env.SUPABASE_URL || 'https://tofpoucmelzwugiaifey.supabase.co'
, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRvZnBvdWNtZWx6d3VnaWFpZmV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njc0NDA2NDgsImV4cCI6MTk4MzAxNjY0OH0.K9k6RHoLWA08v9TF_WHU9qFzxWdXAd3zqOVl9TCWB2o');


