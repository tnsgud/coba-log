'use client'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from '@/components/ui/form'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Tables } from '@/database.types'
import { insertPost } from '@/app/posts/actions'

interface Props {
	categories: Pick<Tables<'category'>, 'id' | 'name'>[]
}

const formSchema = z.object({
	title: z.string().min(1, '제목은 필수 요소 입니다.'),
	description: z.string().min(1, '설명은 필수 요소 입니다.'),
	content: z.string().min(1, '내용은 필수 요소 입니다.'),
	category: z.coerce.number().min(1, '카테고리는 필수 요소 입니다.'),
})

export default function WriteForm({ categories }: Props) {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: { title: '', description: '', content: '' },
	})

	function onSubmit(value: z.infer<typeof formSchema>) {
		const { title, description, content, category: category_id } = value

		insertPost({ title, description, content, category_id })
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 p-5">
				{/* TODO:Refactoring 필요 */}
				<FormField
					control={form.control}
					name="title"
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input placeholder="Title" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="description"
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input placeholder="description" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="category"
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Select onValueChange={field.onChange}>
									<SelectTrigger className="w-[180px]">
										<SelectValue placeholder="Category" />
									</SelectTrigger>
									<SelectContent>
										{categories.map((row) => (
											<SelectItem
												key={`category-${row.id}`}
												value={`${row.id}`}
											>
												{row.name}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="content"
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Textarea placeholder="content" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit">Submit</Button>
			</form>
		</Form>
	)
}
