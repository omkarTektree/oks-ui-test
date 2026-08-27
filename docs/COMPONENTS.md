# Component catalogue & build plan

Every entry is a **composed component** we build from `oks-ui` primitives and
reuse across pages. The "Built from" column is the point of the whole repo —
it shows people *how* to assemble `oks-ui` into real UI.

Primitives `oks-ui` gives us: `Button` `ButtonGroup` `Alert` `Toast` `Loader`
`Modal` `Tabs` `Drawer` `Dropdown` `Badge` `Avatar` `AvatarGroup` `Chip`
`Tooltip` `Chart` (line/area/bar/column/pie/donut) `Divider` `Backdrop`
`PageTitle` and the full `Form` / field set. It does **not** ship: Card, Table,
Progress, Pagination, Breadcrumbs, Skeleton, Nav/Sidebar — those are the gaps we
fill.

Location: `src/Components/ui/`. Each component is prop‑driven, themed via
`--oks-*` tokens, and documented with a short usage snippet in its own file.

---

## 1. Foundation (fills the primitive gaps)

| Component | Purpose | Built from |
| --- | --- | --- |
| `Surface` | The Card `oks-ui` doesn't have. `bg`, token border + radius, padding scale, `variant` = plain / bordered / elevated. Everything below sits in one. | `div` + `--oks-*` tokens |
| `CardHeader` | Title row inside a `Surface`: heading, optional subtitle, right‑aligned actions slot. | `PageTitle` + actions children |
| `SectionTitle` | Page‑ and block‑level headings. | `PageTitle` |
| `Stat` | A single number + label + optional `TrendChip`, used standalone or inside cards. | `Chip` |

## 2. Metrics & KPIs  · _Vela: top 4 cards, "Monthly target", "Sessions by device"_

| Component | Purpose | Built from |
| --- | --- | --- |
| `KpiCard` | Headline metric: big animated value, label, `TrendChip`, leading icon, optional sparkline. | `Surface` + `Chip` + `Tooltip` + `MiniChart` |
| `TrendChip` | `↗ 12.4%` / `↘ 2.1%` pill, green / red by direction. | `Chip` (`color` success/danger, `startContent` arrow) |
| `StatGroup` | Responsive row/grid of `KpiCard`s. | CSS grid + `KpiCard` |
| `ProgressStat` | Label + value + horizontal bar (e.g. Desktop 58%). | `div` bar + `--oks-*` + `Tooltip` |
| `GoalCard` | Radial gauge — "78% · $98.4k of $126k · ahead of schedule". | `Surface` + SVG ring + `Chip` + `Divider` |
| `MiniChart` | Inline sparkline, no axes/legend. | `Chart` `type="area"` minimal |

## 3. Charts  · _Vela: "Revenue overview", "Traffic sources", "Conversion funnel"_

| Component | Purpose | Built from |
| --- | --- | --- |
| `ChartCard` | Full chart block: headline value + delta, series toggle, chart body, footer note. | `Surface` + `CardHeader` + `Tabs` + `Chart` |
| `DonutStat` | Donut with centre total + labelled legend list with %. | `Chart` `type="donut"` + legend rows |
| `FunnelChart` | Stacked descending bars with counts + drop‑off %. | `Surface` + bars (`div`) + `Tooltip` |
| `BarCompareCard` | Grouped/stacked column chart with legend. | `ChartCard` + `Chart` `type="column"` |
| `ChartLegend` | Shared clickable legend (toggle series). | `Chip` (toggle) or `Tabs` |

## 4. Data display  · _Vela: "Top performing products", "Recent activity"_

| Component | Purpose | Built from |
| --- | --- | --- |
| `DataTable` | Sortable headers, selectable rows, per‑cell renderers, empty / loading states, pagination. The flagship composite. | `table` + `Checkbox` + `Chip` + `Dropdown` (row actions) + `Avatar` + `Pagination` + `EmptyState` + `Loader` |
| `TableToolbar` | Search + filter chips + column/sort menu above a table. | `SearchInput` + `Chip` (filters) + `SelectField` + `Button` |
| `Pagination` | Page controls. | `ButtonGroup` + `Button` `isIconOnly` |
| `StatusChip` | Status → colour map (In stock / Low stock / Out of stock, Active / Paused…). | `Chip` `variant="dot"` |
| `EntityCell` | Avatar + primary text + muted secondary (name / SKU, user / email). | `Avatar` + text |
| `ActivityFeed` | Timeline of events with actor avatar, text, relative time, filter. | `Avatar` + `Divider` + `Chip`/`Tabs` filter |
| `Timeline` | Vertical step list with dot markers. | `Divider` + markers + content |
| `KeyValueList` | Definition list for detail panels. | `Divider` + rows |
| `DescriptionCard` | `Surface` wrapping a `KeyValueList`. | `Surface` + `KeyValueList` |

## 5. Shell & navigation  · _Vela: sidebar, top bar, breadcrumbs_

| Component | Purpose | Built from | Status |
| --- | --- | --- | --- |
| `AppHeader` | Sidebar toggles, search, theme switch, notifications, account menu. | `Button` `isIconOnly` + `TextField` + `Badge` + `Dropdown` + `Avatar` + `Divider` + `Tooltip` | **building now** |
| `AppFooter` | Copyright, legal links, version. | `Divider` + `Button` `variant="link"` + `Chip` | **building now** |
| `SidebarNav` | Collapsible groups, active state, mini (icon) mode, count badges, promo card. | `Button` (`variant="ghost"`, `as={NavLink}`) + `Divider` + `Tooltip` + `Chip` | **needs discussion** |
| `Breadcrumbs` | Path trail. | `Button` `variant="link"` + separator | planned |
| `PageHeader` | Greeting/title + subtitle + actions (date range, export, add). | `PageTitle` + `Button` + `Dropdown` + `Tabs` | planned |
| `CommandMenu` (⌘K) | "Search anything" palette. | `Modal` + `TextField` + result list + keyboard | planned |
| `UpgradeCard` | Sidebar promo. | `Surface` + `PageTitle` + `Button` | planned |
| `DateRangeMenu` | "Last 30 days" preset picker. | `Dropdown` + `DatePickerField` | planned |

## 6. Feedback & states

| Component | Purpose | Built from |
| --- | --- | --- |
| `EmptyState` | Illustration + message + primary action. | icon + `PageTitle` + `Button` |
| `ErrorState` | Inline error block with retry. | `Alert` + `Button` |
| `LoadingBlock` | Centered spinner for a card/section. | `Loader` |
| `SkeletonRows` | Placeholder rows while data loads. | `div` + `--oks-*` (shimmer) |
| `ConfirmDialog` | Destructive‑action confirmation. | `Modal` `role="alertdialog"` + `Button` actions |
| `InlineBanner` | Dismissible page‑level notice. | `Alert` `isClosable` |
| `Toaster` | Transient notifications — already wired via `ToastProvider`. | `toast` from `oks-ui` |

## 7. Forms  · _oks-ui is already strong here — showcase composition_

| Component | Purpose | Built from |
| --- | --- | --- |
| `SearchInput` | Icon + input + optional ⌘K hint. | `TextField` `startIcon` |
| `FilterBar` | Search + toggleable filter chips + selects + reset. | `SearchInput` + `Chip` (toggle) + `SelectField` + `Button` |
| `FormCard` | `Surface` wrapping a titled `Form` with a footer action row. | `Surface` + `Form` + `FormFieldSet` + `Button` |
| `SettingRow` | Label + description + control, stacked with dividers. | `SwitchField` / `SelectField` + `Divider` |
| `SettingsSection` | Group of `SettingRow`s under a heading in a `Surface`. | `Surface` + `SectionTitle` + `SettingRow` |

---

## Pages to build  (after `SidebarNav` is settled)

| Page | Shows off |
| --- | --- |
| **Analytics dashboard** | `KpiCard`, `ChartCard`, `DonutStat`, `FunnelChart`, `DataTable`, `ActivityFeed`, `GoalCard`, `ProgressStat` — the Vela clone |
| **CRM / Sales dashboard** | pipeline `FunnelChart`, `DataTable` of deals, `ActivityFeed` |
| **Ecommerce dashboard** | orders `DataTable`, revenue `ChartCard`, `StatusChip` |
| **Tables & Forms** | every `DataTable` feature; every `oks-ui` field type via `FormCard` |
| **Charts gallery** | one card per `Chart` type |
| **Settings** | `Tabs` + `SettingsSection` + `SettingRow` + `FormCard` |
| **Component gallery** | kitchen‑sink page: every `ui/` component with its snippet |
| **Auth** | done — `Form` + `FormFieldSet` + validation |

## Suggested build order

1. `Surface`, `CardHeader`, `SectionTitle`  (everything depends on these)
2. `TrendChip`, `KpiCard`, `StatGroup`, `ProgressStat`
3. `AppHeader`, `AppFooter`  ← this pass
4. `SidebarNav`  ← after discussion
5. `ChartCard`, `DonutStat`, `MiniChart`, `FunnelChart`, `GoalCard`
6. `DataTable` + `StatusChip` + `EntityCell` + `Pagination` + `TableToolbar`
7. `ActivityFeed`, `EmptyState`, `ErrorState`, `ConfirmDialog`
8. Analytics dashboard page (assembles 1–7)
9. Remaining pages
