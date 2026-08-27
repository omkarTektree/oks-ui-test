import SectionTitle from "../../../Components/ui/SectionTitle";
import StatGroup from "../../../Components/ui/StatGroup";
import KpiCard from "../../../Components/ui/KpiCard";
import MeterList from "../../../Components/ui/MeterList";
import RankList from "../../../Components/ui/RankList";
import ChartCard from "../../../Components/ui/ChartCard";
import { KPI_CARDS, MONTHLY, CHANNELS, TOP_ACCOUNTS } from "../../../data/charts";

const Statistics = () => (
  <div className="space-y-6">
    <SectionTitle
      title="Statistics"
      subtitle="A dense read on the numbers that matter this month."
    />

    <StatGroup columns={4}>
      {KPI_CARDS.slice(0, 4).map((k) => (
        <KpiCard key={k.label} {...k} />
      ))}
    </StatGroup>

    <ChartCard
      title="Revenue"
      headline="$486,200"
      delta={12.4}
      deltaLabel="vs. last year"
      views={[
        { key: "rev", label: "Revenue", data: MONTHLY, x: "month", series: "revenue", dataFormat: { prefix: "$", format: "compact" } },
        { key: "exp", label: "Expenses", data: MONTHLY, x: "month", series: "expenses", dataFormat: { prefix: "$", format: "compact" } },
        { key: "users", label: "Users", data: MONTHLY, x: "month", series: "users", dataFormat: { format: "compact" } },
      ]}
    />

    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <MeterList
        title="Traffic by channel"
        subtitle="Sessions, last 30 days"
        items={CHANNELS.map((c) => ({ label: c.channel, value: c.value }))}
        scaleToMax
      />
      <RankList
        title="Top accounts by MRR"
        subtitle="This month"
        items={TOP_ACCOUNTS.map((a) => ({
          name: a.name,
          value: `$${a.mrr.toLocaleString()}`,
          sub: `${a.plan} · ${a.seats} seats`,
          percent: (a.mrr / 8400) * 100,
        }))}
      />
    </div>
  </div>
);

export default Statistics;
