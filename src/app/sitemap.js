import { site } from '@/data/site';

export default function sitemap() {
  // No domain yet → empty sitemap. Set site.url in src/data/site.js to enable.
  if (!site.url) return [];

  return [
    {
      url: site.url,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}