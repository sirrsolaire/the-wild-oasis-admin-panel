import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://wxmthruiqpcbpdbdcozo.supabase.co/";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind4bXRocnVpcXBjYnBkYmRjb3pvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYzMjU5MzAsImV4cCI6MjAxMTkwMTkzMH0.eLbpNq8f4Q97rORpf4gHjtTavifbcx43V4jNxIc-SMw\n";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
