import { Tables } from "@/database.types";

interface Props {
  post: Tables<"post">;
}

export default function PostCard({ post }: Props) {
  const { id, title, description, category_id } = post;

  return (
    <p className="flex flex-col border-2 px-2">
      <span className="text-4xl font-bold">{title}</span>
      <span>{description}</span>
      <span>{category_id}</span>
    </p>
  );
}
