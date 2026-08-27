# Session handoff — continue here

Last updated after commit **`c3762be`**. Read this + [`PAGES.md`](PAGES.md) +
[`COMPONENTS.md`](COMPONENTS.md) + [`THEMING.md`](THEMING.md), then keep going.

---

## What this project is

A promotional showcase for **`oks-ui`** (a CSS-variable React component library).
Rebuild the **Vela** admin template (`https://vela.elsayedb.com`) using `oks-ui`,
and compose the widgets `oks-ui` lacks (Card, Table, charts wrappers…) into a
reusable `src/Components/ui/` layer. Every screen should be copy-pasteable into a
real app.

## Done (all committed to `main`, pushed)

| Area | State |
| --- | --- |
| **App shell** | `Header`, `Sidebar` (full ~150-item Vela nav from `src/data/nav.js`, collapsible, mini mode), `Footer` — all `oks-ui` + `--app-*` tokens |
| **Custom theme** | `src/styles/theme.css` — custom "iris" brand palette overriding `--oks-color-primary-*`, rounder radii, full dark mode via `data-theme`. `src/lib/theme.js` persists the choice. `--app-*` layer that `ui/` components read. |
| **Real avatars** | `src/lib/avatar.js` — `avatarUrl(name)` -> stable `i.pravatar.cc` photo; `oks-ui <Avatar>` falls back to initials. Wired into every avatar. |
| **9 dashboards** | Analytics, CRM, Ecommerce, Finance, Sales, Projects, Marketing, SaaS, Logistics, Business Intelligence — all at `/dashboards/*` |
| **Component gallery** | `/components` grid + `/components/:slug` — 28 entries (12 oks-ui primitives + 16 composed), live examples + copyable code. Registry: `src/data/gallery.jsx` |
| **Tables & Forms** | `/tables-forms` + 14 demo pages (5 tables, 4 forms, 5 specialised inputs). `src/Pages/InnerPages/tables-forms/` |
| **ListPage archetype** | `src/Pages/InnerPages/ListPage.jsx` — config-driven CRUD list (search, filter chips, sort, paginate, empty). Powers **16 routes** from `src/data/lists.jsx` (All Users, Roles, Teams, Departments, Activity Logs, All Projects, Product List, Orders, Customers x2, Leads, Deals, Transactions, Invoices, Employees) |
| **SettingsPage archetype** | `src/Pages/InnerPages/SettingsPage.jsx` — config-driven. Powers **15 routes** from `src/data/settings.jsx` (Settings/* and Account/*) |
| **Apps section** | `src/Pages/InnerPages/apps/*` — **10 screens** at `/apps/*`: Chat, Group Chat, Email, Calendar, File Manager, Notes, Task Manager, Help Desk, Support Tickets, Contacts. Data in `src/data/apps.js`, routes in `apps/routes.jsx`. New `BoardView` ui component (kanban). |
| **BoardPage archetype** | `src/Pages/InnerPages/BoardPage.jsx` — config-driven kanban. Powers **3 routes** from `src/data/boards.jsx` (`/projects/team-board`, `/projects/sprint-board`, `/projects/kanban-view`). |
| **FormPage archetype** | `src/Pages/InnerPages/FormPage.jsx` — config-driven create form (`FormFieldSet` grid + media/tips aside). Powers **4 routes** from `src/data/forms.jsx` (add-user, create-project, add-product, create-order). |
| **Everything else** | resolves to the themed `ComingSoon` page (catch-all in `App.jsx`) |

### `src/Components/ui/` — 28 composed components, all in the gallery

Surface, CardHeader, SectionTitle, Stat, StatTile, TrendChip, KpiCard,
StatGroup, RankList, UpgradeCard, ChartCard, DonutStat, MeterList, GoalCard,
StatusChip, EntityCell, DataTable, ActivityFeed, Timeline, CohortGrid,
Pagination, SearchInput, TableToolbar, EmptyState, FormCard, SettingRow,
SettingsSection, CodeBlock, Example.

---

## Next, in priority order

1. ~~App shells~~ — **DONE** (commit after `c3762be`). 10 screens under `/apps/*`.
2. ~~Board archetype~~ — **DONE**. `BoardPage` (`src/Pages/InnerPages/BoardPage.jsx`)
   + `BoardView` ui component, configs in `src/data/boards.jsx`, powers
   `/projects/{team-board,sprint-board,kanban-view}`.
3. ~~FormPage archetype~~ — **DONE**. `FormPage` (`src/Pages/InnerPages/FormPage.jsx`),
   pure-data configs in `src/data/forms.jsx`, powers `/user-management/add-user`,
   `/projects/create-project`, `/ecommerce/add-product`, `/ecommerce/create-order`.
   Config supports `sections[].columns`, `fields[].fullWidth`, `media`, `tips`.
4. **Detail/profile archetype** — `/user-management/my-profile`,
   `/account` overview, customer/deal detail: `Surface` + `KeyValueList`
   (build `KeyValueList`) + tabs.
5. **Remaining list routes** — extend `src/data/lists.jsx`: HR (Attendance,
   Leave Requests, Payroll, Recruitment, Job Applications), Ecommerce
   (Categories, Reviews, Inventory, Coupons, Promotions, Wishlist), Logistics
   (Shipments, Delivery Tracking, Fleet Management), CRM (Opportunities,
   Campaigns), Finance (Payments, Expenses), Marketing (Email/SMS Campaigns,
   Landing Pages, Segments), `/orders`.
6. **Charts & Analytics section** — `/charts/*`: one page per `oks-ui` Chart
   type (line/area/bar/column/pie/donut) + KPI/heatmap/revenue/user analytics.
   Reuse `ChartCard`, `CohortGrid`.
7. **Reports section** — `/reports/*`: mostly a `ListPage` of saved reports +
   a report-builder stub.
8. **Utility & Pages sections** — FAQ, Help Center, Pricing, 404, Maintenance,
   Changelog, Roadmap, Theme Customizer. Mostly static/marketing layouts.
9. **CRM Dashboard vs CRM App** — nav has `/crm/crm-dashboard` separate from
   the `/dashboards/crm` we built; point it at the same component or build a
   variant.

## How to add a page group (the established pattern)

1. Look at the Vela reference: open `https://vela.elsayedb.com/<path>` in the
   browser tool, `get_page_text` + `read_page`.
2. Mock data -> `src/data/<domain>.js(x)`.
3. Reuse `ui/` components; only build a new one if 2+ pages need it, then add it
   to `src/Components/ui/index.js` **and** `src/data/gallery.jsx` **and**
   `src/data/nav.js` Components group.
4. Page component -> `src/Pages/InnerPages/...`.
5. Route: add to a `*Routes.jsx` manifest and spread it in `App.jsx` inside the
   `<Route element={<InnerTemplate />}>` block, **and** add the path to the
   `CONFIGURED`/`REAL_INNER` exclusion so it doesn't fall through to
   `ComingSoon`.
6. `npm run lint && npm run build` — both must pass.
7. Verify in the browser (see gotchas), then commit with a `Co-Authored-By`
   trailer.

## Gotchas learned the hard way

- **Restart the dev server after a batch of edits.** Vite HMR goes stale on this
  project (deleted files, prop-shape changes) and throws phantom
  `X is not defined` / 404s that a **fresh browser tab** does not. Always verify
  in a new tab, and `preview_stop` + `preview_start` if in doubt.
- **CSS import order matters:** `src/index.css` (Tailwind) -> `oks-ui/styles.css`
  -> `src/styles/theme.css`. If `oks-ui/styles.css` loads first, component CSS
  silently doesn't apply (buttons render transparent). See `src/main.jsx`.
- **framer-motion `AnimatePresence` conditional exit is unreliable here**
  (framer 13 + React 19 + StrictMode). Use CSS transitions for
  mount/unmount (see the mobile drawer in `InnerTemplate.jsx`) or a keyed
  remount. `AnimatePresence mode="wait"` with a changing `key` is fine.
- **No emoji anywhere** — user rule. Icons only (`lucide-react`). `·` separators
  are fine. `grep -nP "[\x{1F000}-\x{1FFFF}]" src/` should stay empty.
- **`react-refresh/only-export-components`** (lint error, blocks build) fires on
  files that export both components and non-components — keep route manifests
  (`*Routes.jsx`) importing page components, never defining them, and exporting
  only the route array.
- **JSX attribute strings can't contain `\"`** — parse error. Use plain text or
  `{"..."}`.
- **Tailwind arbitrary classes lag one render in dev** after being added — a
  reload fixes it; production build is always correct.
- **`oks-ui` Dropdown works well**; the custom framer `Menu` did not (deleted).
- **Chart** (`oks-ui`): `type`, `data`, `x`, `series` (string or
  `[{key,name,color}]`), `dataFormat={{prefix,format:"compact"}}`,
  `palette={{roles:["primary"]}}` or `{colors:[…]}`, `legend={{show}}`. Multi-
  series -> array + show legend. `ChartCard` wraps all this.

- **Dev server port:** `vite.config.js` now honours `$PORT` (`strictPort`) so the
  browser-tool preview can pin a port when 5173 is taken by another session.
  `.claude/launch.json` has `"autoPort": true`.

## Verify / run

```
npm run dev        # or the browser-tool preview
npm run lint       # must pass (blocks build)
npm run build      # must pass
```
Login: `admin@example.com` / `admin123` (mock — a localStorage flag).

Dashboards render at `/dashboards/analytics` etc. `/dashboard` redirects there.
