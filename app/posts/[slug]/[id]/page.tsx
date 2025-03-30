interface Props {
  params: Promise<{ slug: string; id: string }>;
}

export default async function Page({ params }: Props) {
  const {slug, id} = await params;

  return <div>this is test post in the {slug} category and the id is {id}</div>;
}
