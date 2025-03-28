import Link from 'next/link';
import { Tables } from "@/database.types";

interface Props {
  post: Pick<Tables<"post">, "id" | "title" | "description" | "views"> & {
    category: Pick<Tables<"category">, "id" | "name" | "slug">;
  };
}

export default function PostCard({ post }: Props) {
  const { id, title, description, category } = post;

  return (
    <Link className="flex flex-col border-2 px-2" href={`/posts/${category.slug}/${id}`}>
      <span className="text-4xl font-bold">{title}</span>
      <span>{description}</span>
      <span>{category.name}</span>
    </Link>
  );
}
