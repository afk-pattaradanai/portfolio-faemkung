import { Briefcase } from 'lucide-react';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Icon from '@/components/ui/Icon';
import ExternalLink from '@/components/ui/ExternalLink';
import { cn } from '@/lib/cn';
import { getDisplayUrl } from '@/lib/url';

function Detail({ label, value, sub }) {
  if (!value) return null;
  return (
    <div>
      <dt className="text-xs font-medium uppercase tracking-[0.12em] text-subtle">{label}</dt>
      <dd className="mt-1 font-medium text-fg">
        {value}
        {sub && <span className="block text-sm font-normal text-muted">{sub}</span>}
      </dd>
    </div>
  );
}

export default function EducationTimeline({ items, experiences }) {
  return (
    <ol className="relative space-y-6 before:absolute before:top-6 before:bottom-6 before:left-[1.375rem] before:w-px before:bg-line-strong sm:space-y-8 sm:before:left-[1.75rem]">
      {items.map((item, index) => {
        const related = experiences.filter((exp) => exp.relatedEducationId === item.id);
        const isCurrent = item.status === 'current';

        return (
          <li
            key={item.id}
            id={`edu-${item.id}`}
            className="relative grid scroll-mt-24 grid-cols-[2.75rem_1fr] gap-4 sm:grid-cols-[3.5rem_1fr] sm:gap-6"
            data-reveal
            style={{ '--reveal-delay': `${index * 80}ms` }}
          >
            <div className="flex justify-center pt-6">
              <span
                className={cn(
                  'relative z-10 flex h-11 w-11 items-center justify-center rounded-full border sm:h-14 sm:w-14',
                  isCurrent
                    ? 'node-current border-accent bg-accent text-[var(--accent-fg)]'
                    : 'border-line bg-surface text-fg'
                )}
              >
                <Icon name={item.icon} size={20} />
              </span>
            </div>

            <Card as="article" $interactive className="p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-2">
                <span className="mr-1 text-sm font-semibold tabular-nums text-subtle">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <Badge $tone={isCurrent ? 'accent' : 'neutral'}>
                  {isCurrent ? 'Currently Studying · กำลังศึกษา' : 'Completed · สำเร็จการศึกษา'}
                </Badge>
                {item.levelEn && <Badge>{item.levelEn}</Badge>}
              </div>

              <h3 className="mt-4 text-2xl font-semibold leading-snug tracking-tight text-fg">{item.institution}</h3>
              {item.institutionEn && <p className="mt-1 text-sm text-muted">{item.institutionEn}</p>}

              <dl className="mt-6 grid gap-x-8 gap-y-4 text-[15px] sm:grid-cols-2">
                <Detail label="ระดับการศึกษา" value={item.level} />
                <Detail label="สาขาวิชา" value={item.program} sub={item.programEn} />
                <Detail label="วิทยาเขต" value={item.campus} />
                <Detail label="ช่วงเวลา" value={item.period} />
              </dl>

              {related.length > 0 && (
                <div className="mt-6 rounded-2xl border border-line bg-bg-alt p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-subtle">
                    Experience during this period
                  </p>
                  <ul className="mt-2 space-y-1.5">
                    {related.map((exp) => (
                      <li key={exp.id}>
                        <a
                          href={`#exp-${exp.id}`}
                          className="inline-flex flex-wrap items-center gap-2 text-[15px] font-medium text-fg underline-offset-4 hover:underline"
                        >
                          <Briefcase size={15} aria-hidden="true" className="text-accent" />
                          {exp.organization}
                          <span className="font-normal text-muted">· {exp.relatedLabel}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {item.website && (
                <div className="mt-6 flex flex-wrap items-center justify-between gap-2 border-t border-line pt-5">
                  <ExternalLink href={item.website}>Visit website</ExternalLink>
                  <span className="text-sm text-subtle">{getDisplayUrl(item.website)}</span>
                </div>
              )}
            </Card>
          </li>
        );
      })}
    </ol>
  );
}