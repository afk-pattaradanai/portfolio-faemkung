# FaemkunG — Personal Portfolio

Next.js (App Router) · JavaScript/JSX · Tailwind CSS v4 · Emotion · Lucide React

## Requirements
- Node.js 20.9+
- npm

## Commands
```bash
npm install
npm run dev     # http://localhost:3000
npm run build
npm run start
npm run lint
```

## แก้ไขข้อมูล (ไม่ต้องแก้ Component)
| ต้องการแก้ | ไฟล์ |
|---|---|
| ชื่อ, บทนำ, About, รูปโปรไฟล์ | `src/data/profile.js` |
| โดเมน, SEO | `src/data/site.js` |
| การศึกษา | `src/data/education.js` |
| ประสบการณ์ | `src/data/experience.js` |
| โปรเจกต์ | `src/data/projects.js` |
| Tech Stack | `src/data/techStack.js` |
| Social Media / อีเมล / LINE | `src/data/socialLinks.js` |
| เมนู | `src/data/navigation.js` |

### เปลี่ยนรูปโปรไฟล์
1. วางไฟล์ที่ `public/images/profile.webp` (แนะนำ 4:5 เช่น 800×1000)
2. แก้ `profile.avatar.src` เป็น `'/images/profile.webp'`

### เพิ่มโปรเจกต์
เพิ่ม object ใน `src/data/projects.js` (`id` ห้ามซ้ำ) ถ้ามีภาพให้วางที่ `public/images/projects/` แล้วใส่ `image: '/images/projects/xxx.webp'` (แนะนำ 1600×1000)

### เพิ่ม Tech Stack
เพิ่ม object ใน `techStack` โดย `category` ต้องตรงกับ `techCategories[].id` และ `status` เป็น `used` | `learning` | `exploring`

### แก้ Social Media / อีเมล
แก้ `href`, `value`, `displayValue` ใน `src/data/socialLinks.js` ส่วนอีเมลให้ใส่ที่ค่าคงที่ `PERSONAL_EMAIL`

### เมื่อมีโดเมน
ใส่ `url` ใน `src/data/site.js` แล้ว canonical, Open Graph URL, sitemap และ robots จะเปิดใช้อัตโนมัติ

## Deploy
- **Vercel:** Push ขึ้น GitHub → Import ใน Vercel → Deploy
- **Cloudflare:** ใช้ `@opennextjs/cloudflare` ตามเอกสารทางการ

## Notes
- ไม่มี Database / Backend / Authentication / `.env`
- ธีม: CSS Variables + `data-theme` บน `<html>` + inline script ป้องกัน Flash
- Emotion SSR: `src/components/providers/EmotionRegistry.jsx`