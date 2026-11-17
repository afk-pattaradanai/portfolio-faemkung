import './globals.css';
import { inter, notoSansThai } from '@/theme/fonts';
import { site } from '@/data/site';
import { themeInitScript } from '@/lib/theme';
import Providers from '@/components/providers/Providers';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollProgress from '@/components/ui/ScrollProgress';
import BackToTop from '@/components/ui/BackToTop';
import RevealObserver from '@/components/ui/RevealObserver';
import SecurityProtector from '@/components/ui/SecurityProtector';

const hasUrl = Boolean(site.url);

export const metadata = {
  ...(hasUrl && {
    metadataBase: new URL(site.url),
    alternates: { canonical: '/' },
  }),
  title: {
    default: site.title,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: site.keywords,
  applicationName: site.name,
  authors: [{ name: site.name }],
  creator: site.name,
  openGraph: {
    type: 'website',
    locale: site.locale,
    alternateLocale: ['en_US'],
    siteName: site.name,
    title: site.title,
    description: site.description,
    ...(hasUrl && { url: site.url }),
  },
  twitter: {
    card: 'summary_large_image',
    title: site.title,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0b' },
  ],
  colorScheme: 'light dark',
};

export default function RootLayout({ children }) {
  return (
    <html
      lang={site.language}
      className={`${inter.variable} ${notoSansThai.variable}`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        {/* Runs before first paint: applies saved/system theme → no flash of incorrect theme */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-dvh bg-bg text-fg">
        <Providers>
          <SecurityProtector />
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-fg focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-bg"
          >
            ข้ามไปยังเนื้อหาหลัก
          </a>
          <ScrollProgress />
          <Header />
          <main id="main" tabIndex={-1}>
            {children}
          </main>
          <Footer />
          <BackToTop />
          <RevealObserver />
        </Providers>
      </body>
    </html>
  );
}