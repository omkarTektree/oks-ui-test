// Configs for the DetailPage archetype (src/Pages/InnerPages/DetailPage.jsx).
// Pure data. Block kinds: keyvalue | timeline | activity | list | text.

export const DETAIL_CONFIGS = {
  "/user-management/my-profile": {
    title: "My profile",
    subtitle: "Your account details and recent activity.",
    backTo: "/user-management/all-users",
    backLabel: "All users",
    header: {
      name: "Amara Bello",
      sub: "Head of Product · Product team",
      tags: [
        { label: "Owner", color: "primary" },
        { label: "Active", color: "success" },
      ],
      actions: [
        { label: "Edit profile", color: "primary", to: "/account/profile" },
        { label: "Security", variant: "bordered", to: "/account/security" },
      ],
    },
    stats: [
      { label: "Projects led", value: "8", hint: "3 active" },
      { label: "Tasks completed", value: "412", hint: "last 90 days" },
      { label: "Team members", value: "14", hint: "across 4 squads" },
      { label: "Tenure", value: "3.2 yrs", hint: "since Apr 2023" },
    ],
    tabs: [
      {
        id: "overview",
        label: "Overview",
        blocks: [
          {
            kind: "keyvalue",
            title: "Personal information",
            columns: 2,
            items: [
              { label: "Full name", value: "Amara Bello" },
              { label: "Email", value: "amara.bello@acme.io" },
              { label: "Phone", value: "+1 (415) 555-0142" },
              { label: "Location", value: "San Francisco, CA" },
              { label: "Timezone", value: "PST (UTC−8)" },
              { label: "Employee ID", value: "USR-1000" },
            ],
          },
          {
            kind: "keyvalue",
            title: "Role & access",
            columns: 2,
            items: [
              { label: "Job title", value: "Head of Product" },
              { label: "Department", value: "Product" },
              { label: "Manager", value: "Reports to CEO" },
              { label: "Role", value: "Owner" },
              { label: "Billing access", value: "Yes" },
              { label: "2FA", value: "Enabled" },
            ],
          },
          {
            kind: "list",
            title: "Squads",
            items: [
              { label: "Onboarding", value: "Lead" },
              { label: "Growth", value: "Member" },
              { label: "Platform", value: "Stakeholder" },
              { label: "Design system", value: "Sponsor" },
            ],
          },
          {
            kind: "text",
            title: "About",
            body:
              "Leads product for the core platform. Focused this quarter on the onboarding redesign and usage-based pricing. Previously PM for the checkout and billing surfaces.",
          },
        ],
      },
      {
        id: "activity",
        label: "Activity",
        blocks: [
          {
            kind: "activity",
            title: "Recent activity",
            subtitle: "Last 7 days",
            wide: true,
            items: [
              { who: "Amara Bello", what: "approved the Sprint 25 scope.", when: "2 hours ago" },
              { who: "Amara Bello", what: "commented on \"Review + confirm step\".", when: "5 hours ago" },
              { who: "Amara Bello", what: "created project \"Usage-based pricing\".", when: "Yesterday" },
              { who: "Amara Bello", what: "moved 3 tasks to Done in Checkout performance.", when: "2 days ago" },
              { who: "Amara Bello", what: "invited Nora Kim to the Growth squad.", when: "4 days ago" },
            ],
          },
          {
            kind: "timeline",
            title: "Milestones",
            wide: true,
            items: [
              { title: "Promoted to Head of Product", meta: "Product", date: "Jan 2025", tone: "primary" },
              { title: "Shipped checkout v2", meta: "42% faster load", date: "Sep 2024", tone: "success" },
              { title: "Joined Acme", meta: "as Senior PM", date: "Apr 2023", tone: "primary" },
            ],
          },
        ],
      },
      {
        id: "preferences",
        label: "Preferences",
        blocks: [
          {
            kind: "keyvalue",
            title: "Notifications",
            columns: 2,
            items: [
              { label: "Product news", value: "Email" },
              { label: "Mentions", value: "Email + push" },
              { label: "Weekly digest", value: "On · Monday" },
              { label: "Assigned to me", value: "Push" },
            ],
          },
          {
            kind: "keyvalue",
            title: "Appearance",
            columns: 2,
            items: [
              { label: "Theme", value: "System" },
              { label: "Density", value: "Comfortable" },
              { label: "Language", value: "English (US)" },
              { label: "Start of week", value: "Monday" },
            ],
          },
        ],
      },
    ],
  },
};
