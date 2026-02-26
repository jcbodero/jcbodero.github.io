import { MetadataRoute } from 'next'

export const dynamic = 'force-static';
export const revalidate = false;
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://jcbodero.github.io/',
      lastModified: new Date('2024-03-20'),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
