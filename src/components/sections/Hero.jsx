import { ArrowDown } from 'lucide-react';
import { profile } from '@/data/profile';
import { socialLinks } from '@/data/socialLinks';
import Container from '@/components/layout/Container';
import HeroIntro from './hero/HeroIntro';
import HeroCTA from './hero/HeroCTA';
import SocialShortcuts from './hero/SocialShortcuts';
import ProfileImage from './hero/ProfileImage';

export default function Hero() {
  const shortcuts = socialLinks.filter((link) => link.showInHero && link.href);

  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="hero-surface relative isolate overflow-hidden pt-28 pb-20 sm:pt-36 lg:flex lg:min-h-[100svh] lg:items-center lg:pt-24"
    >
      <Container className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <HeroIntro profile={profile} />
          <HeroCTA className="mt-10" />
          <SocialShortcuts links={shortcuts} className="mt-10" />
        </div>
        <div className="lg:col-span-5">
          <ProfileImage avatar={profile.avatar} initials={profile.initials} name={profile.displayName} />
        </div>
      </Container>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[11px] font-medium uppercase tracking-[0.25em] text-subtle transition-colors hover:text-fg lg:flex"
      >
        Scroll
        <ArrowDown size={16} aria-hidden="true" className="motion-safe:animate-bounce" />
      </a>
    </section>
  );
}