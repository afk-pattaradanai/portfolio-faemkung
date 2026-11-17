const isProd = process.env.NODE_ENV === 'production';
const repo = 'portfolio-faemkung'; // ต้องตรงกับชื่อ repo บน GitHub

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
  basePath: isProd ? `/${repo}` : '',
  assetPrefix: isProd ? `/${repo}/` : '',

  // headers ใช้ได้เฉพาะตอน dev (next dev) เพราะ static export ไม่รองรับ
  ...(!isProd && {
    async headers() {
      return [{ source: '/:path*', headers: securityHeaders }];
    },
  }),
};

export default nextConfig;