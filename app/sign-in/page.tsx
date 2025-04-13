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
