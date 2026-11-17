import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/cn';

export default function ExternalLink({ href, children, className }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'group inline-flex items-center gap-1 rounded-sm text-sm font-medium text-accent underline-offset-4 hover:underline',
        className
      )}
    >
      {children}
      <ArrowUpRight
        size={15}
        aria-hidden="true"
        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      />
      <span className="sr-only"> (เปิดในแท็บใหม่)</span>
    </a>
  );
}