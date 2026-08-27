import Surface from "./Surface";
import CardHeader from "./CardHeader";

/**
 * A card of labelled horizontal meters. Used for "Sessions by device" and,
 * with `showDropOff`, the conversion funnel.
 */
const MeterList = ({
  title,
  subtitle,
  items,
  unit = "%",
  scaleToMax = false,
  showDropOff = false,
  formatValue = (v) => v.toLocaleString(),
}) => {
  const max = scaleToMax ? Math.max(...items.map((i) => i.value)) : 100;

  return (
    <Surface padding="md">
      <CardHeader title={title} subtitle={subtitle} />
      <ul className="space-y-3.5">
        {items.map((item, i) => {
          const pct = Math.round((item.value / max) * 100);
          const dropOff =
            showDropOff && i > 0
              ? Math.round((1 - item.value / items[i - 1].value) * 100)
              : null;

          return (
            <li key={item.label}>
              <div className="flex items-center justify-between text-sm">
                <span className="text-[color:var(--app-fg-muted)]">
                  {item.label}
                </span>
                <span className="font-medium text-[var(--app-fg)]">
                  {scaleToMax ? formatValue(item.value) : `${item.value}${unit}`}
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
