'use client';

import { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { Menu, X } from 'lucide-react';
import { navigation, sectionIds } from '@/data/navigation';
import { useActiveSection } from '@/hooks/useActiveSection';
import { useScrollThreshold } from '@/hooks/useScrollThreshold';
import Container from './Container';
import Logo from './Logo';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import ThemeToggle from '@/components/ui/ThemeToggle';
import IconButton from '@/components/ui/IconButton';

const Bar = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  border-bottom: 1px solid ${({ $solid, theme }) => ($solid ? theme.colors.border : 'transparent')};
  background: ${({ $solid, theme }) => ($solid ? theme.colors.headerBg : 'transparent')};
  backdrop-filter: ${({ $solid }) => ($solid ? 'saturate(180%) blur(20px)' : 'none')};
  -webkit-backdrop-filter: ${({ $solid }) => ($solid ? 'saturate(180%) blur(20px)' : 'none')};
  transition:
    background-color 300ms ease,
    border-color 300ms ease;
`;

const MenuButton = styled(IconButton)`
  ${({ theme }) => theme.breakpoints.lg} {
    display: none;
  }
`;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useScrollThreshold(8);
  const active = useActiveSection(sectionIds);
  const toggleRef = useRef(null);

  // Esc to close, auto-close at desktop width, background inert while open
  useEffect(() => {
    const main = document.getElementById('main');
    const footer = document.getElementById('site-footer');
    main?.toggleAttribute('inert', menuOpen);
    footer?.toggleAttribute('inert', menuOpen);

    if (!menuOpen) return undefined;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };
    const desktop = window.matchMedia('(min-width: 1024px)');
    const onChange = (event) => {
      if (event.matches) setMenuOpen(false);
    };

    window.addEventListener('keydown', onKeyDown);
    desktop.addEventListener('change', onChange);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      desktop.removeEventListener('change', onChange);
      main?.removeAttribute('inert');
      footer?.removeAttribute('inert');
    };
  }, [menuOpen]);

  const solid = scrolled || menuOpen;

  return (
    <>
      <Bar $solid={solid}>
        <Container className="flex h-16 items-center justify-between gap-4">
          <Logo id="site-logo" />
          <DesktopNav items={navigation} active={active} />
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <MenuButton
              ref={toggleRef}
              type="button"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? 'ปิดเมนู' : 'เปิดเมนู'}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
            </MenuButton>
          </div>
        </Container>
      </Bar>
      <MobileNav
        id="mobile-menu"
        open={menuOpen}
        items={navigation}
        active={active}
        onNavigate={() => setMenuOpen(false)}
      />
    </>
  );
}