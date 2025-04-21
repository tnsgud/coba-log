'use client'

import { z } from 'zod'
import { useForm, UseFormReturn, useWatch } from 'react-hook-form'
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
import type { Tables } from '@/database.types'
import { insertPost } from '@/app/posts/actions'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import supabase from '@/lib/supabase'
import { WriteFormData } from '../page'


interface Props {
	form:UseFormReturn<WriteFormData>
}

export default function WriteForm({form} : Props) {
	const [categories, setCategories] = useState<
		Pick<Tables<'category'>, 'id' | 'name'>[]
	>([])

	function onSubmit(value: WriteFormData) {
		const { title, description, content, category: category_id } = value

		insertPost({ title, description, content, category_id })
	}

	useEffect(() => {
		async function fetchingCategories() {
			const { data } = await supabase.from('category').select('*')

			setCategories(data ?? [])
		}

		fetchingCategories();
	}, [])

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
