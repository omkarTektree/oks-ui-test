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
  StatTile,
  StatusChip,
  Surface,
  TrendChip,
} from "../../Components/ui";
import {
  ECOM_KPIS,
  ECOM_TILES,
  FULFILMENT,
  RECENT_ORDERS,
  SALES_BY_CATEGORY,
  SALES_BY_DAY,
  TOP_SELLING,
} from "../../data/ecommerce";

const TOP_SELLING_COLUMNS = [
  {
    key: "product",
    header: "Product",
    render: (row) => <EntityCell name={row.name} sub={row.category} />,
  },
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
    key: "trend",
    header: "Trend",
    align: "right",
    render: (row) => (
      <div className="flex justify-end">
        <TrendChip value={row.trend} />
      </div>
    ),
  },
];

const ORDER_COLUMNS = [
  {
    key: "id",
    header: "Order",
    render: (row) => (
      <span className="font-medium text-[var(--app-fg)]">{row.id}</span>
    ),
  },
  {
    key: "customer",
    header: "Customer",
    render: (row) => <EntityCell name={row.customer} />,
  },
  { key: "date", header: "Date" },
  { key: "items", header: "Items", align: "right" },
  {
    key: "total",
    header: "Total",
    align: "right",
    render: (row) => (
      <span className="font-medium text-[var(--app-fg)]">{row.total}</span>
    ),
  },
  {
    key: "status",
    header: "Status",
    render: (row) => <StatusChip status={row.status} />,
  },
];

const EcommerceDashboard = () => (
  <div className="space-y-6">
    <SectionTitle
      title="Ecommerce overview"
      subtitle="Sales, fulfilment and product performance this week."
      actions={
        <Button color="primary" size="sm" startContent={<Plus size={15} />}>
          Add product
        </Button>
      }
    />

    <StatGroup columns={4}>
      {ECOM_KPIS.map((kpi) => (
        <KpiCard key={kpi.label} {...kpi} />
      ))}
    </StatGroup>

    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <ChartCard
          title="Sales this week"
          headline="$77,800"
          delta={14}
          deltaLabel="vs. last week"
          height={260}
          views={[
            {
              key: "sales",
              label: "Sales",
              type: "column",
              data: SALES_BY_DAY,
              x: "day",
              series: "sales",
              dataFormat: { prefix: "$", format: "compact" },
            },
          ]}
        />
      </div>

      <DonutStat
        title="Order fulfilment"
        subtitle="804 orders this week"
        data={FULFILMENT}
        categoryKey="status"
        valueKey="count"
        metaKey="count"
        centerValue="804"
        centerLabel="orders"
      />
    </div>

    <Surface padding="md">
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {ECOM_TILES.map((tile) => (
          <StatTile key={tile.label} {...tile} />
        ))}
      </div>
    </Surface>

    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      <MeterList
        title="Sales by category"
        subtitle="Revenue this week"
        items={SALES_BY_CATEGORY}
        scaleToMax
      />

      <div className="lg:col-span-2">
        <Surface padding="none">
          <div className="flex items-center justify-between px-5 pt-5">
            <CardHeader title="Top selling products" subtitle="By revenue" />
            <Button variant="link" size="sm">
              View all
            </Button>
          </div>
          <DataTable
            columns={TOP_SELLING_COLUMNS}
            rows={TOP_SELLING}
            getRowKey={(row) => row.name}
          />
        </Surface>
      </div>
    </div>

    <Surface padding="none">
      <div className="flex items-center justify-between px-5 pt-5">
        <CardHeader title="Recent orders" subtitle="Latest across all channels" />
        <Button variant="link" size="sm">
          View all orders
        </Button>
      </div>
      <DataTable
        columns={ORDER_COLUMNS}
        rows={RECENT_ORDERS}
        getRowKey={(row) => row.id}
      />
    </Surface>
  </div>
);

export default EcommerceDashboard;
