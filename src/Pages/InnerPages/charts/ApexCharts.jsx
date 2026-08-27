import SectionTitle from "../../../Components/ui/SectionTitle";
import ChartPanel from "./_panel";
import { MONTHLY, QUARTERLY, CHANNELS } from "../../../data/charts";

const ApexCharts = () => (
  <div className="space-y-6">
    <SectionTitle
      title="Apex charts"
      subtitle="Line, area, bar and column charts — all one oks-ui <Chart> component."
    />

    <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
      <ChartPanel
        title="Area — revenue"
        subtitle="Monthly, this year"
        type="area"
        data={MONTHLY}
        x="month"
        series="revenue"
        dataFormat={{ prefix: "$", format: "compact" }}
      />
      <ChartPanel
        title="Line — signups"
        subtitle="Monthly, this year"
        type="line"
        data={MONTHLY}
        x="month"
        series="signups"
        dataFormat={{ format: "compact" }}
      />
      <ChartPanel
        title="Column — new customers by plan"
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
        title="Bar — traffic by channel"
        subtitle="Sessions, last 30 days"
        type="bar"
        data={CHANNELS}
        x="channel"
        series="value"
        dataFormat={{ format: "compact" }}
      />
    </div>

    <ChartPanel
      title="Revenue vs expenses"
      subtitle="Multi-series area, monthly"
      height={320}
      type="area"
      data={MONTHLY}
      x="month"
      series={[
        { key: "revenue", name: "Revenue" },
        { key: "expenses", name: "Expenses" },
      ]}
      dataFormat={{ prefix: "$", format: "compact" }}
      multi
    />
  </div>
);

export default ApexCharts;
