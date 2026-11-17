import { useCallback, useEffect, useRef, useState } from 'react';
import { copyText } from '@/lib/clipboard';

export function useCopyToClipboard(resetMs = 2000) {
  const [status, setStatus] = useState('idle'); // idle | copied | error
  const timerRef = useRef(null);

  useEffect(() => () => clearTimeout(timerRef.current), []);

  const copy = useCallback(
    async (text) => {
      const ok = await copyText(text);
      setStatus(ok ? 'copied' : 'error');
      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setStatus('idle'), resetMs);
      return ok;
    },
    [resetMs]
  );

  return { status, copy };
}