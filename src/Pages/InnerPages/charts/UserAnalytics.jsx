import SectionTitle from "../../../Components/ui/SectionTitle";
import StatGroup from "../../../Components/ui/StatGroup";
import KpiCard from "../../../Components/ui/KpiCard";
import ChartCard from "../../../Components/ui/ChartCard";
import DonutStat from "../../../Components/ui/DonutStat";
import MeterList from "../../../Components/ui/MeterList";
import CohortGrid from "../../../Components/ui/CohortGrid";
import {
  MONTHLY, CHANNELS, DEVICE, FUNNEL_STAGES,
  RETENTION_COLUMNS, RETENTION_ROWS,
} from "../../../data/charts";

const USER_KPIS = [
  { label: "Active users", value: "84,200", delta: 8.1, hint: "last 30 days" },
  { label: "New users", value: "12,480", delta: 5.4, hint: "last 30 days" },
  { label: "DAU / MAU", value: "38%", delta: 1.2, hint: "stickiness" },
  { label: "Avg. session", value: "7m 12s", delta: 0.4, deltaDirection: "down", hint: "per active user" },
];

const UserAnalytics = () => (
  <div className="space-y-6">
    <SectionTitle
      title="User analytics"
      subtitle="Acquisition, engagement and retention in one view."
    />

    <StatGroup columns={4}>
      {USER_KPIS.map((k) => (
        <KpiCard key={k.label} {...k} />
      ))}
    </StatGroup>

    <ChartCard
      title="Active users"
      headline="84,200"
      delta={8.1}
      deltaLabel="vs. last month"
      views={[
        { key: "users", label: "Active", data: MONTHLY, x: "month", series: "users", dataFormat: { format: "compact" } },
        { key: "signups", label: "Signups", data: MONTHLY, x: "month", series: "signups", dataFormat: { format: "compact" } },
      ]}
      height={320}
    />

    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <DonutStat
        title="Acquisition channels"
        subtitle="New users by source, last 30 days"
        data={CHANNELS}
        categoryKey="channel"
        valueKey="value"
        centerValue="12.5k"
        centerLabel="new users"
      />
      <MeterList
        title="Activation funnel"
        subtitle="Visitor to paid"
        items={FUNNEL_STAGES}
        scaleToMax
        showDropOff
      />
    </div>

    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <MeterList
        title="Sessions by device"
        subtitle="Share of total sessions"
        items={DEVICE.map((d) => ({ label: d.device, value: d.value }))}
      />
      <CohortGrid
        title="Weekly retention"
        subtitle="% of a signup cohort still active"
        columns={RETENTION_COLUMNS}
        rows={RETENTION_ROWS.slice(0, 5)}
      />
    </div>
  </div>
);

export default UserAnalytics;
