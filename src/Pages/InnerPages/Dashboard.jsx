import { PageTitle } from "oks-ui";
import { Activity, FolderKanban, TrendingUp, Users } from "lucide-react";

const STATS = [
  { label: "Active projects", value: "12", delta: "+2 this week", icon: FolderKanban },
  { label: "Team members", value: "34", delta: "+5 this month", icon: Users },
  { label: "Deployments", value: "128", delta: "+18 this week", icon: Activity },
  { label: "Uptime", value: "99.9%", delta: "30-day average", icon: TrendingUp },
];

const ACTIVITY = [
  { who: "Priya", what: "merged pull request #212", when: "12m ago" },
  { who: "Arjun", what: "deployed api-service to production", when: "1h ago" },
  { who: "Sara", what: "commented on Projects roadmap", when: "3h ago" },
  { who: "You", what: "invited 2 members to the team", when: "Yesterday" },
];

const Dashboard = () => (
  <div>
    <PageTitle
      as="h1"
      title="Dashboard"
      subtitle="Welcome back — here's what's happening across your workspace."
      classNames={{
        base: "flex-col items-start",
        title: "text-2xl font-bold",
        subtitle: "text-black/55",
      }}
    />

    <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {STATS.map((stat) => {
        const Icon = stat.icon;
        return (
          <div
            key={stat.label}
            className="rounded-xl border border-black/[0.08] bg-white p-4"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-black/[0.05] text-black/70">
              <Icon size={18} />
            </span>
            <p className="mt-3 text-2xl font-semibold">{stat.value}</p>
            <p className="text-sm text-black/55">{stat.label}</p>
            <p className="mt-1 text-xs text-black/40">{stat.delta}</p>
          </div>
        );
      })}
    </div>

    <div className="mt-6 rounded-xl border border-black/[0.08] bg-white">
      <div className="border-b border-black/[0.06] px-5 py-4">
        <h2 className="text-sm font-semibold">Recent activity</h2>
      </div>
      <ul className="divide-y divide-black/[0.06]">
        {ACTIVITY.map((item) => (
          <li
            key={`${item.who}-${item.what}`}
            className="flex items-center gap-3 px-5 py-3.5 text-sm"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black/[0.06] text-xs font-semibold text-black/70">
              {item.who.slice(0, 1)}
            </span>
            <p className="min-w-0 flex-1 truncate text-black/70">
              <span className="font-medium text-black">{item.who}</span>{" "}
              {item.what}
            </p>
            <span className="shrink-0 text-xs text-black/40">{item.when}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default Dashboard;
