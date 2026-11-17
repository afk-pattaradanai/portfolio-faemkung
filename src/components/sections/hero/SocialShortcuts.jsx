import SocialIconButton from '@/components/ui/SocialIconButton';
import { cn } from '@/lib/cn';

export default function SocialShortcuts({ links, className }) {
  if (links.length === 0) return null;

  return (
    <div className={cn('hero-fade flex items-center gap-4', className)} style={{ '--d': '360ms' }}>
      <span className="text-sm font-medium text-subtle">Find me on</span>
      <span className="h-px w-8 bg-line-strong" aria-hidden="true" />
      <ul className="flex flex-wrap gap-2" aria-label="Social media">
        {links.map((link) => (
          <li key={link.id}>
            <SocialIconButton href={link.href} label={link.label} icon={link.icon} />
          </li>
        ))}
      </ul>
    </div>
  );
}