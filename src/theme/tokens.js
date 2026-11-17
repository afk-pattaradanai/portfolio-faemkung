// Emotion theme — every color points to a CSS variable, so switching
// light/dark never re-renders React and never causes hydration mismatch.
export const theme = {
  colors: {
    bg: 'var(--bg)',
    bgAlt: 'var(--bg-alt)',
    surface: 'var(--surface)',
    surface2: 'var(--surface-2)',
    fg: 'var(--fg)',
    muted: 'var(--fg-muted)',
    subtle: 'var(--fg-subtle)',
    border: 'var(--border)',
    borderStrong: 'var(--border-strong)',
    accent: 'var(--accent)',
    accentHover: 'var(--accent-hover)',
    accentFg: 'var(--accent-fg)',
    accentSoft: 'var(--accent-soft)',
    headerBg: 'var(--header-bg)',
    success: 'var(--status-used)',
  },
  radii: {
    sm: '10px',
    md: '14px',
    lg: '22px',
    xl: '28px',
    full: '9999px',
  },
  shadows: {
    sm: 'var(--shadow-sm)',
    md: 'var(--shadow-md)',
    lg: 'var(--shadow-lg)',
  },
  easing: {
    out: 'cubic-bezier(0.22, 1, 0.36, 1)',
    standard: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
  durations: {
    fast: '150ms',
    base: '250ms',
    slow: '450ms',
  },
  breakpoints: {
    sm: '@media (min-width: 640px)',
    md: '@media (min-width: 768px)',
    lg: '@media (min-width: 1024px)',
  },
};