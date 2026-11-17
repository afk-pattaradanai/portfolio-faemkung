import { ImageResponse } from 'next/og';

export const alt = 'FaemkunG — Software Engineering Student';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          background: '#0a0a0b',
          backgroundImage: 'radial-gradient(circle at 78% 28%, rgba(115,147,255,0.28), transparent 45%)',
          color: '#f5f5f7',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 18,
              background: '#f5f5f7',
              color: '#0a0a0b',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            FK
          </div>
          <div style={{ display: 'flex', fontSize: 28, color: '#a1a1a8' }}>Personal Portfolio</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', fontSize: 150, fontWeight: 700, letterSpacing: '-0.05em', lineHeight: 1 }}>
            FaemkunG
          </div>
          <div style={{ display: 'flex', marginTop: 28, fontSize: 40, color: '#d4d4d8' }}>
            Software Engineering Student
          </div>
          <div style={{ display: 'flex', marginTop: 8, fontSize: 30, color: '#7393ff' }}>
            Web Development and Technology Enthusiast
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}