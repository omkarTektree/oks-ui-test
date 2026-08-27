import SectionTitle from "../../../Components/ui/SectionTitle";
import Surface from "../../../Components/ui/Surface";
import CardHeader from "../../../Components/ui/CardHeader";
import StatGroup from "../../../Components/ui/StatGroup";
import KpiCard from "../../../Components/ui/KpiCard";
import GoalCard from "../../../Components/ui/GoalCard";
import DataTable from "../../../Components/ui/DataTable";
import StatusChip from "../../../Components/ui/StatusChip";
import { KPI_CARDS, KPI_TARGETS } from "../../../data/charts";

const fmt = (v, unit) =>
  unit === "$" ? `$${v.toLocaleString()}` : `${v.toLocaleString()}${unit}`;

const KpiAnalytics = () => (
  <div className="space-y-6">
    <SectionTitle
      title="KPI analytics"
      subtitle="Every headline metric against its target for the period."
    />

    <StatGroup columns={4}>
      {KPI_CARDS.map((k) => (
        <KpiCard key={k.label} {...k} />
      ))}
    </StatGroup>

    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      <GoalCard
        title="Quarter to target"
        percent={82}
        current="$1.31M"
        target="$1.60M"
        currentLabel="Bookings QTD"
        note="On pace to hit target"
      />
      <div className="lg:col-span-2">
        <Surface padding="none">
          <div className="p-5 pb-0">
            <CardHeader title="KPI vs target" subtitle="Current period" />
          </div>
          <DataTable
            columns={[
              { key: "metric", header: "Metric", render: (r) => (
                <span className="font-medium text-[var(--app-fg)]">{r.metric}</span>
              ) },
              { key: "actual", header: "Actual", align: "right", render: (r) => fmt(r.actual, r.unit) },
              { key: "target", header: "Target", align: "right", render: (r) => fmt(r.target, r.unit) },
              {
                key: "status", header: "Status", align: "right",
                render: (r) => (
                  <StatusChip status={r.actual >= r.target ? "On track" : "At risk"} />
                ),
              },
            ]}
            rows={KPI_TARGETS}
            getRowKey={(r) => r.metric}
          />
        </Surface>
      </div>
    </div>
  </div>
);

export default KpiAnalytics;
