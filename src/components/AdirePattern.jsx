// An adire-inspired pattern drawn with SVG.
// Adire cloth is made in squares, each with its own resist-dye motif,
// so this grid repeats a few motifs in a fixed order.

const SIZE = 60; // size of one square tile
const LINE = "#EEF1F8";

function Motif({ kind, x, y }) {
  const cx = x + SIZE / 2;
  const cy = y + SIZE / 2;
  const common = { fill: "none", stroke: LINE, strokeWidth: 2.2, strokeLinecap: "round" };

  switch (kind) {
    case "rings": // concentric circles
      return (
        <g {...common}>
          <circle cx={cx} cy={cy} r={20} />
          <circle cx={cx} cy={cy} r={12} />
          <circle cx={cx} cy={cy} r={3.5} fill={LINE} />
        </g>
      );
    case "dots": // grid of dots
      return (
        <g fill={LINE}>
          {[0, 1, 2].flatMap((i) =>
            [0, 1, 2].map((j) => (
              <circle key={`${i}${j}`} cx={x + 14 + i * 16} cy={y + 14 + j * 16} r={2.8} />
            ))
          )}
        </g>
      );
    case "waves": // stacked wavy lines
      return (
        <g {...common}>
          {[16, 30, 44].map((dy) => (
            <path
              key={dy}
              d={`M${x + 6} ${y + dy} q 8 -7 16 0 t 16 0 t 16 0`}
            />
          ))}
        </g>
      );
    case "leaf": // leaf with veins
      return (
        <g {...common}>
          <path d={`M${cx} ${y + 8} C ${x + 52} ${cy}, ${cx} ${y + 52}, ${cx} ${y + 52} C ${cx} ${y + 52}, ${x + 8} ${cy}, ${cx} ${y + 8} Z`} />
          <path d={`M${cx} ${y + 14} V ${y + 48}`} />
          <path d={`M${cx} ${cy - 6} l 8 -6 M${cx} ${cy - 6} l -8 -6 M${cx} ${cy + 6} l 8 -6 M${cx} ${cy + 6} l -8 -6`} />
        </g>
      );
    case "cross": // stitched cross
      return (
        <g {...common} strokeDasharray="4 4">
          <path d={`M${x + 10} ${y + 10} L ${x + 50} ${y + 50} M${x + 50} ${y + 10} L ${x + 10} ${y + 50}`} />
          <rect x={x + 10} y={y + 10} width={40} height={40} strokeDasharray="none" />
        </g>
      );
    default: // spiral
      return (
        <g {...common}>
          <path d={`M${cx} ${cy} m 0 -2 a 2 2 0 1 1 -2 2 a 5 5 0 1 1 7 -5 a 9 9 0 1 1 -13 10 a 14 14 0 1 1 20 -15`} />
        </g>
      );
  }
}

const ORDER = ["rings", "dots", "waves", "leaf", "spiral", "cross"];

export default function AdirePattern({ cols = 5, rows = 6, className = "" }) {
  const tiles = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      // Shift the motif order on each row so it looks hand-laid, not copy-pasted
      const kind = ORDER[(c + r * 2) % ORDER.length];
      tiles.push(
        <g key={`${r}-${c}`} className="adire-tile">
          <Motif kind={kind} x={c * SIZE} y={r * SIZE} />
        </g>
      );
    }
  }

  return (
    <svg
      viewBox={`0 0 ${cols * SIZE} ${rows * SIZE}`}
      className={className}
      role="img"
      aria-label="Indigo adire cloth pattern"
    >
      <rect width={cols * SIZE} height={rows * SIZE} fill="#1E2A6E" />
      {/* grid lines between squares, like the folds in dyed cloth */}
      <g stroke="#4A5AA8" strokeWidth="1">
        {Array.from({ length: cols - 1 }, (_, i) => (
          <line key={`v${i}`} x1={(i + 1) * SIZE} y1="0" x2={(i + 1) * SIZE} y2={rows * SIZE} />
        ))}
        {Array.from({ length: rows - 1 }, (_, i) => (
          <line key={`h${i}`} x1="0" y1={(i + 1) * SIZE} x2={cols * SIZE} y2={(i + 1) * SIZE} />
        ))}
      </g>
      {tiles}
    </svg>
  );
}
