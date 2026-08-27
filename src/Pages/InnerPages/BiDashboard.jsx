import { Alert, Button } from "oks-ui";
import { FileDown, Plus, Sparkles } from "lucide-react";
import {
  CardHeader,
  DataTable,
  DonutStat,
  KpiCard,
  SectionTitle,
  StatGroup,
  Surface,
} from "../../Components/ui";
import {
  AI_INSIGHTS,
  BI_KPIS,
  DATA_SOURCES,
  KPI_TARGETS,
  REGIONAL_REACH,
  REPORT_LIBRARY,
} from "../../data/bi";

const TARGET_COLUMNS = [
  { key: "metric", header: "Metric" },
  {
    key: "current",
    header: "Current",
    render: (row) => (
      <span className="font-medium text-[var(--app-fg)]">{row.current}</span>
    ),
  },
  {
    key: "attainment",
    header: "Attainment",
    align: "right",
    render: (row) => (
      <div className="flex items-center justify-end gap-2">
        <div className="h-1.5 w-24 overflow-hidden rounded-full bg-[var(--app-surface-2)]">
          <div
            className="h-full rounded-full"
            style={{
              width: `${row.attainment}%`,
              background:
                row.attainment >= 90
                  ? "var(--oks-color-success-500)"
                  : row.attainment >= 75
                    ? "var(--oks-color-primary-500)"
                    : "var(--oks-color-warning-500)",
            }}
          />
        </div>
        <span className="w-9 text-sm font-medium text-[var(--app-fg)]">
          {row.attainment}%
        </span>
      </div>
    ),
  },
];

const SOURCE_COLUMNS = [
  {
    key: "name",
    header: "Source",
    render: (row) => (
      <div>
        <p className="text-sm font-medium text-[var(--app-fg)]">{row.name}</p>
        <p className="text-xs text-[color:var(--app-fg-subtle)]">{row.detail}</p>
      </div>
    ),
  },
  {
    key: "status",
    header: "Status",
    align: "right",
    render: (row) => (
      <span
        className={`text-xs font-medium ${
          row.status === "Synced"
            ? "text-[color:var(--oks-color-success-600)]"
            : "text-[color:var(--oks-color-warning-600)]"
        }`}
      >
        {row.status}
      </span>
    ),
  },
];

const REPORT_COLUMNS = [
  {
    key: "name",
    header: "Report",
    render: (row) => (
      <div>
        <p className="text-sm font-medium text-[var(--app-fg)]">{row.name}</p>
        <p className="text-xs text-[color:var(--app-fg-subtle)]">{row.type}</p>
      </div>
    ),
  },
  { key: "views", header: "Views", align: "right" },
];

const BiDashboard = () => (
  <div className="space-y-6">
    <SectionTitle
      title="Business intelligence"
      subtitle="KPIs vs. targets, data sources, report library and AI insights."
      actions={
        <>
          <Button
            variant="bordered"
            size="sm"
            startContent={<FileDown size={15} />}
          >
            Export PDF
          </Button>
          <Button color="primary" size="sm" startContent={<Plus size={15} />}>
            New report
          </Button>
        </>
      }
    />

    <StatGroup columns={4}>
      {BI_KPIS.map((kpi) => (
        <KpiCard key={kpi.label} {...kpi} />
      ))}
    </StatGroup>

    <div>
      <p className="mb-3 flex items-center gap-2 text-sm font-semibold text-[var(--app-fg)]">
        <Sparkles size={15} className="text-[color:var(--oks-color-primary-600)]" />
        AI insights
      </p>
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
        {AI_INSIGHTS.map((insight) => (
          <Alert
            key={insight.text}
            variant="soft"
            color="primary"
            icon={<Sparkles size={16} />}
            description={insight.text}
            endContent={
              <span className="text-xs text-[color:var(--app-fg-subtle)]">
                {insight.when}
              </span>
            }
          />
        ))}
      </div>
    </div>

    <Surface padding="none">
      <div className="px-5 pt-5">
        <CardHeader title="KPIs vs. targets" subtitle="Q2 2026" />
      </div>
      <DataTable
        columns={TARGET_COLUMNS}
        rows={KPI_TARGETS}
        getRowKey={(row) => row.metric}
      />
    </Surface>

    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <Surface padding="none">
        <div className="px-5 pt-5">
          <CardHeader title="Data sources" subtitle="4 active" />
        </div>
        <DataTable
          columns={SOURCE_COLUMNS}
          rows={DATA_SOURCES}
          getRowKey={(row) => row.name}
        />
      </Surface>

      <Surface padding="none">
        <div className="flex items-center justify-between px-5 pt-5">
          <CardHeader title="Report library" subtitle="Most viewed" />
          <Button variant="link" size="sm">
            View all
          </Button>
        </div>
        <DataTable
          columns={REPORT_COLUMNS}
          rows={REPORT_LIBRARY}
          getRowKey={(row) => row.name}
        />
      </Surface>
    </div>

    <DonutStat
      title="Regional reach"
      subtitle="Revenue across 6 regions"
      data={REGIONAL_REACH}
      categoryKey="region"
      valueKey="value"
      metaKey="display"
      centerValue="$1.47M"
      centerLabel="total"
    />
  </div>
);

export default BiDashboard;
