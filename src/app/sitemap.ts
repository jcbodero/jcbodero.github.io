import { MetadataRoute } from 'next'

export const dynamic = 'force-static';
export const revalidate = false;
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://jcbodero.com/jcbodero.github.io/',
      lastModified: '2025-05-22',
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
