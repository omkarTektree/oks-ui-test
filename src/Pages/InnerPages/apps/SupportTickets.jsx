import { useMemo, useState } from "react";
import { Button, Chip } from "oks-ui";
import { Search, Paperclip, CornerUpLeft } from "lucide-react";
import SectionTitle from "../../../Components/ui/SectionTitle";
import Surface from "../../../Components/ui/Surface";
import StatusChip from "../../../Components/ui/StatusChip";
import { PersonAvatar, FRAME_H } from "./_shared";
import { TICKETS } from "../../../data/apps";

const FILTERS = ["All", "Open", "Pending", "In progress", "Resolved"];

const SupportTickets = () => {
  const [filter, setFilter] = useState("All");
  const [query, setQuery] = useState("");
  const [openId, setOpenId] = useState(TICKETS[0].id);

  const rows = useMemo(
    () =>
      TICKETS.filter(
        (t) =>
          (filter === "All" || t.status === filter) &&
          (query.trim() === "" ||
            (t.subject + t.requester + t.id).toLowerCase().includes(query.trim().toLowerCase()))
      ),
    [filter, query]
  );

  const open = TICKETS.find((t) => t.id === openId) ?? rows[0];

  return (
    <div>
      <SectionTitle
        title="Support tickets"
        subtitle="Master–detail queue with status filters."
        actions={<Button color="primary" size="sm">New ticket</Button>}
      />

      <div className="mb-4 flex flex-wrap items-center gap-2">
        {FILTERS.map((f) => (
          <Chip
            key={f}
            size="sm"
            variant={filter === f ? "solid" : "bordered"}
            color={filter === f ? "primary" : "default"}
            className="cursor-pointer"
            onClick={() => setFilter(f)}
          >
            {f}
          </Chip>
        ))}
      </div>

      <Surface padding="none" className={`flex overflow-hidden ${FRAME_H}`}>
        {/* List */}
        <div className="flex w-full flex-col border-r border-[color:var(--app-border)] sm:w-96 sm:shrink-0">
          <div className="flex items-center gap-2 border-b border-[color:var(--app-border)] p-3">
            <Search size={15} className="text-[color:var(--app-fg-subtle)]" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="min-w-0 flex-1 bg-transparent text-sm text-[var(--app-fg)] outline-none placeholder:text-[color:var(--app-fg-subtle)]"
              placeholder="Search tickets"
            />
          </div>
          <div className="min-h-0 flex-1 overflow-y-auto">
            {rows.length === 0 && (
              <p className="p-6 text-center text-sm text-[color:var(--app-fg-muted)]">No tickets match.</p>
            )}
            {rows.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setOpenId(t.id)}
                className={`flex w-full flex-col gap-1.5 border-b border-[color:var(--app-border)] p-3 text-left transition-colors hover:bg-[var(--app-surface-2)] ${
                  t.id === open?.id ? "bg-[var(--app-surface-2)]" : ""
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-medium text-[color:var(--app-fg-subtle)]">{t.id}</span>
                  <span className="text-[11px] text-[color:var(--app-fg-subtle)]">{t.updated}</span>
                </div>
                <p className="text-sm font-medium text-[var(--app-fg)]">{t.subject}</p>
                <div className="flex items-center gap-2">
                  <StatusChip status={t.status} />
                  <StatusChip status={t.priority} />
                  <span className="ml-auto text-[11px] text-[color:var(--app-fg-subtle)]">{t.channel}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Detail */}
        {open && (
          <div className="hidden min-w-0 flex-1 flex-col sm:flex">
            <div className="border-b border-[color:var(--app-border)] p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h2 className="text-base font-semibold text-[var(--app-fg)]">{open.subject}</h2>
                  <p className="mt-1 text-xs text-[color:var(--app-fg-muted)]">
                    {open.id} · opened via {open.channel} · {open.replies} replies
                  </p>
                </div>
                <div className="flex gap-2">
                  <StatusChip status={open.priority} />
                  <StatusChip status={open.status} />
                </div>
              </div>
              <div className="mt-3 flex items-center gap-4 text-xs text-[color:var(--app-fg-muted)]">
                <span className="flex items-center gap-1.5">
                  <PersonAvatar name={open.requester} /> {open.requester}
                </span>
                <span>Assigned to <span className="text-[var(--app-fg)]">{open.agent}</span></span>
              </div>
            </div>

            <div className="min-h-0 flex-1 space-y-4 overflow-y-auto bg-[var(--app-bg)] p-4">
              <div className="flex gap-3">
                <PersonAvatar name={open.requester} />
                <div className="rounded-[var(--oks-radius-lg)] border border-[color:var(--app-border)] bg-[var(--app-surface)] p-3">
                  <p className="text-sm text-[color:var(--app-fg-muted)]">{open.body}</p>
                  <p className="mt-2 flex items-center gap-1 text-[11px] text-[color:var(--app-fg-subtle)]">
                    <Paperclip size={11} /> repro-steps.txt
                  </p>
                </div>
              </div>
              <div className="flex flex-row-reverse gap-3">
                <PersonAvatar name={open.agent} />
                <div className="rounded-[var(--oks-radius-lg)] bg-[var(--oks-color-primary-500)] p-3 text-white">
                  <p className="text-sm">
                    Thanks for the report — I can reproduce it. Escalating to engineering and
                    will update you within the hour.
                  </p>
                  <p className="mt-2 text-[11px] text-white/70">{open.agent} · {open.updated}</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 border-t border-[color:var(--app-border)] p-3">
              <Button size="sm" variant="bordered" startContent={<CornerUpLeft size={14} />}>Reply</Button>
              <Button size="sm" variant="bordered">Add note</Button>
              <Button size="sm" color="primary" className="ml-auto">Mark resolved</Button>
            </div>
          </div>
        )}
      </Surface>
    </div>
  );
};

export default SupportTickets;
