import { ArrowLeft, Mail } from 'lucide-react';
import Container from '@/components/layout/Container';
import { ButtonLink } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <section
      aria-labelledby="not-found-title"
      className="hero-surface relative isolate flex min-h-[85svh] items-center overflow-hidden pt-24 pb-16"
    >
      <Container className="text-center">
        <p className="text-sm font-medium tracking-wide text-accent">Error 404 · Page not found</p>
        <h1
          id="not-found-title"
          className="text-gradient mx-auto mt-4 pb-2 text-[clamp(5rem,22vw,12rem)] font-semibold leading-none tracking-[-0.06em]"
        >
          404
        </h1>
        <p className="mt-6 text-2xl font-semibold tracking-tight text-fg sm:text-3xl">ไม่พบหน้าที่คุณกำลังค้นหา</p>
        <p className="mx-auto mt-3 max-w-md text-base leading-7 text-muted">
          หน้านี้อาจถูกย้าย เปลี่ยนชื่อ หรือไม่มีอยู่จริง ลองกลับไปที่หน้าแรกเพื่อดูข้อมูลทั้งหมด
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <ButtonLink href="/" $variant="primary">
            <ArrowLeft size={18} aria-hidden="true" />
            กลับหน้าแรก
          </ButtonLink>
          <ButtonLink href="/#contact" $variant="secondary">
            <Mail size={18} aria-hidden="true" />
            Contact
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}