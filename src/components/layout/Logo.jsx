import Link from 'next/link';
import Image from 'next/image';
import { profile } from '@/data/profile';
import { cn } from '@/lib/cn';

const markClass =
  'h-8 w-8 shrink-0 rounded-[10px] object-cover transition-transform duration-300 group-hover:-rotate-6';

function LogoMark() {
  const { logo, initials } = profile;

  // 1) มีรูปโลโก้ → แสดงรูป (และสลับรูปตามธีม ถ้ามี srcDark)
  if (logo?.src) {
    if (logo.srcDark) {
      return (
        <>
          <Image src={logo.src} alt="" width={32} height={32} className={cn(markClass, 'dark:hidden')} />
          <Image src={logo.srcDark} alt="" width={32} height={32} className={cn(markClass, 'hidden dark:block')} />
        </>
      );
    }
    return <Image src={logo.src} alt="" width={32} height={32} className={markClass} />;
  }

  // 2) ไม่มีรูป → แสดงตัวอักษรย่อ (initials)
  return (
    <span
      aria-hidden="true"
      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] bg-fg text-[13px] font-bold tracking-tight text-bg transition-transform duration-300 group-hover:-rotate-6"
    >
      {initials}
    </span>
  );
}

export default function Logo({ id, className }) {
  return (
    <Link
      id={id}
      href="/#home"
      aria-label={`${profile.displayName} — กลับสู่หน้าแรก`}
      className={cn('group inline-flex min-w-0 items-center gap-2.5 rounded-lg', className)}
    >
      <LogoMark />
      <span className="max-w-[45vw] truncate text-[15px] font-semibold tracking-tight text-fg sm:max-w-none">
        {profile.displayName}
      </span>
    </Link>
  );
}