import supabase from "@/lib/supabase";

interface Props {
  params: Promise<{ slug: string; id: string }>;
}

export const revalidate = 60;
export const dynamicParams = true;

export async function generateStaticParams() {
  const { data } = await supabase.from("post").select("id, category(slug)");

  return (
    data?.map((row) => ({ id: `${row.id}`, slug: row.category.slug })) ?? []
  );
}

export default async function Page({ params }: Props) {
  const { slug, id } = await params;

  const { data: post } = await supabase
    .from("post")
    .select("*")
    .eq("id", Number(id))
    .limit(1)
    .single();

  if (!post) return <div>this post is null</div>;

  return (
    <div>
      this is test post in the {slug} category and the id is {id}
      <span>{post.title}</span>
      <span>{post.description}</span>
      <span>{post.content}</span>
      <span>{post.views}</span>
    </div>
  );
}
