import { ArrowUpRight } from 'lucide-react';
import { projects } from '@/data/projects';
import { socialLinks } from '@/data/socialLinks';
import Section from '@/components/layout/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import ProjectGallery from '@/components/projects/ProjectGallery';
import { ButtonLink } from '@/components/ui/Button';

export default function ProjectsSection() {
  const github = socialLinks.find((link) => link.id === 'github-personal');

  return (
    <Section id="projects" labelledBy="projects-title">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <SectionHeading
          id="projects-title"
          eyebrow="Projects · ผลงาน"
          title="Selected Work"
          description="เว็บไซต์ที่ผมพัฒนาและเผยแพร่จริง สามารถเข้าชมแต่ละโปรเจกต์ได้จากลิงก์ภายในการ์ด"
        />
        {github?.href && (
          <div data-reveal className="shrink-0">
            <ButtonLink href={github.href} target="_blank" rel="noopener noreferrer" $variant="secondary" $size="sm">
              More on GitHub
              <ArrowUpRight size={16} aria-hidden="true" className="icon-shift" />
              <span className="sr-only"> (เปิดในแท็บใหม่)</span>
            </ButtonLink>
          </div>
        )}
      </div>

      <div className="mt-14">
        <ProjectGallery projects={projects} />
      </div>
    </Section>
  );
}