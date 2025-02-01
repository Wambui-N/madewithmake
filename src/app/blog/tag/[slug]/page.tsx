import Link from "next/link";
import { getPostsByTag, getAllTags } from "@/lib/posts";

export async function generateStaticParams() {
  const tags = await getAllTags();
  return tags.map((tag) => ({
    slug: tag.slug,
  }));
}

export default async function TagPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  
  const posts = await getPostsByTag(resolvedParams.slug);
  const tag = (await getAllTags()).find((t) => t.slug === resolvedParams.slug);

  return (
    <div className="mx-auto max-w-4xl py-12">
      <h1 className="mb-8 text-4xl font-bold">Posts tagged "{tag?.name}"</h1>
      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-2xl font-semibold hover:text-blue-600">
                {post.title}
              </h2>
            </Link>
            <div className="mt-2 flex gap-2">
              {post.tags.map((tag) => (
                <Link
                  key={tag.slug}
                  href={`/blog/tag/${tag.slug}`}
                  className="rounded-full bg-dark_blue/70 px-4 py-1 text-sm hover:bg-dark_blue"
                  >
                  {tag.name}
                </Link>
              ))}
            </div>
            <time className="mt-2 block text-gray-500">
              {new Date(post.date).toLocaleDateString()}
            </time>
            <p className="mt-2">{post.excerpt}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
