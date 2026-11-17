export const navigation = [
  { id: 'home', label: 'Home', labelTh: 'หน้าแรก' },
  { id: 'about', label: 'About', labelTh: 'เกี่ยวกับผม' },
  { id: 'education', label: 'Education', labelTh: 'การศึกษา' },
  { id: 'experience', label: 'Experience', labelTh: 'ประสบการณ์' },
  { id: 'projects', label: 'Projects', labelTh: 'ผลงาน' },
  { id: 'tech-stack', label: 'Tech Stack', labelTh: 'เทคโนโลยี' },
  { id: 'contact', label: 'Contact', labelTh: 'ติดต่อ' },
];

// Module-level constant → stable reference for hooks
export const sectionIds = navigation.map((item) => item.id);