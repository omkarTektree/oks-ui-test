import { Avatar, AvatarGroup, Button } from "oks-ui";
import { Download, Filter, Plus } from "lucide-react";
import {
  ActivityFeed,
  CardHeader,
  ChartCard,
  DataTable,
  KpiCard,
  RankList,
  SectionTitle,
  StatGroup,
  StatTile,
  StatusChip,
  Surface,
  Timeline,
} from "../../Components/ui";
import {
  DEADLINES,
  PROJECT_ACTIVITY,
  PROJECT_HEALTH,
  PROJECT_KPIS,
  PROJECTS,
  SPRINT_VELOCITY,
  TEAM_WORKLOAD,
} from "../../data/projects";
import { avatarUrl } from "../../lib/avatar";

const PROJECT_COLUMNS = [
  {
    key: "name",
    header: "Project",
    render: (row) => (
      <div className="min-w-0">
        <p className="truncate text-sm font-medium text-[var(--app-fg)]">
          {row.name}
        </p>
        <p className="truncate text-xs text-[color:var(--app-fg-subtle)]">
          {row.meta}
        </p>
      </div>
    ),
  },
  {
    key: "team",
    header: "Team",
    render: (row) => (
      <AvatarGroup max={3} size="sm">
        {row.team.map((name) => (
          <Avatar key={name} name={name} src={avatarUrl(name)} />
        ))}
      </AvatarGroup>
    ),
  },
  { key: "due", header: "Due" },
  {
    key: "status",
    header: "Status",
    render: (row) => <StatusChip status={row.status} />,
  },
  {
    key: "progress",
    header: "Progress",
    align: "right",
    render: (row) => (
      <div className="flex items-center justify-end gap-2">
        <div className="h-1.5 w-20 overflow-hidden rounded-full bg-[var(--app-surface-2)]">
          <div
            className="h-full rounded-full bg-[var(--oks-color-primary-500)]"
            style={{ width: `${row.progress}%` }}
          />
        </div>
        <span className="w-9 text-sm font-medium text-[var(--app-fg)]">
          {row.progress}%
        </span>
      </div>
    ),
  },
];

const ProjectsDashboard = () => (
  <div className="space-y-6">
    <SectionTitle
      title="Projects overview"
      subtitle="Progress, workload and upcoming deadlines across all teams."
      actions={
        <>
          <Button
            variant="bordered"
            size="sm"
            color="default"
            startContent={<Filter size={15} />}
          >
            Filter
          </Button>
          <Button
            variant="bordered"
            size="sm"
            startContent={<Download size={15} />}
          >
            Export
          </Button>
          <Button color="primary" size="sm" startContent={<Plus size={15} />}>
            New project
          </Button>
        </>
      }
    />

    <StatGroup columns={4}>
      {PROJECT_KPIS.map((kpi) => (
        <KpiCard key={kpi.label} {...kpi} />
      ))}
    </StatGroup>

    <Surface padding="md">
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {PROJECT_HEALTH.map((item) => (
          <StatTile key={item.label} {...item} />
        ))}
      </div>
    </Surface>

    <Surface padding="none">
      <div className="flex items-center justify-between px-5 pt-5">
        <CardHeader title="Project progress" subtitle="All active projects" />
        <Button variant="link" size="sm">
          View all
        </Button>
      </div>
      <DataTable
        columns={PROJECT_COLUMNS}
        rows={PROJECTS}
        getRowKey={(row) => row.name}
      />
    </Surface>

    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <RankList
        title="Team workload"
        subtitle="1 person overloaded"
        items={TEAM_WORKLOAD}
      />
      <Timeline
        title="Upcoming deadlines"
        subtitle="2 due this week"
        items={DEADLINES}
      />
    </div>

    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <ChartCard
          title="Sprint velocity"
          delta={6}
          deltaLabel="story points completed per sprint"
          height={260}
          views={[
            {
              key: "velocity",
              label: "Velocity",
              type: "column",
              data: SPRINT_VELOCITY,
              x: "sprint",
              series: [
                { key: "done", name: "Done" },
                { key: "planned", name: "Planned" },
              ],
            },
          ]}
        />
      </div>

      <Surface padding="none">
        <div className="px-5 pt-5">
          <CardHeader title="Recent activity" subtitle="Across all projects" />
        </div>
        <ActivityFeed items={PROJECT_ACTIVITY} />
      </Surface>
    </div>
  </div>
);

export default ProjectsDashboard;
