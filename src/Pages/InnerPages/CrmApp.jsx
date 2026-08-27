import { Button, Chip } from "oks-ui";
import { Plus, Phone, Mail, CalendarClock } from "lucide-react";
import SectionTitle from "../../Components/ui/SectionTitle";
import Surface from "../../Components/ui/Surface";
import CardHeader from "../../Components/ui/CardHeader";
import BoardView from "../../Components/ui/BoardView";
import RankList from "../../Components/ui/RankList";
import ActivityFeed from "../../Components/ui/ActivityFeed";
import { PersonAvatar } from "./apps/_shared";
import { DEALS_LIST } from "../../data/lists";
import { TOP_REPS } from "../../data/crm";

const STAGES = [
  { id: "Qualification", accent: "default" },
  { id: "Discovery", accent: "info" },
  { id: "Proposal", accent: "primary" },
  { id: "Negotiation", accent: "warning" },
  { id: "Won", accent: "success" },
];

const columns = STAGES.map((s) => ({
  id: s.id,
  title: s.id,
  accent: s.accent,
  items: DEALS_LIST.filter((d) => d.stage === s.id),
}));

const CRM_TASKS = [
  { who: "You", what: "call · Northwind renewal — follow up on redline.", when: "Due today" },
  { who: "You", what: "email · Cobalt Systems — send updated SOW.", when: "Due today" },
  { who: "You", what: "meeting · Solace Health — technical deep-dive.", when: "Tomorrow 14:00" },
  { who: "You", what: "call · Vertex Logistics — check in after trial.", when: "Fri" },
];

const CrmApp = () => (
  <div className="space-y-6">
    <SectionTitle
      title="CRM workspace"
      subtitle="Your pipeline, tasks and recent activity in one place."
      actions={
        <Button color="primary" size="sm" startContent={<Plus size={15} />}>
          New deal
        </Button>
      }
    />

    <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1fr_20rem]">
      <div className="min-w-0 space-y-2">
        <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--app-fg-subtle)]">
          Pipeline
        </p>
        <BoardView
          columns={columns}
          columnMeta={(col) =>
            `$${(col.items.reduce((n, d) => n + d.value, 0) / 1000).toFixed(0)}k`
          }
          renderCard={(d) => (
            <>
              <p className="text-sm font-medium text-[var(--app-fg)]">{d.name}</p>
              <p className="mt-1 text-xs text-[color:var(--app-fg-subtle)]">
                ${d.value.toLocaleString()}
              </p>
              <div className="mt-3 flex items-center justify-between">
                <div className="flex gap-1 text-[color:var(--app-fg-subtle)]">
                  <Phone size={13} />
                  <Mail size={13} />
                  <CalendarClock size={13} />
                </div>
                <PersonAvatar name={d.owner} />
              </div>
            </>
          )}
        />
      </div>

      <div className="space-y-6">
        <Surface padding="none">
          <div className="p-5 pb-0">
            <CardHeader title="My tasks" subtitle="Next up" />
          </div>
          <ActivityFeed items={CRM_TASKS} />
        </Surface>

        <RankList title="Rep leaderboard" subtitle="This quarter" items={TOP_REPS} />

        <Surface>
          <CardHeader title="Quick add" />
          <div className="flex flex-wrap gap-2">
            <Chip size="sm" variant="soft" className="cursor-pointer">Lead</Chip>
            <Chip size="sm" variant="soft" className="cursor-pointer">Contact</Chip>
            <Chip size="sm" variant="soft" className="cursor-pointer">Task</Chip>
            <Chip size="sm" variant="soft" className="cursor-pointer">Note</Chip>
          </div>
        </Surface>
      </div>
    </div>
  </div>
);

export default CrmApp;
