import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap, prefersReducedMotion } from "../lib/motion";

// Cycles through `words` every `interval` ms. The new word slides up from below
// while the old one leaves through the top, inside a clipped slot whose width
// eases to fit the new word. Screen readers get the parent's aria-label instead.
export default function WordSwap({ words, interval = 3000, className = "" }) {
  const [state, setState] = useState({ cur: words.length - 1, prev: null });
  const slot = useRef(null);
  const curEl = useRef(null);
  const prevEl = useRef(null);
  const lastWidth = useRef(0);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const id = setInterval(() => setState((s) => ({ cur: (s.cur + 1) % words.length, prev: s.cur })), interval);
    return () => clearInterval(id);
  }, [words.length, interval]);

  useLayoutEffect(() => {
    const el = slot.current;
    const newWidth = el.offsetWidth;
    if (state.prev === null) {
      lastWidth.current = newWidth;
      return;
    }
    const tl = gsap.timeline({
      defaults: { duration: 0.6, ease: "settle" },
      onComplete: () => {
        gsap.set(el, { clearProps: "width" });
        setState((s) => ({ ...s, prev: null }));
      },
    });
    tl.fromTo(el, { width: lastWidth.current }, { width: newWidth }, 0)
      .fromTo(curEl.current, { yPercent: 100 }, { yPercent: 0 }, 0)
      .fromTo(prevEl.current, { yPercent: 0 }, { yPercent: -100 }, 0);
    lastWidth.current = newWidth;
    return () => tl.kill();
  }, [state.cur]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <span
      ref={slot}
      aria-hidden="true"
      className={`relative inline-block overflow-hidden whitespace-nowrap pb-[0.12em] align-bottom ${className}`}
    >
      <span ref={curEl} key={`c${state.cur}`} className="block">
        {words[state.cur]}
      </span>
      {state.prev !== null && (
        <span ref={prevEl} key={`p${state.prev}`} className="absolute left-0 top-0 block">
          {words[state.prev]}
        </span>
      )}
    </span>
  );
}
