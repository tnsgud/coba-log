import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface Props {
	markdown: string
	className?: string
}

export default function MarkDownRenderer({ markdown, className }: Props) {
	return (
		<div className={`custom-prose${className ? ` ${className}` : ''}`}>
			<ReactMarkdown
				remarkPlugins={[remarkGfm]}
				components={{
					ul: ({ node, ...props }) => (
						<ul className="dark:text-white" {...props} />
					),
					li: ({ node, ...props }) => (
						<li className="dark:text-white" {...props} />
					),
					a: ({ node, ...props }) => (
						<a className="dark:text-white" {...props} />
					),
					p: ({ node, ...props }) => (
						<p className="dark:text-white" {...props} />
					),
					strong: ({ node, ...props }) => (
						<strong className="dark:text-white" {...props} />
					),
					h1: ({ node, ...props }) => (
						<h1 className="dark:text-white" {...props} />
					),
					h2: ({ node, ...props }) => (
						<h2 className="dark:text-white" {...props} />
					),
					h3: ({ node, ...props }) => (
						<h2 className="dark:text-white" {...props} />
					),
					h4: ({ node, ...props }) => (
						<h2 className="dark:text-white" {...props} />
					),
					h5: ({ node, ...props }) => (
						<h2 className="dark:text-white" {...props} />
					),
					h6: ({ node, ...props }) => (
						<h2 className="dark:text-white" {...props} />
					),
				}}
			>
				{markdown}
			</ReactMarkdown>
		</div>
	)
}
