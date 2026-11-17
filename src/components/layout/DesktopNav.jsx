'use client';

import styled from '@emotion/styled';

const List = styled.ul`
  display: none;
  align-items: center;
  gap: 2px;
  padding: 4px;
  border-radius: ${({ theme }) => theme.radii.full};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: color-mix(in srgb, var(--surface) 70%, transparent);

  ${({ theme }) => theme.breakpoints.lg} {
    display: flex;
  }
`;

const NavLink = styled.a`
  display: inline-flex;
  align-items: center;
  height: 34px;
  padding: 0 14px;
  border-radius: ${({ theme }) => theme.radii.full};
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  color: ${({ $active, theme }) => ($active ? theme.colors.fg : theme.colors.muted)};
  background: ${({ $active, theme }) => ($active ? theme.colors.surface2 : 'transparent')};
  box-shadow: ${({ $active }) => ($active ? 'inset 0 0 0 1px var(--border)' : 'none')};
  transition:
    color 200ms ease,
    background-color 250ms ease,
    box-shadow 250ms ease;

  &:hover {
    color: ${({ theme }) => theme.colors.fg};
  }
`;

export default function DesktopNav({ items, active }) {
  return (
    <nav aria-label="เมนูหลัก">
      <List>
        {items.map((item) => {
          const isActive = active === item.id;
          return (
            <li key={item.id}>
              <NavLink href={`/#${item.id}`} $active={isActive} aria-current={isActive ? 'true' : undefined}>
                {item.label}
              </NavLink>
            </li>
          );
        })}
      </List>
    </nav>
  );
}