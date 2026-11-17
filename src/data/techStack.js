// สถานะเริ่มต้นตั้งไว้อย่างระมัดระวัง — โปรดตรวจสอบและปรับให้ตรงกับความจริง
// ไม่มีเปอร์เซ็นต์หรือระดับความเชี่ยวชาญโดยเจตนา
// logo: วาง SVG ทางการไว้ที่ public/icons/tech/ แล้วใส่ path; null = ใช้ Monogram

export const techStatuses = {
  used: { id: 'used', label: 'Used / Experienced', labelTh: 'เคยใช้งานหรือทดลองพัฒนา', short: 'Used' },
  learning: { id: 'learning', label: 'Currently Learning', labelTh: 'กำลังศึกษาและพัฒนาเพิ่มเติม', short: 'Learning' },
  exploring: { id: 'exploring', label: 'Exploring', labelTh: 'สนใจศึกษาในอนาคต', short: 'Exploring' },
};

export const techCategories = [
  { id: 'frontend', label: 'Frontend Development' },
  { id: 'frameworks', label: 'Framework & Libraries' },
  { id: 'styling', label: 'Styling & UI' },
  { id: 'tools', label: 'Development Tools' },
  { id: 'version-control', label: 'Version Control' },
  { id: 'deployment', label: 'Deployment & Hosting' },
  { id: 'web', label: 'Modern Web Technologies' },
  { id: 'currently-learning', label: 'Currently Learning', statusFilter: 'learning' },
];

export const techStack = [
  // Frontend Development
  { id: 'html5', name: 'HTML5', mark: 'H5', category: 'frontend', status: 'used', logo: null },
  { id: 'css3', name: 'CSS3', mark: 'C3', category: 'frontend', status: 'used', logo: null },
  { id: 'javascript', name: 'JavaScript', mark: 'JS', category: 'frontend', status: 'used', logo: null },
  { id: 'jsx', name: 'JSX', mark: 'JSX', category: 'frontend', status: 'used', logo: null },
  { id: 'typescript', name: 'TypeScript', mark: 'TS', category: 'frontend', status: 'learning', logo: null },
  { id: 'responsive', name: 'Responsive Web Design', mark: 'RWD', category: 'frontend', status: 'used', logo: null },

  // Framework & Libraries
  { id: 'react', name: 'React', mark: 'Re', category: 'frameworks', status: 'used', logo: null },
  { id: 'nextjs', name: 'Next.js', mark: 'Nx', category: 'frameworks', status: 'used', logo: null },
  { id: 'vue', name: 'Vue.js', mark: 'Vu', category: 'frameworks', status: 'exploring', logo: null },
  { id: 'angular', name: 'Angular', mark: 'Ng', category: 'frameworks', status: 'exploring', logo: null },
  { id: 'tanstack-query', name: 'TanStack Query', mark: 'TQ', category: 'frameworks', status: 'exploring', logo: null },

  // Styling & UI
  { id: 'tailwind', name: 'Tailwind CSS', mark: 'Tw', category: 'styling', status: 'used', logo: null },
  { id: 'emotion', name: 'Emotion', mark: 'Em', category: 'styling', status: 'used', logo: null },
  { id: 'lucide', name: 'Lucide React', mark: 'Lu', category: 'styling', status: 'used', logo: null },
  { id: 'google-fonts', name: 'Google Fonts', mark: 'Aa', category: 'styling', status: 'used', logo: null },

  // Development Tools
  { id: 'nodejs', name: 'Node.js', mark: 'Nd', category: 'tools', status: 'used', logo: null },
  { id: 'npm', name: 'npm', mark: 'npm', category: 'tools', status: 'used', logo: null },
  { id: 'vite', name: 'Vite', mark: 'Vi', category: 'tools', status: 'used', logo: null },
  { id: 'eslint', name: 'ESLint', mark: 'ES', category: 'tools', status: 'used', logo: null },
  { id: 'oxlint', name: 'Oxlint', mark: 'Ox', category: 'tools', status: 'exploring', logo: null },

  // Version Control
  { id: 'git', name: 'Git', mark: 'Git', category: 'version-control', status: 'used', logo: null },
  { id: 'github', name: 'GitHub', mark: 'GH', category: 'version-control', status: 'used', logo: null },

  // Deployment & Hosting
  { id: 'cloudflare-pages', name: 'Cloudflare Pages', mark: 'CF', category: 'deployment', status: 'used', logo: null },
  { id: 'vercel', name: 'Vercel', mark: 'Ve', category: 'deployment', status: 'learning', logo: null },
  { id: 'supabase', name: 'Supabase', mark: 'Sb', category: 'deployment', status: 'learning', logo: null },

  // Modern Web Technologies
  { id: 'pwa', name: 'Progressive Web App', mark: 'PWA', category: 'web', status: 'learning', logo: null },
  { id: 'rest-api', name: 'REST API', mark: 'API', category: 'web', status: 'learning', logo: null },
  { id: 'json', name: 'JSON', mark: '{ }', category: 'web', status: 'used', logo: null },
  { id: 'rss', name: 'RSS', mark: 'RSS', category: 'web', status: 'exploring', logo: null },
  { id: 'http3', name: 'HTTP/3', mark: 'H3', category: 'web', status: 'exploring', logo: null },
  { id: 'priority-hints', name: 'Priority Hints', mark: 'PH', category: 'web', status: 'learning', logo: null },
  { id: 'core-web-vitals', name: 'Core Web Vitals', mark: 'CWV', category: 'web', status: 'learning', logo: null },
  { id: 'seo', name: 'SEO & Web Metadata', mark: 'SEO', category: 'web', status: 'learning', logo: null },
  { id: 'a11y', name: 'Web Accessibility', mark: 'A11y', category: 'web', status: 'learning', logo: null },
];