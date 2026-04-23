export type Screenshot = {
  src: string;
  alt: string;
  kind: "hero" | "supporting" | "technical";
};

export type Project = {
  slug: string;
  title: string;
  shortSummary: string;
  roleLabel: string;
  stack: string[];
  featured: boolean;
  homepageOrder: number;
  screenshots: Screenshot[];
  sections: {
    problem: string;
    build: string;
    decisions: string[];
    outcome: string[];
  };
  links?: {
    github?: string;
    external?: string;
    related?: string[];
  };
};

export type ExperienceItem = {
  company: string;
  displayName?: string;
  role: string;
  start: string;
  end: string;
  bullets: string[];
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export const siteConfig = {
  name: "Franck Alexis Dipanda",
  description:
    "Projects-first portfolio for Franck Alexis Dipanda, featuring AI-powered systems, workflow automation, backend products, and an AWS-ready static deployment path.",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://portfolio.example.com",
  email: "franckdipanda@hotmail.com",
  phone: "(301) 416-9500",
  location: "Atlanta Area",
  school: "Kennesaw State University",
  graduation: "May 2026",
  summary:
    "Full-stack and backend-leaning developer building AI-powered systems, automation workflows, and cloud-ready products.",
  about:
    "I like building software that turns messy real-world workflows into structured systems. Most of my work sits somewhere between backend logic, AI-assisted tooling, automation pipelines, and practical product delivery.",
  personalNote:
    "Outside of software, I co-founded and produced for 5PRCNT Collective. That work sharpened how I think about audience behavior, iteration, and building systems that people actually want to come back to.",
  social: {
    github: "https://github.com/fdipanda",
    githubLabel: "github.com/fdipanda",
    linkedin: "https://www.linkedin.com/in/franck-dipanda-591b97286/",
    linkedinLabel: "franck-dipanda-591b97286",
  },
  heroStats: [
    { value: "3", label: "Featured case studies across product, enterprise automation, and systems work." },
    { value: "1000+", label: "Operational records handled in quota-tracking and workflow automation systems." },
    { value: "2026", label: "Graduation target while building full-stack and AI-driven software in parallel." },
  ],
};

export const projects: Project[] = [
  {
    slug: "email-tracker",
    title: "AI Job Application Email Tracker",
    shortSummary:
      "Tracked 170+ applications through Outlook ingestion, stage classification, and a FastAPI-backed dashboard built to reduce drift in the hiring pipeline.",
    roleLabel: "Product + backend system",
    stack: ["Python", "FastAPI", "Next.js", "Microsoft Graph API", "SQLAlchemy", "SQLite"],
    featured: true,
    homepageOrder: 1,
    screenshots: [
      {
        src: "/images/projects/email-tracker/dashboard.png",
        alt: "Email tracker dashboard with connected Outlook status, pipeline counts, and stage filters.",
        kind: "hero",
      },
      {
        src: "/images/projects/email-tracker/board.png",
        alt: "Application board showing companies, roles, and workflow stage controls.",
        kind: "supporting",
      },
      {
        src: "/images/projects/email-tracker/api.png",
        alt: "FastAPI documentation for application, email, auth, and backlog processing endpoints.",
        kind: "technical",
      },
    ],
    sections: {
      problem:
        "Application tracking tends to fragment across inbox threads, spreadsheets, and manual updates. I wanted a system that could ingest real job-related email activity and turn it into a structured pipeline instead of a drifting list.",
      build:
        "I built a FastAPI-based backend that connects to Outlook through OAuth and Microsoft Graph, classifies emails by application stage, stores structured records, and feeds a dashboard designed for quick stage updates, manual entry, and backlog processing.",
      decisions: [
        "Kept the API surface explicit with dedicated sync, backlog, auth, and CRUD endpoints so ingestion and operator workflows stayed debuggable.",
        "Designed the UI around stage management first, because the real value is keeping the application board current with minimal friction.",
        "Combined automated email ingestion with manual entry so the tracker remained useful even when email parsing missed or delayed a signal.",
      ],
      outcome: [
        "Created a working product surface with connected-email status, stage counts, search, filters, and a board view for active applications.",
        "Handled noisy real-world inbox data by structuring email ingestion into a reviewable classification workflow rather than a black-box sync.",
        "Produced a system that feels like a personal operations tool rather than a simple CRUD tracker.",
      ],
    },
    links: {
      github: "https://github.com/fdipanda/ai-job-application-tracker",
    },
  },
  {
    slug: "enterprise-automation-systems",
    title: "Enterprise Workflow Automation Systems",
    shortSummary:
      "Designed sanitized enterprise case studies around quota tracking, notifications, GPS validation, and operational reporting using the Microsoft Power Platform.",
    roleLabel: "Enterprise automation",
    stack: ["Power Apps", "Power Automate", "Dataverse", "SharePoint", "Power BI"],
    featured: true,
    homepageOrder: 2,
    screenshots: [
      {
        src: "/images/projects/ebs/dashboard.jpg",
        alt: "Power BI dashboard showing facility progress bars, completion metrics, and filters.",
        kind: "hero",
      },
      {
        src: "/images/projects/ebs/flow.png",
        alt: "Power Automate workflow with branching logic, updates, and notification actions.",
        kind: "technical",
      },
    ],
    sections: {
      problem:
        "Operational reporting and quota tracking often break down when form activity, facility-level aggregation, and follow-up notifications depend on manual reconciliation. The goal was to make those flows consistent, auditable, and easier to monitor.",
      build:
        "At Evidence Based Solutions, I built and extended enterprise applications with Power Apps, Power Automate, Dataverse, SharePoint, and Power BI. The systems handled form submissions, facility and country rollups, completion thresholds, notifications, and data quality edge cases like missing or inconsistent GPS coordinates.",
      decisions: [
        "Used multi-stage automation rather than isolated flows so facility, country, and notification logic stayed synchronized as records changed.",
        "Added exception-handling paths for invalid or missing GPS data because operational software needs graceful failure modes, not just a happy path.",
        "Paired automation with dashboards so the systems were observable, not just automated.",
      ],
      outcome: [
        "Reduced manual tracking work by moving quota updates, threshold detection, and reporting into structured automation paths.",
        "Maintained consistent updates across 1000+ records while surfacing progress and remaining work through dashboards.",
        "Built a stronger systems mindset around state transitions, event-driven logic, and operational reliability.",
      ],
    },
  },
  {
    slug: "ai-job-aggregation-review-pipeline",
    title: "AI Job Aggregation and Review Pipeline",
    shortSummary:
      "Adapted and extended a local AI-assisted job operations pipeline that scans sources, surfaces reviewable roles, and organizes structured review artifacts for faster decision-making.",
    roleLabel: "Systems pipeline",
    stack: ["TypeScript", "Node.js", "Markdown", "TSV", "Pipeline orchestration"],
    featured: true,
    homepageOrder: 3,
    screenshots: [
      {
        src: "/images/projects/aggregation/artifact.png",
        alt: "Markdown review artifact showing selected sources, listings to review, and canonical review entries.",
        kind: "hero",
      },
      {
        src: "/images/projects/aggregation/run.png",
        alt: "Run output summarizing scanned sources, candidate listings, duplicates filtered, and review bundles produced.",
        kind: "technical",
      },
    ],
    sections: {
      problem:
        "Job discovery tools tend to be noisy, repetitive, and hard to audit. I wanted a system that could collect listings from multiple sources, reduce noise, and turn the output into structured review artifacts instead of a chaotic feed.",
      build:
        "This project combines my own build direction with an open-source foundation from the career-ops project. I adapted the system into a local job operations workflow that scans sources, filters roles, suppresses duplicates, and outputs markdown and tracker artifacts designed for human review.",
      decisions: [
        "Framed the project as a structured pipeline instead of an 'agent project' so the output stayed inspectable and grounded in deterministic review stages.",
        "Used file-based artifacts and review bundles as the interface because they make each run easy to inspect, diff, and revisit.",
        "Kept the trust model explicit by preferring valid listing URLs and reviewable output over opaque automation.",
      ],
      outcome: [
        "Turned multi-source scans into clean, review-oriented artifacts that are easier to act on than raw scraped listings.",
        "Created a stronger example of orchestration, classification, and operational tooling than a typical frontend-only project.",
        "Produced a case study that highlights systems thinking, adaptation of open-source software, and practical workflow design.",
      ],
    },
    links: {
      github: "https://github.com/fdipanda/ai-job-aggregation-tracking-platform",
      related: ["https://github.com/santifer/career-ops"],
    },
  },
];

export const additionalProjects = [
  {
    title: "AI-Powered Candidate Shortlisting System",
    summary:
      "Built an end-to-end pipeline for applicant scoring, ranking, and outreach automation using Python, SQLite, and AI-assisted evaluation.",
    stack: "Python, SQLite, AI agents, automation pipelines",
  },
  {
    title: "ScrappyBot RAG Chatbot",
    summary:
      "Implemented retrieval, chunking, embeddings, and local-LLM response generation for privacy-preserving search and question answering.",
    stack: "Python, Ollama, vector database",
  },
  {
    title: "Multi-Threaded Banking System",
    summary:
      "Simulated concurrent account access with thread-safe operations and synchronization, focusing on race conditions and shared state safety.",
    stack: "C#",
  },
  {
    title: "Traffic Sign Classification",
    summary:
      "Built preprocessing and CNN-based image classification workflows for the GTSRB dataset in a machine vision context.",
    stack: "MATLAB, CNNs",
  },
];

export const experiences: ExperienceItem[] = [
  {
    company: "Evidence Based Solutions",
    displayName: "Evidence Based Solutions (EBS)",
    role: "Software Developer Intern",
    start: "June 2024",
    end: "Present",
    bullets: [
      "Built enterprise applications with Power Apps, Power Automate, Dataverse, SharePoint, and Power BI.",
      "Designed automation pipelines for form tracking, facility quotas, country-level aggregation, and completion notifications.",
      "Handled GPS validation, API pagination, concurrency issues, and inconsistent real-world data in operational workflows.",
    ],
  },
  {
    company: "Kennesaw State University",
    role: "Student Assistant",
    start: "August 2023",
    end: "August 2025",
    bullets: [
      "Supported student-facing technical workflows and troubleshooting in a high-volume academic environment.",
      "Helped with testing and launch support during the university transition to mobile ID cards.",
      "Developed stronger habits around support, communication, and systems reliability under daily operational pressure.",
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages + Core Development",
    items: ["Python", "TypeScript", "C#", "SQL", "C++ (basic)", "Git / GitHub", "Linux"],
  },
  {
    title: "Backend + Full-Stack",
    items: [
      "FastAPI",
      "Next.js",
      "Prisma",
      "SQLAlchemy",
      "REST APIs",
      "SQLite / PostgreSQL",
      "Power Apps",
      "Dataverse",
      "SharePoint",
    ],
  },
  {
    title: "AI + Data Workflows",
    items: [
      "LLM integration",
      "RAG systems",
      "embeddings",
      "classification pipelines",
      "evaluation workflows",
      "Power Automate",
      "Power BI",
      "AWS fundamentals",
    ],
  },
  {
    title: "Relevant Coursework",
    items: [
      "Machine Learning",
      "Natural Language Processing",
      "Artificial Intelligence",
      "Parallel & Distributed Computing",
      "Algorithm Analysis",
      "Operating Systems",
    ],
  },
];

export const resumeHighlights = [
  "Built and deployed a static portfolio using Next.js, TypeScript, Tailwind CSS, and an S3 + CloudFront deployment path.",
  "Designed case studies that communicate AI tooling, workflow automation, backend systems, and cloud-readiness in a recruiter-friendly format.",
  "Prepared GitHub Actions automation for build, static export, S3 sync, and CloudFront invalidation.",
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export const featuredProjects = [...projects]
  .filter((project) => project.featured)
  .sort((a, b) => a.homepageOrder - b.homepageOrder);
