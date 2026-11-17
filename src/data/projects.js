// เพิ่มโปรเจกต์ใหม่: คัดลอก object แล้วแก้ค่า — ไม่ต้องแก้ Component
// image: '/images/projects/xxx.webp' (แนะนำ 1600×1000) หรือ null เพื่อใช้ Placeholder
// tags: ใส่เฉพาะเทคโนโลยีที่ยืนยันได้จริง
export const projects = [
  {
    id: 'project-404',
    number: '01',
    title: '404',
    // TODO: ปรับคำอธิบายให้ตรงกับรายละเอียดจริงของโปรเจกต์
    description: 'โปรเจกต์เว็บไซต์ที่พัฒนาและเผยแพร่ภายใต้โดเมน seone.site สามารถเข้าชมเว็บไซต์จริงได้จากปุ่มด้านล่าง',
    url: 'https://404.seone.site/',
    image: '/images/projects/seone.png',
    imageAlt: 'ภาพตัวอย่างหน้าเว็บไซต์โปรเจกต์ 404',
    tags: ['Cloudflare Workers'],
  },
  {
    id: 'gl-cinema',
    number: '02',
    title: 'GL Cinema',
    // TODO: ปรับคำอธิบายให้ตรงกับรายละเอียดจริงของโปรเจกต์
    description: 'โปรเจกต์เว็บไซต์ GL Cinema ที่เผยแพร่ผ่าน Cloudflare Pages สามารถเข้าชมเว็บไซต์จริงได้จากปุ่มด้านล่าง',
    url: 'https://gl-cinema.pages.dev/th',
    image: '/images/projects/gl.png',
    imageAlt: 'ภาพตัวอย่างหน้าเว็บไซต์ GL Cinema',
    tags: ['Cloudflare Pages'],
  },
];