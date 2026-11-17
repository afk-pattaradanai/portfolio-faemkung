import { css } from '@emotion/react';

const variants = {
  primary: (theme) => css`
    background: ${theme.colors.accent};
    color: ${theme.colors.accentFg};
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
    &:hover {
      background: ${theme.colors.accentHover};
    }
    &:hover .icon-shift {
      transform: translateX(3px);
    }
  `,
  secondary: (theme) => css`
    background: ${theme.colors.surface};
    color: ${theme.colors.fg};
    border-color: ${theme.colors.borderStrong};
    &:hover {
      background: ${theme.colors.surface2};
    }
    &:hover .icon-shift {
      transform: translate(2px, -2px);
    }
  `,
};

export const buttonStyles = ({ theme, $variant = 'primary', $size = 'md' }) => css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: ${$size === 'sm' ? '40px' : '50px'};
  padding: 0 ${$size === 'sm' ? '16px' : '24px'};
  border: 1px solid transparent;
  border-radius: ${theme.radii.full};
  font-size: ${$size === 'sm' ? '14px' : '15px'};
  font-weight: 500;
  line-height: 1;
  white-space: nowrap;
  text-decoration: none;
  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  transition:
    background-color ${theme.durations.base} ease,
    color ${theme.durations.base} ease,
    border-color ${theme.durations.base} ease,
    transform ${theme.durations.base} ${theme.easing.out};

  & svg {
    flex-shrink: 0;
    transition: transform 300ms ${theme.easing.out};
  }

  &:active {
    transform: scale(0.97);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${(variants[$variant] ?? variants.primary)(theme)}
`;