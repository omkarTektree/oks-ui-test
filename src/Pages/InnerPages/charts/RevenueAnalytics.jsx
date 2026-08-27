import SectionTitle from "../../../Components/ui/SectionTitle";
import Surface from "../../../Components/ui/Surface";
import CardHeader from "../../../Components/ui/CardHeader";
import StatGroup from "../../../Components/ui/StatGroup";
import KpiCard from "../../../Components/ui/KpiCard";
import ChartCard from "../../../Components/ui/ChartCard";
import DonutStat from "../../../Components/ui/DonutStat";
import MeterList from "../../../Components/ui/MeterList";
import DataTable from "../../../Components/ui/DataTable";
import TrendChip from "../../../Components/ui/TrendChip";
import { Chip } from "oks-ui";
import { MONTHLY, PLAN_MIX, REGIONS, TOP_ACCOUNTS } from "../../../data/charts";

const REV_KPIS = [
  { label: "MRR", value: "$486.2k", delta: 12.4, hint: "monthly recurring" },
  { label: "New MRR", value: "$42.8k", delta: 6.1, hint: "this month" },
  { label: "Expansion MRR", value: "$11.3k", delta: 9.4, hint: "upgrades" },
  { label: "Churned MRR", value: "$7.9k", delta: 2.2, deltaDirection: "down", hint: "downgrades + cancels" },
];

const RevenueAnalytics = () => (
  <div className="space-y-6">
    <SectionTitle
      title="Revenue analytics"
      subtitle="Where recurring revenue comes from and how it's moving."
    />

    <StatGroup columns={4}>
      {REV_KPIS.map((k) => (
        <KpiCard key={k.label} {...k} />
      ))}
    </StatGroup>

    <ChartCard
      title="Revenue vs expenses"
      headline="$486,200"
      delta={12.4}
      deltaLabel="MRR vs. last year"
      views={[
        {
          key: "both", label: "Both", data: MONTHLY, x: "month",
          series: [{ key: "revenue", name: "Revenue" }, { key: "expenses", name: "Expenses" }],
          dataFormat: { prefix: "$", format: "compact" },
        },
        { key: "rev", label: "Revenue", data: MONTHLY, x: "month", series: "revenue", dataFormat: { prefix: "$", format: "compact" } },
      ]}
      height={320}
    />

    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <DonutStat
        title="Revenue by plan"
        subtitle="Share of MRR"
        data={PLAN_MIX}
        categoryKey="plan"
        valueKey="value"
        centerValue="$486k"
        centerLabel="MRR"
      />
      <MeterList
        title="Revenue by region"
        subtitle="Trailing 12 months"
        items={REGIONS.map((r) => ({ label: r.region, value: r.value }))}
        scaleToMax
        formatValue={(v) => `$${(v / 1000).toFixed(0)}k`}
      />
    </div>

    <Surface padding="none">
      <div className="p-5 pb-0">
        <CardHeader title="Top accounts" subtitle="By monthly recurring revenue" />
      </div>
      <DataTable
        columns={[
          { key: "name", header: "Account", render: (r) => (
            <span className="font-medium text-[var(--app-fg)]">{r.name}</span>
          ) },
          { key: "plan", header: "Plan", render: (r) => (
            <Chip size="sm" variant="soft" color={r.plan === "Enterprise" ? "primary" : "default"}>
              {r.plan}
            </Chip>
          ) },
          { key: "seats", header: "Seats", align: "right" },
          { key: "mrr", header: "MRR", align: "right", render: (r) => `$${r.mrr.toLocaleString()}` },
          { key: "trend", header: "Trend", align: "right", render: (r) => <TrendChip value={r.trend} /> },
        ]}
        rows={TOP_ACCOUNTS}
        getRowKey={(r) => r.name}
      />
    </Surface>
  </div>
);

export default RevenueAnalytics;
