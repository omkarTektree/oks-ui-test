import { useState } from "react";
import { Chip } from "oks-ui";
import { Phone, Video, Search, MoreVertical } from "lucide-react";
import SectionTitle from "../../../Components/ui/SectionTitle";
import Surface from "../../../Components/ui/Surface";
import { CONVERSATIONS } from "../../../data/apps";
import { FRAME_H, PersonAvatar, Composer } from "./_shared";

const Chat = () => {
  const [activeId, setActiveId] = useState(CONVERSATIONS[0].id);
  const active = CONVERSATIONS.find((c) => c.id === activeId);

  return (
    <div>
      <SectionTitle
        title="Chat"
        subtitle="Direct messages with your team."
      />

      <Surface padding="none" className={`flex overflow-hidden ${FRAME_H}`}>
        {/* Conversation list */}
        <div className="hidden w-72 shrink-0 flex-col border-r border-[color:var(--app-border)] sm:flex">
          <div className="flex items-center gap-2 border-b border-[color:var(--app-border)] p-3">
            <Search size={15} className="text-[color:var(--app-fg-subtle)]" />
            <input
              className="min-w-0 flex-1 bg-transparent text-sm text-[var(--app-fg)] outline-none placeholder:text-[color:var(--app-fg-subtle)]"
              placeholder="Search conversations"
            />
          </div>
          <div className="min-h-0 flex-1 overflow-y-auto">
            {CONVERSATIONS.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setActiveId(c.id)}
                className={`flex w-full items-start gap-3 border-b border-[color:var(--app-border)] p-3 text-left transition-colors hover:bg-[var(--app-surface-2)] ${
                  c.id === activeId ? "bg-[var(--app-surface-2)]" : ""
                }`}
              >
                <PersonAvatar name={c.name} online={c.online} />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <p className="truncate text-sm font-medium text-[var(--app-fg)]">
                      {c.name}
                    </p>
                    <span className="shrink-0 text-[11px] text-[color:var(--app-fg-subtle)]">
                      {c.time}
                    </span>
                  </div>
                  <p className="mt-0.5 truncate text-xs text-[color:var(--app-fg-muted)]">
                    {c.last}
                  </p>
                </div>
                {c.unread > 0 && (
                  <span className="mt-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-[var(--oks-color-primary-500)] px-1.5 text-[11px] font-semibold text-white">
                    {c.unread}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Thread */}
        <div className="flex min-w-0 flex-1 flex-col">
          <div className="flex items-center justify-between gap-3 border-b border-[color:var(--app-border)] p-3">
            <div className="flex items-center gap-3">
              <PersonAvatar name={active.name} online={active.online} />
              <div>
                <p className="text-sm font-semibold text-[var(--app-fg)]">
                  {active.name}
                </p>
                <p className="text-xs text-[color:var(--app-fg-muted)]">
                  {active.online ? "Online" : "Offline"} · {active.role}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1 text-[color:var(--app-fg-muted)]">
              <button type="button" className="rounded-md p-2 hover:bg-[var(--app-surface-2)]"><Phone size={16} /></button>
              <button type="button" className="rounded-md p-2 hover:bg-[var(--app-surface-2)]"><Video size={16} /></button>
              <button type="button" className="rounded-md p-2 hover:bg-[var(--app-surface-2)]"><MoreVertical size={16} /></button>
            </div>
          </div>

          <div className="min-h-0 flex-1 space-y-3 overflow-y-auto bg-[var(--app-bg)] p-4">
            {active.messages.map((m) => (
              <div
                key={m.id}
                className={`flex ${m.from === "me" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[78%] rounded-[var(--oks-radius-lg)] px-3 py-2 text-sm ${
                    m.from === "me"
                      ? "bg-[var(--oks-color-primary-500)] text-white"
                      : "border border-[color:var(--app-border)] bg-[var(--app-surface)] text-[var(--app-fg)]"
                  }`}
                >
                  <p>{m.text}</p>
                  <p
                    className={`mt-1 text-[11px] ${
                      m.from === "me" ? "text-white/70" : "text-[color:var(--app-fg-subtle)]"
                    }`}
                  >
                    {m.time}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <Composer placeholder={`Message ${active.name.split(" ")[0]}…`} />
        </div>

        {/* Details */}
        <div className="hidden w-64 shrink-0 flex-col border-l border-[color:var(--app-border)] p-4 xl:flex">
          <PersonAvatar name={active.name} size="lg" />
          <p className="mt-3 text-sm font-semibold text-[var(--app-fg)]">
            {active.name}
          </p>
          <p className="text-xs text-[color:var(--app-fg-muted)]">{active.role}</p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            <Chip size="sm" variant="soft">Mute</Chip>
            <Chip size="sm" variant="soft">Pin</Chip>
            <Chip size="sm" variant="soft">Archive</Chip>
          </div>
          <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-[color:var(--app-fg-subtle)]">
            Shared files
          </p>
          <ul className="mt-2 space-y-2 text-sm text-[color:var(--app-fg-muted)]">
            <li className="truncate">onboarding-v2.fig</li>
            <li className="truncate">step-3-flows.pdf</li>
            <li className="truncate">notes.txt</li>
          </ul>
        </div>
      </Surface>
    </div>
  );
};

export default Chat;
