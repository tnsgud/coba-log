'use client'

import z from 'zod';
import {useForm, useWatch} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import WriteForm from './components/write-form'
import MarkDownRenderer from '@/components/markdown-renderer'

const writeFormSchema = z.object({
	title: z.string().min(1, '제목은 필수 요소 입니다.'),
	description: z.string().min(1, '설명은 필수 요소 입니다.'),
	content: z.string().min(1, '내용은 필수 요소 입니다.'),
	category: z.coerce.number().min(1, '카테고리는 필수 요소 입니다.'),
})

export type WriteFormData = z.infer<typeof writeFormSchema>;

export default function WritePage() {
	const form = useForm<WriteFormData>({
		resolver: zodResolver(writeFormSchema),
		defaultValues: { title: '', description: '', content:''},
	})

	const content = useWatch({ control:form.control, name:'content'});

	return (
		<div>
			<WriteForm form={form}/>
			<MarkDownRenderer markdown={content} />
		</div>
	)
}
