import { Link } from "react-router-dom";
import { Button } from "oks-ui";
import { ArrowUpRight } from "lucide-react";
import {
  CardHeader,
  DonutStat,
  KpiCard,
  MeterList,
  RankList,
  SectionTitle,
  StatGroup,
  StatTile,
  Surface,
  TrendChip,
} from "../../Components/ui";
import {
  CRM_ACTIVITY,
  CRM_KPIS,
  LEAD_SOURCES,
  PIPELINE_STAGES,
  TOP_REPS,
  WIN_LOSS,
} from "../../data/crm";

const CrmDashboard = () => (
  <div className="space-y-6">
    <SectionTitle
      title="CRM overview"
      subtitle="Pipeline health, activities and win rate — Q3 2026."
      actions={
        <>
          <Button variant="bordered" size="sm" color="default">
            This quarter
          </Button>
          <Button
            as={Link}
            to="/crm/pipeline"
            color="primary"
            size="sm"
            endContent={<ArrowUpRight size={15} />}
          >
            Open pipeline
          </Button>
        </>
      }
    />

    <StatGroup columns={4}>
      {CRM_KPIS.map((kpi) => (
        <KpiCard key={kpi.label} {...kpi} />
      ))}
    </StatGroup>

    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <MeterList
          title="Pipeline by stage"
          subtitle="$1.24M total · 182 deals"
          actions={<TrendChip value={14} />}
          items={PIPELINE_STAGES}
          scaleToMax
        />
      </div>

      <DonutStat
        title="Win / loss rate"
        subtitle="Closed deals this quarter"
        data={WIN_LOSS}
        categoryKey="outcome"
        valueKey="value"
        metaKey="meta"
        centerValue="60%"
        centerLabel="win rate"
      />
    </div>

    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <DonutStat
        title="Lead sources"
        subtitle="940 new leads this quarter"
        data={LEAD_SOURCES}
        categoryKey="source"
        valueKey="leads"
        metaKey="leads"
        centerValue="940"
        centerLabel="new leads"
      />

      <Surface padding="md">
        <CardHeader title="Activity" subtitle="This week" />
        <div className="grid grid-cols-2 gap-3">
          {CRM_ACTIVITY.map((item) => (
            <StatTile key={item.label} {...item} />
          ))}
        </div>
      </Surface>
    </div>

    <RankList
      title="Top sales reps"
      subtitle="Q3 2026"
      actions={
        <Button variant="link" size="sm">
          View all
        </Button>
      }
      items={TOP_REPS}
    />
  </div>
);

export default CrmDashboard;
