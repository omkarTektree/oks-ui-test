import { useState } from "react";
import { Button, Chip } from "oks-ui";
import { Check } from "lucide-react";
import SectionTitle from "../../../Components/ui/SectionTitle";
import Surface from "../../../Components/ui/Surface";
import CardHeader from "../../../Components/ui/CardHeader";
import KpiCard from "../../../Components/ui/KpiCard";
import DonutStat from "../../../Components/ui/DonutStat";
import ChartCard from "../../../Components/ui/ChartCard";
import { getTheme, applyTheme } from "../../../lib/theme";

const PLAN_MIX = [
  { plan: "Free", value: 5400 },
  { plan: "Pro", value: 2600 },
  { plan: "Team", value: 1100 },
  { plan: "Enterprise", value: 240 },
];
const TREND = [
  { m: "Jan", v: 31 }, { m: "Feb", v: 35 }, { m: "Mar", v: 34 }, { m: "Apr", v: 40 },
  { m: "May", v: 44 }, { m: "Jun", v: 42 }, { m: "Jul", v: 48 }, { m: "Aug", v: 52 },
];

const ACCENTS = [
  { name: "Iris", value: "#6d5bdb" },
  { name: "Blue", value: "#3b82f6" },
  { name: "Emerald", value: "#10b981" },
  { name: "Amber", value: "#f59e0b" },
  { name: "Rose", value: "#f43f5e" },
];
const RADII = [
  { name: "Sharp", value: "0.25rem" },
  { name: "Default", value: "0.75rem" },
  { name: "Round", value: "1.25rem" },
];

// step -> [mix %, mix-with] for building a ramp from one accent hex.
const RAMP = [
  [50, 8, "white"], [100, 16, "white"], [200, 30, "white"], [300, 46, "white"],
  [400, 70, "white"], [500, 100, null], [600, 86, "black"], [700, 72, "black"],
  [800, 58, "black"], [900, 46, "black"], [950, 34, "black"],
];

const ThemeCustomizer = () => {
  const [theme, setTheme] = useState(getTheme());
  const [accent, setAccent] = useState(ACCENTS[0].value);
  const [radius, setRadius] = useState(RADII[1].value);

  const setThemeMode = (mode) => {
    setTheme(mode);
    applyTheme(mode);
  };

  // Live preview — writes CSS vars on the document root, so the change is
  // visible app-wide until you reload (or hit Reset).
  const applyAccent = (value) => {
    setAccent(value);
    const root = document.documentElement.style;
    for (const [step, pct, mix] of RAMP) {
      root.setProperty(
        `--oks-color-primary-${step}`,
        mix ? `color-mix(in srgb, ${value} ${pct}%, ${mix})` : value
      );
    }
  };
  const applyRadius = (value) => {
    setRadius(value);
    const root = document.documentElement.style;
    for (const v of ["--oks-radius-md", "--oks-radius-lg", "--oks-radius-xl", "--oks-button-radius"]) {
      root.setProperty(v, value);
    }
  };

  return (
    <div className="space-y-6">
      <SectionTitle
        title="Theme customizer"
        subtitle="Preview brand colour and corner radius live — changes apply until you reload."
        actions={
          <Button size="sm" variant="bordered" onClick={() => window.location.reload()}>
            Reset
          </Button>
        }
      />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[20rem_1fr]">
        <div className="space-y-4">
          <Surface>
            <CardHeader title="Mode" />
            <div className="flex gap-2">
              {["light", "dark"].map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => setThemeMode(m)}
                  className={`flex-1 rounded-[var(--oks-radius-lg)] border px-3 py-2 text-sm capitalize transition-colors ${
                    theme === m
                      ? "border-[color:var(--oks-color-primary-500)] font-medium text-[var(--app-fg)]"
                      : "border-[color:var(--app-border)] text-[color:var(--app-fg-muted)]"
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>
          </Surface>

          <Surface>
            <CardHeader title="Accent" />
            <div className="flex flex-wrap gap-2">
              {ACCENTS.map((a) => (
                <button
                  key={a.value}
                  type="button"
                  aria-label={a.name}
                  onClick={() => applyAccent(a.value)}
                  className="flex h-8 w-8 items-center justify-center rounded-full transition-transform hover:scale-105"
                  style={{
                    background: a.value,
                    outline: accent === a.value ? `2px solid ${a.value}` : "none",
                    outlineOffset: 2,
                  }}
                >
                  {accent === a.value && <Check size={14} className="text-white" />}
                </button>
              ))}
            </div>
          </Surface>

          <Surface>
            <CardHeader title="Corner radius" />
            <div className="flex gap-2">
              {RADII.map((r) => (
                <button
                  key={r.value}
                  type="button"
                  onClick={() => applyRadius(r.value)}
                  className={`flex-1 border px-2 py-2 text-xs transition-colors ${
                    radius === r.value
                      ? "border-[color:var(--oks-color-primary-500)] font-medium text-[var(--app-fg)]"
                      : "border-[color:var(--app-border)] text-[color:var(--app-fg-muted)]"
                  }`}
                  style={{ borderRadius: r.value }}
                >
                  {r.name}
                </button>
              ))}
            </div>
          </Surface>

        </div>

        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--app-fg-subtle)]">
            Live preview
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <KpiCard label="Revenue" value="$486k" delta={12.4} hint="this month" />
            <KpiCard label="Users" value="84.2k" delta={8.1} hint="active" />
            <KpiCard label="Churn" value="1.8%" delta={0.3} deltaDirection="down" hint="monthly" />
          </div>
          <Surface>
            <CardHeader title="Buttons & chips" />
            <div className="flex flex-wrap items-center gap-2">
              <Button color="primary" size="sm">Primary</Button>
              <Button variant="bordered" size="sm">Bordered</Button>
              <Button variant="soft" color="primary" size="sm">Soft</Button>
              <Chip size="sm" color="primary" variant="solid">Solid</Chip>
              <Chip size="sm" variant="soft" color="primary">Soft</Chip>
              <Chip size="sm" variant="bordered">Neutral</Chip>
            </div>
          </Surface>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <ChartCard
              title="Revenue"
              height={180}
              views={[{ key: "v", label: "Revenue", type: "area", data: TREND, x: "m", series: "v", dataFormat: { prefix: "$", suffix: "k" } }]}
            />
            <DonutStat
              title="Plan mix"
              data={PLAN_MIX}
              categoryKey="plan"
              valueKey="value"
              centerValue="9,340"
              centerLabel="subscriptions"
            />
          </div>
          <Surface>
            <p className="text-sm text-[color:var(--app-fg-muted)]">
              Changes here set CSS variables on the document root, so they persist
              app-wide until you reload. The real theme system lives in{" "}
              <code className="rounded bg-[var(--app-surface-2)] px-1 py-0.5 text-xs">
                src/styles/theme.css
              </code>{" "}
              — see docs/THEMING.md.
            </p>
          </Surface>
        </div>
      </div>
    </div>
  );
};

export default ThemeCustomizer;
