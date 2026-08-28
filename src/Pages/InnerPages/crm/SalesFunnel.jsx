import { Button } from "oks-ui";
import { Download } from "lucide-react";
import SectionTitle from "../../../Components/ui/SectionTitle";
import Surface from "../../../Components/ui/Surface";
import CardHeader from "../../../Components/ui/CardHeader";
import StatGroup from "../../../Components/ui/StatGroup";
import KpiCard from "../../../Components/ui/KpiCard";
import MeterList from "../../../Components/ui/MeterList";
import DonutStat from "../../../Components/ui/DonutStat";
import DataTable from "../../../Components/ui/DataTable";
import { WIN_LOSS } from "../../../data/crm";

const FUNNEL = [
  { label: "Leads", value: 940, avgDays: null },
  { label: "Qualified", value: 512, avgDays: 4 },
  { label: "Discovery", value: 348, avgDays: 9 },
  { label: "Proposal", value: 236, avgDays: 7 },
  { label: "Negotiation", value: 158, avgDays: 11 },
  { label: "Won", value: 96, avgDays: 5 },
];

const rows = FUNNEL.slice(1).map((stage, i) => {
  const prev = FUNNEL[i];
  return {
    stage: `${prev.label} → ${stage.label}`,
    from: prev.value,
    to: stage.value,
    rate: `${Math.round((stage.value / prev.value) * 100)}%`,
    avgDays: `${stage.avgDays} d`,
  };
});

const KPIS = [
  { label: "Funnel entries", value: "940", delta: 8.6, hint: "leads this quarter" },
  { label: "Lead → Won", value: `${((FUNNEL.at(-1).value / FUNNEL[0].value) * 100).toFixed(1)}%`, delta: 1.2, hint: "overall conversion" },
  { label: "Avg. sales cycle", value: "36 d", delta: 3, deltaDirection: "down", hint: "qualified → won" },
  { label: "Win rate", value: "60%", delta: 5.1, hint: "of closed deals" },
];

const SalesFunnel = () => (
  <div className="space-y-6">
    <SectionTitle
      title="Sales funnel"
      subtitle="Stage-by-stage conversion, this quarter."
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
        <MeterList
          title="Conversion funnel"
          subtitle="Count reaching each stage"
          items={FUNNEL.map((s) => ({ label: s.label, value: s.value }))}
          scaleToMax
          showDropOff
        />
      </div>
      <DonutStat
        title="Win / loss"
        subtitle="Closed deals this quarter"
        data={WIN_LOSS}
        categoryKey="outcome"
        valueKey="value"
        metaKey="meta"
        centerValue={String(WIN_LOSS.reduce((n, d) => n + d.value, 0))}
        centerLabel="closed"
      />
    </div>

    <Surface padding="none">
      <div className="p-5 pb-0">
        <CardHeader title="Stage conversion" subtitle="Rate and time between stages" />
      </div>
      <DataTable
        columns={[
          { key: "stage", header: "Transition", render: (r) => (
            <span className="font-medium text-[var(--app-fg)]">{r.stage}</span>
          ) },
          { key: "from", header: "From", align: "right" },
          { key: "to", header: "To", align: "right" },
          { key: "rate", header: "Conversion", align: "right" },
          { key: "avgDays", header: "Avg. time", align: "right" },
        ]}
        rows={rows}
        getRowKey={(r) => r.stage}
      />
    </Surface>
  </div>
);

export default SalesFunnel;
