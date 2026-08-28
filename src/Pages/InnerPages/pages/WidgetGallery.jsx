import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import SectionTitle from "../../../Components/ui/SectionTitle";
import Surface from "../../../Components/ui/Surface";
import CardHeader from "../../../Components/ui/CardHeader";
import StatGroup from "../../../Components/ui/StatGroup";
import KpiCard from "../../../Components/ui/KpiCard";
import ChartCard from "../../../Components/ui/ChartCard";
import DonutStat from "../../../Components/ui/DonutStat";
import GoalCard from "../../../Components/ui/GoalCard";
import MeterList from "../../../Components/ui/MeterList";
import RankList from "../../../Components/ui/RankList";
import CohortGrid from "../../../Components/ui/CohortGrid";
import { KPIS, REVENUE_SERIES, TRAFFIC_SOURCES, FUNNEL, MONTHLY_TARGET } from "../../../data/analytics";
import { RETENTION_COLUMNS, RETENTION_ROWS } from "../../../data/charts";
import { TOP_REPS } from "../../../data/crm";

const Block = ({ name, slug, children }) => (
  <div className="space-y-2">
    <div className="flex items-center justify-between">
      <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--app-fg-subtle)]">
        {name}
      </p>
      <Link
        to={`/components/${slug}`}
        className="flex items-center gap-1 text-xs text-[color:var(--oks-color-primary-600)] hover:underline"
      >
        Docs <ArrowUpRight size={12} />
      </Link>
    </div>
    {children}
  </div>
);

const WidgetGallery = () => (
  <div className="space-y-8">
    <SectionTitle
      title="Widget gallery"
      subtitle="The dashboard building blocks, live. Full docs + code in the component gallery."
      actions={
        <Link
          to="/components"
          className="flex items-center gap-1 rounded-[var(--oks-radius-lg)] border border-[color:var(--app-border)] px-3 py-1.5 text-sm text-[color:var(--app-fg-muted)] hover:text-[var(--app-fg)]"
        >
          All components <ArrowUpRight size={14} />
        </Link>
      }
    />

    <Block name="KpiCard · StatGroup" slug="kpi-card">
      <StatGroup columns={4}>
        {KPIS.map((k) => (
          <KpiCard key={k.label} {...k} />
        ))}
      </StatGroup>
    </Block>

    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <Block name="ChartCard" slug="chart-card">
          <ChartCard
            title="Revenue overview"
            headline="$486,200"
            delta={18.2}
            deltaLabel="vs. last year"
            views={[
              { key: "rev", label: "Revenue", data: REVENUE_SERIES, x: "month", series: "revenue", dataFormat: { prefix: "$", format: "compact" } },
              { key: "ord", label: "Orders", data: REVENUE_SERIES, x: "month", series: "orders", dataFormat: { format: "compact" } },
            ]}
          />
        </Block>
      </div>
      <Block name="DonutStat" slug="donut-stat">
        <DonutStat
          title="Traffic sources"
          subtitle="Where visits come from"
          data={TRAFFIC_SOURCES}
          categoryKey="source"
          valueKey="visits"
          centerValue="84.2k"
          centerLabel="visits"
        />
      </Block>
    </div>

    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <Block name="MeterList (funnel)" slug="meter-list">
        <MeterList title="Conversion funnel" subtitle="Last 30 days" items={FUNNEL} scaleToMax showDropOff />
      </Block>
      <Block name="GoalCard" slug="goal-card">
        <GoalCard title="Monthly target" {...MONTHLY_TARGET} />
      </Block>
      <Block name="RankList" slug="rank-list">
        <RankList title="Top reps" subtitle="This quarter" items={TOP_REPS} />
      </Block>
    </div>

    <Block name="CohortGrid" slug="cohort-grid">
      <CohortGrid
        title="Retention by cohort"
        subtitle="% still active N months later"
        columns={RETENTION_COLUMNS}
        rows={RETENTION_ROWS}
      />
    </Block>

    <Surface>
      <CardHeader title="More widgets" subtitle="Every composed component is documented with copyable code" />
      <p className="text-sm text-[color:var(--app-fg-muted)]">
        Surface, CardHeader, SectionTitle, Stat, StatTile, TrendChip, StatusChip,
        EntityCell, DataTable, TableToolbar, Pagination, SearchInput,
        ActivityFeed, Timeline, BoardView, KeyValueList, EmptyState, FormCard,
        SettingRow, SettingsSection — see{" "}
        <Link to="/components" className="text-[color:var(--oks-color-primary-600)] hover:underline">
          /components
        </Link>
        .
      </p>
    </Surface>
  </div>
);

export default WidgetGallery;
