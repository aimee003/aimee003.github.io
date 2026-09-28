import Image from "next/image";
import dimensions from "@/lib/media-dimensions.json";

const FALLBACK = { width: 1200, height: 900 };

const sizeOf = (src) => dimensions[src] ?? FALLBACK;

export const ratioOf = (src) => {
  const d = sizeOf(src);
  return d.width / d.height;
};

/**
 * One gallery item, sized to its own aspect ratio.
 *
 * `flexGrow: ratio` is what makes a row of mixed shapes line up: widths come
 * out proportional to each image's ratio, so every item in the row lands on
 * the same height and the row fills edge to edge. Because the box ratio equals
 * the media ratio, `object-cover` fills it without cropping anything.
 *
 * `maxWidth` keeps a lone item on the final row — which flex would otherwise
 * stretch across the full width — from towering over the rest.
 */
export default function Media({
  item,
  priority = false,
  stacked = false,
  rowHeight = null,
}) {
  const { width } = sizeOf(item.src);
  const ratio = ratioOf(item.src);

  // An explicit displayWidth overrides the native-size cap in both directions.
  const cap = item.displayWidth ?? width;

  // rowHeight — every item on the line resolves to the same height, so widths
  //   come out proportional to aspect ratio and the row reads as one band.
  // stacked — the item has the line to itself, so it may be taller.
  // otherwise — justified packing, capped so nothing upscales or towers.
  const style = rowHeight
    ? { width: `calc(${ratio} * ${rowHeight})`, maxWidth: "100%" }
    : stacked
      ? { width: `min(100%, ${cap}px, calc(${ratio} * 78vh))` }
      : {
          flexGrow: ratio,
          flexBasis: `calc(${ratio} * 200px)`,
          maxWidth: `min(100%, ${width}px, calc(${ratio} * 62vh))`,
        };

  return (
    <figure className="min-w-0" style={style}>
      <div
        className="relative overflow-hidden border border-[--hairline]"
        style={{ aspectRatio: ratio }}
      >
        {item.type === "video" ? (
          <video
            className="h-full w-full object-cover"
            src={item.src}
            poster={item.poster}
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            aria-label={item.alt}
          />
        ) : (
          <Image
            src={item.src}
            alt={item.alt}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        )}
      </div>

      {item.caption && (
        <figcaption className="mt-2.5 text-base text-[--muted]">
          {item.caption}
        </figcaption>
      )}
    </figure>
  );
}
