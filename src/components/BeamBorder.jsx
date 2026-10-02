// A short streak of light that travels around the edge of whatever it wraps.
// How it works: an SVG rect with pathLength=100 and a 16/84 dash. Animating the
// dash offset from 0 to -100 (see .beam-dash in index.css) moves the streak one
// full lap. A blurred copy underneath gives it a soft glow.
export default function BeamBorder({ children, radius = 999, className = "" }) {
  return (
    <span className={`relative inline-flex ${className}`}>
      {children}
      <svg className="pointer-events-none absolute inset-0 h-full w-full overflow-visible" aria-hidden="true">
        <defs>
          <linearGradient id="beam-gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#E8B04A" />
            <stop offset="50%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#E8B04A" />
          </linearGradient>
          <filter id="beam-glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="3" />
          </filter>
        </defs>
        {[
          { w: 6, f: "url(#beam-glow)", o: 0.8 },
          { w: 2, f: undefined, o: 1 },
        ].map((s) => (
          <rect
            key={s.w}
            x="0"
            y="0"
            width="100%"
            height="100%"
            rx={radius}
            fill="none"
            stroke="url(#beam-gradient)"
            strokeWidth={s.w}
            strokeLinecap="round"
            pathLength="100"
            strokeDasharray="16 84"
            filter={s.f}
            opacity={s.o}
            className="beam-dash"
          />
        ))}
      </svg>
    </span>
  );
}
