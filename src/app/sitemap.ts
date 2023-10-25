import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.jeraldbaroro.xyz/',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1
    }
  ];
}
