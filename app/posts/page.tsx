import { Badge } from "@/components/ui/badge";

const posts = [
  {
    id: 1,
    title: "This is test title",
    description: "this is test description",
    tags: [
      { id: 1, name: "programming" },
      { id: 2, name: "math" },
    ],
  },
];

export default function PostsPage() {
  return (
    <main className="p-5">
      {posts.map((post) => (
        <p key={`post-${post.id}`} className="flex flex-col border-2 px-2">
          <span className="text-4xl font-bold">{post.title}</span>
          <span>{post.description}</span>{" "}
          {post.tags.map((tag) => (
            <Badge key={`post-${post.id}-tag-${tag.id}`}>{tag.name}</Badge>
          ))}
        </p>
      ))}
    </main>
  );
}
