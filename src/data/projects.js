import { CalendarClock, CheckCircle2, FolderKanban, Gauge } from "lucide-react";

export const PROJECT_KPIS = [
  {
    icon: FolderKanban,
    label: "Active projects",
    value: "18",
    delta: 3,
    deltaSuffix: "",
    hint: "Across 6 teams",
  },
  {
    icon: CheckCircle2,
    label: "Completed tasks",
    value: "342",
    delta: 14.2,
    hint: "This month",
  },
  {
    icon: Gauge,
    label: "Team velocity",
    value: "47 pts",
    delta: 5.8,
    hint: "Per sprint avg.",
  },
  {
    icon: CalendarClock,
    label: "On-time rate",
    value: "91%",
    delta: 1.9,
    deltaDirection: "down",
    hint: "Delivery accuracy",
  },
];

export const PROJECT_HEALTH = [
  { label: "On track", value: "14", meter: 58, tone: "success" },
  { label: "At risk", value: "6", meter: 25, tone: "warning" },
  { label: "Delayed", value: "2", meter: 8, tone: "danger" },
  { label: "Completed", value: "32", meter: 92, tone: "primary" },
];

export const PROJECTS = [
  {
    name: "Mobile app redesign",
    meta: "48 tasks · 82% done",
    team: ["Amara Bello", "Jonas Weber", "Lena Ito"],
    due: "Jul 18",
    status: "On track",
    progress: 82,
  },
  {
    name: "Customer data platform",
    meta: "64 tasks · 46% done",
    team: ["Sam Okafor", "Nora Kim"],
    due: "Aug 02",
    status: "At risk",
    progress: 46,
  },
  {
    name: "Checkout performance",
    meta: "22 tasks · 95% done",
    team: ["Priya Nair", "Diego Ruiz"],
    due: "Jul 12",
    status: "On track",
    progress: 95,
  },
  {
    name: "Marketing site v3",
    meta: "36 tasks · 28% done",
    team: ["Maya Chen", "Lena Ito", "Sam Okafor"],
    due: "Aug 20",
    status: "Delayed",
    progress: 28,
  },
  {
    name: "Internal analytics tool",
    meta: "19 tasks · 60% done",
    team: ["Jonas Weber"],
    due: "Jul 25",
    status: "On track",
    progress: 60,
  },
];

export const TEAM_WORKLOAD = [
  { name: "Amara Bello", value: "12 tasks", sub: "92% capacity", percent: 92 },
  { name: "Jonas Weber", value: "8 tasks", sub: "68% capacity", percent: 68 },
  { name: "Lena Ito", value: "6 tasks", sub: "54% capacity", percent: 54 },
  { name: "Sam Okafor", value: "5 tasks", sub: "41% capacity", percent: 41 },
];

export const DEADLINES = [
  {
    title: "Ship onboarding flow v2",
    meta: "Mobile app redesign",
    date: "Jul 12",
    tag: { label: "2 days left", tone: "danger" },
    tone: "danger",
  },
  {
    title: "Finalize data schema",
    meta: "Customer data platform",
    date: "Jul 14",
    tag: { label: "4 days left", tone: "warning" },
    tone: "warning",
  },
  {
    title: "QA regression pass",
    meta: "Checkout performance",
    date: "Jul 18",
    tag: { label: "8 days left", tone: "primary" },
    tone: "primary",
  },
  {
    title: "Stakeholder review",
    meta: "Marketing site v3",
    date: "Jul 22",
    tag: { label: "12 days left", tone: "primary" },
    tone: "primary",
  },
];

export const SPRINT_VELOCITY = [
  { sprint: "S17", done: 38, planned: 42 },
  { sprint: "S18", done: 44, planned: 45 },
  { sprint: "S19", done: 41, planned: 48 },
  { sprint: "S20", done: 47, planned: 46 },
  { sprint: "S21", done: 45, planned: 50 },
  { sprint: "S22", done: 52, planned: 50 },
  { sprint: "S23", done: 49, planned: 54 },
  { sprint: "S24", done: 51, planned: 52 },
];

export const PROJECT_ACTIVITY = [
  {
    who: "Priya Nair",
    what: "moved 4 tasks to Done in Checkout performance.",
    when: "20 minutes ago",
  },
  {
    who: "Diego Ruiz",
    what: "flagged a blocker on Customer data platform.",
    when: "1 hour ago",
  },
  {
    who: "Maya Chen",
    what: "created a new sprint for Marketing site v3.",
    when: "3 hours ago",
  },
  {
    who: "Jonas Weber",
    what: "commented on Mobile app redesign.",
    when: "6 hours ago",
  },
  {
    who: "Sam Okafor",
    what: "invited Nora Kim to Internal analytics tool.",
    when: "1 day ago",
  },
];
