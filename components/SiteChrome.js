"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { categories, site } from "@/lib/projects";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/resume", label: "Resume / CV" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the mobile menu on navigation — the menu outlives the route change.
  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-[--hairline] bg-white/85 backdrop-blur-md">
      <div className="shell flex h-16 items-center justify-between gap-6">
        <Link
          href="/"
          className="text-sm font-semibold uppercase tracking-[0.14em] hover:opacity-60"
        >
          {site.name}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={isActive(l.href) ? "page" : undefined}
              className={`text-base transition-opacity hover:opacity-60 ${
                isActive(l.href)
                  ? "font-medium text-[--accent]"
                  : "text-[--muted] hover:text-[--foreground]"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
          className="md:hidden"
        >
          <span className="text-base">{open ? "Close" : "Menu"}</span>
        </button>
      </div>

      {open && (
        <nav className="border-t border-[--hairline] bg-white md:hidden">
          <div className="shell flex flex-col py-2">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                aria-current={isActive(l.href) ? "page" : undefined}
                className={`border-b border-[--hairline] py-3.5 text-base last:border-0 ${
                  isActive(l.href) ? "font-medium text-[--accent]" : ""
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mt-28 border-t border-[--hairline] py-14">
      <div className="shell grid gap-10 sm:grid-cols-[1fr_auto]">
        <div>
          <p className="text-lg font-medium">{site.name}</p>
          <p className="mt-1 text-base text-[--muted]">{site.role}</p>
          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-base">
            <span className="text-[--accent]">{site.email}</span>
            <a
              className="link-accent"
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="link-accent"
              href={site.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>

        <nav className="sm:text-right">
          <p className="eyebrow">Categories</p>
          <ul className="mt-3 space-y-1.5">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/projects/category/${c.slug}`}
                  className="text-base text-[--muted] hover:text-[--accent]"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="shell mt-12 text-sm text-[--muted]">
        © {new Date().getFullYear()} {site.name}
      </div>
    </footer>
  );
}
