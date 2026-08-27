import SectionTitle from "../../../Components/ui/SectionTitle";
import DonutStat from "../../../Components/ui/DonutStat";
import ChartPanel from "./_panel";
import { PLAN_MIX, DEVICE, MONTHLY, QUARTERLY } from "../../../data/charts";

const ChartJs = () => (
  <div className="space-y-6">
    <SectionTitle
      title="Chart.js"
      subtitle="Pie, donut and stacked comparisons built from the same primitives."
    />

    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <DonutStat
        title="Plan mix"
        subtitle="Share of active subscriptions"
        data={PLAN_MIX}
        categoryKey="plan"
        valueKey="value"
        metaKey="value"
        centerValue="9,340"
        centerLabel="subscriptions"
      />
      <ChartPanel
        title="Pie — sessions by device"
        subtitle="Last 30 days"
        type="pie"
        data={DEVICE}
        x="device"
        series="value"
        multi
        height={260}
      />
    </div>

    <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
      <ChartPanel
        title="Stacked column — customers by plan"
        subtitle="Per quarter"
        type="column"
        data={QUARTERLY}
        x="quarter"
        series={[
          { key: "free", name: "Free" },
          { key: "pro", name: "Pro" },
          { key: "team", name: "Team" },
        ]}
        column={{ stacked: true }}
        multi
      />
      <ChartPanel
        title="Users vs signups"
        subtitle="Monthly"
        type="line"
        data={MONTHLY}
        x="month"
        series={[
          { key: "users", name: "Active users" },
          { key: "signups", name: "Signups" },
        ]}
        dataFormat={{ format: "compact" }}
        multi
      />
    </div>
  </div>
);

export default ChartJs;
