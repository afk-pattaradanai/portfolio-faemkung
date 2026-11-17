import { site } from '@/data/site';
export const dynamic = 'force-static';

export default function manifest() {
  return {
    name: `${site.name} — Personal Portfolio`,
    short_name: site.name,
    description: site.shortDescription,
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#ffffff',
    lang: site.language,
    icons: [
      { src: '/icon', sizes: '512x512', type: 'image/png' },
      { src: '/apple-icon', sizes: '180x180', type: 'image/png' },
    ],
  };
}