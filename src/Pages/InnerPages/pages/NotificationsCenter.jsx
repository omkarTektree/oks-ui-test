import { useState } from "react";
import { Button } from "oks-ui";
import { AtSign, MessageSquare, UserPlus, ShieldCheck, Settings2, CheckCheck } from "lucide-react";
import SectionTitle from "../../../Components/ui/SectionTitle";
import Surface from "../../../Components/ui/Surface";
import { PersonAvatar } from "../apps/_shared";
import { NOTIFICATIONS } from "../../../data/content";

const KIND_ICON = {
  mention: AtSign, comment: MessageSquare, assign: UserPlus,
  security: ShieldCheck, system: Settings2,
};
const FILTERS = ["All", "Unread", "Mentions"];

const NotificationsCenter = () => {
  const [filter, setFilter] = useState("All");
  const [read, setRead] = useState(() => new Set());

  const rows = NOTIFICATIONS.filter((n) => {
    if (filter === "Unread") return n.unread && !read.has(n.id);
    if (filter === "Mentions") return n.kind === "mention";
    return true;
  });

  const markAll = () => setRead(new Set(NOTIFICATIONS.map((n) => n.id)));

  return (
    <div className="mx-auto max-w-2xl space-y-5">
      <SectionTitle
        title="Notifications"
        subtitle="Everything that needs your attention."
        actions={
          <Button size="sm" variant="bordered" startContent={<CheckCheck size={15} />} onClick={markAll}>
            Mark all read
          </Button>
        }
      />

      <div className="flex gap-2">
        {FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            className={`rounded-full px-3 py-1 text-sm transition-colors ${
              filter === f
                ? "bg-[var(--oks-color-primary-500)] font-medium text-white"
                : "border border-[color:var(--app-border)] text-[color:var(--app-fg-muted)]"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <Surface padding="none" className="divide-y divide-[color:var(--app-border)]">
        {rows.length === 0 && (
          <p className="px-5 py-10 text-center text-sm text-[color:var(--app-fg-muted)]">
            You're all caught up.
          </p>
        )}
        {rows.map((n) => {
          const Icon = KIND_ICON[n.kind] ?? Settings2;
          const unread = n.unread && !read.has(n.id);
          return (
            <div key={n.id} className="flex items-start gap-3 px-5 py-4">
              {n.who === "System" || n.who === "Billing" ? (
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--app-surface-2)] text-[color:var(--app-fg-muted)]">
                  <Icon size={15} />
                </span>
              ) : (
                <PersonAvatar name={n.who} />
              )}
              <div className="min-w-0 flex-1">
                <p className="text-sm text-[color:var(--app-fg-muted)]">
                  <span className="font-medium text-[var(--app-fg)]">{n.who}</span> {n.what}
                </p>
                <p className="mt-0.5 text-xs text-[color:var(--app-fg-subtle)]">{n.when}</p>
              </div>
              {unread && (
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[var(--oks-color-primary-500)]" />
              )}
            </div>
          );
        })}
      </Surface>
    </div>
  );
};

export default NotificationsCenter;
