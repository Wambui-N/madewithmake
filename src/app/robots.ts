import type { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: 'Googlebot',
        allow: ['/'],
        disallow: ['/private/', '/privacypolicy', '/termsandconditions'],
      },
      {
        userAgent: '*',
        disallow: ['/'],
      }
    ],
    sitemap: 'https://acme.com/sitemap.xml',
  }
}