import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

interface MarkdownProps {
  children: string
}

export const Markdown = ({ children }: MarkdownProps) => {
  return (
    <div className="markdown-content">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          ul: ({ node: _, ...props }) => (
            <ul className="mb-2 list-disc pl-2" {...props} />
          ),
          li: ({ node: _, ...props }) => <li className="my-1" {...props} />,
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  )
}
