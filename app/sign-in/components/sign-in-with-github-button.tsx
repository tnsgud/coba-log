'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import GitHub from '@/public/github.svg'
import supabase from '@/lib/supabase'

export default function SignInWithGithubButton() {
	async function signInWithGithub() {
		await supabase.auth.signInWithOAuth({
			provider: 'github',
		})
	}

	return (
		<Button onClick={signInWithGithub}>
			<Image src={GitHub} alt="Github logo" /> Sign in with Github
		</Button>
	)
}
