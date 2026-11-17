// TODO: ใส่อีเมลจริง เช่น 'name@example.com'

import { Ga_Maamli } from "next/font/google";

// เว้นว่าง = การ์ดอีเมลแสดงเฉพาะตอน Development (เพื่อเตือน) และถูกซ่อนใน Production
const PERSONAL_EMAIL = '';

// type: 'link' (เปิดแท็บใหม่) | 'copy' (คัดลอกค่า) | 'email' (mailto + คัดลอก)
// icon: key ใน src/components/ui/Icon.jsx
export const socialLinks = [
  {
    id: 'facebook',
    platform: 'Facebook',
    label: 'Facebook',
    icon: 'facebook',
    type: 'link',
    value: 'FaemkunG.19',
    displayValue: 'facebook.com/FaemkunG.19',
    href: 'https://www.facebook.com/FaemkunG.19',
    description: 'โปรไฟล์ Facebook ส่วนตัว',
    showInHero: true,
  },
  {
    id: 'instagram',
    platform: 'Instagram',
    label: 'Instagram',
    icon: 'instagram',
    type: 'link',
    value: 'fxemkxng_.19',
    displayValue: '@fxemkxng_.19',
    href: 'https://www.instagram.com/fxemkxng_.19/',
    description: 'โปรไฟล์ Instagram ส่วนตัว',
    showInHero: true,
  },
  {
    id: 'github-personal',
    platform: 'GitHub',
    label: 'GitHub — Personal',
    badge: 'Personal',
    icon: 'github',
    type: 'link',
    value: 'pattaradanais151',
    displayValue: 'github.com/pattaradanais151',
    href: 'https://github.com/pattaradanais151',
    description: 'GitHub ส่วนตัว สำหรับโปรเจกต์และงานพัฒนาส่วนตัว',
    showInHero: true,
  },
  {
    id: 'github-education',
    platform: 'GitHub',
    label: 'GitHub — Education',
    badge: 'Education',
    icon: 'github',
    type: 'link',
    value: 'afk-pattaradanai',
    displayValue: 'github.com/afk-pattaradanai',
    href: 'https://github.com/afk-pattaradanai',
    description: 'GitHub สำหรับงานด้านการเรียนการศึกษา',
    showInHero: true,
  },
  {
    id: 'line',
    platform: 'LINE',
    label: 'LINE',
    icon: 'line',
    type: 'copy',
    value: 'dvc.faem02',
    displayValue: 'LINE ID: dvc.faem02',
    href: null,
    copyLabel: 'Copy LINE ID',
    description: 'คัดลอก LINE ID เพื่อเพิ่มเพื่อนในแอป LINE',
    showInHero: false,
  },
  {
    id: 'email',
    platform: 'Email',
    label: 'Email — Personal',
    icon: 'mail',
    type: 'email',
    value: 'pattaradanais.999@gmail.com',
    displayValue: 'pattaradanais.999@gmail.com',
    href: 'pattaradanais.999@gmail.com' ? `mailto:${'pattaradanais.999@gmail.com'}` : null,
    copyLabel: 'Copy Email',
    description: 'อีเมลส่วนตัวสำหรับการติดต่อ',
    showInHero: false,
  },
];