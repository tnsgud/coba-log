import supabase from '@/lib/supabase'
import PostCard from './components/post-card'
import FloatingButton from './components/floating-button'

export const dynamic = 'force-dynamic'

export default async function PostsPage() {
	const { data: posts } = await supabase
		.from('post')
		.select(
			'id, title, description, views, created_at, category(id, name, slug)',
		)
		.order('created_at', { ascending: false })

	return (
		<main className="grid grid-cols-1 gap-5 p-5">
			{posts?.map((post) => (
				<PostCard key={`post-${post.id}`} post={post} />
			))}
			<FloatingButton />
		</main>
	)
}
