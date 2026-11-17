/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from 'next/og';
import { promises as fs } from 'fs';
import path from 'path';

export const size = { width: 512, height: 512 };
export const contentType = 'image/png';
export const dynamic = 'force-static';

// ปรับสีพื้นหลังได้ตามต้องการ (ถ้าโลโก้เป็นสีเข้ม ให้เปลี่ยนเป็น '#ffffff')
const BG_COLOR = '#0b0b14';
const PADDING = 40;

export default async function Icon() {
  try {
    const filePath = path.join(process.cwd(), 'public', 'images', 'logo.png');
    const imageBuffer = await fs.readFile(filePath);
    const base64Image = imageBuffer.toString('base64');
    const dataUri = `data:image/png;base64,${base64Image}`;
    const inner = size.width - PADDING * 2;

    return new ImageResponse(
      (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: BG_COLOR,
            borderRadius: 112,
          }}
        >
          <img
            src={dataUri}
            alt=""
            width={inner}
            height={inner}
            style={{ objectFit: 'contain' }}
          />
        </div>
      ),
      { ...size }
    );
  } catch (error) {
    console.error('[icon] ไม่สามารถอ่าน public/images/logo.png ได้:', error);

    // Fallback ถ้ายังไม่ได้วางไฟล์ logo.png
    return new ImageResponse(
      (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#1d1d1f',
            color: '#ffffff',
            borderRadius: 112,
            fontSize: 230,
            fontWeight: 700,
            letterSpacing: '-0.06em',
          }}
        >
          FK
        </div>
      ),
      { ...size }
    );
  }
}