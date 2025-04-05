import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface Props {
  markdown: string;
}

export default function MarkDownRenderer({ markdown }: Props) {
  return (
    <div className="prose">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        children={markdown}
        components={{
          ul: ({ node, ...props }) => <ul className="text-white" {...props} />,
          li: ({ node, ...props }) => <li className="text-white" {...props} />,
          a: ({ node, ...props }) => <a className="text-white" {...props} />,
          p: ({ node, ...props }) => <p className="text-white" {...props} />,
          strong: ({ node, ...props }) => (
            <strong className="text-white" {...props} />
          ),
          h1: ({ node, ...props }) => <h1 className="text-white" {...props} />,
          h2: ({ node, ...props }) => <h2 className="text-white" {...props} />,
        }}
      />
    </div>
  );
}
