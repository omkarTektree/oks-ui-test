import { Chart } from "oks-ui";
import Surface from "../../../Components/ui/Surface";
import CardHeader from "../../../Components/ui/CardHeader";

const MULTI = ["#6d5bdb", "#4ec9b0", "#e5a642", "#e2626b"];

/** A titled <Chart> inside a <Surface> — the workhorse of the charts pages. */
const ChartPanel = ({ title, subtitle, actions, height = 280, multi, ...chart }) => (
  <Surface padding="none">
    <div className="p-5 pb-0">
      <CardHeader title={title} subtitle={subtitle} actions={actions} />
    </div>
    <div className="px-3 pb-3 pt-2">
      <Chart
        height={height}
        grid={{ vertical: false }}
        axisY={{ tickCount: 4 }}
        legend={{ show: Boolean(multi) }}
        palette={multi ? { colors: MULTI } : { roles: ["primary"] }}
        ariaLabel={typeof title === "string" ? title : "chart"}
        {...chart}
      />
    </div>
  </Surface>
);

export default ChartPanel;
