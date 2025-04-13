'use client'

import { Button } from '@/components/ui/button'
import SignInForm from './components/sign-in-form'
import Image from 'next/image'
import GitHub from '@/public/github.svg'
import supabase from '@/lib/supabase'

export default function SignInPage() {
	async function signInWithGithub() {
		await supabase.auth.signInWithOAuth({
			provider: 'github',
			options: {
				redirectTo:
					'https://obscure-bassoon-95gg9qw46v5c774w-3000.app.github.dev',
			},
		})
	}

	return (
		<div>
			<SignInForm />
			<Button onClick={signInWithGithub}>
				<Image src={GitHub} alt="Github logo" /> Sign in with Github
			</Button>
		</div>
	)
}
