# Theming

`oks-ui` is **entirely CSS custom properties** — no config file, no runtime. This
project owns its look by overriding those `--oks-*` variables in
[`src/styles/theme.css`](../src/styles/theme.css), loaded *after*
`oks-ui/styles.css` so our values win.

> Import order matters: `src/index.css` (Tailwind) → `oks-ui/styles.css` →
> `src/styles/theme.css`. See `src/main.jsx`.

## What we override

### Brand colour — a custom palette
`oks-ui` ships palettes (`--oks-palette-blue-*`, `-emerald-*`, …) and semantic
roles (`--oks-color-primary-*`, `-success-*`, …) that alias to them. We add our
own palette and point `primary` at it:

```css
:root {
  --oks-palette-iris-50:  #f2f1fd;
  /* … 100–900 … */
  --oks-palette-iris-950: #211840;

  --oks-color-primary-500: var(--oks-palette-iris-500);   /* used ~40× by components */
  --oks-color-primary-600: var(--oks-palette-iris-600);
  /* … every step … */
}
```

`<Button color="primary">`, `<Chip color="primary">`, focus rings, active nav —
all now iris (`#6d5bdb`) instead of the stock orange, with **zero component
changes**.

`success` → emerald and `warning` → amber the same way.

### Radius, per-component sizing
```css
--oks-radius-md: 0.5rem;          /* global scale */
--oks-radius-lg: 0.75rem;
--oks-button-radius: var(--oks-radius-lg);   /* per-component lever */
--oks-chip-radius: var(--oks-radius-full);
```
Every component exposes tokens like `--oks-button-height`,
`--oks-button-font-size`, `--oks-badge-*`, `--oks-chart-*` — override the ones
you need.

## Dark mode

`oks-ui` reads `data-theme="dark"` on `<html>`. We:

1. Define a dark block in `theme.css` overriding `--oks-color-surface`,
   `--oks-form-field-*`, and our `--app-*` layer.
2. Manage the attribute in [`src/lib/theme.js`](../src/lib/theme.js) —
   `initTheme()` runs before render (respects saved choice / OS preference),
   the header button calls `toggleTheme()`, choice persists to `localStorage`.
3. Point Tailwind's `dark:` variant at the same attribute
   (`@custom-variant dark …` in `index.css`) so utility classes agree.

## The `--app-*` layer

Our composed components (`src/Components/ui/`) never hard-code colour. They read
an app-level set that we define for both themes:

| Token | Role |
| --- | --- |
| `--app-bg` | page background |
| `--app-surface` / `--app-surface-2` | card / nested surfaces |
| `--app-border` / `--app-border-strong` | hairlines |
| `--app-fg` / `--app-fg-muted` / `--app-fg-subtle` | text tiers |
| `--app-shadow-sm` / `--app-shadow-md` | elevation |

So `<Surface>`, `<KpiCard>`, the sidebar, header and footer all flip together
when `data-theme` changes.

## Changing the brand

Edit the `--oks-palette-iris-*` ramp (or repoint `--oks-color-primary-*` at any
built-in palette) in `theme.css`. Nothing else needs to change.
