'use client';

import { useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';

// Collects Emotion styles during server rendering and flushes them
// into the streamed HTML, so styles exist before hydration (no FOUC).
export default function EmotionRegistry({ children }) {
  const [registry] = useState(() => {
    const cache = createCache({ key: 'fk' });
    cache.compat = true;
    const prevInsert = cache.insert;
    let inserted = [];

    cache.insert = (...args) => {
      const serialized = args[1];
      if (cache.inserted[serialized.name] === undefined) {
        inserted.push(serialized.name);
      }
      return prevInsert(...args);
    };

    const flush = () => {
      const previous = inserted;
      inserted = [];
      return previous;
    };

    return { cache, flush };
  });

  useServerInsertedHTML(() => {
    const names = registry.flush();
    if (names.length === 0) return null;

    let styles = '';
    for (const name of names) {
      const style = registry.cache.inserted[name];
      if (typeof style === 'string') styles += style;
    }

    return (
      <style
        key={registry.cache.key}
        data-emotion={`${registry.cache.key} ${names.join(' ')}`}
        dangerouslySetInnerHTML={{ __html: styles }}
      />
    );
  });

  return <CacheProvider value={registry.cache}>{children}</CacheProvider>;
}