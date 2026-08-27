import { Database, Gauge, Smile, TrendingUp } from "lucide-react";

export const BI_KPIS = [
  {
    icon: TrendingUp,
    label: "Revenue growth",
    value: "+8.4%",
    delta: 2.1,
    hint: "vs. previous quarter",
  },
  {
    icon: Smile,
    label: "Customer satisfaction",
    value: "4.4 / 5",
    delta: 0.2,
    deltaSuffix: "",
    hint: "NPS-weighted score",
  },
  {
    icon: Database,
    label: "Data accuracy",
    value: "98.6%",
    delta: 0.4,
    hint: "Validated pipelines",
  },
  {
    icon: Gauge,
    label: "Report adoption",
    value: "74%",
    delta: 3.5,
    deltaDirection: "down",
    hint: "Weekly active viewers",
  },
];

export const AI_INSIGHTS = [
  {
    text: "Revenue in the West region is outpacing forecast by 22% — consider reallocating ad spend.",
    when: "Updated 2h ago",
  },
  {
    text: "Support ticket volume for the Growth plan rose 14% week-over-week.",
    when: "Updated 5h ago",
  },
  {
    text: "Trial-to-paid conversion improved after the new onboarding flow shipped.",
    when: "Updated 1d ago",
  },
];

export const KPI_TARGETS = [
  { metric: "Quarterly revenue", current: "$1.42M", attainment: 89 },
  { metric: "New customers", current: "612", attainment: 87 },
  { metric: "Gross margin", current: "68%", attainment: 94 },
  { metric: "Support CSAT", current: "91%", attainment: 96 },
  { metric: "Churn rate", current: "2.1%", attainment: 66 },
  { metric: "Marketing ROI", current: "3.6x", attainment: 90 },
];

export const DATA_SOURCES = [
  { name: "Product analytics", detail: "2.4M records · synced 4 min ago", status: "Synced" },
  { name: "CRM (Salesforce)", detail: "180k records · synced 12 min ago", status: "Synced" },
  { name: "Billing (Stripe)", detail: "64k records · synced 1 hr ago", status: "Synced" },
  { name: "Support desk", detail: "38k records · synced 3 hr ago", status: "Delayed" },
];

export const REPORT_LIBRARY = [
  { name: "Quarterly business review", type: "Executive deck", views: "1,204" },
  { name: "Customer health scorecard", type: "Dashboard", views: "864" },
  { name: "Marketing funnel analysis", type: "Report", views: "742" },
  { name: "Regional revenue breakdown", type: "Dashboard", views: "588" },
  { name: "Support SLA compliance", type: "Report", views: "410" },
];

export const REGIONAL_REACH = [
  { region: "North America", value: 612000, display: "$612k" },
  { region: "Europe", value: 398000, display: "$398k" },
  { region: "Asia Pacific", value: 268000, display: "$268k" },
  { region: "Latin America", value: 96000, display: "$96k" },
  { region: "Middle East", value: 64000, display: "$64k" },
  { region: "Africa", value: 32000, display: "$32k" },
];
