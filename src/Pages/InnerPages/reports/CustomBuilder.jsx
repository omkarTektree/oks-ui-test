import { useState } from "react";
import { Button, Chip } from "oks-ui";
import { Play, Save, Table2, BarChart3 } from "lucide-react";
import SectionTitle from "../../../Components/ui/SectionTitle";
import Surface from "../../../Components/ui/Surface";
import CardHeader from "../../../Components/ui/CardHeader";
import ChartCard from "../../../Components/ui/ChartCard";
import { MONTHLY } from "../../../data/charts";

const METRICS = ["Revenue", "MRR", "Signups", "Active users", "Churn", "Orders", "AOV", "Pipeline"];
const DIMENSIONS = ["Date", "Plan", "Region", "Channel", "Team", "Product"];
const DATE_RANGES = ["Last 7 days", "Last 30 days", "This quarter", "This year", "Custom"];

const CustomBuilder = () => {
  const [metrics, setMetrics] = useState(["Revenue", "Signups"]);
  const [dimension, setDimension] = useState("Date");
  const [range, setRange] = useState("Last 30 days");
  const [viz, setViz] = useState("chart");

  const toggleMetric = (m) =>
    setMetrics((cur) => (cur.includes(m) ? cur.filter((x) => x !== m) : [...cur, m]));

  return (
    <div className="space-y-6">
      <SectionTitle
        title="Custom report builder"
        subtitle="Pick metrics and a dimension, preview, then save the report."
        actions={
          <>
            <Button variant="bordered" size="sm" startContent={<Save size={15} />}>
              Save report
            </Button>
            <Button color="primary" size="sm" startContent={<Play size={15} />}>
              Run
            </Button>
          </>
        }
      />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[18rem_1fr]">
        <div className="space-y-4">
          <Surface>
            <CardHeader title="Metrics" subtitle="One or more" />
            <div className="flex flex-wrap gap-2">
              {METRICS.map((m) => (
                <Chip
                  key={m}
                  size="sm"
                  variant={metrics.includes(m) ? "solid" : "bordered"}
                  color={metrics.includes(m) ? "primary" : "default"}
                  className="cursor-pointer"
                  onClick={() => toggleMetric(m)}
                >
                  {m}
                </Chip>
              ))}
            </div>
          </Surface>

          <Surface>
            <CardHeader title="Group by" />
            <div className="flex flex-wrap gap-2">
              {DIMENSIONS.map((d) => (
                <Chip
                  key={d}
                  size="sm"
                  variant={dimension === d ? "solid" : "bordered"}
                  color={dimension === d ? "primary" : "default"}
                  className="cursor-pointer"
                  onClick={() => setDimension(d)}
                >
                  {d}
                </Chip>
              ))}
            </div>
          </Surface>

          <Surface>
            <CardHeader title="Date range" />
            <div className="flex flex-col gap-1.5">
              {DATE_RANGES.map((r) => (
                <button
                  key={r}
                  type="button"
                  onClick={() => setRange(r)}
                  className={`rounded-[var(--oks-radius-md)] px-2.5 py-1.5 text-left text-sm transition-colors hover:bg-[var(--app-surface-2)] ${
                    range === r
                      ? "bg-[var(--app-surface-2)] font-medium text-[var(--app-fg)]"
                      : "text-[color:var(--app-fg-muted)]"
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
          </Surface>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-sm text-[color:var(--app-fg-muted)]">
              {metrics.length > 0 ? metrics.join(" · ") : "No metrics selected"}
              {" "}by {dimension.toLowerCase()} · {range.toLowerCase()}
            </p>
            <div className="flex items-center gap-1 rounded-[var(--oks-radius-md)] border border-[color:var(--app-border)] p-0.5">
              <button
                type="button"
                onClick={() => setViz("chart")}
                className={`rounded p-1.5 ${viz === "chart" ? "bg-[var(--app-surface-2)] text-[var(--app-fg)]" : "text-[color:var(--app-fg-subtle)]"}`}
              >
                <BarChart3 size={15} />
              </button>
              <button
                type="button"
                onClick={() => setViz("table")}
                className={`rounded p-1.5 ${viz === "table" ? "bg-[var(--app-surface-2)] text-[var(--app-fg)]" : "text-[color:var(--app-fg-subtle)]"}`}
              >
                <Table2 size={15} />
              </button>
            </div>
          </div>

          {viz === "chart" ? (
            <ChartCard
              title="Preview"
              views={[
                {
                  key: "preview",
                  label: metrics.join(" · ") || "Preview",
                  data: MONTHLY,
                  x: "month",
                  series:
                    metrics.length > 1
                      ? [
                          { key: "revenue", name: metrics[0] },
                          { key: "signups", name: metrics[1] },
                        ]
                      : "revenue",
                  dataFormat: { format: "compact" },
                },
              ]}
              height={340}
            />
          ) : (
            <Surface padding="none">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-[color:var(--app-border)] text-left text-xs font-semibold uppercase tracking-wide text-[color:var(--app-fg-subtle)]">
                      <th className="px-4 py-2.5">{dimension}</th>
                      {(metrics.length ? metrics : ["Value"]).map((m) => (
                        <th key={m} className="px-4 py-2.5 text-right">{m}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {MONTHLY.map((row) => (
                      <tr key={row.month} className="border-b border-[color:var(--app-border)] last:border-0">
                        <td className="px-4 py-2.5 font-medium text-[var(--app-fg)]">{row.month}</td>
                        {(metrics.length ? metrics : ["Value"]).map((m, i) => (
                          <td key={m} className="px-4 py-2.5 text-right text-[color:var(--app-fg-muted)]">
                            {i === 0 ? `$${row.revenue.toLocaleString()}` : row.signups.toLocaleString()}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Surface>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomBuilder;
