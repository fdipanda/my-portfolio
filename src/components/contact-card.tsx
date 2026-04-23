import type { LucideIcon } from "lucide-react";

type ContactCardProps = {
  href?: string;
  icon: LucideIcon;
  title: string;
  detail: string;
  external?: boolean;
};

export function ContactCard({
  href,
  icon: Icon,
  title,
  detail,
  external = false,
}: ContactCardProps) {
  const content = (
    <>
      <Icon className="h-5 w-5 text-[var(--accent)]" />
      <p className="mt-5 text-xl font-semibold">{title}</p>
      <p className="mt-2 text-sm text-[var(--muted)]">{detail}</p>
    </>
  );

  const className =
    "surface-card flex h-full w-full flex-col p-7 transition-transform duration-200 hover:-translate-y-[2px]";

  if (!href) {
    return <div className={className}>{content}</div>;
  }

  return (
    <a
      href={href}
      className={className}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      {content}
    </a>
  );
}
