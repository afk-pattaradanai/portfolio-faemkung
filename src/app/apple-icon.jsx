/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from 'next/og';
import { promises as fs } from 'fs';
import path from 'path';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';
export const dynamic = 'force-static';

// Apple ไม่รองรับพื้นหลังโปร่งใส (จะกลายเป็นสีดำ) จึงใช้สีทึบ
// และไม่ใส่ borderRadius เพราะ iOS จะมนมุมให้เอง
const BG_COLOR = '#0b0b14';
const PADDING = 16;

export default async function AppleIcon() {
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
    console.error('[apple-icon] ไม่สามารถอ่าน public/images/logo.png ได้:', error);

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
            fontSize: 84,
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