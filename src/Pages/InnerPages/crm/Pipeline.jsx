import { Button } from "oks-ui";
import { Plus, Filter } from "lucide-react";
import SectionTitle from "../../../Components/ui/SectionTitle";
import Surface from "../../../Components/ui/Surface";
import BoardView from "../../../Components/ui/BoardView";
import StatGroup from "../../../Components/ui/StatGroup";
import KpiCard from "../../../Components/ui/KpiCard";
import { PersonAvatar } from "../apps/_shared";
import { DEALS_LIST } from "../../../data/lists";

const STAGES = [
  { id: "Qualification", accent: "default", weight: 0.2 },
  { id: "Discovery", accent: "info", weight: 0.4 },
  { id: "Proposal", accent: "primary", weight: 0.6 },
  { id: "Negotiation", accent: "warning", weight: 0.8 },
  { id: "Won", accent: "success", weight: 1 },
];

const open = DEALS_LIST.filter((d) => d.stage !== "Lost");
const byStage = (id) => open.filter((d) => d.stage === id);
const sum = (rows) => rows.reduce((n, d) => n + d.value, 0);

const columns = STAGES.map((s) => ({
  id: s.id,
  title: s.id,
  accent: s.accent,
  items: byStage(s.id),
}));

const pipelineValue = sum(open.filter((d) => d.stage !== "Won"));
const weighted = STAGES.filter((s) => s.id !== "Won").reduce(
  (n, s) => n + sum(byStage(s.id)) * s.weight,
  0
);

const KPIS = [
  { label: "Open pipeline", value: `$${(pipelineValue / 1000).toFixed(0)}k`, hint: `${open.filter((d) => d.stage !== "Won").length} deals` },
  { label: "Weighted value", value: `$${(weighted / 1000).toFixed(0)}k`, hint: "probability-adjusted" },
  { label: "Won this quarter", value: `$${(sum(byStage("Won")) / 1000).toFixed(0)}k`, delta: 12, hint: `${byStage("Won").length} deals` },
  { label: "Avg. deal size", value: `$${Math.round(sum(open) / open.length / 100) / 10}k`, delta: 2.4, deltaDirection: "down", hint: "all open deals" },
];

const Pipeline = () => (
  <div className="space-y-6">
    <SectionTitle
      title="Pipeline"
      subtitle="Every open opportunity by stage."
      actions={
        <>
          <Button variant="bordered" size="sm" startContent={<Filter size={15} />}>
            Filter
          </Button>
          <Button color="primary" size="sm" startContent={<Plus size={15} />}>
            New deal
          </Button>
        </>
      }
    />

    <StatGroup columns={4}>
      {KPIS.map((k) => (
        <KpiCard key={k.label} {...k} />
      ))}
    </StatGroup>

    <BoardView
      columns={columns}
      columnMeta={(col) =>
        `$${(sum(col.items) / 1000).toFixed(0)}k · ${col.items.length} deals`
      }
      renderCard={(d) => (
        <>
          <p className="text-sm font-medium text-[var(--app-fg)]">{d.name}</p>
          <p className="mt-1 text-xs text-[color:var(--app-fg-subtle)]">
            ${d.value.toLocaleString()}
          </p>
          <div className="mt-3 flex items-center justify-between">
            <span className="text-[11px] text-[color:var(--app-fg-subtle)]">{d.id}</span>
            <PersonAvatar name={d.owner} />
          </div>
        </>
      )}
    />

    <Surface padding="md">
      <p className="text-xs text-[color:var(--app-fg-muted)]">
        Weighted value applies a stage probability (20% → 80%) to each open deal.
        Drag-and-drop is out of scope for this showcase — the board is presentational.
      </p>
    </Surface>
  </div>
);

export default Pipeline;
