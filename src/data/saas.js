import { CircleDollarSign, Percent, Ratio, RefreshCw } from "lucide-react";

export const SAAS_KPIS = [
  {
    icon: CircleDollarSign,
    label: "MRR",
    value: "$48,200",
    delta: 12,
    hint: "Monthly recurring revenue",
  },
  {
    icon: RefreshCw,
    label: "ARR",
    value: "$578,400",
    delta: 14.6,
    hint: "Annualized run rate",
  },
  {
    icon: Percent,
    label: "Churn rate",
    value: "1.8%",
    delta: 0.3,
    deltaDirection: "down",
    hint: "Logo churn, monthly",
  },
  {
    icon: Ratio,
    label: "LTV : CAC",
    value: "3.4x",
    delta: 0.4,
    deltaSuffix: "x",
    hint: "Blended across plans",
  },
];

export const SAAS_HEALTH = [
  { value: "1.8%", label: "Logo churn", sub: "42 accounts", meter: 18, tone: "warning" },
  { value: "1.1%", label: "Revenue churn", sub: "Net of expansion", meter: 11, tone: "success" },
  { value: "114%", label: "Net revenue retention", sub: "Trailing 12mo", meter: 100, tone: "success" },
  { value: "82%", label: "Gross margin", sub: "Blended", meter: 82, tone: "primary" },
];

export const MRR_TREND = [
  { month: "Jan", mrr: 31200 },
  { month: "Feb", mrr: 33800 },
  { month: "Mar", mrr: 36400 },
  { month: "Apr", mrr: 40100 },
  { month: "May", mrr: 44600 },
  { month: "Jun", mrr: 48200 },
];

export const MRR_STATS = [
  { label: "New MRR", value: "+$5,820" },
  { label: "Churned", value: "-$640" },
];

export const PLAN_MIX = [
  { plan: "Enterprise", mrr: 26900, display: "$26,900", subscribers: "210 subscribers" },
  { plan: "Growth", mrr: 15100, display: "$15,100", subscribers: "840 subscribers" },
  { plan: "Starter", mrr: 6200, display: "$6,200", subscribers: "2,790 subscribers" },
];

export const COHORT_COLUMNS = ["M0", "M1", "M2", "M3", "M4", "M5"];

export const COHORT_ROWS = [
  { label: "Feb 2026", values: [100, 88, 81, 76, 72, 69] },
  { label: "Mar 2026", values: [100, 91, 84, 79, 75, null] },
  { label: "Apr 2026", values: [100, 90, 85, 80, null, null] },
  { label: "May 2026", values: [100, 93, 87, null, null, null] },
  { label: "Jun 2026", values: [100, 94, null, null, null, null] },
];

export const RECENT_SIGNUPS = [
  { name: "Elena Ford", company: "Northwind Traders", when: "12m ago", plan: "Enterprise" },
  { name: "Marcus Lee", company: "Solace Health", when: "48m ago", plan: "Growth" },
  { name: "Ines Duarte", company: "Vertex Logistics", when: "2h ago", plan: "Starter" },
  { name: "Tariq Amin", company: "Bright Path Media", when: "4h ago", plan: "Growth" },
  { name: "Sofia Rossi", company: "Cobalt Systems", when: "6h ago", plan: "Enterprise" },
  { name: "Owen Baxter", company: "Delta Freight", when: "9h ago", plan: "Starter" },
];
