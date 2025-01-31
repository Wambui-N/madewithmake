import Image from 'next/image'
import Link from 'next/link'

// Custom components for MDX
const CustomLink = (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const href = props.href
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'))

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props}>{props.children}</a>
      </Link>
    )
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />
}

const CustomImage = (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
  if (!props.src) return null

  return (
    <div className="my-8">
      <Image
        src={props.src}
        alt={props.alt || ''}
        width={720}
        height={480}
        layout="intrinsic"
        className="rounded-lg"
      />
    </div>
  )
}

// Fixed component name: Renamed to AlertBox
const AlertBox = ({
  children,
  type = 'info'
}: {
  children: React.ReactNode
  type?: 'info' | 'warning' | 'success'
}) => {
  const colors = {
    info: 'bg-blue-50 border-blue-200 text-blue-800',
    warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
    success: 'bg-green-50 border-green-200 text-green-800'
  }

  return (
    <div className={`p-4 border-l-4 rounded-r ${colors[type]} my-4`}>
      {children}
    </div>
  )
}

const CodeBlock = ({ children, language }: { children: string; language?: string }) => {
  return (
    <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
      <code className={language ? `language-${language}` : ''}>{children}</code>
    </pre>
  )
}

// Export all components
export const mdxComponents = {
  a: CustomLink,
  img: CustomImage,
  AlertBox, // Fixed component reference
  CodeBlock
}
