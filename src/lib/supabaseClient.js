import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://zsbqtqognaiogrpqaoot.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpzYnF0cW9nbmFpb2dycHFhb290Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkwMDMwNTAsImV4cCI6MjAxNDU3OTA1MH0.ylu-OGunqkoQ1yubEUZ24Q--8wPdIOrt8EeoF-nQbFs')