import { Button } from "oks-ui";
import { Download, Plus } from "lucide-react";
import SectionTitle from "../../../Components/ui/SectionTitle";
import Surface from "../../../Components/ui/Surface";
import CardHeader from "../../../Components/ui/CardHeader";
import StatGroup from "../../../Components/ui/StatGroup";
import KpiCard from "../../../Components/ui/KpiCard";
import MeterList from "../../../Components/ui/MeterList";
import DataTable from "../../../Components/ui/DataTable";
import { BUDGET_LINES } from "../../../data/lists";

const money = (n) => `$${n.toLocaleString()}`;

const totalBudget = BUDGET_LINES.reduce((s, b) => s + b.budget, 0);
const totalSpent = BUDGET_LINES.reduce((s, b) => s + b.spent, 0);

const KPIS = [
  { label: "Total budget", value: money(totalBudget), hint: "FY2026" },
  { label: "Spent to date", value: money(totalSpent), delta: 6.2, deltaDirection: "down", hint: `${Math.round((totalSpent / totalBudget) * 100)}% of budget` },
  { label: "Remaining", value: money(totalBudget - totalSpent), hint: "across 8 lines" },
  { label: "Over-budget lines", value: "0", hint: "2 lines above 85%" },
];

const toneFor = (used) => (used >= 85 ? "danger" : used >= 65 ? "warning" : "primary");

const BudgetManagement = () => (
  <div className="space-y-6">
    <SectionTitle
      title="Budget management"
      subtitle="Spend against budget by line, FY2026."
      actions={
        <>
          <Button variant="bordered" size="sm" startContent={<Download size={15} />}>
            Export
          </Button>
          <Button color="primary" size="sm" startContent={<Plus size={15} />}>
            New line
          </Button>
        </>
      }
    />

    <StatGroup columns={4}>
      {KPIS.map((k) => (
        <KpiCard key={k.label} {...k} />
      ))}
    </StatGroup>

    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <MeterList
        title="Utilisation by line"
        subtitle="Spent ÷ budget"
        items={BUDGET_LINES.map((b) => ({
          label: b.line,
          value: b.used,
          display: `${b.used}%`,
          tone: toneFor(b.used),
        }))}
      />
      <MeterList
        title="Budget by group"
        subtitle="Allocated this year"
        items={["People", "Software", "Growth", "Operations"].map((g) => ({
          label: g,
          value: BUDGET_LINES.filter((b) => b.group === g).reduce((s, b) => s + b.budget, 0),
        }))}
        scaleToMax
        formatValue={(v) => money(v)}
      />
    </div>

    <Surface padding="none">
      <div className="p-5 pb-0">
        <CardHeader title="Budget lines" subtitle="All departments" />
      </div>
      <DataTable
        columns={[
          { key: "line", header: "Line", render: (r) => (
            <span className="font-medium text-[var(--app-fg)]">{r.line}</span>
          ) },
          { key: "group", header: "Group" },
          { key: "budget", header: "Budget", align: "right", sortable: true, render: (r) => money(r.budget) },
          { key: "spent", header: "Spent", align: "right", sortable: true, render: (r) => money(r.spent) },
          { key: "remaining", header: "Remaining", align: "right", render: (r) => (
            <span className={r.remaining < 0 ? "text-[color:var(--oks-color-danger-600)]" : ""}>
              {money(r.remaining)}
            </span>
          ) },
          { key: "used", header: "Used", align: "right", sortable: true, render: (r) => (
            <span
              className="font-medium"
              style={{ color: `var(--oks-color-${toneFor(r.used)}-600)` }}
            >
              {r.used}%
            </span>
          ) },
        ]}
        rows={BUDGET_LINES}
        getRowKey={(r) => r.id}
      />
    </Surface>
  </div>
);

export default BudgetManagement;
