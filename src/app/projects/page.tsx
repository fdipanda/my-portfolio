import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { FadeIn } from "@/components/fade-in";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { additionalProjects, featuredProjects } from "@/data/site";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected software, AI, automation, and systems case studies by Franck Alexis Dipanda.",
};

export default function ProjectsPage() {
  return (
    <div className="pb-20">
      <section className="section-shell pt-16 sm:pt-24">
        <FadeIn className="max-w-4xl space-y-5">
          <p className="eyebrow">Project Index</p>
          <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl">
            A closer look at some of the projects that have shaped how I think about building software.
          </h1>
          <p className="section-copy">
            Each project here reflects a different side of how I like to work. Some are more product-focused, some come from real operational problems, and others are more systems-oriented, but all of them taught me something valuable about building software that is actually useful.
          </p>
        </FadeIn>
      </section>

      <section className="section-shell pt-14 sm:pt-18">
        <div className="grid gap-6 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} priority={index === 0} />
          ))}
        </div>
      </section>

      <section className="section-shell pt-20 sm:pt-28">
        <SectionHeading
          eyebrow="More Builds"
          title="Additional work that rounds out the portfolio."
          copy="These are not expanded into full case studies yet, but they help show range across AI systems, data workflows, and concurrency-focused coursework."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {additionalProjects.map((project, index) => (
            <FadeIn key={project.title} delay={index * 0.05}>
              <article className="rounded-[24px] border border-[var(--line)] bg-white p-6 shadow-[var(--shadow)]">
                <p className="text-lg font-semibold">{project.title}</p>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{project.summary}</p>
                <p className="mt-4 text-xs font-medium uppercase tracking-[0.18em] text-[var(--muted)]">{project.stack}</p>
              </article>
            </FadeIn>
          ))}
        </div>
        <div className="mt-10">
          <Link href="/contact" className="button-secondary">
            Reach Out
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
