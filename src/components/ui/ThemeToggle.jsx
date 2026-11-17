'use client';

import { Moon, Sun } from 'lucide-react';
import IconButton from './IconButton';
import { THEME_STORAGE_KEY } from '@/lib/theme';

// Stateless: the visible icon is chosen by CSS (dark: variant),
// so server and client markup are identical → no hydration mismatch.
export default function ThemeToggle({ className }) {
  const toggleTheme = () => {
    const root = document.documentElement;
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    root.style.colorScheme = next;
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      // storage unavailable (private mode) — theme still switches for this visit
    }
  };

  return (
    <IconButton
      type="button"
      onClick={toggleTheme}
      aria-label="สลับโหมดสว่าง / มืด (Toggle theme)"
      title="Toggle theme"
      className={className}
    >
      <Sun size={18} aria-hidden="true" className="dark:hidden" />
      <Moon size={18} aria-hidden="true" className="hidden dark:block" />
    </IconButton>
  );
}