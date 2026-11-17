export default function HeroIntro({ profile }) {
  const [primaryRole, secondaryRole] = profile.roles;

  return (
    // @container: ให้ขนาดชื่ออ้างอิงจากความกว้างของคอลัมน์นี้ ไม่ใช่ความกว้างหน้าจอ
    <div className="@container">
      <p
        className="hero-fade inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/70 px-3.5 py-1.5 text-[13px] font-medium text-muted backdrop-blur"
        style={{ '--d': '0ms' }}
      >
        <span className="relative flex h-2 w-2" aria-hidden="true">
          <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-60 motion-safe:animate-ping" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
        </span>
        {profile.badge}
      </p>

      <p className="mt-8 text-lg font-medium text-muted sm:text-2xl">{profile.greeting}</p>

      {/* LCP candidate — intentionally not animated */}
      {/* 15cqi = 15% ของความกว้างคอลัมน์ ถ้าชื่อยาวกว่านี้ให้ลดเป็น 13cqi หรือ 12cqi */}
      <h1
        id="hero-title"
        className="text-gradient mt-1 pb-2 text-[clamp(2.5rem,15cqi,8rem)] font-semibold leading-[0.95] tracking-[-0.045em]"
      >
        {profile.displayName}
      </h1>

      <div className="hero-fade mt-6 space-y-1" style={{ '--d': '120ms' }}>
        <p className="text-xl font-semibold tracking-tight text-fg sm:text-3xl">{primaryRole}</p>
        <p className="text-base text-muted sm:text-xl">{secondaryRole}</p>
      </div>

      <p className="hero-fade mt-6 max-w-xl text-pretty text-base leading-8 text-muted sm:text-lg" style={{ '--d': '200ms' }}>
        {profile.intro}
      </p>
    </div>
  );
}