import { Chip } from "oks-ui";
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
  stage: pick(["Qualification", "Discovery", "Proposal", "Negotiation", "Won", "Lost"], i * 3),
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
};
