import { useState } from "react";
import { Button, Chip } from "oks-ui";
import {
  Inbox, Star, Send, FileText, Archive, TriangleAlert, Trash2,
  Reply, ReplyAll, Forward, Paperclip, PenSquare,
} from "lucide-react";
import SectionTitle from "../../../Components/ui/SectionTitle";
import Surface from "../../../Components/ui/Surface";
import { MAIL_FOLDERS, MAIL_LABELS, MESSAGES } from "../../../data/apps";
import { FRAME_H, PersonAvatar } from "./_shared";

const FOLDER_ICON = {
  inbox: Inbox, starred: Star, sent: Send, drafts: FileText,
  archive: Archive, spam: TriangleAlert, trash: Trash2,
};

const labelTone = (id) => MAIL_LABELS.find((l) => l.id === id)?.tone ?? "default";
const labelText = (id) => MAIL_LABELS.find((l) => l.id === id)?.label;

const Email = () => {
  const [folder, setFolder] = useState("inbox");
  const [openId, setOpenId] = useState(MESSAGES[0].id);
  const open = MESSAGES.find((m) => m.id === openId);

  return (
    <div>
      <SectionTitle
        title="Email"
        subtitle="A three-pane mailbox — folders, message list, reading pane."
        actions={
          <Button color="primary" size="sm" startContent={<PenSquare size={15} />}>
            Compose
          </Button>
        }
      />

      <Surface padding="none" className={`flex overflow-hidden ${FRAME_H}`}>
        {/* Folders */}
        <div className="hidden w-48 shrink-0 flex-col border-r border-[color:var(--app-border)] p-2 md:flex">
          {MAIL_FOLDERS.map((f) => {
            const Icon = FOLDER_ICON[f.id];
            return (
              <button
                key={f.id}
                type="button"
                onClick={() => setFolder(f.id)}
                className={`flex items-center gap-2 rounded-[var(--oks-radius-md)] px-2.5 py-2 text-left text-sm transition-colors hover:bg-[var(--app-surface-2)] ${
                  folder === f.id
                    ? "bg-[var(--app-surface-2)] font-medium text-[var(--app-fg)]"
                    : "text-[color:var(--app-fg-muted)]"
                }`}
              >
                <Icon size={15} className="shrink-0 opacity-70" />
                <span className="flex-1">{f.label}</span>
                {f.count > 0 && (
                  <span className="text-[11px] text-[color:var(--app-fg-subtle)]">{f.count}</span>
                )}
              </button>
            );
          })}
          <div className="mt-4 px-2.5">
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-[color:var(--app-fg-subtle)]">
              Labels
            </p>
            <div className="space-y-1.5">
              {MAIL_LABELS.map((l) => (
                <div key={l.id} className="flex items-center gap-2 text-sm text-[color:var(--app-fg-muted)]">
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ background: `var(--oks-color-${l.tone}-500)` }}
                  />
                  {l.label}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Message list */}
        <div className="flex w-full flex-col border-r border-[color:var(--app-border)] sm:w-80 sm:shrink-0">
          <div className="border-b border-[color:var(--app-border)] px-4 py-2.5 text-xs font-semibold uppercase tracking-wide text-[color:var(--app-fg-subtle)]">
            {MAIL_FOLDERS.find((f) => f.id === folder)?.label} · {MESSAGES.length}
          </div>
          <div className="min-h-0 flex-1 overflow-y-auto">
            {MESSAGES.map((m) => (
              <button
                key={m.id}
                type="button"
                onClick={() => setOpenId(m.id)}
                className={`flex w-full flex-col gap-1 border-b border-[color:var(--app-border)] p-3 text-left transition-colors hover:bg-[var(--app-surface-2)] ${
                  m.id === openId ? "bg-[var(--app-surface-2)]" : ""
                }`}
              >
                <div className="flex items-center gap-2">
                  {m.unread && <span className="h-2 w-2 shrink-0 rounded-full bg-[var(--oks-color-primary-500)]" />}
                  <span className={`min-w-0 flex-1 truncate text-sm ${m.unread ? "font-semibold text-[var(--app-fg)]" : "text-[color:var(--app-fg-muted)]"}`}>
                    {m.from}
                  </span>
                  {m.starred && <Star size={13} className="shrink-0 fill-[var(--oks-color-warning-500)] text-[var(--oks-color-warning-500)]" />}
                  <span className="shrink-0 text-[11px] text-[color:var(--app-fg-subtle)]">{m.time}</span>
                </div>
                <p className="truncate text-sm text-[var(--app-fg)]">{m.subject}</p>
                <p className="truncate text-xs text-[color:var(--app-fg-subtle)]">{m.preview}</p>
                {(m.label || m.attachments > 0) && (
                  <div className="mt-0.5 flex items-center gap-2">
                    {m.label && (
                      <Chip size="sm" variant="soft" color={labelTone(m.label)}>
                        {labelText(m.label)}
                      </Chip>
                    )}
                    {m.attachments > 0 && (
                      <span className="flex items-center gap-1 text-[11px] text-[color:var(--app-fg-subtle)]">
                        <Paperclip size={11} /> {m.attachments}
                      </span>
                    )}
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Reading pane */}
        <div className="hidden min-w-0 flex-1 flex-col sm:flex">
          <div className="border-b border-[color:var(--app-border)] p-4">
            <h2 className="text-lg font-semibold text-[var(--app-fg)]">{open.subject}</h2>
            <div className="mt-3 flex items-center gap-3">
              <PersonAvatar name={open.from} />
              <div className="min-w-0">
                <p className="text-sm font-medium text-[var(--app-fg)]">
                  {open.from} <span className="font-normal text-[color:var(--app-fg-subtle)]">&lt;{open.email}&gt;</span>
                </p>
                <p className="text-xs text-[color:var(--app-fg-muted)]">to me · {open.time}</p>
              </div>
            </div>
          </div>
          <div className="min-h-0 flex-1 overflow-y-auto p-4">
            <p className="whitespace-pre-line text-sm leading-relaxed text-[color:var(--app-fg-muted)]">
              {open.body}
            </p>
            {open.attachments > 0 && (
              <div className="mt-6 flex flex-wrap gap-3">
                {Array.from({ length: open.attachments }).map((_, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 rounded-[var(--oks-radius-lg)] border border-[color:var(--app-border)] px-3 py-2 text-sm text-[color:var(--app-fg-muted)]"
                  >
                    <Paperclip size={14} /> attachment-{i + 1}.pdf
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="flex items-center gap-2 border-t border-[color:var(--app-border)] p-3">
            <Button size="sm" variant="bordered" startContent={<Reply size={14} />}>Reply</Button>
            <Button size="sm" variant="bordered" startContent={<ReplyAll size={14} />}>Reply all</Button>
            <Button size="sm" variant="bordered" startContent={<Forward size={14} />}>Forward</Button>
          </div>
        </div>
      </Surface>
    </div>
  );
};

export default Email;
