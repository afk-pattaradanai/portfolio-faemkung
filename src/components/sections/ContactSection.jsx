import { MessageCircle } from 'lucide-react';
import { socialLinks } from '@/data/socialLinks';
import Section from '@/components/layout/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import ContactCard from '@/components/contact/ContactCard';

export default function ContactSection() {
  const isDev = process.env.NODE_ENV !== 'production';
  // Email card without a value is shown only in development as a reminder.
  const links = socialLinks.filter((link) => link.type !== 'email' || link.value || isDev);

  return (
    <Section id="contact" labelledBy="contact-title">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              id="contact-title"
              eyebrow="Contact · ติดต่อ"
              title="Let's Connect"
              description="ยินดีพูดคุยเรื่องการเรียน เทคโนโลยี และการพัฒนาเว็บไซต์ ติดต่อได้ผ่านช่องทางด้านล่าง"
              size="md"
            />
            <div
              data-reveal
              className="mt-8 flex items-start gap-3 rounded-2xl border border-line bg-bg-alt p-5 text-[15px] leading-7 text-muted"
            >
              <MessageCircle size={18} aria-hidden="true" className="mt-1 shrink-0 text-accent" />
              <p>ลิงก์ Social Media จะเปิดในแท็บใหม่ ส่วน LINE ID และอีเมลสามารถกดคัดลอกได้ทันที</p>
            </div>
          </div>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
          {links.map((link, index) => (
            <li key={link.id} data-reveal style={{ '--reveal-delay': `${(index % 2) * 80}ms` }}>
              <ContactCard link={link} />
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}