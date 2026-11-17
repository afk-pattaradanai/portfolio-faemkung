'use client';

import { useSyncExternalStore } from 'react';

const subscribe = () => () => {};
const getYear = () => new Date().getFullYear();
const getServerYear = () => null;

// Visitor's current year — never hard-coded, never stale after build.
export default function CurrentYear() {
  const year = useSyncExternalStore(subscribe, getYear, getServerYear);
  return <span>{year ?? ''}</span>;
}