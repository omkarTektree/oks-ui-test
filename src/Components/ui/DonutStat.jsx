import { Chart } from "oks-ui";
import Surface from "./Surface";
import CardHeader from "./CardHeader";

const COLORS = ["#6d5bdb", "#8a7ae6", "#ada2ef", "#cdc7f6", "#e6e3fb"];

/** Donut with a centre total and a labelled percentage legend. */
const DonutStat = ({
  title,
  subtitle,
  data,
  categoryKey,
  valueKey,
  centerValue,
  centerLabel,
}) => {
  const total = data.reduce((sum, d) => sum + d[valueKey], 0);

  return (
    <Surface padding="md">
      <CardHeader title={title} subtitle={subtitle} />
      <div className="flex flex-col items-center gap-5 sm:flex-row">
        <div className="relative w-[180px] shrink-0">
          <Chart
            type="donut"
            data={data}
            x={categoryKey}
            series={valueKey}
            height={180}
            legend={{ show: false }}
            palette={{ colors: COLORS }}
            ariaLabel={title}
          />
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
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
              <span className="font-medium text-[var(--app-fg)]">
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
