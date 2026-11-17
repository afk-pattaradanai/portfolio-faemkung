import { Briefcase } from 'lucide-react';
import { education } from '@/data/education';
import { experience } from '@/data/experience';
import Section from '@/components/layout/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import EducationTimeline from '@/components/timeline/EducationTimeline';

export default function EducationSection() {
  const items = [...education].sort((a, b) => a.order - b.order);

  return (
    <Section id="education" labelledBy="education-title">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              id="education-title"
              eyebrow="Education · การศึกษา"
              title="Learning Journey"
              description="เส้นทางการศึกษาจากโรงเรียนสู่มหาวิทยาลัย เรียงตามลำดับจริง พร้อมประสบการณ์ที่เกิดขึ้นระหว่างศึกษา"
              size="md"
            />
            <ul className="mt-8 space-y-3 text-sm text-muted" data-reveal aria-label="คำอธิบายสัญลักษณ์">
              <li className="flex items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-accent" aria-hidden="true" />
                กำลังศึกษา · Current
              </li>
              <li className="flex items-center gap-3">
                <span className="h-3 w-3 rounded-full border border-line-strong bg-surface" aria-hidden="true" />
                สำเร็จการศึกษา · Completed
              </li>
              <li className="flex items-center gap-3">
                <Briefcase size={14} aria-hidden="true" className="text-accent" />
                มีประสบการณ์ระหว่างศึกษา
              </li>
            </ul>
          </div>
        </div>
        <div className="lg:col-span-8">
          <EducationTimeline items={items} experiences={experience} />
        </div>
      </div>
    </Section>
  );
}