import { ArrowUp } from 'lucide-react';
import { navigation } from '@/data/navigation';
import { site } from '@/data/site';
import { socialLinks } from '@/data/socialLinks';
import Container from './Container';
import Logo from './Logo';
import SocialIconButton from '@/components/ui/SocialIconButton';
import CurrentYear from '@/components/ui/CurrentYear';

export default function Footer() {
  const externalLinks = socialLinks.filter((link) => link.type === 'link' && link.href);

  return (
    <footer id="site-footer" className="border-t border-line bg-bg-alt">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo />
            <p className="mt-4 max-w-sm text-[15px] leading-7 text-muted">{site.shortDescription}</p>
            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Social media">
              {externalLinks.map((link) => (
                <li key={link.id}>
                  <SocialIconButton href={link.href} label={link.label} icon={link.icon} size="sm" />
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="ลิงก์ส่วนท้าย" className="lg:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-subtle">Navigate</p>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3">
              {navigation.map((item) => (
                <li key={item.id}>
                  <a href={`/#${item.id}`} className="text-[15px] text-muted transition-colors hover:text-fg">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-subtle">Status</p>
            <p className="mt-4 text-[15px] leading-7 text-muted">
              Software Engineering Student
              <br />
              มหาวิทยาลัยเทคโนโลยีราชมงคลล้านนา
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-line pt-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © <CurrentYear /> {site.name}. All rights reserved.
          </p>
          <a href="#main" className="group inline-flex items-center gap-2 self-start font-medium text-fg sm:self-auto">
            Back to top
            <ArrowUp
              size={15}
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </Container>
    </footer>
  );
}