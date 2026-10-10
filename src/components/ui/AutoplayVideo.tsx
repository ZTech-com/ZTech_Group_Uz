"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { Film, Play } from "lucide-react";

type AutoplayVideoProps = {
  src: string;
  className?: string;
};

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

/**
 * Silent, looping project preview. Only attaches a `src` (and starts
 * downloading) once the card nears the viewport, then plays/pauses as it
 * enters/leaves — so four ~20-30MB clips never compete for bandwidth on
 * first load. With prefers-reduced-motion it stays paused on a static
 * first frame behind a manual play control.
 */
export default function AutoplayVideo({ src, className = "" }: AutoplayVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);
  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  );

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    const loadObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShouldLoad(true);
          loadObserver.disconnect();
        }
      },
      { rootMargin: "400px 0px" },
    );
    loadObserver.observe(wrapper);
    return () => loadObserver.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !shouldLoad || reducedMotion || failed) return;

    const playObserver = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        if (entry.isIntersecting) {
          video.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
        } else {
          video.pause();
          setPlaying(false);
        }
      },
      { threshold: 0.3 },
    );
    playObserver.observe(video);

    function onVisibilityChange() {
      if (!video) return;
      if (document.hidden) {
        video.pause();
      } else if (video.getBoundingClientRect().top < window.innerHeight) {
        video.play().catch(() => {});
      }
    }
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      playObserver.disconnect();
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, [shouldLoad, reducedMotion, failed]);

  const pendingPlayRef = useRef(false);

  useEffect(() => {
    if (!shouldLoad || !pendingPlayRef.current) return;
    const video = videoRef.current;
    if (!video) return;
    pendingPlayRef.current = false;
    video.play().then(() => setPlaying(true)).catch(() => {});
  }, [shouldLoad]);

  function handleManualPlay() {
    const video = videoRef.current;
    if (!video) {
      // Video hasn't mounted yet (lazy-load observer hasn't fired) — load it
      // now and let the effect above play it once it exists.
      pendingPlayRef.current = true;
      setShouldLoad(true);
      return;
    }
    if (video.paused) {
      video.play().then(() => setPlaying(true)).catch(() => {});
    } else {
      video.pause();
      setPlaying(false);
    }
  }

  return (
    <div ref={wrapperRef} className={`relative overflow-hidden ${className}`}>
      {shouldLoad && !failed ? (
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          muted
          loop
          playsInline
          preload="metadata"
          autoPlay={!reducedMotion}
          aria-hidden="true"
          onError={() => setFailed(true)}
        >
          <source src={src} type="video/mp4" />
        </video>
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-[var(--bg-elevated)]">
          {failed ? (
            <Film size={24} strokeWidth={1.5} className="text-[var(--text-tertiary)]" aria-hidden="true" />
          ) : null}
        </div>
      )}

      {reducedMotion && !failed ? (
        <button
          type="button"
          onClick={handleManualPlay}
          aria-label={playing ? "Pause project preview" : "Play project preview"}
          className="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors hover:bg-black/20"
        >
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/95 text-[var(--text-primary)] shadow-lg">
            {playing ? (
              <span className="flex gap-1">
                <span className="h-4 w-1.5 rounded-sm bg-current" />
                <span className="h-4 w-1.5 rounded-sm bg-current" />
              </span>
            ) : (
              <Play size={18} fill="currentColor" />
            )}
          </span>
        </button>
      ) : null}
    </div>
  );
}
