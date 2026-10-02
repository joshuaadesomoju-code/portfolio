import { useLayoutEffect } from "react";
import { gsap, ScrollTrigger, MOTION_OK } from "./motion";

// Scroll entrances for the whole page, driven by data attributes:
//
//   data-reveal="up"      fades up 20px
//   data-reveal="right"   slides in from 48px to the right
//   data-reveal="scale"   scales up from 0.95
//   data-delay="0.15"     optional delay in seconds
//
//   data-batch="work"     items with the same name fade up in a staggered
//                         group as they reach the viewport (0.15s apart)
//
// Everything plays once. With reduced motion turned on, nothing is hidden or moved.
export default function useScrollReveals() {
  useLayoutEffect(() => {
    const mm = gsap.matchMedia();

    mm.add(MOTION_OK, () => {
      gsap.utils.toArray("[data-reveal]").forEach((el) => {
        const kind = el.dataset.reveal;
        const from = { opacity: 0 };
        if (kind === "up") from.y = 20;
        if (kind === "right") from.x = 48;
        if (kind === "scale") Object.assign(from, { scale: 0.95, y: 20 });

        gsap.from(el, {
          ...from,
          duration: kind === "up" ? 0.5 : 0.6,
          delay: Number(el.dataset.delay) || 0,
          ease: "softout",
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        });
      });

      const groups = new Set(gsap.utils.toArray("[data-batch]").map((el) => el.dataset.batch));
      groups.forEach((name) => {
        const items = `[data-batch="${name}"]`;
        gsap.set(items, { opacity: 0, y: 30 });
        ScrollTrigger.batch(items, {
          start: "top 88%",
          once: true,
          onEnter: (batch) =>
            gsap.to(batch, { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power3.out", overwrite: true }),
        });
      });

      // Web fonts change text height, so re-measure trigger points once they load
      document.fonts?.ready.then(() => ScrollTrigger.refresh());
    });

    return () => mm.revert();
  }, []);
}
