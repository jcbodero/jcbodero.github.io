import { MetadataRoute } from 'next'

export const dynamic = 'force-static';
export const revalidate = false;
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://jcbodero.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}