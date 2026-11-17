import { cn } from '@/lib/cn';
import Container from './Container';

export default function Section({ id, labelledBy, tone = 'default', className, containerClassName, children }) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn('relative py-24 sm:py-32', tone === 'alt' ? 'bg-bg-alt' : 'bg-bg', className)}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}