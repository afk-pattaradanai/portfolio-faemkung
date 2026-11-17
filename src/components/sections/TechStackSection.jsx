import { techCategories, techStack, techStatuses } from '@/data/techStack';
import Section from '@/components/layout/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import TechStackGallery from '@/components/tech/TechStackGallery';

export default function TechStackSection() {
  const legend = Object.values(techStatuses).map((status) => ({
    ...status,
    count: techStack.filter((item) => item.status === status.id).length,
  }));

  return (
    <Section id="tech-stack" labelledBy="tech-stack-title" tone="alt">
      <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-16">
        <div className="lg:col-span-7">
          <SectionHeading
            id="tech-stack-title"
            eyebrow="Tech Stack & Tools · เทคโนโลยี"
            title="Tools I Work and Learn With"
            description="เทคโนโลยีและเครื่องมือที่เคยใช้งาน กำลังศึกษา และสนใจศึกษาต่อ แสดงตามสถานะจริง โดยไม่ระบุเปอร์เซ็นต์ความเชี่ยวชาญ"
          />
        </div>

        <ul
          data-reveal
          aria-label="คำอธิบายสถานะ"
          className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line lg:col-span-5"
        >
          {legend.map((status) => (
            <li key={status.id} className="flex items-center gap-4 bg-surface px-5 py-4">
              <span
                aria-hidden="true"
                className="h-2.5 w-2.5 shrink-0 rounded-full"
                style={{ background: `var(--status-${status.id})` }}
              />
              <span className="min-w-0 flex-1">
                <span className="block text-[15px] font-semibold text-fg">{status.label}</span>
                <span className="block text-sm leading-6 text-muted">{status.labelTh}</span>
              </span>
              <span className="text-sm font-semibold tabular-nums text-subtle">
                {status.count}
                <span className="sr-only"> รายการ</span>
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-14" data-reveal>
        <TechStackGallery items={techStack} categories={techCategories} statuses={techStatuses} />
      </div>
    </Section>
  );
}