'use client';

import { useEffect } from 'react';

export default function SecurityProtector() {
  useEffect(() => {
    // 1. ป้องกันคลิกขวา
    const handleContextMenu = (e) => {
      e.preventDefault();
    };

    // 2. ป้องกันกดคีย์ลัดเปิด DevTools / View Source
    const handleKeyDown = (e) => {
      if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i' || e.key === 'J' || e.key === 'j' || e.key === 'C' || e.key === 'c')) ||
        (e.ctrlKey && (e.key === 'U' || e.key === 'u'))
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return null;
}