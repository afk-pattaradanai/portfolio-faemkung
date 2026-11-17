import { profile } from '@/data/profile';
import Section from '@/components/layout/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';
import Icon from '@/components/ui/Icon';

export default function AboutSection() {
  const { about } = profile;

  return (
    <Section id="about" labelledBy="about-title" tone="alt">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading id="about-title" eyebrow="About Me · เกี่ยวกับผม" title={about.title} size="md" />
        </div>

        <div className="lg:col-span-7" data-reveal style={{ '--reveal-delay': '100ms' }}>
          <p className="text-pretty text-xl font-medium leading-relaxed text-fg sm:text-2xl">{about.lead}</p>
          <div className="mt-6 space-y-5 text-base leading-8 text-muted sm:text-lg">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-pretty">
                {paragraph}
              </p>
            ))}
          </div>

          <dl className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
            {about.facts.map((fact) => (
              <div key={fact.label} className="bg-surface p-5">
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-subtle">{fact.label}</dt>
                <dd className="mt-1.5 text-[15px] font-medium text-fg">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <ul className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {about.highlights.map((item, index) => (
          <li key={item.title} data-reveal style={{ '--reveal-delay': `${index * 80}ms` }}>
            <Card $interactive className="h-full p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
                <Icon name={item.icon} size={20} />
              </span>
              <h3 className="mt-5 text-lg font-semibold tracking-tight text-fg">{item.title}</h3>
              <p className="mt-2 text-[15px] leading-7 text-muted">{item.text}</p>
            </Card>
          </li>
        ))}
      </ul>
    </Section>
  );
}