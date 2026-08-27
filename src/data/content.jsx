// Copy + data for the Utility and Pages sections.

import {
  Rocket, CreditCard, Users, Plug, ShieldCheck, BookOpen, Wrench, LifeBuoy,
} from "lucide-react";

export const FAQ_GROUPS = [
  {
    group: "Getting started",
    items: [
      { q: "How do I invite my team?", a: "Go to User Management → Add User, enter their work email and pick a role. They get an invite link that's valid for 7 days." },
      { q: "Can I import data from another tool?", a: "Yes — CSV import is available on every list screen via the Import button. Column mapping is remembered per import type." },
      { q: "Is there a free plan?", a: "The Free plan covers up to 3 seats and 1 workspace, with a 30-day history window. No card required." },
    ],
  },
  {
    group: "Billing",
    items: [
      { q: "When am I charged?", a: "Subscriptions renew on the 5th of each month. Usage-based add-ons are billed in arrears on the same invoice." },
      { q: "Can I change plans mid-cycle?", a: "Upgrades take effect immediately and are prorated. Downgrades apply at the start of the next cycle." },
      { q: "Do you offer annual billing?", a: "Yes, annual billing saves roughly two months versus monthly. Switch from Settings → Company → Billing." },
    ],
  },
  {
    group: "Security & privacy",
    items: [
      { q: "Where is my data stored?", a: "Data is stored in the region you choose at signup (US, EU, or AP) and never leaves it." },
      { q: "Do you support SSO?", a: "SAML and OIDC SSO are available on the Team and Enterprise plans, with SCIM provisioning on Enterprise." },
      { q: "Is 2FA enforced?", a: "Owners can require 2FA for the whole workspace under Settings → Company → Security." },
    ],
  },
];

export const HELP_CATEGORIES = [
  { icon: Rocket, title: "Getting started", count: 14, blurb: "Set up your workspace, invite the team, import data." },
  { icon: CreditCard, title: "Billing & plans", count: 9, blurb: "Invoices, plan changes, payment methods, receipts." },
  { icon: Users, title: "Members & roles", count: 11, blurb: "Permissions, teams, guest access, deprovisioning." },
  { icon: Plug, title: "Integrations", count: 18, blurb: "Connect Slack, GitHub, calendars and webhooks." },
  { icon: ShieldCheck, title: "Security", count: 7, blurb: "SSO, 2FA, audit logs, data residency." },
  { icon: Wrench, title: "Troubleshooting", count: 21, blurb: "Fix common errors and known issues." },
];

export const HELP_ARTICLES = [
  "How roles and permissions work",
  "Setting up SAML single sign-on",
  "Exporting your data",
  "Understanding your invoice",
  "Connecting a Slack workspace",
  "Bulk-importing users from CSV",
  "Transferring workspace ownership",
  "Configuring webhook endpoints",
];

export const DOC_SECTIONS = [
  { icon: BookOpen, title: "Guides", blurb: "Step-by-step walkthroughs for common workflows." },
  { icon: Plug, title: "API reference", blurb: "REST endpoints, auth, rate limits and pagination." },
  { icon: Wrench, title: "SDKs", blurb: "Official clients for JavaScript, Python and Go." },
  { icon: LifeBuoy, title: "Support", blurb: "Contact options, SLAs and status page." },
];

export const PRICING_TIERS = [
  {
    name: "Free", price: "$0", cadence: "forever",
    blurb: "For individuals trying things out.",
    cta: "Get started", featured: false,
    features: ["3 seats", "1 workspace", "30-day history", "Community support"],
  },
  {
    name: "Pro", price: "$12", cadence: "per seat / month",
    blurb: "For small teams shipping together.",
    cta: "Start free trial", featured: true,
    features: ["Unlimited workspaces", "Unlimited history", "Advanced charts", "Priority email support", "API access"],
  },
  {
    name: "Team", price: "$24", cadence: "per seat / month",
    blurb: "For growing companies that need control.",
    cta: "Start free trial", featured: false,
    features: ["Everything in Pro", "SAML / OIDC SSO", "Audit logs", "Usage-based add-ons", "99.9% uptime SLA"],
  },
  {
    name: "Enterprise", price: "Custom", cadence: "annual",
    blurb: "For organisations with advanced needs.",
    cta: "Contact sales", featured: false,
    features: ["Everything in Team", "SCIM provisioning", "Data residency choice", "Dedicated CSM", "Custom contract & DPA"],
  },
];

export const PRICING_FAQ = [
  { q: "Can I change plans later?", a: "Yes — upgrade any time (prorated); downgrades apply next cycle." },
  { q: "What counts as a seat?", a: "Any member with sign-in access. Guests and viewers on the Team plan are free." },
  { q: "Do you offer discounts?", a: "Annual billing saves ~2 months. Non-profits and startups get 50% off Pro." },
];

export const CHANGELOG = [
  {
    version: "2.14.0", date: "Aug 22, 2026", tag: "Feature",
    items: [
      "New Apps section: Chat, Email, Calendar, File Manager and more",
      "Kanban board archetype with WIP limits",
      "Report builder — pick metrics and dimensions, preview, save",
    ],
  },
  {
    version: "2.13.2", date: "Aug 8, 2026", tag: "Fix",
    items: [
      "Chart legend no longer overflows on narrow screens",
      "Fixed timezone drift on scheduled digests",
      "Dark-mode contrast pass across dashboards",
    ],
  },
  {
    version: "2.13.0", date: "Jul 30, 2026", tag: "Feature",
    items: [
      "Config-driven list screens across CRM, HR, Logistics and Ecommerce",
      "Detail / profile pages with tabbed content",
      "Saved views on every table",
    ],
  },
  {
    version: "2.12.1", date: "Jul 15, 2026", tag: "Improvement",
    items: [
      "Faster first paint on the analytics dashboard",
      "Keyboard navigation for the command menu",
      "Smaller JS bundle (−18%)",
    ],
  },
];

export const ROADMAP = [
  {
    id: "planned", title: "Planned", accent: "default",
    items: [
      { id: "R-1", title: "Offline mode for Notes", tag: "Apps" },
      { id: "R-2", title: "Custom dashboard widgets", tag: "Analytics" },
      { id: "R-3", title: "Granular permission scopes", tag: "Security" },
      { id: "R-4", title: "Public API v2", tag: "Platform" },
    ],
  },
  {
    id: "progress", title: "In progress", accent: "primary",
    items: [
      { id: "R-5", title: "Usage-based billing", tag: "Billing" },
      { id: "R-6", title: "In-app changelog widget", tag: "Platform" },
      { id: "R-7", title: "Mini-mode sidebar flyouts", tag: "Navigation" },
    ],
  },
  {
    id: "shipped", title: "Shipped", accent: "success",
    items: [
      { id: "R-8", title: "Apps section", tag: "Apps" },
      { id: "R-9", title: "Report builder", tag: "Analytics" },
      { id: "R-10", title: "Kanban boards", tag: "Projects" },
    ],
  },
];

export const NOTIFICATIONS = [
  { id: "N-1", who: "Diego Ruiz", what: "requested your review on PR #482.", when: "8 min ago", unread: true, kind: "mention" },
  { id: "N-2", who: "System", what: "your export \"Q3 revenue\" is ready to download.", when: "40 min ago", unread: true, kind: "system" },
  { id: "N-3", who: "Priya Nair", what: "commented on \"Launch copy — final pass\".", when: "2 hours ago", unread: true, kind: "comment" },
  { id: "N-4", who: "Maya Chen", what: "assigned you to \"Review + confirm step\".", when: "5 hours ago", unread: false, kind: "assign" },
  { id: "N-5", who: "Billing", what: "invoice INV-2043 was paid successfully.", when: "Yesterday", unread: false, kind: "system" },
  { id: "N-6", who: "Owen Baxter", what: "mentioned you in #launch-room.", when: "Yesterday", unread: false, kind: "mention" },
  { id: "N-7", who: "System", what: "a new sign-in from Berlin, DE.", when: "2 days ago", unread: false, kind: "security" },
];

export const SEARCH_RESULTS = {
  query: "onboarding",
  groups: [
    {
      label: "Pages",
      items: [
        { title: "Onboarding redesign notes", meta: "Notes · updated 1 hour ago", to: "/apps/notes" },
        { title: "Create project", meta: "Projects", to: "/projects/create-project" },
      ],
    },
    {
      label: "People",
      items: [
        { title: "Maya Chen", meta: "Head of Product · owns the onboarding project", to: "/user-management/my-profile" },
      ],
    },
    {
      label: "Tasks",
      items: [
        { title: "T-161 · New review + confirm step", meta: "In progress · Maya Chen", to: "/apps/task-manager" },
        { title: "T-160 · Feature flag for onboarding v2", meta: "To do · Diego Ruiz", to: "/apps/task-manager" },
      ],
    },
    {
      label: "Help articles",
      items: [
        { title: "How roles and permissions work", meta: "Help center · Getting started", to: "/utility/help-center" },
      ],
    },
  ],
};
