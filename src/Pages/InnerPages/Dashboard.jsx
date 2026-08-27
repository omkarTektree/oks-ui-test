import { Button } from "oks-ui";
import {
  Activity,
  DollarSign,
  Download,
  Plus,
  TrendingUp,
  Users,
} from "lucide-react";
import {
  CardHeader,
  KpiCard,
  SectionTitle,
  StatGroup,
  Surface,
} from "../../Components/ui";

const KPIS = [
  { icon: DollarSign, label: "Total revenue", value: "$486,200", delta: 12.4, hint: "vs. previous 30 days" },
  { icon: Users, label: "Active users", value: "84,200", delta: 8.1, hint: "vs. previous 30 days" },
  { icon: TrendingUp, label: "Conversion rate", value: "3.24%", delta: 0.6, hint: "vs. previous 30 days" },
  { icon: Activity, label: "Avg. order value", value: "$68.40", delta: 2.1, deltaDirection: "down", hint: "vs. previous 30 days" },
];

const ACTIVITY = [
  { who: "Maya Chen", what: "published a new revenue report.", when: "12 minutes ago" },
  { who: "System", what: "flagged a spike in checkout errors.", when: "48 minutes ago" },
  { who: "Diego Ruiz", what: "closed the Q3 marketing campaign.", when: "2 hours ago" },
  { who: "Priya Nair", what: "invited 3 new teammates to the workspace.", when: "5 hours ago" },
];

const Dashboard = () => (
  <div>
    <SectionTitle
      title="Welcome back, Admin 👋"
      subtitle="Here's what's happening across your workspace today."
      actions={
        <>
          <Button variant="bordered" size="sm" color="default">
            Last 30 days
          </Button>
          <Button variant="bordered" size="sm" startContent={<Download size={15} />}>
            Export
          </Button>
          <Button color="primary" size="sm" startContent={<Plus size={15} />}>
            Add widget
          </Button>
        </>
      }
    />

    <StatGroup columns={4}>
      {KPIS.map((kpi) => (
        <KpiCard key={kpi.label} {...kpi} />
      ))}
    </StatGroup>

    <Surface className="mt-6" padding="none">
      <div className="px-5 pt-5">
        <CardHeader
          title="Recent activity"
          subtitle="Latest events across the workspace"
        />
      </div>
      <ul className="divide-y divide-[color:var(--app-border)]">
        {ACTIVITY.map((item) => (
          <li
            key={`${item.who}-${item.what}`}
            className="flex items-center gap-3 px-5 py-3.5 text-sm"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--app-surface-2)] text-xs font-semibold text-[color:var(--app-fg-muted)]">
              {item.who.slice(0, 1)}
            </span>
            <p className="min-w-0 flex-1 truncate text-[color:var(--app-fg-muted)]">
              <span className="font-medium text-[var(--app-fg)]">{item.who}</span>{" "}
              {item.what}
            </p>
            <span className="shrink-0 text-xs text-[color:var(--app-fg-subtle)]">
              {item.when}
            </span>
          </li>
        ))}
      </ul>
    </Surface>
  </div>
);

export default Dashboard;
