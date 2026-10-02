import { useLayoutEffect, useRef, useState } from "react";
import { gsap, getLenis, prefersReducedMotion } from "../lib/motion";
import { profile } from "../data";

// Plays once per browser session: the intro line types in letter by letter,
// then five indigo panels drop away one after another to show the page.
// Click anywhere to skip it.
const SEEN_KEY = "intro-seen";

function alreadySeen() {
  try {
    return sessionStorage.getItem(SEEN_KEY) === "1";
  } catch {
    return false;
  }
}

export default function Intro({ onDone }) {
  // Decided once, before the first paint, so the page never flashes underneath
  const [show, setShow] = useState(() => !prefersReducedMotion() && !alreadySeen());
  const root = useRef(null);
  const tl = useRef(null);

  useLayoutEffect(() => {
    if (!show) {
      onDone();
      return;
    }
    try {
      sessionStorage.setItem(SEEN_KEY, "1");
    } catch {
      /* private mode: the intro will just play again next time */
    }

    getLenis()?.stop();
    const ctx = gsap.context(() => {
      tl.current = gsap
        .timeline({
          onComplete: () => {
            getLenis()?.start();
            setShow(false);
          },
        })
        .to(".intro-char", { opacity: 1, duration: 0.05, stagger: 0.05, ease: "none" })
        .to({}, { duration: 0.6 }) // hold so the line can be read
        .to(".intro-line", { opacity: 0, y: -20, duration: 0.5, ease: "glide" })
        .to(".intro-panel", { yPercent: 100, duration: 0.8, stagger: 0.1, ease: "curtain" }, "-=0.25")
        // Start the hero reveal while the last panels are still leaving
        .add(onDone, "-=0.7");
    }, root);

    return () => {
      ctx.revert();
      getLenis()?.start();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show]);

  if (!show) return null;

  return (
    <div
      ref={root}
      className="fixed inset-0 z-50 grid cursor-pointer place-items-center"
      role="button"
      tabIndex={0}
      aria-label="Skip intro"
      onClick={() => tl.current?.progress(1)}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " " || e.key === "Escape") && tl.current?.progress(1)}
    >
      <div className="absolute inset-0 flex" aria-hidden="true">
        {[0, 1, 2, 3, 4].map((i) => (
          <div key={i} className="intro-panel -mr-px h-full flex-1 bg-indigo-deep" />
        ))}
      </div>
      <p className="intro-line relative px-5 text-center font-display text-3xl font-bold text-wash sm:text-5xl">
        {[...profile.introLine].map((ch, i) => (
          <span key={i} className="intro-char opacity-0">
            {ch === " " ? " " : ch}
          </span>
        ))}
      </p>
      <span className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs font-medium uppercase tracking-[0.15em] text-wash/60">
        Click to skip
      </span>
    </div>
  );
}
