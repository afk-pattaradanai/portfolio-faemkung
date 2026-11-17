import { cn } from '@/lib/cn';

export default function SectionHeading({ id, eyebrow, title, description, size = 'lg', align = 'left', className }) {
  return (
    <div data-reveal className={cn('max-w-3xl', align === 'center' && 'mx-auto text-center', className)}>
      {eyebrow && <p className="text-sm font-medium tracking-wide text-accent">{eyebrow}</p>}
      <h2
        id={id}
        className={cn(
          'mt-3 text-balance font-semibold leading-[1.08] tracking-tight text-fg',
          size === 'lg' ? 'text-4xl sm:text-5xl md:text-6xl' : 'text-4xl sm:text-5xl'
        )}
      >
        {title}
      </h2>
      {description && <p className="mt-5 text-pretty text-base leading-8 text-muted sm:text-lg">{description}</p>}
    </div>
  );
}