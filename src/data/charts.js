// Datasets for the /charts/* section. Kept generic so pages can mix and match.

export const MONTHLY = [
  { month: "Jan", revenue: 31000, expenses: 21400, users: 42000, signups: 1240 },
  { month: "Feb", revenue: 35200, expenses: 22100, users: 45500, signups: 1310 },
  { month: "Mar", revenue: 33800, expenses: 23800, users: 44100, signups: 1280 },
  { month: "Apr", revenue: 40100, expenses: 24900, users: 51200, signups: 1520 },
  { month: "May", revenue: 43600, expenses: 25600, users: 55800, signups: 1680 },
  { month: "Jun", revenue: 41900, expenses: 26100, users: 53400, signups: 1610 },
  { month: "Jul", revenue: 47800, expenses: 27300, users: 60900, signups: 1840 },
  { month: "Aug", revenue: 52200, expenses: 28800, users: 64200, signups: 1990 },
  { month: "Sep", revenue: 49500, expenses: 29100, users: 62100, signups: 1910 },
  { month: "Oct", revenue: 54200, expenses: 30400, users: 67400, signups: 2110 },
  { month: "Nov", revenue: 51800, expenses: 31000, users: 65100, signups: 2020 },
  { month: "Dec", revenue: 58600, expenses: 32200, users: 72300, signups: 2280 },
];

export const QUARTERLY = [
  { quarter: "Q1", free: 820, pro: 460, team: 180 },
  { quarter: "Q2", free: 910, pro: 540, team: 220 },
  { quarter: "Q3", free: 1020, pro: 620, team: 260 },
  { quarter: "Q4", free: 1140, pro: 700, team: 310 },
];

export const PLAN_MIX = [
  { plan: "Free", value: 5400 },
  { plan: "Pro", value: 2600 },
  { plan: "Team", value: 1100 },
  { plan: "Enterprise", value: 240 },
];

export const CHANNELS = [
  { channel: "Organic search", value: 32000 },
  { channel: "Direct", value: 22700 },
  { channel: "Social", value: 17700 },
  { channel: "Referral", value: 11800 },
  { channel: "Email", value: 8600 },
];

export const REGIONS = [
  { region: "North America", value: 214000 },
  { region: "Europe", value: 168000 },
  { region: "Asia Pacific", value: 96000 },
  { region: "Latin America", value: 38000 },
  { region: "MEA", value: 21000 },
];

export const DEVICE = [
  { device: "Desktop", value: 58 },
  { device: "Mobile", value: 34 },
  { device: "Tablet", value: 8 },
];

export const KPI_CARDS = [
  { label: "Revenue", value: "$486,200", delta: 12.4, hint: "vs. prev. 30 days" },
  { label: "Active users", value: "84,200", delta: 8.1, hint: "vs. prev. 30 days" },
  { label: "Conversion", value: "3.24%", delta: 0.6, hint: "visit → signup" },
  { label: "Churn", value: "1.8%", delta: 0.3, deltaDirection: "down", hint: "monthly logo churn" },
  { label: "NRR", value: "114%", delta: 4, hint: "net revenue retention" },
  { label: "ARPU", value: "$41.20", delta: 1.9, hint: "per active user" },
  { label: "CAC payback", value: "9.2 mo", delta: 0.8, deltaDirection: "down", hint: "blended" },
  { label: "NPS", value: "48", delta: 3, hint: "last survey" },
];

export const KPI_TARGETS = [
  { metric: "New MRR", actual: 42800, target: 40000, unit: "$" },
  { metric: "Signups", actual: 2280, target: 2100, unit: "" },
  { metric: "Activation rate", actual: 61, target: 65, unit: "%" },
  { metric: "Support CSAT", actual: 94, target: 92, unit: "%" },
  { metric: "Uptime", actual: 99.98, target: 99.9, unit: "%" },
  { metric: "Trial → paid", actual: 22, target: 25, unit: "%" },
];

export const RETENTION_COLUMNS = ["M0", "M1", "M2", "M3", "M4", "M5", "M6"];
export const RETENTION_ROWS = [
  { label: "Jan", values: [100, 62, 48, 41, 37, 34, 32] },
  { label: "Feb", values: [100, 64, 51, 44, 39, 36, null] },
  { label: "Mar", values: [100, 60, 46, 39, 35, null, null] },
  { label: "Apr", values: [100, 66, 53, 46, null, null, null] },
  { label: "May", values: [100, 68, 55, null, null, null, null] },
  { label: "Jun", values: [100, 65, null, null, null, null, null] },
  { label: "Jul", values: [100, null, null, null, null, null, null] },
];

// Weekly activity heatmap — hours (rows) x weekdays (cols), value 0–100.
export const WEEK_DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
export const HEAT_HOURS = ["00", "03", "06", "09", "12", "15", "18", "21"];
export const ACTIVITY_HEAT = HEAT_HOURS.map((hour, r) => ({
  label: hour,
  values: WEEK_DAYS.map((_, c) => {
    const base = [6, 8, 40, 82, 74, 66, 58, 30][r];
    const weekend = c >= 5 ? 0.55 : 1;
    const jitter = ((r * 7 + c * 13) % 11) - 5;
    return Math.max(0, Math.min(100, Math.round(base * weekend + jitter)));
  }),
}));

export const TOP_ACCOUNTS = [
  { name: "Northwind Traders", plan: "Enterprise", mrr: 8400, seats: 210, trend: 6 },
  { name: "Cobalt Systems", plan: "Team", mrr: 3200, seats: 64, trend: 2 },
  { name: "Vertex Logistics", plan: "Team", mrr: 2900, seats: 58, trend: -3 },
  { name: "Bright Path Media", plan: "Pro", mrr: 1800, seats: 22, trend: 9 },
  { name: "Solace Health", plan: "Enterprise", mrr: 6100, seats: 140, trend: 4 },
  { name: "Delta Freight", plan: "Pro", mrr: 1400, seats: 18, trend: 1 },
];

export const FUNNEL_STAGES = [
  { label: "Visitors", value: 84200 },
  { label: "Signups", value: 32100 },
  { label: "Activated", value: 19600 },
  { label: "Trials", value: 14800 },
  { label: "Paid", value: 6420 },
];
