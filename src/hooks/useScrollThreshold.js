import { useSyncExternalStore } from 'react';

function subscribe(callback) {
  window.addEventListener('scroll', callback, { passive: true });
  window.addEventListener('resize', callback);
  return () => {
    window.removeEventListener('scroll', callback);
    window.removeEventListener('resize', callback);
  };
}

// true once the page is scrolled past `threshold` px.
// Server snapshot = false → identical first render on server & client.
export function useScrollThreshold(threshold) {
  return useSyncExternalStore(
    subscribe,
    () => window.scrollY > threshold,
    () => false
  );
}