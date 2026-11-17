'use client';

import { useEffect, useRef } from 'react';
import styled from '@emotion/styled';

const Panel = styled.div`
  position: fixed;
  inset: 64px 0 0 0;
  z-index: 40;
  background: ${({ theme }) => theme.colors.bg};
  overflow-y: auto;
  overscroll-behavior: contain;
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  transform: translateY(${({ $open }) => ($open ? '0' : '-8px')});
  visibility: ${({ $open }) => ($open ? 'visible' : 'hidden')};
  transition:
    opacity 250ms ease,
    transform 400ms ${({ theme }) => theme.easing.out},
    visibility 0s linear ${({ $open }) => ($open ? '0s' : '400ms')};

  ${({ theme }) => theme.breakpoints.lg} {
    display: none;
  }
`;

const NavLink = styled.a`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 16px;
  padding: 18px 2px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  font-size: 28px;
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1.2;
  color: ${({ $active, theme }) => ($active ? theme.colors.fg : theme.colors.muted)};
  transition: color 200ms ease;

  &:hover {
    color: ${({ theme }) => theme.colors.fg};
  }
`;

export default function MobileNav({ id, open, items, active, onNavigate }) {
  const panelRef = useRef(null);

  // inert is set on the DOM node directly (not passed through Emotion props)
  useEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;
    panel.inert = !open;
    if (open) panel.querySelector('a')?.focus({ preventScroll: true });
  }, [open]);

  return (
    <Panel id={id} ref={panelRef} $open={open}>
      <nav aria-label="เมนูหลัก (มือถือ)" className="mx-auto w-full max-w-6xl px-5 pt-4 pb-12 sm:px-8">
        <ul>
          {items.map((item) => {
            const isActive = active === item.id;
            return (
              <li key={item.id}>
                <NavLink
                  href={`/#${item.id}`}
                  $active={isActive}
                  aria-current={isActive ? 'true' : undefined}
                  onClick={onNavigate}
                >
                  <span>{item.label}</span>
                  <span className="text-sm font-normal tracking-normal text-muted">{item.labelTh}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </Panel>
  );
}