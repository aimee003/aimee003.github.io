import Link from "next/link";
import ParallaxHero from "@/components/ParallaxHero";
import { ProjectGrid } from "@/components/ProjectCard";
import { categories, featured, site } from "@/lib/projects";

export default function Home() {
  return (
    <>
      <ParallaxHero hero={site.hero} name={site.name} role={site.role} />

      <section className="shell pt-14 pb-12 md:pt-20">
        <p className="max-w-2xl text-pretty text-xl leading-relaxed sm:text-2xl">
          {site.blurb}
        </p>

        {site.summary && (
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-[--muted]">
            {site.summary}
          </p>
        )}

        <nav className="mt-10 flex flex-wrap gap-x-3 gap-y-2">
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={`/projects/category/${c.slug}`}
              className="rounded-full border border-[--hairline] px-4 py-2 text-base transition-colors hover:border-[--accent] hover:text-[--accent]"
            >
              {c.name}
            </Link>
          ))}
        </nav>
      </section>

      <section className="shell">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-t border-[--hairline] pt-8">
          <h2 className="eyebrow">Projects</h2>
          <Link
            href="/projects"
            className="rounded-full border border-[--accent] px-5 py-3 text-base font-medium text-[--accent] transition-colors hover:bg-[--accent] hover:text-white"
          >
            View All Projects
          </Link>
        </div>

        <ProjectGrid projects={featured} />

        <div className="mt-16 border-t border-[--hairline] pt-8">
          <Link href="/projects" className="link-accent text-base">
            View all projects →
          </Link>
        </div>
      </section>
    </>
  );
}
