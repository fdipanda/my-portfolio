import type { Metadata } from "next";
import Link from "next/link";
import { Download, ExternalLink } from "lucide-react";
import { FadeIn } from "@/components/fade-in";
import { SectionHeading } from "@/components/section-heading";
import { experiences, resumeHighlights, siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Resume",
  description: "Resume summary and downloadable PDF for Franck Alexis Dipanda.",
};

const resumePdfHref = "/resume/franck-dipanda-resume.pdf";

export default function ResumePage() {
  return (
    <div className="pb-20">
      <section className="section-shell pt-16 sm:pt-24">
        <FadeIn className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="space-y-6">
            <p className="eyebrow">Resume</p>
            <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl">{siteConfig.name}</h1>
            <p className="section-copy">
              {siteConfig.summary} This page keeps the resume web-readable for recruiters while still offering a PDF download for quick forwarding or application systems.
            </p>
            <div className="flex flex-wrap gap-3">
              <a id="download" href={resumePdfHref} download className="button-primary">
                Download PDF
                <Download className="h-4 w-4" />
              </a>
              <Link href="/contact" className="button-secondary">
                Contact
                <ExternalLink className="h-4 w-4" />
              </Link>
            </div>
            <div className="rounded-[28px] border border-[var(--line)] bg-white p-6 shadow-[var(--shadow)]">
              <p className="eyebrow">Snapshot</p>
              <div className="mt-4 grid gap-4 text-sm leading-7 text-[var(--muted)]">
                <p>
                  <span className="font-semibold text-[var(--ink)]">Education:</span> Kennesaw State University, B.S. Computer Science (AI Concentration), graduating {siteConfig.graduation}.
                </p>
                <p>
                  <span className="font-semibold text-[var(--ink)]">Current focus:</span> backend systems, AI-assisted tooling, workflow automation, and cloud-ready static delivery.
                </p>
                <p>
                  <span className="font-semibold text-[var(--ink)]">Location:</span> {siteConfig.location}
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[30px] border border-[var(--line)] bg-white p-7 shadow-[var(--shadow)]">
            <p className="eyebrow">Resume Value</p>
            <ul className="resume-prose mt-5">
              {resumeHighlights.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[var(--accent)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </section>

      <section className="section-shell pt-16 sm:pt-20">
        <SectionHeading
          eyebrow="Professional Summary"
          title="Engineer-first positioning with student context in support."
          copy="The resume is intentionally aligned with software engineering, AI tooling, and cloud-adjacent roles. It emphasizes real system building over generic coursework language."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {experiences.map((item, index) => (
            <FadeIn key={item.company} delay={index * 0.05}>
              <article className="rounded-[26px] border border-[var(--line)] bg-white p-6 shadow-[var(--shadow)]">
                <div className="flex flex-col gap-2">
                  <p className="text-lg font-semibold">{item.role}</p>
                  <p className="text-sm text-[var(--muted)]">
                    {item.displayName ?? item.company} • {item.start} - {item.end}
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
    </div>
  );
}
