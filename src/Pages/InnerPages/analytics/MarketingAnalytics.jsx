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
import DataTable from "../../../Components/ui/DataTable";
import StatusChip from "../../../Components/ui/StatusChip";
import {
  MARKETING_KPIS, SPEND_LEADS, TRAFFIC_BY_CHANNEL, MARKETING_FUNNEL, CHANNEL_ROAS,
} from "../../../data/marketing";
import { MKT_EMAIL_LIST } from "../../../data/lists";

const MarketingAnalytics = () => (
  <div className="space-y-6">
    <SectionTitle
      title="Marketing analytics"
      subtitle="Channel efficiency, the funnel, and campaign engagement."
      actions={
        <Button variant="bordered" size="sm" startContent={<Download size={15} />}>
          Export
        </Button>
      }
    />

    <StatGroup columns={4}>
      {MARKETING_KPIS.map((k) => (
        <KpiCard key={k.label} {...k} />
      ))}
    </StatGroup>

    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <ChartCard
          title="Spend vs leads"
          headline="$48,290"
          delta={9.4}
          deltaLabel="leads vs. last month"
          height={300}
          views={[
            {
              key: "both", label: "Both", data: SPEND_LEADS, x: "month",
              series: [{ key: "spend", name: "Spend" }, { key: "leads", name: "Leads" }],
              dataFormat: { format: "compact" },
            },
            { key: "spend", label: "Spend", data: SPEND_LEADS, x: "month", series: "spend", dataFormat: { prefix: "$", format: "compact" } },
          ]}
        />
      </div>
      <DonutStat
        title="Traffic by channel"
        subtitle="Sessions, last 30 days"
        data={TRAFFIC_BY_CHANNEL}
        categoryKey="channel"
        valueKey="sessions"
        centerValue="100.8k"
        centerLabel="sessions"
      />
    </div>

    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <MeterList
        title="Marketing funnel"
        subtitle="Impressions to customers"
        items={MARKETING_FUNNEL}
        scaleToMax
        showDropOff
      />
      <MeterList
        title="ROAS by campaign"
        subtitle="Return on ad spend"
        items={CHANNEL_ROAS}
        scaleToMax
        formatValue={(v) => `${v}x`}
      />
    </div>

    <Surface padding="none">
      <div className="p-5 pb-0">
        <CardHeader title="Email campaign engagement" subtitle="Recent sends" />
      </div>
      <DataTable
        columns={[
          { key: "name", header: "Campaign", render: (r) => (
            <span className="font-medium text-[var(--app-fg)]">{r.name}</span>
          ) },
          { key: "sent", header: "Sent", align: "right", sortable: true, render: (r) => r.sent.toLocaleString() },
          { key: "openRate", header: "Open rate", align: "right" },
          { key: "clickRate", header: "Click rate", align: "right" },
          { key: "status", header: "Status", render: (r) => <StatusChip status={r.status} /> },
        ]}
        rows={MKT_EMAIL_LIST}
        getRowKey={(r) => r.id}
        pageSize={10}
      />
    </Surface>
  </div>
);

export default MarketingAnalytics;
