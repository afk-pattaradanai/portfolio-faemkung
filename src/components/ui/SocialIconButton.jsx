'use client';

import styled from '@emotion/styled';
import Icon from './Icon';

const Anchor = styled.a`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({ $size }) => ($size === 'sm' ? '40px' : '46px')};
  height: ${({ $size }) => ($size === 'sm' ? '40px' : '46px')};
  border-radius: ${({ theme }) => theme.radii.full};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.muted};
  transition:
    color 200ms ease,
    border-color 200ms ease,
    transform 300ms ${({ theme }) => theme.easing.out};

  &:hover {
    color: ${({ theme }) => theme.colors.fg};
    border-color: ${({ theme }) => theme.colors.borderStrong};
    transform: translateY(-2px);
  }

  &::after {
    content: attr(data-tooltip);
    position: absolute;
    bottom: calc(100% + 10px);
    left: 50%;
    transform: translate(-50%, 4px);
    padding: 6px 10px;
    border-radius: 8px;
    background: ${({ theme }) => theme.colors.fg};
    color: ${({ theme }) => theme.colors.bg};
    font-size: 12px;
    font-weight: 500;
    line-height: 1.2;
    white-space: nowrap;
    pointer-events: none;
    opacity: 0;
    transition:
      opacity 200ms ease,
      transform 200ms ease;
  }

  &:hover::after,
  &:focus-visible::after {
    opacity: 1;
    transform: translate(-50%, 0);
  }

  @media (hover: none) {
    &::after {
      display: none;
    }
  }
`;

export default function SocialIconButton({ href, label, icon, size = 'md', className }) {
  return (
    <Anchor
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} (เปิดในแท็บใหม่)`}
      data-tooltip={label}
      $size={size}
      className={className}
    >
      <Icon name={icon} size={size === 'sm' ? 17 : 19} />
    </Anchor>
  );
}