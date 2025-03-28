import { Database } from "@/database.types";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL ?? '';
const supabaseKey = process.env.SUPABASE_KEY ?? '';

export const supabase = createClient<Database>(supabaseUrl, supabaseKey);
