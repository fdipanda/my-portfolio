import Link from "next/link";

export default function NotFound() {
  return (
    <div className="section-shell flex min-h-[70vh] flex-col items-start justify-center gap-6 py-20">
      <p className="eyebrow">404</p>
      <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl">That page is not here.</h1>
      <p className="section-copy">
        The portfolio is statically exported, so every route needs to be intentional. This one does not exist yet.
      </p>
      <Link href="/" className="button-primary">
        Return Home
      </Link>
    </div>
  );
}
