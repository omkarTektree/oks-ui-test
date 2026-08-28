import { Chip } from "oks-ui";
import { Star } from "lucide-react";
import EntityCell from "../Components/ui/EntityCell";
import StatusChip from "../Components/ui/StatusChip";
import { PEOPLE } from "./people";

/* --------------------------------------------------------------- helpers --- */

const pick = (arr, n) => arr[Math.abs(n) % arr.length];
const money = (n) => `$${n.toLocaleString()}`;

const nameChip = (value, tone = "default") => (
  <Chip size="sm" variant="soft" color={tone}>
    {value}
  </Chip>
);

/* --------------------------------------------------------------- datasets -- */

const COMPANIES = [
  "Northwind Traders", "Solace Health", "Vertex Logistics", "Bright Path Media",
  "Cobalt Systems", "Delta Freight", "Acme Inc.", "Globex Ltd.", "Initech",
  "Umbra Corp", "Hooli", "Pied Piper", "Stark Industries", "Wayne Enterprises",
];
const PRODUCTS = [
  "Pro Wireless Headphones X9", "Organic Face Serum Duo", "Smart Fitness Watch 5",
  "Minimalist Leather Backpack", "Scented Soy Candle Trio", "Aurora Desk Lamp",
  "Voyage Travel Backpack", "Studio Mechanical Keyboard", "Nimbus Wireless Headset",
  "Pulse Fitness Tracker", "Cloud Ergonomic Chair", "Terra Water Bottle",
];

export const ROLES = [
  { id: "ROL-1", name: "Owner", members: 2, permissions: "Full access", scope: "Organization" },
  { id: "ROL-2", name: "Admin", members: 6, permissions: "Manage members & billing", scope: "Organization" },
  { id: "ROL-3", name: "Editor", members: 18, permissions: "Create & edit content", scope: "Workspace" },
  { id: "ROL-4", name: "Member", members: 42, permissions: "View & comment", scope: "Workspace" },
  { id: "ROL-5", name: "Viewer", members: 24, permissions: "Read-only", scope: "Workspace" },
  { id: "ROL-6", name: "Billing", members: 3, permissions: "Invoices & payment methods", scope: "Organization" },
];

export const TEAMS = ["Product", "Engineering", "Design", "Marketing", "Sales", "Support"].map(
  (name, i) => ({
    id: `TEAM-${i + 1}`,
    name,
    lead: pick(PEOPLE, i * 5 + 2).name,
    members: 4 + ((i * 7) % 14),
    projects: 1 + ((i * 3) % 6),
  })
);

export const ACTIVITY_LOGS = Array.from({ length: 40 }, (_, i) => ({
  id: `LOG-${9000 + i}`,
  actor: pick(PEOPLE, i * 3 + 1).name,
  action: pick(
    ["signed in", "updated billing", "invited a member", "changed a role",
      "exported a report", "archived a project", "reset a password", "created an API key"],
    i
  ),
  target: pick(["Workspace", "Billing", "Team", "Project Atlas", "Settings", "API"], i * 2),
  ip: `192.168.${(i * 7) % 255}.${(i * 13) % 255}`,
  when: `${(i % 27) + 1}d ago`,
}));

export const PROJECTS_LIST = Array.from({ length: 24 }, (_, i) => ({
  id: `PRJ-${300 + i}`,
  name: pick(
    ["Mobile app redesign", "Customer data platform", "Checkout performance",
      "Marketing site v3", "Internal analytics tool", "Billing migration",
      "Design system v2", "Onboarding revamp", "Search relevance", "Data warehouse"],
    i
  ) + (i > 9 ? ` ${Math.floor(i / 10) + 1}` : ""),
  lead: pick(PEOPLE, i * 4 + 3).name,
  progress: 12 + ((i * 17) % 84),
  due: `2026-0${(i % 6) + 1}-${String(((i * 5) % 27) + 1).padStart(2, "0")}`,
  status: pick(["On track", "At risk", "Delayed", "On track", "Completed"], i * 3),
}));

export const PRODUCTS_LIST = Array.from({ length: 20 }, (_, i) => ({
  id: `SKU-${2000 + i * 11}`,
  name: pick(PRODUCTS, i),
  category: pick(["Electronics", "Apparel", "Home", "Beauty", "Sports"], i),
  price: 19 + ((i * 37) % 380),
  stock: (i * 53) % 400,
  status: pick(["In stock", "In stock", "Low stock", "Out of stock"], i * 3),
}));

export const ORDERS_LIST = Array.from({ length: 28 }, (_, i) => ({
  id: `ORD-${8800 + i}`,
  customer: pick(PEOPLE, i * 2 + 5).name,
  date: `2026-06-${String(((i * 3) % 27) + 1).padStart(2, "0")}`,
  items: 1 + (i % 5),
  total: 40 + ((i * 63) % 900),
  status: pick(["Processing", "Pending", "Shipped", "Delivered", "Delivered"], i * 3),
}));

export const CUSTOMERS_LIST = Array.from({ length: 26 }, (_, i) => ({
  id: `CUS-${5000 + i}`,
  name: pick(PEOPLE, i * 3 + 7).name,
  company: pick(COMPANIES, i),
  orders: 1 + ((i * 7) % 40),
  spend: 200 + ((i * 137) % 9000),
  status: pick(["Active", "Active", "Active", "Pending"], i * 5),
}));

export const LEADS_LIST = Array.from({ length: 24 }, (_, i) => ({
  id: `LEAD-${4000 + i}`,
  name: pick(PEOPLE, i * 5 + 2).name,
  company: pick(COMPANIES, i + 3),
  source: pick(["Website", "Referral", "Cold outreach", "Event", "Social"], i),
  value: 1000 + ((i * 311) % 24000),
  status: pick(["Active", "Pending", "Active", "Archived"], i * 3),
}));

export const DEALS_LIST = Array.from({ length: 22 }, (_, i) => ({
  id: `DEAL-${7000 + i}`,
  name: `${pick(COMPANIES, i)} — ${pick(["Annual", "Expansion", "Renewal", "Pilot"], i)}`,
  owner: pick(PEOPLE, i * 4 + 1).name,
  stage: pick(["Qualification", "Discovery", "Proposal", "Negotiation", "Won", "Lost"], i * 7 + 1),
  value: 3000 + ((i * 517) % 60000),
}));

export const TRANSACTIONS_LIST = Array.from({ length: 30 }, (_, i) => ({
  id: `TXN-${60000 + i}`,
  party: pick([...COMPANIES, "Payroll", "AWS Cloud Services", "Figma Enterprise"], i),
  date: `2026-06-${String(((i * 2) % 27) + 1).padStart(2, "0")}`,
  method: pick(["Bank transfer", "Card", "ACH", "Wire"], i),
  amount: (i % 3 === 0 ? -1 : 1) * (200 + ((i * 97) % 12000)),
}));

export const INVOICES_LIST = Array.from({ length: 24 }, (_, i) => ({
  id: `INV-${20260 + i}`,
  client: pick(COMPANIES, i),
  issued: `2026-0${(i % 6) + 1}-01`,
  due: `2026-0${(i % 6) + 2}-01`,
  amount: 500 + ((i * 213) % 18000),
  status: pick(["Completed", "Pending", "Failed", "Completed"], i * 3),
}));

export const EMPLOYEES_LIST = PEOPLE.map((p, i) => ({
  ...p,
  title: pick(
    ["Software Engineer", "Product Designer", "Product Manager", "Account Executive",
      "Support Specialist", "Data Analyst", "Marketing Manager", "Engineering Lead"],
    i
  ),
  location: pick(["Remote", "Berlin", "New York", "London", "Tokyo", "Austin"], i),
  employment: pick(["Full-time", "Full-time", "Full-time", "Contract"], i),
}));

/* ----------------------------------------------------- datasets (group 5) -- */

const CITIES = ["Berlin", "Rotterdam", "Chicago", "Austin", "Lyon", "Leeds", "Porto", "Gdansk"];
const CARRIERS = ["Delta Freight", "Vertex Logistics", "BlueLine Express", "Cargomax"];

export const CATEGORIES_LIST = [
  "Electronics", "Apparel", "Home & Kitchen", "Beauty", "Sports & Outdoors",
  "Toys & Games", "Books", "Grocery", "Office", "Pet Supplies",
].map((name, i) => ({
  id: `CAT-${100 + i}`,
  name,
  slug: name.toLowerCase().replace(/[^a-z]+/g, "-"),
  products: 8 + ((i * 37) % 140),
  visible: i % 4 !== 0,
}));

export const REVIEWS_LIST = Array.from({ length: 26 }, (_, i) => ({
  id: `REV-${3000 + i}`,
  product: pick(PRODUCTS, i),
  author: pick(PEOPLE, i * 3 + 4).name,
  rating: 1 + ((i * 2) % 5),
  title: pick(
    ["Exactly as described", "Great value", "Not for me", "Would buy again",
      "Arrived damaged", "Better than expected", "Runs small", "Five stars"],
    i
  ),
  date: `2026-0${(i % 6) + 1}-${String(((i * 5) % 27) + 1).padStart(2, "0")}`,
  status: pick(["Published", "Published", "Pending", "Rejected"], i * 3),
}));

export const INVENTORY_LIST = PRODUCTS_LIST.map((p, i) => ({
  id: p.id,
  name: p.name,
  warehouse: pick(["Berlin DC", "Rotterdam DC", "Chicago DC"], i),
  onHand: (i * 53) % 400,
  committed: (i * 17) % 60,
  reorder: 40,
  status: ((i * 53) % 400) < 40 ? "Low stock" : ((i * 53) % 400) === 0 ? "Out of stock" : "In stock",
}));

export const COUPONS_LIST = Array.from({ length: 18 }, (_, i) => ({
  id: `CPN-${400 + i}`,
  code: pick(["WELCOME10", "SUMMER25", "FREESHIP", "VIP15", "BUNDLE20", "FLASH30"], i) + (i > 5 ? i : ""),
  type: pick(["Percent", "Fixed", "Free shipping"], i),
  value: pick(["10%", "25%", "$15", "Free shipping", "20%", "30%"], i),
  used: (i * 29) % 300,
  limit: 500,
  status: pick(["Active", "Active", "Scheduled", "Failed"], i * 3),
}));

export const PROMOTIONS_LIST = Array.from({ length: 14 }, (_, i) => ({
  id: `PROMO-${200 + i}`,
  name: pick(
    ["Summer Sale", "Back to School", "Clearance", "New Arrivals Boost",
      "Loyalty Double Points", "Bundle & Save", "Flash Weekend"],
    i
  ),
  channel: pick(["Storefront", "Email", "Paid social", "All channels"], i),
  starts: `2026-0${(i % 6) + 1}-01`,
  ends: `2026-0${(i % 6) + 2}-15`,
  status: pick(["Active", "Scheduled", "Completed", "Paused"], i * 3),
}));

export const WISHLIST_LIST = Array.from({ length: 20 }, (_, i) => ({
  id: `WISH-${600 + i}`,
  customer: pick(PEOPLE, i * 3 + 2).name,
  product: pick(PRODUCTS, i),
  added: `${(i % 27) + 1}d ago`,
  price: 19 + ((i * 37) % 380),
  inStock: i % 5 !== 0,
}));

export const ATTENDANCE_LIST = PEOPLE.slice(0, 24).map((p, i) => ({
  id: `ATT-${p.id}`,
  name: p.name,
  team: p.team,
  clockIn: `0${8 + (i % 2)}:${String((i * 7) % 60).padStart(2, "0")}`,
  clockOut: `1${7 + (i % 2)}:${String((i * 11) % 60).padStart(2, "0")}`,
  hours: (7.5 + ((i % 4) * 0.5)).toFixed(1),
  status: pick(["Present", "Present", "Present", "Remote", "Late", "Absent"], i * 3),
}));

export const LEAVE_LIST = Array.from({ length: 20 }, (_, i) => ({
  id: `LV-${1200 + i}`,
  name: pick(PEOPLE, i * 3 + 1).name,
  type: pick(["Vacation", "Sick", "Personal", "Parental", "Bereavement"], i),
  from: `2026-0${(i % 6) + 1}-${String(((i * 3) % 20) + 1).padStart(2, "0")}`,
  days: 1 + (i % 10),
  status: pick(["Approved", "Pending", "Rejected", "Approved"], i * 3),
}));

export const PAYROLL_LIST = PEOPLE.slice(0, 22).map((p, i) => ({
  id: `PAY-${p.id}`,
  name: p.name,
  team: p.team,
  gross: 4500 + ((i * 317) % 7000),
  deductions: 900 + ((i * 91) % 1800),
  net: 3600 + ((i * 226) % 5200),
  status: pick(["Paid", "Paid", "Processing", "Pending"], i * 3),
}));

export const RECRUITMENT_LIST = Array.from({ length: 16 }, (_, i) => ({
  id: `REQ-${70 + i}`,
  role: pick(
    ["Senior Frontend Engineer", "Product Designer", "Data Analyst",
      "Account Executive", "Support Specialist", "Engineering Manager",
      "Content Marketer", "DevOps Engineer"],
    i
  ),
  department: pick(["Engineering", "Design", "Data", "Sales", "Support", "Marketing"], i),
  location: pick(["Remote", "Berlin", "New York", "London"], i),
  applicants: (i * 13) % 90,
  status: pick(["Open", "Open", "In Review", "Closed"], i * 3),
}));

export const APPLICATIONS_LIST = Array.from({ length: 28 }, (_, i) => ({
  id: `APP-${5200 + i}`,
  name: pick(PEOPLE, i * 5 + 3).name,
  role: pick(
    ["Senior Frontend Engineer", "Product Designer", "Data Analyst",
      "Account Executive", "Support Specialist"],
    i
  ),
  applied: `${(i % 27) + 1}d ago`,
  stage: pick(["New", "Screening", "Interview", "Offer", "Rejected"], i * 3),
  rating: 1 + ((i * 3) % 5),
}));

export const SHIPMENTS_LIST = Array.from({ length: 28 }, (_, i) => ({
  id: `SHP-${90000 + i}`,
  origin: pick(CITIES, i),
  destination: pick(CITIES, i + 3),
  carrier: pick(CARRIERS, i),
  eta: `2026-07-${String(((i * 3) % 27) + 1).padStart(2, "0")}`,
  status: pick(["In Transit", "In Transit", "Delivered", "Delayed", "Processing"], i * 3),
}));

export const DELIVERIES_LIST = Array.from({ length: 24 }, (_, i) => ({
  id: `DLV-${40000 + i}`,
  order: `ORD-${8800 + i}`,
  driver: pick(PEOPLE, i * 4 + 1).name,
  stops: 3 + (i % 9),
  window: pick(["09:00–12:00", "12:00–15:00", "15:00–18:00"], i),
  status: pick(["Out for delivery", "Delivered", "Scheduled", "Delayed"], i * 3),
}));

export const FLEET_LIST = Array.from({ length: 18 }, (_, i) => ({
  id: `VH-${300 + i}`,
  type: pick(["Cargo van", "Box truck", "Semi-trailer", "EV van"], i),
  plate: `${pick(["B", "RO", "CHI", "AT"], i)}-${1000 + i * 7}`,
  driver: pick(PEOPLE, i * 3 + 2).name,
  mileage: 12000 + ((i * 4130) % 180000),
  status: pick(["Active", "Active", "Maintenance", "Idle"], i * 3),
}));

export const WAREHOUSES_LIST = [
  ["Berlin DC", "Berlin, DE", 88, 12400, 42],
  ["Rotterdam Hub", "Rotterdam, NL", 71, 18600, 58],
  ["Chicago DC", "Chicago, US", 94, 21200, 66],
  ["Austin DC", "Austin, US", 63, 9800, 31],
  ["Lyon Depot", "Lyon, FR", 46, 6400, 22],
  ["Leeds Depot", "Leeds, UK", 79, 8900, 27],
  ["Porto Micro-hub", "Porto, PT", 55, 3100, 14],
  ["Gdansk DC", "Gdansk, PL", 68, 11700, 39],
].map(([name, location, capacity, skus, staff], i) => ({
  id: `WH-${10 + i}`,
  name,
  location,
  capacity,
  skus,
  staff,
  status: capacity >= 90 ? "Near capacity" : capacity >= 50 ? "Operational" : "Under-utilised",
}));

export const ROUTE_PLANS_LIST = Array.from({ length: 20 }, (_, i) => ({
  id: `RT-${2200 + i}`,
  name: `${pick(CITIES, i)} → ${pick(CITIES, i + 2)}`,
  driver: pick(PEOPLE, i * 3 + 1).name,
  vehicle: `VH-${300 + (i % 18)}`,
  stops: 4 + (i % 11),
  distance: 60 + ((i * 47) % 540),
  window: pick(["06:00–12:00", "08:00–14:00", "12:00–18:00", "14:00–20:00"], i),
  status: pick(["Planned", "Active", "Completed", "Delayed", "Planned"], i * 3),
}));

// [name, category, description, how-many-of ROLE_SET roles have it (from the top)]
const PERMISSIONS = [
  ["View dashboards", "Analytics", "See all dashboard pages and widgets", 5],
  ["Export data", "Analytics", "Download tables and reports as CSV / PDF", 4],
  ["Manage projects", "Projects", "Create, edit and archive projects", 3],
  ["Manage deals", "CRM", "Create and edit deals and the pipeline", 3],
  ["Manage customers", "CRM", "Edit customer and contact records", 3],
  ["Manage products", "Ecommerce", "Add, edit and publish catalogue items", 3],
  ["Process refunds", "Ecommerce", "Issue refunds and credit notes", 2],
  ["View payroll", "HR", "See salary and payroll information", 2],
  ["Approve leave", "HR", "Approve or reject time-off requests", 2],
  ["Manage members", "Admin", "Invite, deactivate and change roles", 2],
  ["Manage billing", "Admin", "Change plan, payment methods and invoices", 1],
  ["Configure integrations", "Admin", "Connect and remove third-party apps", 2],
  ["Manage API keys", "Developer", "Create and revoke API keys and webhooks", 2],
  ["Impersonate users", "Developer", "Sign in as another member for support", 1],
];
const ROLE_SET = ["Owner", "Admin", "Editor", "Member", "Viewer"];

export const PERMISSIONS_LIST = PERMISSIONS.map(([name, category, description, count], i) => ({
  id: `PERM-${100 + i}`,
  name,
  category,
  description,
  roles: ROLE_SET.slice(0, count),
  scope: count <= 2 ? "Restricted" : "Standard",
}));

export const OPPORTUNITIES_LIST = Array.from({ length: 22 }, (_, i) => ({
  id: `OPP-${8000 + i}`,
  account: pick(COMPANIES, i),
  owner: pick(PEOPLE, i * 4 + 2).name,
  stage: pick(["Qualified", "Discovery", "Proposal", "Negotiation", "Won", "Lost"], i * 3),
  value: 5000 + ((i * 617) % 80000),
  close: `2026-0${(i % 6) + 1}-${String(((i * 5) % 27) + 1).padStart(2, "0")}`,
}));

const CAMPAIGN_NAMES = [
  "Q3 Product Launch", "Webinar: Scaling Ops", "Nurture — Trial Users",
  "Reactivation Push", "Partner Co-marketing", "Holiday Promo",
  "Feature Spotlight: Reports", "Case Study Series",
];

export const CAMPAIGNS_LIST = Array.from({ length: 16 }, (_, i) => ({
  id: `CMP-${900 + i}`,
  name: pick(CAMPAIGN_NAMES, i) + (i > 7 ? " 2" : ""),
  channel: pick(["Email", "Paid social", "Events", "Content"], i),
  leads: (i * 47) % 900,
  budget: 2000 + ((i * 613) % 40000),
  status: pick(["Active", "Scheduled", "Completed", "Paused"], i * 3),
}));

export const PAYMENTS_LIST = Array.from({ length: 26 }, (_, i) => ({
  id: `PMT-${50000 + i}`,
  party: pick(COMPANIES, i),
  method: pick(["Card", "ACH", "Wire", "Bank transfer"], i),
  date: `2026-06-${String(((i * 3) % 27) + 1).padStart(2, "0")}`,
  amount: 300 + ((i * 187) % 14000),
  status: pick(["Paid", "Paid", "Pending", "Failed", "Refunded"], i * 3),
}));

export const EXPENSES_LIST = Array.from({ length: 24 }, (_, i) => ({
  id: `EXP-${30000 + i}`,
  vendor: pick([...COMPANIES, "AWS Cloud Services", "Figma Enterprise", "WeWork", "LinkedIn Ads"], i),
  category: pick(["Software", "Travel", "Office", "Marketing", "Contractors", "Utilities"], i),
  date: `2026-06-${String(((i * 4) % 27) + 1).padStart(2, "0")}`,
  amount: 90 + ((i * 143) % 6000),
  status: pick(["Approved", "Pending", "Approved", "Rejected"], i * 3),
}));

export const MKT_EMAIL_LIST = Array.from({ length: 18 }, (_, i) => ({
  id: `EM-${700 + i}`,
  name: pick(CAMPAIGN_NAMES, i) + " — Email",
  sent: (i * 1330) % 42000,
  openRate: `${28 + ((i * 3) % 40)}%`,
  clickRate: `${2 + ((i * 2) % 12)}%`,
  status: pick(["Sent", "Sent", "Draft", "Sending", "Scheduled"], i * 3),
}));

export const MKT_SMS_LIST = Array.from({ length: 14 }, (_, i) => ({
  id: `SMS-${800 + i}`,
  name: pick(CAMPAIGN_NAMES, i) + " — SMS",
  sent: (i * 640) % 18000,
  ctr: `${4 + ((i * 3) % 16)}%`,
  optOut: `${(i % 3) * 0.4 + 0.2}%`,
  status: pick(["Sent", "Draft", "Scheduled", "Sending"], i * 3),
}));

export const LANDING_PAGES_LIST = Array.from({ length: 16 }, (_, i) => ({
  id: `LP-${500 + i}`,
  name: pick(
    ["Product Launch", "Free Trial", "Webinar Signup", "Pricing", "Demo Request",
      "Ebook Download", "Partner Program"],
    i
  ) + (i > 6 ? ` v${Math.floor(i / 7) + 1}` : ""),
  visits: (i * 2130) % 60000,
  conversion: `${2 + ((i * 3) % 22)}%`,
  updated: `${(i % 27) + 1}d ago`,
  status: pick(["Published", "Published", "Draft"], i * 3),
}));

export const FINANCIAL_REPORTS_LIST = [
  ["Profit & Loss", "P&L", "Monthly"],
  ["Balance Sheet", "Balance", "Monthly"],
  ["Cash Flow Statement", "Cash flow", "Monthly"],
  ["Revenue by Product", "Revenue", "Quarterly"],
  ["Expenses by Category", "Expense", "Monthly"],
  ["AR Aging", "Receivables", "Weekly"],
  ["AP Aging", "Payables", "Weekly"],
  ["Budget vs Actual", "Budget", "Monthly"],
  ["MRR Movement", "Revenue", "Monthly"],
  ["Tax Summary", "Tax", "Quarterly"],
  ["Headcount Cost", "Payroll", "Monthly"],
  ["Board Pack — Finance", "Summary", "Quarterly"],
].map(([name, type, cadence], i) => ({
  id: `FR-${500 + i}`,
  name,
  type,
  cadence,
  owner: pick(PEOPLE, i * 5 + 3).name,
  lastRun: `2026-0${(i % 6) + 1}-${String(((i * 4) % 27) + 1).padStart(2, "0")}`,
  status: pick(["Ready", "Ready", "Scheduled", "Processing"], i * 3),
}));

export const BUDGET_LINES = [
  ["Payroll", 42100, 44000, "People"],
  ["Engineering tools", 18600, 22000, "Software"],
  ["Marketing", 14200, 16000, "Growth"],
  ["Office & ops", 12400, 20000, "Operations"],
  ["Travel & events", 8880, 18000, "Operations"],
  ["Contractors", 9600, 12000, "People"],
  ["Cloud infrastructure", 15300, 17000, "Software"],
  ["Legal & accounting", 4200, 8000, "Operations"],
].map(([line, spent, budget, group], i) => ({
  id: `BUD-${i + 1}`,
  line,
  group,
  spent,
  budget,
  remaining: budget - spent,
  used: Math.round((spent / budget) * 100),
}));

export const SEGMENTS_LIST = Array.from({ length: 14 }, (_, i) => ({
  id: `SEG-${300 + i}`,
  name: pick(
    ["Trial — day 3", "Power users", "Churn risk", "Enterprise ICP",
      "Newsletter subscribers", "Cart abandoners", "NPS promoters"],
    i
  ),
  size: (i * 733) % 22000,
  basis: pick(["Behavioral", "Firmographic", "Lifecycle", "Engagement"], i),
  updated: `${(i % 14) + 1}d ago`,
}));

/* --------------------------------------------------------------- configs --- */

const USER_COLS = [
  { key: "name", header: "User", sortable: true, render: (r) => <EntityCell name={r.name} sub={r.email} /> },
  { key: "role", header: "Role", sortable: true, render: (r) => nameChip(r.role) },
  { key: "team", header: "Team", sortable: true },
  { key: "lastActive", header: "Last active", align: "right" },
  { key: "status", header: "Status", sortable: true, render: (r) => <StatusChip status={r.status} /> },
];

const bar = (v) => (
  <div className="flex items-center justify-end gap-2">
    <div className="h-1.5 w-20 overflow-hidden rounded-full bg-[var(--app-surface-2)]">
      <div className="h-full rounded-full bg-[var(--oks-color-primary-500)]" style={{ width: `${v}%` }} />
    </div>
    <span className="w-9 text-sm font-medium text-[var(--app-fg)]">{v}%</span>
  </div>
);

const strong = (v) => <span className="font-medium text-[var(--app-fg)]">{v}</span>;
const stars = (n) => (
  <span className="inline-flex items-center justify-end gap-0.5" aria-label={`${n} out of 5`}>
    {Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={13}
        className={
          i < n
            ? "fill-[var(--oks-color-warning-500)] text-[var(--oks-color-warning-500)]"
            : "text-[color:var(--app-fg-subtle)]"
        }
      />
    ))}
  </span>
);
const moneyCell = (n) => (
  <span className={n < 0 ? "font-medium text-[color:var(--oks-color-danger-600)]" : "font-medium text-[var(--app-fg)]"}>
    {n < 0 ? "-" : ""}{money(Math.abs(n))}
  </span>
);

export const LIST_CONFIGS = {
  "/user-management/all-users": {
    title: "All users", subtitle: "Everyone with access to the workspace.",
    actionLabel: "Invite user", columns: USER_COLS, rows: PEOPLE, getRowKey: (r) => r.id,
    searchKeys: ["name", "email", "team"],
    filters: [
      { key: "active", label: "Active", test: (r) => r.status === "Active" },
      { key: "pending", label: "Pending", test: (r) => r.status === "Pending" },
      { key: "archived", label: "Archived", test: (r) => r.status === "Archived" },
    ],
  },
  "/user-management/roles": {
    title: "Roles", subtitle: "Permission sets you can assign to members.",
    actionLabel: "New role", getRowKey: (r) => r.id, rows: ROLES,
    columns: [
      { key: "name", header: "Role", sortable: true, render: (r) => strong(r.name) },
      { key: "scope", header: "Scope" },
      { key: "permissions", header: "Permissions" },
      { key: "members", header: "Members", align: "right", sortable: true },
    ],
  },
  "/user-management/teams": {
    title: "Teams", subtitle: "Groups that own projects and resources.",
    actionLabel: "New team", getRowKey: (r) => r.id, rows: TEAMS, searchKeys: ["name", "lead"],
    columns: [
      { key: "name", header: "Team", sortable: true, render: (r) => strong(r.name) },
      { key: "lead", header: "Lead", render: (r) => <EntityCell name={r.lead} /> },
      { key: "members", header: "Members", align: "right", sortable: true },
      { key: "projects", header: "Projects", align: "right", sortable: true },
    ],
  },
  "/user-management/departments": {
    title: "Departments", subtitle: "Company structure.",
    getRowKey: (r) => r.id, rows: TEAMS,
    columns: [
      { key: "name", header: "Department", sortable: true, render: (r) => strong(r.name) },
      { key: "lead", header: "Head", render: (r) => <EntityCell name={r.lead} /> },
      { key: "members", header: "Headcount", align: "right", sortable: true },
    ],
  },
  "/user-management/activity-logs": {
    title: "Activity logs", subtitle: "Audit trail of account and workspace events.",
    getRowKey: (r) => r.id, rows: ACTIVITY_LOGS, searchKeys: ["actor", "action", "target"], pageSize: 12,
    columns: [
      { key: "actor", header: "Actor", render: (r) => <EntityCell name={r.actor} /> },
      { key: "action", header: "Action", render: (r) => strong(r.action) },
      { key: "target", header: "Target" },
      { key: "ip", header: "IP address" },
      { key: "when", header: "When", align: "right" },
    ],
  },
  "/projects/all-projects": {
    title: "All projects", subtitle: "Every active and completed project.",
    actionLabel: "New project", getRowKey: (r) => r.id, rows: PROJECTS_LIST, searchKeys: ["name", "lead"],
    filters: [
      { key: "ontrack", label: "On track", test: (r) => r.status === "On track" },
      { key: "atrisk", label: "At risk", test: (r) => r.status === "At risk" },
      { key: "delayed", label: "Delayed", test: (r) => r.status === "Delayed" },
    ],
    columns: [
      { key: "name", header: "Project", sortable: true, render: (r) => strong(r.name) },
      { key: "lead", header: "Lead", render: (r) => <EntityCell name={r.lead} /> },
      { key: "due", header: "Due", sortable: true },
      { key: "status", header: "Status", sortable: true, render: (r) => <StatusChip status={r.status} /> },
      { key: "progress", header: "Progress", align: "right", sortable: true, render: (r) => bar(r.progress) },
    ],
  },
  "/ecommerce/product-list": {
    title: "Products", subtitle: "Catalogue across all channels.",
    actionLabel: "Add product", getRowKey: (r) => r.id, rows: PRODUCTS_LIST, searchKeys: ["name", "category"],
    filters: [
      { key: "low", label: "Low stock", test: (r) => r.status === "Low stock" },
      { key: "out", label: "Out of stock", test: (r) => r.status === "Out of stock" },
    ],
    columns: [
      { key: "name", header: "Product", sortable: true, render: (r) => <EntityCell name={r.name} sub={r.id} /> },
      { key: "category", header: "Category", sortable: true },
      { key: "price", header: "Price", align: "right", sortable: true, render: (r) => strong(money(r.price)) },
      { key: "stock", header: "Stock", align: "right", sortable: true },
      { key: "status", header: "Status", render: (r) => <StatusChip status={r.status} /> },
    ],
  },
  "/ecommerce/orders": {
    title: "Orders", subtitle: "All orders across channels.",
    getRowKey: (r) => r.id, rows: ORDERS_LIST, searchKeys: ["id", "customer"],
    filters: [
      { key: "processing", label: "Processing", test: (r) => r.status === "Processing" },
      { key: "shipped", label: "Shipped", test: (r) => r.status === "Shipped" },
      { key: "delivered", label: "Delivered", test: (r) => r.status === "Delivered" },
    ],
    columns: [
      { key: "id", header: "Order", sortable: true, render: (r) => strong(r.id) },
      { key: "customer", header: "Customer", render: (r) => <EntityCell name={r.customer} /> },
      { key: "date", header: "Date", sortable: true },
      { key: "items", header: "Items", align: "right" },
      { key: "total", header: "Total", align: "right", sortable: true, render: (r) => strong(money(r.total)) },
      { key: "status", header: "Status", render: (r) => <StatusChip status={r.status} /> },
    ],
  },
  "/ecommerce/customers": {
    title: "Customers", subtitle: "Everyone who has placed an order.",
    getRowKey: (r) => r.id, rows: CUSTOMERS_LIST, searchKeys: ["name", "company"],
    columns: [
      { key: "name", header: "Customer", sortable: true, render: (r) => <EntityCell name={r.name} sub={r.company} /> },
      { key: "orders", header: "Orders", align: "right", sortable: true },
      { key: "spend", header: "Total spend", align: "right", sortable: true, render: (r) => strong(money(r.spend)) },
      { key: "status", header: "Status", render: (r) => <StatusChip status={r.status} /> },
    ],
  },
  "/crm/leads": {
    title: "Leads", subtitle: "Prospects in the top of the funnel.",
    actionLabel: "Add lead", getRowKey: (r) => r.id, rows: LEADS_LIST, searchKeys: ["name", "company", "source"],
    columns: [
      { key: "name", header: "Lead", sortable: true, render: (r) => <EntityCell name={r.name} sub={r.company} /> },
      { key: "source", header: "Source", sortable: true },
      { key: "value", header: "Est. value", align: "right", sortable: true, render: (r) => strong(money(r.value)) },
      { key: "status", header: "Status", render: (r) => <StatusChip status={r.status} /> },
    ],
  },
  "/crm/deals": {
    title: "Deals", subtitle: "Opportunities in the pipeline.",
    actionLabel: "New deal", getRowKey: (r) => r.id, rows: DEALS_LIST, searchKeys: ["name", "owner"],
    columns: [
      { key: "name", header: "Deal", sortable: true, render: (r) => strong(r.name) },
      { key: "owner", header: "Owner", render: (r) => <EntityCell name={r.owner} /> },
      { key: "stage", header: "Stage", sortable: true, render: (r) => <StatusChip status={r.stage} /> },
      { key: "value", header: "Value", align: "right", sortable: true, render: (r) => strong(money(r.value)) },
    ],
  },
  "/crm/customers": {
    title: "Customers", subtitle: "Accounts that have closed at least one deal.",
    getRowKey: (r) => r.id, rows: CUSTOMERS_LIST, searchKeys: ["name", "company"],
    columns: [
      { key: "name", header: "Account", sortable: true, render: (r) => <EntityCell name={r.name} sub={r.company} /> },
      { key: "orders", header: "Deals", align: "right", sortable: true },
      { key: "spend", header: "Lifetime value", align: "right", sortable: true, render: (r) => strong(money(r.spend)) },
      { key: "status", header: "Status", render: (r) => <StatusChip status={r.status} /> },
    ],
  },
  "/finance/transactions": {
    title: "Transactions", subtitle: "Money in and out across all accounts.",
    getRowKey: (r) => r.id, rows: TRANSACTIONS_LIST, searchKeys: ["party", "method"], pageSize: 12,
    columns: [
      { key: "id", header: "ID", sortable: true },
      { key: "party", header: "Party", render: (r) => strong(r.party) },
      { key: "date", header: "Date", sortable: true },
      { key: "method", header: "Method" },
      { key: "amount", header: "Amount", align: "right", sortable: true, render: (r) => moneyCell(r.amount) },
    ],
  },
  "/finance/invoices": {
    title: "Invoices", subtitle: "Issued invoices and their payment status.",
    actionLabel: "New invoice", getRowKey: (r) => r.id, rows: INVOICES_LIST, searchKeys: ["id", "client"],
    filters: [
      { key: "pending", label: "Pending", test: (r) => r.status === "Pending" },
      { key: "failed", label: "Failed", test: (r) => r.status === "Failed" },
      { key: "completed", label: "Paid", test: (r) => r.status === "Completed" },
    ],
    columns: [
      { key: "id", header: "Invoice", sortable: true, render: (r) => strong(r.id) },
      { key: "client", header: "Client", sortable: true },
      { key: "issued", header: "Issued", sortable: true },
      { key: "due", header: "Due", sortable: true },
      { key: "amount", header: "Amount", align: "right", sortable: true, render: (r) => strong(money(r.amount)) },
      { key: "status", header: "Status", render: (r) => <StatusChip status={r.status} /> },
    ],
  },
  "/hr/employees": {
    title: "Employees", subtitle: "The whole team.",
    actionLabel: "Add employee", getRowKey: (r) => r.id, rows: EMPLOYEES_LIST,
    searchKeys: ["name", "email", "title", "team"],
    columns: [
      { key: "name", header: "Employee", sortable: true, render: (r) => <EntityCell name={r.name} sub={r.title} /> },
      { key: "team", header: "Team", sortable: true },
      { key: "location", header: "Location", sortable: true },
      { key: "employment", header: "Type", render: (r) => nameChip(r.employment) },
    ],
  },

  /* ------------------------------------------------------ group 5 configs -- */

  "/orders": {
    title: "Orders", subtitle: "Every order across all channels.",
    getRowKey: (r) => r.id, rows: ORDERS_LIST, searchKeys: ["id", "customer"], pageSize: 12,
    filters: [
      { key: "processing", label: "Processing", test: (r) => r.status === "Processing" },
      { key: "shipped", label: "Shipped", test: (r) => r.status === "Shipped" },
      { key: "delivered", label: "Delivered", test: (r) => r.status === "Delivered" },
    ],
    columns: [
      { key: "id", header: "Order", sortable: true, render: (r) => strong(r.id) },
      { key: "customer", header: "Customer", render: (r) => <EntityCell name={r.customer} /> },
      { key: "date", header: "Date", sortable: true },
      { key: "items", header: "Items", align: "right" },
      { key: "total", header: "Total", align: "right", sortable: true, render: (r) => strong(money(r.total)) },
      { key: "status", header: "Status", render: (r) => <StatusChip status={r.status} /> },
    ],
  },

  "/hr/attendance": {
    title: "Attendance", subtitle: "Clock-in and clock-out across the team, today.",
    getRowKey: (r) => r.id, rows: ATTENDANCE_LIST, searchKeys: ["name", "team"], pageSize: 12,
    filters: [
      { key: "present", label: "Present", test: (r) => r.status === "Present" },
      { key: "remote", label: "Remote", test: (r) => r.status === "Remote" },
      { key: "late", label: "Late", test: (r) => r.status === "Late" },
      { key: "absent", label: "Absent", test: (r) => r.status === "Absent" },
    ],
    columns: [
      { key: "name", header: "Employee", sortable: true, render: (r) => <EntityCell name={r.name} sub={r.team} /> },
      { key: "clockIn", header: "Clock in", align: "right" },
      { key: "clockOut", header: "Clock out", align: "right" },
      { key: "hours", header: "Hours", align: "right", sortable: true },
      { key: "status", header: "Status", render: (r) => <StatusChip status={r.status} /> },
    ],
  },
  "/hr/leave-requests": {
    title: "Leave requests", subtitle: "Time-off requests awaiting or past review.",
    actionLabel: "Request leave", getRowKey: (r) => r.id, rows: LEAVE_LIST, searchKeys: ["name", "type"],
    filters: [
      { key: "pending", label: "Pending", test: (r) => r.status === "Pending" },
      { key: "approved", label: "Approved", test: (r) => r.status === "Approved" },
      { key: "rejected", label: "Rejected", test: (r) => r.status === "Rejected" },
    ],
    columns: [
      { key: "name", header: "Employee", sortable: true, render: (r) => <EntityCell name={r.name} /> },
      { key: "type", header: "Type", sortable: true, render: (r) => nameChip(r.type) },
      { key: "from", header: "From", sortable: true },
      { key: "days", header: "Days", align: "right", sortable: true },
      { key: "status", header: "Status", render: (r) => <StatusChip status={r.status} /> },
    ],
  },
  "/hr/payroll": {
    title: "Payroll", subtitle: "Current pay run — June 2026.",
    getRowKey: (r) => r.id, rows: PAYROLL_LIST, searchKeys: ["name", "team"], pageSize: 12,
    columns: [
      { key: "name", header: "Employee", sortable: true, render: (r) => <EntityCell name={r.name} sub={r.team} /> },
      { key: "gross", header: "Gross", align: "right", sortable: true, render: (r) => strong(money(r.gross)) },
      { key: "deductions", header: "Deductions", align: "right", render: (r) => moneyCell(-r.deductions) },
      { key: "net", header: "Net", align: "right", sortable: true, render: (r) => strong(money(r.net)) },
      { key: "status", header: "Status", render: (r) => <StatusChip status={r.status} /> },
    ],
  },
  "/hr/departments": {
    title: "Departments", subtitle: "Company structure and headcount.",
    getRowKey: (r) => r.id, rows: TEAMS,
    columns: [
      { key: "name", header: "Department", sortable: true, render: (r) => strong(r.name) },
      { key: "lead", header: "Head", render: (r) => <EntityCell name={r.lead} /> },
      { key: "members", header: "Headcount", align: "right", sortable: true },
      { key: "projects", header: "Open roles", align: "right" },
    ],
  },
  "/hr/recruitment": {
    title: "Recruitment", subtitle: "Open requisitions and their pipelines.",
    actionLabel: "New requisition", getRowKey: (r) => r.id, rows: RECRUITMENT_LIST, searchKeys: ["role", "department"],
    filters: [
      { key: "open", label: "Open", test: (r) => r.status === "Open" },
      { key: "review", label: "In review", test: (r) => r.status === "In Review" },
      { key: "closed", label: "Closed", test: (r) => r.status === "Closed" },
    ],
    columns: [
      { key: "role", header: "Role", sortable: true, render: (r) => strong(r.role) },
      { key: "department", header: "Department", sortable: true },
      { key: "location", header: "Location" },
      { key: "applicants", header: "Applicants", align: "right", sortable: true },
      { key: "status", header: "Status", render: (r) => <StatusChip status={r.status} /> },
    ],
  },
  "/hr/job-applications": {
    title: "Job applications", subtitle: "Candidates across every open role.",
    getRowKey: (r) => r.id, rows: APPLICATIONS_LIST, searchKeys: ["name", "role"], pageSize: 12,
    filters: [
      { key: "new", label: "New", test: (r) => r.stage === "New" },
      { key: "interview", label: "Interview", test: (r) => r.stage === "Interview" },
      { key: "offer", label: "Offer", test: (r) => r.stage === "Offer" },
    ],
    columns: [
      { key: "name", header: "Candidate", sortable: true, render: (r) => <EntityCell name={r.name} sub={r.role} /> },
      { key: "applied", header: "Applied", align: "right" },
      { key: "rating", header: "Rating", align: "right", sortable: true, render: (r) => stars(r.rating) },
      { key: "stage", header: "Stage", render: (r) => <StatusChip status={r.stage} /> },
    ],
  },

  "/ecommerce/categories": {
    title: "Categories", subtitle: "How the catalogue is organised.",
    actionLabel: "New category", getRowKey: (r) => r.id, rows: CATEGORIES_LIST, searchKeys: ["name"],
    columns: [
      { key: "name", header: "Category", sortable: true, render: (r) => strong(r.name) },
      { key: "slug", header: "Slug" },
      { key: "products", header: "Products", align: "right", sortable: true },
      { key: "visible", header: "Visibility", render: (r) => <StatusChip status={r.visible ? "Published" : "Draft"} /> },
    ],
  },
  "/ecommerce/reviews": {
    title: "Reviews", subtitle: "Customer product reviews awaiting or past moderation.",
    getRowKey: (r) => r.id, rows: REVIEWS_LIST, searchKeys: ["product", "author", "title"], pageSize: 12,
    filters: [
      { key: "pending", label: "Pending", test: (r) => r.status === "Pending" },
      { key: "published", label: "Published", test: (r) => r.status === "Published" },
      { key: "rejected", label: "Rejected", test: (r) => r.status === "Rejected" },
    ],
    columns: [
      { key: "product", header: "Product", sortable: true, render: (r) => <EntityCell name={r.product} sub={r.title} /> },
      { key: "author", header: "Author", render: (r) => <EntityCell name={r.author} /> },
      { key: "rating", header: "Rating", align: "right", sortable: true, render: (r) => stars(r.rating) },
      { key: "date", header: "Date", sortable: true },
      { key: "status", header: "Status", render: (r) => <StatusChip status={r.status} /> },
    ],
  },
  "/ecommerce/inventory": {
    title: "Inventory", subtitle: "Stock on hand by warehouse.",
    getRowKey: (r) => r.id, rows: INVENTORY_LIST, searchKeys: ["name", "warehouse"], pageSize: 12,
    filters: [
      { key: "low", label: "Low stock", test: (r) => r.status === "Low stock" },
      { key: "out", label: "Out of stock", test: (r) => r.status === "Out of stock" },
    ],
    columns: [
      { key: "name", header: "Product", sortable: true, render: (r) => <EntityCell name={r.name} sub={r.id} /> },
      { key: "warehouse", header: "Warehouse", sortable: true },
      { key: "onHand", header: "On hand", align: "right", sortable: true },
      { key: "committed", header: "Committed", align: "right" },
      { key: "status", header: "Status", render: (r) => <StatusChip status={r.status} /> },
    ],
  },
  "/ecommerce/coupons": {
    title: "Coupons", subtitle: "Discount codes and their redemption.",
    actionLabel: "New coupon", getRowKey: (r) => r.id, rows: COUPONS_LIST, searchKeys: ["code", "type"],
    columns: [
      { key: "code", header: "Code", sortable: true, render: (r) => strong(r.code) },
      { key: "type", header: "Type" },
      { key: "value", header: "Value", render: (r) => nameChip(r.value, "primary") },
      { key: "used", header: "Used", align: "right", sortable: true, render: (r) => `${r.used} / ${r.limit}` },
      { key: "status", header: "Status", render: (r) => <StatusChip status={r.status} /> },
    ],
  },
  "/ecommerce/promotions": {
    title: "Promotions", subtitle: "Scheduled and running promotional campaigns.",
    actionLabel: "New promotion", getRowKey: (r) => r.id, rows: PROMOTIONS_LIST, searchKeys: ["name", "channel"],
    filters: [
      { key: "active", label: "Active", test: (r) => r.status === "Active" },
      { key: "scheduled", label: "Scheduled", test: (r) => r.status === "Scheduled" },
      { key: "completed", label: "Completed", test: (r) => r.status === "Completed" },
    ],
    columns: [
      { key: "name", header: "Promotion", sortable: true, render: (r) => strong(r.name) },
      { key: "channel", header: "Channel", sortable: true },
      { key: "starts", header: "Starts", sortable: true },
      { key: "ends", header: "Ends", sortable: true },
      { key: "status", header: "Status", render: (r) => <StatusChip status={r.status} /> },
    ],
  },
  "/ecommerce/wishlist": {
    title: "Wishlist", subtitle: "Products customers have saved for later.",
    getRowKey: (r) => r.id, rows: WISHLIST_LIST, searchKeys: ["customer", "product"], pageSize: 12,
    columns: [
      { key: "customer", header: "Customer", sortable: true, render: (r) => <EntityCell name={r.customer} /> },
      { key: "product", header: "Product", render: (r) => strong(r.product) },
      { key: "price", header: "Price", align: "right", sortable: true, render: (r) => strong(money(r.price)) },
      { key: "added", header: "Added", align: "right" },
      { key: "inStock", header: "Availability", render: (r) => <StatusChip status={r.inStock ? "In stock" : "Out of stock"} /> },
    ],
  },

  "/logistics/shipments": {
    title: "Shipments", subtitle: "Freight in transit across the network.",
    actionLabel: "New shipment", getRowKey: (r) => r.id, rows: SHIPMENTS_LIST, searchKeys: ["id", "origin", "destination", "carrier"], pageSize: 12,
    filters: [
      { key: "transit", label: "In transit", test: (r) => r.status === "In Transit" },
      { key: "delivered", label: "Delivered", test: (r) => r.status === "Delivered" },
      { key: "delayed", label: "Delayed", test: (r) => r.status === "Delayed" },
    ],
    columns: [
      { key: "id", header: "Shipment", sortable: true, render: (r) => strong(r.id) },
      { key: "origin", header: "Origin", sortable: true },
      { key: "destination", header: "Destination", sortable: true },
      { key: "carrier", header: "Carrier" },
      { key: "eta", header: "ETA", sortable: true },
      { key: "status", header: "Status", render: (r) => <StatusChip status={r.status} /> },
    ],
  },
  "/logistics/delivery-tracking": {
    title: "Delivery tracking", subtitle: "Last-mile routes and their progress.",
    getRowKey: (r) => r.id, rows: DELIVERIES_LIST, searchKeys: ["id", "order", "driver"], pageSize: 12,
    columns: [
      { key: "id", header: "Route", sortable: true, render: (r) => strong(r.id) },
      { key: "order", header: "Order" },
      { key: "driver", header: "Driver", render: (r) => <EntityCell name={r.driver} /> },
      { key: "stops", header: "Stops", align: "right", sortable: true },
      { key: "window", header: "Window" },
      { key: "status", header: "Status", render: (r) => <StatusChip status={r.status} /> },
    ],
  },
  "/logistics/fleet-management": {
    title: "Fleet management", subtitle: "Vehicles, drivers and service status.",
    actionLabel: "Add vehicle", getRowKey: (r) => r.id, rows: FLEET_LIST, searchKeys: ["id", "plate", "driver", "type"],
    filters: [
      { key: "active", label: "Active", test: (r) => r.status === "Active" },
      { key: "maintenance", label: "Maintenance", test: (r) => r.status === "Maintenance" },
      { key: "idle", label: "Idle", test: (r) => r.status === "Idle" },
    ],
    columns: [
      { key: "id", header: "Vehicle", sortable: true, render: (r) => strong(r.id) },
      { key: "type", header: "Type", sortable: true },
      { key: "plate", header: "Plate" },
      { key: "driver", header: "Driver", render: (r) => <EntityCell name={r.driver} /> },
      { key: "mileage", header: "Mileage", align: "right", sortable: true, render: (r) => `${r.mileage.toLocaleString()} mi` },
      { key: "status", header: "Status", render: (r) => <StatusChip status={r.status} /> },
    ],
  },
  "/logistics/warehouse-management": {
    title: "Warehouse management", subtitle: "Capacity and staffing across every site.",
    actionLabel: "Add warehouse", getRowKey: (r) => r.id, rows: WAREHOUSES_LIST,
    searchKeys: ["name", "location"],
    filters: [
      { key: "near", label: "Near capacity", test: (r) => r.status === "Near capacity" },
      { key: "under", label: "Under-utilised", test: (r) => r.status === "Under-utilised" },
    ],
    columns: [
      { key: "name", header: "Warehouse", sortable: true, render: (r) => strong(r.name) },
      { key: "location", header: "Location", sortable: true },
      { key: "skus", header: "SKUs", align: "right", sortable: true, render: (r) => r.skus.toLocaleString() },
      { key: "staff", header: "Staff", align: "right", sortable: true },
      { key: "capacity", header: "Capacity", align: "right", sortable: true, render: (r) => bar(r.capacity) },
      { key: "status", header: "Status", render: (r) => <StatusChip status={r.status} /> },
    ],
  },
  "/logistics/route-planning": {
    title: "Route planning", subtitle: "Planned and active delivery routes.",
    actionLabel: "Plan route", getRowKey: (r) => r.id, rows: ROUTE_PLANS_LIST,
    searchKeys: ["id", "name", "driver"], pageSize: 12,
    filters: [
      { key: "planned", label: "Planned", test: (r) => r.status === "Planned" },
      { key: "active", label: "Active", test: (r) => r.status === "Active" },
      { key: "delayed", label: "Delayed", test: (r) => r.status === "Delayed" },
    ],
    columns: [
      { key: "id", header: "Route", sortable: true, render: (r) => strong(r.id) },
      { key: "name", header: "Leg", sortable: true },
      { key: "driver", header: "Driver", render: (r) => <EntityCell name={r.driver} /> },
      { key: "stops", header: "Stops", align: "right", sortable: true },
      { key: "distance", header: "Distance", align: "right", sortable: true, render: (r) => `${r.distance} km` },
      { key: "window", header: "Window" },
      { key: "status", header: "Status", render: (r) => <StatusChip status={r.status} /> },
    ],
  },
  "/user-management/permissions": {
    title: "Permissions", subtitle: "What each role is allowed to do.",
    getRowKey: (r) => r.id, rows: PERMISSIONS_LIST, searchKeys: ["name", "category", "description"],
    filters: [
      { key: "restricted", label: "Restricted", test: (r) => r.scope === "Restricted" },
      { key: "admin", label: "Admin", test: (r) => r.category === "Admin" },
      { key: "developer", label: "Developer", test: (r) => r.category === "Developer" },
    ],
    columns: [
      { key: "name", header: "Permission", sortable: true, render: (r) => (
        <div className="min-w-0">
          <p className="text-sm font-medium text-[var(--app-fg)]">{r.name}</p>
          <p className="truncate text-xs text-[color:var(--app-fg-subtle)]">{r.description}</p>
        </div>
      ) },
      { key: "category", header: "Category", sortable: true, render: (r) => nameChip(r.category) },
      { key: "roles", header: "Granted to", render: (r) => (
        <div className="flex flex-wrap gap-1">
          {r.roles.map((role) => (
            <Chip key={role} size="sm" variant="bordered">{role}</Chip>
          ))}
        </div>
      ) },
      { key: "scope", header: "Scope", render: (r) => <StatusChip status={r.scope === "Restricted" ? "Restricted" : "Enabled"} /> },
    ],
  },

  "/crm/opportunities": {
    title: "Opportunities", subtitle: "Qualified deals with a projected close.",
    actionLabel: "New opportunity", getRowKey: (r) => r.id, rows: OPPORTUNITIES_LIST, searchKeys: ["account", "owner"],
    columns: [
      { key: "account", header: "Account", sortable: true, render: (r) => strong(r.account) },
      { key: "owner", header: "Owner", render: (r) => <EntityCell name={r.owner} /> },
      { key: "stage", header: "Stage", sortable: true, render: (r) => <StatusChip status={r.stage} /> },
      { key: "value", header: "Value", align: "right", sortable: true, render: (r) => strong(money(r.value)) },
      { key: "close", header: "Close date", sortable: true },
    ],
  },
  "/crm/campaigns": {
    title: "Campaigns", subtitle: "Demand-gen campaigns and their contribution.",
    actionLabel: "New campaign", getRowKey: (r) => r.id, rows: CAMPAIGNS_LIST, searchKeys: ["name", "channel"],
    filters: [
      { key: "active", label: "Active", test: (r) => r.status === "Active" },
      { key: "scheduled", label: "Scheduled", test: (r) => r.status === "Scheduled" },
      { key: "completed", label: "Completed", test: (r) => r.status === "Completed" },
    ],
    columns: [
      { key: "name", header: "Campaign", sortable: true, render: (r) => strong(r.name) },
      { key: "channel", header: "Channel", sortable: true },
      { key: "leads", header: "Leads", align: "right", sortable: true },
      { key: "budget", header: "Budget", align: "right", sortable: true, render: (r) => strong(money(r.budget)) },
      { key: "status", header: "Status", render: (r) => <StatusChip status={r.status} /> },
    ],
  },

  "/finance/payments": {
    title: "Payments", subtitle: "Incoming and outgoing payments.",
    getRowKey: (r) => r.id, rows: PAYMENTS_LIST, searchKeys: ["id", "party", "method"], pageSize: 12,
    filters: [
      { key: "paid", label: "Paid", test: (r) => r.status === "Paid" },
      { key: "pending", label: "Pending", test: (r) => r.status === "Pending" },
      { key: "failed", label: "Failed", test: (r) => r.status === "Failed" },
    ],
    columns: [
      { key: "id", header: "Payment", sortable: true, render: (r) => strong(r.id) },
      { key: "party", header: "Party", sortable: true },
      { key: "method", header: "Method" },
      { key: "date", header: "Date", sortable: true },
      { key: "amount", header: "Amount", align: "right", sortable: true, render: (r) => strong(money(r.amount)) },
      { key: "status", header: "Status", render: (r) => <StatusChip status={r.status} /> },
    ],
  },
  "/finance/expenses": {
    title: "Expenses", subtitle: "Company spend by vendor and category.",
    actionLabel: "Add expense", getRowKey: (r) => r.id, rows: EXPENSES_LIST, searchKeys: ["vendor", "category"], pageSize: 12,
    filters: [
      { key: "pending", label: "Pending", test: (r) => r.status === "Pending" },
      { key: "approved", label: "Approved", test: (r) => r.status === "Approved" },
      { key: "rejected", label: "Rejected", test: (r) => r.status === "Rejected" },
    ],
    columns: [
      { key: "vendor", header: "Vendor", sortable: true, render: (r) => strong(r.vendor) },
      { key: "category", header: "Category", sortable: true, render: (r) => nameChip(r.category) },
      { key: "date", header: "Date", sortable: true },
      { key: "amount", header: "Amount", align: "right", sortable: true, render: (r) => strong(money(r.amount)) },
      { key: "status", header: "Status", render: (r) => <StatusChip status={r.status} /> },
    ],
  },

  "/marketing/email-campaigns": {
    title: "Email campaigns", subtitle: "Broadcasts and their engagement.",
    actionLabel: "New email", getRowKey: (r) => r.id, rows: MKT_EMAIL_LIST, searchKeys: ["name"],
    filters: [
      { key: "sent", label: "Sent", test: (r) => r.status === "Sent" },
      { key: "draft", label: "Draft", test: (r) => r.status === "Draft" },
      { key: "scheduled", label: "Scheduled", test: (r) => r.status === "Scheduled" },
    ],
    columns: [
      { key: "name", header: "Campaign", sortable: true, render: (r) => strong(r.name) },
      { key: "sent", header: "Sent", align: "right", sortable: true, render: (r) => r.sent.toLocaleString() },
      { key: "openRate", header: "Open rate", align: "right" },
      { key: "clickRate", header: "Click rate", align: "right" },
      { key: "status", header: "Status", render: (r) => <StatusChip status={r.status} /> },
    ],
  },
  "/marketing/sms-campaigns": {
    title: "SMS campaigns", subtitle: "Text broadcasts and their response.",
    actionLabel: "New SMS", getRowKey: (r) => r.id, rows: MKT_SMS_LIST, searchKeys: ["name"],
    columns: [
      { key: "name", header: "Campaign", sortable: true, render: (r) => strong(r.name) },
      { key: "sent", header: "Sent", align: "right", sortable: true, render: (r) => r.sent.toLocaleString() },
      { key: "ctr", header: "CTR", align: "right" },
      { key: "optOut", header: "Opt-out", align: "right" },
      { key: "status", header: "Status", render: (r) => <StatusChip status={r.status} /> },
    ],
  },
  "/marketing/landing-pages": {
    title: "Landing pages", subtitle: "Campaign pages and their conversion.",
    actionLabel: "New page", getRowKey: (r) => r.id, rows: LANDING_PAGES_LIST, searchKeys: ["name"],
    filters: [
      { key: "published", label: "Published", test: (r) => r.status === "Published" },
      { key: "draft", label: "Draft", test: (r) => r.status === "Draft" },
    ],
    columns: [
      { key: "name", header: "Page", sortable: true, render: (r) => strong(r.name) },
      { key: "visits", header: "Visits", align: "right", sortable: true, render: (r) => r.visits.toLocaleString() },
      { key: "conversion", header: "Conversion", align: "right" },
      { key: "updated", header: "Updated", align: "right" },
      { key: "status", header: "Status", render: (r) => <StatusChip status={r.status} /> },
    ],
  },
  "/marketing/segments": {
    title: "Segments", subtitle: "Audiences you can target across channels.",
    actionLabel: "New segment", getRowKey: (r) => r.id, rows: SEGMENTS_LIST, searchKeys: ["name", "basis"],
    columns: [
      { key: "name", header: "Segment", sortable: true, render: (r) => strong(r.name) },
      { key: "size", header: "Size", align: "right", sortable: true, render: (r) => r.size.toLocaleString() },
      { key: "basis", header: "Basis", render: (r) => nameChip(r.basis) },
      { key: "updated", header: "Updated", align: "right" },
    ],
  },
  "/finance/financial-reports": {
    title: "Financial reports", subtitle: "Saved statements and schedules.",
    actionLabel: "New report", getRowKey: (r) => r.id, rows: FINANCIAL_REPORTS_LIST,
    searchKeys: ["name", "type"],
    filters: [
      { key: "ready", label: "Ready", test: (r) => r.status === "Ready" },
      { key: "scheduled", label: "Scheduled", test: (r) => r.status === "Scheduled" },
    ],
    columns: [
      { key: "name", header: "Report", sortable: true, render: (r) => strong(r.name) },
      { key: "type", header: "Type", render: (r) => nameChip(r.type) },
      { key: "cadence", header: "Cadence", sortable: true },
      { key: "owner", header: "Owner", render: (r) => <EntityCell name={r.owner} /> },
      { key: "lastRun", header: "Last run", sortable: true },
      { key: "status", header: "Status", render: (r) => <StatusChip status={r.status} /> },
    ],
  },
};
