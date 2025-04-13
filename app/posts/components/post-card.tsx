import Link from 'next/link'
import { Tables } from '@/database.types'
import { Badge } from '@/components/ui/badge'
import dateFormatter from '@/lib/date-formatter'
import { Eye, Heart, MessageSquareText } from 'lucide-react'

interface Props {
	post: Pick<
		Tables<'post'>,
		'id' | 'title' | 'description' | 'views' | 'created_at'
	> & {
		category: Pick<Tables<'category'>, 'id' | 'name' | 'slug'>
	}
}

export default function PostCard({ post }: Props) {
	const { id, title, description, category } = post

	return (
		<div className="flex cursor-default flex-col gap-5 rounded-xl border-2 px-6 py-4">
			<div className="flex items-center justify-between">
				<div className="flex flex-col gap-2">
					<Link
						className="underline-offset-8 hover:underline text-2xl font-bold"
						href={`/posts/${category.slug}/${id}`}
					>
						{title}
					</Link>
					<span className="font-thin">{description}</span>
				</div>
				<div className="text-center">
					<Heart className="size-10 hover:cursor-pointer fill-pink-600 stroke-pink-600" />
					<span className="font-thin">1.2K</span>
				</div>
			</div>

			<div className="flex items-center justify-between">
				<Badge className="text-lg font-bold">{category.name}</Badge>

				<div className="text-end">
					<div className="flex items-center gap-2">
						<Eye className="size-5" />
						10M
						<MessageSquareText className="size-5" />
						12K
					</div>
					{dateFormatter.format(new Date(post.created_at))}
				</div>
			</div>
		</div>
	)
}
