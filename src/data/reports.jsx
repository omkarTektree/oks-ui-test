// Configs for the ReportPage archetype (src/Pages/InnerPages/ReportPage.jsx).
// Pure data — reuses the /charts datasets. Table column `format` is one of
// "money" | "strong" | "status" | "trend".

import { MONTHLY, PLAN_MIX, REGIONS, CHANNELS, TOP_ACCOUNTS } from "./charts";

const rev = (key, name) => ({ key, label: name, data: MONTHLY, x: "month", series: key, dataFormat: { prefix: key === "signups" || key === "users" ? "" : "$", format: "compact" } });

export const REPORT_CONFIGS = {
  "/reports/sales-report": {
    title: "Sales report",
    subtitle: "Bookings, pipeline and rep performance.",
    period: "Q3 2026",
    kpis: [
      { label: "Bookings", value: "$1.31M", delta: 9.2, hint: "closed-won QTD" },
      { label: "Win rate", value: "24%", delta: 1.4, hint: "of qualified deals" },
      { label: "Avg. deal size", value: "$18.4k", delta: 3.1, hint: "closed-won" },
      { label: "Sales cycle", value: "41 days", delta: 2.0, deltaDirection: "down", hint: "lead to close" },
    ],
    chart: {
      title: "Revenue trend", headline: "$1.31M", delta: 9.2, deltaLabel: "vs. last quarter",
      views: [rev("revenue", "Revenue"), rev("expenses", "Cost of sales")],
    },
    breakdown: {
      kind: "meter", title: "Bookings by region", subtitle: "This quarter",
      items: REGIONS.map((r) => ({ label: r.region, value: r.value })),
      scaleToMax: true, formatValue: (v) => `$${(v / 1000).toFixed(0)}k`,
    },
    table: {
      title: "Top accounts", subtitle: "By contribution this quarter",
      getRowKey: (r) => r.name,
      columns: [
        { key: "name", header: "Account", format: "strong" },
        { key: "plan", header: "Plan" },
        { key: "seats", header: "Seats", align: "right" },
        { key: "mrr", header: "MRR", align: "right", format: "money" },
        { key: "trend", header: "Trend", align: "right", format: "trend" },
      ],
      rows: TOP_ACCOUNTS,
    },
  },

  "/reports/revenue-report": {
    title: "Revenue report",
    subtitle: "Recurring revenue, movements and concentration.",
    kpis: [
      { label: "MRR", value: "$486.2k", delta: 12.4, hint: "end of period" },
      { label: "Net new MRR", value: "$34.9k", delta: 7.7, hint: "new + expansion − churn" },
      { label: "Gross margin", value: "78%", delta: 1.1, hint: "trailing 12 mo" },
      { label: "NRR", value: "114%", delta: 4.0, hint: "net revenue retention" },
    ],
    chart: {
      title: "Revenue vs expenses", headline: "$486,200", delta: 12.4, deltaLabel: "MRR vs. last year",
      views: [
        { key: "both", label: "Both", data: MONTHLY, x: "month", series: [{ key: "revenue", name: "Revenue" }, { key: "expenses", name: "Expenses" }], dataFormat: { prefix: "$", format: "compact" } },
        rev("revenue", "Revenue"),
      ],
      height: 320,
    },
    breakdown: {
      kind: "donut", title: "Revenue by plan", subtitle: "Share of MRR",
      data: PLAN_MIX, categoryKey: "plan", valueKey: "value",
      centerValue: "$486k", centerLabel: "MRR",
    },
    table: {
      title: "Revenue by region", subtitle: "Trailing 12 months",
      getRowKey: (r) => r.region,
      columns: [
        { key: "region", header: "Region", format: "strong" },
        { key: "value", header: "Revenue", align: "right", format: "money" },
      ],
      rows: REGIONS,
    },
  },

  "/reports/customer-report": {
    title: "Customer report",
    subtitle: "Growth, retention and health of the customer base.",
    kpis: [
      { label: "Customers", value: "9,340", delta: 6.5, hint: "active subscriptions" },
      { label: "Net adds", value: "+412", delta: 8.0, hint: "this period" },
      { label: "Logo churn", value: "1.8%", delta: 0.3, deltaDirection: "down", hint: "monthly" },
      { label: "Avg. tenure", value: "18 mo", delta: 1.5, hint: "active customers" },
    ],
    chart: {
      title: "Active users", headline: "84,200", delta: 8.1, deltaLabel: "vs. last month",
      views: [rev("users", "Active users"), rev("signups", "Signups")],
    },
    breakdown: {
      kind: "donut", title: "Customers by plan", subtitle: "Share of base",
      data: PLAN_MIX, categoryKey: "plan", valueKey: "value",
      centerValue: "9,340", centerLabel: "customers",
    },
    table: {
      title: "Largest customers", subtitle: "By seats",
      getRowKey: (r) => r.name,
      columns: [
        { key: "name", header: "Account", format: "strong" },
        { key: "plan", header: "Plan" },
        { key: "seats", header: "Seats", align: "right" },
        { key: "mrr", header: "MRR", align: "right", format: "money" },
      ],
      rows: TOP_ACCOUNTS,
    },
  },

  "/reports/project-report": {
    title: "Project report",
    subtitle: "Delivery health across every active project.",
    period: "This month",
    kpis: [
      { label: "Active projects", value: "18", delta: 3, hint: "across 6 teams" },
      { label: "On-time rate", value: "91%", delta: 1.9, hint: "delivery accuracy" },
      { label: "Velocity", value: "47 pts", delta: 5.8, hint: "per sprint avg." },
      { label: "Completed tasks", value: "342", delta: 14.2, hint: "this month" },
    ],
    chart: {
      title: "Throughput", headline: "342 tasks", delta: 14.2, deltaLabel: "vs. last month",
      views: [rev("signups", "Tasks done")],
    },
    breakdown: {
      kind: "meter", title: "Projects by status", subtitle: "Current",
      items: [
        { label: "On track", value: 14, tone: "success" },
        { label: "At risk", value: 6, tone: "warning" },
        { label: "Delayed", value: 2, tone: "danger" },
        { label: "Completed", value: 32, tone: "primary" },
      ],
      scaleToMax: true, unit: "",
    },
    table: {
      title: "Project health", subtitle: "Active projects",
      getRowKey: (r) => r.name,
      columns: [
        { key: "name", header: "Project", format: "strong" },
        { key: "lead", header: "Lead" },
        { key: "due", header: "Due" },
        { key: "status", header: "Status", format: "status" },
      ],
      rows: [
        { name: "Mobile app redesign", lead: "Amara Bello", due: "Jul 18", status: "On track" },
        { name: "Customer data platform", lead: "Sam Okafor", due: "Aug 02", status: "At risk" },
        { name: "Checkout performance", lead: "Priya Nair", due: "Jul 12", status: "On track" },
        { name: "Marketing site v3", lead: "Maya Chen", due: "Aug 20", status: "Delayed" },
        { name: "Internal analytics tool", lead: "Jonas Weber", due: "Jul 25", status: "On track" },
        { name: "Billing migration", lead: "Diego Ruiz", due: "Sep 01", status: "On track" },
      ],
    },
  },

  "/reports/marketing-report": {
    title: "Marketing report",
    subtitle: "Spend, pipeline contribution and channel efficiency.",
    kpis: [
      { label: "Spend", value: "$182k", delta: 4.4, hint: "this period" },
      { label: "MQLs", value: "3,240", delta: 9.1, hint: "marketing qualified" },
      { label: "Pipeline created", value: "$2.1M", delta: 12.0, hint: "sourced + influenced" },
      { label: "Blended CAC", value: "$1,180", delta: 2.6, deltaDirection: "down", hint: "per customer" },
    ],
    chart: {
      title: "Signups", headline: "2,280", delta: 11.0, deltaLabel: "vs. last month",
      views: [rev("signups", "Signups"), rev("users", "Traffic")],
    },
    breakdown: {
      kind: "donut", title: "Traffic by channel", subtitle: "Sessions, last 30 days",
      data: CHANNELS, categoryKey: "channel", valueKey: "value",
      centerValue: "92.8k", centerLabel: "sessions",
    },
    table: {
      title: "Channel performance", subtitle: "Last 30 days",
      getRowKey: (r) => r.channel,
      columns: [
        { key: "channel", header: "Channel", format: "strong" },
        { key: "sessions", header: "Sessions", align: "right" },
        { key: "leads", header: "Leads", align: "right" },
        { key: "cpl", header: "Cost / lead", align: "right", format: "money" },
      ],
      rows: [
        { channel: "Organic search", sessions: "32,000", leads: 640, cpl: 0 },
        { channel: "Paid search", sessions: "18,400", leads: 720, cpl: 88 },
        { channel: "Paid social", sessions: "14,100", leads: 510, cpl: 104 },
        { channel: "Email", sessions: "8,600", leads: 430, cpl: 12 },
        { channel: "Referral", sessions: "11,800", leads: 240, cpl: 0 },
      ],
    },
  },
};
