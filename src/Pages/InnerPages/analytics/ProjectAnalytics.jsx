import { Button } from "oks-ui";
import { Download } from "lucide-react";
import SectionTitle from "../../../Components/ui/SectionTitle";
import Surface from "../../../Components/ui/Surface";
import CardHeader from "../../../Components/ui/CardHeader";
import StatGroup from "../../../Components/ui/StatGroup";
import KpiCard from "../../../Components/ui/KpiCard";
import ChartCard from "../../../Components/ui/ChartCard";
import DonutStat from "../../../Components/ui/DonutStat";
import MeterList from "../../../Components/ui/MeterList";
import RankList from "../../../Components/ui/RankList";
import DataTable from "../../../Components/ui/DataTable";
import StatusChip from "../../../Components/ui/StatusChip";
import { EntityCell } from "../../../Components/ui";
import {
  PROJECT_KPIS, PROJECT_HEALTH, SPRINT_VELOCITY, TEAM_WORKLOAD,
} from "../../../data/projects";
import { PROJECTS_LIST } from "../../../data/lists";

const STATUS_MIX = ["On track", "At risk", "Delayed", "Completed"].map((status) => ({
  status,
  value: PROJECTS_LIST.filter((p) => p.status === status).length,
}));

const CYCLE_TIME = [
  { phase: "Backlog", days: 6 },
  { phase: "In progress", days: 9 },
  { phase: "Review", days: 3 },
  { phase: "QA", days: 2 },
];

const ProjectAnalytics = () => (
  <div className="space-y-6">
    <SectionTitle
      title="Project analytics"
      subtitle="Delivery trends, velocity and where time is spent."
      actions={
        <Button variant="bordered" size="sm" startContent={<Download size={15} />}>
          Export
        </Button>
      }
    />

    <StatGroup columns={4}>
      {PROJECT_KPIS.map((k) => (
        <KpiCard key={k.label} {...k} />
      ))}
    </StatGroup>

    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <ChartCard
          title="Sprint velocity"
          delta={6}
          deltaLabel="story points per sprint"
          height={300}
          views={[
            {
              key: "velocity", label: "Velocity", type: "column",
              data: SPRINT_VELOCITY, x: "sprint",
              series: [{ key: "done", name: "Done" }, { key: "planned", name: "Planned" }],
            },
          ]}
        />
      </div>
      <DonutStat
        title="Projects by status"
        subtitle={`${PROJECTS_LIST.length} projects`}
        data={STATUS_MIX}
        categoryKey="status"
        valueKey="value"
        centerValue={String(PROJECTS_LIST.length)}
        centerLabel="projects"
      />
    </div>

    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      <Surface padding="md">
        <div className="grid grid-cols-2 gap-3">
          {PROJECT_HEALTH.map((h) => (
            <div key={h.label} className="rounded-[var(--oks-radius-lg)] bg-[var(--app-surface-2)] p-3">
              <p className="text-xl font-bold text-[var(--app-fg)]">{h.value}</p>
              <p className="text-xs text-[color:var(--app-fg-muted)]">{h.label}</p>
            </div>
          ))}
        </div>
      </Surface>
      <MeterList
        title="Avg. cycle time by phase"
        subtitle="Days a task spends in each column"
        items={CYCLE_TIME.map((c) => ({ label: c.phase, value: c.days }))}
        scaleToMax
        unit=" d"
        formatValue={(v) => `${v} d`}
      />
      <RankList title="Team workload" subtitle="Capacity used" items={TEAM_WORKLOAD} />
    </div>

    <Surface padding="none">
      <div className="p-5 pb-0">
        <CardHeader title="Project delivery" subtitle="Progress and due dates" />
      </div>
      <DataTable
        columns={[
          { key: "name", header: "Project", render: (r) => (
            <span className="font-medium text-[var(--app-fg)]">{r.name}</span>
          ) },
          { key: "lead", header: "Lead", render: (r) => <EntityCell name={r.lead} /> },
          { key: "due", header: "Due", sortable: true },
          { key: "status", header: "Status", render: (r) => <StatusChip status={r.status} /> },
          { key: "progress", header: "Progress", align: "right", sortable: true, render: (r) => `${r.progress}%` },
        ]}
        rows={PROJECTS_LIST}
        getRowKey={(r) => r.id}
        pageSize={10}
      />
    </Surface>
  </div>
);

export default ProjectAnalytics;
