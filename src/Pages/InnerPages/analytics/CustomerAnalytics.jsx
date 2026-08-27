import { Button } from "oks-ui";
import { Download } from "lucide-react";
import SectionTitle from "../../../Components/ui/SectionTitle";
import Surface from "../../../Components/ui/Surface";
import CardHeader from "../../../Components/ui/CardHeader";
import StatGroup from "../../../Components/ui/StatGroup";
import KpiCard from "../../../Components/ui/KpiCard";
import ChartCard from "../../../Components/ui/ChartCard";
import DonutStat from "../../../Components/ui/DonutStat";
import MeterList from "../../../Components/ui/MeterList";
import CohortGrid from "../../../Components/ui/CohortGrid";
import DataTable from "../../../Components/ui/DataTable";
import { EntityCell } from "../../../Components/ui";
import { MONTHLY, RETENTION_COLUMNS, RETENTION_ROWS } from "../../../data/charts";
import { CUSTOMERS_LIST } from "../../../data/lists";

const money = (n) => `$${n.toLocaleString()}`;

const KPIS = [
  { label: "Customers", value: "2,480", delta: 6.5, hint: "with ≥ 1 order" },
  { label: "New this month", value: "48", delta: 8.0, hint: "first purchase" },
  { label: "Repeat rate", value: "41%", delta: 2.2, hint: "2+ orders" },
  { label: "Avg. LTV", value: "$1,840", delta: 3.4, hint: "lifetime value" },
];

const SPEND_BANDS = [
  { band: "$0 – $500", n: CUSTOMERS_LIST.filter((c) => c.spend < 500).length },
  { band: "$500 – $2k", n: CUSTOMERS_LIST.filter((c) => c.spend >= 500 && c.spend < 2000).length },
  { band: "$2k – $5k", n: CUSTOMERS_LIST.filter((c) => c.spend >= 2000 && c.spend < 5000).length },
  { band: "$5k+", n: CUSTOMERS_LIST.filter((c) => c.spend >= 5000).length },
];

const topCustomers = [...CUSTOMERS_LIST].sort((a, b) => b.spend - a.spend).slice(0, 8);

const ACQUISITION = [
  { channel: "Organic search", value: 17 },
  { channel: "Paid ads", value: 12 },
  { channel: "Referral", value: 9 },
  { channel: "Social", value: 6 },
  { channel: "Marketplace", value: 4 },
];
const acquisitionTotal = ACQUISITION.reduce((s, a) => s + a.value, 0);

const CustomerAnalytics = () => (
  <div className="space-y-6">
    <SectionTitle
      title="Customer analytics"
      subtitle="Acquisition, retention and value across the customer base."
      actions={
        <Button variant="bordered" size="sm" startContent={<Download size={15} />}>
          Export
        </Button>
      }
    />

    <StatGroup columns={4}>
      {KPIS.map((k) => (
        <KpiCard key={k.label} {...k} />
      ))}
    </StatGroup>

    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <ChartCard
          title="Customer growth"
          height={300}
          views={[
            { key: "total", label: "Total base", data: MONTHLY, x: "month", series: "users", dataFormat: { format: "compact" } },
            { key: "new", label: "New / month", data: MONTHLY, x: "month", series: "signups", dataFormat: { format: "compact" } },
          ]}
        />
      </div>
      <DonutStat
        title="Acquisition channel"
        subtitle="New customers, last 30 days"
        data={ACQUISITION}
        categoryKey="channel"
        valueKey="value"
        centerValue={String(acquisitionTotal)}
        centerLabel="new"
      />
    </div>

    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <CohortGrid
        title="Repeat-purchase retention"
        subtitle="% of a monthly cohort ordering again"
        columns={RETENTION_COLUMNS}
        rows={RETENTION_ROWS}
      />
      <MeterList
        title="Customers by spend band"
        subtitle="Lifetime spend"
        items={SPEND_BANDS.map((s) => ({ label: s.band, value: s.n }))}
        scaleToMax
        unit=""
      />
    </div>

    <Surface padding="none">
      <div className="p-5 pb-0">
        <CardHeader title="Top customers" subtitle="By lifetime spend" />
      </div>
      <DataTable
        columns={[
          { key: "name", header: "Customer", render: (r) => <EntityCell name={r.name} sub={r.company} /> },
          { key: "orders", header: "Orders", align: "right", sortable: true },
          { key: "spend", header: "Lifetime spend", align: "right", sortable: true, render: (r) => (
            <span className="font-medium text-[var(--app-fg)]">{money(r.spend)}</span>
          ) },
          { key: "aov", header: "Avg. order", align: "right", render: (r) => money(Math.round(r.spend / r.orders)) },
        ]}
        rows={topCustomers}
        getRowKey={(r) => r.id}
      />
    </Surface>
  </div>
);

export default CustomerAnalytics;
