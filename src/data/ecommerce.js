import { DollarSign, Package, ShoppingBag, UserPlus } from "lucide-react";

export const ECOM_KPIS = [
  {
    icon: DollarSign,
    label: "Revenue this week",
    value: "$77,800",
    delta: 14,
    hint: "vs. last week",
  },
  {
    icon: ShoppingBag,
    label: "Orders",
    value: "804",
    delta: 9.2,
    hint: "vs. last week",
  },
  {
    icon: UserPlus,
    label: "New customers",
    value: "312",
    delta: 6.1,
    hint: "vs. last week",
  },
  {
    icon: Package,
    label: "Products sold",
    value: "5,940",
    delta: 2.4,
    deltaDirection: "down",
    hint: "vs. last week",
  },
];

export const SALES_BY_DAY = [
  { day: "Mon", sales: 9200 },
  { day: "Tue", sales: 11400 },
  { day: "Wed", sales: 8600 },
  { day: "Thu", sales: 13800 },
  { day: "Fri", sales: 16200 },
  { day: "Sat", sales: 12100 },
  { day: "Sun", sales: 6500 },
];

export const FULFILMENT = [
  { status: "Delivered", count: 512 },
  { status: "Shipped", count: 168 },
  { status: "Processing", count: 88 },
  { status: "Pending", count: 36 },
];

export const ECOM_TILES = [
  { value: "248", label: "Products · 12 low stock" },
  { value: "3,842", label: "Customers · +124 new" },
  { value: "$305", label: "Avg. order value", delta: 4.2 },
  { value: "2.4%", label: "Cart abandonment", delta: 0.6, deltaDirection: "down" },
];

export const SALES_BY_CATEGORY = [
  { label: "Electronics", value: 142800, display: "$142,800" },
  { label: "Apparel", value: 98400, display: "$98,400" },
  { label: "Home", value: 64200, display: "$64,200" },
  { label: "Sports", value: 41900, display: "$41,900" },
];

export const TOP_SELLING = [
  {
    name: "Pro Wireless Headphones X9",
    category: "Electronics",
    sales: "1,284",
    revenue: "$38,220",
    trend: 18,
  },
  {
    name: "Organic Face Serum Duo",
    category: "Beauty",
    sales: "2,240",
    revenue: "$32,100",
    trend: 24,
  },
  {
    name: "Smart Fitness Watch Series 5",
    category: "Electronics",
    sales: "1,960",
    revenue: "$29,880",
    trend: 9,
  },
  {
    name: "Minimalist Leather Backpack",
    category: "Apparel",
    sales: "842",
    revenue: "$21,300",
    trend: -4,
  },
  {
    name: "Scented Soy Candle Trio",
    category: "Home",
    sales: "1,420",
    revenue: "$18,640",
    trend: 6,
  },
];

export const RECENT_ORDERS = [
  {
    id: "ORD-8842",
    customer: "Elena Park",
    date: "Jun 27, 2026",
    items: 2,
    total: "$365.04",
    status: "Processing",
  },
  {
    id: "ORD-8835",
    customer: "Marcus Chen",
    date: "Jun 25, 2026",
    items: 1,
    total: "$216.12",
    status: "Pending",
  },
  {
    id: "ORD-8828",
    customer: "Sofia Reyes",
    date: "Jun 24, 2026",
    items: 2,
    total: "$518.52",
    status: "Shipped",
  },
  {
    id: "ORD-8821",
    customer: "James Wu",
    date: "Jun 22, 2026",
    items: 2,
    total: "$116.64",
    status: "Delivered",
  },
];
