import { Button, Chip } from "oks-ui";
import { Download, TrendingUp } from "lucide-react";
import {
  CardHeader,
  ChartCard,
  CohortGrid,
  DataTable,
  DonutStat,
  EntityCell,
  KpiCard,
  SectionTitle,
  StatGroup,
  StatTile,
  Surface,
} from "../../Components/ui";
import {
  COHORT_COLUMNS,
  COHORT_ROWS,
  MRR_STATS,
  MRR_TREND,
  PLAN_MIX,
  RECENT_SIGNUPS,
  SAAS_HEALTH,
  SAAS_KPIS,
} from "../../data/saas";

const PLAN_TONE = {
  Enterprise: "primary",
  Growth: "info",
  Starter: "default",
};

const SIGNUP_COLUMNS = [
  {
    key: "user",
    header: "User",
    render: (row) => (
      <EntityCell name={row.name} sub={`${row.company} · ${row.when}`} />
    ),
  },
  {
    key: "plan",
    header: "Plan",
    align: "right",
    render: (row) => (
      <Chip size="sm" variant="soft" color={PLAN_TONE[row.plan] ?? "default"}>
        {row.plan}
      </Chip>
    ),
  },
];

const SaasDashboard = () => (
  <div className="space-y-6">
    <SectionTitle
      title="SaaS metrics"
      subtitle="MRR, churn, retention and cohort health — Jun 2026."
      actions={
        <>
          <Button variant="bordered" size="sm" color="default">
            Jun 2026
          </Button>
          <Button
            variant="bordered"
            size="sm"
            startContent={<Download size={15} />}
          >
            Export
          </Button>
        </>
      }
    />

    <StatGroup columns={4}>
      {SAAS_KPIS.map((kpi) => (
        <KpiCard key={kpi.label} {...kpi} />
      ))}
    </StatGroup>

    <Surface padding="md">
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {SAAS_HEALTH.map((item) => (
          <StatTile key={item.label} {...item} />
        ))}
      </div>
    </Surface>

    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <ChartCard
          title="MRR trend"
          headline="$48,200"
          delta={12}
          deltaLabel="MoM"
          stats={MRR_STATS}
          height={260}
          views={[
            {
              key: "mrr",
              label: "MRR",
              data: MRR_TREND,
              x: "month",
              series: "mrr",
              dataFormat: { prefix: "$", format: "compact" },
            },
          ]}
        />
      </div>

      <DonutStat
        title="Plan mix"
        subtitle="Revenue contribution by tier"
        data={PLAN_MIX}
        categoryKey="plan"
        valueKey="mrr"
        metaKey="display"
        centerValue="$48.2k"
        centerLabel="total MRR"
      />
    </div>

    <CohortGrid
      title="Cohort retention"
      subtitle="% of users still active by month"
      actions={
        <Chip
          size="sm"
          variant="soft"
          color="success"
          startContent={<TrendingUp size={13} />}
        >
          Healthy
        </Chip>
      }
      columns={COHORT_COLUMNS}
      rows={COHORT_ROWS}
    />

    <Surface padding="none">
      <div className="flex items-center justify-between px-5 pt-5">
        <CardHeader title="Recent signups" subtitle="Last 24 hours" />
        <Button variant="link" size="sm">
          View all
        </Button>
      </div>
      <DataTable
        columns={SIGNUP_COLUMNS}
        rows={RECENT_SIGNUPS}
        getRowKey={(row) => row.name}
      />
    </Surface>
  </div>
);

export default SaasDashboard;
