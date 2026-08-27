import SectionTitle from "../../../Components/ui/SectionTitle";
import Surface from "../../../Components/ui/Surface";
import CardHeader from "../../../Components/ui/CardHeader";
import CohortGrid from "../../../Components/ui/CohortGrid";
import {
  RETENTION_COLUMNS, RETENTION_ROWS, WEEK_DAYS, ACTIVITY_HEAT,
} from "../../../data/charts";

const heatStyle = (v) => {
  const t = Math.max(0, Math.min(v, 100)) / 100;
  return {
    background: `color-mix(in srgb, var(--oks-color-primary-500) ${Math.round(
      8 + t * 72
    )}%, var(--app-surface))`,
    color: t > 0.55 ? "#fff" : "var(--app-fg-muted)",
  };
};

const Heatmaps = () => (
  <div className="space-y-6">
    <SectionTitle
      title="Heatmaps"
      subtitle="Retention cohorts and activity density — cells shaded by value."
    />

    <CohortGrid
      title="Retention by signup month"
      subtitle="% of a cohort still active N months later"
      columns={RETENTION_COLUMNS}
      rows={RETENTION_ROWS}
    />

    <Surface padding="md">
      <CardHeader
        title="Activity by hour and weekday"
        subtitle="Share of peak activity"
      />
      <div className="overflow-x-auto">
        <table className="w-full border-separate border-spacing-1 text-sm">
          <thead>
            <tr>
              <th className="px-2 py-1.5 text-left text-xs font-semibold uppercase tracking-wide text-[color:var(--app-fg-subtle)]">
                Hour
              </th>
              {WEEK_DAYS.map((d) => (
                <th
                  key={d}
                  className="px-2 py-1.5 text-center text-xs font-semibold uppercase tracking-wide text-[color:var(--app-fg-subtle)]"
                >
                  {d}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ACTIVITY_HEAT.map((row) => (
              <tr key={row.label}>
                <td className="whitespace-nowrap px-2 py-1.5 tabular-nums text-[color:var(--app-fg-muted)]">
                  {row.label}:00
                </td>
                {row.values.map((v, i) => (
                  <td
                    key={`${row.label}-${WEEK_DAYS[i]}`}
                    className="rounded-[var(--oks-radius-sm)] px-2 py-1.5 text-center text-xs font-medium tabular-nums"
                    style={heatStyle(v)}
                  >
                    {v}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Surface>
  </div>
);

export default Heatmaps;
