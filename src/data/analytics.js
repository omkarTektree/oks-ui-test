import { Activity, DollarSign, TrendingUp, Users } from "lucide-react";

export const KPIS = [
  {
    icon: DollarSign,
    label: "Total revenue",
    value: "$486,200",
    delta: 12.4,
    hint: "vs. previous 30 days",
  },
  {
    icon: Users,
    label: "Active users",
    value: "84,200",
    delta: 8.1,
    hint: "vs. previous 30 days",
  },
  {
    icon: TrendingUp,
    label: "Conversion rate",
    value: "3.24%",
    delta: 0.6,
    hint: "vs. previous 30 days",
  },
  {
    icon: Activity,
    label: "Avg. order value",
    value: "$68.40",
    delta: 2.1,
    deltaDirection: "down",
    hint: "vs. previous 30 days",
  },
];

export const REVENUE_SERIES = [
  { month: "Jan", revenue: 31000, orders: 1240, sessions: 42000 },
  { month: "Feb", revenue: 35200, orders: 1310, sessions: 45500 },
  { month: "Mar", revenue: 33800, orders: 1280, sessions: 44100 },
  { month: "Apr", revenue: 40100, orders: 1520, sessions: 51200 },
  { month: "May", revenue: 43600, orders: 1680, sessions: 55800 },
  { month: "Jun", revenue: 41900, orders: 1610, sessions: 53400 },
  { month: "Jul", revenue: 47800, orders: 1840, sessions: 60900 },
  { month: "Aug", revenue: 52200, orders: 1990, sessions: 64200 },
  { month: "Sep", revenue: 49500, orders: 1910, sessions: 62100 },
  { month: "Oct", revenue: 54200, orders: 2110, sessions: 67400 },
  { month: "Nov", revenue: 51800, orders: 2020, sessions: 65100 },
  { month: "Dec", revenue: 58600, orders: 2280, sessions: 72300 },
];

export const TRAFFIC_SOURCES = [
  { source: "Organic search", visits: 32000 },
  { source: "Direct", visits: 22700 },
  { source: "Social", visits: 17700 },
  { source: "Referral", visits: 11800 },
];

export const FUNNEL = [
  { label: "Visitors", value: 84200 },
  { label: "Signups", value: 32100 },
  { label: "Trials", value: 14800 },
  { label: "Customers", value: 6420 },
];

export const DEVICE_SESSIONS = [
  { label: "Desktop", value: 58 },
  { label: "Mobile", value: 34 },
  { label: "Tablet", value: 8 },
];

export const MONTHLY_TARGET = {
  percent: 78,
  current: "$98.4k",
  target: "$126k",
  currentLabel: "This month",
  note: "You're ahead of schedule",
};

export const TOP_PRODUCTS = [
  {
    name: "Nimbus Wireless Headset",
    sku: "SKU-2281",
    channel: "Online store",
    sales: "1,204",
    revenue: "$54,180",
    status: "In stock",
  },
  {
    name: "Aurora Desk Lamp",
    sku: "SKU-1042",
    channel: "Marketplace",
    sales: "986",
    revenue: "$28,400",
    status: "Low stock",
  },
  {
    name: "Voyage Travel Backpack",
    sku: "SKU-3390",
    channel: "Online store",
    sales: "842",
    revenue: "$37,890",
    status: "In stock",
  },
  {
    name: "Pulse Fitness Tracker",
    sku: "SKU-4471",
    channel: "Retail partner",
    sales: "631",
    revenue: "$18,930",
    status: "In stock",
  },
  {
    name: "Studio Mechanical Keyboard",
    sku: "SKU-5029",
    channel: "Marketplace",
    sales: "410",
    revenue: "$22,550",
    status: "Out of stock",
  },
];

export const ACTIVITY = [
  {
    who: "Maya Chen",
    what: "published a new revenue report.",
    when: "12 minutes ago",
  },
  {
    who: "System",
    what: "flagged a spike in checkout errors.",
    when: "48 minutes ago",
  },
  {
    who: "Diego Ruiz",
    what: "closed the Q3 marketing campaign.",
    when: "2 hours ago",
  },
  {
    who: "Priya Nair",
    what: "invited 3 new teammates to the workspace.",
    when: "5 hours ago",
  },
];
