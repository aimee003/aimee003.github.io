import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/projects";

export const metadata = {
  title: "About",
};

// Aimee's own words. NAME leads in above the bio; one paragraph per BIO entry.
const NAME = "Aimee Liu, MSc in MechE @ MIT";
const BIO = ["I'm Aimee, a MSc student at MIT studying Mechanical Engineering. I also completed my BSc at MIT double-majoring in Mechanical Engineering and Electrical Engineering & Computer Science. My focus is on robotics and controls, mechanical design, electronics, and anything else that goes into a robot! I enjoy working on dexterous manipulation, from design, to controls, to the tactile sensors used for contact feedback. Feel free to reach out and email me if you'd like to talk!"];

export default function About() {
  return (
    <section className="shell pt-16 pb-8 md:pt-24">
      <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">About</h1>

      <div className="mt-12 grid gap-12 md:grid-cols-[2fr_1fr] md:gap-16">
        <div className="space-y-6 text-pretty text-2xl leading-relaxed">
          <p className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {NAME}
          </p>

          {BIO.map((para, i) => (
            <p key={i}>{para}</p>
          ))}

          <div className="flex flex-wrap gap-x-6 gap-y-2 pt-4 text-xl">
            <span className="text-[--accent]">{site.email}</span>
            <a
              className="link-accent"
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
            <a
              className="link-accent"
              href={site.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
            <Link className="link-accent" href="/resume">
              Resume / CV
            </Link>
          </div>
        </div>

        <div>
          <div className="relative aspect-square overflow-hidden rounded-full bg-[--surface]">
            <Image
              src="/img/about-portrait.jpg"
              alt=" "
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
