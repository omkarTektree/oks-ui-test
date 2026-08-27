// Mock data for the /apps/* screens (Chat, Email, Calendar, Files, Notes,
// Tasks, Help Desk, Support Tickets, Contacts). All names run through
// avatarUrl() at render time for stable stock photos.

const NAMES = [
  "Amara Bello", "Jonas Weber", "Lena Ito", "Sam Okafor", "Nora Kim",
  "Diego Ruiz", "Priya Nair", "Maya Chen", "Ethan Cole", "Sofia Rossi",
  "Marcus Lee", "Ines Duarte", "Tariq Amin", "Owen Baxter", "Elena Novak",
];

// ---------------------------------------------------------------- Chat / DM
export const CONVERSATIONS = [
  {
    id: "c1", name: "Maya Chen", role: "Product Design",
    last: "Sounds good — I'll push the revised flows tonight.",
    time: "9:41 AM", unread: 2, online: true,
    messages: [
      { id: "m1", from: "them", text: "Morning! Did you get a chance to look at the onboarding redesign?", time: "9:12 AM" },
      { id: "m2", from: "me", text: "Yeah, went through it on the train. The empty states are much clearer now.", time: "9:20 AM" },
      { id: "m3", from: "them", text: "The one thing I'm unsure about is step 3 — feels heavy.", time: "9:22 AM" },
      { id: "m4", from: "me", text: "Agreed. Could we split it into a review + confirm?", time: "9:35 AM" },
      { id: "m5", from: "them", text: "Sounds good — I'll push the revised flows tonight.", time: "9:41 AM" },
    ],
  },
  {
    id: "c2", name: "Diego Ruiz", role: "Engineering",
    last: "Deploy is green. Watching metrics for an hour.",
    time: "8:57 AM", unread: 0, online: true,
    messages: [
      { id: "m1", from: "them", text: "Rolling the release out to 10% now.", time: "8:30 AM" },
      { id: "m2", from: "me", text: "Nice. Ping me if error rate moves.", time: "8:44 AM" },
      { id: "m3", from: "them", text: "Deploy is green. Watching metrics for an hour.", time: "8:57 AM" },
    ],
  },
  {
    id: "c3", name: "Priya Nair", role: "Marketing",
    last: "Can you review the launch copy by EOD?",
    time: "Yesterday", unread: 1, online: false,
    messages: [
      { id: "m1", from: "them", text: "Draft of the launch announcement is in the doc.", time: "4:10 PM" },
      { id: "m2", from: "them", text: "Can you review the launch copy by EOD?", time: "4:11 PM" },
    ],
  },
  {
    id: "c4", name: "Owen Baxter", role: "Sales",
    last: "Closed the Northwind renewal — will share notes.",
    time: "Yesterday", unread: 0, online: false,
    messages: [
      { id: "m1", from: "them", text: "Closed the Northwind renewal — will share notes.", time: "2:03 PM" },
      { id: "m2", from: "me", text: "Huge. Congrats!", time: "2:05 PM" },
    ],
  },
  {
    id: "c5", name: "Elena Novak", role: "Support Lead",
    last: "Queue is back under 10. Thanks for the hand.",
    time: "Mon", unread: 0, online: true,
    messages: [
      { id: "m1", from: "them", text: "Queue is back under 10. Thanks for the hand.", time: "6:20 PM" },
    ],
  },
  {
    id: "c6", name: "Marcus Lee", role: "Finance",
    last: "Budget sign-off is done — you're clear to hire.",
    time: "Mon", unread: 0, online: false,
    messages: [
      { id: "m1", from: "them", text: "Budget sign-off is done — you're clear to hire.", time: "11:02 AM" },
    ],
  },
];

// ---------------------------------------------------------------- Group Chat
export const CHANNELS = [
  { id: "g1", name: "product", topic: "Roadmap, specs, releases", members: 24, unread: 3 },
  { id: "g2", name: "engineering", topic: "Builds, incidents, reviews", members: 31, unread: 0 },
  { id: "g3", name: "design-crit", topic: "Weekly critique + WIP", members: 12, unread: 0 },
  { id: "g4", name: "launch-room", topic: "Q3 launch war room", members: 18, unread: 7 },
  { id: "g5", name: "random", topic: "Non-work chatter", members: 46, unread: 0 },
];

export const CHANNEL_THREAD = [
  { id: "t1", name: "Priya Nair", text: "Launch assets are final. Uploading to the CDN now.", time: "10:02 AM" },
  { id: "t2", name: "Diego Ruiz", text: "Feature flag is staged. We flip it at 9am PT tomorrow.", time: "10:05 AM" },
  { id: "t3", name: "Maya Chen", text: "Updated the in-app announcement banner copy — see thread.", time: "10:09 AM" },
  { id: "t4", name: "Owen Baxter", text: "Sales enablement deck is ready for review.", time: "10:14 AM" },
  { id: "t5", name: "Nora Kim", text: "Support macros written. Elena is briefing the team at 4.", time: "10:21 AM" },
];

export const CHANNEL_MEMBERS = NAMES.slice(0, 8).map((name, i) => ({
  name, online: i % 3 !== 0, role: ["Owner", "Admin", "Member", "Member", "Member"][i % 5],
}));

// ---------------------------------------------------------------- Email
export const MAIL_FOLDERS = [
  { id: "inbox", label: "Inbox", count: 12 },
  { id: "starred", label: "Starred", count: 3 },
  { id: "sent", label: "Sent", count: 0 },
  { id: "drafts", label: "Drafts", count: 2 },
  { id: "archive", label: "Archive", count: 0 },
  { id: "spam", label: "Spam", count: 5 },
  { id: "trash", label: "Trash", count: 0 },
];

export const MAIL_LABELS = [
  { id: "work", label: "Work", tone: "info" },
  { id: "finance", label: "Finance", tone: "success" },
  { id: "personal", label: "Personal", tone: "warning" },
];

export const MESSAGES = [
  {
    id: "e1", from: "Sofia Rossi", email: "sofia@northwind.co",
    subject: "Contract renewal — countersigned copy attached",
    preview: "Hi, our legal team has countersigned. Attaching the final PDF for your records…",
    time: "9:48 AM", unread: true, starred: true, label: "work", attachments: 1,
    body: "Hi,\n\nOur legal team has countersigned the renewal. I've attached the final PDF for your records.\n\nWe're excited to keep building with you this year. Let me know if anything looks off.\n\nBest,\nSofia",
  },
  {
    id: "e2", from: "Billing at Vela", email: "billing@vela.app",
    subject: "Your July invoice is ready",
    preview: "Invoice INV-2043 for $4,820.00 is now available. Payment will be collected on…",
    time: "8:30 AM", unread: true, starred: false, label: "finance", attachments: 1,
    body: "Invoice INV-2043 for $4,820.00 is now available.\n\nPayment will be collected automatically on the 5th using the card on file.\n\nView the full breakdown in your billing dashboard.",
  },
  {
    id: "e3", from: "Maya Chen", email: "maya@acme.io",
    subject: "Re: Onboarding redesign — step 3",
    preview: "Splitting it into review + confirm works. I'll have new flows up tonight…",
    time: "Yesterday", unread: false, starred: true, label: "work", attachments: 0,
    body: "Splitting it into review + confirm works. I'll have new flows up tonight and we can walk through them in standup.",
  },
  {
    id: "e4", from: "GitHub", email: "notifications@github.com",
    subject: "[oks-ui] 3 new pull requests need review",
    preview: "feat: mini-mode flyouts · fix: chart legend overflow · chore: bump deps…",
    time: "Yesterday", unread: false, starred: false, label: null, attachments: 0,
    body: "You have 3 pull requests waiting for review in oks-ui/oks-ui.",
  },
  {
    id: "e5", from: "Elena Novak", email: "elena@acme.io",
    subject: "Support summary — week 34",
    preview: "CSAT 94%, first-response time down to 42 min. Full report inside…",
    time: "Mon", unread: false, starred: false, label: "work", attachments: 2,
    body: "CSAT held at 94% this week. First-response time is down to 42 minutes after the macro cleanup.\n\nFull report attached.",
  },
  {
    id: "e6", from: "Priya Nair", email: "priya@acme.io",
    subject: "Launch copy — final pass",
    preview: "Made your edits. One open question on the pricing line — flagged in comments…",
    time: "Mon", unread: false, starred: false, label: "work", attachments: 0,
    body: "Made your edits. One open question on the pricing line — flagged in comments. Otherwise this is ready to ship.",
  },
  {
    id: "e7", from: "Talent at Acme", email: "talent@acme.io",
    subject: "2 candidates scheduled for Thursday",
    preview: "Senior Frontend loop: 10:00 and 14:00. Scorecards are in the ATS…",
    time: "Sun", unread: false, starred: false, label: null, attachments: 0,
    body: "Two candidates are scheduled for the Senior Frontend loop on Thursday at 10:00 and 14:00. Scorecards are in the ATS.",
  },
];

// ---------------------------------------------------------------- Calendar
export const CAL_EVENTS = [
  { day: 3, title: "Design review", time: "10:00", tone: "primary" },
  { day: 3, title: "1:1 · Diego", time: "15:30", tone: "info" },
  { day: 7, title: "Sprint planning", time: "09:30", tone: "primary" },
  { day: 9, title: "Customer call · Northwind", time: "13:00", tone: "success" },
  { day: 12, title: "All-hands", time: "16:00", tone: "warning" },
  { day: 12, title: "Release cut", time: "18:00", tone: "danger" },
  { day: 15, title: "Roadmap workshop", time: "11:00", tone: "primary" },
  { day: 18, title: "Interview loop", time: "10:00", tone: "info" },
  { day: 18, title: "Interview loop", time: "14:00", tone: "info" },
  { day: 21, title: "Launch go/no-go", time: "09:00", tone: "danger" },
  { day: 22, title: "Launch day", time: "All day", tone: "success" },
  { day: 25, title: "Retro", time: "15:00", tone: "primary" },
  { day: 28, title: "Board update draft", time: "12:00", tone: "warning" },
];

export const CAL_UPCOMING = [
  { title: "Design review", when: "Today · 10:00 – 11:00", where: "Figma / Room 4" },
  { title: "1:1 with Diego", when: "Today · 15:30 – 16:00", where: "Zoom" },
  { title: "Sprint planning", when: "Thu · 09:30 – 11:00", where: "Room 2" },
  { title: "Customer call · Northwind", when: "Sat · 13:00 – 13:45", where: "Google Meet" },
];

// ---------------------------------------------------------------- File Manager
export const FILE_TREE = {
  crumbs: ["My Drive", "Projects", "Q3 Launch"],
  folders: [
    { name: "Design assets", items: 42, size: "1.2 GB", modified: "2 days ago" },
    { name: "Legal", items: 8, size: "24 MB", modified: "1 week ago" },
    { name: "Marketing", items: 63, size: "3.4 GB", modified: "Yesterday" },
    { name: "Research", items: 19, size: "180 MB", modified: "3 days ago" },
  ],
  files: [
    { name: "Launch plan.docx", kind: "doc", size: "82 KB", modified: "Today", by: "Priya Nair" },
    { name: "Go-to-market.pptx", kind: "slide", size: "14 MB", modified: "Yesterday", by: "Owen Baxter" },
    { name: "Budget FY26.xlsx", kind: "sheet", size: "210 KB", modified: "Mon", by: "Marcus Lee" },
    { name: "Hero shot.png", kind: "image", size: "6.1 MB", modified: "2 days ago", by: "Maya Chen" },
    { name: "Announcement.mp4", kind: "video", size: "94 MB", modified: "3 days ago", by: "Priya Nair" },
    { name: "Contract-Northwind.pdf", kind: "pdf", size: "1.3 MB", modified: "4 days ago", by: "Sofia Rossi" },
    { name: "brand-tokens.json", kind: "code", size: "18 KB", modified: "1 week ago", by: "Maya Chen" },
    { name: "press-list.csv", kind: "sheet", size: "44 KB", modified: "1 week ago", by: "Priya Nair" },
  ],
  storage: { used: 68, usedLabel: "68 GB", totalLabel: "100 GB" },
};

// ---------------------------------------------------------------- Notes
export const NOTE_FOLDERS = [
  { id: "all", label: "All notes", count: 12 },
  { id: "work", label: "Work", count: 7 },
  { id: "ideas", label: "Ideas", count: 3 },
  { id: "personal", label: "Personal", count: 2 },
];

export const NOTES = [
  { id: "n1", title: "Q3 launch checklist", folder: "work", color: "primary", updated: "10 min ago",
    body: "Freeze scope Fri · QA pass Mon · enablement Tue · go/no-go Wed 9am · flip flag Thu 9am PT · monitor 48h." },
  { id: "n2", title: "Onboarding redesign notes", folder: "work", color: "info", updated: "1 hour ago",
    body: "Split step 3 into review + confirm. Clearer empty states. Add progress affordance. Ship behind flag." },
  { id: "n3", title: "Interview questions — Senior FE", folder: "work", color: "default", updated: "Yesterday",
    body: "Rendering perf story. State management trade-offs. A time they cut scope. Accessibility habits." },
  { id: "n4", title: "Idea: usage-based pricing tier", folder: "ideas", color: "success", updated: "2 days ago",
    body: "Meter API calls above plan limit. Soft cap + email at 80%. Needs billing + metering work." },
  { id: "n5", title: "Book: Shape Up — takeaways", folder: "personal", color: "warning", updated: "5 days ago",
    body: "Appetite not estimate. Fixed time, variable scope. Circuit breaker. No backlog grooming." },
  { id: "n6", title: "Retro actions", folder: "work", color: "danger", updated: "1 week ago",
    body: "Staging parity issue. Add pre-deploy checklist. Rotate incident lead. Document rollback." },
  { id: "n7", title: "Idea: in-app changelog widget", folder: "ideas", color: "info", updated: "1 week ago",
    body: "Pull from releases feed. Badge on avatar menu. Dismiss per-user in localStorage." },
  { id: "n8", title: "Groceries / weekend", folder: "personal", color: "default", updated: "1 week ago",
    body: "Coffee, oats, olive oil, greens, lemons, pasta, tinned tomatoes, parmesan." },
];

// ---------------------------------------------------------------- Task Manager
export const TASK_COLUMNS = [
  {
    id: "backlog", title: "Backlog",
    tasks: [
      { id: "T-142", title: "Audit color contrast on marketing site", tag: "a11y", priority: "Low", assignee: "Maya Chen" },
      { id: "T-138", title: "Spike: offline mode for notes", tag: "research", priority: "Low", assignee: "Diego Ruiz" },
      { id: "T-151", title: "Rewrite empty states copy", tag: "content", priority: "Medium", assignee: "Priya Nair" },
    ],
  },
  {
    id: "todo", title: "To do",
    tasks: [
      { id: "T-160", title: "Feature flag for onboarding v2", tag: "eng", priority: "High", assignee: "Diego Ruiz" },
      { id: "T-161", title: "New review + confirm step", tag: "design", priority: "High", assignee: "Maya Chen" },
      { id: "T-155", title: "Sales enablement deck", tag: "gtm", priority: "Medium", assignee: "Owen Baxter" },
    ],
  },
  {
    id: "doing", title: "In progress",
    tasks: [
      { id: "T-149", title: "Launch announcement banner", tag: "eng", priority: "High", assignee: "Ethan Cole" },
      { id: "T-152", title: "Support macros for v2", tag: "support", priority: "Medium", assignee: "Elena Novak" },
    ],
  },
  {
    id: "review", title: "Review",
    tasks: [
      { id: "T-144", title: "Chart legend overflow fix", tag: "eng", priority: "Medium", assignee: "Diego Ruiz" },
      { id: "T-147", title: "Pricing page final copy", tag: "content", priority: "High", assignee: "Priya Nair" },
    ],
  },
  {
    id: "done", title: "Done",
    tasks: [
      { id: "T-130", title: "Budget sign-off FY26", tag: "ops", priority: "High", assignee: "Marcus Lee" },
      { id: "T-133", title: "Northwind renewal", tag: "sales", priority: "High", assignee: "Owen Baxter" },
      { id: "T-140", title: "Q2 retro + actions", tag: "ops", priority: "Low", assignee: "Nora Kim" },
    ],
  },
];

// ---------------------------------------------------------------- Help Desk
export const HELPDESK_STATS = [
  { label: "Open tickets", value: "38", hint: "8 unassigned", trend: -6 },
  { label: "Avg first response", value: "42m", hint: "target 1h", trend: -14 },
  { label: "Resolved today", value: "51", hint: "+12 vs yesterday", trend: 12 },
  { label: "CSAT (7d)", value: "94%", hint: "1,204 ratings", trend: 2 },
];

export const HELPDESK_AGENTS = [
  { name: "Elena Novak", open: 6, resolved: 14, csat: "97%" },
  { name: "Nora Kim", open: 9, resolved: 11, csat: "93%" },
  { name: "Tariq Amin", open: 7, resolved: 9, csat: "95%" },
  { name: "Ines Duarte", open: 5, resolved: 12, csat: "96%" },
  { name: "Sam Okafor", open: 11, resolved: 5, csat: "88%" },
];

export const HELPDESK_QUEUES = [
  { label: "Billing", open: 12, sla: "on track" },
  { label: "Technical", open: 16, sla: "at risk" },
  { label: "Onboarding", open: 6, sla: "on track" },
  { label: "Account", open: 4, sla: "on track" },
];

// ---------------------------------------------------------------- Support Tickets
const TICKET_SUBJECTS = [
  "Cannot export report to CSV",
  "SSO login loops back to sign-in",
  "Invoice total doesn't match line items",
  "Webhook retries stopped after 2xx",
  "Dark mode contrast on dashboards",
  "Seat count not updating after removal",
  "API rate limit lower than documented",
  "Timezone wrong on scheduled digests",
  "Cannot invite user — email bounces",
  "Chart tooltip clipped on mobile",
  "2FA reset request",
  "Data import stuck at 80%",
];
const TICKET_STATUS = ["Open", "Open", "Pending", "In progress", "Resolved"];
const TICKET_PRIORITY = ["Urgent", "High", "Medium", "Low"];
const TICKET_CHANNEL = ["Email", "Chat", "Web form", "Phone"];

export const TICKETS = TICKET_SUBJECTS.map((subject, i) => ({
  id: `TKT-${4100 + i}`,
  subject,
  requester: NAMES[(i * 3) % NAMES.length],
  agent: HELPDESK_AGENTS[i % HELPDESK_AGENTS.length].name,
  status: TICKET_STATUS[i % TICKET_STATUS.length],
  priority: TICKET_PRIORITY[i % TICKET_PRIORITY.length],
  channel: TICKET_CHANNEL[i % TICKET_CHANNEL.length],
  updated: `${(i % 9) + 1}h ago`,
  replies: (i % 5) + 1,
  body:
    "The customer reports this happens consistently since the last release. " +
    "Repro steps are attached. Asked for a HAR file and browser version.",
}));

// ---------------------------------------------------------------- Contacts
const CONTACT_COMPANIES = ["Northwind", "Acme", "Globex", "Initech", "Umbrella", "Soylent", "Hooli", "Wayne"];
const CONTACT_TAGS = ["Customer", "Prospect", "Partner", "Vendor"];

export const CONTACTS = NAMES.concat([
  "Yuki Tan", "Nadia Haddad", "Felix Marsh", "Sana Patel", "Bruno Sørensen",
]).map((name, i) => ({
  id: `CT-${900 + i}`,
  name,
  title: ["Head of Product", "Engineering Manager", "Designer", "Account Exec",
    "Ops Lead", "CTO", "Founder", "Analyst"][i % 8],
  company: CONTACT_COMPANIES[i % CONTACT_COMPANIES.length],
  email: `${name.toLowerCase().replace(/[^a-z]+/g, ".")}@${CONTACT_COMPANIES[i % CONTACT_COMPANIES.length].toLowerCase()}.com`,
  phone: `+1 (415) 555-0${100 + i}`,
  tag: CONTACT_TAGS[i % CONTACT_TAGS.length],
  location: ["San Francisco", "Berlin", "Toronto", "London", "Singapore"][i % 5],
  favorite: i % 4 === 0,
}));
