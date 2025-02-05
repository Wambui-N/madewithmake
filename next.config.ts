const withMDX = require('@next/mdx')({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // If you need to temporarily ignore build errors
    // ignoreBuildErrors: true,
  },
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  images: {
    domains: ['images.unsplash.com', 'images.pexels.com'], // Add domains for remote images
  },
}

module.exports = withMDX(nextConfig)