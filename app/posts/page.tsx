import { supabase } from '@/lib/supabase';
import PostCard from './components/post-card';


export default async function PostsPage() {
  const { data:posts } = await supabase.from('post').select();

  return (
    <main className="flex flex-col gap-5 p-5">
      {posts?.map((post) => (
        <PostCard key={`post-${post.id}`} post={post} />
      ))}
    </main>
  );
}
