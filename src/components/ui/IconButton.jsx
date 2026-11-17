'use client';

import styled from '@emotion/styled';

const IconButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  border-radius: ${({ theme }) => theme.radii.full};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.fg};
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  transition:
    background-color 200ms ease,
    border-color 200ms ease,
    transform 200ms ease;

  &:hover {
    background: ${({ theme }) => theme.colors.surface2};
    border-color: ${({ theme }) => theme.colors.borderStrong};
  }

  &:active {
    transform: scale(0.94);
  }
`;

export default IconButton;