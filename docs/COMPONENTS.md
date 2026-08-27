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

Location: `src/Components/ui/`. Each component is prop‑driven and themed via the
`--app-*` / `--oks-*` tokens (see [`THEMING.md`](THEMING.md)). Route map:
[`PAGES.md`](PAGES.md).

Legend: **✅ built** · 🔨 next · ⬜ planned

---

## 1. Foundation (fills the primitive gaps)

| Component | Purpose | Built from | Status |
| --- | --- | --- | --- |
| `Surface` | The Card `oks-ui` doesn't have. Token border + radius, padding scale, `interactive` hover. Everything below sits in one. | `div` + `--app-*` tokens | ✅ |
| `CardHeader` | Title row inside a `Surface`: heading, subtitle, right‑aligned actions slot. | `PageTitle` + actions children | ✅ |
| `SectionTitle` | Page‑level heading + subtitle + actions cluster. | `PageTitle` | ✅ |
| `Stat` | A single value + label + optional hint. | `div` + tokens | ✅ |
| `UpgradeCard` | Sidebar promo block. | `Surface` + `Button` | ✅ |

## 2. Metrics & KPIs  · _Vela: top 4 cards, "Monthly target", "Sessions by device"_

| Component | Purpose | Built from | Status |
| --- | --- | --- | --- |
| `KpiCard` | Headline metric: value, label, hint, `TrendChip`, leading icon. Sparkline slot 🔨. | `Surface` + `Stat` + `TrendChip` | ✅ |
| `TrendChip` | `↗ 12.4%` / `↘ 2.1%` pill, green / red by direction. | `Chip` (`color` success/danger, `startContent` arrow) | ✅ |
| `StatGroup` | Responsive grid of `KpiCard`s (2 / 3 / 4 col). | CSS grid | ✅ |
| `StatTile` | Compact metric (no Surface) for grids inside a card. | `TrendChip` | ✅ |
| `RankList` | Numbered leaderboard — avatar, value, "% of target" bar. | `Surface` + `Avatar` | ✅ |
| `MeterList` | Card of labelled meters; `scaleToMax` + `showDropOff` makes a conversion funnel. | `Surface` + `CardHeader` + bars | ✅ |
| `GoalCard` | Radial gauge — "78% · $98.4k of $126k · ahead of schedule". | `Surface` + SVG ring + `Chip` | ✅ |
| `MiniChart` | Inline sparkline, no axes/legend. | `Chart` `type="area"` minimal | 🔨 |

## 3. Charts  · _Vela: "Revenue overview", "Traffic sources", "Conversion funnel"_

| Component | Purpose | Built from | Status |
| --- | --- | --- | --- |
| `ChartCard` | Chart block: headline value + delta, series toggle, chart body. | `Surface` + `Tabs` + `Chart` | ✅ |
| `DonutStat` | Donut with centre total + labelled percentage legend. | `Surface` + `Chart` `type="donut"` + legend | ✅ |
| `BarCompareCard` | Grouped/stacked column chart with legend. | `ChartCard` + `Chart` `type="column"` | ⬜ |

## 4. Data display  · _Vela: "Top performing products", "Recent activity"_

| Component | Purpose | Built from | Status |
| --- | --- | --- | --- |
| `DataTable` | Column config + per‑cell renderers. Sorting / selection / pagination next. | `table` + `--app-*` tokens | ✅ (basic) |
| `TableToolbar` | Search + filter chips + column/sort menu above a table. | `SearchInput` + `Chip` + `SelectField` + `Button` | ⬜ |
| `Pagination` | Page controls. | `ButtonGroup` + `Button` `isIconOnly` | ⬜ |
| `StatusChip` | Status → colour map (In stock / Low stock / Out of stock…). | `Chip` `variant="dot"` | ✅ |
| `EntityCell` | Avatar + primary text + muted secondary. | `Avatar` + text | ✅ |
| `ActivityFeed` | Events list with actor avatar, text, relative time. | `Avatar` + `--app-*` tokens | ✅ (filter 🔨) |
| `Timeline` | Vertical list with dot markers + connecting rail; per-item date + tag. | `Surface` + markers | ✅ |
| `CohortGrid` | Retention heatmap — cells shaded by value. | `Surface` + `table` + `color-mix` | ✅ |
| `KeyValueList` | Definition list for detail panels. | `Divider` + rows | ⬜ |

## 5. Shell & navigation  · _Vela: sidebar, top bar, breadcrumbs_

| Component | Purpose | Built from | Status |
| --- | --- | --- | --- |
| `Header` | Sidebar toggles, search, theme switch, notifications, account menu. | `Button` `isIconOnly` + `TextField` + `Badge` + `Dropdown` + `Avatar` + `Divider` + `Tooltip` | ✅ |
| `Footer` | Copyright, legal links, version. | `Divider` + `Button` `variant="link"` + `Chip` | ✅ |
| `Sidebar` | Full Vela tree, collapsible groups, active state, mini (icon) mode, promo card. Data in `src/data/nav.js`. | `NavLink` + `lucide` icons + CSS accordion + `UpgradeCard` | ✅ (mini-mode flyouts 🔨) |
| `Breadcrumbs` | Path trail. | `Button` `variant="link"` + separator | 🔨 |
| `PageHeader` | Greeting/title + subtitle + actions (date range, export, add). | `PageTitle` + `Button` + `Dropdown` + `Tabs` | 🔨 |
| `CommandMenu` (⌘K) | "Search anything" palette. | `Modal` + `TextField` + result list + keyboard | ⬜ |
| `DateRangeMenu` | "Last 30 days" preset picker. | `Dropdown` + `DatePickerField` | ⬜ |

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
