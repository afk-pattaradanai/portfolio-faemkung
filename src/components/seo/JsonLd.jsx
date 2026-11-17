import { getPersonJsonLd } from '@/lib/structuredData';

export default function JsonLd() {
  // Escape "<" so data can never close the script tag
  const json = JSON.stringify(getPersonJsonLd()).replace(/</g, '\\u003c');

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
