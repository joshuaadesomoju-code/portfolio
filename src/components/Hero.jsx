import { useLayoutEffect, useRef } from "react";
import AdirePattern from "./AdirePattern";
import WordSwap from "./WordSwap";
import { gsap, MOTION_OK } from "../lib/motion";
import { profile } from "../data";

// `ready` turns true when the intro has finished (or straight away if it is skipped).
export default function Hero({ ready }) {
  const root = useRef(null);

  // Before the first paint: hide what the reveal will bring in, and set up the parallax.
  useLayoutEffect(() => {
    const mm = gsap.matchMedia(root);
    mm.add(MOTION_OK, () => {
      gsap.set(".hero-h1", { clipPath: "inset(100% 0% 0% 0%)", y: 24 });
      gsap.set(".hero-fade", { opacity: 0, y: 16 });
      gsap.set(".adire-tile", { opacity: 0, scale: 0.6, transformOrigin: "50% 50%" });

      // The cloth drifts up a little slower than the page as you scroll away
      gsap.to(".hero-cloth", {
        yPercent: -12,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: 1.2 },
      });
    });
    return () => mm.revert();
  }, []);

  // The reveal itself
  useLayoutEffect(() => {
    if (!ready) return;
    const mm = gsap.matchMedia(root);
    mm.add(MOTION_OK, () => {
      gsap
        .timeline()
        .to(".hero-h1", { clipPath: "inset(0% 0% 0% 0%)", y: 0, duration: 1.1, ease: "power4.out" }, 0)
        .to(".hero-fade", { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "softout" }, 0.35)
        // Each square of cloth "dyes in" in a random order
        .to(".adire-tile", { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.6)", stagger: { each: 0.02, from: "random" } }, 0.2);
    });
    // Don't revert here: the revealed state should stay. The first effect cleans up on unmount.
  }, [ready]);

  return (
    <section
      ref={root}
      id="top"
      className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-20 pt-8 sm:px-8 md:grid-cols-[1.15fr_1fr] md:pt-14"
    >
      <div>
        <p className="hero-fade font-medium text-indigo-mid">
          {profile.role}, available for freelance projects
        </p>
        <h1
          className="hero-h1 mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-indigo-ink will-change-[clip-path,transform] sm:text-5xl lg:text-6xl"
          aria-label={profile.headline}
        >
          <span aria-hidden="true">{profile.headlineStart} </span>
          <WordSwap
            words={profile.headlineWords}
            className="bg-[linear-gradient(var(--color-ochre),var(--color-ochre))] bg-[length:100%_0.1em] bg-bottom bg-no-repeat text-indigo-deep"
          />
          <span aria-hidden="true"> {profile.headlineEnd}</span>
        </h1>
        <p className="hero-fade mt-6 max-w-xl text-lg leading-relaxed text-indigo-ink/80">{profile.intro}</p>
        <div className="hero-fade mt-8 flex flex-wrap gap-3">
          <a href="#work" className="group inline-flex items-center gap-2 rounded-full bg-indigo-deep px-6 py-3 font-semibold text-wash hover:bg-indigo-ink">
            See my work
            <svg viewBox="0 0 16 16" className="h-4 w-4 transition-transform duration-300 ease-[cubic-bezier(.22,1,.36,1)] group-hover:translate-y-0.5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <path d="M8 3v10M4 9l4 4 4-4" />
            </svg>
          </a>
          <a href={`mailto:${profile.email}`} className="rounded-full border-2 border-indigo-deep px-6 py-3 font-semibold text-indigo-deep hover:bg-indigo-deep hover:text-wash">
            Email me
          </a>
        </div>
      </div>

      {/* The memorable element: a square of adire cloth */}
      <div className="hero-cloth relative mx-auto w-full max-w-sm md:max-w-none">
        <AdirePattern className="w-full rounded-sm shadow-[12px_12px_0_#E8B04A]" />
      </div>
    </section>
  );
}
