'use client'

import { Button } from './ui/button'
import supabase from '@/lib/supabase'
import { useEffect, useState } from 'react'
import type { Session } from '@supabase/supabase-js'
import Link from 'next/link'

export default function SigninButton() {
	const [session, setSession] = useState<Session | null>(null)
	useEffect(() => {
		supabase.auth.getSession().then(({ data: { session } }) => {
			console.log(session)
			setSession(session)
		})
		const {
			data: { subscription },
		} = supabase.auth.onAuthStateChange((_event, session) => {
			setSession(session)
		})
		return () => subscription.unsubscribe()
	}, [])

	if (!session) {
		return (
			<Button variant="outline">
				<Link href="/sign-in">Sign in</Link>
			</Button>
		)
	}
}
