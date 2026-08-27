import {
  Briefcase,
  Clock,
  DollarSign,
  Handshake,
  Percent,
  Target,
  Trophy,
  Users,
} from "lucide-react";

export const SALES_KPIS = [
  {
    icon: DollarSign,
    label: "Revenue closed",
    value: "$324,000",
    delta: 16.2,
    hint: "This quarter",
  },
  {
    icon: Trophy,
    label: "Deals won",
    value: "118",
    delta: 9.4,
    hint: "This quarter",
  },
  {
    icon: Percent,
    label: "Win rate",
    value: "58%",
    delta: 2.1,
    hint: "62 of 118 closed",
  },
  {
    icon: Handshake,
    label: "Avg. deal size",
    value: "$2,740",
    delta: 1.3,
    deltaDirection: "down",
    hint: "This quarter",
  },
];

export const PIPELINE_STATS = [
  {
    icon: Briefcase,
    label: "Pipeline value",
    value: "$862,400",
    hint: "142 open deals",
  },
  {
    icon: Target,
    label: "Forecasted",
    value: "$410,200",
    hint: "This quarter",
  },
  {
    icon: Clock,
    label: "Avg. sales cycle",
    value: "18 days",
    hint: "Down from 22 days",
  },
  {
    icon: Users,
    label: "New leads",
    value: "94",
    hint: "Last 30 days",
  },
];

export const SALES_TREND = [
  { month: "Jan", value: 21000 },
  { month: "Feb", value: 24800 },
  { month: "Mar", value: 23200 },
  { month: "Apr", value: 27600 },
  { month: "May", value: 31400 },
  { month: "Jun", value: 29800 },
  { month: "Jul", value: 33200 },
  { month: "Aug", value: 35600 },
  { month: "Sep", value: 32900 },
  { month: "Oct", value: 37100 },
  { month: "Nov", value: 34800 },
  { month: "Dec", value: 38200 },
];

export const QUOTA = {
  title: "Quota attainment",
  subtitle: "Q3 target: $420k",
  percent: 77,
  current: "$324k",
  target: "$420k",
  currentLabel: "Closed",
  people: [
    { name: "Amara Bello", percent: 92 },
    { name: "Jonas Weber", percent: 84 },
    { name: "Lena Ito", percent: 68 },
    { name: "Sam Okafor", percent: 54 },
  ],
};

export const SALES_BY_REGION = [
  { region: "North America", value: 142800, display: "$142,800" },
  { region: "Europe", value: 88300, display: "$88,300" },
  { region: "Asia Pacific", value: 56900, display: "$56,900" },
  { region: "Latin America", value: 24100, display: "$24,100" },
  { region: "Middle East & Africa", value: 12500, display: "$12,500" },
];

export const SALES_LEADERBOARD = [
  { name: "Amara Bello", value: "$96,400", sub: "34 deals closed" },
  { name: "Jonas Weber", value: "$81,200", sub: "29 deals closed" },
  { name: "Lena Ito", value: "$68,900", sub: "24 deals closed" },
  { name: "Sam Okafor", value: "$52,300", sub: "19 deals closed" },
  { name: "Nora Kim", value: "$47,100", sub: "17 deals closed" },
];

export const RECENT_DEALS = [
  {
    customer: "Northwind Traders",
    industry: "Retail",
    amount: "$24,600",
    status: "Won",
  },
  {
    customer: "Solace Health",
    industry: "Healthcare",
    amount: "$12,400",
    status: "Won",
  },
  {
    customer: "Vertex Logistics",
    industry: "Logistics",
    amount: "$9,800",
    status: "Pending",
  },
  {
    customer: "Bright Path Media",
    industry: "Media",
    amount: "$4,200",
    status: "Won",
  },
  {
    customer: "Cobalt Systems",
    industry: "Technology",
    amount: "$31,900",
    status: "Lost",
  },
];
