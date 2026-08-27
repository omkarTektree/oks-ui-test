import { Link } from "react-router-dom";
import { Button } from "oks-ui";
import { Ticket, Clock, CheckCircle2, Smile, ArrowUpRight } from "lucide-react";
import SectionTitle from "../../../Components/ui/SectionTitle";
import Surface from "../../../Components/ui/Surface";
import CardHeader from "../../../Components/ui/CardHeader";
import StatGroup from "../../../Components/ui/StatGroup";
import KpiCard from "../../../Components/ui/KpiCard";
import DataTable from "../../../Components/ui/DataTable";
import StatusChip from "../../../Components/ui/StatusChip";
import { PersonAvatar } from "./_shared";
import { HELPDESK_STATS, HELPDESK_AGENTS, HELPDESK_QUEUES, TICKETS } from "../../../data/apps";

const ICONS = [Ticket, Clock, CheckCircle2, Smile];

const HelpDesk = () => (
  <div className="space-y-6">
    <SectionTitle
      title="Help desk"
      subtitle="Support workload at a glance — queues, agents, live tickets."
      actions={
        <Button as={Link} to="/apps/support-tickets" color="primary" size="sm" endContent={<ArrowUpRight size={15} />}>
          Open tickets
        </Button>
      }
    />

    <StatGroup columns={4}>
      {HELPDESK_STATS.map((s, i) => (
        <KpiCard
          key={s.label}
          icon={ICONS[i]}
          label={s.label}
          value={s.value}
          hint={s.hint}
          delta={s.trend}
        />
      ))}
    </StatGroup>

    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      <Surface className="lg:col-span-1">
        <CardHeader title="Queues" subtitle="Open by category" />
        <div className="space-y-3">
          {HELPDESK_QUEUES.map((q) => (
            <div key={q.label} className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-[var(--app-fg)]">{q.label}</p>
                <p className="text-xs text-[color:var(--app-fg-subtle)]">SLA {q.sla}</p>
              </div>
              <span className="text-sm font-semibold text-[var(--app-fg)]">{q.open}</span>
            </div>
          ))}
        </div>
      </Surface>

      <Surface className="lg:col-span-2">
        <CardHeader title="Agents on shift" subtitle="Today" />
        <DataTable
          columns={[
            {
              key: "name", header: "Agent",
              render: (r) => (
                <span className="flex items-center gap-2">
                  <PersonAvatar name={r.name} />
                  <span className="text-sm font-medium text-[var(--app-fg)]">{r.name}</span>
                </span>
              ),
            },
            { key: "open", header: "Open", align: "right" },
            { key: "resolved", header: "Resolved", align: "right" },
            { key: "csat", header: "CSAT", align: "right" },
          ]}
          rows={HELPDESK_AGENTS}
          getRowKey={(r) => r.name}
        />
      </Surface>
    </div>

    <Surface padding="none">
      <div className="p-5 pb-0">
        <CardHeader title="Recent tickets" subtitle="Latest activity across all queues" />
      </div>
      <DataTable
        columns={[
          { key: "id", header: "ID" },
          { key: "subject", header: "Subject", render: (r) => (
            <span className="font-medium text-[var(--app-fg)]">{r.subject}</span>
          ) },
          { key: "requester", header: "Requester" },
          { key: "priority", header: "Priority", render: (r) => <StatusChip status={r.priority} /> },
          { key: "status", header: "Status", render: (r) => <StatusChip status={r.status} /> },
          { key: "updated", header: "Updated", align: "right" },
        ]}
        rows={TICKETS.slice(0, 8)}
        getRowKey={(r) => r.id}
      />
    </Surface>
  </div>
);

export default HelpDesk;
