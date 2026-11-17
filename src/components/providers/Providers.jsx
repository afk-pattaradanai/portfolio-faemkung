'use client';

import { ThemeProvider } from '@emotion/react';
import EmotionRegistry from './EmotionRegistry';
import { theme } from '@/theme/tokens';

export default function Providers({ children }) {
  return (
    <EmotionRegistry>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </EmotionRegistry>
  );
}