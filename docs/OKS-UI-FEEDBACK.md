# oks-ui — feedback from building this template

Findings from rebuilding the **Vela** admin template with `oks-ui`. Entries are
written to be pasted into the `oks-ui` repo as issues with minimal editing.

Format and rules: see `docs/OKS-UI-TEMPLATE-PLAYBOOK.md` → "The oks-ui feedback
protocol".

---

## Summary

| # | Title | Severity | Category |
| --- | --- | --- | --- |
| 1 | `<Chart type="donut">` centre total has no opt-out and overlaps custom centre content | major | missing-prop |
| 2 | No Card / surface primitive | major | missing-component |
| 3 | No data Table (columns, cell renderers, sort, row-select, paginate, empty, skeleton) | blocker | missing-component |
| 4 | No Pagination component | major | missing-component |
| 5 | No Sidebar / Nav-tree component | major | missing-component |
| 6 | Changing `--oks-color-primary-500` alone doesn't restyle `soft` variants — full ramp dependency is undocumented | major | docs |
| 7 | No published map of which `--oks-*` token each component variant reads | major | dx |
| 8 | No Breadcrumbs component | minor | missing-component |
| 9 | No Skeleton / shimmer placeholder | minor | missing-component |
| 10 | No Progress bar / labelled meter | minor | missing-component |
| 11 | No Stat / KPI card | minor | missing-component |
| 12 | No EmptyState component | minor | missing-component |
| 13 | No Kanban / board layout | minor | missing-component |
| 14 | No Timeline / activity-rail component | minor | missing-component |
| 15 | No cohort / heatmap grid | nice-to-have | missing-component |
| 16 | No Gantt / timeline-bars component | nice-to-have | missing-component |
| 17 | No Command palette (⌘K) | nice-to-have | missing-component |
| 18 | `Chip` has no static tint variant; `onClick`-as-button lacks button a11y | minor | a11y |
| 19 | `Chart` `palette={{colors}}` accepting CSS-var strings for reactive theming is undocumented | minor | docs |
| 20 | `Button as={Link}` / polymorphism works but is undocumented | minor | docs |

---

## Entries

### [missing-prop] `<Chart type="donut">` centre total has no opt-out and overlaps custom centre content

- **Severity:** major
- **Category:** missing-prop (reads as a bug when you add your own centre content)
- **What I was building:** a donut stat card with a custom centre value + label
  (e.g. "84.2k · Total visits") and a percentage legend beside it.
- **What oks-ui offers today:** `<Chart type="donut">` draws its own centre total
  as `<text x="360" y="90" text-anchor="middle" dominant-baseline="middle"
  font-size="14" opacity="0.85">`. There is no prop to hide it, restyle it, or
  replace it. `pie` / `pieStyle` / `showLabels` / `tooltip.showTotal` don't touch
  it.
- **Workaround used:**
  ```jsx
  // hide the built-in number; overlay our own, grid-stacked on the chart
  <div className="grid place-items-center [&_svg_text]:hidden">
    <div className="col-start-1 row-start-1 w-full"><Chart type="donut" … /></div>
    <div className="col-start-1 row-start-1 flex flex-col items-center">
      <span className="text-lg font-semibold">{centerValue}</span>
      <span className="text-xs text-muted">{centerLabel}</span>
    </div>
  </div>
  ```
- **Proposed API:** `pie={{ centerTotal: false }}` to suppress it, and/or
  `pie={{ centerSlot: (total) => ReactNode }}` to replace it, and/or
  `classNames={{ centerText: string }}` to restyle it.
- **Seen in:** Vela template · `src/Components/ui/DonutStat.jsx` (used on ~10
  dashboard pages)

### [missing-component] No Card / surface primitive

- **Severity:** major
- **Category:** missing-component
- **What I was building:** essentially every screen — cards are the base unit of
  an admin UI.
- **What oks-ui offers today:** nothing. `Modal`, `Drawer` and `Alert` have
  surfaces but no standalone container.
- **Workaround used:** a ~30-line `Surface` — `div` with token border, radius,
  background, shadow, a `padding` scale prop and an `interactive` hover state.
- **Proposed API:** `<Surface padding="sm|md|lg|none" interactive as="div|section|…">`
  reading `--oks-color-surface`, `--oks-radius-*`, `--oks-shadow-*`.
- **Seen in:** Vela template · `src/Components/ui/Surface.jsx` (every page)

### [missing-component] No data Table

- **Severity:** blocker
- **Category:** missing-component
- **What I was building:** ~44 list/CRUD screens, every dashboard's "recent X"
  block.
- **What oks-ui offers today:** nothing table-related.
- **Workaround used:** a ~200-line `DataTable` — column config with `header`,
  `align`, `sortable`, `sortValue`, per-cell `render`; opt-in row selection
  (`oks-ui` `Checkbox`), client-side sort, client-side pagination (custom
  `Pagination`), loading skeleton rows, empty state.
- **Proposed API:** a headless-or-styled `<DataTable columns rows getRowKey
  selectable pageSize loading emptyContent onSelectionChange>` covering at least
  column config + cell renderers + sort + select + paginate + empty + skeleton.
- **Seen in:** Vela template · `src/Components/ui/DataTable.jsx` (~44 routes via
  `ListPage`)

### [missing-component] No Pagination component

- **Severity:** major
- **Category:** missing-component
- **What I was building:** paginated tables and lists.
- **What oks-ui offers today:** nothing.
- **Workaround used:** `Pagination` built from `oks-ui` `Button` `isIconOnly` +
  a "showing X–Y of Z" summary.
- **Proposed API:** `<Pagination page pageCount total pageSize onChange>` with a
  range summary and prev/next/first/last.
- **Seen in:** Vela template · `src/Components/ui/Pagination.jsx`

### [missing-component] No Sidebar / Nav-tree component

- **Severity:** major
- **Category:** missing-component
- **What I was building:** the ~150-item collapsible admin sidebar with grouped
  sections, active-route highlighting, and an icon-only "mini" mode.
- **What oks-ui offers today:** nothing navigational.
- **Workaround used:** a bespoke `Sidebar` — `NavLink` + `lucide` icons + a CSS
  accordion + a data-driven tree (`src/data/nav.js`).
- **Proposed API:** at minimum a `<NavGroup>` / `<NavItem>` set with
  controlled/uncontrolled expansion and an active state, framework-router-
  agnostic (accept a `LinkComponent` prop).
- **Seen in:** Vela template · `src/Components/Commom/Sidebar.jsx`

### [docs] Changing `--oks-color-primary-500` alone doesn't restyle `soft` variants

- **Severity:** major
- **Category:** docs (arguably an API design question)
- **What I was building:** a live theme customizer that lets the user pick a brand
  accent and see buttons, chips, cards and charts re-tint.
- **What oks-ui offers today:** components resolve tints from discrete ramp steps.
  A `soft` `<Button color="primary">` reads
  `--oks-button-tone-50 → --oks-color-primary-50` for its background and
  `--oks-button-tone-soft-fg → --oks-color-primary-700` for its text. Overriding
  only `--oks-color-primary-500/-600` (the obvious thing) leaves every soft/tint
  variant and every `-50`-based surface unchanged. The relationship isn't
  documented anywhere.
- **Workaround used:** on accent change, write the **whole** ramp
  `--oks-color-primary-50 … -950`, synthesising the missing steps from one hex
  with `color-mix(in srgb, <hex> <pct>%, white|black)`.
- **Proposed API:** either (a) document, per component, exactly which ramp steps
  each variant consumes; or (b) derive tint/shade steps *inside* the component CSS
  from `--oks-color-primary-500` via `color-mix`, so a single-variable override
  cascades everywhere; or (c) ship a documented `--oks-color-primary` base +
  generated ramp.
- **Seen in:** Vela template · `src/Pages/InnerPages/pages/ThemeCustomizer.jsx`,
  `src/Components/ui/UpgradeCard.jsx`

### [dx] No published map of which `--oks-*` token each component variant reads

- **Severity:** major
- **Category:** dx
- **What I was building:** a rebrand + a theme customizer — both need to know
  which variables to override.
- **What oks-ui offers today:** `THEMING`-style guidance exists at a high level
  (`--oks-color-primary-*`, `--oks-radius-*`, some per-component levers like
  `--oks-button-radius`), but there's no exhaustive per-component / per-variant
  token table. To find why a solid button wasn't re-tinting I had to
  `getComputedStyle()` the element and read the minified `components.css` to
  discover the `--oks-button-bg → --oks-button-tone → --oks-color-primary-500`
  chain.
- **Proposed API:** a generated `tokens.md` (or a `--oks-*` reference page) listing
  every consumed variable, its default, and which components/variants read it.
  Bonus: a TypeScript `const` union of token names.
- **Seen in:** Vela template · theming + `ThemeCustomizer`

### [missing-component] No Breadcrumbs component

- **Severity:** minor
- **Category:** missing-component
- **What oks-ui offers today:** nothing.
- **Workaround used:** hand-rolled `nav` with `ChevronRight` separators.
- **Proposed API:** `<Breadcrumbs items={[{label, href}]} />` with a
  `LinkComponent` prop and truncation.

### [missing-component] No Skeleton / shimmer placeholder

- **Severity:** minor
- **Category:** missing-component
- **What I was building:** table loading states.
- **Workaround used:** `div` + `animate-pulse` + `--app-surface-2`.
- **Proposed API:** `<Skeleton width height radius>` and a `<SkeletonText lines>`.

### [missing-component] No Progress bar / labelled meter

- **Severity:** minor
- **Category:** missing-component
- **What I was building:** capacity bars, funnels, "% of target" rows,
  budget-vs-actual.
- **Workaround used:** `MeterList` — a card of labelled bars with `scaleToMax`
  and `showDropOff` (funnel) options.
- **Proposed API:** `<Meter value max tone />` and a `<MeterList items />`.

### [missing-component] No Stat / KPI card

- **Severity:** minor
- **Category:** missing-component
- **Workaround used:** `Stat`, `StatTile`, `KpiCard` (icon + value + label + hint
  + trend pill), `StatGroup` (responsive grid).
- **Proposed API:** `<Stat value label hint icon delta deltaDirection />`.

### [missing-component] No EmptyState component

- **Severity:** minor
- **Category:** missing-component
- **Workaround used:** icon + `PageTitle` + optional `Button`.
- **Proposed API:** `<EmptyState icon title description action />`.

### [missing-component] No Kanban / board layout

- **Severity:** minor
- **Category:** missing-component
- **What I was building:** task boards, sprint boards, a CRM pipeline.
- **Workaround used:** `BoardView` — horizontal columns with count badges and a
  `renderCard` prop (presentational; no DnD).
- **Proposed API:** `<Board columns renderCard onCardMove />` with optional
  drag-and-drop.

### [missing-component] No Timeline / activity-rail component

- **Severity:** minor
- **Category:** missing-component
- **Workaround used:** `Timeline` (dot markers + connecting rail, per-item
  date/tag) and `ActivityFeed` (avatar + text + relative time).
- **Proposed API:** `<Timeline items={[{title, meta, date, tone, tag}]} />`.

### [missing-component] No cohort / heatmap grid

- **Severity:** nice-to-have
- **Category:** missing-component
- **Workaround used:** `CohortGrid` — `table` with cells shaded by value via
  `color-mix(in srgb, var(--oks-color-primary-500) <n>%, var(--app-surface))`.
- **Proposed API:** `<Heatmap columns rows valueRange colorScale />`.

### [missing-component] No Gantt / timeline-bars component

- **Severity:** nice-to-have
- **Category:** missing-component
- **Workaround used:** `GanttView` — a date-scaled positioned-bar chart (`left` /
  `width` as `%` of a `[start, end]` window).
- **Proposed API:** `<Gantt start end rows={[{label, bars:[{from,to,tone}]}]} />`.

### [missing-component] No Command palette (⌘K)

- **Severity:** nice-to-have
- **Category:** missing-component
- **What I was building:** the header "Search anything…" affordance (left as a
  plain input).
- **Proposed API:** `<CommandMenu>` — `Modal` + filtered result list + keyboard
  nav + a `useCommandMenu()` hook for the hotkey.

### [a11y] `Chip` used as a clickable filter has no button semantics

- **Severity:** minor
- **Category:** a11y
- **What I was building:** filter-chip rows (click a chip to toggle a filter).
- **What oks-ui offers today:** `Chip` supports `onClick` (spreads
  `HTMLAttributes`) and `selected` + `onSelectedChange`. `onClick` renders a
  `div` with no `role`, `tabindex`, or key handling; `selected`/`onSelectedChange`
  implies checkbox/toggle semantics, not button.
- **Workaround used:** `onClick` on the `Chip` + accepting the a11y gap for the
  showcase.
- **Proposed API:** a `<Chip as="button">` / `interactive` mode that adds
  `role="button"`, `tabindex="0"` and Enter/Space handling, distinct from the
  `selected` toggle mode.
- **Seen in:** Vela template · `SupportTickets`, `Contacts`, `ProductGrid`,
  `CustomBuilder`

### [docs] `Chart` `palette={{colors}}` with CSS-var strings for reactive theming is undocumented

- **Severity:** minor
- **Category:** docs
- **What I was building:** a donut whose segments re-tint when the theme changes.
- **What oks-ui offers today:** passing
  `palette={{ colors: ["var(--oks-color-primary-600)", …] }}` works — the strings
  land in the SVG `fill` and update live on a CSS-var change. But the examples all
  use hex, so it's not obvious this is supported.
- **Proposed API:** document it; or add a `palette={{ roles: ["primary"],
  monochrome: true }}` that generates a same-hue ramp.
- **Seen in:** Vela template · `src/Components/ui/DonutStat.jsx`

### [docs] `Button as={Link}` / polymorphism works but is undocumented

- **Severity:** minor
- **Category:** docs
- **What I was building:** buttons that navigate (`<Button as={Link} to="…">`).
- **What oks-ui offers today:** `Button` forwards unknown props and honours `as`,
  so `as={Link}` / `as="a"` works. Not in the docs; the `ButtonProps` type doesn't
  make it obvious.
- **Proposed API:** document the `as` prop on `Button` (and any other component
  that supports it) with a router-link example.
