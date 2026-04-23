import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Briefcase, Download, ExternalLink, GitBranch, GraduationCap, Layers3, Mail, MapPin, Sparkles } from "lucide-react";
import { ContactCard } from "@/components/contact-card";
import { FadeIn } from "@/components/fade-in";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { experiences, featuredProjects, siteConfig, skillGroups } from "@/data/site";

export default function Home() {
  return (
    <div className="pb-20">
      <section className="section-shell pt-16 sm:pt-24">
        <div className="mx-auto max-w-5xl">
          <FadeIn className="flex flex-col items-center space-y-8 text-center">
            <div className="flex justify-center">
              <div className="rounded-full border border-[var(--line)] bg-white/80 p-3 shadow-[var(--shadow)]">
                <Image
                  src="/images/profile.jpg"
                  alt="Portrait of Franck Alexis Dipanda"
                  width={220}
                  height={220}
                  className="h-[180px] w-[180px] rounded-full object-cover sm:h-[220px] sm:w-[220px]"
                  priority
                />
              </div>
            </div>
            <div className="space-y-5">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--accent)] sm:text-base">
                My Portfolio
              </p>
              <p className="mx-auto max-w-3xl text-lg leading-9 text-[var(--muted)] sm:text-xl sm:leading-[1.8]">
                I am Franck Alexis Dipanda, a Computer Science senior at Kennesaw State University graduating in May 2026. I am a self-motivated developer with a strong interest in full-stack engineering, AI-powered systems, workflow automation, and cloud technology.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-[var(--muted)]">
              <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(37,99,235,0.12)] bg-[rgba(37,99,235,0.06)] px-4 py-2 text-sm font-medium text-[var(--accent)] sm:text-base">
                <GraduationCap className="h-3.5 w-3.5" />
                B.S. Computer Science (AI), May 2026
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(37,99,235,0.12)] bg-[rgba(37,99,235,0.06)] px-4 py-2 text-sm font-medium text-[var(--accent)] sm:text-base">
                <MapPin className="h-3.5 w-3.5" />
                Atlanta Area
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(37,99,235,0.12)] bg-[rgba(37,99,235,0.06)] px-4 py-2 text-sm font-medium text-[var(--accent)] sm:text-base">
                <Briefcase className="h-3.5 w-3.5" />
                Open to full-time opportunities
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(37,99,235,0.12)] bg-[rgba(37,99,235,0.06)] px-4 py-2 text-sm font-medium text-[var(--accent)] sm:text-base">
                <Sparkles className="h-3.5 w-3.5" />
                GPA: 3.7
              </span>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Link className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-[var(--ink)] px-7 text-base font-medium !text-white transition-transform duration-200 hover:-translate-y-[1px]" href="#projects">
                View Projects
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-[var(--line)] bg-white/80 px-7 text-base font-medium transition-colors hover:bg-white" href="/resume">
                Resume
                <Download className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid w-full gap-4 sm:grid-cols-3">
              {siteConfig.heroStats.map((item) => (
                <div key={item.label} className="surface-card rounded-3xl bg-white/75 p-5">
                  <p className="text-3xl font-semibold">{item.value}</p>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{item.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section id="projects" className="section-shell pt-20 sm:pt-28">
        <SectionHeading
          eyebrow="Selected Work"
          title="Here are a few projects I have highlighted from my collection of builds so far."
          copy="These are the ones that I feel have had the most meaningful day-to-day impact, whether in a professional setting or through tools I built for myself."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} priority={index === 0} />
          ))}
        </div>
        <div className="mt-8 flex">
          <Link href="/projects" className="button-secondary">
            Explore All Project Details
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section id="experience" className="section-shell pt-20 sm:pt-28">
        <SectionHeading
          eyebrow="Experience Snapshot"
          title="Hands-on learner who applies a methodical approach to solving problems across different domains."
          copy=""
        />
        <div className="mt-10 grid gap-5">
          {experiences.map((item, index) => (
            <FadeIn key={item.company} delay={index * 0.06}>
              <article className="surface-card p-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-lg font-semibold">{item.role}</p>
                    <p className="mt-1 text-sm text-[var(--muted)]">
                      {item.displayName ?? item.company}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-[var(--muted)]">
                    {item.start} - {item.end}
                  </p>
                </div>
                <ul className="mt-5 grid gap-3 text-sm leading-7 text-[var(--muted)]">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-[var(--accent)]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      <section id="skills" className="section-shell pt-20 sm:pt-28">
        <SectionHeading
          eyebrow="Technical Focus"
          title="Backend, AI tooling, automation, and cloud-adjacent delivery."
          copy="Quick learner who is always exploring, learning, and implementing new technologies and frameworks."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <FadeIn key={group.title} delay={index * 0.05}>
              <article className="surface-card p-6">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-[var(--panel-strong)] p-3">
                    <Layers3 className="h-5 w-5 text-[var(--accent)]" />
                  </div>
                  <h3 className="text-lg font-semibold">{group.title}</h3>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span key={skill} className="pill">
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="section-shell pt-20 sm:pt-28">
        <FadeIn>
          <div className="grid gap-6 rounded-[32px] border border-[var(--line)] bg-[var(--ink)] px-6 py-8 text-white shadow-[var(--shadow)] sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-4">
              <p className="eyebrow !text-blue-200">Resume + Deployment</p>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                A portfolio that reflects both how I present my work and how I think about building and shipping software.
              </h2>
              <p className="max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                I wanted this site to be simple to navigate, easy to share, and backed by a real deployment process. Along with a web version of my resume, it also gives me a place to show that I can take a project from idea to implementation and prepare it for production-style delivery on AWS.
              </p>
            </div>
            <div className="grid gap-4 rounded-[28px] border border-white/10 bg-white/5 p-5 text-sm text-slate-300">
              <div>
                <p className="font-semibold text-white">What this includes</p>
                <p className="mt-2 leading-7">A dedicated resume page, downloadable PDF, and a deployment setup built around Next.js, GitHub Actions, S3, and CloudFront.</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/resume" className="button-primary !bg-white !text-[var(--ink)]">
                  Open Resume
                </Link>
                <Link href="/resume#download" className="button-secondary !border-white/15 !bg-transparent !text-white">
                  Download PDF
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      <section id="contact" className="section-shell pt-20 sm:pt-28">
        <SectionHeading
          eyebrow="Contact"
          title="Open to software engineering, AI tooling, and cloud-adjacent opportunities."
          copy="The fastest way to reach me is email. GitHub and LinkedIn are linked below, and the full resume is available as both a web page and downloadable PDF."
        />
        <FadeIn className="mt-10 grid gap-4 md:grid-cols-3">
          <ContactCard href={`mailto:${siteConfig.email}`} icon={Mail} title="Email" detail={siteConfig.email} />
          <ContactCard
            href={siteConfig.social.github}
            icon={GitBranch}
            title="GitHub"
            detail={siteConfig.social.githubLabel}
            external
          />
          <ContactCard
            href={siteConfig.social.linkedin}
            icon={ExternalLink}
            title="LinkedIn"
            detail={siteConfig.social.linkedinLabel}
            external
          />
        </FadeIn>
      </section>
    </div>
  );
}
