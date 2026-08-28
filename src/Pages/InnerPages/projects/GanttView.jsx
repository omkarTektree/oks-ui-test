import SectionTitle from "../../../Components/ui/SectionTitle";
import Surface from "../../../Components/ui/Surface";

const MS_DAY = 86400000;
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/** Ordered list of month starts covering [start, end] inclusive. */
const monthTicks = (start, end) => {
  const ticks = [];
  const d = new Date(start.getFullYear(), start.getMonth(), 1);
  while (d <= end) {
    ticks.push(new Date(d));
    d.setMonth(d.getMonth() + 1);
  }
  return ticks;
};

/**
 * Config-driven horizontal Gantt.
 * `config` = { title, subtitle, start, end, rows: [{ label, sub?, bars: [{ label, from, to, tone }] }] }
 */
const GanttView = ({ config }) => {
  const start = new Date(config.start);
  const end = new Date(config.end);
  const span = (end - start) / MS_DAY || 1;
  const pct = (date) => (100 * (new Date(date) - start)) / MS_DAY / span;

  const ticks = monthTicks(start, end);

  return (
    <div className="space-y-6">
      <SectionTitle title={config.title} subtitle={config.subtitle} />

      <Surface padding="none" className="overflow-hidden">
        <div className="overflow-x-auto">
          <div className="min-w-[52rem]">
            {/* Month header */}
            <div className="flex border-b border-[color:var(--app-border)]">
              <div className="w-56 shrink-0 border-r border-[color:var(--app-border)] px-4 py-2.5 text-xs font-semibold uppercase tracking-wide text-[color:var(--app-fg-subtle)]">
                Task
              </div>
              <div className="relative flex-1">
                {ticks.map((t, i) => (
                  <span
                    key={i}
                    className="absolute top-0 py-2.5 pl-2 text-xs font-medium text-[color:var(--app-fg-subtle)]"
                    style={{ left: `${pct(t)}%` }}
                  >
                    {MONTHS[t.getMonth()]}
                  </span>
                ))}
                <div className="py-2.5 text-xs">&nbsp;</div>
              </div>
            </div>

            {/* Rows */}
            {config.rows.map((row) => (
              <div
                key={row.label}
                className="flex border-b border-[color:var(--app-border)] last:border-0"
              >
                <div className="w-56 shrink-0 border-r border-[color:var(--app-border)] px-4 py-3">
                  <p className="text-sm font-medium text-[var(--app-fg)]">{row.label}</p>
                  {row.sub && (
                    <p className="text-xs text-[color:var(--app-fg-subtle)]">{row.sub}</p>
                  )}
                </div>
                <div className="relative flex-1">
                  {/* month gridlines */}
                  {ticks.map((t, i) => (
                    <span
                      key={i}
                      className="absolute inset-y-0 w-px bg-[var(--app-border)]"
                      style={{ left: `${pct(t)}%` }}
                    />
                  ))}
                  <div className="py-3">
                    {row.bars.map((bar, i) => {
                      const left = Math.max(0, pct(bar.from));
                      const width = Math.min(100 - left, pct(bar.to) - left);
                      return (
                        <div
                          key={i}
                          className="group relative my-0.5 h-6 rounded-[var(--oks-radius-md)] px-2 text-[11px] font-medium leading-6 text-white"
                          style={{
                            marginLeft: `${left}%`,
                            width: `${Math.max(width, 2)}%`,
                            background: `var(--oks-color-${bar.tone ?? "primary"}-500)`,
                          }}
                          title={`${bar.label}: ${bar.from} → ${bar.to}`}
                        >
                          <span className="truncate">{bar.label}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Surface>

      <p className="text-xs text-[color:var(--app-fg-muted)]">
        Bars are positioned against {config.start} – {config.end}. Presentational
        only — no drag-to-reschedule in this showcase.
      </p>
    </div>
  );
};

export default GanttView;
