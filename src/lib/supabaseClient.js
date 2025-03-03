import { createClient } from '@supabase/supabase-js'
// Create a single supabase client for interacting with your database
const supabase = createClient('https://mjyoaplsgomxhozvhwoy.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1qeW9hcGxzZ29teGhvenZod295Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA1Njk3ODEsImV4cCI6MjA1NjE0NTc4MX0.xJXRs2tNvvW459VjM8F9ywNsO2Gyh70TdMLjFdMLNWE');

export default supabase;