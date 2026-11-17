'use client';

import styled from '@emotion/styled';
import { css } from '@emotion/react';

const tones = {
  neutral: (theme) => css`
    background: ${theme.colors.bgAlt};
    color: ${theme.colors.muted};
    border-color: ${theme.colors.border};
  `,
  accent: (theme) => css`
    background: ${theme.colors.accentSoft};
    color: ${theme.colors.accent};
    border-color: transparent;
  `,
};

const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  min-height: 26px;
  padding: 2px 10px;
  border: 1px solid;
  border-radius: ${({ theme }) => theme.radii.full};
  font-size: 12px;
  font-weight: 500;
  line-height: 1.4;
  letter-spacing: 0.01em;
  ${({ theme, $tone = 'neutral' }) => (tones[$tone] ?? tones.neutral)(theme)}
`;

export default Badge;