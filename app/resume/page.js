import Image from "next/image";
import { site } from "@/lib/projects";

export const metadata = {
  title: "Resume / CV",
};

const PDF = "/Aimee-Liu-Resume.pdf";
// Page 1 rendered from the PDF. Phone browsers mostly refuse to display a PDF
// in a frame, so they get this instead of an empty box.
const PAGE_IMAGE = "/img/resume-page1.png";
// US Letter is 612x792, but the viewer inset a few pixels around the page at
// FitH, leaving a dark band. Trimming ~2% off the height closes it.
const PAGE_RATIO = 612 / 776;

export default function Resume() {
  return (
    <section className="shell pt-16 pb-8 md:pt-24">
      <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Resume / CV</h1>

      <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_15rem] lg:items-start lg:gap-12">
        <div className="overflow-hidden border border-[--hairline] bg-[--surface]">
          {/* Real PDF viewer where it works: scrollable, zoomable, selectable. */}
          <iframe
            src={`${PDF}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
            title="Aimee Liu resume"
            className="hidden w-full md:block"
            style={{ aspectRatio: PAGE_RATIO }}
          />
          <Image
            src={PAGE_IMAGE}
            alt="Resume, page 1"
            width={1445}
            height={1870}
            className="block h-auto w-full md:hidden"
            priority
          />
        </div>

        <aside className="flex flex-col gap-3 lg:sticky lg:top-24">
          <a
            href={PDF}
            download
            className="rounded-full border border-[--accent] px-5 py-3 text-center text-lg text-[--accent] transition-colors hover:bg-[--accent] hover:text-white"
          >
            Download PDF ↓
          </a>
          <a
            href={PDF}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-[--hairline] px-5 py-3 text-center text-lg transition-colors hover:border-[--accent] hover:text-[--accent]"
          >
            Open in new tab ↗
          </a>

          <div className="mt-4 flex flex-col gap-2 text-lg">
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
          </div>
        </aside>
      </div>
    </section>
  );
}
