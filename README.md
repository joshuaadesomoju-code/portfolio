# Joshua Adesomoju — Portfolio

Personal portfolio built with React, Vite and Tailwind CSS. The design is inspired by adire, the indigo resist-dyed cloth from Abeokuta, Ogun State.

## Run it locally
```bash
npm install
npm run dev
```
Then open the link shown in the terminal (usually http://localhost:5173).

## Edit content
All text, links and projects live in `src/data.js`. Colours and fonts are in `src/index.css`.

## Structure
- `src/components/AdirePattern.jsx` — the SVG adire pattern in the hero
- `src/components/` — one file per page section

## Motion
Animations use [GSAP](https://gsap.com) (with ScrollTrigger and CustomEase) and [Lenis](https://lenis.darkroom.engineering) for smooth scrolling. Every effect switches off when the visitor's system has "reduce motion" turned on.

- `src/lib/motion.js`: plugin setup, the four easing curves, and Lenis
- `src/lib/useScrollReveals.js`: scroll entrances. Add `data-reveal="up" | "right" | "scale"` to any element, or `data-batch="name"` to a group of items that should fade in one after another
- `src/components/Intro.jsx`: intro screen, once per browser session. Change the text with `introLine` in `src/data.js`
- `src/components/WordSwap.jsx`: the rotating word in the hero. Change the words with `headlineWords` in `src/data.js`
- `src/components/BeamBorder.jsx`: the light that travels around the Upwork button
