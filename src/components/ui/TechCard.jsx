'use client';

import Image from 'next/image';
import styled from '@emotion/styled';

const Tile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 100%;
  padding: 18px;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  transition:
    transform 400ms ${({ theme }) => theme.easing.out},
    box-shadow 400ms ${({ theme }) => theme.easing.out},
    border-color 250ms ease;

  @media (hover: hover) {
    &:hover {
      transform: translateY(-3px);
      box-shadow: ${({ theme }) => theme.shadows.sm};
      border-color: ${({ theme }) => theme.colors.borderStrong};
    }
  }
`;

const Mark = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.bgAlt};
  color: ${({ theme }) => theme.colors.fg};
  font-size: ${({ $len }) => ($len > 3 ? '11px' : $len > 2 ? '13px' : '15px')};
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1;
`;

const Status = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  font-weight: 500;
  line-height: 1;
  color: ${({ theme }) => theme.colors.muted};

  &::before {
    content: '';
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: ${({ $status }) => `var(--status-${$status})`};
  }
`;

export default function TechCard({ item, status, categoryLabel }) {
  return (
    <Tile>
      <div className="flex items-start justify-between gap-3">
        <Mark $len={item.mark.length} aria-hidden="true">
          {item.logo ? <Image src={item.logo} alt="" width={24} height={24} className="tech-logo" /> : item.mark}
        </Mark>
        <Status $status={item.status} title={status.labelTh}>
          <span className="sr-only">สถานะ: </span>
          {status.short}
        </Status>
      </div>
      <div>
        <h3 className="text-[15px] font-semibold leading-snug tracking-tight text-fg">{item.name}</h3>
        <p className="mt-1 text-[13px] leading-snug text-muted">{categoryLabel}</p>
      </div>
    </Tile>
  );
}