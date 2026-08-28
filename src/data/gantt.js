// Configs for the GanttView archetype (src/Pages/InnerPages/projects/GanttView.jsx).
// Dates are ISO strings; the view scales bars against [start, end].

export const GANTT_CONFIGS = {
  "/projects/timeline": {
    title: "Timeline",
    subtitle: "Every project on one calendar — Jul–Dec 2026.",
    start: "2026-07-01",
    end: "2026-12-31",
    rows: [
      {
        label: "Mobile app redesign", sub: "Design · 3 people",
        bars: [{ label: "Design → ship", from: "2026-07-05", to: "2026-09-20", tone: "primary" }],
      },
      {
        label: "Customer data platform", sub: "Engineering · 2 people",
        bars: [{ label: "Build", from: "2026-07-15", to: "2026-11-10", tone: "info" }],
      },
      {
        label: "Checkout performance", sub: "Engineering · 2 people",
        bars: [{ label: "Optimise", from: "2026-07-01", to: "2026-08-12", tone: "success" }],
      },
      {
        label: "Marketing site v3", sub: "Design · 3 people",
        bars: [{ label: "Rebuild", from: "2026-08-01", to: "2026-11-28", tone: "warning" }],
      },
      {
        label: "Internal analytics tool", sub: "Data · 1 person",
        bars: [{ label: "MVP", from: "2026-09-01", to: "2026-10-25", tone: "primary" }],
      },
      {
        label: "Billing migration", sub: "Engineering · 2 people",
        bars: [{ label: "Migrate", from: "2026-10-01", to: "2026-12-15", tone: "danger" }],
      },
      {
        label: "Design system v2", sub: "Design · 2 people",
        bars: [{ label: "Foundations", from: "2026-07-10", to: "2026-08-30", tone: "primary" }],
      },
      {
        label: "Q4 launch", sub: "Cross-functional",
        bars: [{ label: "Prep + launch", from: "2026-11-15", to: "2026-12-20", tone: "success" }],
      },
    ],
  },

  "/projects/gantt-view": {
    title: "Gantt view",
    subtitle: "Mobile app redesign — task breakdown and dependencies.",
    start: "2026-07-01",
    end: "2026-09-30",
    rows: [
      {
        label: "Discovery", sub: "Research",
        bars: [{ label: "User interviews", from: "2026-07-01", to: "2026-07-14", tone: "info" }],
      },
      {
        label: "IA & flows", sub: "Design",
        bars: [{ label: "Information architecture", from: "2026-07-14", to: "2026-07-28", tone: "primary" }],
      },
      {
        label: "Wireframes", sub: "Design",
        bars: [{ label: "Low-fi screens", from: "2026-07-24", to: "2026-08-08", tone: "primary" }],
      },
      {
        label: "Visual design", sub: "Design",
        bars: [{ label: "Hi-fi + prototype", from: "2026-08-06", to: "2026-08-25", tone: "primary" }],
      },
      {
        label: "Design review", sub: "Stakeholders",
        bars: [{ label: "Sign-off", from: "2026-08-25", to: "2026-08-29", tone: "warning" }],
      },
      {
        label: "Frontend build", sub: "Engineering",
        bars: [{ label: "Implement screens", from: "2026-08-18", to: "2026-09-15", tone: "info" }],
      },
      {
        label: "Backend endpoints", sub: "Engineering",
        bars: [{ label: "New onboarding API", from: "2026-08-11", to: "2026-09-05", tone: "info" }],
      },
      {
        label: "QA", sub: "Quality",
        bars: [{ label: "Regression + fixes", from: "2026-09-08", to: "2026-09-22", tone: "warning" }],
      },
      {
        label: "Launch", sub: "Release",
        bars: [{ label: "Flag rollout", from: "2026-09-22", to: "2026-09-26", tone: "success" }],
      },
    ],
  },
};
