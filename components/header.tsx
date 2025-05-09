import Image from 'next/image'
import Link from 'next/link'
import BlogTitle from '@/public/blog_title.avif'
import SigninButton from './sign-in-button'
import { Menu } from 'lucide-react'

interface CustomLink {
	href: string
	text: string
}

const links: CustomLink[] = [
	{
		href: '/',
		text: 'HOME',
	},
	{
		href: '/posts',
		text: 'POST',
	},
	{
		href: '/profile',
		text: 'PROFILE',
	},
]

export default async function Header() {
	return (
		<header className="flex flex-row items-center justify-center gap-5 border-b-2 px-5 py-3 text-center">
			<Link href="/">
				<Image src={'/logo.png'} alt="Logo" width={50} height={50} />
			</Link>

			<Image src={BlogTitle} alt="blog title" width={150} />

			<Menu className="ml-auto hidden size-8 max-sm:inline" />

			<nav className="flex flex-auto justify-center gap-10 max-sm:hidden">
				{links.map((value) => (
					<Link
						key={`home-link-${value.text}`}
						href={value.href}
						className="underline-offset-4 hover:underline"
					>
						{value.text}
					</Link>
				))}
			</nav>
			<SigninButton />
		</header>
	)
}
