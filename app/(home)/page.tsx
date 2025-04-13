import Image from 'next/image'
import BlogTitle from '@/public/blog_title.avif'
import BlogDescription from '@/public/blog-description.png'
import TotalCountCard from './components/total-count-card'

const list = [
	{ name: '누적 방문자 수', thisWeekCount: 100, lastWeekCount: 1 },
	{ name: '누적 게시물 수', thisWeekCount: 200, lastWeekCount: 190 },
]

const imageList = [
	{
		src: BlogTitle,
		alt: 'blog title',
		style: { width: '70vw', maxWidth: '700px' },
	},
	{
		src: BlogDescription,
		alt: 'blog description',
		style: { width: '50vw', maxWidth: '500px' },
	},
]

export default async function HomePage() {
	return (
		<main className="flex flex-col items-center p-5">
			{imageList.map((image) => (
				<Image
					key={`${image.alt}`}
					src={image.src}
					alt={`${image.alt} image`}
					style={{ ...image.style, height: 'auto' }}
				/>
			))}

			<div className="mt-10 flex w-full justify-center gap-10 max-sm:flex-col">
				{list.map((i) => (
					<TotalCountCard
						key={`item-${i.name}`}
						name={i.name}
						currentCount={i.thisWeekCount}
						previousCount={i.lastWeekCount}
					/>
				))}
			</div>
		</main>
	)
}
