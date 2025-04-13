'use client'

import { useForm } from 'react-hook-form'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import supabase from '@/lib/supabase'

const formSchema = z.object({
	email: z
		.string()
		.email('올바른 이메일 형식이 아닙니다.')
		.min(1, '이메일은 필수 요소 입니다.'),
	password: z.string().min(10, '비밀번호는 필수 요소 입니다.'),
})

export default function SignInForm() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: { email: '', password: '' },
	})

	const formItems: {
		name: keyof z.infer<typeof formSchema>
		placeholder: string
	}[] = [
		{ name: 'email', placeholder: 'Email' },
		{ name: 'password', placeholder: 'Password' },
	]

	async function onSubmit({ email, password }: z.infer<typeof formSchema>) {
		const result = await supabase.auth.signInWithPassword({ email, password })

		console.log(result)
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)}>
				{formItems.map(({ name, placeholder }) => (
					<FormField
						key={`form-item-${name}`}
						control={form.control}
						name={name}
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input placeholder={placeholder} {...field} type={name} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				))}
				<Button>Sign in</Button>
			</form>
		</Form>
	)
}
