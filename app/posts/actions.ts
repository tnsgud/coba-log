import type { Tables } from '@/database.types'
import supabase from '@/lib/supabase'

export async function insertPost({
	title,
	description,
	content,
	category_id,
}: Pick<Tables<'post'>, 'title' | 'description' | 'content' | 'category_id'>) {
	const {data, error} = await supabase.from('post').insert({
		title,
		description,
		content,
		category_id,
	}).select('*, category(id, slug)');

	if(error)
		throw new Error(error.message)

	return data[0];
}
