'use client';

import styled from '@emotion/styled';
import { Check, Copy } from 'lucide-react';
import { Button } from './Button';
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';

const CopyBtn = styled(Button)`
  &[data-state='copied'] {
    color: ${({ theme }) => theme.colors.success};
    border-color: ${({ theme }) => theme.colors.success};
  }
`;

export default function CopyButton({ value, label = 'Copy', copiedLabel = 'คัดลอกแล้ว', className }) {
  const { status, copy } = useCopyToClipboard();

  const text = status === 'copied' ? copiedLabel : status === 'error' ? 'คัดลอกไม่สำเร็จ' : label;

  return (
    <>
      <CopyBtn
        type="button"
        $variant="secondary"
        $size="sm"
        data-state={status}
        onClick={() => copy(value)}
        aria-label={`${label}: ${value}`}
        className={className}
      >
        {status === 'copied' ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
        <span>{text}</span>
      </CopyBtn>
      <span className="sr-only" role="status" aria-live="polite">
        {status === 'copied' ? `คัดลอก ${value} แล้ว` : status === 'error' ? 'คัดลอกไม่สำเร็จ' : ''}
      </span>
    </>
  );
}