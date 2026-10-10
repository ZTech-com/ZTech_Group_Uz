"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Lightbox from "@/components/ui/Lightbox";

type ScreenshotGalleryProps = {
  images: string[];
  alts: string[];
};

const DRAG_CLICK_THRESHOLD = 6;
const AUTO_ADVANCE_MS = 3200;
const SCROLL_SETTLE_MS = 120;
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeReducedMotion(callback: () => void) {
  const mq = window.matchMedia(REDUCED_MOTION_QUERY);
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}
function getReducedMotionSnapshot() {
  return window.matchMedia(REDUCED_MOTION_QUERY).matches;
}
function getReducedMotionServerSnapshot() {
  return false;
}

export default function ScreenshotGallery({ images, alts }: ScreenshotGalleryProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const hoveringRef = useRef(false);
  const draggingRef = useRef(false);
  const scrollingRef = useRef(false);
  const programmaticRef = useRef(false);
  const drag = useRef({ startX: 0, startScroll: 0, moved: 0 });
  const settleTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const programmaticTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  );

  useEffect(() => {
    return () => {
      clearTimeout(settleTimer.current);
      clearTimeout(programmaticTimer.current);
    };
  }, []);

  function cardStep(): number {
    const card = trackRef.current?.querySelector<HTMLElement>("[data-card]");
    return (card?.offsetWidth ?? 220) + 16;
  }

  // The active card is always re-centered here, whichever source changed it
  // (autoplay, arrows, dots, or settling after a manual drag/swipe).
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    programmaticRef.current = true;
    track.scrollTo({ left: activeIndex * cardStep(), behavior: "smooth" });
    clearTimeout(programmaticTimer.current);
    programmaticTimer.current = setTimeout(() => {
      programmaticRef.current = false;
    }, 500);
  }, [activeIndex]);

  // Auto-advance one card at a time; pauses while hovered, dragged, or the
  // lightbox is open, and never runs under prefers-reduced-motion.
  useEffect(() => {
    if (reducedMotion || images.length <= 1) return;
    const interval = setInterval(() => {
      if (
        hoveringRef.current ||
        draggingRef.current ||
        scrollingRef.current ||
        lightboxIndex !== null ||
        document.hidden
      ) {
        return;
      }
      setActiveIndex((i) => (i + 1) % images.length);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(interval);
  }, [reducedMotion, images.length, lightboxIndex]);

  // Keeps `activeIndex` in sync with whatever the track actually scrolled to
  // — native touch/trackpad swipes snap on their own, this just reads where
  // they landed once scrolling settles (ignored during our own programmatic scrolls).
  function handleScroll() {
    scrollingRef.current = true;
    clearTimeout(settleTimer.current);
    settleTimer.current = setTimeout(() => {
      scrollingRef.current = false;
      const track = trackRef.current;
      if (!track || programmaticRef.current) return;
      const nearest = Math.round(track.scrollLeft / cardStep());
      const clamped = Math.min(Math.max(nearest, 0), images.length - 1);
      setActiveIndex(clamped);
    }, SCROLL_SETTLE_MS);
  }

  function handlePointerDown(e: React.PointerEvent<HTMLDivElement>) {
    draggingRef.current = true;
    if (e.pointerType !== "mouse" || !trackRef.current) return;
    drag.current = { startX: e.clientX, startScroll: trackRef.current.scrollLeft, moved: 0 };
    trackRef.current.setPointerCapture(e.pointerId);
  }

  function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (e.pointerType !== "mouse" || !draggingRef.current || !trackRef.current) return;
    const delta = e.clientX - drag.current.startX;
    drag.current.moved = Math.max(drag.current.moved, Math.abs(delta));
    // Direct assignment (not scrollBy) so CSS scroll-snap/scroll-behavior
    // never queues an animation mid-drag — keeps 1:1 tracking with the cursor.
    trackRef.current.scrollLeft = drag.current.startScroll - delta;
  }

  function handlePointerUp(e: React.PointerEvent<HTMLDivElement>) {
    draggingRef.current = false;
    if (e.pointerType !== "mouse" || !trackRef.current) return;
    const nearest = Math.round(trackRef.current.scrollLeft / cardStep());
    setActiveIndex(Math.min(Math.max(nearest, 0), images.length - 1));
  }

  function handleCardClick(index: number) {
    // A real drag shouldn't also open the lightbox.
    if (drag.current.moved > DRAG_CLICK_THRESHOLD) return;
    setActiveIndex(index);
    setLightboxIndex(index);
  }

  function goTo(direction: 1 | -1) {
    setActiveIndex((i) => (i + direction + images.length) % images.length);
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => {
        hoveringRef.current = true;
      }}
      onMouseLeave={() => {
        hoveringRef.current = false;
      }}
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-[var(--bg)] to-transparent sm:w-14" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-[var(--bg)] to-transparent sm:w-14" />

      <div
        ref={trackRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        onScroll={handleScroll}
        className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-[calc(50%_-_90px)] pb-1 [cursor:grab] select-none active:[cursor:grabbing] sm:px-[calc(50%_-_110px)]"
      >
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            data-card
            onClick={() => handleCardClick(i)}
            aria-label={alts[i]}
            aria-current={i === activeIndex}
            className={`relative aspect-[2/3] w-[180px] shrink-0 snap-center overflow-hidden rounded-2xl bg-black transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] sm:w-[220px] ${
              i === activeIndex ? "scale-100 opacity-100" : "scale-[0.92] opacity-55 hover:opacity-80"
            }`}
          >
            <Image
              src={src}
              alt={alts[i] ?? ""}
              fill
              sizes="(max-width: 640px) 180px, 220px"
              className="object-cover"
              draggable={false}
            />
          </button>
        ))}
      </div>

      <button
        type="button"
        onClick={() => goTo(-1)}
        aria-label="Previous screenshot"
        className="absolute left-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--border-subtle)] bg-[var(--bg)]/90 text-[var(--text-primary)] shadow-md backdrop-blur transition-colors hover:border-[var(--border-strong)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)]"
      >
        <ChevronLeft size={18} />
      </button>
      <button
        type="button"
        onClick={() => goTo(1)}
        aria-label="Next screenshot"
        className="absolute right-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--border-subtle)] bg-[var(--bg)]/90 text-[var(--text-primary)] shadow-md backdrop-blur transition-colors hover:border-[var(--border-strong)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)]"
      >
        <ChevronRight size={18} />
      </button>

      <div className="mt-4 flex items-center justify-center gap-1.5">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setActiveIndex(i)}
            aria-label={`Go to screenshot ${i + 1}`}
            aria-current={i === activeIndex}
            className={`h-1.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] ${
              i === activeIndex ? "w-5 bg-[var(--accent)]" : "w-1.5 bg-[var(--border-strong)]"
            }`}
          />
        ))}
      </div>

      {lightboxIndex !== null ? (
        <Lightbox
          images={images}
          alts={alts}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      ) : null}
    </div>
  );
}
