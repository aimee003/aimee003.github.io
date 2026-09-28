import Link from "next/link";
import { ProjectGrid } from "@/components/ProjectCard";
import { categories, projects } from "@/lib/projects";

export const metadata = {
  title: "Projects",
  description: "Robotics, controls, electronics and mechanical design projects.",
};

export default function ProjectsIndex() {
  return (
    <section className="shell pt-16 pb-8 md:pt-24">
      <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
        Projects
      </h1>

      <nav className="mt-8 mb-14 flex flex-wrap gap-x-3 gap-y-2">
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

      <ProjectGrid projects={projects} />
    </section>
  );
}
