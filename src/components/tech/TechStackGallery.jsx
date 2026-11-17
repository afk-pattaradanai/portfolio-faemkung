'use client';

import { useMemo, useState } from 'react';
import styled from '@emotion/styled';
import TechCard from '@/components/ui/TechCard';

const Chip = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  height: 38px;
  padding: 0 16px;
  border-radius: ${({ theme }) => theme.radii.full};
  border: 1px solid ${({ $active, theme }) => ($active ? theme.colors.fg : theme.colors.border)};
  background: ${({ $active, theme }) => ($active ? theme.colors.fg : theme.colors.surface)};
  color: ${({ $active, theme }) => ($active ? theme.colors.bg : theme.colors.muted)};
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  transition:
    background-color 200ms ease,
    color 200ms ease,
    border-color 200ms ease;

  &:hover {
    color: ${({ $active, theme }) => ($active ? theme.colors.bg : theme.colors.fg)};
    border-color: ${({ $active, theme }) => ($active ? theme.colors.fg : theme.colors.borderStrong)};
  }

  .chip-count {
    font-size: 12px;
    font-variant-numeric: tabular-nums;
    opacity: 0.65;
  }
`;

function matches(item, category) {
  if (!category) return true;
  return category.statusFilter ? item.status === category.statusFilter : item.category === category.id;
}

export default function TechStackGallery({ items, categories, statuses }) {
  const [filter, setFilter] = useState('all');

  const categoryById = useMemo(
    () => Object.fromEntries(categories.map((category) => [category.id, category])),
    [categories]
  );

  const filters = useMemo(
    () =>
      [
        { id: 'all', label: 'All', count: items.length },
        ...categories.map((category) => ({
          id: category.id,
          label: category.label,
          count: items.filter((item) => matches(item, category)).length,
        })),
      ].filter((entry) => entry.count > 0),
    [items, categories]
  );

  const visible = useMemo(
    () => (filter === 'all' ? items : items.filter((item) => matches(item, categoryById[filter]))),
    [filter, items, categoryById]
  );

  return (
    <div>
      <div
        role="group"
        aria-label="กรองเทคโนโลยีตามหมวดหมู่"
        className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0"
      >
        {filters.map((entry) => {
          const active = filter === entry.id;
          return (
            <Chip key={entry.id} type="button" $active={active} aria-pressed={active} onClick={() => setFilter(entry.id)}>
              {entry.label}
              <span className="chip-count">{entry.count}</span>
            </Chip>
          );
        })}
      </div>

      <p className="sr-only" role="status" aria-live="polite">
        แสดง {visible.length} รายการ
      </p>

      <ul key={filter} className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 xl:grid-cols-5">
        {visible.map((item, index) => (
          <li key={item.id} className="fade-in-up" style={{ animationDelay: `${Math.min(index, 12) * 30}ms` }}>
            <TechCard item={item} status={statuses[item.status]} categoryLabel={categoryById[item.category]?.label ?? ''} />
          </li>
        ))}
      </ul>
    </div>
  );
}