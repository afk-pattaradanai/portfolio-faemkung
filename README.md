# FaemkunG — Personal Portfolio

เว็บไซต์ **Personal Portfolio & Personal Profile** สำหรับแนะนำตัว ประวัติการศึกษา ประสบการณ์ ผลงาน และเทคโนโลยีที่สนใจ พัฒนาด้วย Next.js โดยเน้นดีไซน์แบบ Premium Minimalism ที่ได้รับแรงบันดาลใจจากแนวทางการออกแบบของ Apple และ Microsoft พร้อมรองรับ Light Mode และ Dark Mode

> เว็บไซต์นี้เป็น Static / Frontend Portfolio ไม่ใช้ Database, Backend, Authentication หรือไฟล์ Environment Variables

---

## Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Customize Content](#customize-content)
- [Images and Assets](#images-and-assets)
- [Theme Configuration](#theme-configuration)
- [SEO and Performance](#seo-and-performance)
- [Deployment](#deployment)
- [Contact](#contact)
- [License](#license)

## Overview

เว็บไซต์รวบรวมข้อมูลส่วนตัวและผลงานไว้ในที่เดียว ประกอบด้วยส่วนแนะนำตัว ประวัติการศึกษา ประสบการณ์ระหว่างเรียน โปรเจกต์ที่พัฒนา เทคโนโลยีและเครื่องมือที่ใช้งานหรือกำลังศึกษา ตลอดจนช่องทางการติดต่อ

### Design Direction

- Premium Minimalism และ Modern Editorial Layout
- Typography ชัดเจน มีลำดับชั้น และใช้พื้นที่ว่างอย่างเหมาะสม
- Responsive Layout สำหรับ Desktop, Tablet และ Mobile
- Light Mode และ Dark Mode
- Subtle Motion และ Micro-interactions โดยคำนึงถึงการเข้าถึง

## Features

- **Personal Profile** — แนะนำตัวและข้อมูลพื้นฐาน
- **Education Timeline** — เส้นทางการศึกษา
- **Experience Timeline** — ประสบการณ์ฝึกงานและประสบการณ์ระหว่างเรียน
- **Projects Showcase** — แสดงผลงานพร้อมลิงก์ไปยังเว็บไซต์จริง
- **Tech Stack & Tools** — แสดงเทคโนโลยีตามหมวดหมู่และสถานะการเรียนรู้
- **Social Links** — รวมช่องทางติดต่อและบัญชีออนไลน์
- **Theme Switcher** — สลับ Light Mode / Dark Mode และจดจำค่าที่เลือก
- **Responsive Navigation** — เมนูนำทางที่รองรับหน้าจอขนาดเล็ก
- **Copy to Clipboard** — คัดลอก LINE ID และอีเมล
- **SEO Foundations** — Metadata, Open Graph, Sitemap และ Robots
- **Performance & Accessibility** — ใช้ Semantic HTML, Image Optimization และรองรับ Reduced Motion ตามความเหมาะสม

## Tech Stack

### Core

- [Next.js](https://nextjs.org/) — React Framework และ App Router
- [React](https://react.dev/) — UI Library
- JavaScript (ES6+)
- JSX

### Styling & UI

- [Tailwind CSS](https://tailwindcss.com/) — Utility-first CSS
- [Emotion](https://emotion.sh/) — CSS-in-JS และ Dynamic Styling
- [Lucide React](https://lucide.dev/) — Icon Library
- [Google Fonts](https://fonts.google.com/) — Typography

### Development & Web Technologies

- Node.js และ npm
- Git และ GitHub
- HTML5 และ CSS3
- Responsive Web Design
- SEO และ Web Metadata
- Core Web Vitals
- Image Optimization
- Priority Hints
- Accessibility

> รายการเทคโนโลยีในส่วน Portfolio ควรแยกให้ชัดเจนระหว่างเครื่องมือที่เคยใช้งานจริง กำลังศึกษา และสนใจทดลองในอนาคต ไม่ควรสื่อว่ามีความเชี่ยวชาญในเทคโนโลยีที่ยังไม่ได้ใช้งาน

## Project Structure

โครงสร้างตัวอย่างสำหรับโปรเจกต์นี้ สามารถปรับให้ตรงกับไฟล์จริงของ Repository ได้:

```text
portfolio/
├── public/
│   ├── images/
│   │   ├── profile.webp
│   │   └── projects/
│   │       ├── project-404.webp
│   │       └── gl-cinema.webp
│   ├── icons/
│   └── favicon.ico
│
├── src/
│   ├── app/
│   │   ├── layout.jsx
│   │   ├── page.jsx
│   │   ├── globals.css
│   │   ├── not-found.jsx
│   │   ├── sitemap.js
│   │   └── robots.js
│   ├── components/
│   │   ├── layout/
│   │   ├── sections/
│   │   ├── ui/
│   │   └── providers/
│   ├── data/
│   │   ├── profile.js
│   │   ├── projects.js
│   │   ├── education.js
│   │   ├── experience.js
│   │   ├── techStack.js
│   │   └── socialLinks.js
│   ├── hooks/
│   ├── lib/
│   ├── styles/
│   └── theme/
│
├── .gitignore
├── eslint.config.mjs
├── next.config.mjs
├── postcss.config.mjs
├── package.json
└── README.md
```

## Getting Started

### Requirements

ติดตั้งเครื่องมือต่อไปนี้ก่อนเริ่มใช้งาน:

- [Node.js](https://nodejs.org/) รุ่นที่รองรับโดย Next.js เวอร์ชันที่ติดตั้ง
- npm (ติดตั้งมาพร้อม Node.js)
- Git (แนะนำ)

### 1. Clone the repository

```bash
git clone <YOUR_REPOSITORY_URL>
cd <YOUR_PROJECT_FOLDER>
```

หากดาวน์โหลด Source Code มาแล้ว ให้เปิด Terminal ที่โฟลเดอร์โปรเจกต์แทนขั้นตอนนี้

### 2. Install dependencies

```bash
npm install
```

### 3. Start development server

```bash
npm run dev
```

เปิดเว็บไซต์ที่:

```text
http://localhost:3000
```

### 4. Create a production build

```bash
npm run build
```

### 5. Run the production server locally

```bash
npm run start
```

> คำสั่ง `npm run` ต้องตรงกับ Scripts ที่กำหนดไว้ใน `package.json` ของโปรเจกต์จริง หากยังไม่มี Script ใด ให้เพิ่ม Script นั้นก่อนเรียกใช้งาน

## Available Scripts

Scripts ที่มักใช้ในโปรเจกต์ Next.js:

| Command | Description |
| --- | --- |
| `npm run dev` | เปิด Development Server |
| `npm run build` | สร้าง Production Build |
| `npm run start` | เปิด Production Server หลัง Build |
| `npm run lint` | ตรวจสอบโค้ด หากมีการกำหนด Lint Script ไว้ |

## Customize Content

ข้อมูลเว็บไซต์ควรรวมไว้ในไฟล์ JavaScript ภายใน `src/data/` เพื่อให้แก้ไขได้โดยไม่ต้องเปลี่ยน Component หลัก

| File | Purpose |
| --- | --- |
| `profile.js` | ชื่อ คำแนะนำตัว และข้อมูลโปรไฟล์ |
| `projects.js` | รายการโปรเจกต์ ลิงก์ และคำอธิบาย |
| `education.js` | ประวัติสถานศึกษา |
| `experience.js` | ประสบการณ์ฝึกงานและการทำงาน |
| `techStack.js` | เทคโนโลยี เครื่องมือ และสถานะการเรียนรู้ |
| `socialLinks.js` | ช่องทาง Social Media และการติดต่อ |

### Profile

แก้ไขชื่อ คำแนะนำตัว และข้อมูลที่แสดงใน Hero / About ได้จาก `src/data/profile.js`

### Projects

รายการผลงานตั้งต้น:

| Project | URL |
| --- | --- |
| 404 | <https://404.seone.site/> |
| GL Cinema | <https://gl-cinema.pages.dev/tha> |

เพิ่มโปรเจกต์ใหม่ใน `src/data/projects.js` โดยระบุเฉพาะรายละเอียดและเทคโนโลยีที่ตรวจสอบได้

### Education & Experience

ข้อมูลเส้นทางการศึกษาตั้งต้น:

1. โรงเรียนบ้านปาง — อนุบาล 1 ถึงมัธยมศึกษาปีที่ 3
2. วิทยาลัยการอาชีพบ้านโฮ่ง — ปวช. สาขาเทคนิคคอมพิวเตอร์ ([เว็บไซต์](https://bhic.ac.th/))
3. ฝึกงาน Advice Lamphun — ระยะเวลา 4 เดือน ระหว่าง ปวช.3
4. วิทยาลัยการอาชีพบ้านโฮ่ง — ปวส. สาขาคอมพิวเตอร์ฮาร์ดแวร์ ([เว็บไซต์](https://bhic.ac.th/))
5. บริษัท ฮานาไมโครอิเล็คโทรนิคส์ จำกัด (มหาชน) จังหวัดลำพูน — ประสบการณ์ระหว่าง ปวส.2 ระยะเวลา 1 ปีการศึกษา ([เว็บไซต์](https://www.hanagroup.com/))
6. มหาวิทยาลัยเทคโนโลยีราชมงคลล้านนา วิทยาเขตดอยสะเก็ด — สาขาวิศวกรรมซอฟต์แวร์ ตั้งแต่ปี 1 ถึงปัจจุบัน ([เว็บไซต์](https://rmutl.ac.th/))

หากต้องการเพิ่มปีการศึกษา ตำแหน่งงาน หรือรายละเอียดหน้าที่ ให้เพิ่มเมื่อมีข้อมูลยืนยันแล้วเท่านั้น

### Social & Contact

ช่องทางติดต่อที่กำหนดไว้:

| Channel | URL / ID |
| --- | --- |
| Facebook | <https://www.facebook.com/FaemkunG.19> |
| Instagram | <https://www.instagram.com/fxemkxng_.19/> |
| GitHub — Personal | <https://github.com/pattaradanais151> |
| GitHub — Education | <https://github.com/afk-pattaradanai> |
| LINE ID | `dvc.faem02` |
| Email | <mailto:pattaradanais.sai@gmail.com> |

แก้ไขช่องทางเหล่านี้ได้จาก `src/data/socialLinks.js` และควรตรวจสอบ URL ก่อนนำขึ้น Production

## Images and Assets

วางรูปภาพไว้ในโฟลเดอร์ `public/` ตัวอย่างเช่น:

```text
public/images/profile.webp
public/images/projects/project-404.webp
public/images/projects/gl-cinema.webp
```

จากนั้นอ้างอิงรูปภาพด้วย Path ที่เริ่มต้นด้วย `/` เช่น:

```jsx
<Image
  src="/images/profile.webp"
  alt="FaemkunG profile photo"
  width={640}
  height={640}
/>
```

แนวทางการจัดการรูปภาพ:

- ใช้รูปโปรไฟล์ที่เจ้าของเว็บไซต์จัดเตรียมเอง
- ใช้ไฟล์ WebP หรือ AVIF เมื่อเหมาะสม
- กำหนด `width` และ `height` หรือ `sizes` ให้เหมาะสม
- ใช้ `priority` หรือ `fetchPriority="high"` เฉพาะรูปสำคัญที่อยู่ใน Initial Viewport และตรวจสอบตาม API ของ Next.js เวอร์ชันที่ใช้
- รูปที่อยู่นอกหน้าจอเริ่มต้นควรโหลดแบบ Lazy Loading ตามค่าเริ่มต้น
- ใส่ Alt Text ที่อธิบายภาพอย่างเหมาะสม

หากยังไม่มีรูปภาพ ให้ใช้ Placeholder ที่ออกแบบไว้แทน ห้ามอ้างอิงไฟล์ที่ไม่มีอยู่จริง

## Theme Configuration

เว็บไซต์รองรับ:

- Light Mode
- Dark Mode
- System Preference
- การจดจำ Theme ที่ผู้ใช้เลือกผ่าน `localStorage`

เมื่อแก้ไข Theme ควรใช้ Design Tokens หรือ CSS Variables เป็นศูนย์กลาง เพื่อให้สีของ Background, Text, Surface, Border และ Accent สอดคล้องกันทุก Section และต้องทดสอบการโหลด Theme เพื่อป้องกัน Flash และ Hydration Mismatch

## SEO and Performance

ก่อน Deploy ควรตรวจสอบรายการต่อไปนี้:

- Page Title และ Meta Description
- Open Graph Metadata
- Favicon และ Web App Icons
- `sitemap.js` และ `robots.js`
- Semantic HTML และ Heading Hierarchy
- Canonical URL เมื่อทราบโดเมนจริงแล้ว
- Image Optimization และ Lazy Loading
- Priority Hints สำหรับทรัพยากรสำคัญเท่านั้น
- ลด Client Components และ JavaScript ที่ไม่จำเป็น
- Keyboard Navigation และ Visible Focus States
- Color Contrast และ Reduced Motion
- Broken Links และ Console Errors

ไม่ควรกำหนด Canonical URL หรือ Domain Placeholder ให้กลายเป็น URL จริงก่อนมีโดเมนที่ใช้งานได้

## Deployment

เว็บไซต์ Next.js สามารถ Deploy บนแพลตฟอร์มที่รองรับ Next.js ได้ เช่น:

- [Vercel](https://vercel.com/) — รองรับ Next.js โดยตรง
- [Cloudflare](https://www.cloudflare.com/) — เลือกวิธี Deploy ที่รองรับความสามารถของ Next.js และตรวจสอบ Runtime / Adapter ให้ตรงกับโปรเจกต์

### General deployment steps

1. Push Source Code ไปยัง GitHub Repository
2. เชื่อมต่อ Repository กับแพลตฟอร์ม Hosting
3. ตั้งค่า Build Command เป็น `npm run build` (หรือค่าที่แพลตฟอร์มแนะนำ)
4. ตรวจสอบ Output และ Runtime ตามแพลตฟอร์มที่เลือก
5. Deploy และทดสอบ URL ที่ได้รับ
6. ตรวจสอบ Responsive, Theme, Metadata และลิงก์ภายนอกหลัง Deploy

โปรเจกต์นี้ไม่ต้องกำหนด Environment Variables ตราบใดที่ยังไม่มีการเพิ่มบริการภายนอกที่จำเป็นต้องใช้ค่าลับหรือ Configuration เฉพาะสภาพแวดล้อม

## Contact

**FaemkunG**

- Facebook: <https://www.facebook.com/FaemkunG.19>
- Instagram: <https://www.instagram.com/fxemkxng_.19/>
- GitHub (Personal): <https://github.com/pattaradanais151>
- GitHub (Education): <https://github.com/afk-pattaradanai>
- LINE ID: `dvc.faem02`
- Email: <mailto:pattaradanais.sai@gmail.com>

## License

เนื้อหา รูปภาพ และผลงานส่วนบุคคลใน Repository นี้เป็นของเจ้าของ Portfolio เว้นแต่จะระบุไว้เป็นอย่างอื่น ส่วน Framework, Libraries, Fonts และ Assets จากบุคคลที่สามให้เป็นไปตาม License ของเจ้าของผลงานนั้น ๆ

หากต้องการนำ Source Code, รูปภาพ หรือเนื้อหาส่วนบุคคลไปใช้ต่อ ควรได้รับอนุญาตจากเจ้าของก่อน
