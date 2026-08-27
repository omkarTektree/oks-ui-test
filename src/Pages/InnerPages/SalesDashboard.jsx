import { Button } from "oks-ui";
import { Download, Plus } from "lucide-react";
import {
  CardHeader,
  ChartCard,
  DataTable,
  DonutStat,
  EntityCell,
  GoalCard,
  KpiCard,
  RankList,
  SectionTitle,
  StatGroup,
  StatusChip,
  Surface,
} from "../../Components/ui";
import {
  PIPELINE_STATS,
  QUOTA,
  RECENT_DEALS,
  SALES_BY_REGION,
  SALES_KPIS,
  SALES_LEADERBOARD,
  SALES_TREND,
} from "../../data/sales";

const DEAL_COLUMNS = [
  {
    key: "customer",
    header: "Customer",
    render: (row) => <EntityCell name={row.customer} sub={row.industry} />,
  },
  {
    key: "amount",
    header: "Amount",
    align: "right",
    render: (row) => (
      <span className="font-medium text-[var(--app-fg)]">{row.amount}</span>
    ),
  },
  {
    key: "status",
    header: "Status",
    render: (row) => <StatusChip status={row.status} />,
  },
];

const SalesDashboard = () => (
  <div className="space-y-6">
    <SectionTitle
      title="Sales overview"
      subtitle="Team performance, pipeline and recent wins — Q3 2026."
      actions={
        <>
          <Button variant="bordered" size="sm" color="default">
            This quarter
          </Button>
          <Button
            variant="bordered"
            size="sm"
            startContent={<Download size={15} />}
          >
            Export
          </Button>
          <Button color="primary" size="sm" startContent={<Plus size={15} />}>
            New deal
          </Button>
        </>
      }
    />

    <StatGroup columns={4}>
      {SALES_KPIS.map((kpi) => (
        <KpiCard key={kpi.label} {...kpi} />
      ))}
    </StatGroup>

    <StatGroup columns={4}>
      {PIPELINE_STATS.map((item) => (
        <KpiCard key={item.label} {...item} />
      ))}
    </StatGroup>

    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <ChartCard
          title="Sales trend"
          headline="$402,600"
          delta={16}
          deltaLabel="YoY · closed deals value, last 12 months"
          height={260}
          views={[
            {
              key: "closed",
              label: "Closed value",
              data: SALES_TREND,
              x: "month",
              series: "value",
              dataFormat: { prefix: "$", format: "compact" },
            },
          ]}
        />
      </div>

      <GoalCard {...QUOTA} />
    </div>

    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <DonutStat
        title="Sales by region"
        subtitle="Q3 2026"
        data={SALES_BY_REGION}
        categoryKey="region"
        valueKey="value"
        metaKey="display"
        centerValue="$324k"
        centerLabel="closed"
      />

      <RankList
        title="Sales leaderboard"
        subtitle="Top 5 this quarter"
        actions={
          <Button variant="link" size="sm">
            View all
          </Button>
        }
        items={SALES_LEADERBOARD}
      />
    </div>

    <Surface padding="none">
      <div className="flex items-center justify-between px-5 pt-5">
        <CardHeader
          title="Recent deals closed"
          subtitle="Latest activity across the team"
        />
        <Button variant="link" size="sm">
          View all
        </Button>
      </div>
      <DataTable
        columns={DEAL_COLUMNS}
        rows={RECENT_DEALS}
        getRowKey={(row) => row.customer}
      />
    </Surface>
  </div>
);

export default SalesDashboard;
