import supabase from "@/lib/supabase";
import PostCard from "./components/post-card";
import { Button } from "@/components/ui/button";
import { Plus } from 'lucide-react';

export default async function PostsPage() {
  const { data: posts } = await supabase
    .from("post")
    .select(
      "id, title, description, views, created_at, category(id, name, slug)",
    );

  return (
    <main className="grid grid-cols-2 gap-5 p-5">
      {posts?.map((post) => <PostCard key={`post-${post.id}`} post={post} />)}
      <Button className="fixed right-4 bottom-4 z-50 size-15" >
        <Plus className="stroke-black size-8 fill-black" />
      </Button>
    </main>
  );
}
