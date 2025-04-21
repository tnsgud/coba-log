import MarkDownRenderer from '@/components/markdown-renderer'
import dateFormatter from '@/lib/date-formatter'
import supabase from '@/lib/supabase'

interface Props {
	params: Promise<{ slug: string; id: string }>
}

export const revalidate = 60
export const dynamicParams = true

export async function generateStaticParams() {
	const { data } = await supabase.from('post').select('id, category(slug)')

	return (
		data?.map((row) => ({ id: `${row.id}`, slug: row.category.slug })) ?? []
	)
}

export default async function Page({ params }: Props) {
	const { slug, id } = await params

	const { data: post } = await supabase
		.from('post')
		.select('*')
		.eq('id', Number(id))
		.limit(1)
		.single()

	if (!post) return <div>this post is null</div>

	return (
		<div className="flex flex-col px-10 py-9">
			<span className="border bg-linear-to-br from-[#3f7fff] to-[#b702c7] px-3.5 py-1 rounded-full w-fit mb-2 font-bold">
				{`${slug.slice(0, 1).toUpperCase()}${slug.slice(1)}`}
			</span>
			<span className="text-3xl font-bold mb-5">{post.title}</span>
			<span className="mb-2">{post.description}</span>
			<div className="flex gap-10">
				<span>{dateFormatter.format(new Date(post.created_at))}</span>
				<span>{post.views}명이 읽음</span>
			</div>

			<MarkDownRenderer markdown={post.content} />
		</div>
	)
}
