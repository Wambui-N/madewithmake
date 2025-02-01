import Link from "next/link";
import { getAllPosts, getAllTags } from "@/lib/posts";
import { Calendar, Tag, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import BlogHero from "@/components/blogHero";
import Image from "next/image";

export default async function TagPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;

  const posts = await getAllPosts();
  const tags = (await getAllTags());

  return (
    <div className="responsive">
      <BlogHero />

      {/* Tags filter */}
      <div className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Explore topics</h2>
        <div className="flex flex-wrap gap-2">
          {tags && tags.length > 0 ? (
            tags.map((tag: { slug: string; name: string }) => (
              <Link
                key={tag.slug}
                href={`/blog/tag/${tag.slug}`}
                className="mr-2 inline-flex items-center rounded-full bg-dark_blue/50 px-4 py-2 text-xs text-white hover:bg-dark_blue/80 hover:text-white"
              >
                <Tag className="mr-1 h-4 w-4" />
                {tag.name}
              </Link>
            ))
          ) : (
            <p className="text-muted-foreground">No tags found.</p>
          )}
        </div>
      </div>

      {/* Posts list */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
        {posts.length > 0 ? (
          posts.map((post) => (
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
          ))
        ) : (
          <p className="col-span-full text-muted-foreground">No posts found.</p>
        )}
      </div>
    </div>
  );
}
