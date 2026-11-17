export const profile = {
  displayName: 'Pattaradanai',   // ชื่อที่แสดงใน Hero, Header, Footer
  initials: 'FK',                // ตัวอักษรในกล่องโลโก้ (ใช้เมื่อไม่มีรูปโลโก้)
  fullName: 'Pattaradanai Saiwongkham',  // ชื่อเต็ม (ใช้ใน SEO, JSON-LD, Open Graph)
  birthday: '19 December 2005',  // วันเกิด (ใช้ใน SEO, JSON-LD, Open Graph)
  location: 'Chiang Mai, Thailand',

  // ===== โลโก้ด้านบนซ้าย =====
  // null = ใช้ตัวอักษร initials
  // ใส่รูป: วางไฟล์ใน public/images/ แล้วใส่ path (ไม่ต้องมีคำว่า public)
  logo: {
    src: '/images/logo.png',       // เช่น '/images/logo.png'
    srcDark: '/images/logo.png',   // (ไม่บังคับ) รูปสำหรับ Dark Mode เช่น '/images/logo-dark.png'
  },

  badge: 'Software Engineering · RMUTL',
  greeting: "Hello, I'm",
  roles: ['Software Engineering Student', 'Web Development & Technology Enthusiast'],
  intro:
    'นักศึกษาสาขาวิศวกรรมซอฟต์แวร์ มหาวิทยาลัยเทคโนโลยีราชมงคลล้านนา ที่เริ่มต้นจากพื้นฐานสายเทคนิคคอมพิวเตอร์และคอมพิวเตอร์ฮาร์ดแวร์ และกำลังพัฒนาตัวเองด้านการพัฒนาเว็บไซต์และเทคโนโลยีสมัยใหม่',

  // ===== รูปโปรไฟล์ =====
  avatar: {
    src: '/images/photo.jpg',                     // เช่น '/images/profile.jpg'
    alt: 'รูปโปรไฟล์ของ Pattaradanai',
    position: 'center 25%',        // จุดโฟกัสของรูป (ซ้าย-ขวา บน-ล่าง)
    width: 800,
    height: 1000,
  },

  about: {
    // ... ส่วนนี้เหมือนเดิมทุกอย่าง ไม่ต้องแก้
  },

  about: {
    title: 'Curious about technology. Committed to growing.',
    lead: 'ผมเป็นนักศึกษาสาขาวิศวกรรมซอฟต์แวร์ ที่เริ่มต้นเส้นทางจากพื้นฐานด้านเทคนิคคอมพิวเตอร์และคอมพิวเตอร์ฮาร์ดแวร์',
    paragraphs: [
      'ก่อนเข้าสู่สาขาวิศวกรรมซอฟต์แวร์ ผมศึกษาในสายอาชีพด้านเทคนิคคอมพิวเตอร์ในระดับ ปวช. และคอมพิวเตอร์ฮาร์ดแวร์ในระดับ ปวส. ซึ่งเป็นพื้นฐานที่ช่วยให้มองเห็นภาพการทำงานของคอมพิวเตอร์ทั้งฝั่งฮาร์ดแวร์และซอฟต์แวร์',
      'ปัจจุบันผมสนใจการพัฒนาเว็บไซต์และเทคโนโลยีเว็บสมัยใหม่ ศึกษาและทดลองใช้ Framework และเครื่องมือหลากหลายประเภท เพื่อทำความเข้าใจแนวคิดเบื้องหลังและเลือกใช้ให้เหมาะสมกับงาน',
      'เป้าหมายของผมคือการพัฒนาทักษะด้าน Software Engineering อย่างต่อเนื่อง ทั้งการเขียนโค้ดที่อ่านง่ายและดูแลรักษาได้ การใส่ใจประสบการณ์ของผู้ใช้ และการเรียนรู้จากการลงมือทำจริง',
    ],
    facts: [
      { label: 'Currently', value: 'นักศึกษาสาขาวิศวกรรมซอฟต์แวร์' },
      { label: 'University', value: 'มทร.ล้านนา วิทยาเขตดอยสะเก็ด' },
      { label: 'Background', value: 'เทคนิคคอมพิวเตอร์ · คอมพิวเตอร์ฮาร์ดแวร์' },
      { label: 'Interests', value: 'Web Development · Modern Technology' },
    ],
    highlights: [
      {
        icon: 'graduation',
        title: 'Software Engineering',
        text: 'กำลังศึกษาสาขาวิศวกรรมซอฟต์แวร์ มหาวิทยาลัยเทคโนโลยีราชมงคลล้านนา',
      },
      {
        icon: 'cpu',
        title: 'Hardware Foundation',
        text: 'มีพื้นฐานด้านเทคนิคคอมพิวเตอร์และคอมพิวเตอร์ฮาร์ดแวร์จากสายอาชีวศึกษา',
      },
      {
        icon: 'code',
        title: 'Web Development',
        text: 'สนใจการพัฒนาเว็บไซต์ และทดลองใช้ Framework และเครื่องมือสมัยใหม่',
      },
      {
        icon: 'compass',
        title: 'Continuous Learning',
        text: 'มุ่งพัฒนาทักษะด้าน Software Engineering อย่างต่อเนื่อง',
      },
    ],
  },
};