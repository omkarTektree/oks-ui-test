import { useState } from "react";
import { Chart, Tab, Tabs } from "oks-ui";
import Surface from "./Surface";
import TrendChip from "./TrendChip";

/**
 * A titled chart block with an optional series switcher.
 * `views` = [{ key, label, type?, data, x, series, dataFormat? }]
 */
const ChartCard = ({
  title,
  headline,
  delta,
  deltaLabel,
  views,
  height = 300,
}) => {
  const [key, setKey] = useState(views[0].key);
  const view = views.find((v) => v.key === key) ?? views[0];

  return (
    <Surface padding="none">
      <div className="flex flex-wrap items-start justify-between gap-3 p-5 pb-0">
        <div>
          <p className="text-sm font-semibold text-[var(--app-fg)]">{title}</p>
          {headline != null && (
            <div className="mt-1 flex flex-wrap items-center gap-2">
              <span className="text-2xl font-semibold tracking-tight text-[var(--app-fg)]">
                {headline}
              </span>
              {delta != null && <TrendChip value={delta} />}
              {deltaLabel && (
                <span className="text-xs text-[color:var(--app-fg-subtle)]">
                  {deltaLabel}
                </span>
              )}
            </div>
          )}
        </div>

        {views.length > 1 && (
          <Tabs
            size="sm"
            variant="soft"
            selectedKey={key}
            onSelectionChange={(k) => setKey(String(k))}
            aria-label={`${title} series`}
          >
            {views.map((v) => (
              <Tab key={v.key} title={v.label} />
            ))}
          </Tabs>
        )}
      </div>

      <div className="px-3 pb-3 pt-4">
        <Chart
          type={view.type ?? "area"}
          data={view.data}
          x={view.x}
          series={view.series}
          height={height}
          legend={{ show: false }}
          grid={{ vertical: false }}
          dataFormat={view.dataFormat}
          palette={{ roles: ["primary"] }}
          axisY={{ tickCount: 4 }}
          ariaLabel={`${title} — ${view.label}`}
        />
      </div>
    </Surface>
  );
};

export default ChartCard;
