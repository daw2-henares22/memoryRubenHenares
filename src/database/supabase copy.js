import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://jyoazqqvcctbitwzoqee.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp5b2F6cXF2Y2N0Yml0d3pvcWVlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUzNTYxODksImV4cCI6MjAzMDkzMjE4OX0.bI2UHY83V5EC2Y5CGsDSh1yCrszseCGRQ3ycdFpaJnk'
export const supabase = createClient(supabaseUrl, supabaseKey)