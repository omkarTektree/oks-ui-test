import { Button } from "oks-ui";
import { Download, Plus } from "lucide-react";
import {
  ActivityFeed,
  CardHeader,
  ChartCard,
  DataTable,
  DonutStat,
  EntityCell,
  GoalCard,
  KpiCard,
  MeterList,
  SectionTitle,
  StatGroup,
  StatusChip,
  Surface,
} from "../../Components/ui";
import {
  ACTIVITY,
  DEVICE_SESSIONS,
  FUNNEL,
  KPIS,
  MONTHLY_TARGET,
  REVENUE_SERIES,
  TOP_PRODUCTS,
  TRAFFIC_SOURCES,
} from "../../data/analytics";

const PRODUCT_COLUMNS = [
  {
    key: "product",
    header: "Product",
    render: (row) => <EntityCell name={row.name} sub={row.sku} />,
  },
  { key: "channel", header: "Channel" },
  { key: "sales", header: "Sales", align: "right" },
  {
    key: "revenue",
    header: "Revenue",
    align: "right",
    render: (row) => (
      <span className="font-medium text-[var(--app-fg)]">{row.revenue}</span>
    ),
  },
  {
    key: "status",
    header: "Status",
    render: (row) => <StatusChip status={row.status} />,
  },
];

const Dashboard = () => (
  <div className="space-y-6">
    <SectionTitle
      title="Welcome back, Admin"
      subtitle="Here's what's happening across your workspace today."
      actions={
        <>
          <Button variant="bordered" size="sm" color="default">
            Last 30 days
          </Button>
          <Button
            variant="bordered"
            size="sm"
            startContent={<Download size={15} />}
          >
            Export
          </Button>
          <Button color="primary" size="sm" startContent={<Plus size={15} />}>
            Add widget
          </Button>
        </>
      }
    />

    <StatGroup columns={4}>
      {KPIS.map((kpi) => (
        <KpiCard key={kpi.label} {...kpi} />
      ))}
    </StatGroup>

    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <ChartCard
          title="Revenue overview"
          headline="$486,200"
          delta={18.2}
          deltaLabel="vs. last year"
          views={[
            {
              key: "revenue",
              label: "Revenue",
              data: REVENUE_SERIES,
              x: "month",
              series: "revenue",
              dataFormat: { prefix: "$", format: "compact" },
            },
            {
              key: "orders",
              label: "Orders",
              data: REVENUE_SERIES,
              x: "month",
              series: "orders",
              dataFormat: { format: "compact" },
            },
            {
              key: "sessions",
              label: "Sessions",
              data: REVENUE_SERIES,
              x: "month",
              series: "sessions",
              dataFormat: { format: "compact" },
            },
          ]}
        />
      </div>

      <DonutStat
        title="Traffic sources"
        subtitle="Where your visits come from"
        data={TRAFFIC_SOURCES}
        categoryKey="source"
        valueKey="visits"
        centerValue="84.2k"
        centerLabel="Total visits"
      />
    </div>

    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      <MeterList
        title="Conversion funnel"
        subtitle="Last 30 days journey"
        items={FUNNEL}
        scaleToMax
        showDropOff
      />
      <MeterList
        title="Sessions by device"
        subtitle="Share of total sessions"
        items={DEVICE_SESSIONS}
      />
      <GoalCard title="Monthly target" {...MONTHLY_TARGET} />
    </div>

    <Surface padding="none">
      <div className="flex items-center justify-between px-5 pt-5">
        <CardHeader
          title="Top performing products"
          subtitle="By revenue this month"
        />
        <Button variant="link" size="sm">
          View all
        </Button>
      </div>
      <DataTable
        columns={PRODUCT_COLUMNS}
        rows={TOP_PRODUCTS}
        getRowKey={(row) => row.sku}
      />
    </Surface>

    <Surface padding="none">
      <div className="px-5 pt-5">
        <CardHeader
          title="Recent activity"
          subtitle="Latest events across the workspace"
        />
      </div>
      <ActivityFeed items={ACTIVITY} />
    </Surface>
  </div>
);

export default Dashboard;
