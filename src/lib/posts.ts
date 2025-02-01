"use server"; // Ensures this runs only on the server

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Post, PostTag } from "./types";

const postsDirectory = path.join(process.cwd(), "posts");

export async function getAllPosts(): Promise<Post[]> {
  if (!fs.existsSync(postsDirectory)) return []; // Prevents errors if directory is missing
  const fileNames = fs.readdirSync(postsDirectory);

  return (
    await Promise.all(
      fileNames
        .filter((fileName) => fileName.endsWith(".mdx")) // Ensure only .mdx files
        .map(async (fileName) => {
          // Changed to async
          const fullPath = path.join(postsDirectory, fileName);
          const fileContents = await fs.promises.readFile(fullPath, "utf8"); // Use promises to read file
          const { data, content } = matter(fileContents);

          return {
            coverImage: data.coverImage ?? "", // Ensure coverImage is defined
            slug: fileName.replace(/\.mdx$/, ""),
            title: data.title ?? "Untitled", // Ensure title is defined
            date: data.date ?? new Date().toISOString(), // Fallback date
            excerpt: data.excerpt ?? content.slice(0, 150) + "...", // Auto-generate excerpt
            content,
            tags: (data.tags || []).map((tag: string) => ({
              name: tag,
              slug: tag.toLowerCase().replace(/\s+/g, "-"),
            })),
          };
        }),
    )
  ).sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1));
}

export async function getAllTags(): Promise<PostTag[]> {
  const posts = await getAllPosts();
  const tags = new Set<string>();

  posts.forEach((post) => {
    post.tags.forEach((tag) => {
      tags.add(tag.name); // Ensure we are adding the correct property
    });
  });

  return Array.from(tags).map((tag) => ({
    name: tag,
    slug: tag.toLowerCase().replace(/\s+/g, "-"),
    // Ensure any additional properties required by PostTag are included
  })) as PostTag[]; // Cast to PostTag[]
}

export async function getPostsByTag(tagSlug: string): Promise<Post[]> {
  const posts = await getAllPosts();
  return posts.filter((post) => post.tags.some((tag) => tag.slug === tagSlug));
}

export async function getPostBySlug(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);

  try {
    await fs.promises.access(fullPath); // Check if the file exists
    const fileContents = await fs.promises.readFile(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      tags: data.tags ?? [], // Ensure tags is defined
      coverImage: data.coverImage ?? "", // Ensure coverImage is defined
      excerpt: data.excerpt ?? content.slice(0, 150) + "...", // Auto-generate excerpt
      slug,
      title: data.title ?? "Untitled",
      date: data.date ?? new Date().toISOString(),
      content,
    };
  } catch (error) {
    return null; // Return null if the file doesn't exist
  }
}
