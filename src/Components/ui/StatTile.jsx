import TrendChip from "./TrendChip";

/**
 * Compact metric for grids *inside* a card (no Surface of its own).
 * e.g. the "Activity — this week" 2×2 block.
 */
const StatTile = ({ value, label, delta, deltaDirection }) => (
  <div className="rounded-[var(--oks-radius-lg)] bg-[var(--app-surface-2)] p-3.5">
    <div className="flex items-center justify-between gap-2">
      <span className="text-xl font-semibold tracking-tight text-[var(--app-fg)]">
        {value}
      </span>
      {delta != null && (
        <TrendChip value={delta} direction={deltaDirection} />
      )}
    </div>
    <p className="mt-1 text-xs text-[color:var(--app-fg-muted)]">{label}</p>
  </div>
);

export default StatTile;
