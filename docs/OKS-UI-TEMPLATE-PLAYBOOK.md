# oks-ui Template Playbook

**You are building a promotional admin template that showcases
[`oks-ui`](https://www.npmjs.com/package/oks-ui) — a CSS-variable React component
library.** You rebuild a chosen reference admin template using `oks-ui`, and while
you do it you keep a running, issue-ready log of everything `oks-ui` is missing or
gets wrong, so its maintainers can close the gaps.

**How this file is used.** The user drops this file into a new, empty theme folder
(e.g. `Bornot/docs/OKS-UI-TEMPLATE-PLAYBOOK.md`) and prompts:

> Please read `docs/OKS-UI-TEMPLATE-PLAYBOOK.md` and create the template as
> `<reference URL>`.

Follow the steps below in order. Do not skip Step 0.

---

## The reference implementation

A complete, working example of everything this playbook asks for lives at
**`https://github.com/omkarsahu/oks-ui-test`** (branch `main`). You copy its
foundation code verbatim (Step 2) and follow its patterns. When this playbook and
that repo disagree, the repo wins — read the relevant file there.

Its own docs are worth reading as prior art: `docs/HANDOFF.md`,
`docs/COMPONENTS.md`, `docs/PAGES.md`, `docs/THEMING.md`,
`docs/OKS-UI-FEEDBACK.md`.

---

## Locked decisions (do not re-litigate these)

| Topic | Decision |
| --- | --- |
| **Scaffold** | Ask the user 2 questions (Step 0). Nothing else about the stack is negotiable. |
| **Component library** | `oks-ui` only. **Never** install or use another UI library (Radix, shadcn, MUI, Headless UI, Ant, Chakra, Mantine, react-aria, …). If `oks-ui` lacks something, compose it from `oks-ui` primitives or build it from `div` + tokens — **and log it** (see Feedback protocol). |
| **Styling** | Tailwind for **layout utilities only** (flex/grid/spacing/typography scale). All colour, radius, elevation, borders come from CSS variables (`--oks-*` / `--app-*`). No hard-coded hex in components. |
| **Icons** | `lucide-react` only. |
| **Emoji** | None, anywhere — not in UI, not in copy, not in mock data, not in commit messages. `·` separators are fine. Icons instead. |
| **Foundation** | Copied from the reference repo (Step 2), then adapted (Step 3). Do not reinvent it. |
| **Session scope** | Deliver **v1 core** (Step 5), then hand off. Do not try to build every page of a large template in one session. |
| **Feedback log** | `docs/OKS-UI-FEEDBACK.md` in the theme folder. GitHub-issue-ready entries. Append continuously. |

---

## Step 0 — Ask the user, then scaffold

Ask exactly these two questions and wait for answers:

1. **Framework:** Vite + React *(default)*, or Next.js (App Router)?
2. **Language:** TypeScript *(default)*, or JavaScript?

Then, regardless of the answers, the stack is:

- React 19
- Routing: `react-router-dom` v7 (Vite) **or** Next's file-based router (Next.js)
- Tailwind CSS v4 (utilities only), wired so its `dark:` variant follows
  `[data-theme="dark"]` (see `src/index.css` in the reference repo)
- `oks-ui` + `oks-ui/styles.css`
- `lucide-react`
- ESLint with `eslint-plugin-react-hooks` and `eslint-plugin-react-refresh`
- `npm`

Scaffold the project (`npm create vite@latest` / `create-next-app`), install the
dependencies, and get `npm run dev`, `npm run lint`, `npm run build` all green on
the bare scaffold before continuing.

**Import order matters:** `index.css` (Tailwind) → `oks-ui/styles.css` →
`src/styles/theme.css`. If `oks-ui/styles.css` loads first, component CSS silently
fails to apply. See `src/main.jsx` in the reference repo.

---

## Step 1 — Map the reference

Open the reference URL in the browser tool. Crawl its sidebar / top nav and
enumerate **every** page. For each page: `read_page` + `get_page_text` + a
screenshot. If a page is behind auth, 404s, or won't render, ask the user for a
screenshot of that specific page and move on.

Produce `docs/PAGES.md`: a table of every route, grouped by nav section, with a
one-line description of what each page contains and a status column
(`✅ built` / `🔨 next` / `⬜ planned`). This is your build backlog.

Also note the reference's **information architecture**: how many dashboards, which
list/CRUD screens, which forms, which detail screens, which one-off pages. This
tells you which archetypes you need.

---

## Step 2 — Copy the foundation from the reference repo

Fetch these files from `https://github.com/omkarsahu/oks-ui-test` (use the raw
GitHub URLs, e.g.
`https://raw.githubusercontent.com/omkarsahu/oks-ui-test/main/<path>`) and copy
them into your project **verbatim**, keeping the same paths. Translate `.jsx` →
`.tsx` and add types if the user chose TypeScript; adapt `react-router` imports to
Next's router if they chose Next.js.

### Shell & app wiring
- `src/main.jsx` — provider tree + import order + `initTheme()`
- `src/App.jsx` — the routing pattern: `AUTH_PATHS` / `REAL_INNER` / `CONFIGURED`
  sets, `shellRoutes` filter, `<InnerTemplate>` layout route, `path="*"` →
  `ComingSoon` catch-all
- `src/index.css` — Tailwind import + `@custom-variant dark`
- `src/Pages/InnerPages/InnerTemplate.jsx`, `InnerFallback.jsx`, `ComingSoon.jsx`
- `src/Components/Commom/` — `Header.jsx`, `Sidebar.jsx`, `Footer.jsx`
  (note the misspelled directory name `Commom` — keep it or fix it, just be
  consistent)
- `src/Pages/Auth/` + `src/context/` + `src/Components/Auth/ProtectedRoute.jsx` —
  the mock-auth scaffold (`admin@example.com` / `admin123`,
  `localStorage.oks_is_authenticated`)

### Theme
- `src/styles/theme.css` — the `--oks-palette-*` custom ramp, the
  `--oks-color-primary-*` / `-success-*` / `-warning-*` aliases, radius/per-
  component token overrides, the `:root[data-theme="dark"]` block, and the
  `--app-*` layer
- `src/lib/theme.js` — `getTheme` / `applyTheme` / `initTheme` / `toggleTheme`
- `src/lib/avatar.js` — `avatarUrl(name)` → stable stock photo

### The `src/Components/ui/` composition layer (all of it)
`Surface`, `CardHeader`, `SectionTitle`, `Stat`, `StatTile`, `StatGroup`,
`TrendChip`, `KpiCard`, `RankList`, `UpgradeCard`, `ChartCard`, `DonutStat`,
`MeterList`, `GoalCard`, `StatusChip`, `EntityCell`, `KeyValueList`, `DataTable`,
`TableToolbar`, `Pagination`, `SearchInput`, `ActivityFeed`, `Timeline`,
`CohortGrid`, `BoardView`, `EmptyState`, `FormCard`, `SettingRow`,
`SettingsSection`, `CodeBlock`, `Example`, plus `index.js`.

### The archetypes + their route manifests
- `ListPage.jsx` + `listRoutes.jsx`
- `FormPage.jsx` + `formRoutes.jsx`
- `DetailPage.jsx` + `detailRoutes.jsx`
- `BoardPage.jsx` + `boardRoutes.jsx`
- `ReportPage.jsx` + `reports/routes.jsx`
- `SettingsPage.jsx` + `settingsRoutes.jsx`
- `GanttView.jsx` + `projects/routes.jsx`

### Config
- `eslint.config.js`, `vite.config.js` (the `$PORT`/`strictPort` handling),
  `.claude/launch.json`

**After copying:** run `npm run lint && npm run build`. Fix import paths until
both pass. The app should boot to a login page and, after
`localStorage.setItem('oks_is_authenticated','true')`, show the shell with an
empty content area.

Do **not** copy the reference repo's `src/data/*` or its concrete page components
(`Dashboard.jsx`, `CrmDashboard.jsx`, the `apps/`, `charts/`, `pages/` folders,
etc.) — those are Vela-specific. You build your own from the reference URL.

---

## Step 3 — Adapt the foundation to the new brand

1. **Palette.** Pick a brand hue for the new template (from the reference's own
   accent colour if it has one). Replace the `--oks-palette-<name>-50 … -950`
   ramp in `theme.css` and repoint `--oks-color-primary-*` at it. Adjust radii
   if the reference is sharper/rounder. Verify light **and** dark.
2. **Nav.** Rewrite `src/data/nav.js` to mirror the reference's sidebar exactly
   (same groups, same leaf labels, same order). The `slug()` + `leaves()` helpers
   carry over. `NAV_ROUTES` (the flat deduped list) drives the `ComingSoon`
   fallback in `App.jsx`.
3. **Logo / product name.** Swap the logo asset and the app name in `Header`,
   `Sidebar`, `Footer`, `AuthTemplate`.
4. **Component gallery registry.** `src/data/gallery.jsx` — keep the structure,
   keep every composed-component entry (they're generic), refresh the sample
   data. Every `src/Components/ui/index.js` export with interesting props gets a
   `/components/<slug>` entry **and** a `nav.js` Components-group leaf.

---

## Step 4 — Build the pages (v1 core)

Work in **page groups**. After each group: `npm run lint && npm run build` (both
must pass), verify in the browser (Step 6), then commit (Step 7).

**Build order:**

1. **All dashboards.** One component per dashboard in `src/Pages/InnerPages/`,
   mock data in `src/data/<name>.js`. Compose from the `ui/` layer — `KpiCard`,
   `StatGroup`, `ChartCard`, `DonutStat`, `MeterList`, `GoalCard`, `RankList`,
   `DataTable`, `ActivityFeed`, `Timeline`, `CohortGrid`. Wire each as an explicit
   route in `App.jsx` and add its path to `REAL_INNER`.
2. **ListPage archetype → all CRUD/table routes.** Add configs to
   `src/data/lists.jsx` (`LIST_CONFIGS`). Routes auto-wire via `listRoutePaths` —
   no `App.jsx` edit. One `ListPage` covers dozens of routes (users, roles,
   products, orders, invoices, employees, shipments, campaigns, …).
3. **Component gallery.** `/components` grid + `/components/:slug` from the
   `gallery.jsx` registry.
4. **The other archetypes**, as the reference needs them:
   - `FormPage` (`FORM_CONFIGS` in `forms.jsx`) — create/edit screens
   - `DetailPage` (`DETAIL_CONFIGS` in `details.jsx`) — profile / entity detail
   - `BoardPage` (`BOARD_CONFIGS` in `boards.jsx`) — kanban
   - `ReportPage` (`REPORT_CONFIGS` in `reports.jsx`) — report screens
   - `SettingsPage` (`SETTINGS_CONFIGS` in `settings.jsx`) — every
     `/settings/*` and `/account/*` leaf
   - `GanttView` (`GANTT_CONFIGS` in `gantt.js`) — timeline / gantt

`ListPage` and `ReportPage` auto-wire (add a config key, done). Every other
archetype needs its `*/routes.jsx` manifest spread into `App.jsx` and its paths
added to the `CONFIGURED` set so they don't fall through to `ComingSoon`.

**v1 core is done when:** shell + theme + full `ui/` layer + all archetypes + every
dashboard + ListPage wired to its routes + the component gallery + all five docs
(below) are built and committed, and `PAGES.md` / `HANDOFF.md` map the rest as
`⬜ planned`. Then stop and hand off.

### New composed components

Only build a new `ui/` component when **2+ pages** need it. When you do: add it to
`src/Components/ui/index.js`, add a `gallery.jsx` entry with a live example +
copyable code, add a `nav.js` Components-group leaf — and **log it in
`OKS-UI-FEEDBACK.md`** as a "missing component".

---

## Step 5 — Rules for building pages

- **Config-driven first.** If a screen is a list, a form, a settings panel, a
  report, or a board — it's a config object, not a bespoke component. Bespoke
  components are for dashboards and genuine one-offs.
- **`Surface` is the card.** `oks-ui` has no Card. Everything sits in a `Surface`.
- **Mock data is deterministic.** Generate it from indices
  (`Array.from({length}, (_, i) => …)`), not `Math.random()`, so the UI is stable
  between reloads. Names run through `avatarUrl()`.
- **`StatusChip` maps strings → semantic colour.** Add new status strings to its
  `TONE` map as you introduce them.
- **`DonutStat`** hides `oks-ui`'s built-in donut centre number and shows a
  styled `centerValue` / `centerLabel` overlay, grid-stacked. Its segments are a
  `var(--oks-color-primary-*)` ramp so it re-tints with the theme.
- **`react-refresh/only-export-components`** (a lint error, blocks the build)
  fires on files that export a component *and* something else. Route manifests
  (`*Routes.jsx`) must import page components, never define them. Data files with
  JSX (`lists.jsx`, `reports.jsx`) are fine as long as they don't *define* a
  named component — carry the `/* eslint-disable react-refresh/only-export-components */`
  header the reference manifests use where needed.
- **JSX attribute strings can't contain `\"`** — use plain text or `{'…"…"…'}`.
- **`oks-ui` `Chip`** variants are `solid | soft | bordered | dot` (no `flat`).
  `onClick` works; so does `selected` + `onSelectedChange`.
- **`Chart`** (`oks-ui`): `type`, `data`, `x`, `series` (string or
  `[{key,name,color}]`), `dataFormat={{prefix,format:"compact"}}`,
  `palette={{roles:["primary"]}}` or `{colors:[…]}`, `legend={{show}}`,
  `column={{stacked:true}}`. With `roles:["primary"]` the SVG `fill` is a live
  `var()` (re-tints on a CSS-var change); an explicit-hex `colors` palette does
  not. `ChartCard` wraps most of this.
- **framer-motion `AnimatePresence` conditional-exit is unreliable** with React 19
  + StrictMode. Use CSS transitions for mount/unmount, or a keyed remount.

---

## Step 6 — Verify

**Hard gates, every group:** `npm run lint` and `npm run build` both pass.

**Browser:** start the dev server (via the browser tool, never `Bash`). Log in
(`localStorage.setItem('oks_is_authenticated','true')`). For each new page:
check `read_console_messages` for errors, `get_page_text` / `read_page` for
content, and a screenshot for layout.

**Gotchas:**
- **Restart the dev server after a batch of edits** — Vite HMR goes stale on this
  kind of project (deleted files, prop-shape changes) and throws phantom
  `X is not defined` / 404s that a fresh tab does not.
- **If the browser pane isn't displayed:** screenshots time out *and* the browser
  throttles style recalc for the hidden tab, so `getComputedStyle(el).color` can
  read stale after a JS-driven CSS-var change. Force a recalc first:
  `document.body.style.display='none'; void document.body.offsetHeight; document.body.style.display='';`
- **Full route sweep before hand-off:** crawl every `NAV_ROUTES` entry via
  `history.pushState` + a `popstate` event, and assert 0 JS errors and 0
  unintended `ComingSoon` (only genuinely-unknown URLs should hit it).

---

## Step 7 — Commit & hand off

- Commit after every page group. Conventional, present-tense subject; a short
  body listing what landed. End every commit message with:
  `Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>`
- Never `git push` unless the user asks.
- Keep **`docs/HANDOFF.md`** current — it's the file the next session reads. It
  states current status, the archetype table, what's built, what's `⬜ planned`
  (with the approach for each), the gotchas, and how to verify/run.
- When v1 core is done, tell the user what's built and what remains. Follow-up
  prompt is "read `docs/HANDOFF.md` and continue."

---

## Deliverables (every template)

| File | Contents |
| --- | --- |
| the app | v1 core, `npm run lint` + `npm run build` clean |
| `docs/PAGES.md` | every route, grouped by nav, with status |
| `docs/COMPONENTS.md` | the `ui/` layer — each component, what it's built from, its props; the "two-layer" explainer at the top |
| `docs/THEMING.md` | what's overridden in `theme.css`, the `--app-*` layer, how to rebrand |
| `docs/HANDOFF.md` | state of the project + how to continue |
| `docs/OKS-UI-FEEDBACK.md` | **the point of the exercise** — see below |

---

## The oks-ui feedback protocol

**Why:** every workaround you write is a signal about a gap in `oks-ui`. Captured
well, this list drives the library's roadmap.

**When to log — the moment you:**
- reach for a component `oks-ui` doesn't ship (Card, Table, Pagination,
  Breadcrumbs, Sidebar/Nav-tree, Skeleton, Progress, Stepper, Tree, Calendar,
  Command palette, DateRange picker, Kanban, Gantt, heatmap, …)
- want a prop that doesn't exist (a way to hide the donut's centre total, a
  `flat` chip variant, a controlled-selection hook, an `as`/`asChild` for
  polymorphism, a size that isn't offered, …)
- write a CSS hack to work around component internals (`[&_svg_text]:hidden`,
  `color-mix` to synthesise a token step, `!important`, targeting an `oks*` class)
- hit a bug (wrong output, broken a11y, layout break, a variant that renders
  nothing, an event that doesn't fire)
- can't find a token, a type export, or a doc example you needed and had to
  inspect computed styles or read the dist bundle to proceed
- notice an a11y problem (missing label, no focus ring, wrong role, poor
  contrast in one theme)

**Entry format** (GitHub-issue-ready — the user pastes these into the `oks-ui`
repo almost verbatim). Append to `docs/OKS-UI-FEEDBACK.md`:

```markdown
### [<category>] <one-line title>

- **Severity:** blocker | major | minor | nice-to-have
- **Category:** missing-component | missing-prop | bug | a11y | dx | docs
- **What I was building:** <the screen / behaviour>
- **What oks-ui offers today:** <the closest existing API, or "nothing">
- **Workaround used:**
  ```jsx
  <the code you actually wrote>
  ```
- **Proposed API:** <a concrete prop / component signature oks-ui could add>
- **Seen in:** <template name> · <route or component>
```

**Severity rubric:**
- **blocker** — could not achieve the reference's design without a hack that a
  real app shouldn't ship
- **major** — every serious admin app hits this; the workaround is non-trivial
- **minor** — small friction, easy workaround
- **nice-to-have** — polish, ergonomics, docs

**Structure of the file:** a "Summary" table at the top (title · severity ·
category), then the full entries newest-first. Keep it deduped — if you hit the
same gap on a second page, add a `Seen in:` line to the existing entry rather than
a new one.

### Seed entries (carry these into every template's feedback file, confirm they
still apply, and add `Seen in:` lines)

| Title | Sev. | Category |
| --- | --- | --- |
| No Card primitive — every app needs `Surface` | major | missing-component |
| No data Table (columns, sort, select, paginate, empty, skeleton) | blocker | missing-component |
| No Pagination component | major | missing-component |
| No Breadcrumbs component | minor | missing-component |
| No Sidebar / Nav-tree (collapsible groups, active state, mini mode) | major | missing-component |
| No Skeleton / shimmer placeholder | minor | missing-component |
| No Progress bar / meter | minor | missing-component |
| No Stat / KPI card | minor | missing-component |
| No EmptyState component | minor | missing-component |
| No Kanban / board layout | minor | missing-component |
| No Gantt / timeline-bars component | nice-to-have | missing-component |
| No cohort / heatmap grid | nice-to-have | missing-component |
| No Command palette (⌘K) | nice-to-have | missing-component |
| No DateRange preset picker | minor | missing-component |
| `<Chart type="donut">` renders a centre total with no opt-out or slot | major | missing-prop |
| `Chip` has no tint-only variant (`soft` has hover; there's no static `flat`) | minor | missing-prop |
| No documented map of which `--oks-*` token each component *variant* reads | major | dx |
| Changing `--oks-color-primary-500` alone doesn't cascade to soft/tint variants — the full `-50…-950` ramp relationship is undocumented | major | docs |
| `Button as={Link}` / polymorphism works but is undocumented | minor | docs |
| No exported constant listing the design tokens (had to inspect computed styles) | minor | dx |
| `react-refresh/only-export-components` interplay with data-files-that-return-JSX is a footgun; no guidance | minor | docs |

---

## Appendix — definition of done for a session

- [ ] Step 0 questions asked and answered; scaffold green on lint + build + dev
- [ ] Foundation copied from the reference repo; lint + build green; app boots to shell
- [ ] `theme.css` rebranded; light + dark both verified
- [ ] `nav.js` mirrors the reference sidebar
- [ ] Every dashboard built, wired, verified
- [ ] `ListPage` configs cover every list/CRUD route in the reference
- [ ] Component gallery live at `/components`
- [ ] Every archetype the reference needs is wired
- [ ] `NAV_ROUTES` full sweep: 0 JS errors, 0 unintended `ComingSoon`
- [ ] `docs/PAGES.md`, `COMPONENTS.md`, `THEMING.md`, `HANDOFF.md` written
- [ ] `docs/OKS-UI-FEEDBACK.md` written, seeded, and appended to throughout
- [ ] Every page group committed with a `Co-Authored-By` trailer
- [ ] Final message to the user: what's built, what's `⬜ planned`, how to continue
