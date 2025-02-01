import { getPostBySlug, getAllPosts } from "@/lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/components/mdx";
import { Tag, Clock, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Metadata } from "next";
import SectionTitle from "@/components/sectionTitle";

type BlogPostParams = {
  slug: string;
};

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams(): Promise<BlogPostParams[]> {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;

  if (!resolvedParams?.slug) return <p>Invalid request. Missing slug.</p>;

  const post = await getPostBySlug(resolvedParams.slug);
  if (!post) return <p>Post not found.</p>;

  const formattedDate = new Date(post.date).toLocaleDateString();
  const defaultCoverImage =
    "https://images.unsplash.com/photo-1562240020-ce31ccb0fa7d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fA%3D%3D";

  return (
    <article className="responsive">
      <header className="mb-8">
        <div className="mb-4 flex items-center space-x-2 text-sm text-muted-foreground">
          <time className="flex items-center">
            <Clock className="mr-1 h-4 w-4" />
            {formattedDate}
          </time>
        </div>
        <SectionTitle text={post.title} />

        {post.coverImage && (
          <div className="relative mb-8 aspect-[calc(4*3+1)/4] overflow-hidden rounded-lg">
            <Image
              src={post.coverImage || defaultCoverImage}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        <div className="flex justify-end text-grey">
          <Button
            variant="outline"
            size="sm"
            className="border border-grey/50 hover:bg-dark_blue/20"
          >
            <Share2 className="mr-2 h-4 w-4" />
            Share
          </Button>
        </div>
      </header>

      <div className="prose dark:prose-invert max-w-none lg:mx-32">
        <MDXRemote source={post.content} components={mdxComponents} />
      </div>

      <footer className="mt-12 border-t border-grey/50 pt-6">
        <div className="flex flex-wrap gap-2">
          {post.tags?.map((tag: string) => (
            <div
              key={tag}
              className="mr-2 inline-flex items-center rounded-md px-1 py-0.5 text-xs text-white/50 hover:text-white"
            >
              <Tag className="mr-1 h-3.5 w-3.5" />
              {tag}
            </div>
          ))}
        </div>
      </footer>
    </article>
  );
}
