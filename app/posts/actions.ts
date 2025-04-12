import { Tables } from "@/database.types";
import supabase from "@/lib/supabase";

export async function insertPost(
  {title, description, content, category_id}: Pick<
    Tables<"post">,
    "title" | "description" | "content" | "category_id"
  >,
) {
  const result = await supabase.from('post').insert({
    title, description, content, category_id
  })

  console.log(result);

  return result.data;
}
