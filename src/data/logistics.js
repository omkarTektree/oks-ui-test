import { Gauge, PackageCheck, Timer, Truck } from "lucide-react";

export const LOGISTICS_KPIS = [
  {
    icon: Truck,
    label: "Active shipments",
    value: "412",
    delta: 7,
    deltaSuffix: "",
    hint: "Across 4 regions",
  },
  {
    icon: PackageCheck,
    label: "Delivered today",
    value: "186",
    delta: 8,
    deltaSuffix: "",
    hint: "vs. 172 yesterday",
  },
  {
    icon: Timer,
    label: "On-time rate",
    value: "91%",
    delta: 2,
    deltaDirection: "down",
    hint: "Target 95%",
  },
  {
    icon: Gauge,
    label: "Fleet utilization",
    value: "88%",
    delta: 3,
    hint: "42 of 48 active",
  },
];

export const WAREHOUSES = [
  {
    label: "West Coast Hub",
    value: 82,
    display: "82% full",
    sub: "18,420 units · 214 pending",
    tone: "warning",
  },
  {
    label: "Central Depot",
    value: 61,
    display: "61% full",
    sub: "11,860 units · 132 pending",
    tone: "primary",
  },
  {
    label: "East Coast Hub",
    value: 74,
    display: "74% full",
    sub: "15,300 units · 168 pending",
    tone: "primary",
  },
];

export const DELIVERY_STATUS = [
  { status: "Delivered", count: 2760 },
  { status: "In transit", count: 412 },
  { status: "Processing", count: 80 },
  { status: "Delayed", count: 32 },
];

export const FLEET = [
  { value: "28", label: "Trucks", sub: "24 active · 4 maintenance" },
  { value: "20", label: "Vans", sub: "18 active · 2 maintenance" },
  { value: "46", label: "Drivers", sub: "42 on shift today" },
];

export const SHIPMENT_VOLUME = [
  { month: "Jan", shipments: 2180 },
  { month: "Feb", shipments: 2420 },
  { month: "Mar", shipments: 2610 },
  { month: "Apr", shipments: 2880 },
  { month: "May", shipments: 3040 },
  { month: "Jun", shipments: 3284 },
];

export const REGIONAL_PERFORMANCE = [
  { value: "1,240", label: "West", sub: "93% on-time", meter: 93, tone: "success" },
  { value: "860", label: "Central", sub: "88% on-time", meter: 88, tone: "primary" },
  { value: "980", label: "East", sub: "94% on-time", meter: 94, tone: "success" },
  { value: "204", label: "South", sub: "82% on-time", meter: 82, tone: "warning" },
];

export const IN_TRANSIT = [
  {
    id: "SHP-88420",
    destination: "New York, NY",
    carrier: "FedEx Express",
    eta: "Jul 6, 10:30 AM",
    status: "In Transit",
  },
  {
    id: "SHP-88317",
    destination: "Chicago, IL",
    carrier: "UPS Ground",
    eta: "Jul 6, 2:00 PM",
    status: "In Transit",
  },
  {
    id: "SHP-88291",
    destination: "Miami, FL",
    carrier: "DHL Express",
    eta: "Jul 5, 6:00 PM",
    status: "Delayed",
  },
  {
    id: "SHP-88204",
    destination: "Seattle, WA",
    carrier: "USPS Priority",
    eta: "Jul 7, 9:00 AM",
    status: "Processing",
  },
  {
    id: "SHP-88155",
    destination: "Austin, TX",
    carrier: "FedEx Ground",
    eta: "Jul 5, 4:15 PM",
    status: "Delivered",
  },
];
