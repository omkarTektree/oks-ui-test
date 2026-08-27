// Configs for the BoardPage archetype (src/Pages/InnerPages/BoardPage.jsx).
// Each column: { id, title, accent, items: [{ id, title, tag?, priority?,
// points?, assignee?, due? }] }.

const col = (id, title, accent, items) => ({ id, title, accent, items });

export const BOARD_CONFIGS = {
  "/projects/team-board": {
    title: "Team board",
    subtitle: "Work in flight across the product team.",
    actionLabel: "Add card",
    columns: [
      col("todo", "To do", "info", [
        { id: "PT-201", title: "Spec the notifications centre", tag: "product", priority: "Medium", assignee: "Maya Chen" },
        { id: "PT-208", title: "Audit third-party scripts on marketing site", tag: "web", priority: "Low", assignee: "Lena Ito" },
        { id: "PT-212", title: "Draft Q4 OKRs", tag: "planning", priority: "High", assignee: "Amara Bello" },
      ]),
      col("doing", "In progress", "primary", [
        { id: "PT-190", title: "Onboarding v2 — review + confirm step", tag: "design", priority: "High", assignee: "Maya Chen" },
        { id: "PT-194", title: "Feature-flag the new flow", tag: "eng", priority: "High", assignee: "Diego Ruiz" },
        { id: "PT-199", title: "Data schema for CDP", tag: "eng", priority: "Medium", assignee: "Sam Okafor" },
      ]),
      col("review", "In review", "warning", [
        { id: "PT-181", title: "Checkout perf — lazy-load bundles", tag: "eng", priority: "Medium", assignee: "Priya Nair" },
        { id: "PT-186", title: "Empty-state illustrations", tag: "design", priority: "Low", assignee: "Lena Ito" },
      ]),
      col("done", "Done", "success", [
        { id: "PT-170", title: "Sprint 24 retro", tag: "planning", priority: "Low", assignee: "Nora Kim" },
        { id: "PT-176", title: "Northwind renewal handoff", tag: "gtm", priority: "High", assignee: "Owen Baxter" },
      ]),
    ],
  },

  "/projects/sprint-board": {
    title: "Sprint board",
    subtitle: "Sprint 25 · Jul 8 – Jul 19 · 52 points committed.",
    actionLabel: "Add story",
    columns: [
      col("backlog", "Sprint backlog", "default", [
        { id: "S25-11", title: "Notification preferences UI", tag: "design", points: 5, assignee: "Maya Chen" },
        { id: "S25-12", title: "Digest email templates", tag: "eng", points: 3, assignee: "Ethan Cole" },
        { id: "S25-14", title: "Rate-limit headers documentation", tag: "docs", points: 2, assignee: "Diego Ruiz" },
      ]),
      col("doing", "In progress", "primary", [
        { id: "S25-03", title: "Review + confirm onboarding step", tag: "eng", points: 8, assignee: "Diego Ruiz" },
        { id: "S25-05", title: "CDP ingestion pipeline", tag: "eng", points: 13, assignee: "Sam Okafor" },
      ]),
      col("review", "Code review", "warning", [
        { id: "S25-02", title: "Lazy-load dashboard charts", tag: "eng", points: 5, assignee: "Priya Nair" },
      ]),
      col("qa", "QA", "info", [
        { id: "S25-01", title: "Feature flag rollout tooling", tag: "eng", points: 5, assignee: "Ethan Cole" },
      ]),
      col("done", "Done", "success", [
        { id: "S25-07", title: "Fix chart legend overflow", tag: "eng", points: 2, assignee: "Diego Ruiz" },
        { id: "S25-08", title: "Support macros for v2", tag: "support", points: 3, assignee: "Elena Novak" },
        { id: "S25-09", title: "Pricing page copy", tag: "content", points: 2, assignee: "Priya Nair" },
      ]),
    ],
  },

  "/projects/kanban-view": {
    title: "Kanban view",
    subtitle: "Continuous flow with WIP limits.",
    actionLabel: "New task",
    columns: [
      col("inbox", "Inbox", "default", [
        { id: "K-51", title: "Customer asked for CSV export in reports", tag: "request", priority: "Medium" },
        { id: "K-52", title: "Investigate slow login on EU region", tag: "bug", priority: "High" },
        { id: "K-55", title: "Refresh the empty dashboard state", tag: "polish", priority: "Low" },
      ]),
      col("ready", "Ready · limit 4", "info", [
        { id: "K-44", title: "Add keyboard nav to command menu", tag: "a11y", priority: "Medium", assignee: "Maya Chen" },
        { id: "K-46", title: "Webhook retry backoff", tag: "eng", priority: "High", assignee: "Diego Ruiz" },
      ]),
      col("doing", "In progress · limit 3", "primary", [
        { id: "K-40", title: "Onboarding v2 flow", tag: "eng", priority: "High", assignee: "Diego Ruiz" },
        { id: "K-41", title: "Notifications spec", tag: "product", priority: "Medium", assignee: "Maya Chen" },
      ]),
      col("done", "Done", "success", [
        { id: "K-33", title: "Dark-mode contrast fixes", tag: "a11y", priority: "Medium", assignee: "Lena Ito" },
        { id: "K-35", title: "Ship changelog widget", tag: "eng", priority: "Low", assignee: "Ethan Cole" },
      ]),
    ],
  },
};
