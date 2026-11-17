'use client';

import styled from '@emotion/styled';
import { css } from '@emotion/react';

// Visual surface only. Pass Tailwind classes for padding/layout via className.
const Card = styled.div`
  position: relative;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme, $radius = 'lg' }) => theme.radii[$radius]};
  transition:
    transform ${({ theme }) => theme.durations.slow} ${({ theme }) => theme.easing.out},
    box-shadow ${({ theme }) => theme.durations.slow} ${({ theme }) => theme.easing.out},
    border-color ${({ theme }) => theme.durations.base} ease;

  ${({ $interactive, theme }) =>
    $interactive &&
    css`
      @media (hover: hover) {
        &:hover {
          transform: translateY(-4px);
          box-shadow: ${theme.shadows.md};
          border-color: ${theme.colors.borderStrong};
        }
      }
    `}
`;

export default Card;