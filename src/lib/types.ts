import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { JSX } from "react";

export interface PostTag {
  map(arg0: (tag: any) => JSX.Element): import("react").ReactNode;
  length: number;
  name: string;
  slug: string;
  // Add any other properties that are required
}

export type Post = {
  coverImage: string | StaticImport;
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  tags: PostTag[];
};
