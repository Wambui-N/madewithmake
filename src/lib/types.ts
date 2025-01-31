export type PostTag = {
    name: string
    slug: string
  }
  
  export type Post = {
    slug: string
    title: string
    date: string
    excerpt: string
    content: string
    tags: PostTag[]
  }