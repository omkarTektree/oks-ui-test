import { Chart } from "oks-ui";
import Surface from "./Surface";
import CardHeader from "./CardHeader";

// Monochrome brand ramp — CSS vars so the donut re-tints with the theme.
const COLORS = [
  "var(--oks-color-primary-600)",
  "var(--oks-color-primary-500)",
  "var(--oks-color-primary-400)",
  "var(--oks-color-primary-300)",
  "var(--oks-color-primary-200)",
];

/**
 * Donut with a centre total and a labelled percentage legend.
 * `metaKey` names a field shown as a muted count next to each legend row.
 * The chart's own centre number is hidden (`[&_svg_text]:hidden`) so only the
 * styled `centerValue` / `centerLabel` overlay shows.
 */
const DonutStat = ({
  title,
  subtitle,
  data,
  categoryKey,
  valueKey,
  metaKey,
  centerValue,
  centerLabel,
}) => {
  const total = data.reduce((sum, d) => sum + d[valueKey], 0);

  return (
    <Surface padding="md">
      <CardHeader title={title} subtitle={subtitle} />
      <div className="flex flex-col items-center gap-5 sm:flex-row">
        <div className="grid w-[180px] shrink-0 place-items-center [&_svg_text]:hidden">
          <div className="col-start-1 row-start-1 w-full">
            <Chart
              type="donut"
              data={data}
              x={categoryKey}
              series={valueKey}
              height={180}
              legend={{ show: false }}
              tooltip={{ show: true }}
              palette={{ colors: COLORS }}
              ariaLabel={title}
            />
          </div>
          <div className="pointer-events-none col-start-1 row-start-1 flex flex-col items-center text-center">
            <span className="text-lg font-semibold text-[var(--app-fg)]">
              {centerValue}
            </span>
            <span className="text-xs text-[color:var(--app-fg-muted)]">
              {centerLabel}
            </span>
          </div>
        </div>

        <ul className="w-full flex-1 space-y-2.5">
          {data.map((d, i) => (
            <li
              key={d[categoryKey]}
              className="flex items-center gap-2.5 text-sm"
            >
              <span
                className="h-2.5 w-2.5 shrink-0 rounded-full"
                style={{ background: COLORS[i % COLORS.length] }}
              />
              <span className="flex-1 truncate text-[color:var(--app-fg-muted)]">
                {d[categoryKey]}
              </span>
              {metaKey != null && (
                <span className="text-xs text-[color:var(--app-fg-subtle)]">
                  {d[metaKey]}
                </span>
              )}
              <span className="w-9 text-right font-medium text-[var(--app-fg)]">
                {Math.round((d[valueKey] / total) * 100)}%
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Surface>
  );
};

export default DonutStat;
