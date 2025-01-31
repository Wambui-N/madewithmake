import { getPostBySlug, getAllPosts } from '@/lib/posts'
import { MDXRemote } from 'next-mdx-remote/rsc'

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)
  
  return (
    <article className="max-w-4xl mx-auto py-12">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <time className="text-gray-500">
        {new Date(post.date).toLocaleDateString()}
      </time>
      <div className="prose mt-8">
        <MDXRemote source={post.content} />
      </div>
    </article>
  )
}