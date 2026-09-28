"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

// Full-bleed hero whose image drifts slower than the page, so it reads as
// sitting behind the content. The image layer is deliberately taller than the
// section (see `-inset-y-[18%]`) so the drift never exposes an edge.
export default function ParallaxHero({ hero, name, role }) {
  const layer = useRef(null);

  useEffect(() => {
    const el = layer.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const offset = window.scrollY;
      // Stop doing work once the hero has scrolled past.
      if (offset > window.innerHeight * 1.2) return;
      el.style.transform = `translate3d(0, ${offset * 0.34}px, 0)`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section className="relative flex h-[82vh] min-h-[460px] max-h-[860px] items-end overflow-hidden bg-neutral-900">
      <div ref={layer} className="absolute -inset-y-[18%] inset-x-0 will-change-transform">
        <Image
          src={hero.src}
          alt={hero.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: hero.position ?? "center" }}
        />
      </div>

      {/* Scrim: the photo is busy, so the type needs a floor to sit on. */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10"
      />

      <div className="shell relative w-full pb-14 md:pb-20">
        <h1 className="text-balance text-5xl font-semibold leading-[1.05] tracking-tight text-white drop-shadow-sm sm:text-6xl md:text-7xl">
          {name}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-white/85 sm:text-xl md:text-2xl">
          {role}
        </p>
      </div>
    </section>
  );
}
