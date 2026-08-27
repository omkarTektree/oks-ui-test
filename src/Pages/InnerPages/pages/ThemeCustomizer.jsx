import { useState } from "react";
import { Button, Chip, SwitchField } from "oks-ui";
import { Check } from "lucide-react";
import SectionTitle from "../../../Components/ui/SectionTitle";
import Surface from "../../../Components/ui/Surface";
import CardHeader from "../../../Components/ui/CardHeader";
import SettingRow from "../../../Components/ui/SettingRow";
import KpiCard from "../../../Components/ui/KpiCard";
import { getTheme, applyTheme } from "../../../lib/theme";

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

const ThemeCustomizer = () => {
  const [theme, setTheme] = useState(getTheme());
  const [accent, setAccent] = useState(ACCENTS[0].value);
  const [radius, setRadius] = useState(RADII[1].value);
  const [compact, setCompact] = useState(false);

  const setThemeMode = (mode) => {
    setTheme(mode);
    applyTheme(mode);
  };

  // Live preview only — writes CSS vars on :root while on this page.
  const applyAccent = (value) => {
    setAccent(value);
    document.documentElement.style.setProperty("--oks-color-primary-500", value);
    document.documentElement.style.setProperty("--oks-color-primary-600", value);
  };
  const applyRadius = (value) => {
    setRadius(value);
    document.documentElement.style.setProperty("--oks-radius-lg", value);
    document.documentElement.style.setProperty("--oks-radius-xl", value);
  };

  return (
    <div className="space-y-6">
      <SectionTitle
        title="Theme customizer"
        subtitle="Preview brand, radius and density changes live."
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

          <Surface>
            <SettingRow title="Compact density" description="Tighter padding across tables and cards">
              <SwitchField
                name="compact"
                checked={compact}
                onChange={(e) => setCompact(e.target.checked)}
              />
            </SettingRow>
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
              <Chip size="sm" variant="soft" color="success">Success</Chip>
              <Chip size="sm" variant="bordered">Neutral</Chip>
            </div>
          </Surface>
          <Surface>
            <p className="text-sm text-[color:var(--app-fg-muted)]">
              Changes here update CSS variables on the page for preview. The real
              theme system lives in{" "}
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
