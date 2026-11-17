import Image from 'next/image';

export default function ProfileImage({ avatar, initials, name }) {
  return (
    <figure className="relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-none">
      <div aria-hidden="true" className="profile-halo absolute -inset-8 -z-10 rounded-[3rem]" />
      <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-line bg-surface-2 shadow-[var(--shadow-lg)]">
        {avatar.src ? (
          <Image
            src={avatar.src}
            alt={avatar.alt}
            fill
            sizes="(min-width: 1024px) 40vw, (min-width: 640px) 448px, 90vw"
            loading="eager"
            fetchPriority="high"
            className="object-cover"
          />
        ) : (
          <div
            role="img"
            aria-label={`พื้นที่รูปโปรไฟล์ของ ${name}`}
            className="profile-placeholder absolute inset-0 flex flex-col items-center justify-center"
          >
            <span className="flex h-28 w-28 items-center justify-center rounded-full border border-line bg-surface text-4xl font-semibold tracking-tight text-fg shadow-[var(--shadow-md)] sm:h-32 sm:w-32">
              {initials}
            </span>
            <span className="mt-6 text-sm font-medium tracking-wide text-muted">{name}</span>
          </div>
        )}
      </div>
      <figcaption className="mt-4 flex items-center justify-between gap-4 px-1 text-sm text-muted">
        <span className="font-medium text-fg">{name}</span>
        <span>Software Engineering Student</span>
      </figcaption>
    </figure>
  );
}