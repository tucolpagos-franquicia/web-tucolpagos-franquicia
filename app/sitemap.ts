import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.tucolpagosfranquicia.com',
      lastModified: new Date('2025-12-17'),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]
}



