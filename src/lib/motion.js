// ============================================================
//  Shared motion setup: GSAP plugins, easing curves, Lenis.
//  Every animation on the site imports from here.
// ============================================================
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger, CustomEase);

// Four curves, used everywhere so the motion feels like one system.
// Copy the same values into CSS as cubic-bezier(...) when you need them there.
CustomEase.create("settle", "0.33, 1, 0.68, 1");    // word swaps, small state changes
CustomEase.create("glide", "0.22, 1, 0.36, 1");     // hovers, underlines, arrows
CustomEase.create("curtain", "0.76, 0, 0.24, 1");   // the intro panels
CustomEase.create("softout", "0.25, 0.46, 0.45, 0.94"); // scroll entrances

// Use these with gsap.matchMedia() so every effect has an "off" version.
export const MOTION_OK = "(prefers-reduced-motion: no-preference)";
export const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// ---------- Smooth scrolling ----------
let lenis = null;
export const getLenis = () => lenis;

export function startSmoothScroll() {
  if (lenis || prefersReducedMotion()) return () => {};
  lenis = new Lenis({ lerp: 0.1, anchors: { offset: -16 } });
  // Keep ScrollTrigger in step with Lenis, and drive Lenis from GSAP's clock
  lenis.on("scroll", ScrollTrigger.update);
  const tick = (time) => lenis && lenis.raf(time * 1000);
  gsap.ticker.add(tick);
  gsap.ticker.lagSmoothing(0);

  return () => {
    gsap.ticker.remove(tick);
    lenis?.destroy();
    lenis = null;
  };
}

export { gsap, ScrollTrigger };
