import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'

export default function BlogList() {
  const posts = getAllPosts()
  
  return (
    <div className="max-w-4xl mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">Blog Posts</h1>
      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-2xl font-semibold hover:text-blue-600">
                {post.title}
              </h2>
            </Link>
            <time className="text-gray-500">
              {new Date(post.date).toLocaleDateString()}
            </time>
            <p className="mt-2">{post.excerpt}</p>
          </article>
        ))}
      </div>
    </div>
  )
}