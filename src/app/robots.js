import { site } from '@/data/site';
export const dynamic = 'force-static';

export default function robots() {
  const base = site.url ? site.url.replace(/\/$/, '') : '';

  return {
    rules: { userAgent: '*', allow: '/' },
    ...(base && { sitemap: `${base}/sitemap.xml`, host: base }),
  };
}