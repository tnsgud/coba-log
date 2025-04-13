'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Plus } from 'lucide-react'
import { useEffect, useState } from 'react'
import type { Session } from '@supabase/supabase-js'
import supabase from '@/lib/supabase'

export default function FloatingButton() {
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

	if (!session || session.user.email !== 'qkrtnsgud0229@gmail.com') return

	return (
		<Button className="fixed right-4 bottom-4 z-50 size-15" asChild>
			<Link href="/write">
				<Plus className="size-6" />
			</Link>
		</Button>
	)
}
