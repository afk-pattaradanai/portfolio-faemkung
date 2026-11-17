'use client';

import styled from '@emotion/styled';
import { ArrowUp } from 'lucide-react';
import { useScrollThreshold } from '@/hooks/useScrollThreshold';

// visibility: hidden removes the button from tab order and the accessibility tree
const Btn = styled.button`
  position: fixed;
  right: max(20px, env(safe-area-inset-right));
  bottom: max(20px, env(safe-area-inset-bottom));
  z-index: 40;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: ${({ theme }) => theme.radii.full};
  border: 1px solid ${({ theme }) => theme.colors.borderStrong};
  background: ${({ theme }) => theme.colors.headerBg};
  backdrop-filter: saturate(180%) blur(16px);
  -webkit-backdrop-filter: saturate(180%) blur(16px);
  color: ${({ theme }) => theme.colors.fg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  cursor: pointer;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  visibility: ${({ $visible }) => ($visible ? 'visible' : 'hidden')};
  transform: translateY(${({ $visible }) => ($visible ? '0' : '12px')});
  transition:
    opacity 300ms ease,
    transform 400ms ${({ theme }) => theme.easing.out},
    visibility 0s linear ${({ $visible }) => ($visible ? '0s' : '300ms')},
    background-color 200ms ease;

  svg {
    transition: transform 300ms ${({ theme }) => theme.easing.out};
  }

  &:hover {
    background: ${({ theme }) => theme.colors.surface2};
  }

  &:hover svg {
    transform: translateY(-2px);
  }
`;

export default function BackToTop() {
  const visible = useScrollThreshold(640);

  const scrollToTop = () => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
    document.getElementById('site-logo')?.focus({ preventScroll: true });
  };

  return (
    <Btn type="button" onClick={scrollToTop} $visible={visible} aria-label="กลับขึ้นด้านบน (Back to top)">
      <ArrowUp size={18} aria-hidden="true" />
    </Btn>
  );
}