import { Briefcase, Clock, GraduationCap, MapPin } from 'lucide-react';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import ExternalLink from '@/components/ui/ExternalLink';
import { getDisplayUrl } from '@/lib/url';

export default function ExperienceTimeline({ items, educationById }) {
  return (
    <ol className="grid gap-10 md:grid-cols-2 md:gap-6 lg:gap-8">
      {items.map((item, index) => {
        const edu = educationById[item.relatedEducationId];

        return (
          <li
            key={item.id}
            id={`exp-${item.id}`}
            className="flex scroll-mt-24 flex-col"
            data-reveal
            style={{ '--reveal-delay': `${index * 100}ms` }}
          >
            <div className="mb-5 flex items-center gap-4" aria-hidden="true">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-fg">
                <Briefcase size={18} />
              </span>
              <span className="h-px flex-1 bg-linear-to-r from-[var(--border-strong)] to-transparent" />
              <span className="text-xs font-semibold tabular-nums text-subtle">{String(index + 1).padStart(2, '0')}</span>
            </div>

            <Card as="article" $interactive className="flex flex-1 flex-col p-6 sm:p-8">
              <div>
                <Badge $tone="accent">{item.typeLabel}</Badge>
              </div>
              <h3 className="mt-4 text-2xl font-semibold leading-snug tracking-tight text-fg">{item.organization}</h3>
              {item.organizationTh && <p className="mt-1 text-[15px] text-muted">{item.organizationTh}</p>}
              {item.role && <p className="mt-2 font-medium text-fg">{item.role}</p>}

              <p className="mt-4 text-pretty leading-7 text-muted">{item.description}</p>

              <ul className="mt-6 space-y-3 text-[15px]">
                <li className="flex items-start gap-3">
                  <Clock size={17} aria-hidden="true" className="mt-1 shrink-0 text-subtle" />
                  <span>
                    <span className="text-muted">ระยะเวลา: </span>
                    <span className="font-medium text-fg">{item.duration}</span>
                  </span>
                </li>
                {edu && (
                  <li className="flex items-start gap-3">
                    <GraduationCap size={17} aria-hidden="true" className="mt-1 shrink-0 text-subtle" />
                    <span>
                      <span className="font-medium text-fg">{item.relatedLabel}</span>
                      <span className="text-muted"> · </span>
                      <a href={`#edu-${edu.id}`} className="text-accent underline-offset-4 hover:underline">
                        {edu.institution}
                      </a>
                    </span>
                  </li>
                )}
                {item.location && (
                  <li className="flex items-start gap-3">
                    <MapPin size={17} aria-hidden="true" className="mt-1 shrink-0 text-subtle" />
                    <span className="text-fg">{item.location}</span>
                  </li>
                )}
              </ul>

              {item.website && (
                <div className="mt-auto pt-6">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-t border-line pt-5">
                    <ExternalLink href={item.website}>Visit website</ExternalLink>
                    <span className="text-sm text-subtle">{getDisplayUrl(item.website)}</span>
                  </div>
                </div>
              )}
            </Card>
          </li>
        );
      })}
    </ol>
  );
}