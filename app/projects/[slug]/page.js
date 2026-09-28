import Link from "next/link";
import { notFound } from "next/navigation";
import Media from "@/components/Media";
import { categories, getProject, projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const project = getProject(params.slug);
  if (!project) return {};
  return { title: project.title, description: project.objective };
}

const nameOf = (slug) => categories.find((c) => c.slug === slug)?.name ?? slug;

// Shared height for items sharing an explicit gallery row.
const ROW_HEIGHT = "min(62vh, 600px)";

// Media carrying a `row` number is grouped onto that line; anything without
// one gets a line of its own, keeping the declared order.
function groupByRow(media) {
  const rows = [];
  let current = null;
  for (const item of media) {
    if (item.row && current?.row === item.row) current.items.push(item);
    else rows.push((current = { row: item.row, items: [item] }));
  }
  return rows;
}

export default function ProjectPage({ params }) {
  const project = getProject(params.slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === project.slug);
  const prev = projects[index - 1];
  const next = projects[index + 1];

  return (
    <article className="pt-16 md:pt-24">
      <header className="shell">
        <Link href="/projects" className="eyebrow hover:text-[--accent]">
          ← All projects
        </Link>

        <h1 className="mt-5 max-w-4xl text-balance text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
          {project.title}
        </h1>

        <p className="mt-6 max-w-3xl text-pretty text-3xl leading-relaxed text-[--muted]">
          {project.objective}
        </p>

        <dl className="mt-10 grid gap-x-8 gap-y-6 border-t border-[--hairline] pt-8 sm:grid-cols-3">
          <div>
            <dt className="eyebrow">Timeline</dt>
            <dd className="mt-2 text-lg">{project.period}</dd>
          </div>
          <div>
            <dt className="eyebrow">Categories</dt>
            <dd className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-lg">
              {project.categories.map((c) => (
                <Link key={c} href={`/projects/category/${c}`} className="link-accent">
                  {nameOf(c)}
                </Link>
              ))}
            </dd>
          </div>
          {project.result && (
            <div>
              <dt className="eyebrow">Result</dt>
              <dd className="mt-2 text-lg">{project.result}</dd>
            </div>
          )}
        </dl>
      </header>

      <div className="shell mt-16">
        {/* Nested rather than set on .shell: a max-w-* utility on the same
            element loses to .shell's own max-width. */}
        <div className="flex max-w-5xl flex-col gap-14">
          <section>
            {/* Headings kept for screen readers and document structure, but
                not shown — the sections read fine without them visually. */}
            <h2 className="sr-only">Overview</h2>
            {/* Line breaks in a supplied description become paragraphs. */}
            <div className="flex flex-col gap-5">
              {project.overview.split("\n").map((para, i) => (
                <p key={i} className="text-pretty text-2xl leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </section>

          {project.links.length > 0 && (
            <section>
              <h2 className="sr-only">Links</h2>
              <ul className="space-y-2.5">
                {project.links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      className="link-accent text-2xl"
                    >
                      {l.label} ↗
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </div>

      {/* Gallery last, at full width now that nothing sits beside it. */}
      <section className="shell mt-16">
        <h2 className="sr-only">Gallery</h2>
        {/* Justified rows: each item grows in proportion to its aspect ratio,
            so images pair up when they fit and fill the row exactly. */}
        {project.media.some((m) => m.row) ? (
          // Explicit rows: each group fills its own line.
          <div className="flex flex-col gap-4">
            {groupByRow(project.media).map(({ row, items }, i) => {
              const height = project.rowHeights?.[row] ?? ROW_HEIGHT;
              return (
                <div key={i} className="flex flex-wrap items-start gap-4">
                  {items.map((item) => (
                    <Media
                      key={item.src}
                      item={item}
                      // A shared height only makes sense when items share the
                      // line; alone, an item keeps its own native sizing.
                      rowHeight={items.length > 1 ? height : null}
                      stacked={items.length === 1}
                    />
                  ))}
                </div>
              );
            })}
          </div>
        ) : (
          <div
            className={
              project.stackGallery
                ? "flex flex-col items-start gap-6"
                : "flex flex-wrap items-start gap-4"
            }
          >
            {project.media.map((item) => (
              <Media key={item.src} item={item} stacked={project.stackGallery} />
            ))}
          </div>
        )}
      </section>

      <nav className="shell mt-24 grid gap-6 border-t border-[--hairline] pt-8 sm:grid-cols-2">
        {prev ? (
          <Link href={`/projects/${prev.slug}`} className="group">
            <span className="eyebrow">Previous</span>
            <p className="mt-2 text-xl font-medium transition-colors group-hover:text-[--accent]">
              {prev.title}
            </p>
          </Link>
        ) : (
          <span />
        )}
        {next && (
          <Link href={`/projects/${next.slug}`} className="group sm:text-right">
            <span className="eyebrow">Next</span>
            <p className="mt-2 text-xl font-medium transition-colors group-hover:text-[--accent]">
              {next.title}
            </p>
          </Link>
        )}
      </nav>
    </article>
  );
}
