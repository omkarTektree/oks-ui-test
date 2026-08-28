import { useState } from "react";
import { Alert, Badge, Button, Chip } from "oks-ui";
import { Sparkles } from "lucide-react";
import SectionTitle from "../../../Components/ui/SectionTitle";
import Surface from "../../../Components/ui/Surface";
import CardHeader from "../../../Components/ui/CardHeader";
import CodeBlock from "../../../Components/ui/CodeBlock";

const COMPONENTS = {
  Button: {
    colors: ["primary", "default", "success", "warning", "danger"],
    variants: ["solid", "bordered", "soft", "link"],
    sizes: ["sm", "md", "lg"],
    render: (p) => (
      <Button color={p.color} variant={p.variant} size={p.size} startContent={<Sparkles size={15} />}>
        {p.text}
      </Button>
    ),
    code: (p) =>
      `<Button color="${p.color}" variant="${p.variant}" size="${p.size}">\n  ${p.text}\n</Button>`,
  },
  Chip: {
    colors: ["primary", "default", "info", "success", "warning", "danger"],
    variants: ["solid", "soft", "bordered", "dot"],
    sizes: ["sm", "md", "lg"],
    render: (p) => (
      <Chip color={p.color} variant={p.variant} size={p.size}>
        {p.text}
      </Chip>
    ),
    code: (p) => `<Chip color="${p.color}" variant="${p.variant}" size="${p.size}">${p.text}</Chip>`,
  },
  Badge: {
    colors: ["primary", "default", "success", "warning", "danger"],
    variants: ["solid", "soft", "bordered"],
    sizes: ["sm", "md", "lg"],
    render: (p) => (
      <Badge color={p.color} variant={p.variant} size={p.size} content={p.text}>
        <span className="inline-block h-9 w-9 rounded-[var(--oks-radius-lg)] bg-[var(--app-surface-2)]" />
      </Badge>
    ),
    code: (p) =>
      `<Badge color="${p.color}" variant="${p.variant}" content="${p.text}">\n  <Avatar … />\n</Badge>`,
  },
  Alert: {
    colors: ["primary", "info", "success", "warning", "danger"],
    variants: ["solid", "soft", "bordered"],
    sizes: ["sm", "md", "lg"],
    render: (p) => (
      <Alert color={p.color} variant={p.variant} size={p.size} title={p.text}>
        A short description of the alert goes here.
      </Alert>
    ),
    code: (p) =>
      `<Alert color="${p.color}" variant="${p.variant}" title="${p.text}">\n  A short description…\n</Alert>`,
  },
};

const Toggle = ({ label, options, value, onChange }) => (
  <div>
    <p className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-[color:var(--app-fg-subtle)]">
      {label}
    </p>
    <div className="flex flex-wrap gap-1.5">
      {options.map((o) => (
        <button
          key={o}
          type="button"
          onClick={() => onChange(o)}
          className={`rounded-[var(--oks-radius-md)] border px-2.5 py-1 text-xs capitalize transition-colors ${
            value === o
              ? "border-[color:var(--oks-color-primary-500)] font-medium text-[var(--app-fg)]"
              : "border-[color:var(--app-border)] text-[color:var(--app-fg-muted)]"
          }`}
        >
          {o}
        </button>
      ))}
    </div>
  </div>
);

const UiPlayground = () => {
  const [name, setName] = useState("Button");
  const [props, setProps] = useState({ color: "primary", variant: "solid", size: "md", text: "Label" });
  const meta = COMPONENTS[name];

  const set = (k) => (v) => setProps((p) => ({ ...p, [k]: v }));
  const pick = (list, cur) => (list.includes(cur) ? cur : list[0]);
  const safe = {
    ...props,
    color: pick(meta.colors, props.color),
    variant: pick(meta.variants, props.variant),
    size: pick(meta.sizes, props.size),
  };

  return (
    <div className="space-y-6">
      <SectionTitle
        title="UI playground"
        subtitle="Tweak props on an oks-ui primitive and copy the result."
      />

      <div className="flex flex-wrap gap-2">
        {Object.keys(COMPONENTS).map((c) => (
          <Chip
            key={c}
            size="sm"
            variant={name === c ? "solid" : "bordered"}
            color={name === c ? "primary" : "default"}
            className="cursor-pointer"
            onClick={() => setName(c)}
          >
            {c}
          </Chip>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[16rem_1fr]">
        <Surface className="h-max space-y-4">
          <CardHeader title="Props" className="mb-0" />
          <Toggle label="color" options={meta.colors} value={safe.color} onChange={set("color")} />
          <Toggle label="variant" options={meta.variants} value={safe.variant} onChange={set("variant")} />
          <Toggle label="size" options={meta.sizes} value={safe.size} onChange={set("size")} />
          <div>
            <p className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-[color:var(--app-fg-subtle)]">
              text
            </p>
            <input
              value={props.text}
              onChange={(e) => set("text")(e.target.value)}
              className="w-full rounded-[var(--oks-radius-md)] border border-[color:var(--app-border)] bg-[var(--app-bg)] px-2.5 py-1.5 text-sm text-[var(--app-fg)] outline-none focus:border-[color:var(--oks-color-primary-500)]"
            />
          </div>
        </Surface>

        <div className="space-y-4">
          <Surface className="flex min-h-40 items-center justify-center">
            {meta.render(safe)}
          </Surface>
          <CodeBlock code={meta.code(safe)} />
        </div>
      </div>
    </div>
  );
};

export default UiPlayground;
