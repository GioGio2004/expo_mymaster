import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://cnagmmtfgyxulwqfffnv.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNuYWdtbXRmZ3l4dWx3cWZmZm52Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ2NDQ3MzAsImV4cCI6MjA1MDIyMDczMH0.RCTaYfkYw7AjYuXBydJe-faZvEg2yfKwa3NYGJWB99c"

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})
