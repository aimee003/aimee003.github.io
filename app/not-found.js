import Link from "next/link";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <section className="shell flex min-h-[60vh] flex-col justify-center py-24">
      <p className="eyebrow">404</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-lg text-[--muted]">
        That page doesn&rsquo;t exist — it may have moved or never been here.
      </p>
      <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-base">
        <Link href="/" className="link-accent">
          Home
        </Link>
        <Link href="/projects" className="link-accent">
          All projects
        </Link>
      </div>
    </section>
  );
}
