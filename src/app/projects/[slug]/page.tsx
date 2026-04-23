import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink, GitBranch } from "lucide-react";
import { notFound } from "next/navigation";
import { FadeIn } from "@/components/fade-in";
import { featuredProjects, getProjectBySlug } from "@/data/site";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return featuredProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: project.title,
    description: project.shortSummary,
  };
}

export const dynamicParams = false;

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="pb-20">
      <section className="section-shell pt-14 sm:pt-20">
        <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-medium text-[var(--muted)]">
          <ArrowLeft className="h-4 w-4" />
          Back to projects
        </Link>
        <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-start">
          <FadeIn className="space-y-6">
            <div className="space-y-4">
              <p className="eyebrow">{project.roleLabel}</p>
              <h1 className="max-w-3xl text-5xl font-semibold tracking-tight sm:text-6xl">{project.title}</h1>
              <p className="section-copy">{project.shortSummary}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span key={item} className="pill">
                  {item}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              {project.links?.github ? (
                <Link href={project.links.github} className="button-primary">
                  GitHub
                  <GitBranch className="h-4 w-4" />
                </Link>
              ) : null}
              {project.links?.external ? (
                <Link href={project.links.external} className="button-secondary">
                  External Link
                  <ExternalLink className="h-4 w-4" />
                </Link>
              ) : null}
              {project.links?.related?.map((item) => (
                <Link key={item} href={item} className="button-secondary">
                  Related Repository
                  <ArrowRight className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div className="overflow-hidden rounded-[30px] border border-[var(--line)] bg-white shadow-[var(--shadow)]">
              <Image
                src={project.screenshots[0].src}
                alt={project.screenshots[0].alt}
                width={1600}
                height={1100}
                className="aspect-[16/11] w-full object-cover object-top"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section-shell pt-16 sm:pt-20">
        <div className="grid gap-6 lg:grid-cols-2">
          <FadeIn>
            <article className="rounded-[28px] border border-[var(--line)] bg-white p-7 shadow-[var(--shadow)]">
              <p className="eyebrow">Problem</p>
              <p className="mt-4 text-base leading-8 text-[var(--muted)]">{project.sections.problem}</p>
            </article>
          </FadeIn>
          <FadeIn delay={0.05}>
            <article className="rounded-[28px] border border-[var(--line)] bg-white p-7 shadow-[var(--shadow)]">
              <p className="eyebrow">What I Built</p>
              <p className="mt-4 text-base leading-8 text-[var(--muted)]">{project.sections.build}</p>
            </article>
          </FadeIn>
        </div>
      </section>

      <section className="section-shell pt-16 sm:pt-20">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <FadeIn>
            <article className="rounded-[28px] border border-[var(--line)] bg-white p-7 shadow-[var(--shadow)]">
              <p className="eyebrow">Key Decisions</p>
              <ul className="mt-5 grid gap-4">
                {project.sections.decisions.map((decision) => (
                  <li key={decision} className="flex gap-3 text-sm leading-7 text-[var(--muted)]">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[var(--accent)]" />
                    <span>{decision}</span>
                  </li>
                ))}
              </ul>
            </article>
          </FadeIn>
          <FadeIn delay={0.05}>
            <article className="rounded-[28px] border border-[var(--line)] bg-white p-7 shadow-[var(--shadow)]">
              <p className="eyebrow">Outcome / Value</p>
              <ul className="mt-5 grid gap-4">
                {project.sections.outcome.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-7 text-[var(--muted)]">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[var(--teal)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </FadeIn>
        </div>
      </section>

      <section className="section-shell pt-16 sm:pt-20">
        <FadeIn>
          <div className="space-y-4">
            <p className="eyebrow">Screenshots / Artifacts</p>
            <h2 className="section-title">Visual proof tied to the actual system.</h2>
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {project.screenshots.map((shot) => (
              <figure
                key={shot.src}
                className="overflow-hidden rounded-[28px] border border-[var(--line)] bg-white shadow-[var(--shadow)]"
              >
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  width={1600}
                  height={1100}
                  className="aspect-[16/11] w-full object-cover object-top"
                  loading="lazy"
                />
                <figcaption className="border-t border-[var(--line)] px-5 py-4 text-sm leading-6 text-[var(--muted)]">
                  {shot.alt}
                </figcaption>
              </figure>
            ))}
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
