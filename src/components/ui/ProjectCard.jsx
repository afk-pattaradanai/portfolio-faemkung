'use client';

import Image from 'next/image';
import styled from '@emotion/styled';
import { ArrowUpRight } from 'lucide-react';
import Badge from './Badge';
import { ButtonLink } from './Button';
import { getDisplayUrl } from '@/lib/url';

const Article = styled.article`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.xl};
  transition:
    transform 500ms ${({ theme }) => theme.easing.out},
    box-shadow 500ms ${({ theme }) => theme.easing.out},
    border-color 250ms ease;

  @media (hover: hover) {
    &:hover {
      transform: translateY(-6px);
      box-shadow: ${({ theme }) => theme.shadows.lg};
      border-color: ${({ theme }) => theme.colors.borderStrong};
    }
    &:hover .preview-viewport {
      transform: scale(1.025);
    }
  }
`;

const Preview = styled.a`
  position: relative;
  display: block;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.surface2};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const Chrome = styled.div`
  position: absolute;
  inset: 0 0 auto 0;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 6px;
  height: 36px;
  padding: 0 14px;
  background: ${({ theme }) => theme.colors.surface};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const Dot = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.borderStrong};
`;

const UrlBar = styled.span`
  display: block;
  flex: 1;
  max-width: 70%;
  height: 22px;
  margin-left: 10px;
  padding: 0 10px;
  overflow: hidden;
  border-radius: 6px;
  background: ${({ theme }) => theme.colors.bgAlt};
  color: ${({ theme }) => theme.colors.muted};
  font-size: 12px;
  line-height: 22px;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Viewport = styled.div`
  position: absolute;
  inset: 36px 0 0 0;
  transition: transform 700ms ${({ theme }) => theme.easing.out};
`;

const Placeholder = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px 28px;
  background: radial-gradient(70% 80% at 85% 10%, var(--accent-soft), transparent 70%);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(var(--border) 1px, transparent 1px),
      linear-gradient(90deg, var(--border) 1px, transparent 1px);
    background-size: 32px 32px;
    mask-image: linear-gradient(180deg, #000 20%, transparent 95%);
    -webkit-mask-image: linear-gradient(180deg, #000 20%, transparent 95%);
    pointer-events: none;
  }
`;

export default function ProjectCard({ project }) {
  const displayUrl = getDisplayUrl(project.url);

  return (
    <Article>
      {/* Decorative duplicate link: hidden from AT and tab order; the button below is the accessible link */}
      <Preview href={project.url} target="_blank" rel="noopener noreferrer" tabIndex={-1} aria-hidden="true">
        <Chrome>
          <Dot />
          <Dot />
          <Dot />
          <UrlBar>{displayUrl}</UrlBar>
        </Chrome>
        <Viewport className="preview-viewport">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.imageAlt ?? ''}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover object-top"
            />
          ) : (
            <Placeholder>
              <span className="relative self-end text-sm font-medium tabular-nums text-subtle">{project.number}</span>
              <span className="relative text-[clamp(2.5rem,7vw,4.5rem)] font-semibold leading-none tracking-[-0.04em] text-fg">
                {project.title}
              </span>
            </Placeholder>
          )}
        </Viewport>
      </Preview>

      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <div className="flex items-center justify-between gap-4 text-sm text-muted">
          <span className="font-medium">Project {project.number}</span>
          <span className="truncate">{displayUrl}</span>
        </div>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-fg sm:text-3xl">{project.title}</h3>
        <p className="mt-3 text-pretty leading-7 text-muted">{project.description}</p>

        {project.tags.length > 0 && (
          <ul className="mt-5 flex flex-wrap gap-2" aria-label="เทคโนโลยีที่ใช้">
            {project.tags.map((tag) => (
              <li key={tag}>
                <Badge>{tag}</Badge>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto pt-8">
          <ButtonLink href={project.url} target="_blank" rel="noopener noreferrer" $variant="secondary" $size="sm">
            Visit Website
            <ArrowUpRight size={16} aria-hidden="true" className="icon-shift" />
            <span className="sr-only"> {project.title} (เปิดในแท็บใหม่)</span>
          </ButtonLink>
        </div>
      </div>
    </Article>
  );
}