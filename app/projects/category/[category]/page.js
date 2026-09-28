import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectGrid } from "@/components/ProjectCard";
import { categories, getCategory, projectsIn } from "@/lib/projects";

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export function generateMetadata({ params }) {
  const category = getCategory(params.category);
  if (!category) return {};
  return {
    title: category.name,
    description: `${category.name} projects by Aimee Liu.`,
  };
}

export default function CategoryPage({ params }) {
  const category = getCategory(params.category);
  if (!category) notFound();

  const list = projectsIn(category.slug);

  return (
    <section className="shell pt-16 pb-8 md:pt-24">
      <Link href="/projects" className="eyebrow hover:text-[--accent]">
        ← All projects
      </Link>

      <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
        {category.name}
      </h1>
      <p className="mt-4 text-lg text-[--muted]">
        {list.length} {list.length === 1 ? "project" : "projects"}
      </p>

      <nav className="mt-8 mb-14 flex flex-wrap gap-x-3 gap-y-2">
        {categories.map((c) => (
          <Link
            key={c.slug}
            href={`/projects/category/${c.slug}`}
            aria-current={c.slug === category.slug ? "page" : undefined}
            className={`rounded-full border px-4 py-2 text-base transition-colors ${
              c.slug === category.slug
                ? "border-[--accent] bg-[--accent] text-white"
                : "border-[--hairline] hover:border-[--accent] hover:text-[--accent]"
            }`}
          >
            {c.name}
          </Link>
        ))}
      </nav>

      <ProjectGrid projects={list} />
    </section>
  );
}
