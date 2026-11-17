const isProd = process.env.NODE_ENV === 'production';

const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  reactStrictMode: true,
  images: { unoptimized: true },

  // ใช้ custom domain (faemkung.inwthai.online) เว็บอยู่ที่ root จึงไม่ต้องมี basePath / assetPrefix

  // headers ใช้ได้เฉพาะตอน dev (next dev) เพราะ static export ไม่รองรับ
  ...(!isProd && {
    async headers() {
      return [{ source: '/:path*', headers: securityHeaders }];
    },
  }),
};

export default nextConfig;