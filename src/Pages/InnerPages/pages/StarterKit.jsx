import { Button, Chip } from "oks-ui";
import {
  Check, Palette, LayoutDashboard, Table2, FormInput, Moon, Rocket, ShieldCheck,
} from "lucide-react";
import SectionTitle from "../../../Components/ui/SectionTitle";
import Surface from "../../../Components/ui/Surface";
import CardHeader from "../../../Components/ui/CardHeader";
import CodeBlock from "../../../Components/ui/CodeBlock";

const FEATURES = [
  { icon: LayoutDashboard, title: "10 dashboards", blurb: "Analytics, CRM, Ecommerce, Finance, Sales, Projects, SaaS, Logistics, BI, Marketing." },
  { icon: Table2, title: "Config-driven lists", blurb: "One ListPage archetype powers 40+ CRUD screens from plain data." },
  { icon: FormInput, title: "Every form field", blurb: "The full oks-ui field set, plus FormPage / SteppedForm patterns." },
  { icon: Palette, title: "Token theming", blurb: "One CSS-variable layer — reskin the whole app from theme.css." },
  { icon: Moon, title: "Dark mode", blurb: "Ships light + dark, driven by data-theme, persisted per user." },
  { icon: ShieldCheck, title: "Auth scaffold", blurb: "Login, register, forgot-password, protected routes, mock session." },
];

const INCLUDED = [
  "React 19 + Vite + React Router",
  "oks-ui component library",
  "29-component src/Components/ui/ composition layer",
  "Tailwind for layout utilities",
  "lucide-react icon set",
  "Mock data for every screen",
  "ESLint config that blocks broken builds",
  "docs/ — PAGES, COMPONENTS, THEMING, HANDOFF",
];

const STACK = ["React 19", "Vite", "React Router 7", "oks-ui", "Tailwind", "lucide-react", "framer-motion"];

const StarterKit = () => (
  <div className="space-y-8">
    <SectionTitle
      title="Starter kit"
      subtitle="Clone this project as the base for your next admin app."
      actions={
        <Button color="primary" size="sm" startContent={<Rocket size={15} />}>
          Use this template
        </Button>
      }
    />

    <Surface padding="lg">
      <p className="mb-3 text-sm font-medium text-[var(--app-fg)]">Get started</p>
      <CodeBlock
        code={[
          "npx degit your-org/oks-admin my-app",
          "cd my-app",
          "npm install",
          "npm run dev",
        ].join("\n")}
      />
    </Surface>

    <div>
      <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-[color:var(--app-fg-subtle)]">
        What you get
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((f) => (
          <Surface key={f.title}>
            <span className="flex h-10 w-10 items-center justify-center rounded-[var(--oks-radius-lg)] bg-[var(--oks-color-primary-50)] text-[color:var(--oks-color-primary-600)]">
              <f.icon size={18} />
            </span>
            <p className="mt-3 text-sm font-semibold text-[var(--app-fg)]">{f.title}</p>
            <p className="mt-1 text-sm text-[color:var(--app-fg-muted)]">{f.blurb}</p>
          </Surface>
        ))}
      </div>
    </div>

    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <Surface>
        <CardHeader title="Included" subtitle="Everything wired up out of the box" />
        <ul className="space-y-2.5">
          {INCLUDED.map((i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-[color:var(--app-fg-muted)]">
              <Check size={15} className="mt-0.5 shrink-0 text-[var(--oks-color-success-500)]" />
              {i}
            </li>
          ))}
        </ul>
      </Surface>
      <Surface>
        <CardHeader title="Tech stack" />
        <div className="flex flex-wrap gap-2">
          {STACK.map((s) => (
            <Chip key={s} size="sm" variant="soft">{s}</Chip>
          ))}
        </div>
        <p className="mt-4 text-sm text-[color:var(--app-fg-muted)]">
          No CSS-in-JS runtime, no design-system config file — theming is pure CSS
          custom properties. Swap the `--oks-palette-*` ramp in `theme.css` and the
          whole app follows.
        </p>
      </Surface>
    </div>
  </div>
);

export default StarterKit;
