"use server";

import supabase from "@/lib/supabase";

export async function getAllCategories() {
  const { data } = await supabase.from("category").select("*");

  return data ?? [];
}
