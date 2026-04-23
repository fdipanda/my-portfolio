import type { Metadata } from "next";
import { ExternalLink, GitBranch, Mail, MapPin } from "lucide-react";
import { ContactCard } from "@/components/contact-card";
import { FadeIn } from "@/components/fade-in";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact information for Franck Alexis Dipanda.",
};

export default function ContactPage() {
  return (
    <div className="section-shell pb-20 pt-16 sm:pt-24">
      <FadeIn className="max-w-4xl space-y-5">
        <p className="eyebrow">Contact</p>
        <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl">
          Open to software engineering, AI tooling, and cloud-adjacent opportunities.
        </h1>
        <p className="section-copy">
          Email is the fastest channel. GitHub and LinkedIn are linked below, and the resume page includes a downloadable PDF if you need the short version quickly.
        </p>
      </FadeIn>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        <FadeIn>
          <ContactCard href={`mailto:${siteConfig.email}`} icon={Mail} title="Email" detail={siteConfig.email} />
        </FadeIn>
        <FadeIn delay={0.05}>
          <ContactCard icon={MapPin} title="Location" detail={siteConfig.location} />
        </FadeIn>
        <FadeIn delay={0.1}>
          <ContactCard
            href={siteConfig.social.github}
            icon={GitBranch}
            title="GitHub"
            detail={siteConfig.social.githubLabel}
            external
          />
        </FadeIn>
        <FadeIn delay={0.15}>
          <ContactCard
            href={siteConfig.social.linkedin}
            icon={ExternalLink}
            title="LinkedIn"
            detail={siteConfig.social.linkedinLabel}
            external
          />
        </FadeIn>
      </div>
    </div>
  );
}
