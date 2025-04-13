import { getAllCategories } from '../category/actions'
import WriteForm from './components/write-form'

export default async function WritePage() {
	const categories = await getAllCategories()

	return <WriteForm categories={categories} />
}
