import { useState } from "react";
import { Link } from "react-router-dom";
import { Avatar, Button, Chip, Tab, Tabs } from "oks-ui";
import { ArrowLeft } from "lucide-react";
import { avatarUrl } from "../../lib/avatar";
import SectionTitle from "../../Components/ui/SectionTitle";
import Surface from "../../Components/ui/Surface";
import CardHeader from "../../Components/ui/CardHeader";
import StatGroup from "../../Components/ui/StatGroup";
import KeyValueList from "../../Components/ui/KeyValueList";
import Timeline from "../../Components/ui/Timeline";
import ActivityFeed from "../../Components/ui/ActivityFeed";

const Block = ({ block }) => {
  if (block.kind === "keyvalue") {
    return (
      <Surface>
        {block.title && <CardHeader title={block.title} subtitle={block.subtitle} />}
        <KeyValueList items={block.items} columns={block.columns ?? 2} />
      </Surface>
    );
  }
  if (block.kind === "timeline") {
    return <Timeline title={block.title} subtitle={block.subtitle} items={block.items} />;
  }
  if (block.kind === "activity") {
    return (
      <Surface padding="none">
        <div className="p-5 pb-0">
          <CardHeader title={block.title} subtitle={block.subtitle} />
        </div>
        <ActivityFeed items={block.items} />
      </Surface>
    );
  }
  if (block.kind === "list") {
    return (
      <Surface>
        {block.title && <CardHeader title={block.title} subtitle={block.subtitle} />}
        <ul className="space-y-2.5 text-sm text-[color:var(--app-fg-muted)]">
          {block.items.map((it) => (
            <li key={typeof it === "string" ? it : it.label} className="flex items-start justify-between gap-4">
              <span>{typeof it === "string" ? it : it.label}</span>
              {typeof it !== "string" && it.value != null && (
                <span className="shrink-0 font-medium text-[var(--app-fg)]">{it.value}</span>
              )}
            </li>
          ))}
        </ul>
      </Surface>
    );
  }
  // text
  return (
    <Surface>
      {block.title && <CardHeader title={block.title} />}
      <p className="whitespace-pre-line text-sm leading-relaxed text-[color:var(--app-fg-muted)]">
        {block.body}
      </p>
    </Surface>
  );
};

/**
 * Config-driven detail / profile screen.
 * `config` = {
 *   title, subtitle, backTo?, backLabel?,
 *   header: { name, sub?, tags?: [{ label, color }], actions?: [{ label, to?, color?, variant? }] },
 *   stats?: [{ label, value, hint? }],
 *   tabs: [{ id, label, blocks: [<Block config>] }],
 * }
 */
const DetailPage = ({ config }) => {
  const { title, subtitle, backTo, backLabel = "Back", header, stats = [], tabs = [] } = config;
  const [tab, setTab] = useState(tabs[0]?.id);
  const active = tabs.find((t) => t.id === tab) ?? tabs[0];

  return (
    <div className="space-y-6">
      <SectionTitle
        title={title}
        subtitle={subtitle}
        actions={
          backTo && (
            <Button as={Link} to={backTo} variant="bordered" size="sm" startContent={<ArrowLeft size={15} />}>
              {backLabel}
            </Button>
          )
        }
      />

      <Surface>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <Avatar name={header.name} src={avatarUrl(header.name)} size="lg" radius="full" />
            <div>
              <p className="text-lg font-semibold text-[var(--app-fg)]">{header.name}</p>
              {header.sub && <p className="text-sm text-[color:var(--app-fg-muted)]">{header.sub}</p>}
              {header.tags?.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {header.tags.map((t) => (
                    <Chip key={t.label} size="sm" variant="soft" color={t.color ?? "default"}>
                      {t.label}
                    </Chip>
                  ))}
                </div>
              )}
            </div>
          </div>
          {header.actions?.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {header.actions.map((a) =>
                a.to ? (
                  <Button key={a.label} as={Link} to={a.to} size="sm" color={a.color} variant={a.variant}>
                    {a.label}
                  </Button>
                ) : (
                  <Button key={a.label} size="sm" color={a.color} variant={a.variant}>
                    {a.label}
                  </Button>
                )
              )}
            </div>
          )}
        </div>
      </Surface>

      {stats.length > 0 && (
        <StatGroup columns={stats.length === 3 ? 3 : 4}>
          {stats.map((s) => (
            <Surface key={s.label} padding="md">
              <p className="text-2xl font-bold tracking-tight text-[var(--app-fg)]">{s.value}</p>
              <p className="mt-1 text-sm text-[color:var(--app-fg-muted)]">{s.label}</p>
              {s.hint && <p className="text-xs text-[color:var(--app-fg-subtle)]">{s.hint}</p>}
            </Surface>
          ))}
        </StatGroup>
      )}

      {tabs.length > 1 && (
        <Tabs
          size="sm"
          variant="soft"
          selectedKey={tab}
          onSelectionChange={(k) => setTab(String(k))}
          aria-label="Detail sections"
        >
          {tabs.map((t) => (
            <Tab key={t.id} title={t.label} />
          ))}
        </Tabs>
      )}

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {active?.blocks.map((block, i) => (
          <div key={i} className={block.wide ? "lg:col-span-2" : undefined}>
            <Block block={block} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailPage;
