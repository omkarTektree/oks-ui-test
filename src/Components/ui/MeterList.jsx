import Surface from "./Surface";
import CardHeader from "./CardHeader";

/**
 * A card of labelled horizontal meters.
 * Per item: `label`, `value` (drives the bar), optional `sub` (muted text under
 * the label), optional `display` (overrides the right-hand value text).
 * `scaleToMax` sizes bars against the largest value; `showDropOff` adds the
 * stage-to-stage drop for funnels.
 */
const MeterList = ({
  title,
  subtitle,
  actions,
  items,
  unit = "%",
  scaleToMax = false,
  showDropOff = false,
  formatValue = (v) => v.toLocaleString(),
}) => {
  const max = scaleToMax ? Math.max(...items.map((i) => i.value)) : 100;

  return (
    <Surface padding="md">
      <CardHeader title={title} subtitle={subtitle} actions={actions} />
      <ul className="space-y-3.5">
        {items.map((item, i) => {
          const pct = Math.round((item.value / max) * 100);
          const dropOff =
            showDropOff && i > 0
              ? Math.round((1 - item.value / items[i - 1].value) * 100)
              : null;
          const right =
            item.display ??
            (scaleToMax ? formatValue(item.value) : `${item.value}${unit}`);

          return (
            <li key={item.label}>
              <div className="flex items-baseline justify-between gap-3 text-sm">
                <span className="min-w-0 truncate">
                  <span className="text-[color:var(--app-fg-muted)]">
                    {item.label}
                  </span>
                  {item.sub && (
                    <span className="ml-2 text-xs text-[color:var(--app-fg-subtle)]">
                      {item.sub}
                    </span>
                  )}
                </span>
                <span className="shrink-0 font-medium text-[var(--app-fg)]">
                  {right}
                </span>
              </div>
              <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-[var(--app-surface-2)]">
                <div
                  className="h-full rounded-full bg-[var(--oks-color-primary-500)]"
                  style={{ width: `${pct}%` }}
                />
              </div>
              {dropOff != null && (
                <p className="mt-1 text-xs text-[color:var(--app-fg-subtle)]">
                  {dropOff}% drop-off
                </p>
              )}
            </li>
          );
        })}
      </ul>
    </Surface>
  );
};

export default MeterList;
