import { Button } from "oks-ui";
import { Plus } from "lucide-react";
import {
  CardHeader,
  ChartCard,
  DataTable,
  DonutStat,
  EntityCell,
  KpiCard,
  MeterList,
  SectionTitle,
  StatGroup,
  StatusChip,
  Surface,
} from "../../Components/ui";
import {
  CAMPAIGNS,
  CHANNEL_ROAS,
  MARKETING_FUNNEL,
  MARKETING_KPIS,
  SPEND_LEADS,
  TRAFFIC_BY_CHANNEL,
} from "../../data/marketing";

const compactNumber = (n) =>
  n >= 1_000_000
    ? `${(n / 1_000_000).toFixed(1)}M`
    : n >= 1_000
      ? `${Math.round(n / 1_000)}k`
      : `${n}`;

const CAMPAIGN_COLUMNS = [
  {
    key: "name",
    header: "Campaign",
    render: (row) => <EntityCell name={row.name} sub={row.channel} />,
  },
  { key: "budget", header: "Budget", align: "right" },
  {
    key: "roas",
    header: "ROAS",
    align: "right",
    render: (row) => (
      <span className="font-medium text-[var(--app-fg)]">{row.roas}</span>
    ),
  },
  {
    key: "status",
    header: "Status",
    render: (row) => <StatusChip status={row.status} />,
  },
];

const MarketingDashboard = () => (
  <div className="space-y-6">
    <SectionTitle
      title="Marketing overview"
      subtitle="Spend, leads and campaign performance — this month."
      actions={
        <>
          <Button variant="bordered" size="sm" color="default">
            This month
          </Button>
          <Button color="primary" size="sm" startContent={<Plus size={15} />}>
            New campaign
          </Button>
        </>
      }
    />

    <StatGroup columns={4}>
      {MARKETING_KPIS.map((kpi) => (
        <KpiCard key={kpi.label} {...kpi} />
      ))}
    </StatGroup>

    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <ChartCard
          title="Spend & leads"
          delta={9}
          deltaLabel="leads vs. last month"
          stats={[
            { label: "Ad spend", value: "$48.3k" },
            { label: "New leads", value: "3,842" },
          ]}
          height={260}
          views={[
            {
              key: "spend-leads",
              label: "Spend & leads",
              type: "area",
              data: SPEND_LEADS,
              x: "month",
              series: [
                { key: "spend", name: "Spend" },
                { key: "leads", name: "Leads" },
              ],
              dataFormat: { format: "compact" },
            },
          ]}
        />
      </div>

      <DonutStat
        title="Traffic by channel"
        subtitle="Sessions this month"
        data={TRAFFIC_BY_CHANNEL}
        categoryKey="channel"
        valueKey="sessions"
        centerValue="101k"
        centerLabel="sessions"
      />
    </div>

    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <MeterList
        title="Marketing funnel"
        subtitle="Impression to customer this month"
        items={MARKETING_FUNNEL}
        scaleToMax
        showDropOff
        formatValue={compactNumber}
      />
      <MeterList
        title="Campaign ROAS"
        subtitle="Return on ad spend by campaign"
        items={CHANNEL_ROAS}
        scaleToMax
      />
    </div>

    <Surface padding="none">
      <div className="flex items-center justify-between px-5 pt-5">
        <CardHeader title="Active campaigns" subtitle="All channels" />
        <Button variant="link" size="sm">
          Manage all
        </Button>
      </div>
      <DataTable
        columns={CAMPAIGN_COLUMNS}
        rows={CAMPAIGNS}
        getRowKey={(row) => row.name}
      />
    </Surface>
  </div>
);

export default MarketingDashboard;
