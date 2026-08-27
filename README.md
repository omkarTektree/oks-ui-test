# oks-ui Showcase — Admin Dashboard Kit

A reference application that demonstrates **how to build a real product UI entirely
from [`oks-ui`](https://www.oks-ui.com) components** — and how to compose the
higher‑level building blocks a dashboard needs (KPI cards, data tables, filter
bars, activity feeds, charts…) on top of the primitives `oks-ui` ships.

The goal is **promotion + documentation‑by‑example** for `oks-ui`: every screen is
something you could lift straight into your own app.

## Reference experience

The target is a full admin/analytics dashboard in the spirit of
[Vela](https://vela.elsayedb.com/dashboards/analytics) — a multi‑dashboard shell
with a collapsible sidebar, a command‑style top bar, and content pages packed with
stat cards, charts, tables, funnels, and progress widgets.

## Principles

1. **oks-ui first.** Reach for an `oks-ui` component before writing custom markup.
   Hand‑rolled code only fills genuine gaps — `oks-ui` has no Card, Table,
   Progress, Pagination, or Nav primitive yet, so those we *compose* from what it
   does provide (Button, Chip, Avatar, Divider, Tabs, Dropdown, Chart, Form…).
2. **Compose, don't duplicate.** Every gap‑filling widget lives in
   `src/Components/ui/` as a reusable, prop‑driven component built from `oks-ui`.
   Pages assemble these; they don't re‑implement them.
3. **Theme through tokens.** Colour, spacing, and radius come from the `--oks-*`
   CSS variables, not hard‑coded values. Tailwind is used for *layout only*
   (grid / flex / spacing), never for component styling.
4. **Accessible & responsive by default** — `oks-ui` gives us keyboard nav,
   focus rings, ARIA roles, and reduced‑motion support; we keep it that way.

## Stack

| Concern | Choice |
| --- | --- |
| UI components | **`oks-ui`** (the star of the show) |
| Framework | React 19 + Vite |
| Routing | `react-router-dom` |
| Layout utilities | Tailwind CSS v4 (grid/flex/spacing only) |
| Motion | `framer-motion` (page + section transitions) |
| Icons | `lucide-react` |

## Project structure

```
src/
  Components/
    Commom/        App shell — Header, Sidebar, Footer   (folder name is a typo, kept for now)
    ui/            Composable widgets built from oks-ui  (KpiCard, DataTable, ChartCard, …)
    Auth/          ProtectedRoute
  Pages/
    Auth/          Login / Register / Forgot password / Terms  (oks-ui Form-driven)
    InnerPages/    Dashboards and app pages
  context/         Mock auth (localStorage flag)
  data/            Mock data for the demo screens
docs/
  COMPONENTS.md    The component catalogue + build plan
```

## Running

```bash
npm install
npm run dev
```

Demo login: **`admin@example.com`** / **`admin123`**

Auth is mock only — a `localStorage` flag that exists so protected routes and the
app shell have something to gate. It is not real authentication.

## Scripts

| Command | Does |
| --- | --- |
| `npm run dev` | Vite dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview the build |
| `npm run lint` | ESLint |

## Where to look

- **`docs/COMPONENTS.md`** — the full list of components to build from `oks-ui`,
  grouped by category, each noting which primitives it uses.
- **`src/Components/ui/`** — the composed components as they land.
- **`src/Pages/InnerPages/`** — pages that assemble them.
