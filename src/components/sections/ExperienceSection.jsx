import { education } from '@/data/education';
import { experience } from '@/data/experience';
import Section from '@/components/layout/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import ExperienceTimeline from '@/components/timeline/ExperienceTimeline';

export default function ExperienceSection() {
  const items = [...experience].sort((a, b) => a.order - b.order);
  const educationById = Object.fromEntries(education.map((item) => [item.id, item]));

  return (
    <Section id="experience" labelledBy="experience-title" tone="alt">
      <SectionHeading
        id="experience-title"
        eyebrow="Experience · ประสบการณ์"
        title="Experience Along the Way"
        description="ประสบการณ์การฝึกงานและการทำงานที่เกิดขึ้นระหว่างการศึกษาในระดับอาชีวศึกษา"
      />
      <div className="mt-14">
        <ExperienceTimeline items={items} educationById={educationById} />
      </div>
    </Section>
  );
}