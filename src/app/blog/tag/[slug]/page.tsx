import Link from "next/link";
import { getPostsByTag, getAllTags } from "@/lib/posts";
import { Tag } from "lucide-react";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

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
    <div className="responsive">
      <h1 className="mb-4 text-2xl font-semibold overflow-hidden py-2">Posts tagged "{tag?.name}"</h1>
      <div className="space-y-8">
        {posts.map((post) => (
          <article
          key={post.slug}
          className="group relative flex flex-col overflow-hidden rounded-lg bg-gray-900/50 shadow transition-shadow hover:shadow-lg"
        >
          <div className="p-6">
            <div className="mb-3 w-full">
              <Image
                className="h-[40vh] w-full rounded-lg object-cover"
                src={post.coverImage}
                alt={post.title}
                width={500}
                height={100}
              />
            </div>
            <div className="mb-3 flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <time>{new Date(post.date).toLocaleDateString()}</time>
            </div>
            <Link href={`/blog/${post.slug}`} className="block">
              <h2 className="mb-2 text-2xl font-semibold transition-colors group-hover:text-sky">
                {post.title}
              </h2>
            </Link>
            <p className="mb-4 text-grey">{post.excerpt}</p>
            <div className="mb-4 flex flex-wrap gap-1">
              {post.tags.map((tag) => (
                <Link
                  key={tag.slug}
                  href={`/blog/tag/${tag.slug}`}
                  className="mr-2 inline-flex items-center rounded-md px-1 py-0.5 text-xs text-grey hover:text-white"
                >
                  <Tag className="mr-1 h-3 w-3" />
                  {tag.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-auto p-6 pt-0">
            <Button variant="link" className="group m-0 p-0" asChild>
              <Link href={`/blog/${post.slug}`}>
                Read more
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </article>
        ))}
      </div>
    </div>
  );
}
