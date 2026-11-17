import { ArrowUpRight, Mail } from 'lucide-react';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Icon from '@/components/ui/Icon';
import CopyButton from '@/components/ui/CopyButton';
import { ButtonLink } from '@/components/ui/Button';

export default function ContactCard({ link }) {
  const missingEmail = link.type === 'email' && !link.value;

  return (
    <Card as="article" $interactive className="flex h-full flex-col p-6">
      <div className="flex items-start justify-between gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-bg-alt text-fg">
          <Icon name={link.icon} size={20} />
        </span>
        {link.badge && <Badge $tone="accent">{link.badge}</Badge>}
      </div>

      <h3 className="mt-5 text-lg font-semibold tracking-tight text-fg">{link.label}</h3>
      <p className="mt-1 break-all text-[15px] font-medium text-fg">
        {missingEmail ? 'ยังไม่ได้ตั้งค่าอีเมล' : link.displayValue}
      </p>
      <p className="mt-2 text-sm leading-6 text-muted">
        {missingEmail
          ? 'ใส่อีเมลจริงที่ PERSONAL_EMAIL ใน src/data/socialLinks.js (การ์ดนี้แสดงเฉพาะตอน Development)'
          : link.description}
      </p>

      <div className="mt-auto flex flex-wrap gap-2 pt-6">
        {link.type === 'link' && link.href && (
          <ButtonLink href={link.href} target="_blank" rel="noopener noreferrer" $variant="secondary" $size="sm">
            Open {link.platform}
            <ArrowUpRight size={16} aria-hidden="true" className="icon-shift" />
            <span className="sr-only"> {link.label} (เปิดในแท็บใหม่)</span>
          </ButtonLink>
        )}

        {link.type === 'copy' && <CopyButton value={link.value} label={link.copyLabel ?? 'Copy'} />}

        {link.type === 'email' && !missingEmail && (
          <>
            <ButtonLink href={link.href} $variant="primary" $size="sm">
              <Mail size={16} aria-hidden="true" />
              Send Email
            </ButtonLink>
            <CopyButton value={link.value} label={link.copyLabel ?? 'Copy Email'} />
          </>
        )}
      </div>
    </Card>
  );
}