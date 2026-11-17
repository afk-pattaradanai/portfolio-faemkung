import { ArrowRight, Mail } from 'lucide-react';
import { ButtonLink } from '@/components/ui/Button';
import { cn } from '@/lib/cn';

export default function HeroCTA({ className }) {
  return (
    <div className={cn('hero-fade flex flex-wrap items-center gap-3', className)} style={{ '--d': '280ms' }}>
      <ButtonLink href="#projects" $variant="primary">
        Explore My Work
        <ArrowRight size={18} aria-hidden="true" className="icon-shift" />
      </ButtonLink>
      <ButtonLink href="#contact" $variant="secondary">
        <Mail size={18} aria-hidden="true" />
        Contact Me
      </ButtonLink>
    </div>
  );
}