"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import type { Project } from "@/data/site";

export function ProjectCard({
  project,
  priority = false,
}: {
  project: Project;
  priority?: boolean;
}) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      className="overflow-hidden rounded-[28px] border border-[var(--line)] bg-white shadow-[var(--shadow)]"
    >
      <Image
        src={project.screenshots[0].src}
        alt={project.screenshots[0].alt}
        width={1600}
        height={1100}
        className="aspect-[16/11] w-full object-cover object-top"
        loading={priority ? "eager" : "lazy"}
      />
      <div className="space-y-4 p-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="pill">{project.roleLabel}</span>
          {project.stack.slice(0, 2).map((item) => (
            <span key={item} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
              {item}
            </span>
          ))}
        </div>
        <div>
          <h3 className="text-2xl font-semibold tracking-tight">{project.title}</h3>
          <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{project.shortSummary}</p>
        </div>
        <Link href={`/projects/${project.slug}`} className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)]">
          View Case Study
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </motion.article>
  );
}
