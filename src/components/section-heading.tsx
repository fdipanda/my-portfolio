type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  copy: string;
};

export function SectionHeading({ eyebrow, title, copy }: SectionHeadingProps) {
  return (
    <div className="space-y-4">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--accent)] sm:text-base">
        {eyebrow}
      </p>
      <h2 className="section-title text-balance">{title}</h2>
      {copy ? <p className="section-copy text-pretty">{copy}</p> : null}
    </div>
  );
}
