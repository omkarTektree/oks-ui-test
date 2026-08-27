# Component catalogue & build plan

## How the UI is layered

The project is **not** "all oks-ui", a fork of oks-ui, or a merge into oks-ui.
It's two layers with one shared token system:

**Layer 1 — `oks-ui` primitives, used directly and unmodified.**
`Button` `ButtonGroup` `Alert` `Toast` `Loader` `Modal` `Tabs` `Drawer`
`Dropdown` `Badge` `Avatar` `AvatarGroup` `Chip` `Tooltip`
`Chart` (line/area/bar/column/pie/donut) `Divider` `Backdrop` `PageTitle`
`Switch` `Checkbox` `SteppedForm` `TextEditor` and the full `Form` / field set.
The **only** customization is CSS variables in `src/styles/theme.css` — no
component copies, no overrides, no patches.

**Layer 2 — a thin composition layer (`src/Components/ui/`, ~29 components)**
that fills the widgets `oks-ui` deliberately doesn't ship: Card, Table,
Progress, Pagination, Breadcrumbs, Skeleton, Nav/Sidebar, KPI/chart cards, etc.
Within this layer:
- **~16 are assembled from `oks-ui` primitives** — e.g. `DataTable` = `<table>` +
  `Checkbox` + `Pagination`; `ChartCard` = `Tabs` + `Chart`; `TrendChip` /
  `StatusChip` = `Chip`; `FormCard` = `Form`; `CardHeader` / `SectionTitle` =
  `PageTitle`.
- **~13 are pure structural CSS + design tokens**, no `oks-ui` import — `Surface`
  (a styled `div`), `BoardView`, `Timeline`, `CohortGrid`, `MeterList`,
  `KeyValueList`, `StatGroup`, the messaging / calendar page layouts. (Several of
  these still nest Layer-2 composites, so they touch `oks-ui` transitively.)

Every entry below reads as **"Built from"** — that column is the point of the
whole repo: it shows people *how* to assemble `oks-ui` into real UI.

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
| `DataTable` | Column config + per‑cell renderers, opt‑in sorting / row selection / pagination / loading skeleton / empty state. | `table` + `Checkbox` + `Pagination` | ✅ |
| `TableToolbar` | Search + toggleable filter chips + right‑aligned actions. | `SearchInput` + `Chip` | ✅ |
| `Pagination` | Page controls with range summary. | `Button` `isIconOnly` | ✅ |
| `SearchInput` | `TextField` preset with a search icon. | `TextField` `startIcon` | ✅ |
| `StatusChip` | Status → colour map (In stock / Low stock / Out of stock…). | `Chip` `variant="dot"` | ✅ |
| `EntityCell` | Avatar + primary text + muted secondary. | `Avatar` + text | ✅ |
| `ActivityFeed` | Events list with actor avatar, text, relative time. | `Avatar` + `--app-*` tokens | ✅ (filter 🔨) |
| `Timeline` | Vertical list with dot markers + connecting rail; per-item date + tag. | `Surface` + markers | ✅ |
| `CohortGrid` | Retention heatmap — cells shaded by value. | `Surface` + `table` + `color-mix` | ✅ |
| `BoardView` | Horizontal kanban columns with count badges + card render prop. Powers Task Manager and the projects boards. | `div` columns + `--app-*` tokens | ✅ |
| `KeyValueList` | Definition list for detail panels (1- or 2-col). | `dl` + `--app-*` tokens | ✅ |

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
| `FormCard` | `Surface` wrapping a titled `Form` with a footer action row. | `Surface` + `Form` | ✅ |
| `SettingRow` | Label + description on the left, a control on the right. | `div` + tokens | ✅ |
| `SettingsSection` | Group of `SettingRow`s under a heading in a `Surface`. | `Surface` + `SettingRow` | ✅ |
| `EmptyState` | Icon + message + optional action. | icon + tokens | ✅ |

---

## Pages to build  (after `SidebarNav` is settled)

**Archetypes built:** `ListPage` (generic CRUD list — config-driven, powers ~16
routes from `src/data/lists.jsx`), the Tables & Forms demos, the 9 dashboards,
the component gallery.

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
