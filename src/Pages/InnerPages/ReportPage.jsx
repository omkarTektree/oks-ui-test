import { Button } from "oks-ui";
import { Download, CalendarRange } from "lucide-react";
import SectionTitle from "../../Components/ui/SectionTitle";
import Surface from "../../Components/ui/Surface";
import CardHeader from "../../Components/ui/CardHeader";
import StatGroup from "../../Components/ui/StatGroup";
import KpiCard from "../../Components/ui/KpiCard";
import ChartCard from "../../Components/ui/ChartCard";
import DonutStat from "../../Components/ui/DonutStat";
import MeterList from "../../Components/ui/MeterList";
import DataTable from "../../Components/ui/DataTable";
import StatusChip from "../../Components/ui/StatusChip";
import TrendChip from "../../Components/ui/TrendChip";

const money = (n) => {
  if (typeof n !== "number") return n;
  return `${n < 0 ? "−" : ""}$${Math.abs(n).toLocaleString()}`;
};

const cell = (format) => {
  if (format === "money") return (r, k) => (
    <span
      className={
        typeof r[k] === "number" && r[k] < 0
          ? "font-medium text-[color:var(--oks-color-danger-600)]"
          : "font-medium text-[var(--app-fg)]"
      }
    >
      {money(r[k])}
    </span>
  );
  if (format === "strong") return (r, k) => (
    <span className="font-medium text-[var(--app-fg)]">{r[k]}</span>
  );
  if (format === "status") return (r, k) => <StatusChip status={r[k]} />;
  if (format === "trend") return (r, k) => <TrendChip value={r[k]} />;
  return undefined;
};

/**
 * Config-driven report screen.
 * `config` = {
 *   title, subtitle, period?,
 *   kpis: [{ label, value, delta?, hint? }],
 *   chart: { title, headline?, delta?, deltaLabel?, views: [...] },
 *   breakdown?: { kind: "donut" | "meter", ... },
 *   table: { title, subtitle?, columns: [{ key, header, align?, format? }], rows, getRowKey },
 * }
 */
const ReportPage = ({ config }) => {
  const { title, subtitle, period = "Last 30 days", kpis = [], chart, breakdown, table } = config;

  return (
    <div className="space-y-6">
      <SectionTitle
        title={title}
        subtitle={subtitle}
        actions={
          <>
            <Button variant="bordered" size="sm" startContent={<CalendarRange size={15} />}>
              {period}
            </Button>
            <Button color="primary" size="sm" startContent={<Download size={15} />}>
              Export
            </Button>
          </>
        }
      />

      {kpis.length > 0 && (
        <StatGroup columns={kpis.length === 3 ? 3 : 4}>
          {kpis.map((k) => (
            <KpiCard key={k.label} {...k} />
          ))}
        </StatGroup>
      )}

      {chart && (
        <div className={breakdown ? "grid grid-cols-1 gap-6 lg:grid-cols-3" : ""}>
          <div className={breakdown ? "lg:col-span-2" : ""}>
            <ChartCard {...chart} />
          </div>
          {breakdown?.kind === "donut" && (
            <DonutStat {...breakdown} />
          )}
          {breakdown?.kind === "meter" && (
            <MeterList {...breakdown} />
          )}
        </div>
      )}

      {table && (
        <Surface padding="none">
          <div className="p-5 pb-0">
            <CardHeader title={table.title} subtitle={table.subtitle} />
          </div>
          <DataTable
            columns={table.columns.map((c) => ({
              ...c,
              render: cell(c.format)
                ? (row) => cell(c.format)(row, c.key)
                : undefined,
            }))}
            rows={table.rows}
            getRowKey={table.getRowKey}
            pageSize={table.pageSize}
          />
        </Surface>
      )}
    </div>
  );
};

export default ReportPage;
