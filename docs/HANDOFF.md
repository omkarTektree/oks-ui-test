# Session handoff — continue here

Last updated after commit **`1624beb`**. Read this + [`PAGES.md`](PAGES.md) +
[`COMPONENTS.md`](COMPONENTS.md) + [`THEMING.md`](THEMING.md).

**Status: every leaf in `src/data/nav.js` renders a real page.** The themed
`ComingSoon` now only appears for genuinely unknown URLs (the `path="*"`
catch-all in `App.jsx`). Further work means *new* nav entries or *deepening*
existing pages — see [Where to go next](#where-to-go-next).

---

## What this project is

A promotional showcase for **`oks-ui`** (a CSS-variable React component library).
It rebuilds the **Vela** admin template (`https://vela.elsayedb.com`) with
`oks-ui`, composing the widgets `oks-ui` lacks (Card, Table, chart wrappers…)
into a reusable `src/Components/ui/` layer. Every screen is meant to be
copy-pasteable into a real app.

**Two layers, one token system** (see [`COMPONENTS.md`](COMPONENTS.md) →
"How the UI is layered"):

- **Layer 1 — `oks-ui` primitives, used directly and unmodified.** Customized
  only through CSS variables in `src/styles/theme.css` — no forks, no overrides.
- **Layer 2 — the ~31-component `src/Components/ui/` composition layer** that
  fills `oks-ui`'s gaps. ~16 are assembled from `oks-ui` primitives, ~15 are
  pure structural CSS + tokens.

Not "all oks-ui", not a fork or a merge.

---

## Current state

| Area | Where | Notes |
| --- | --- | --- |
| **App shell** | `src/Components/Commom/{Header,Sidebar,Footer}` (dir spelled "Commom") | Full ~150-item Vela nav from `src/data/nav.js`; collapsible + mini mode |
| **Theme** | `src/styles/theme.css`, `src/lib/theme.js` | Custom "iris" palette, rounder radii, full dark mode via `data-theme`, persisted |
| **Avatars** | `src/lib/avatar.js` | `avatarUrl(name)` → stable `i.pravatar.cc` photo; `<Avatar>` falls back to initials |
| **10 dashboards** | `src/Pages/InnerPages/*Dashboard.jsx` | `/dashboards/{analytics,crm,ecommerce,finance,sales,projects,marketing,saas,logistics,business-intelligence}` |
| **Component gallery** | `/components`, `/components/:slug` — registry `src/data/gallery.jsx` | **28 entries** (12 `oks-ui` primitives + 16 composed). ⚠ `BoardView` and `KeyValueList` are built + exported but **not yet in the gallery/nav** |
| **Tables & Forms** | `src/Pages/InnerPages/tables-forms/` | `/tables-forms` + 14 demo pages |
| **Auth & system** | `src/Pages/Auth/*`, `src/Pages/{NotFound,Maintenance}.jsx` | Login/register/forgot/terms + `/404-error`, `/maintenance` (outside the shell) |

### Page archetypes (config-driven — this is how you extend the app)

| Archetype | Component | Config source | Powers |
| --- | --- | --- | --- |
| **ListPage** | `src/Pages/InnerPages/ListPage.jsx` | `LIST_CONFIGS` in `src/data/lists.jsx` | **44 routes** — User Mgmt, Projects, Finance, CRM, HR, Logistics, Ecommerce, Marketing, `/orders` |
| **SettingsPage** | `src/Pages/InnerPages/SettingsPage.jsx` | `SETTINGS_CONFIGS` in `src/data/settings.jsx` | **15 routes** — `/settings/*`, `/account/*` |
| **BoardPage** | `src/Pages/InnerPages/BoardPage.jsx` (+ `ui/BoardView`) | `BOARD_CONFIGS` in `src/data/boards.jsx` | `/projects/{team-board,sprint-board,kanban-view}` |
| **FormPage** | `src/Pages/InnerPages/FormPage.jsx` | `FORM_CONFIGS` in `src/data/forms.jsx` | add-user, create-project, add-product, create-order |
| **DetailPage** | `src/Pages/InnerPages/DetailPage.jsx` (+ `ui/KeyValueList`) | `DETAIL_CONFIGS` in `src/data/details.jsx` | `/user-management/my-profile` |
| **ReportPage** | `src/Pages/InnerPages/ReportPage.jsx` | `REPORT_CONFIGS` in `src/data/reports.jsx` | `/reports/*` (5) + `/finance/profit-and-loss` |
| **GanttView** | `src/Pages/InnerPages/projects/GanttView.jsx` | `GANTT_CONFIGS` in `src/data/gantt.js` | `/projects/{timeline,gantt-view}` |

**ListPage and ReportPage auto-wire**: add a key to `LIST_CONFIGS` /
`REPORT_CONFIGS` and the route + nav exclusion happen automatically via
`listRoutePaths` / `reportsRoutePaths`. Every other archetype needs a
`*/routes.jsx` manifest spread into `App.jsx` (see
[How to add a page](#how-to-add-a-page)).

### Bespoke page sections (not archetype-driven)

| Section | Where | Routes |
| --- | --- | --- |
| **Apps** | `src/Pages/InnerPages/apps/*` | Chat, Group Chat, Email, Calendar, File Manager, Notes, Task Manager, Help Desk, Support Tickets, Contacts |
| **Charts** | `src/Pages/InnerPages/charts/*` (data `src/data/charts.js`) | apex-charts, chart-js, statistics, kpi-analytics, heatmaps, revenue-analytics, user-analytics |
| **Analytics dashboards** | `src/Pages/InnerPages/analytics/*` | project-analytics, customer-analytics, marketing-analytics, budget-management (+ `/marketing/overview` → `MarketingDashboard`) |
| **CRM funnel views** | `src/Pages/InnerPages/crm/*` | pipeline (`BoardView`), sales-funnel, customer-journey (`Timeline`), CRM app workspace |
| **Utility & Pages** | `src/Pages/InnerPages/pages/*` (copy `src/data/content.jsx`) | FAQ, Help Center (+kb/docs variants), Pricing, Search Results, Notifications Center, Activity Feed, Changelog/Release Notes, Roadmap, Theme Customizer, Widget Gallery, UI Playground, RTL/Dark/Light Preview, Starter Kit |
| **Product grid** | `src/Pages/InnerPages/ecommerce/ProductGrid.jsx` | `/ecommerce/product-grid` |

### `src/Components/ui/` — 31 components

Barrel (`index.js`, 29): Surface, CardHeader, SectionTitle, Stat, StatTile,
TrendChip, KpiCard, StatGroup, RankList, UpgradeCard, ChartCard, DonutStat,
MeterList, GoalCard, StatusChip, EntityCell, DataTable, ActivityFeed, Timeline,
CohortGrid, **BoardView**, **KeyValueList**, Pagination, SearchInput,
TableToolbar, EmptyState, FormCard, SettingRow, SettingsSection.
Direct-import only: CodeBlock, Example.

---

## Where to go next

Nothing in `nav.js` is missing. Candidate follow-ups, roughly in order of value:

1. **Add `BoardView` + `KeyValueList` to the gallery.** They're built and
   exported but absent from `src/data/gallery.jsx` and the `nav.js` Components
   group — the only inconsistency left. Follow the pattern of the other composed
   entries (live `render` + copyable `code`).
2. **Deepen the archetypes as needed** — e.g. `DetailPage` only powers one route;
   add `DETAIL_CONFIGS` for customer / deal / employee detail and link the list
   rows to them.
3. **Real interactions** — the boards, pipeline and Gantt are presentational.
   Drag-and-drop, inline edit, and working filters/sort beyond what `DataTable`
   already does would make the showcase more convincing.
4. **`CommandMenu` (⌘K)**, `Breadcrumbs`, mini-mode sidebar flyouts — flagged
   `🔨`/`⬜` in `COMPONENTS.md` and never built.
5. **Trim mock-data quirks** — some `src/data/lists.jsx` generators pick
   `category`, `status` and `stock` independently, so a row can read
   "Out of stock · In stock". `ProductGrid` already works around this by deriving
   status from stock; the list pages don't.

---

## How to add a page

1. Look at the Vela reference: open `https://vela.elsayedb.com/<path>` in the
   browser tool, `get_page_text` + `read_page`.
2. Mock data → `src/data/<domain>.js(x)`.
3. Reuse `ui/` components; build a new one only if 2+ pages need it, then add it
   to `src/Components/ui/index.js` **and** `src/data/gallery.jsx` **and**
   `src/data/nav.js` Components group.
4. Page component → `src/Pages/InnerPages/…`.
5. Route: add to a `*Routes.jsx` manifest and spread it in `App.jsx` inside the
   `<Route element={<InnerTemplate />}>` block, **and** add the path(s) to the
   `CONFIGURED` / `REAL_INNER` set so it doesn't fall through to `ComingSoon`.
   (`LIST_CONFIGS` / `REPORT_CONFIGS` keys skip this — they're auto-wired.)
6. `npm run lint && npm run build` — both must pass.
7. Verify in the browser (see gotchas), then commit with a `Co-Authored-By`
   trailer.

---

## Gotchas learned the hard way

- **Restart the dev server after a batch of edits.** Vite HMR goes stale on this
  project (deleted files, prop-shape changes) and throws phantom
  `X is not defined` / 404s that a **fresh browser tab** does not. Always verify
  in a new tab; `preview_stop` + `preview_start` if in doubt.
- **CSS import order matters:** `src/index.css` (Tailwind) → `oks-ui/styles.css`
  → `src/styles/theme.css`. If `oks-ui/styles.css` loads first, component CSS
  silently doesn't apply (buttons render transparent). See `src/main.jsx`.
- **No side effects inside a `setState` updater.** React StrictMode double-invokes
  the updater in dev, so `setX(v => { document.…setAttribute(...); return !v })`
  fires the effect twice and cancels out. Compute `next` outside, then
  `setX(next)` and do the side effect. (Hit this in `RtlDarkLightPreview`.)
- **framer-motion `AnimatePresence` conditional exit is unreliable here**
  (framer 13 + React 19 + StrictMode). Use CSS transitions for mount/unmount
  (see the mobile drawer in `InnerTemplate.jsx`) or a keyed remount.
  `AnimatePresence mode="wait"` with a changing `key` is fine.
- **No emoji anywhere** — user rule. Icons only (`lucide-react`); `·` separators
  are fine. `grep -nP "[\x{1F000}-\x{1FFFF}]" src/` should stay empty.
- **`react-refresh/only-export-components`** (lint error, blocks build) fires on
  files that export both components and non-components. Route manifests
  (`*Routes.jsx`) must import page components, never define them, and export only
  the route array — or carry the `/* eslint-disable */` header the existing
  manifests use. Data files with JSX (`lists.jsx`, `reports.jsx`) are fine as
  long as they don't *define* a named component.
- **JSX attribute strings can't contain `\"`** — parse error. Use plain text or
  `{'…"…"…'}`.
- **`oks-ui` `Chip`**: variants are `solid | soft | bordered | dot` (no `flat`).
  `onClick` works (it spreads `HTMLAttributes`), as does `selected` +
  `onSelectedChange`.
- **`DonutStat`'s `centerValue` should equal the data total** — `oks-ui`'s donut
  renders its own centre number under the overlay; matching values hides the seam.
- **`Chart`** (`oks-ui`): `type`, `data`, `x`, `series` (string or
  `[{key,name,color}]`), `dataFormat={{prefix,format:"compact"}}`,
  `palette={{roles:["primary"]}}` or `{colors:[…]}`, `legend={{show}}`,
  `column={{stacked:true}}`. Multi-series → array + show legend. `ChartCard`
  wraps most of this.
- **Dev server port:** `vite.config.js` honours `$PORT` (`strictPort`) so the
  browser-tool preview can pin a port when 5173 is taken by another session.
  `.claude/launch.json` has `"autoPort": true`.

---

## Verify / run

```
npm run dev        # or the browser-tool preview
npm run lint       # must pass (blocks the build in CI intent)
npm run build      # must pass
```

Login: `admin@example.com` / `admin123` (mock — a `localStorage` flag;
`localStorage.setItem('oks_is_authenticated','true')` skips the form).
`/dashboard` redirects to `/dashboards/analytics`.
