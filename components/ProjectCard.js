import Image from "next/image";
import Link from "next/link";
import { categories } from "@/lib/projects";

const nameOf = (slug) => categories.find((c) => c.slug === slug)?.name ?? slug;

export default function ProjectCard({ project, priority = false }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative block aspect-[4/3] overflow-hidden bg-[--surface]"
    >
      {/* Decorative: the title sits over the image and names the link. */}
      <Image
        src={project.cover}
        alt=""
        fill
        priority={priority}
        sizes="(min-width: 1024px) 42rem, (min-width: 640px) 50vw, 100vw"
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
      />

      <div aria-hidden className="card-scrim absolute inset-0" />

      <div className="card-caption absolute inset-0 flex flex-col justify-end p-6">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="text-2xl font-medium leading-snug text-white">
            {project.title}
          </h3>
          <span className="shrink-0 text-lg tabular-nums text-white/75">
            {project.year}
          </span>
        </div>
        <p className="mt-1.5 text-base text-white/75">
          {project.categories.map(nameOf).join(" · ")}
        </p>
      </div>
    </Link>
  );
}

export function ProjectGrid({ projects }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {projects.map((p, i) => (
        <ProjectCard key={p.slug} project={p} priority={i < 2} />
      ))}
    </div>
  );
}
