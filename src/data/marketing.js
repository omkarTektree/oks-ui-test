import { DollarSign, MailOpen, TrendingUp, Users } from "lucide-react";

export const MARKETING_KPIS = [
  {
    icon: DollarSign,
    label: "Ad spend",
    value: "$48,290",
    delta: 18.2,
    deltaDirection: "down",
    hint: "This month",
  },
  {
    icon: Users,
    label: "New leads",
    value: "3,842",
    delta: 9.4,
    hint: "This month",
  },
  {
    icon: TrendingUp,
    label: "Avg. ROAS",
    value: "4.6x",
    delta: 2.1,
    hint: "Across channels",
  },
  {
    icon: MailOpen,
    label: "Open rate",
    value: "38.4%",
    delta: 1.3,
    deltaDirection: "down",
    hint: "Email campaigns",
  },
];

export const SPEND_LEADS = [
  { month: "Jan", spend: 38200, leads: 2810 },
  { month: "Feb", spend: 41100, leads: 3020 },
  { month: "Mar", spend: 39600, leads: 2960 },
  { month: "Apr", spend: 44800, leads: 3380 },
  { month: "May", spend: 46200, leads: 3610 },
  { month: "Jun", spend: 48290, leads: 3842 },
];

export const TRAFFIC_BY_CHANNEL = [
  { channel: "Organic search", sessions: 34200 },
  { channel: "Paid search", sessions: 26100 },
  { channel: "Social", sessions: 18400 },
  { channel: "Email", sessions: 14200 },
  { channel: "Referral", sessions: 7900 },
];

export const MARKETING_FUNNEL = [
  { label: "Impressions", value: 1240000 },
  { label: "Clicks", value: 88400 },
  { label: "Leads", value: 3842 },
  { label: "MQLs", value: 1160 },
  { label: "Customers", value: 284 },
];

export const CHANNEL_ROAS = [
  { label: "Retention SMS", value: 7.1, display: "7.1x", tone: "success" },
  { label: "Summer Sale Email", value: 6.8, display: "6.8x", tone: "success" },
  { label: "Q3 Enterprise Push", value: 5.2, display: "5.2x", tone: "primary" },
  { label: "LinkedIn ABM", value: 3.4, display: "3.4x", tone: "warning" },
  { label: "Holiday Landing Page", value: 2.9, display: "2.9x", tone: "warning" },
];

export const CAMPAIGNS = [
  {
    name: "Q3 Enterprise Push",
    channel: "Google Ads",
    budget: "$12,400",
    roas: "5.2x",
    status: "Active",
  },
  {
    name: "Summer Sale Email",
    channel: "Email",
    budget: "$2,100",
    roas: "6.8x",
    status: "Active",
  },
  {
    name: "LinkedIn ABM",
    channel: "LinkedIn",
    budget: "$9,800",
    roas: "3.4x",
    status: "Active",
  },
  {
    name: "Retention SMS",
    channel: "SMS",
    budget: "$650",
    roas: "7.1x",
    status: "Scheduled",
  },
  {
    name: "Holiday Landing Page",
    channel: "Organic",
    budget: "$0",
    roas: "2.9x",
    status: "Paused",
  },
];
