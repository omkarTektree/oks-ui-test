import { Button } from "oks-ui";
import { Download, Plus } from "lucide-react";
import {
  CardHeader,
  ChartCard,
  DataTable,
  DonutStat,
  GoalCard,
  KpiCard,
  MeterList,
  SectionTitle,
  StatGroup,
  StatTile,
  StatusChip,
  Surface,
} from "../../Components/ui";
import {
  DELIVERY_STATUS,
  FLEET,
  IN_TRANSIT,
  LOGISTICS_KPIS,
  REGIONAL_PERFORMANCE,
  SHIPMENT_VOLUME,
  WAREHOUSES,
} from "../../data/logistics";

const SHIPMENT_COLUMNS = [
  {
    key: "id",
    header: "Shipment",
    render: (row) => (
      <span className="font-medium text-[var(--app-fg)]">{row.id}</span>
    ),
  },
  { key: "destination", header: "Destination" },
  { key: "carrier", header: "Carrier" },
  { key: "eta", header: "ETA" },
  {
    key: "status",
    header: "Status",
    render: (row) => <StatusChip status={row.status} />,
  },
];

const LogisticsDashboard = () => (
  <div className="space-y-6">
    <SectionTitle
      title="Logistics overview"
      subtitle="Shipments, fleet and warehouse status in real time — Jun 2026."
      actions={
        <>
          <Button variant="bordered" size="sm" color="default">
            Today
          </Button>
          <Button
            variant="bordered"
            size="sm"
            startContent={<Download size={15} />}
          >
            Export
          </Button>
          <Button color="primary" size="sm" startContent={<Plus size={15} />}>
            New shipment
          </Button>
        </>
      }
    />

    <StatGroup columns={4}>
      {LOGISTICS_KPIS.map((kpi) => (
        <KpiCard key={kpi.label} {...kpi} />
      ))}
    </StatGroup>

    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <MeterList
          title="Warehouse capacity"
          subtitle="Utilization across hubs"
          items={WAREHOUSES}
        />
      </div>
      <DonutStat
        title="Delivery status"
        subtitle="3,284 total shipments"
        data={DELIVERY_STATUS}
        categoryKey="status"
        valueKey="count"
        metaKey="count"
        centerValue="3.3k"
        centerLabel="shipments"
      />
    </div>

    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <ChartCard
          title="Shipment volume"
          delta={7}
          deltaLabel="vs. last month"
          height={240}
          views={[
            {
              key: "volume",
              label: "Shipments",
              type: "column",
              data: SHIPMENT_VOLUME,
              x: "month",
              series: "shipments",
              dataFormat: { format: "compact" },
            },
          ]}
        />
      </div>
      <GoalCard
        title="On-time delivery"
        percent={91}
        current="91%"
        target="95%"
        currentLabel="This week"
      />
    </div>

    <Surface padding="md">
      <CardHeader title="Fleet status" subtitle="92% operational" />
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {FLEET.map((item) => (
          <StatTile key={item.label} {...item} />
        ))}
      </div>
    </Surface>

    <Surface padding="md">
      <CardHeader title="Regional performance" subtitle="Jun 2026" />
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {REGIONAL_PERFORMANCE.map((item) => (
          <StatTile key={item.label} {...item} />
        ))}
      </div>
    </Surface>

    <Surface padding="none">
      <div className="flex items-center justify-between px-5 pt-5">
        <CardHeader title="Shipments in transit" subtitle="Live tracking" />
        <Button variant="link" size="sm">
          Track all
        </Button>
      </div>
      <DataTable
        columns={SHIPMENT_COLUMNS}
        rows={IN_TRANSIT}
        getRowKey={(row) => row.id}
      />
    </Surface>
  </div>
);

export default LogisticsDashboard;
