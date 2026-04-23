import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "Franck Alexis Dipanda",
    "software engineer portfolio",
    "AI portfolio",
    "Next.js portfolio",
    "AWS S3 CloudFront portfolio",
    "full-stack developer",
  ],
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.siteUrl,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-[var(--surface)] text-[var(--ink)]">
        <div className="relative min-h-screen overflow-x-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_top_left,rgba(86,172,255,0.18),transparent_38%),radial-gradient(circle_at_top_right,rgba(34,211,197,0.12),transparent_28%)]"
          />
          <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-[rgba(248,251,255,0.85)] backdrop-blur-xl">
            <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
              <Link href="/" className="text-sm font-semibold tracking-[0.08em] text-[var(--ink)]">
                Franck Dipanda
              </Link>
              <nav className="flex items-center gap-5 text-sm text-[var(--muted)]">
                <Link href="/">Home</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/resume">Resume</Link>
                <Link href="/contact">Contact</Link>
              </nav>
            </div>
          </header>
          <main>{children}</main>
          <footer className="border-t border-[var(--line)] bg-[var(--panel)]/80">
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between sm:px-8">
              <p>
                Built with Next.js, Tailwind CSS, Framer Motion, and a static-export deployment path for S3 + CloudFront.
              </p>
              <div className="flex items-center gap-4">
                <Link href={siteConfig.social.github}>GitHub</Link>
                <Link href={siteConfig.social.linkedin}>LinkedIn</Link>
                <Link href={`mailto:${siteConfig.email}`}>Email</Link>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
