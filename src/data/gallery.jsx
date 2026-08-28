import {
  Alert,
  Avatar,
  AvatarGroup,
  Badge,
  Button,
  Chip,
  Divider,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Loader,
  PageTitle,
  Tab,
  Tabs,
  Tooltip,
  toast,
} from "oks-ui";
import { Bell, Plus, Star, Trash2 } from "lucide-react";
import { avatarUrl } from "../lib/avatar";

import Surface from "../Components/ui/Surface";
import KpiCard from "../Components/ui/KpiCard";
import StatGroup from "../Components/ui/StatGroup";
import TrendChip from "../Components/ui/TrendChip";
import StatusChip from "../Components/ui/StatusChip";
import EntityCell from "../Components/ui/EntityCell";
import ChartCard from "../Components/ui/ChartCard";
import DonutStat from "../Components/ui/DonutStat";
import MeterList from "../Components/ui/MeterList";
import GoalCard from "../Components/ui/GoalCard";
import DataTable from "../Components/ui/DataTable";
import ActivityFeed from "../Components/ui/ActivityFeed";
import Timeline from "../Components/ui/Timeline";
import CohortGrid from "../Components/ui/CohortGrid";
import BoardView from "../Components/ui/BoardView";
import KeyValueList from "../Components/ui/KeyValueList";
import EmptyState from "../Components/ui/EmptyState";
import StatTile from "../Components/ui/StatTile";
import RankList from "../Components/ui/RankList";

import {
  ACTIVITY,
  DEVICE_SESSIONS,
  FUNNEL,
  MONTHLY_TARGET,
  REVENUE_SERIES,
  TOP_PRODUCTS,
  TRAFFIC_SOURCES,
} from "./analytics";

/* ---------------------------------------------------------------- oks-ui --- */

const oksUi = [
  {
    slug: "buttons",
    title: "Button",
    description: "Actions. Five variants, seven colours, polymorphic via `as`.",
    examples: [
      {
        title: "Variants",
        code: `<Button variant="solid" color="primary">Solid</Button>
<Button variant="soft">Soft</Button>
<Button variant="bordered">Bordered</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link" color="primary">Link</Button>`,
        render: () => (
          <>
            <Button variant="solid" color="primary">Solid</Button>
            <Button variant="soft">Soft</Button>
            <Button variant="bordered">Bordered</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link" color="primary">Link</Button>
          </>
        ),
      },
      {
        title: "States & content",
        code: `<Button color="primary" startContent={<Plus size={15} />}>New</Button>
<Button isLoading color="primary">Saving…</Button>
<Button isDisabled variant="soft">Disabled</Button>
<Button isIconOnly variant="bordered" aria-label="Delete">
  <Trash2 size={16} />
</Button>`,
        render: () => (
          <>
            <Button color="primary" startContent={<Plus size={15} />}>New</Button>
            <Button isLoading color="primary">Saving…</Button>
            <Button isDisabled variant="soft">Disabled</Button>
            <Button isIconOnly variant="bordered" aria-label="Delete">
              <Trash2 size={16} />
            </Button>
          </>
        ),
      },
    ],
  },
  {
    slug: "chips",
    title: "Chip",
    description: "Compact labels, closable tags, and selectable filters.",
    examples: [
      {
        title: "Variants & colours",
        code: `<Chip color="primary">Primary</Chip>
<Chip variant="soft" color="success">Success</Chip>
<Chip variant="bordered" color="warning">Warning</Chip>
<Chip variant="dot" color="danger">Danger</Chip>`,
        render: () => (
          <>
            <Chip color="primary">Primary</Chip>
            <Chip variant="soft" color="success">Success</Chip>
            <Chip variant="bordered" color="warning">Warning</Chip>
            <Chip variant="dot" color="danger">Danger</Chip>
          </>
        ),
      },
      {
        title: "Closable",
        code: `<Chip onClose={() => {}}>Design</Chip>
<Chip variant="soft" onClose={() => {}}>Engineering</Chip>`,
        render: () => (
          <>
            <Chip onClose={() => {}}>Design</Chip>
            <Chip variant="soft" onClose={() => {}}>Engineering</Chip>
          </>
        ),
      },
    ],
  },
  {
    slug: "badges",
    title: "Badge",
    description: "Anchors a count or status dot to the corner of any element.",
    examples: [
      {
        title: "Count & dot",
        code: `<Badge content={5} color="danger">
  <Button isIconOnly variant="bordered" aria-label="Alerts">
    <Bell size={18} />
  </Button>
</Badge>
<Badge isDot color="success" placement="top-end">
  <Avatar name="Dana Keller" />
</Badge>`,
        render: () => (
          <>
            <Badge content={5} color="danger">
              <Button isIconOnly variant="bordered" aria-label="Alerts">
                <Bell size={18} />
              </Button>
            </Badge>
            <Badge isDot color="success" placement="top-end">
              <Avatar name="Dana Keller" src={avatarUrl("Dana Keller")} />
            </Badge>
          </>
        ),
      },
    ],
  },
  {
    slug: "avatars",
    title: "Avatar",
    description: "Image with initials / icon fallback, status, and grouping.",
    examples: [
      {
        title: "Image, status, group",
        code: `<Avatar name="Dana Keller" src={avatarUrl("Dana Keller")} />
<Avatar name="Arjun Rao" src={avatarUrl("Arjun Rao")} status="online" />
<Avatar name="Priya Nair" size="lg" isBordered />   {/* no src -> initials */}
<AvatarGroup max={3}>
  {team.map((n) => <Avatar key={n} name={n} src={avatarUrl(n)} />)}
</AvatarGroup>`,
        render: () => (
          <>
            <Avatar name="Dana Keller" src={avatarUrl("Dana Keller")} />
            <Avatar
              name="Arjun Rao"
              src={avatarUrl("Arjun Rao")}
              status="online"
            />
            <Avatar name="Priya Nair" size="lg" isBordered />
            <AvatarGroup max={3}>
              {["Maya Chen", "Sam Okafor", "Lena Ito", "Jonas Weber"].map((n) => (
                <Avatar key={n} name={n} src={avatarUrl(n)} />
              ))}
            </AvatarGroup>
          </>
        ),
      },
    ],
  },
  {
    slug: "alerts",
    title: "Alert",
    description: "Inline messages with icon, actions, and dismiss.",
    examples: [
      {
        title: "Colours",
        code: `<Alert color="info" title="Heads up" description="A new report is ready." />
<Alert color="success" title="Saved" description="Your changes are live." />
<Alert color="danger" variant="soft" title="Payment failed"
  description="Update your card to continue." />`,
        render: () => (
          <div className="flex w-full flex-col gap-3">
            <Alert color="info" title="Heads up" description="A new report is ready." />
            <Alert color="success" title="Saved" description="Your changes are live." />
            <Alert
              color="danger"
              variant="soft"
              title="Payment failed"
              description="Update your card to continue."
            />
          </div>
        ),
      },
    ],
  },
  {
    slug: "tabs",
    title: "Tabs",
    description: "Roving-tabindex tablist. Use as a panel switcher or segmented control.",
    examples: [
      {
        title: "Basic",
        code: `<Tabs defaultSelectedKey="overview" aria-label="Sections">
  <Tab key="overview" title="Overview" />
  <Tab key="activity" title="Activity" />
  <Tab key="settings" title="Settings" />
</Tabs>`,
        render: () => (
          <Tabs defaultSelectedKey="overview" aria-label="Sections">
            <Tab key="overview" title="Overview" />
            <Tab key="activity" title="Activity" />
            <Tab key="settings" title="Settings" />
          </Tabs>
        ),
      },
    ],
  },
  {
    slug: "tooltips",
    title: "Tooltip",
    description: "Hover / focus content, viewport-aware.",
    examples: [
      {
        title: "On a button",
        code: `<Tooltip content="Add to favourites" placement="top">
  <Button isIconOnly variant="bordered" aria-label="Favourite">
    <Star size={16} />
  </Button>
</Tooltip>`,
        render: () => (
          <Tooltip content="Add to favourites" placement="top">
            <Button isIconOnly variant="bordered" aria-label="Favourite">
              <Star size={16} />
            </Button>
          </Tooltip>
        ),
      },
    ],
  },
  {
    slug: "dropdowns",
    title: "Dropdown",
    description: "ARIA menu with keyboard nav and typeahead.",
    examples: [
      {
        title: "Action menu",
        code: `<Dropdown>
  <DropdownTrigger>
    <Button variant="bordered">Options</Button>
  </DropdownTrigger>
  <DropdownMenu aria-label="Options" selectionMode="none">
    <DropdownItem key="edit" title="Edit" />
    <DropdownItem key="dupe" title="Duplicate" />
    <DropdownItem key="del" title="Delete" />
  </DropdownMenu>
</Dropdown>`,
        render: () => (
          <Dropdown>
            <DropdownTrigger>
              <Button variant="bordered">Options</Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Options" selectionMode="none">
              <DropdownItem key="edit" title="Edit" />
              <DropdownItem key="dupe" title="Duplicate" />
              <DropdownItem key="del" title="Delete" />
            </DropdownMenu>
          </Dropdown>
        ),
      },
    ],
  },
  {
    slug: "toasts",
    title: "Toast",
    description: "Transient notifications via the `toast` client.",
    examples: [
      {
        title: "Fire a toast",
        code: `toast.success("Report exported");
toast.error("Could not connect");
toast.info("3 items synced");`,
        render: () => (
          <>
            <Button variant="soft" color="success" onClick={() => toast.success("Report exported")}>
              Success
            </Button>
            <Button variant="soft" color="danger" onClick={() => toast.error("Could not connect")}>
              Error
            </Button>
            <Button variant="soft" onClick={() => toast.info("3 items synced")}>Info</Button>
          </>
        ),
      },
    ],
  },
  {
    slug: "loaders",
    title: "Loader",
    description: "Spinners in several styles and sizes.",
    examples: [
      {
        title: "Variants",
        code: `<Loader />
<Loader variant="dots-roll" />
<Loader variant="pulse" size="lg" />`,
        render: () => (
          <>
            <Loader />
            <Loader variant="dots-roll" />
            <Loader variant="pulse" size="lg" />
          </>
        ),
      },
    ],
  },
  {
    slug: "dividers",
    title: "Divider",
    description: "Horizontal / vertical rules, optionally labelled.",
    examples: [
      {
        title: "With a label",
        code: `<Divider>or</Divider>`,
        render: () => (
          <div className="w-full">
            <Divider>or</Divider>
          </div>
        ),
      },
    ],
  },
  {
    slug: "page-title",
    title: "PageTitle",
    description: "Visual size decoupled from heading level.",
    examples: [
      {
        title: "Title + subtitle",
        code: `<PageTitle as="h2" title="Team members"
  subtitle="Everyone with access to this workspace." />`,
        render: () => (
          <PageTitle
            as="h2"
            title="Team members"
            subtitle="Everyone with access to this workspace."
          />
        ),
      },
    ],
  },
];

/* ---------------------------------------------------- composed ui/ layer --- */

const PRODUCT_COLUMNS = [
  {
    key: "product",
    header: "Product",
    render: (row) => <EntityCell name={row.name} sub={row.sku} />,
  },
  { key: "channel", header: "Channel" },
  { key: "revenue", header: "Revenue", align: "right" },
  {
    key: "status",
    header: "Status",
    render: (row) => <StatusChip status={row.status} />,
  },
];

const composed = [
  {
    slug: "surface",
    title: "Surface",
    description: "The card primitive. Token border + radius, padding scale.",
    examples: [
      {
        title: "Padding & interactive",
        code: `<Surface>Default</Surface>
<Surface padding="lg" interactive>Interactive</Surface>`,
        render: () => (
          <>
            <Surface>Default</Surface>
            <Surface padding="lg" interactive>Interactive</Surface>
          </>
        ),
      },
    ],
  },
  {
    slug: "kpi-card",
    title: "KpiCard / StatGroup",
    description: "Headline metric with trend pill; StatGroup lays them out.",
    examples: [
      {
        title: "A group of four",
        code: `<StatGroup columns={4}>
  <KpiCard icon={DollarSign} label="Revenue" value="$486,200" delta={12.4} />
  <KpiCard icon={Users} label="Users" value="84,200" delta={8.1} />
  {/* … */}
</StatGroup>`,
        render: () => (
          <div className="w-full">
            <StatGroup columns={2}>
              <KpiCard label="Revenue" value="$486,200" delta={12.4} hint="30 days" />
              <KpiCard label="Avg. order" value="$68.40" delta={2.1} deltaDirection="down" hint="30 days" />
            </StatGroup>
          </div>
        ),
      },
    ],
  },
  {
    slug: "trend-chip",
    title: "TrendChip",
    description: "Signed percentage pill; `direction` overrides the sign.",
    examples: [
      {
        title: "Up / down",
        code: `<TrendChip value={12.4} />
<TrendChip value={2.1} direction="down" />`,
        render: () => (
          <>
            <TrendChip value={12.4} />
            <TrendChip value={2.1} direction="down" />
          </>
        ),
      },
    ],
  },
  {
    slug: "status-chip",
    title: "StatusChip",
    description: "Maps a status string to a semantic colour dot.",
    examples: [
      {
        title: "Statuses",
        code: `<StatusChip status="In stock" />
<StatusChip status="Low stock" />
<StatusChip status="Out of stock" />`,
        render: () => (
          <>
            <StatusChip status="In stock" />
            <StatusChip status="Low stock" />
            <StatusChip status="Out of stock" />
          </>
        ),
      },
    ],
  },
  {
    slug: "entity-cell",
    title: "EntityCell",
    description: "Avatar + primary + muted secondary — a reusable cell.",
    examples: [
      {
        title: "Name + sub",
        code: `<EntityCell name="Nimbus Wireless Headset" sub="SKU-2281" />`,
        render: () => (
          <EntityCell name="Nimbus Wireless Headset" sub="SKU-2281" />
        ),
      },
    ],
  },
  {
    slug: "key-value-list",
    title: "KeyValueList",
    description: "Definition list for detail panels — one- or two-column.",
    examples: [
      {
        title: "Two columns",
        code: `<KeyValueList columns={2} items={[
  { label: "Full name", value: "Amara Bello" },
  { label: "Email", value: "amara.bello@acme.io" },
  { label: "Role", value: <Chip size="sm">Owner</Chip> },
  { label: "2FA", value: "Enabled" },
]} />`,
        render: () => (
          <div className="w-full">
            <Surface>
              <KeyValueList
                columns={2}
                items={[
                  { label: "Full name", value: "Amara Bello" },
                  { label: "Email", value: "amara.bello@acme.io" },
                  { label: "Department", value: "Product" },
                  {
                    label: "Role",
                    value: (
                      <Chip size="sm" variant="soft" color="primary">
                        Owner
                      </Chip>
                    ),
                  },
                  { label: "Location", value: "San Francisco, CA" },
                  { label: "2FA", value: "Enabled" },
                ]}
              />
            </Surface>
          </div>
        ),
      },
      {
        title: "One column",
        code: `<KeyValueList items={[
  { label: "Plan", value: "Team" },
  { label: "Seats", value: "24 of 30" },
  { label: "Renews", value: "Jan 5, 2027" },
]} />`,
        render: () => (
          <div className="w-full max-w-sm">
            <Surface>
              <KeyValueList
                items={[
                  { label: "Plan", value: "Team" },
                  { label: "Seats", value: "24 of 30" },
                  { label: "Renews", value: "Jan 5, 2027" },
                ]}
              />
            </Surface>
          </div>
        ),
      },
    ],
  },
  {
    slug: "chart-card",
    title: "ChartCard",
    description: "oks-ui Tabs series switcher over an oks-ui area Chart.",
    examples: [
      {
        title: "Revenue / Orders",
        code: `<ChartCard title="Revenue overview" headline="$486,200" delta={18.2}
  views={[
    { key: "revenue", label: "Revenue", data, x: "month", series: "revenue" },
    { key: "orders", label: "Orders", data, x: "month", series: "orders" },
  ]} />`,
        render: () => (
          <div className="w-full">
            <ChartCard
              title="Revenue overview"
              headline="$486,200"
              delta={18.2}
              deltaLabel="vs. last year"
              height={220}
              views={[
                { key: "revenue", label: "Revenue", data: REVENUE_SERIES, x: "month", series: "revenue", dataFormat: { prefix: "$", format: "compact" } },
                { key: "orders", label: "Orders", data: REVENUE_SERIES, x: "month", series: "orders", dataFormat: { format: "compact" } },
              ]}
            />
          </div>
        ),
      },
    ],
  },
  {
    slug: "donut-stat",
    title: "DonutStat",
    description: "oks-ui donut Chart with a centre total and a percentage legend.",
    examples: [
      {
        title: "Traffic sources",
        code: `<DonutStat title="Traffic sources" data={sources}
  categoryKey="source" valueKey="visits"
  centerValue="84.2k" centerLabel="Total visits" />`,
        render: () => (
          <div className="w-full">
            <DonutStat
              title="Traffic sources"
              data={TRAFFIC_SOURCES}
              categoryKey="source"
              valueKey="visits"
              centerValue="84.2k"
              centerLabel="Total visits"
            />
          </div>
        ),
      },
    ],
  },
  {
    slug: "meter-list",
    title: "MeterList",
    description:
      "Labelled meters. `scaleToMax` + `showDropOff` makes a conversion funnel.",
    examples: [
      {
        title: "Device split & funnel",
        code: `<MeterList title="Sessions by device" items={devices} />
<MeterList title="Conversion funnel" items={funnel} scaleToMax showDropOff />`,
        render: () => (
          <div className="grid w-full gap-4 sm:grid-cols-2">
            <MeterList title="Sessions by device" items={DEVICE_SESSIONS} />
            <MeterList title="Conversion funnel" items={FUNNEL} scaleToMax showDropOff />
          </div>
        ),
      },
    ],
  },
  {
    slug: "goal-card",
    title: "GoalCard",
    description: "Radial SVG gauge with target / current breakdown.",
    examples: [
      {
        title: "Monthly target",
        code: `<GoalCard title="Monthly target" percent={78}
  current="$98.4k" target="$126k" note="You're ahead of schedule" />`,
        render: () => (
          <div className="w-full max-w-xs">
            <GoalCard title="Monthly target" {...MONTHLY_TARGET} />
          </div>
        ),
      },
    ],
  },
  {
    slug: "data-table",
    title: "DataTable",
    description: "Column config with per-cell renderers.",
    examples: [
      {
        title: "Products",
        code: `<DataTable columns={columns} rows={rows} getRowKey={(r) => r.sku} />`,
        render: () => (
          <div className="w-full">
            <Surface padding="none" className="overflow-hidden">
              <DataTable
                columns={PRODUCT_COLUMNS}
                rows={TOP_PRODUCTS.slice(0, 3)}
                getRowKey={(row) => row.sku}
              />
            </Surface>
          </div>
        ),
      },
    ],
  },
  {
    slug: "activity-feed",
    title: "ActivityFeed",
    description: "Events list with actor avatar, text, and relative time.",
    examples: [
      {
        title: "Recent activity",
        code: `<ActivityFeed items={activity} />`,
        render: () => (
          <div className="w-full">
            <Surface padding="none" className="overflow-hidden">
              <ActivityFeed items={ACTIVITY.slice(0, 3)} />
            </Surface>
          </div>
        ),
      },
    ],
  },
  {
    slug: "timeline",
    title: "Timeline",
    description: "Dot-marker list with a connecting rail; per-item date + tag.",
    examples: [
      {
        title: "Upcoming deadlines",
        code: `<Timeline title="Deadlines" items={[
  { title: "Ship v2", meta: "Mobile app", date: "Jul 12",
    tag: { label: "2 days left", tone: "danger" }, tone: "danger" },
]} />`,
        render: () => (
          <div className="w-full">
            <Timeline
              title="Deadlines"
              items={[
                { title: "Ship onboarding v2", meta: "Mobile app", date: "Jul 12", tag: { label: "2 days left", tone: "danger" }, tone: "danger" },
                { title: "Finalize schema", meta: "Data platform", date: "Jul 14", tag: { label: "4 days left", tone: "warning" }, tone: "warning" },
                { title: "QA pass", meta: "Checkout", date: "Jul 18", tag: { label: "8 days left", tone: "primary" }, tone: "primary" },
              ]}
            />
          </div>
        ),
      },
    ],
  },
  {
    slug: "cohort-grid",
    title: "CohortGrid",
    description: "Retention heatmap — cells shaded by value via CSS color-mix.",
    examples: [
      {
        title: "Retention by month",
        code: `<CohortGrid columns={["M0","M1","M2","M3"]} rows={[
  { label: "Feb", values: [100, 88, 81, 76] },
]} />`,
        render: () => (
          <div className="w-full">
            <CohortGrid
              title="Cohort retention"
              columns={["M0", "M1", "M2", "M3", "M4"]}
              rows={[
                { label: "Feb 2026", values: [100, 88, 81, 76, 72] },
                { label: "Mar 2026", values: [100, 91, 84, 79, null] },
                { label: "Apr 2026", values: [100, 90, 85, null, null] },
              ]}
            />
          </div>
        ),
      },
    ],
  },
  {
    slug: "board-view",
    title: "BoardView",
    description:
      "Horizontal kanban columns with count badges and a card render prop.",
    examples: [
      {
        title: "Three columns",
        code: `<BoardView
  columns={[
    { id: "todo", title: "To do", accent: "info", items: [/* … */] },
    { id: "doing", title: "In progress", accent: "primary", items: [/* … */] },
    { id: "done", title: "Done", accent: "success", items: [/* … */] },
  ]}
  renderCard={(t) => (
    <>
      <p>{t.title}</p>
      <Chip size="sm" variant="bordered">{t.tag}</Chip>
    </>
  )}
/>`,
        render: () => (
          <div className="w-full">
            <BoardView
              columns={[
                {
                  id: "todo",
                  title: "To do",
                  accent: "info",
                  items: [
                    { id: "T-1", title: "Draft the notifications spec", tag: "product" },
                    { id: "T-2", title: "Audit colour contrast", tag: "a11y" },
                  ],
                },
                {
                  id: "doing",
                  title: "In progress",
                  accent: "primary",
                  items: [{ id: "T-3", title: "New review + confirm step", tag: "design" }],
                },
                {
                  id: "done",
                  title: "Done",
                  accent: "success",
                  items: [{ id: "T-4", title: "Sprint 24 retro", tag: "ops" }],
                },
              ]}
              renderCard={(t) => (
                <>
                  <p className="text-sm font-medium text-[var(--app-fg)]">{t.title}</p>
                  <div className="mt-2">
                    <Chip size="sm" variant="bordered">
                      {t.tag}
                    </Chip>
                  </div>
                </>
              )}
            />
          </div>
        ),
      },
    ],
  },
  {
    slug: "stat-tile",
    title: "StatTile",
    description: "Compact in-card metric with optional meter + trend.",
    examples: [
      {
        title: "In a grid",
        code: `<StatTile value="284" label="Calls made" delta={12} />
<StatTile value="1.8%" label="Logo churn" sub="42 accounts" meter={18} tone="warning" />`,
        render: () => (
          <div className="grid w-full grid-cols-2 gap-3">
            <StatTile value="284" label="Calls made" delta={12} />
            <StatTile value="1.8%" label="Logo churn" sub="42 accounts" meter={18} tone="warning" />
          </div>
        ),
      },
    ],
  },
  {
    slug: "rank-list",
    title: "RankList",
    description: "Numbered leaderboard — avatar, value, optional % bar.",
    examples: [
      {
        title: "Top sales reps",
        code: `<RankList title="Top reps" items={[
  { name: "Maya Chen", value: "$284k", sub: "24 deals", percent: 96 },
]} />`,
        render: () => (
          <div className="w-full">
            <RankList
              title="Top reps"
              items={[
                { name: "Maya Chen", value: "$284k", sub: "24 deals · 96% of target", percent: 96 },
                { name: "Daniel Ortiz", value: "$246k", sub: "21 deals · 84% of target", percent: 84 },
                { name: "Priya Nair", value: "$198k", sub: "18 deals · 71% of target", percent: 71 },
              ]}
            />
          </div>
        ),
      },
    ],
  },
  {
    slug: "empty-state",
    title: "EmptyState",
    description: "Icon + message + optional action for empty lists.",
    examples: [
      {
        title: "No results",
        code: `<EmptyState title="No matches"
  description="Try a different search."
  action={<Button size="sm" variant="soft" color="primary">Clear filters</Button>} />`,
        render: () => (
          <div className="w-full">
            <Surface padding="none" className="overflow-hidden">
              <EmptyState
                title="No matches"
                description="Try a different search term or clear the filters."
                action={
                  <Button size="sm" variant="soft" color="primary">
                    Clear filters
                  </Button>
                }
              />
            </Surface>
          </div>
        ),
      },
    ],
  },
];

export const GALLERY = [
  { group: "oks-ui components", items: oksUi },
  { group: "Composed (src/Components/ui)", items: composed },
];

export const GALLERY_INDEX = Object.fromEntries(
  GALLERY.flatMap((g) => g.items).map((entry) => [entry.slug, entry])
);
