import { useState } from "react";
import { Hash, Users, Plus } from "lucide-react";
import SectionTitle from "../../../Components/ui/SectionTitle";
import Surface from "../../../Components/ui/Surface";
import { CHANNELS, CHANNEL_THREAD, CHANNEL_MEMBERS } from "../../../data/apps";
import { FRAME_H, PersonAvatar, Composer } from "./_shared";

const GroupChat = () => {
  const [activeId, setActiveId] = useState(CHANNELS[0].id);
  const active = CHANNELS.find((c) => c.id === activeId);

  return (
    <div>
      <SectionTitle title="Group chat" subtitle="Team channels and shared threads." />

      <Surface padding="none" className={`flex overflow-hidden ${FRAME_H}`}>
        {/* Channel list */}
        <div className="hidden w-60 shrink-0 flex-col border-r border-[color:var(--app-border)] sm:flex">
          <div className="flex items-center justify-between border-b border-[color:var(--app-border)] p-3">
            <span className="text-xs font-semibold uppercase tracking-wide text-[color:var(--app-fg-subtle)]">
              Channels
            </span>
            <button type="button" className="rounded-md p-1 text-[color:var(--app-fg-muted)] hover:bg-[var(--app-surface-2)]">
              <Plus size={15} />
            </button>
          </div>
          <div className="min-h-0 flex-1 overflow-y-auto p-2">
            {CHANNELS.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setActiveId(c.id)}
                className={`flex w-full items-center gap-2 rounded-[var(--oks-radius-md)] px-2 py-1.5 text-left text-sm transition-colors hover:bg-[var(--app-surface-2)] ${
                  c.id === activeId
                    ? "bg-[var(--app-surface-2)] font-medium text-[var(--app-fg)]"
                    : "text-[color:var(--app-fg-muted)]"
                }`}
              >
                <Hash size={15} className="shrink-0 opacity-60" />
                <span className="min-w-0 flex-1 truncate">{c.name}</span>
                {c.unread > 0 && (
                  <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-[var(--oks-color-primary-500)] px-1.5 text-[11px] font-semibold text-white">
                    {c.unread}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Thread */}
        <div className="flex min-w-0 flex-1 flex-col">
          <div className="flex items-center gap-2 border-b border-[color:var(--app-border)] p-3">
            <Hash size={16} className="text-[color:var(--app-fg-subtle)]" />
            <span className="text-sm font-semibold text-[var(--app-fg)]">{active.name}</span>
            <span className="text-xs text-[color:var(--app-fg-muted)]">· {active.topic}</span>
            <span className="ml-auto flex items-center gap-1 text-xs text-[color:var(--app-fg-muted)]">
              <Users size={13} /> {active.members}
            </span>
          </div>

          <div className="min-h-0 flex-1 space-y-4 overflow-y-auto bg-[var(--app-bg)] p-4">
            {CHANNEL_THREAD.map((m) => (
              <div key={m.id} className="flex gap-3">
                <PersonAvatar name={m.name} />
                <div className="min-w-0">
                  <p className="text-sm">
                    <span className="font-semibold text-[var(--app-fg)]">{m.name}</span>{" "}
                    <span className="text-[11px] text-[color:var(--app-fg-subtle)]">{m.time}</span>
                  </p>
                  <p className="text-sm text-[color:var(--app-fg-muted)]">{m.text}</p>
                </div>
              </div>
            ))}
          </div>

          <Composer placeholder={`Message #${active.name}`} />
        </div>

        {/* Members */}
        <div className="hidden w-56 shrink-0 flex-col border-l border-[color:var(--app-border)] p-3 lg:flex">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[color:var(--app-fg-subtle)]">
            Members — {CHANNEL_MEMBERS.length}
          </p>
          <div className="min-h-0 flex-1 space-y-1 overflow-y-auto">
            {CHANNEL_MEMBERS.map((m) => (
              <div key={m.name} className="flex items-center gap-2 rounded-md px-1.5 py-1">
                <PersonAvatar name={m.name} online={m.online} />
                <div className="min-w-0">
                  <p className="truncate text-sm text-[var(--app-fg)]">{m.name}</p>
                  <p className="truncate text-[11px] text-[color:var(--app-fg-subtle)]">{m.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Surface>
    </div>
  );
};

export default GroupChat;
