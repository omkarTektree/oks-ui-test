import Surface from "./Surface";
import CardHeader from "./CardHeader";

/**
 * Retention heatmap. `columns` = ["M0", "M1", …]; `rows` = [{ label, values: [] }].
 * Cell background scales with the value (0–100); `null`/`undefined` renders blank.
 */
const cellStyle = (v) => {
  if (v == null) return { background: "var(--app-surface-2)", color: "transparent" };
  const t = Math.max(0, Math.min(v, 100)) / 100;
  return {
    // fade the brand colour: strong at 100%, faint near 0
    background: `color-mix(in srgb, var(--oks-color-primary-500) ${Math.round(
      12 + t * 68
    )}%, var(--app-surface))`,
    color: t > 0.55 ? "#fff" : "var(--app-fg)",
  };
};

const CohortGrid = ({ title, subtitle, actions, columns, rows }) => (
  <Surface padding="md">
    <CardHeader title={title} subtitle={subtitle} actions={actions} />
    <div className="overflow-x-auto">
      <table className="w-full border-separate border-spacing-1 text-sm">
        <thead>
          <tr>
            <th className="px-2 py-1.5 text-left text-xs font-semibold uppercase tracking-wide text-[color:var(--app-fg-subtle)]">
              Cohort
            </th>
            {columns.map((col) => (
              <th
                key={col}
                className="px-2 py-1.5 text-center text-xs font-semibold uppercase tracking-wide text-[color:var(--app-fg-subtle)]"
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label}>
              <td className="whitespace-nowrap px-2 py-1.5 text-[color:var(--app-fg-muted)]">
                {row.label}
              </td>
              {row.values.map((v, i) => (
                <td
                  key={`${row.label}-${columns[i]}`}
                  className="rounded-[var(--oks-radius-sm)] px-2 py-1.5 text-center text-xs font-medium tabular-nums"
                  style={cellStyle(v)}
                >
                  {v == null ? "—" : `${v}%`}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </Surface>
);

export default CohortGrid;
