import {
  ArrowLeftRight,
  ArrowDownLeft,
  ArrowUpRight,
  Landmark,
  PiggyBank,
  TrendingUp,
  Wallet,
} from "lucide-react";

export const FINANCE_KPIS = [
  {
    icon: Wallet,
    label: "Total revenue",
    value: "$248,400",
    delta: 18.2,
    hint: "Year to date",
  },
  {
    icon: TrendingUp,
    label: "Total expenses",
    value: "$96,180",
    delta: 4.1,
    deltaDirection: "down",
    hint: "Year to date",
  },
  {
    icon: PiggyBank,
    label: "Net profit",
    value: "$152,220",
    delta: 24.6,
    hint: "61.3% margin",
  },
  {
    icon: Landmark,
    label: "Cash on hand",
    value: "$412,860",
    delta: 6.8,
    hint: "6 accounts",
  },
];

export const CASH_FLOW = [
  {
    icon: ArrowDownLeft,
    label: "Money in",
    value: "$248,400",
    hint: "48 transactions",
  },
  {
    icon: ArrowUpRight,
    label: "Money out",
    value: "$96,180",
    hint: "126 transactions",
  },
  {
    icon: ArrowLeftRight,
    label: "Net cash flow",
    value: "$152,220",
    hint: "vs. $128,700 last period",
  },
];

export const REV_EXP_SERIES = [
  { month: "Jan", revenue: 16200, expenses: 7100 },
  { month: "Feb", revenue: 18400, expenses: 7600 },
  { month: "Mar", revenue: 19100, expenses: 7900 },
  { month: "Apr", revenue: 22600, expenses: 8300 },
  { month: "May", revenue: 25200, expenses: 8900 },
  { month: "Jun", revenue: 28400, expenses: 9400 },
];

export const REV_EXP_STATS = [
  { label: "Revenue", value: "$248.4k" },
  { label: "Expenses", value: "$96.2k" },
  { label: "Net profit", value: "$152.2k" },
];

export const EXPENSE_BREAKDOWN = [
  { category: "Payroll", amount: 42100, display: "$42,100" },
  { category: "Software & tools", amount: 18600, display: "$18,600" },
  { category: "Marketing", amount: 14200, display: "$14,200" },
  { category: "Office & ops", amount: 12400, display: "$12,400" },
  { category: "Travel", amount: 8880, display: "$8,880" },
];

export const BUDGET_USAGE = [
  {
    label: "Marketing",
    value: 89,
    display: "$14,200 / $16,000",
    sub: "89% used · $1,800 remaining",
    tone: "danger",
  },
  {
    label: "Engineering tools",
    value: 85,
    display: "$18,600 / $22,000",
    sub: "85% used · $3,400 remaining",
    tone: "danger",
  },
  {
    label: "Office & ops",
    value: 62,
    display: "$12,400 / $20,000",
    sub: "62% used · $7,600 remaining",
    tone: "warning",
  },
  {
    label: "Travel",
    value: 49,
    display: "$8,880 / $18,000",
    sub: "49% used · $9,120 remaining",
    tone: "primary",
  },
];

export const RECENT_TRANSACTIONS = [
  { party: "Acme Corporation", note: "Invoice paid", amount: 12400 },
  { party: "AWS Cloud Services", note: "Monthly usage", amount: -2180 },
  { party: "Northwind Inc.", note: "Invoice paid", amount: 8600 },
  { party: "Payroll — June", note: "Salaries", amount: -42100 },
  { party: "Globex Ltd. refund", note: "Credit note", amount: -1240 },
  { party: "Figma Enterprise", note: "Subscription", amount: -860 },
];
