import TrendChip from "./TrendChip";

/**
 * Compact metric for grids *inside* a card (no Surface of its own).
 * Optional `delta` renders a TrendChip; optional `meter` (0–100) renders a thin
 * progress bar under the label. `tone` colours the meter.
 */
const StatTile = ({ value, label, delta, deltaDirection, meter, tone }) => (
  <div className="rounded-[var(--oks-radius-lg)] bg-[var(--app-surface-2)] p-3.5">
    <div className="flex items-center justify-between gap-2">
      <span className="text-xl font-semibold tracking-tight text-[var(--app-fg)]">
        {value}
      </span>
      {delta != null && <TrendChip value={delta} direction={deltaDirection} />}
      {meter != null && delta == null && (
        <span className="text-xs font-medium text-[color:var(--app-fg-muted)]">
          {meter}%
        </span>
      )}
    </div>
    <p className="mt-1 text-xs text-[color:var(--app-fg-muted)]">{label}</p>
    {meter != null && (
      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[color:var(--app-border)]">
        <div
          className="h-full rounded-full"
          style={{
            width: `${Math.min(meter, 100)}%`,
            background: `var(--oks-color-${tone ?? "primary"}-500)`,
          }}
        />
      </div>
    )}
  </div>
);

export default StatTile;
